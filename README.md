
# springboot-angular19-v2
Proyecto actualizado.Se creo otro repositorio porque el proyecto inicial es muy diferente a este. 
 (repositorio anterior https://github.com/BecerraDev/springboot-angular19). 

 
## Estado actual del proyecto

🔵 Backend completamente funcional con Spring Security y Keycloak.

🔵 Token JWT generado y validado correctamente por Keycloak.

🔵 Token enviado desde el frontend autorizado y recibido en el backend.

🔵 Frontend correctamente integrado con Keycloak para autenticación.

🔵 Datos protegidos obtenidos y mostrados correctamente en la tabla del frontend.

🔵 Pruebas realizadas exitosamente con Postman para verificar seguridad y endpoints.

🔵 Instalación y configuración inicial de Jenkins para despliegue y automatización.

  
#### Reflexión final sobre el proyecto ####

Quiero agradecer sinceramente la oportunidad y el tiempo brindados para trabajar en esta prueba tecnica. Durante el proceso, aprendí muchísimo sobre Keycloak, Spring Security y la integración de autenticación basada en tokens JWT.

Al principio tuve varios problemas, especialmente porque el frontend no lograba conectarse correctamente al backend. El token generado en el cliente no se enviaba como debía, lo que provocaba errores y mucho estrés. Después de darle muchas vueltas y tomarme un descanso para despejar la mente, pude entender mejor cómo funciona la sesión, la manera correcta de enviar el token y cómo configurar Keycloak adecuadamente. Si tuviera más tiempo, me gustaría profundizar en la gestión de roles y permisos para hacer la aplicación aún más robusta. Mientras tanto, seguiré aprendiendo y mejorando estos aspectos por mi cuenta.

Como material de estudio, tuve que entender la configuración de Keycloak y como guardar el JSON para ser importado (esto tan leve me tomo mucho tiempo) después de actualizar e importar el nuevo JSON, tuve que instalar SPRING SECURITY configurar el acceso y luego comenzar hacer pruebas con POSTMAN al token generado en Keycloak. Por ultimo, tuve que comprender en mayor profundidad como se comporta el frontend al momento de guardar un Token en LocalStorage y ser usado correctamente

Para las pruebas unitarias se utilizó JUnit y Mockito, las cuales ya estaban implementadas previamente en el proyecto. Se agregó la herramienta JaCoCo para realizar el análisis de cobertura de código. El objetivo fue comprobar qué porcentaje del código fuente está cubierto por pruebas automatizadas.

---
# Prueba Técnica - Desarrollador Java

Adjunto toda la información relacionada al proyecto, así como la guía para su ejecución y pruebas abajo.

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
- Jasmine (PRUEBAS UNITARIAS -> REVISION DE COBERTURA)  
- JUnit 5 + Mockito (PRUEBAS UNITARIAS) -> JACOCO ( Test de Cobertura )

---

## Cómo levantar el entorno

### 1. Clonar el repositorio

```bash
git clone https://github.com/BecerraDev/springboot-angular19-v3
cd springboot-angular19-v3
```

### 2. Iniciar el entorno de desarrollo
```bash
docker-compose up --build
```
Esto levantará: 

```bash

PostgreSQL en localhost:5432

Keycloak en http://host.docker.internal:8180

Backend Spring Boot en http://localhost:8080

Frontend Angular en http://localhost:4200 <- acá

```

Credenciales. 
Para iniciar sesión usar -> nombre "usuario" y clave "usuario".


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

  Test realizado en JACOCO comando ejecutado mvn clean verify

  ![image](https://github.com/user-attachments/assets/58ca545a-85d8-40ad-8bf1-647ff486cc05)

  Test realizado en JASMINE 

  ![image](https://github.com/user-attachments/assets/a74a7dd9-667d-4c98-83f4-af52b20c8ef3)

  Resultado esperado funcional
  
  ![image](https://github.com/user-attachments/assets/f174b96e-fb40-4aca-b67b-daa90e809533)

  Token generado con exito en Keykloak (Frontend)
  ( Es el mismo que tambien se puede obtener con Postman en http://localhost:8180/realms/miapp/protocol/openid-connect/token )

  ![image](https://github.com/user-attachments/assets/9b2b31fa-dbe4-4a5c-8e0a-6c042c59cf91)

  Token usado en Postman 

  ![image](https://github.com/user-attachments/assets/c020fbcd-6571-4f5e-acff-d0d0e3b55072)






