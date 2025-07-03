import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ProductoComponent } from './components/producto/producto.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/navbar/navbar.component';

import { KeycloakService } from 'keycloak-angular';

class MockKeycloakService {
  getToken() {
    return Promise.resolve('fake-token');
  }
}

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        AppComponent,
        HttpClientTestingModule,
        ProductoComponent,
        FooterComponent,
        HeaderComponent,
        NavbarComponent,
      ],
      providers: [
        { provide: KeycloakService, useClass: MockKeycloakService }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as title 'frontend-catalogo'`, () => {
    expect(component.title).toBe('frontend-catalogo');
  });
});
