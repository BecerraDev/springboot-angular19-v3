import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { routes } from './app/app.routes'; // si usas rutas, si no puedes eliminar esto

import { provideKeycloak } from 'keycloak-angular';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes), // elimina esta línea si no usas rutas
    provideHttpClient(),
    provideKeycloak({
      config: {
        url: 'http://host.docker.internal:8180',  // URL de tu Keycloak
          realm: 'miapp',
        clientId: 'frontend',
      },
      initOptions: {
        onLoad: 'login-required',  // Exige login siempre
        checkLoginIframe: false,
      },
    }),
  ],
}).catch((err) => console.error(err));
