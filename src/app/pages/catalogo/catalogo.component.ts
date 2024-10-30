import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { CategoryComponent } from "../../components/category/category.component";
import { ProductsComponent } from "../../components/products/products.component";
import { Product } from '../../models/Products';
import { Category } from '../../models/Category';
import { WcdonaldsService } from '../../services/wcdonalds.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, NavbarComponent, CategoryComponent, ProductsComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent implements OnInit {
  
    constructor(private wdService: WcdonaldsService){}

    public products:Product[]=[];
    public categories:Category[]=[];

    public selectedCategory: number = 1;

    // Método que recibe el ID de categoría desde el hijo
    onCategorySelected(id: number) {
      this.selectedCategory = id;
      this.wdService.loadAllProducts().subscribe(data =>{
        this.products = data.filter(p => p.category_id == this.selectedCategory);
      });
    }

    public ngOnInit(): void {
      this.wdService.loadAllProducts().subscribe(data =>{
        this.products = data.filter(p => p.category_id == this.selectedCategory);
      });

      this.wdService.loadAllCategory().subscribe(data =>{
        this.categories = data;
      })
    }
}
