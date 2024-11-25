import {
  Component,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarritoService } from '../../services/carrito.service';
import { Order } from '../../interfaces/Orders/Order';
import { BtnTextProductComponent } from "../btn-text-product/btn-text-product.component";


@Component({
  selector: 'app-cart-listar',
  standalone: true,
  imports: [CommonModule, NavbarComponent, FormsModule, BtnTextProductComponent],
  templateUrl: './carrito-listar.component.html',
  styleUrl: './carrito-listar.component.scss',
})
export class CarritoListarComponent{
  public carrito: Order = {order_id:null,user_id:null, date:null,  products: [], total_price: 0 }; // Inicializamos con un valor vacío.

  constructor(private carritoService: CarritoService) {}

  ngOnInit(): void {
    // Suscribirse al observable para sincronizar el carrito
    this.carritoService.getObservableCarrito().subscribe({
      next: (carrito) => {
        this.carrito = carrito;
      },
      error: (err) => {
        console.error('Error al obtener el carrito:', err);
      },
    });
  }

  // Métodos para manejar acciones desde el HTML
  eliminarProducto(index: number): void {
    this.carritoService.eliminar(index);
  }

  actualizarCantidad(index: number, cantidad: number): void {
    if (cantidad > 0) {
      this.carritoService.actualizar(index, cantidad);
    } else {
      this.eliminarProducto(index); // Eliminar si la cantidad es 0
    }
  }
}
