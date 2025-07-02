# Etapa de build: usa Maven para compilar el proyecto
FROM maven:3.9.3-eclipse-temurin-17-alpine AS build

WORKDIR /app

COPY pom.xml .
COPY src ./src

RUN mvn clean package -DskipTests && \
    cp target/catalog-0.0.1-SNAPSHOT.jar target/backend-catalogo.jar

# Etapa de producción: imagen con solo JRE y el JAR
FROM openjdk:17-jdk-slim

WORKDIR /app

COPY --from=build /app/target/backend-catalogo.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
