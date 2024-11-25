import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Product } from '../models/Products';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private http = inject(HttpClient);
  private url: string = 'json/productos.json';

  private productoSource = new BehaviorSubject<Product | null>(null);
  producto$ = this.productoSource.asObservable();

  setProducto(producto: Product) {
    this.productoSource.next(producto);
  }

  getProducto() {
    return this.productoSource.asObservable();
  }

  getProductos() {
    return this.http.get<Product[]>(this.url);
  }


}
