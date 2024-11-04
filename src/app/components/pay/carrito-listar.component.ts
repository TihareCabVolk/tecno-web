import { Component, inject, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Carrito } from '../../models/carrito';
import { CommonModule, NgClass, NgFor } from '@angular/common';
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

  public botonDelivery: boolean = true;
  public botonRetiro: boolean = true;

  public isModalVisible: boolean = false;

  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Input() deliveryVisible: boolean = false;
  @Input() retiroVisible: boolean = false;



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

  // Se hace visible la ventana para la forma de retiro del pedido o delivery
  showModal(): boolean {
    return this.isModalVisible = true;
  }

  // Se hace invisible la ventana para la forma de retiro del pedido o delivery
  hideModal(): boolean {
    return this.isModalVisible = false;
  }

  // Se hace visible el contenido del Delivery y se hace inaccesible el boton Retiro en Tienda
  deliveryShow(): boolean {
    if (this.deliveryVisible == false) { this.botonDelivery = !this.botonDelivery; return this.deliveryVisible = true }
    else this.botonDelivery = !this.botonDelivery; return this.deliveryVisible = false;
  }

  // Se hace visible el contenido del Retiro en tienda y se hace inaccesible el boton Delivery
  retiroShow(): boolean {
    if (this.retiroVisible == false) { this.botonRetiro = !this.botonRetiro; return this.retiroVisible = true }
    else this.botonRetiro = !this.botonRetiro; return this.retiroVisible = false;
  }
}
