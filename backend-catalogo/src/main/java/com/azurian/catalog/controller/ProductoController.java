package com.azurian.catalog.controller;

import com.azurian.catalog.entity.Producto;
import com.azurian.catalog.service.ProductoService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.Optional;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import io.swagger.v3.oas.annotations.Parameter;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@RestController
@RequestMapping("/api/productos")
@CrossOrigin(origins = "http://localhost:4200")
@Tag(name = "Productos", description = "API para gestionar productos")
public class ProductoController {

    private static final Logger logger = LogManager.getLogger(ProductoController.class);

    private final ProductoService productoService;

    public ProductoController(ProductoService productoService) {
        this.productoService = productoService;
    }

    /**
     * Endpoint para listar productos paginados.
     * Recibe parámetros de paginación y ordenamiento a través de Pageable.
     */
    @GetMapping
    @Operation(summary = "Listar productos paginados", description = "Obtiene una página de productos con paginación")
    public ResponseEntity<Page<Producto>> listarProductos(
            @Parameter(description = "Paginación y ordenamiento") Pageable pageable) {
        
        logger.info("GET /api/productos - Listando productos con pageable: {}", pageable);
        
        Page<Producto> productos = productoService.obtenerTodos(pageable);
        logger.debug("Cantidad de productos retornados: {}", productos.getNumberOfElements());
        
        return ResponseEntity.ok(productos);
    }

    /**
     * Endpoint para obtener un producto por su ID.
     * Retorna 200 con el producto si existe, o 404 si no se encuentra.
     */
    @GetMapping("/{id}")
    @Operation(summary = "Obtener producto por ID", description = "Devuelve un producto dado su ID")
    public ResponseEntity<Producto> obtenerProducto(
            @Parameter(description = "ID del producto a obtener") @PathVariable Long id) {

        logger.info("GET /api/productos/{} - Buscando producto", id);
        
        try {
            Optional<Producto> productoOpt = productoService.obtenerPorId(id);

            if (productoOpt.isPresent()) {
                logger.info("Producto encontrado: {}", productoOpt.get().getNombre());
                return ResponseEntity.ok(productoOpt.get());
            } else {
                logger.warn("Producto no encontrado con id: {}", id);
                return ResponseEntity.notFound().build();
            }

        } catch (Exception e) {
            logger.error("Error al buscar producto con id {}: {}", id, e.getMessage(), e);
            return ResponseEntity.internalServerError().build();
        }
    }
}

