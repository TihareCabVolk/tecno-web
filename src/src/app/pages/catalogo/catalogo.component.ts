import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../../components/category/category.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { ProductsComponent } from '../../components/products/products.component';
import { Product } from '../../interfaces/Products';
import { Category } from '../../interfaces/category';
import { WcdonaldsService } from '../../services/wcdonalds.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [
    CommonModule,
    CategoryComponent,
    ProductsComponent,
    NavbarComponent,
  ],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss',
})
export class CatalogoComponent implements OnInit {
  constructor(private wdService: WcdonaldsService) {}

  public products: Product[] = [];
  public categories: Category[] = [];

  public selectedCategory: number = 1;

  // Método que recibe el ID de categoría desde el hijo
  onCategorySelected(id: number) {
    this.selectedCategory = id;
    this.wdService.loadAllProducts().subscribe((data) => {
      this.products = data.filter(
        (p) => p.category_id == this.selectedCategory
      );
    });
  }

  public ngOnInit(): void {
    this.wdService.loadAllProducts().subscribe((data) => {
      this.products = data.filter(
        (p) => p.category_id == this.selectedCategory
      );
    });

    this.wdService.loadAllCategory().subscribe((data) => {
      this.categories = data;
    });
  }
}
