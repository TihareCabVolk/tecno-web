import {
  Component,
  inject,
  Input,
  Output,
  OnInit,
  EventEmitter,
} from '@angular/core';
import { CarritoService } from '../../services/carrito.service';
import { Carrito } from '../../models/carrito';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { NavbarComponent } from '../navbar/navbar.component';
import { VisibilidadElementosService } from '../../services/visibilidad-elementos.service';
import { CuponesService } from '../../services/cupones.service';
import { Cupon } from '../../models/cupon';

@Component({
  selector: 'app-cart-listar',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './carrito-listar.component.html',
  styleUrl: './carrito-listar.component.scss',
})
export class CarritoListarComponent implements OnInit {
  public carritoService = inject(CarritoService);
  private estadoService = inject(VisibilidadElementosService);
  public cuponesService = inject(CuponesService);

  public listCarrito: Carrito[] = [];
  public listaCupones: Cupon[] = [];

  public botonDelivery: boolean = true;
  public botonRetiro: boolean = true;
  public isModalVisible: boolean = false;

  public descuento: number = 0;
  public codigooCupon: string = ''; // Variable para almacenar el código del cupon

  @Input() isVisible: boolean = false;
  @Output() close = new EventEmitter<void>();
  @Input() deliveryVisible: boolean = false;
  @Input() retiroVisible: boolean = false;

  //Metodos iniciales
  ngOnInit(): void {
    initFlowbite();
    this.getListCarrito();
    this.cuponesService.getCupon();
    this.estadoService.setMostrar(false);
  }

  verificar(codeCupon: string) {
    this.listaCupones = this.cuponesService.getCupon(); // Obtener la lista de cupones

    // Buscar el cupón con el código proporcionado
    const cuponEncontrado = this.listaCupones.find(
      (item) => item.codigo === codeCupon
    );

    if (cuponEncontrado) {
      const fechaActual = new Date();
      const fechaInicio = new Date(cuponEncontrado.fechaInicio);
      const fechaTermino = new Date(cuponEncontrado.fechaTermino);

      if (fechaInicio <= fechaActual && fechaTermino >= fechaActual) {
        this.descuento = cuponEncontrado.descuento; // Aplicar el descuento
      } else {
        alert('El cupón ingresado no es válido en la fecha actual.');
        this.descuento = 0;
      }
    } else {
      alert('El cupón ingresado no existe.');
      this.descuento = 0;
    }
  }

  reseteo() {
    this.descuento = 0;
  }
  //Obetener la lista de carrito
  getListCarrito() {
    this.listCarrito = this.carritoService.getCarrito();
  }
  //Eliminar un item
  eliminarItem(index: number) {
    this.carritoService.eliminar(index);
    this.getListCarrito();
  }
  //Actuazar un item
  actualizar(item: Carrito, index: number) {
    this.carritoService.actualizar(index, item.cantidad);
  }

  item = { cantidad: 1 };
  //incrementa el valor de la flecha derecha y actualiza el valor
  incrementar(item: Carrito, index: number) {
    item.cantidad += 1;
    this.actualizar(item, index);
  }
  //incrementa el valor de la flecha izquierda y actualiza el valor
  decrementar(item: Carrito, index: number) {
    if (item.cantidad > 1) {
      item.cantidad -= 1;
      this.actualizar(item, index);
    }
  }

  //Apartado de ubicacion

  // Se hace visible la ventana para la forma de retiro del pedido o delivery
  showModal(): boolean {
    return (this.isModalVisible = true);
  }

  // Se hace invisible la ventana para la forma de retiro del pedido o delivery
  hideModal(): boolean {
    return (this.isModalVisible = false);
  }

  // Se hace visible el contenido del Delivery y se hace inaccesible el boton Retiro en Tienda
  deliveryShow(): boolean {
    if (this.deliveryVisible == false) {
      this.botonDelivery = !this.botonDelivery;
      return (this.deliveryVisible = true);
    } else this.botonDelivery = !this.botonDelivery;
    return (this.deliveryVisible = false);
  }

  // Se hace visible el contenido del Retiro en tienda y se hace inaccesible el boton Delivery
  retiroShow(): boolean {
    if (this.retiroVisible == false) {
      this.botonRetiro = !this.botonRetiro;
      return (this.retiroVisible = true);
    } else this.botonRetiro = !this.botonRetiro;
    return (this.retiroVisible = false);
  }
}
