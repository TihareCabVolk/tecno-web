import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError, map } from 'rxjs';
import { Orden } from '../models/orden';
import { Product } from '../models/Products';

@Injectable({
  providedIn: 'root',
})
export class Arigameplays {
  private api = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  public getAllOrders(): Observable<Orden[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Orden[]>(`${this.api}/orders`, { headers }).pipe(
      map((response) => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

  public getAllProductsOrder(order_id: number): Observable<Product[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { order_id };
    return this.http
      .post<Product[]>(`${this.api}/orders/ver`, body, { headers })
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((error: HttpErrorResponse) => throwError(() => error))
      );
  }
}
