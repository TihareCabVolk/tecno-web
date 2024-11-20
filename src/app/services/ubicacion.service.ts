import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root',
})
export class UbicacionService {
  private apiUrl = 'https://autocomplete.search.hereapi.com/v1/autocomplete';
  private apiKey = 'rSvGapw3kIkz6aif5IVUcoFYa1RZAeqkhHszj4ylogc'; // Reemplaza con tu API Key

  constructor(private http: HttpClient) {}

  getSuggestions(query: string): Observable<any> {
    const params = new HttpParams()
      .set('q', query)
      .set('apiKey', this.apiKey)
      .set('limit', '5'); // Limita a 5 sugerencias

    return this.http.get(this.apiUrl, { params });
  }
}
