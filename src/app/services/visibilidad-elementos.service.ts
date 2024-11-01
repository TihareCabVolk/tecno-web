import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VisibilidadElementosService {
  private mostrarSubject = new BehaviorSubject<boolean>(true);
  mostrar$ = this.mostrarSubject.asObservable();

  setMostrar(value: boolean) {
    this.mostrarSubject.next(value);
  }
}
