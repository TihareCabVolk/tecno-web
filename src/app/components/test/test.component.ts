import { Component, OnInit } from '@angular/core';
import { Cupon } from '../../models/cupon';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-test',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css',
})
export class TestComponent implements OnInit {
  public ngOnInit(): void {
    this.getCupones();
  }
  //Variables cupones
  public cupones: Cupon[] = []; // Lista de Cupones
  constructor(private baseDatos: AuthService) {}

  //Variables con ngModel
  nombreCupon: string = '';
  descuentoCupon: number = 0;
  fecha_inicio: string = '';
  fecha_termino: string = '';
  categoria: string = '';

  public ventanaAgregar: boolean = false;
  public ventanaModificar: boolean = false;

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

    console.log(this.cupones);
  }

  //Agregar Cupon
  public addCupon(
    nombre: string,
    descuento: number,
    fecha_inicio: string,
    fecha_termino: string
  ): void {
    if (!nombre || nombre.trim() === '') {
      alert('Ingrese el nombre del cupón.');
      return;
    }

    if (descuento == null || descuento < 0 || descuento > 100) {
      alert('Ingrese un descuento válido entre 0 y 100.');
      return;
    }

    if (!fecha_inicio || !fecha_termino) {
      alert('Ingrese ambas fechas.');
      return;
    }

    if (new Date(fecha_inicio) >= new Date(fecha_termino)) {
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

    this.baseDatos
      .addCupon(codigo, nombre, descuento, fecha_inicio, fecha_termino)
      .subscribe({
        next: () => {
          this.getCupones();
        },
        error: (err) => {
          console.error('Error al agregar el Cupon:', err.message);
        },
      });
    this.ocultarVentaAgregado();
  }

  //Borrar cupon
  public deleteCupon(index: number): void {
    const code = this.cupones[index].codigo;

    this.baseDatos.deleteCupon(code).subscribe({
      next: () => {
        this.cupones = this.cupones.filter((cupon) => cupon.codigo !== code);
      },
      error: (err) => {
        console.error('Error al eliminar el cupon:', err);
      },
    });
    this.getCupones();
  }

  //Editar CUpon
  public editCupon(
    nombre: string,
    descuento: number,
    fecha_inicio: string,
    fecha_termino: string
  ): void {
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
    if (!fecha_inicio || !fecha_termino) {
      alert('Ingrese ambas fechas.');
      return;
    }

    const inicio = new Date(fecha_inicio);
    const termino = new Date(fecha_termino);
    if (inicio >= termino) {
      alert('La fecha de inicio debe ser anterior a la fecha de término.');
      return;
    }

    const cupon = this.cupones[this.indext];
    cupon.nombre = nombre;
    cupon.descuento = descuento;
    cupon.fecha_inicio = fecha_inicio;
    cupon.fecha_termino = fecha_termino;
    // Llamada al servicio para actualizar el cupón
    this.baseDatos.updateCupon(cupon).subscribe({
      next: () => {
        this.getCupones();
        this.ocultarVentanaModificado();
      },
    });
  }

  //html
  ventanaAgregado(): boolean {
    return (this.ventanaAgregar = true);
  }
  ocultarVentaAgregado(): boolean {
    return (this.ventanaAgregar = false);
  }
  ocultarVentanaModificado(): boolean {
    return (this.ventanaModificar = false);
  }
  isFechaInvalida(): boolean {
    // Convertir las fechas a objetos Date para compararlas
    const inicio = new Date(this.fecha_inicio);
    const termino = new Date(this.fecha_termino);
    // La validación se cumple si la fecha de inicio es mayor o igual a la de término
    return inicio >= termino;
  }
  //Indice al momento de pulsar modificar cupon
  public indext: number = 0;
  ventanaModificado(index: number): boolean {
    this.indext = index;
    const item = { ...this.cupones[index] }; // Asegúrate de usar una copia
    this.nombreCupon = item.nombre;
    this.descuentoCupon = item.descuento;
    this.fecha_inicio = item.fecha_inicio;
    this.fecha_termino = item.fecha_termino;
    this.ventanaModificar = true;
    return (this.ventanaModificar = true);
  }
}
