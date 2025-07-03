/**
 * TokenInterceptor intercepta todas las solicitudes HTTP salientes.
 * Si existe un token JWT almacenado en AuthService, agrega automáticamente
 * el encabezado 'Authorization' con el token tipo Bearer a la solicitud.
 * Esto permite que todas las peticiones autenticadas lleven el token sin
 * necesidad de añadirlo manualmente en cada llamada HTTP.
 */

import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.authService.obtenerToken();

    if (token) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${token}`),
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
