import { Products } from './Products';

export class Carrito {
  producto!: Products;
  cantidad!: number;

  constructor(producto: Products, cantidad: number = 1) {
    this.producto = producto;
    this.cantidad = cantidad;
  }
}
