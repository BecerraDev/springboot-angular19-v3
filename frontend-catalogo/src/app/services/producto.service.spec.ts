import { TestBed, fakeAsync, tick } from '@angular/core/testing';
import { ProductoService } from './producto.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { KeycloakService } from 'keycloak-angular';

// Mock de KeycloakService que siempre retorna un token
class MockKeycloakService {
  getToken(): Promise<string> {
    return Promise.resolve('fake-token');
  }
}

describe('ProductoService', () => {
  let service: ProductoService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        ProductoService,
        { provide: KeycloakService, useClass: MockKeycloakService }
      ],
    });

    service = TestBed.inject(ProductoService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // Verifica que no queden peticiones pendientes
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('obtenerProductos debería hacer GET y devolver datos', fakeAsync(() => {
    const mockResponse = {
      data: [{ id: 1, nombre: 'Producto 1' }],
      total: 1,
      page: 0,
      size: 10,
    };

    let responseData: any;

    service.obtenerProductos(0, 10).subscribe(response => {
      responseData = response;
    });

    tick(); // Avanza el tiempo para resolver la promesa del token

    // Espera que se haga la petición con la URL completa (incluyendo parámetros)
    const req = httpTestingController.expectOne('http://localhost:8080/api/productos?page=0&size=10');

    expect(req.request.method).toBe('GET');
    expect(req.request.headers.get('Authorization')).toBe('Bearer fake-token');

    req.flush(mockResponse);

    expect(responseData).toEqual(mockResponse);
  }));
});
