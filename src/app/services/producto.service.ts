import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Products } from '../models/Products';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {
  private http = inject(HttpClient);
  private url: string = 'json/productos.json';

  getProductos() {
    return this.http.get<Products[]>(this.url);
  }
}
