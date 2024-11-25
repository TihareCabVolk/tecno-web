import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Order } from '../interfaces/Orders/Order';
import { ProductsOrder } from '../interfaces/Orders/ProductOrder';

@Injectable({
  providedIn: 'root',
})


export class CarritoService {

  private cart!:Order;

  private carritoSubject = new BehaviorSubject<Order>(this.cart);

  // Observable para recibir actualizaciones en tiempo real
  getObservableCarrito() {
    this.obtenerSession(); // Cargar el carrito desde la sesión
    return this.carritoSubject.asObservable();
  }

  // Método para obtener el carrito directamente
  getCarrito(): Order {
    this.obtenerSession();
    return this.cart;
  }

  // Método para agregar producto al carrito
  agregar(producto: ProductsOrder) {
    const index = this.cart.products.findIndex(
      (item) => item.product_id === producto.product_id
    );

    if (index === -1) {
      const newProduct: ProductsOrder = {
        ...producto,
        quantity: 1,
        addons: producto.addons || [],
      };

      this.cart.products.push(newProduct);
    } else {
      this.cart.products[index].quantity += 1;
    }

    this.actualizarTotal();
    this.carritoSubject.next(this.cart);
  }

  // Método para recalcular el total del carrito
  private actualizarTotal() {
    this.cart.total_price = this.cart.products.reduce(
      (sum, product) => sum + product.price * product.quantity + this.calcularAddons(product),
      0
    );
  }

  // Método para calcular el costo adicional de los addons
  calcularAddons(product: ProductsOrder): number {
    return product.addons.reduce((acc, addon) => acc + addon.additional_cost * addon.quantity, 0);
  }

  // Actualizar cantidad de un producto
  actualizar(index: number, cantidad: number) {
    if (index >= 0 && index < this.cart.products.length) {
      this.cart.products[index].quantity = cantidad;

      if (cantidad === 0) {
        this.eliminar(index);
      } else {
        this.actualizarTotal();
        this.carritoSubject.next(this.cart);
      }
    }
  }

  // Eliminar un producto del carrito
  eliminar(index: number) {
    if (index >= 0 && index < this.cart.products.length) {
      this.cart.products.splice(index, 1);
      this.actualizarTotal();
      this.carritoSubject.next(this.cart);
    }
  }

  // Guardar el carrito en la sesión
  guardarSession() {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        localStorage.setItem('cart', JSON.stringify(this.cart));
      }
    } catch (e) {
      console.error('Error al guardar el carrito en localStorage:', e);
    }
  }

  // Obtener el carrito desde la sesión
  obtenerSession() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const storedCart = localStorage.getItem('cart');
      
      if (storedCart) {
        this.cart = JSON.parse(storedCart);
        this.carritoSubject.next(this.cart);
      }
    }
  }
}
