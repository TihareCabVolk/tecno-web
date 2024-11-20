import { CommonModule } from '@angular/common';
import { Component, HostListener, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carrito } from '../../models/carrito';
import { CarritoService } from '../../services/carrito.service';
import { initFlowbite } from 'flowbite';
import { NavigationEnd, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CarritoListarComponent } from '../pay/carrito-listar.component';
import { ChangeDetectorRef } from '@angular/core';
import { VisibilidadElementosService } from '../../services/visibilidad-elementos.service';


@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    CommonModule,
    FormsModule,
    CarritoListarComponent,
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  public mostrar: boolean = true;
  public carritoService = inject(CarritoService);
  listCarrito: Carrito[] = [];
  private estadoService = inject(VisibilidadElementosService);
  constructor(public router: Router, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    initFlowbite();
    this.getListCarrito();

    this.carritoService.getObservableCarrito().subscribe((carrito) => {
      this.listCarrito = carrito; // Se actualiza automáticamente con cada cambio en el carrito
    });

    this.estadoService.mostrar$.subscribe((value) => {
      this.mostrar = value;
      console.log('Mostrar actualizado a:', this.mostrar);
      this.cdr.detectChanges(); // Fuerza la detección de cambios
    });
  }

  getListCarrito() {
    this.listCarrito = this.carritoService.getCarrito();
    // Emite la lista actualizada del carrito, Al inicio de la pagina se obtiene el listado MUY IMPORTANTE!
    this.carritoService['carritoSubject'].next(this.listCarrito);
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
