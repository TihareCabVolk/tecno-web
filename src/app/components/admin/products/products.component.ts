import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Products } from '../../../interfaces/Products';
import { WcdonaldsService } from '../../../services/wcdonalds.service';
import { Category } from '../../../interfaces/Category';
import { Subject, takeUntil } from 'rxjs';
import { ProductModalComponent } from "../product-modal/product-modal.component";

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, ProductModalComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit, OnDestroy {

  public products: Products[] = [];
  public filteredProducts: Products[] = [];
  public categories: Category[] = [];

  public filterForm!: FormGroup;

  private destroy$ = new Subject<void>(); // Para manejar las suscripciones
  
  public showModal = false;
  public selectedProduct: Products | null = null; // Producto seleccionado para editar
  public modalTitle = '';



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
  };

  public ngOnInit(): void {
    this.getCategories();
    this.getProducts();
  };

  public ngOnDestroy(): void {
    // Completa el Subject para desuscribirse de todas las suscripciones
    this.destroy$.next();
    this.destroy$.complete();
  };

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
  };

  private getCategories(): void {
    this.wdService.getAllCategories()
      .pipe(takeUntil(this.destroy$))
      .subscribe({
        next: (data) => {
          this.categories = data;
        },
      });
  };

  private applyFilters(): void {
    const searchTerm = this.filterForm.get('searchTerm')?.value.toLowerCase() || '';
    const selectedCategory = Number(this.filterForm.get('selectedCategory')?.value) || null;

    this.filteredProducts = this.products.filter((product) => {
      const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm);
      const matchesCategory = selectedCategory ? product.category_id === selectedCategory : true;
      return matchesSearchTerm && matchesCategory;
    });
  };

  public toggleAddProduct(): void {
    this.modalTitle = 'Agregar Producto';
    this.selectedProduct = null;
    this.showModal = true;
  };

  public toggleEditProduct(product: Products): void {
    this.modalTitle = 'Editar Producto';
    this.selectedProduct = product;
    this.showModal = true;
  };
  
  public handleSave(product: Products): void {
    if (this.selectedProduct) {
      // Editar producto
      this.wdService.updateProduct(product).pipe(takeUntil(this.destroy$)).subscribe(() => {
          this.getProducts();
          this.applyFilters();
        },
      );
    } else {
      // Agregar producto
      this.wdService.addProduct(
        product.name,
        product.category_id,
        product.price,
        product.description,
        product.img_url
      ).subscribe(() => {
        this.getProducts();
        this.applyFilters();
      });
    }
    this.showModal = false;
  };

  public handleCancel(): void {
    this.showModal = false;
  };

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
  };
}
