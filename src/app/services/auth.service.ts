import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'http://localhost:3000';
  private isLoggedInSubject = new BehaviorSubject<boolean>(this.checkToken());

  constructor(private http: HttpClient) {}

  /**
   * Método para el inicio de sesión.
   */
  public login(email: string, password: string): Observable<{ message: string, user?: any }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, password };

    return this.http.post<{ message: string, user?: any }>(`${this.api}/user/login`, body, { headers }).pipe(
      tap((response) => {
        // Al iniciar sesión, guarda el token y emite el cambio de estado
        sessionStorage.setItem('token', 'true');
        this.isLoggedInSubject.next(true);
        // Inicializa el carrito en localStorage
        if (!localStorage.getItem('cart')) {
          const initialCart = {
            order_id: null,
            user_id: response.user.user_id || null,
            date: null,
            total_price: 0,
            products: [],
          };
          localStorage.setItem('cart', JSON.stringify(initialCart))
      }}),
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

  /**
   * Método para el registro de usuario.
   */
  public register(username: string, email: string, password: string): Observable<{message: string, user?: any}> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, email, password };

    return this.http.post<{ message: string, user?: any }>(`${this.api}/user/register`, body, { headers }).pipe(
      tap((response) => {
        // Después de registrarse, iniciar sesión automáticamente
        sessionStorage.setItem('token', 'true');
        this.isLoggedInSubject.next(true);
        const initialCart = {
          order_id: null,
          user_id: response.user?.id || null,
          date: null,
          total_price: 0,
          products: [],
        };
        localStorage.setItem('cart', JSON.stringify(initialCart));
      }),
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

  /**
   * Método para cerrar sesión.
   */
  public logout(): void {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('user');
    localStorage.removeItem('cart');
    this.isLoggedInSubject.next(false);
  }

  /**
   * Devuelve un observable que emite el estado de autenticación.
   */
  public isAuthenticated(): Observable<boolean> {
    return this.isLoggedInSubject.asObservable();
  }

  /**
   * Verifica si hay un token en el almacenamiento.
   */
  private checkToken(): boolean {
    if (typeof sessionStorage !== 'undefined') {
      return !!sessionStorage.getItem('token');
    }
    return false;
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