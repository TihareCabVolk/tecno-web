import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Order } from '../../interfaces/Orders/Order';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  public carrito: Order = {
    order_id: null,
    user_id: null,
    date: null,
    total_price: 0,
    products: []
  }; // Inicializado para evitar errores
  show: boolean = false;

  constructor(public cartUser: CarritoService) {}

  ngOnInit(): void {
    
    this.cartUser.getObservableCarrito().subscribe((cart) => {
      this.carrito = cart;
    });
  }

  public toggleCart(): void {
    this.show = !this.show;
  }

  @HostListener('document:click', ['$event'])
  public onClickOutside(event: Event): void {
    const target = event.target as HTMLElement;
    const isInsideButton = target.closest('button')?.contains(target);
    const isInsideDropdown = target.closest('.relative')?.contains(target);

    if (!isInsideButton && !isInsideDropdown) {
      this.show = false;
    }
  }

  // Método para aumentar la cantidad de un producto
  public aumentarCantidad(index: number): void {
    const producto = this.carrito.products[index];
    this.cartUser.actualizar(index, producto.quantity + 1);
  }

  // Método para disminuir la cantidad de un producto
  public disminuirCantidad(index: number): void {
    const producto = this.carrito.products[index];
    if (producto.quantity > 1) {
      this.cartUser.actualizar(index, producto.quantity - 1);
    } else {
      this.eliminarProducto(index);
    }
  }

  // Método para eliminar un producto
  public eliminarProducto(index: number): void {
    this.cartUser.eliminar(index);
  }
}
