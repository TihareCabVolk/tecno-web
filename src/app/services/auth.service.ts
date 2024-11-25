import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Cupon } from '../models/cupon';
import { Orders } from '../interfaces/Orden';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private api = 'http://localhost:3000';
  constructor(private http: HttpClient) {}

  public getAllCupones(): Observable<Cupon[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Cupon[]>(`${this.api}/cupones`, { headers }).pipe(
      map((response) => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

  public addCupon(
    codigo: string,
    nombre: string,
    descuento: number,
    fecha_inicio: string,
    fecha_termino: string
  ): Observable<{ message: string }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { codigo, nombre, descuento, fecha_inicio, fecha_termino };

    console.log(body);

    return this.http
      .post<{ message: string }>(`${this.api}/cupones/add`, body, { headers })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error: HttpErrorResponse) => throwError(() => error))
      );
  }

  public deleteCupon(codigo: string): Observable<{ message: string }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { codigo };

    return this.http
      .post<{ message: string }>(`${this.api}/cupones/delete`, body, {
        headers,
      })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error: HttpErrorResponse) => throwError(() => error))
      );
  }

  public updateCupon(cupon: Cupon): Observable<{ message: string }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { ...cupon };

    return this.http
      .post<{ message: string }>(`${this.api}/cupones/edit`, body, { headers })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error: HttpErrorResponse) => throwError(() => error))
      );
  }

  public addOrder(
    date: string,
    total_price: number,
    user_id: number
  ): Observable<{ message: string }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { date, total_price, user_id };

    console.log(body);

    return this.http
      .post<{ message: string }>(`${this.api}/orders/add`, body, { headers })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error: HttpErrorResponse) => throwError(() => error))
      );
  }

  public addOrderRelacion(
    order_id: number,
    product_id: number,
    quantity: number
  ): Observable<{ message: string }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { order_id, product_id, quantity };

    console.log(body);

    return this.http
      .post<{ message: string }>(`${this.api}/orders/addRelacion`, body, {
        headers,
      })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error: HttpErrorResponse) => throwError(() => error))
      );
  }

  public getUltima(): Observable<number> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http
      .post<number>(`${this.api}/orders/ultima`, {}, { headers })
      .pipe(
        map((response) => {
          if (response === null) {
            throw new Error('No se encontró ninguna orden.');
          }
          return response;
        }),
        catchError((error: HttpErrorResponse) => throwError(() => error))
      );
  }
}
