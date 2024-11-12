import { Component, inject, OnInit } from '@angular/core';
import { CommonModule, NgClass, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { initFlowbite } from 'flowbite';
import { VisibilidadElementosService } from '../../services/visibilidad-elementos.service';
import { CuponesService } from '../../services/cupones.service';
import { Cupon } from '../../models/cupon';
@Component({
  selector: 'app-coupons',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './coupons.component.html',
  styleUrl: './coupons.component.scss',
})
export class CouponsComponent implements OnInit {
  //Variables con ngModel
  nombreCupon: string = '';
  descuentoCupon: number = 0;
  fechaInicio: string = '';
  fechaTermino: string = '';
  imagenCupon: string = '';
  categoria: string = '';

  //Cupon
  public cuponesService = inject(CuponesService);
  public listaCupones: Cupon[] = [];
  private estadoService = inject(VisibilidadElementosService);

  public isModalVisible: boolean = false;

  //Metodos iniciales
  ngOnInit(): void {
    initFlowbite();
    this.getlistaCupones();
    this.estadoService.setMostrar(false);
  }

  //Obetener la lista de carrito
  getlistaCupones() {
    this.listaCupones = this.cuponesService.getCupon();
    console.log(this.fechaInicio);
    console.log(this.listaCupones);
  }
  //Eliminar un item
  eliminarItem(index: number) {
    this.cuponesService.eliminar(index);
    this.getlistaCupones();
  }

  //Actuazar un item
  actualizar(item: Cupon, campo: string, event: Event, index: number) {
    const element = event.target as HTMLInputElement;

    // Actualiza el campo correspondiente en el item
    if (campo === 'nombre') {
      const nuevoValor = element.innerText.trim();
      item.nombre = nuevoValor;
    } else if (campo === 'descuento') {
      const nuevoValor = element.innerText.trim();
      const descuentoNumerico = parseInt(nuevoValor.replace('%', ''), 10);
      item.descuento = !isNaN(descuentoNumerico)
        ? descuentoNumerico
        : item.descuento;
    } else if (campo === 'fechaInicio') {
      const nuevoValor = element.value.trim();
      item.fechaInicio = nuevoValor;
    } else if (campo === 'fechaTermino') {
      const nuevoValor = element.value.trim();
      item.fechaTermino = nuevoValor;
    }

    this.cuponesService.actualizar(
      index,
      item.nombre,
      item.descuento,
      item.fechaInicio,
      item.fechaTermino
    );

    console.log(item.descuento);
    console.log(this.listaCupones);
  }

  agregarProducto(
    nombre: string,
    descuento: number,
    fechaInicio: string,
    fechaTermino: string,
    image_url: string
  ) {
    // Método que genera un código aleatorio con números y letras de largo 15

    const caracteres =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';

    // Generar código aleatorio de largo 15
    for (let i = 0; i < 15; i++) {
      const aleatorio = Math.floor(Math.random() * caracteres.length);
      codigo += caracteres.charAt(aleatorio);
    }

    this.cuponesService.agregar(
      codigo,
      nombre,
      descuento,
      fechaInicio,
      fechaTermino,
      image_url
    );
    this.hideModal();
    location.reload();
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
}
