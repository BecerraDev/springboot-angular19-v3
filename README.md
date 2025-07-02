
# springboot-angular19-v2
Proyecto actualizado

#### Reflexión final sobre el proyecto ####

Quiero agradecer sinceramente el tiempo y la oportunidad brindada para trabajar en este proyecto. Durante el proceso, dediqué muchas horas a estudiar y comprender cómo funciona Keycloak y, aunque no logré una integración perfecta entre frontend y backend, la experiencia fue sumamente enriquecedora. De verdad, ahora entiendo cuando me indicaron que no debo dar un tiempo definido, tomarlo con calma... agradezco sus consejos.

El backend está funcional: se conecta correctamente a la base de datos, genera tokens JWT mediante Keycloak y los valida adecuadamente. Esto fue verificado realizando peticiones con Postman, donde obtuve respuestas en formato JSON desde la base de datos protegida.

El principal desafío surgió al intentar compartir y validar correctamente los tokens entre el frontend y el backend. Configurar y sincronizar Keycloak en ambos entornos me llevó a probar diversas configuraciones y soluciones, lo cual me permitió adquirir un entendimiento mucho más profundo sobre autenticación y autorización con OAuth2 y OpenID Connect.

Aunque el proyecto no se encuentra completamente terminado, esta experiencia me dejó una base sólida para seguir desarrollando aplicaciones seguras y escalables. Estoy motivado a continuar mejorando la integración y resolver los detalles pendientes.

Resumen técnico de lo implementado. Se instaló y configuró Spring Security junto con Keycloak Auth0. Se creó una carpeta de configuración (springconfig) para proteger rutas en el backend. Se realizaron pruebas en entorno de producción mediante Docker. La generación de tokens fue verificada mediante el endpoint:

// 

POST http://localhost:8180/realms/miapp/protocol/openid-connect/token
También se verificó el funcionamiento del endpoint protegido en el backend:

// 

GET http://localhost:8080/api/productos?page=0&size=100

// 

→ Se recibió respuesta JSON desde la base de datos tras integrar correctamente los tokens mediante Postman. Esto demuestra que el backend está funcional y correctamente asegurado.
Problemas encontrados en el frontend. El frontend se encuentra disponible en:

// 
http://localhost:4200/productos
//

Sin embargo, la tabla no logra cargar los datos. Al inspeccionar el navegador, se puede ver que el token fue generado exitosamente en el cliente, pero por alguna razón no se está enviando correctamente al backend, lo que provoca un error 401 (No autorizado). Intenté múltiples enfoques para resolver este problema, pero enfrenté contratiempos técnicos y algunos retrasos, como la lentitud de descarga del archivo JSON de configuración de Keycloak y su integración en el frontend.

Por mi parte, seguire practicando y esforzandome para correguir el problema mientras tanto, con el tema de pruebas. Sigue intacto los TEST REALIZADOS EN JUNIT Y MOCKITO. 



=======
# Prueba Técnica - Desarrollador Java

Muchas gracias por la oportunidad y por este desafío como desarrollador junior. Adjunto toda la información relacionada al proyecto, así como la guía para su ejecución y pruebas.

## Descripción

Proyecto full-stack que implementa un catálogo de productos con:

- Backend en **Java 17 + Spring Boot 3**  
- Frontend en **Angular 19**  
- Autenticación con **Keycloak 26**  
- Persistencia en **PostgreSQL**  
- Contenedores orquestados con **Docker Compose**  

Incluye autenticación basada en roles y pruebas unitarias para frontend y backend.

---

## Tecnologías utilizadas

- Java 17  
- Spring Boot 3  
- Angular 19  
- PostgreSQL  
- Keycloak 26  
- Docker / Docker Compose  
- Jasmine (Frontend)  
- JUnit 5 + Mockito (Backend)  

---

## Cómo levantar el entorno

### 1. Clonar el repositorio

```bash
git clone https://github.com/BecerraDev/springboot-angular19.git
cd springboot-angular19
```

### 2. Iniciar el entorno de desarrollo
```bash
docker-compose up --build
```
Esto levantará: 

```bash

PostgreSQL en localhost:5432

Keycloak en http://localhost:8180

Backend Spring Boot en http://localhost:8080

Frontend Angular (ng serve) en http://localhost:4200 → entrar aquí.

Swagger en http://localhost:8080/swagger-ui/index.html

```

ADVERTENCIA.



## TEST EJECUTADOS FRONTEND

  // === Test 1: Comprobar creación del componente ===

  // === Test 2: Cargar productos al inicializar el componente ===

  // === Test 3: Manejar error cuando falla la carga de productos ===

  // === Test 4: Aplicar filtro correctamente en la tabla ===

## TEST EJECUTADOS BACKEND

  // === Test 1:  Verifica que la API devuelve una lista paginada de productos correctamente === 

  // === Test 2: Verifica que la API devuelve un producto existente correctamente al solicitar por ID ===

  // === Test 3: Verifica que la API devuelve un error 404 cuando se solicita un producto inexistente ===


  #### Foto de resultado esperado: ####

  ![image](https://github.com/user-attachments/assets/9365da2e-65e0-4cc3-8aee-ab2bf9835724)





>>>>>>> master
