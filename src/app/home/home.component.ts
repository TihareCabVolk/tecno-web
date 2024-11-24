import { Component, inject, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Products } from '../models/Products';
import { CommonModule } from '@angular/common';
import { NgClass } from '@angular/common';
import { NgFor } from '@angular/common';
import { CarritoService } from '../services/carrito.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgClass, NgFor, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  private productoService = inject(ProductoService);
  private carritoServive = inject(CarritoService);
  productos: Products[] = [];
  ngOnInit(): void {
    this.getProducto();
  }
  getProducto() {
    this.productoService.getProductos().subscribe({
      next: (data) => {
        this.productos = data;
        console.log(this.productos);
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
  agregarProducto(item: Products) {
    this.carritoServive.agregar(item);
  }
}
