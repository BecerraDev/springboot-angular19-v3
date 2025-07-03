
# springboot-angular19-v2
Proyecto actualizado

## Estado actual del proyecto

🔵 Backend completamente funcional con Spring Security y Keycloak.  
🔵 Frontend correctamente integrado con Keycloak.  
🔵 Pruebas realizadas exitosamente con Postman.  

  
#### Reflexión final sobre el proyecto ####

Quiero agradecer sinceramente la oportunidad y el tiempo brindados para trabajar en este proyecto. Durante el proceso, aprendí mucho sobre Keycloak, Spring Security y la integración de autenticación basada en tokens JWT.

Estado actual
🔵 Backend completamente funcional:

Se conecta correctamente a la base de datos.

Genera y valida tokens JWT con Keycloak.

Endpoints protegidos funcionan correctamente, verificados con Postman y pruebas automatizadas.

🔵 Frontend integrado correctamente:

El frontend ahora envía y valida el token JWT con el backend sin problemas.

La tabla de productos carga datos desde el backend protegido sin errores 401.

🔵 Pruebas:

Tests unitarios y de integración con JUnit y Mockito continúan vigentes y funcionando.

🔵 CI/CD:

Jenkins instalado y configurado para automatizar builds y despliegues.

Próximos pasos
Mejorar y ampliar las pruebas automatizadas.

Optimizar la experiencia de usuario en el frontend.

Profundizar en la seguridad y escalabilidad del sistema.



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
