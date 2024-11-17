import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { CategoryComponent } from "../../components/category/category.component";
import { ProductsComponent } from "../../components/products/products.component";
import { WcdonaldsService } from '../../services/wcdonalds.service';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { Products } from '../../interfaces/Products';
import { FooterComponent } from "../../components/footer/footer.component";

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CategoryComponent, ProductsComponent, FooterComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent implements OnInit{

  public products!: Products[];
  private category_id!: number;

  constructor(private wdService: WcdonaldsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('category_id');
      
      if (id) {
        this.category_id = +id; // Convertir el ID a número
        this.getProductsByCategory(this.category_id);
      } else {
        console.error('Category ID not found in route');
      }
    });
  }

  // Método para obtener los productos por categoría
  getProductsByCategory(categoryId: number): void {
    this.wdService.getProductsByCategory(categoryId).subscribe({
      next: (data: Products[]) => {
        this.products = data;
      },
      error: (err) => {
        console.error('Error al obtener los productos:', err.message);
      }
    });
  }

}
