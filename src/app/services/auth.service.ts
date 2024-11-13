import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, tap, throwError } from 'rxjs';

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
  public login(email: string, password: string): Observable<{ message: string, isAdmin?: boolean }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { email, password };

    return this.http.post<{ message: string, isAdmin?: boolean }>(`${this.api}/user/login`, body, { headers }).pipe(
      tap(() => {
        // Al iniciar sesión, guarda el token y emite el cambio de estado
        sessionStorage.setItem('token', 'true');
        this.isLoggedInSubject.next(true);
      }),
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

  /**
   * Método para el registro de usuario.
   */
  public register(username: string, email: string, password: string): Observable<{ message: string }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { username, email, password };

    return this.http.post<{ message: string }>(`${this.api}/user/register`, body, { headers }).pipe(
      tap(() => {
        // Después de registrarse, iniciar sesión automáticamente
        sessionStorage.setItem('token', 'true');
        this.isLoggedInSubject.next(true);
      }),
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  }

  /**
   * Método para cerrar sesión.
   */
  public logout(): void {
    sessionStorage.removeItem('token');
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

}
