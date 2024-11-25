import { Product } from '../interfaces/Products';

export class Carrito {
  producto!: Product;
  cantidad!: number;

  constructor(producto: Product, cantidad: number = 1) {
    this.producto = producto;
    this.cantidad = cantidad;
  }
}
