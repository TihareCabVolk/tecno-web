import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Carrito } from '../models/carrito';
import { Products } from '../models/Products';

@Injectable({
  providedIn: 'root',
})
export class CarritoService {
  private listCarrito: Carrito[] = [];
  private carritoSubject = new BehaviorSubject<Carrito[]>(this.listCarrito); // Observable para los cambios en el carrito

  // Observable para que los componentes reciban actualizaciones en tiempo real
  getObservableCarrito() {
    this.obtenerSession();
    return this.carritoSubject.asObservable();
  }

  // Método sin Observable para obtener el carrito directamente
  getCarrito(): Carrito[] {
    this.obtenerSession();
    return this.listCarrito;
  }

  agregar(producto: Products, cantidad: number = 1) {
    this.obtenerSession();
    //si existe aumenta el valor
    const index = this.listCarrito.findIndex(
      (item) => item.producto.product_id === producto.product_id
    );

    //no existe
    if (index === -1) {
      const item = new Carrito(producto, cantidad);
      this.listCarrito.push(item);
    }
    //Si existe y actualiza
    else {
      this.actualizar(index, this.listCarrito[index].cantidad + cantidad);
    }
    this.carritoSubject.next(this.listCarrito); // Emite el carrito actualizado
    this.guardarSession();
  }

  actualizar(index: number, cantidad: number) {
    //posicion valida, que esta en el rango de la lista
    if (index >= 0 && index < this.listCarrito.length) {
      this.listCarrito[index].cantidad = cantidad;
      this.carritoSubject.next(this.listCarrito);
      this.guardarSession();
    }
  }

  cantidad() {
    this.obtenerSession();
    return this.listCarrito.length;
  }

  total() {
    const total = this.listCarrito.reduce(
      (sum, item) => sum + item.producto.price * item.cantidad,
      0
    );
    return total;
  }

  eliminar(index: number) {
    if (index >= 0 && index < this.listCarrito.length) {
      this.listCarrito.splice(index, 1);
      this.carritoSubject.next(this.listCarrito);
      this.guardarSession();
    }
  }

  guardarSession() {
    localStorage.setItem('cart', JSON.stringify(this.listCarrito));
  }

  obtenerSession() {
    this.listCarrito = [];

    if (typeof window != 'undefined' && window.localStorage) {
      const cart = localStorage.getItem('cart');
      if (cart != null) {
        this.listCarrito = JSON.parse(cart);
      }
    }
  }
}
