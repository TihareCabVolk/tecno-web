import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Category } from '../interfaces/Category';
import { Products } from '../interfaces/Products';
import { Coupon } from '../interfaces/Coupon';

@Injectable({
  providedIn: 'root'
})
export class WcdonaldsService {

  private api = 'http://localhost:3000';

  constructor(private http:HttpClient){}

  public getAllCategories():Observable<Category[]>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Category[]>(`${this.api}/category`,{},{headers}).pipe(
      map(response => { return response })
      ,
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  };

  public updateCategory(category_id:number,name:string,description:string|null,img_url:string):Observable<{message:string}>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {category_id,name,description,img_url};

    return this.http.post<{message:string}>(`${this.api}/category/edit`,body,{headers}).pipe(
      map(response => {return response})
      ,
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  };

  public addProduct(name:string,category_id:number,price:number,description:string,img_url:string):Observable<{message:string}>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {name,category_id,price,description,img_url};

    console.log(body);
    
    return this.http.post<{message:string}>(`${this.api}/product/add`,body,{headers}).pipe(
      map(response => {return response})
      ,
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  };

  public updateProduct(product:Products):Observable<{message:string}>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {...product};

    return this.http.post<{message:string}>(`${this.api}/product/edit`,body,{headers}).pipe(
      map(response => {return response})
      ,
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  };

  public deleteProduct(product_id:number):Observable<{message:string}>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {product_id};

    return this.http.post<{message:string}>(`${this.api}/product/delete`,body,{headers}).pipe(
      map(response => {return response})
      ,
      catchError((error: HttpErrorResponse) => throwError(() => error))
    );
  };

  public getProductsByCategory(category_id:number):Observable<Products[]>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {category_id};

    return this.http.post<Products[]>(`${this.api}/product/filter`,body,{headers}).pipe(
      map(response => {return response})
      ,
      catchError((error: HttpErrorResponse) => throwError(() => error))
    )
  };

  public getAllProducts():Observable<Products[]>{
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.post<Products[]>(`${this.api}/product`,{headers}).pipe(
      map(response => {return response})
      ,
      catchError((error: HttpErrorResponse) => throwError(() => error))
    )
  };
  
  public getAllCupones(): Observable<Coupon[]> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    return this.http.post<Coupon[]>(`${this.api}/cupones`, { headers }).pipe(
      map((response) => {
        return response;
      }),
      catchError((error: HttpErrorResponse) => throwError(() => error))
    )
  };

  public addCupon(codigo: string,nombre: string,descuento: number,fecha_inicio: string,fecha_termino: string): Observable<{ message: string }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { codigo, nombre, descuento, fecha_inicio, fecha_termino };
  
    return this.http.post<{ message: string }>(`${this.api}/cupones/add`, body, { headers }).pipe(
      map((response) => {return response}),
      catchError((error: HttpErrorResponse) => throwError(() => error))
    )
  };

  public deleteCupon(codigo: string): Observable<{ message: string }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { codigo };

    return this.http.post<{ message: string }>(`${this.api}/cupones/delete`, body, {headers}).pipe(
        map((response) => {return response;}),
        catchError((error: HttpErrorResponse) => throwError(() => error))
    )
  };

  public updateCupon(cupon: Coupon): Observable<{ message: string }> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = { ...cupon };

    return this.http.post<{ message: string }>(`${this.api}/cupones/edit`, body, { headers }).pipe(
        map((response) => {return response;}),
        catchError((error: HttpErrorResponse) => throwError(() => error))
    )
  };
}
