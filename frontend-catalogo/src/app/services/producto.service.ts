import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { KeycloakService } from 'keycloak-angular';

@Injectable({
  providedIn: 'root',
})
export class ProductoService {

  // Puerto para obtener api productos
  private baseUrl = 'http://localhost:8080/api/productos';

  constructor(private http: HttpClient, private keycloakService: KeycloakService) {}

  obtenerProductos(page: number, size: number): Observable<any> {
    return from(this.keycloakService.getToken()).pipe(
      switchMap(token => {
        if (!token) {
          throw new Error('Token no encontrado');
        }
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.get<any>(`${this.baseUrl}?page=${page}&size=${size}`, { headers });
      })
    );
  }
}
