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
  categoria: string = '';

  //Cupon
  public cuponesService = inject(CuponesService);
  public listaCupones: Cupon[] = [];
  private estadoService = inject(VisibilidadElementosService);

  public ventanaAgregar: boolean = false;
  public ventanaModificar: boolean = false;

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

  agregarProducto(
    nombre: string,
    descuento: number,
    fechaInicio: string,
    fechaTermino: string
  ) {
    if (!nombre || nombre.trim() === '') {
      alert('Ingrese el nombre del cupón.');
      return;
    }

    if (descuento == null || descuento < 0 || descuento > 100) {
      alert('Ingrese un descuento válido entre 0 y 100.');
      return;
    }

    if (!fechaInicio || !fechaTermino) {
      alert('Ingrese ambas fechas.');
      return;
    }

    if (new Date(fechaInicio) >= new Date(fechaTermino)) {
      alert('La fecha de inicio debe ser anterior a la fecha de término.');
      return;
    }

    // Generación del código aleatorio de 15 caracteres
    const caracteres =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigo = '';
    for (let i = 0; i < 15; i++) {
      const aleatorio = Math.floor(Math.random() * caracteres.length);
      codigo += caracteres.charAt(aleatorio);
    }

    // Agregar el cupón a través del servicio
    this.cuponesService.agregar(
      codigo,
      nombre,
      descuento,
      fechaInicio,
      fechaTermino
    );
    this.ocultarVentaAgregado();
    location.reload();
  }

  //Eliminar un item
  eliminarItem(index: number) {
    this.cuponesService.eliminar(index);
    this.getlistaCupones();
  }

  // Actualizar un cupón con validaciones
  actualizar(
    item: Cupon,
    nombre: string,
    descuento: number,
    fechaInicio: string,
    fechaTermino: string
  ) {
    // Validación del nombre
    if (!nombre || nombre.trim() === '') {
      alert('Ingrese el nombre del cupón.');
      return;
    }

    // Validación del descuento
    if (descuento == null || descuento < 0 || descuento > 100) {
      alert('Ingrese un descuento válido entre 0 y 100.');
      return;
    }

    // Validación de las fechas
    if (!fechaInicio || !fechaTermino) {
      alert('Ingrese ambas fechas.');
      return;
    }

    const inicio = new Date(fechaInicio);
    const termino = new Date(fechaTermino);
    if (inicio >= termino) {
      alert('La fecha de inicio debe ser anterior a la fecha de término.');
      return;
    }

    item.nombre = nombre;
    item.descuento = descuento;
    item.fechaInicio = fechaInicio;
    item.fechaTermino = fechaTermino;
    // Llamada al servicio para actualizar el cupón
    this.cuponesService.actualizar(
      this.indext,
      nombre,
      descuento,
      fechaInicio,
      fechaTermino
    );

    // Opcional: actualiza la lista de cupones
    this.getlistaCupones();
    console.log(this.listaCupones);
    this.ocultarVentanaModificado();
    location.reload();
  }

  //TEST
  isFechaInvalida(): boolean {
    // Convertir las fechas a objetos Date para compararlas
    const inicio = new Date(this.fechaInicio);
    const termino = new Date(this.fechaTermino);
    // La validación se cumple si la fecha de inicio es mayor o igual a la de término
    return inicio >= termino;
  }
  //TEST

  ventanaAgregado(): boolean {
    return (this.ventanaAgregar = true);
  }

  ocultarVentaAgregado(): boolean {
    return (this.ventanaAgregar = false);
  }
  //Indice al momento de pulsar modificar cupon
  public indext: number = 0;
  ventanaModificado(index: number): boolean {
    this.indext = index;
    const item = this.listaCupones[index];
    this.nombreCupon = item.nombre;
    this.descuentoCupon = item.descuento;
    this.fechaInicio = item.fechaInicio;
    this.fechaTermino = item.fechaTermino;
    this.ventanaModificar = true;
    return (this.ventanaModificar = true);
  }

  ocultarVentanaModificado(): boolean {
    return (this.ventanaModificar = false);
  }
}
