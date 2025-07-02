package com.azurian.catalog.service;

import com.azurian.catalog.entity.Producto;
import com.azurian.catalog.repository.ProductoRepository;
import org.springframework.stereotype.Service;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import java.util.Optional;

// Logger para registrar eventos e información útil para debugging
import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;

@Service
public class ProductoService {

    private static final Logger logger = LogManager.getLogger(ProductoService.class);

    private final ProductoRepository productoRepository;

    // Constructor con inyección de dependencia del repositorio
    public ProductoService(ProductoRepository productoRepository) {
        this.productoRepository = productoRepository;
    }

    /**
     * Obtiene una página de productos con paginación.
     */
    public Page<Producto> obtenerTodos(Pageable pageable) {
        logger.info("Obteniendo todos los productos, página: {}", pageable.getPageNumber());
        return productoRepository.findAll(pageable);
    }

    /**
     * Busca un producto por su ID.
     */
    public Optional<Producto> obtenerPorId(Long id) {
        logger.info("Buscando producto con id: {}", id);
        return productoRepository.findById(id);
    }

    // Otros métodos como guardar, eliminar, etc. pueden ser añadidos aquí
}
