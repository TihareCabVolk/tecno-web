import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'http://localhost:3000'; // Cambia esto a la URL de tu servidor

  constructor(private http: HttpClient) { }

  registerUser(userData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/register`, userData)
      .pipe(catchError(this.handleError));
  }

  loginUser(credentials: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/user/login`, credentials)
      .pipe(catchError(this.handleError));
  }

  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}/categoria`)
      .pipe(catchError(this.handleError));
  }

  getProducts(): Observable<any> {
    return this.http.get(`${this.baseUrl}/producto`)
      .pipe(catchError(this.handleError));
  }

  getUserById(userId: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/user/${userId}`)
      .pipe(catchError(this.handleError));
  }
  /*
  getPedidosByUserId(userId: number): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(`${this.baseUrl}/pedidos?user_id=${userId}`)
        .pipe(catchError(this.handleError));
  }
  */

  private handleError(error: HttpErrorResponse) {
    // Manejo de errores
    let errorMessage = 'Ocurrió un error desconocido.';
    if (error.error instanceof ErrorEvent) {
      // Errores del lado del cliente
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Errores del lado del servidor
      errorMessage = `Código de error: ${error.status}, Mensaje: ${error.message}`;
    }
    return throwError(errorMessage);
  }
}
