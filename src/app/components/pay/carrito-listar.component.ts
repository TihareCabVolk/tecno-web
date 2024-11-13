import { Component, inject, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Carrito } from '../../models/carrito';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from '../navbar/navbar.component';
import { VisibilidadElementosService } from '../../services/visibilidad-elementos.service';
import { trigger, transition, style, animate } from '@angular/animations'

import { AfterViewInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-cart-listar',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './carrito-listar.component.html',
  styleUrl: './carrito-listar.component.scss',
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-100%)' }),
        animate('300ms 0ms ease-in', style({ opacity: 1, transform: 'translateY(0)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0, transform: 'translateY(-100%)' }))
      ])
    ])
  ]
})
export class CarritoListarComponent implements OnInit {
  public carritoService = inject(CarritoService);
  public listCarrito: Carrito[] = [];
  private estadoService = inject(VisibilidadElementosService);

  public botonDelivery: boolean = true;
  public botonRetiro: boolean = true;

  public isModalVisible: boolean = false;
  public isVisiblePago: boolean = false;

  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Input() deliveryVisible: boolean = false;
  @Input() retiroVisible: boolean = false;

  public ngOnInit(): void {
    initFlowbite();
    this.getListCarrito();
    this.estadoService.setMostrar(false);
  }

  public getListCarrito() {
    this.listCarrito = this.carritoService.getCarrito();
  }

  public eliminarItem(index: number) {
    this.carritoService.eliminar(index);
    this.getListCarrito();
  }

  public actualizar(item: Carrito, index: number) {
    this.carritoService.actualizar(index, item.cantidad);
  }

  public onKeyDown(event: any) {
    event.preventDefault();
  }

  item = { cantidad: 1 };

  public incrementar(item: Carrito, index: number) {
    item.cantidad += 1;
    this.actualizar(item, index);
  }

  public decrementar(item: Carrito, index: number) {
    if (item.cantidad > 1) {
      item.cantidad -= 1;
      this.actualizar(item, index);
    }
  }

  // Se hace visible la ventana para la forma de retiro del pedido o delivery
  public showModal(): boolean {
    return this.isModalVisible = true;
  }

  // Se hace invisible la ventana para la forma de retiro del pedido o delivery
  public hideModal(): boolean {
    return this.isModalVisible = false;
  }

  // Cerrar la ventana flotante con un click fuera de ella
  public cerrarModalConClick(event: MouseEvent): boolean {
    if (event.target === event.currentTarget) { return this.isModalVisible = false }
    return this.isModalVisible
  }

  // Se hace visible el contenido del Delivery y se hace inaccesible el boton Retiro en Tienda
  public deliveryShow(): boolean {
    if (this.deliveryVisible == false) { this.botonDelivery = !this.botonDelivery; return this.deliveryVisible = true }
    else this.botonDelivery = !this.botonDelivery; return this.deliveryVisible = false;
  }

  // Se hace visible el contenido del Retiro en tienda y se hace inaccesible el boton Delivery
  public retiroShow(): boolean {
    if (this.retiroVisible == false) { this.botonRetiro = !this.botonRetiro; return this.retiroVisible = true }
    else this.botonRetiro = !this.botonRetiro; return this.retiroVisible = false;
  }

  public metodoPagoVisible(): boolean {
    return this.isVisiblePago = true;
  }

  public metodoPagoNoVisible(): boolean {
    return this.isVisiblePago = false;
  }

}
