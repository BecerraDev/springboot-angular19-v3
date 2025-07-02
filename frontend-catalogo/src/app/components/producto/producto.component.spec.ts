import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoComponent } from './producto.component';
import { ProductoService } from '../../services/producto.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { of, throwError } from 'rxjs';

describe('ProductoComponent', () => {
  let component: ProductoComponent;
  let fixture: ComponentFixture<ProductoComponent>;
  let productoServiceSpy: jasmine.SpyObj<ProductoService>;

  beforeEach(async () => {
    // Creamos un mock del servicio ProductoService con el método obtenerProductos
    const spy = jasmine.createSpyObj('ProductoService', ['obtenerProductos']);

    await TestBed.configureTestingModule({
      imports: [
        ProductoComponent, // componente standalone
        NoopAnimationsModule // para evitar animaciones durante tests
      ],
      providers: [
        { provide: ProductoService, useValue: spy } // inyectamos el mock
      ]
    }).compileComponents();

    productoServiceSpy = TestBed.inject(ProductoService) as jasmine.SpyObj<ProductoService>;
    fixture = TestBed.createComponent(ProductoComponent);
    component = fixture.componentInstance;
  });

  // === Test 1: Comprobar creación del componente ===
  it('debería crearse el componente', () => {
    // Verificamos que el componente se haya creado correctamente
    expect(component).toBeTruthy();
  });

  // === Test 2: Cargar productos al inicializar el componente ===
  it('debería cargar productos al inicializar', () => {
    // Mockeamos la respuesta del servicio con dos productos de ejemplo
    const productosMock = {
      content: [
        { id: 1, nombre: 'Producto A', precio: 100 },
        { id: 2, nombre: 'Producto B', precio: 200 }
      ],
      totalElements: 2
    };

    productoServiceSpy.obtenerProductos.and.returnValue(of(productosMock));

    fixture.detectChanges(); // ejecuta ngOnInit y carga productos

    // Confirmamos que se llamó el servicio con los parámetros correctos
    expect(productoServiceSpy.obtenerProductos).toHaveBeenCalledWith(0, 100);
    // Verificamos que los datos cargados sean los que mockeamos
    expect(component.dataSource.data.length).toBe(2);
    expect(component.dataSource.data[0].nombre).toBe('Producto A');
  });

  // === Test 3: Manejar error cuando falla la carga de productos ===
  it('debería manejar error al cargar productos', () => {
    // Espiamos console.error para verificar que se maneja el error
    const consoleSpy = spyOn(console, 'error');
    productoServiceSpy.obtenerProductos.and.returnValue(
      throwError(() => new Error('Error de prueba'))
    );

    fixture.detectChanges(); // intenta cargar productos (ngOnInit)

    // Confirmamos que se llamó console.error para el error
    expect(consoleSpy).toHaveBeenCalled();
    // La lista de productos debe quedar vacía si falla la carga
    expect(component.dataSource.data.length).toBe(0);
  });

  // === Test 4: Aplicar filtro correctamente en la tabla ===
  it('debería aplicar filtro correctamente', () => {
    // Cargamos datos manualmente para probar el filtro
    component.dataSource.data = [
      { id: 1, nombre: 'Manzana', precio: 100 },
      { id: 2, nombre: 'Pera', precio: 200 },
    ];

    // Simulamos el evento de entrada en el campo filtro
    const inputEvent = {
      target: { value: 'man' }
    } as unknown as Event;

    component.aplicarFiltro(inputEvent);

    // Verificamos que el filtro se aplicó en minúsculas y sin espacios extra
    expect(component.dataSource.filter).toBe('man');
  });
});
