import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private apiUrl = 'http://localhost:3000'; // Cambia esto si tu servidor está en otra dirección

  constructor(private http: HttpClient) { }

  // Método para obtener datos (ejemplo)
  getProducts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/products`); // Asegúrate de que esta ruta exista en tu servidor
  }

  // Otros métodos para interactuar con tu API
}
