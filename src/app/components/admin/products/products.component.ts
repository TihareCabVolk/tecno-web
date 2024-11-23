import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Products } from '../../../interfaces/Products';
import { WcdonaldsService } from '../../../services/wcdonalds.service';
import { Category } from '../../../interfaces/Category';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy {
  public products: Products[] = []; // Todos los productos originales
  public filteredProducts: Products[] = []; // Productos filtrados dinámicamente
  public categories: Category[] = [];

  public filterForm!: FormGroup;
  public addProductForm!: FormGroup; // Formulario para agregar producto
  public editProductForm!: FormGroup; // Formulario para editar producto

  public showAddProductForm = false; // Controla la visibilidad del modal
  public showEditProductForm = false; // Controla la visibilidad del modal de editar producto

  public selectedProduct: Products | null = null; // Producto seleccionado para editar

  private destroy$ = new Subject<void>(); // Para manejar las suscripciones

  constructor(private wdService: WcdonaldsService) {
    // Formulario de filtros
    this.filterForm = new FormGroup({
      searchTerm: new FormControl(''),
      selectedCategory: new FormControl(''),
    });

    // Detectar cambios en filtros
    this.filterForm.valueChanges.pipe(takeUntil(this.destroy$)).subscribe(() => {
      this.applyFilters();
    });

    // Formulario de agregar producto
    this.addProductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category_id: new FormControl('', Validators.required),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      description: new FormControl('', Validators.required),
      img_url: new FormControl('', Validators.required),
    });

    // Formulario de editar producto
    this.editProductForm = new FormGroup({
      name: new FormControl('', Validators.required),
      category_id: new FormControl('', Validators.required),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      description: new FormControl('', Validators.required),
      img_url: new FormControl('', Validators.required),
    });
  }

  public ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  }

  public ngOnDestroy(): void {
    // Completa el Subject para desuscribirse de todas las suscripciones
    this.destroy$.next();
    this.destroy$.complete();
  }

  private getProducts(): void {
    this.wdService.getAllProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data: Products[]) => {
          this.products = data;
          this.filteredProducts = data; // Inicializamos los productos filtrados
        },
        error: (err) => {
          console.error('Error al obtener los productos:', err.message);
        },
      });
  }

  private getCategories(): void {
    this.wdService.getAllCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.categories = data;
        },
      });
  }

  private applyFilters(): void {
    const searchTerm = this.filterForm.get('searchTerm')?.value.toLowerCase() || '';
    const selectedCategory = Number(this.filterForm.get('selectedCategory')?.value) || null;

    this.filteredProducts = this.products.filter((product) => {
      const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm);
      const matchesCategory = selectedCategory ? product.category_id === selectedCategory : true;
      return matchesSearchTerm && matchesCategory;
    });
  }

  public toggleAddProductForm(): void {
    this.showAddProductForm = !this.showAddProductForm;
    if (!this.showAddProductForm) {
      // Resetear el formulario con valores predeterminados
      this.addProductForm.reset({
        name: '',
        category_id: '', // Cambia esto al valor predeterminado si es necesario
        price: 0,
        description: '',
        img_url: ''
      });
    }
  }

  public toggleEditProductForm(): void {
    this.showEditProductForm = !this.showEditProductForm;
    if (!this.showEditProductForm) {
      this.selectedProduct = null;
    }
  }

  public addProduct(): void {
    if (this.addProductForm.invalid) {
      alert('Por favor completa todos los campos requeridos.');
      return;
    }

    const { name, category_id, price, description, img_url } = this.addProductForm.value;

    this.wdService.addProduct(name, category_id, price, description, img_url)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.getProducts();
          this.toggleAddProductForm();
        },
        error: (err) => {
          console.error('Error al agregar el producto:', err.message);
        },
      });
  }

  public editProduct(product: Products | null): void {
    if (!product) return;

    this.selectedProduct = product;
    this.editProductForm.patchValue({
      name: product.name,
      category_id: product.category_id,
      price: product.price,
      description: product.description,
      img_url: product.img_url,
    });
    this.showEditProductForm = true;
  }

  public saveEditedProduct(): void {
    if (this.editProductForm.invalid) return;

    const updatedProduct: Products = {
      ...this.selectedProduct!,
      ...this.editProductForm.value,
    };

    this.wdService.updateProduct(updatedProduct)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.getProducts();
          this.applyFilters();
          this.showEditProductForm = false;
        },
      });
  }

  public deleteProduct(product_id: number): void {
    this.wdService.deleteProduct(product_id)
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: () => {
          this.products = this.products.filter(product => product.product_id !== product_id);
          this.applyFilters();
        },
        error: (err) => {
          console.error('Error al eliminar el producto:', err);
        },
      });
  }
}
