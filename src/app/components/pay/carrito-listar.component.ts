import { Component, inject, Input, OnInit } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Carrito } from '../../models/carrito';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from '../navbar/navbar.component';
import { VisibilidadElementosService } from '../../services/visibilidad-elementos.service';

@Component({
  selector: 'app-cart-listar',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './carrito-listar.component.html',
  styleUrl: './carrito-listar.component.scss',
})
export class CarritoListarComponent implements OnInit {
  public carritoService = inject(CarritoService);
  public listCarrito: Carrito[] = [];
  private estadoService = inject(VisibilidadElementosService);

  ngOnInit(): void {
    initFlowbite();
    this.getListCarrito();
    this.estadoService.setMostrar(false);
  }

  getListCarrito() {
    this.listCarrito = this.carritoService.getCarrito();
  }

  eliminarItem(index: number) {
    this.carritoService.eliminar(index);
    this.getListCarrito();
  }

  actualizar(item: Carrito, index: number) {
    this.carritoService.actualizar(index, item.cantidad);
  }

  onKeyDown(event: any) {
    event.preventDefault();
  }

  item = { cantidad: 1 };

  incrementar(item: Carrito, index: number) {
    item.cantidad += 1;
    this.actualizar(item, index);
  }

  decrementar(item: Carrito, index: number) {
    if (item.cantidad > 1) {
      item.cantidad -= 1;
      this.actualizar(item, index);
    }
  }
}