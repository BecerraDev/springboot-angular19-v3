package com.azurian.catalog.service;

import com.azurian.catalog.entity.Producto;
import com.azurian.catalog.repository.ProductoRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;

import java.util.List;
import java.util.Optional;

import static org.mockito.Mockito.*;
import static org.junit.jupiter.api.Assertions.*;

@ExtendWith(MockitoExtension.class)
class ProductoServiceTest {

    @Mock
    private ProductoRepository productoRepository;

    @InjectMocks
    private ProductoService productoService;

    @Test
    // Verifica que el método obtenerTodos retorna una página con productos correctamente
    void obtenerTodos_debeRetornarProductos() {
        Producto p1 = new Producto(1L, "Producto A", "Desc A", 100.0, null);
        Producto p2 = new Producto(2L, "Producto B", "Desc B", 200.0, null);
        PageRequest pageable = PageRequest.of(0, 10);

        when(productoRepository.findAll(pageable)).thenReturn(new PageImpl<>(List.of(p1, p2)));

        Page<Producto> resultado = productoService.obtenerTodos(pageable);

        assertEquals(2, resultado.getContent().size());  // Comprueba que hay 2 productos en la página
        verify(productoRepository).findAll(pageable);   // Asegura que el repositorio fue llamado con el pageable correcto
    }

    @Test
    // Verifica que obtenerPorId devuelve el producto cuando existe en el repositorio
    void obtenerPorId_debeRetornarProducto() {
        Producto producto = new Producto(1L, "Producto", "Desc", 100.0, null);
        when(productoRepository.findById(1L)).thenReturn(Optional.of(producto));

        Optional<Producto> resultado = productoService.obtenerPorId(1L);

        assertTrue(resultado.isPresent());  // Confirma que el producto fue encontrado
        assertEquals("Producto", resultado.get().getNombre());  // Verifica el nombre del producto devuelto
    }
}
