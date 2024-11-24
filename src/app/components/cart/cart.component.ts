import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrito } from '../../models/carrito';
import { CarritoService } from '../../services/carrito.service';
import { initFlowbite } from 'flowbite';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink, CommonModule, FormsModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  public mostrar: boolean = true;
  public carritoService = inject(CarritoService);
  listCarrito: Carrito[] = [];
  constructor(public router: Router, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    initFlowbite();
    this.getListCarrito();

    this.carritoService.getObservableCarrito().subscribe((carrito) => {
      this.listCarrito = carrito; // Se actualiza automáticamente con cada cambio en el carrito
    });
  }

  getListCarrito() {
    this.listCarrito = this.carritoService.getCarrito();
    // Emite la lista actualizada del carrito, Al inicio de la pagina se obtiene el listado MUY IMPORTANTE!
    this.carritoService['carritoSubject'].next(this.listCarrito);
    console.log(this.listCarrito);
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
