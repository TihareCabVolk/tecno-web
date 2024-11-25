import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/Products';
import { Cupon } from '../models/cupon';
@Injectable({
  providedIn: 'root',
})
export class CuponesService {
  private listaCupones: Cupon[] = [];
  private cuponesSubject = new BehaviorSubject<Cupon[]>(this.listaCupones); // Observable para los cambios en el carrito

  // Observable para que los componentes reciban actualizaciones en tiempo real
  getObservableCupones() {
    this.obtenerSession();
    return this.cuponesSubject.asObservable();
  }

  // Método sin Observable para obtener el carrito directamente
  getCupon(): Cupon[] {
    this.obtenerSession();
    return this.listaCupones;
  }

  agregar(
    codigo: string,
    nombre: string,
    descuento: number,
    fechaInicio: string,
    fechaTermino: string,
    image_url: string
  ) {
    this.obtenerSession();

    //si existe aumenta el valor
    const index = this.listaCupones.findIndex(
      (cupon) => cupon.codigo === codigo
    );

    //no existe
    if (index === -1) {
      const cupon = new Cupon(
        codigo,
        nombre,
        descuento,
        fechaInicio,
        fechaTermino,
        image_url
      );
      this.listaCupones.push(cupon);
    }
    //Si existe y actualiza
    else {
      //Se podria mostrar un mensaje de repeticion.
    }
    this.cuponesSubject.next(this.listaCupones); // Emite el carrito actualizado
    this.guardarSession();
  }

  actualizar(
    index: number,
    nombre: string,
    descuento: number,
    fechaInicio: string,
    fechaTermino: string
  ) {
    //posicion valida, que esta en el rango de la lista
    if (index >= 0 && index < this.listaCupones.length) {
      this.listaCupones[index].nombre = nombre;
      this.listaCupones[index].fechaInicio = fechaInicio;
      this.listaCupones[index].fechaTermino = fechaTermino;
      this.listaCupones[index].descuento = descuento;

      this.cuponesSubject.next(this.listaCupones);
      this.guardarSession();
    }
  }

  cantidad() {
    this.obtenerSession();
    return this.listaCupones.length;
  }

  eliminar(index: number) {
    if (index >= 0 && index < this.listaCupones.length) {
      this.listaCupones.splice(index, 1);
      this.cuponesSubject.next(this.listaCupones);
      this.guardarSession();
    }
  }

  guardarSession() {
    localStorage.setItem('cupon', JSON.stringify(this.listaCupones));
  }

  obtenerSession() {
    this.listaCupones = [];

    if (typeof window != 'undefined' && window.localStorage) {
      const cupon = localStorage.getItem('cupon');
      if (cupon != null) {
        this.listaCupones = JSON.parse(cupon);
      }
    }
  }
}
