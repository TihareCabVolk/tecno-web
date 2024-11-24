import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PedidosService {

  private apiUrl = 'http://localhost:3000/orders'; // Cambia a la URL de tu API

  constructor(private http: HttpClient) {}

  // Obtener pedidos desde la API
  getPedidos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
