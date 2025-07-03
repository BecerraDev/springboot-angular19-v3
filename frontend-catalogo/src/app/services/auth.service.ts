/**
 * Servicio para manejar la autenticación del usuario mediante tokens JWT.
 * Permite guardar, obtener, eliminar el token desde el almacenamiento local (localStorage)
 * y verificar si el usuario está autenticado basado en la existencia del token.
 */

import { Injectable } from '@angular/core';

// Decorador que indica que este servicio se puede inyectar en toda la aplicación
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // Clave que se usará para guardar el token en localStorage
  private tokenKey = 'token';

  constructor() {}

  // Guarda el token en el localStorage usando la clave definida
  guardarToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  // Recupera el token almacenado en localStorage, o null si no existe
  obtenerToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  // Elimina el token del localStorage, para cerrar sesión o limpiar datos
  eliminarToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  // Verifica si hay un token guardado, devuelve true si existe (usuario autenticado)
  estaAutenticado(): boolean {
    return !!this.obtenerToken(); // Doble negación para convertir el resultado en booleano
  }
}
