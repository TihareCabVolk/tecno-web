import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Category } from '../interfaces/Category';
import { Products } from '../interfaces/Products';

@Injectable({
  providedIn: 'root'
})
export class WcdonaldsService {

  private api = 'http://localhost:3000';

  constructor(private http:HttpClient){}

  public getAllCategories():Observable<Category[]>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Category[]>(`${this.api}/categoria`,{},{headers}).pipe(
      map(response => { return response })
      ,
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  };

  public getProductsByCategory(category_id:number):Observable<Products[]>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {category_id};

    return this.http.post<Products[]>(`${this.api}/producto`,body,{headers}).pipe(
      map(response => {return response})
      ,
      catchError((error: HttpErrorResponse) => throwError(() => error))
    )
  }

}
