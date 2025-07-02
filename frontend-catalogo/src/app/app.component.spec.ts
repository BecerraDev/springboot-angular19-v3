import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductoComponent } from './components/producto/producto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    // Configuramos el módulo de pruebas cargando todos los componentes
    // necesarios para que el AppComponent funcione correctamente.
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        HttpClientTestingModule,  // Módulo para mockear peticiones HTTP
        ProductoComponent,         // Componente de productos
        FooterComponent,           // Componente footer
        HeaderComponent,           // Componente header
        NavbarComponent,           // Componente navbar
      ]
    }).compileComponents();

    // Creamos la instancia del componente y el fixture para las pruebas
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  // Test básico para comprobar que el componente principal se crea sin errores
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  // Test para verificar que la propiedad "title" tiene el valor esperado
  it(`should have as title 'frontend-catalogo'`, () => {
    expect(component.title).toBe('frontend-catalogo');
  });

});
