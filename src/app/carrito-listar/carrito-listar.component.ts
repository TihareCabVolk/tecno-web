import { Component, inject } from '@angular/core';
import { CarritoService } from '../services/carrito.service';
import { Carrito } from '../models/carrito';
import { CommonModule, NgClass } from '@angular/common';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-carrito-listar',
  standalone: true,
  imports: [NgClass, NgFor, NgIf],
  templateUrl: './carrito-listar.component.html',
  styleUrls: ['./carrito-listar.component.scss']
})
export class CarritoListarComponent {
  public carritoService = inject(CarritoService);
  listCarrito: Carrito[] = [];

  ngOnInit(): void {
    this.getListCarrito();
  }
  getListCarrito() {
    this.listCarrito = this.carritoService.getCarrito();
  }

}
