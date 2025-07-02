import { TestBed } from '@angular/core/testing';
import { ProductoService } from './producto.service';
import { provideHttpClient } from '@angular/common/http';
import { provideHttpClientTesting, HttpTestingController } from '@angular/common/http/testing';

describe('ProductoService', () => {
  let service: ProductoService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    // Configura el TestBed con el servicio y el cliente HTTP de testing
    TestBed.configureTestingModule({
      providers: [
        ProductoService,
        provideHttpClient(),
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(ProductoService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    // Verifica que no hayan solicitudes HTTP pendientes después de cada test
    httpMock.verify();
  });

  it('should be created', () => {
    // Verifica que el servicio se cree correctamente
    expect(service).toBeTruthy();
  });

  it('obtenerProductos debería hacer GET y devolver datos', (done) => {
    // Mock de respuesta que simula datos del backend
    const mockResponse = {
      content: [{ id: 1, nombre: 'A', precio: 100 }],
      totalElements: 1
    };

    // Llama al método y verifica que devuelva la respuesta mockeada
    service.obtenerProductos(0, 100).subscribe({
      next: resp => {
        expect(resp).toEqual(mockResponse);
        done();
      },
      error: done.fail
    });

    // Espera la petición GET al endpoint y responde con el mock
    const req = httpMock.expectOne(req =>
      req.method === 'GET' && req.url.includes('/api/productos')
    );
    req.flush(mockResponse);
  });
});
