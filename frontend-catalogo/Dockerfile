FROM node:18-alpine

# Directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia archivos de dependencias y las instala
COPY package*.json ./
RUN npm install

# Instala Angular CLI globalmente para usar el comando 'ng'
RUN npm install -g @angular/cli

# Copia el resto del código fuente
COPY . .

# Expone el puerto 4200 para ng serve
EXPOSE 4200

# Ejecuta Angular en modo desarrollo, escuchando en todas las interfaces para que sea accesible fuera del contenedor
CMD ["ng", "serve", "--host", "0.0.0.0"]
