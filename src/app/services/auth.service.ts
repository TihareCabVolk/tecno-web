import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private api = 'http://localhost:3000'; // Minúsculas y consistente

  constructor(private http: HttpClient) {}

  public login(email:string, password:string):Observable<{message: string,isAdmin?:boolean}>{
    const headers = new HttpHeaders({'Content-Type':'application/json'})
    const body = {email, password};

    return this.http.post<{message: string,isAdmin?:boolean}>(this.api+"/login", body, { headers }).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  };

  public register(username:string, email:string, password:string):Observable<{message:string}>{
    const headers = new HttpHeaders({'Content-Type':'application/json'});
    const body = {username,email,password};

    return this.http.post<{message:string}>(this.api+"/register",body,{headers}).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(() => error);
      })
    );
  }
}
