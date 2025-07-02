// src/app/app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideKeycloak, withAutoRefreshToken } from 'keycloak-angular';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    // Proveedor de Keycloak para autenticación
    provideKeycloak({
      config: {
        url: 'http://host.docker.internal:8180',  // URL de tu Keycloak
        realm: 'miapp',
        clientId: 'frontend'
      },
      // Opciones de inicialización para controlar login
      initOptions: {
        onLoad: 'login-required',
        checkLoginIframe: false
      },
      // Refresco automático del token con logout por inactividad
      features: [
        withAutoRefreshToken({
          onInactivityTimeout: 'logout',
          sessionTimeout: 60_000
        })
      ]
    }),

    // Proveedor del router con rutas definidas
    provideRouter(routes)
  ]
};
