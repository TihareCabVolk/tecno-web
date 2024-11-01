import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { CommonModule } from '@angular/common';
import { CategoryComponent } from "../../components/category/category.component";
import { ProductsComponent } from "../../components/products/products.component";
import { Product } from '../../models/Products';
import { Category } from '../../models/Category';
import { WcdonaldsService } from '../../services/wcdonalds.service';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule,RouterOutlet, NavbarComponent, CategoryComponent, ProductsComponent],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.scss'
})
export class CatalogoComponent implements OnInit {
  public products: Product[] = [];
  public categories: Category[] = [];
  private categoryId!: number;
  private destroy$ = new Subject<void>();

  constructor(private wdService: WcdonaldsService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(takeUntil(this.destroy$))
      .subscribe(params => {
        const id = params.get('id');
        this.categoryId = id ? +id : 0;
        this.loadProductsByCategory();
      });

    this.wdService.loadAllCategory()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.categories = data;
      });
  }

  private loadProductsByCategory(): void {
    this.wdService.loadAllProducts()
      .pipe(takeUntil(this.destroy$))
      .subscribe(data => {
        this.products = data.filter(p => p.categoryId === this.categoryId);
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
