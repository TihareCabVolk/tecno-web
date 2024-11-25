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
import { AuthService } from '../../services/auth.service';
import { Cupon } from '../../models/cupon';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-cart-listar',
  standalone: true,
  imports: [CommonModule, FormsModule, NavbarComponent],
  templateUrl: './carrito-listar.component.html',
  styleUrl: './carrito-listar.component.scss',
})
export class CarritoListarComponent implements OnInit {
  constructor(
    private baseDatos: AuthService,
    public carritoService: CarritoService
  ) {}

  public listCarrito: Carrito[] = [];

  public botonDelivery: boolean = true;
  public botonRetiro: boolean = true;
  public isModalVisible: boolean = false;

  public isVisibleMetodoPago: boolean = false;
  public isVisiblePago: boolean = false;

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
    this.getCupones();
  }

  public cupones: Cupon[] = [];
  //Obtener cupones
  private getCupones(): void {
    this.baseDatos.getAllCupones().subscribe({
      next: (data: Cupon[]) => {
        console.log('Cupones obtenidos:', data);
        this.cupones = data;
      },
      error: (err) => {
        console.error('Error al obtener los cupones:', err.message);
      },
    });

    console.log('Lista de cupones', this.cupones);
  }

  //obtener lista de cupones
  verificar(codeCupon: string) {
    // Buscar el cupón con el código proporcionado
    const cuponEncontrado = this.cupones.find(
      (item) => item.codigo === codeCupon
    );

    if (cuponEncontrado) {
      const fechaActual = new Date();
      const fechaInicio = new Date(cuponEncontrado.fecha_inicio);
      const fechaTermino = new Date(cuponEncontrado.fecha_termino);

      if (fechaInicio <= fechaActual && fechaTermino >= fechaActual) {
        this.descuento = cuponEncontrado.descuento;
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
  //Obtener la lista de carrito
  getListCarrito() {
    this.listCarrito = this.carritoService.getCarrito();
    console.log(this.listCarrito);
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

  public metodoPagoVisible(): boolean {
    return (this.isVisibleMetodoPago = true);
  }

  public metodoPagoNoVisible(): boolean {
    return (this.isVisibleMetodoPago = false);
  }

  //Aca tendria que obtener el user_id y darselo
  public pagoVisible(): void {
    const total =
      this.carritoService.total() * 100 -
      this.carritoService.total() * 100 * (this.descuento / 100);

    // Agregar la orden principal
    this.baseDatos.addOrder('2024-11-24', total, 2).subscribe({
      next: () => {
        // Obtener el ID de la última orden agregada
        this.baseDatos.getUltima().subscribe({
          next: (ultimaOrdenId: number) => {
            console.log('Última orden ID:', ultimaOrdenId);

            // Guardar la orden relacional para cada elemento del carrito
            const observables = this.listCarrito.map((item) =>
              this.baseDatos.addOrderRelacion(
                ultimaOrdenId,
                item.producto.product_id,
                item.cantidad
              )
            );

            // Esperar a que todas las órdenes relacionales se completen
            forkJoin(observables).subscribe({
              next: () => {
                console.log('Todas las órdenes relacionales fueron agregadas.');
                this.isVisiblePago = true; // Solo ahora actualizamos el estado
              },
              error: (err) => {
                console.error(
                  'Error al agregar las órdenes relacionales:',
                  err
                );
              },
            });
          },
          error: (err) => {
            console.error('Error al obtener la última orden:', err.message);
          },
        });
      },
      error: (err) => {
        console.error('Error al agregar la orden principal:', err.message);
      },
    });
  }

  public pagoNoVisible(): boolean {
    this.isModalVisible = false;
    return (this.isVisiblePago = false);
  }

  // Cerrar la ventana flotante con un click fuera de ella
  public cerrarModalConClick(event: MouseEvent): boolean {
    if (event.target === event.currentTarget) {
      return (this.isModalVisible = false);
    }
    return this.isModalVisible;
  }
}
