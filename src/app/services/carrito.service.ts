import { Injectable } from '@angular/core';
import { Carrito } from '../models/carrito';
import { Productos } from '../productos';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {
  private listCarrito: Carrito[] = [];

  getCarrito() {
    return this.listCarrito;
  }
  agregar(producto: Productos, cantidad: number = 1) {
    const index = this.listCarrito.findIndex(item => item.producto.id == producto.id);

    if (index == -1) {
      const item = new Carrito(producto, cantidad);
      this.listCarrito.push(item);
    } else {
      this.actualizar(index, this.listCarrito[index].cantidad + cantidad);
    }

  }
  actualizar(index: number, cantidad: number) {
    if (index >= 0 && index < this.listCarrito.length) {
      this.listCarrito[index].cantidad = cantidad;
    }
  }
  cantidad() {
    return this.listCarrito.length;
  }
  total() {
    const total = this.listCarrito.reduce((sum, item) =>
      sum + item.producto.precio * item.cantidad, 0
    );
    return total;
  }
}
