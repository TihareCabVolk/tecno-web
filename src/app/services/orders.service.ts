import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Orden } from '../models/orden';  // Asegúrate de importar el modelo de orden

@Injectable({
  providedIn: 'root'
})
export class OrdenesService {
  private listaOrdenes: Orden[] = [];  // Lista interna de órdenes
  private ordenesSubject = new BehaviorSubject<Orden[]>(this.listaOrdenes);  // Observable para la lista de órdenes

  constructor() { }

  // Obtener las órdenes como Observable
  getObservableOrdenes() {
    this.obtenerSession();
    return this.ordenesSubject.asObservable();
  }

  // Obtener las órdenes directamente (sin observable)
  getOrdenes(): Orden[] {
    this.obtenerSession();
    return this.listaOrdenes;
  }

  // Agregar una nueva orden
  agregarOrden(orden: Orden) {
    this.obtenerSession();
    this.listaOrdenes.push(orden);
    this.ordenesSubject.next(this.listaOrdenes);
    this.guardarSession();
  }
  
  // Guardar la lista de órdenes en localStorage
  private guardarSession() {
    localStorage.setItem('ordenes', JSON.stringify(this.listaOrdenes));
  }

  // Obtener la lista de órdenes desde localStorage
  private obtenerSession() {
    if (typeof window !== 'undefined' && window.localStorage) {
      const ordenes = localStorage.getItem('ordenes');
      if (ordenes != null) {
        this.listaOrdenes = JSON.parse(ordenes);
      }
    }
  }
}
