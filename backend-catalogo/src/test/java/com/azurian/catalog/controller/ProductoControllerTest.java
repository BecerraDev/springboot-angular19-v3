package com.azurian.catalog.controller;

import com.azurian.catalog.entity.Producto;
import com.azurian.catalog.service.ProductoService;

import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.context.TestConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Import;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.List;
import java.util.Optional;

import static org.hamcrest.Matchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.*;

import org.springframework.beans.factory.annotation.Autowired;

/**
 * Pruebas unitarias para el controlador de productos usando MockMvc
 */
@WebMvcTest(ProductoController.class)
@Import(ProductoControllerTest.TestConfig.class)  // Importa la configuración de prueba personalizada
public class ProductoControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @Autowired
    private ProductoService productoService;  // Este será un mock proporcionado por TestConfig

    /**
     * Verifica que la API devuelve una lista paginada de productos correctamente
     */
    @Test
    void listarProductos_debeRetornarListaDeProductos() throws Exception {
        Producto p1 = new Producto(1L, "Producto A", "Desc A", 100.0, null);
        Producto p2 = new Producto(2L, "Producto B", "Desc B", 200.0, null);
        Page<Producto> productosPage = new PageImpl<>(List.of(p1, p2));

        Mockito.when(productoService.obtenerTodos(any(PageRequest.class)))
               .thenReturn(productosPage);

        mockMvc.perform(get("/api/productos")
                .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())  // Código HTTP 200 OK
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))  // Tipo de contenido JSON
            .andExpect(jsonPath("$.content.length()", is(2)))  // La respuesta contiene 2 productos
            .andExpect(jsonPath("$.content[0].nombre", is("Producto A")));  // El primer producto se llama "Producto A"
    }

    /**
     * Verifica que la API devuelve un producto existente correctamente al solicitar por ID
     */
    @Test
    void obtenerProducto_existente_debeRetornarProducto() throws Exception {
        Producto producto = new Producto(1L, "Producto X", "Desc X", 150.0, null);
        Mockito.when(productoService.obtenerPorId(1L))
               .thenReturn(Optional.of(producto));

        mockMvc.perform(get("/api/productos/1")
                .accept(MediaType.APPLICATION_JSON))
            .andExpect(status().isOk())  // Código HTTP 200 OK
            .andExpect(content().contentType(MediaType.APPLICATION_JSON))  // Tipo de contenido JSON
            .andExpect(jsonPath("$.nombre", is("Producto X")))  // El producto tiene nombre "Producto X"
            .andExpect(jsonPath("$.precio", is(150.0)));  // El precio es 150.0
    }

    /**
     * Verifica que la API devuelve un error 404 cuando se solicita un producto inexistente
     */
    @Test
    void obtenerProducto_noExistente_debeRetornarNotFound() throws Exception {
        Mockito.when(productoService.obtenerPorId(99L))
               .thenReturn(Optional.empty());

        mockMvc.perform(get("/api/productos/99"))
            .andExpect(status().isNotFound());  // Código HTTP 404 Not Found
    }

    /**
     * Configuración de prueba que inyecta un mock de ProductoService
     * sin utilizar la anotación @MockBean (que está deprecada)
     */
    @TestConfiguration
    static class TestConfig {
        @Bean
        public ProductoService productoService() {
            return Mockito.mock(ProductoService.class);
        }
    }
}
