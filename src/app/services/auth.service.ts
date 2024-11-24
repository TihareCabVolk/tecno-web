import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000';
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {}

  /**
   * Método para el inicio de sesión.
   */
  public login(email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { email, password });
  }

  /**
   * Método para el registro de usuario.
   */
  public register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, email, password });
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

  /**
   * Método para obtener el email.
   */
  public getEmail(): string | null {
    return sessionStorage.getItem('email');
  }

  /**
   * Método para actualizar el estado de autenticación.
   */
  public setLoggedIn(value: boolean): void {
    this.isLoggedInSubject.next(value);
  }

}
