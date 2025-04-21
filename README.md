# CRUD en MongoDB con TypeScript y Mongoose

Este proyecto implementa operaciones CRUD (Create, Read, Update, Delete) en MongoDB utilizando TypeScript y Mongoose.

## Tabla de Contenidos

- [Instalación](#instalación)
- [Configuración](#configuración)
- [Uso](#uso)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Contribución](#contribución)

## Instalación

Para instalar las dependencias del proyecto, ejecuta el siguiente comando:

```bash 
npm install
```

## Configuración

### Archivo .env
Crea un archivo .env en la raíz del proyecto con la URL de tu base de datos MongoDB:

```bash 
URI_DB=mongodb://localhost:27017/products_unt
```

### Configuración de MongoDB
Asegúrate de que tu servidor MongoDB esté en ejecución. Puedes verificar esto abriendo una terminal y ejecutando:

```bash 
mongo
```

Si MongoDB no está en ejecución, inícialo utilizando el siguiente comando (en una terminal separada):

```bash 
mongod
```

## Uso
Para ejecutar el proyecto, utiliza los siguientes comandos:

### Ejecutar el Proyecto en Modo Desarrollo

```bash 
npm run dev
``` 

### Ejecutar una Acción CRUD

Obtener todos los productos:

```bash 
npm run dev -- getProducts
```

Crear un producto:

```bash 
npm run dev -- createProduct "Tablet" 299.99 "A high-performance tablet" "Electronics"
```

Obtener un producto por ID:

```bash 
npm run dev -- getProductById "61a7c7a2b4b6c7d8e9f10111"
```

Obtener productos por nombre:

```bash 
npm run dev -- getProductsByName "Laptop"
```

Actualizar un producto:

```bash 
npm run dev -- updateProduct "61a7c7a2b4b6c7d8e9f10111" name=Laptop price=899.99
```

Eliminar un producto:

```bash 
npm run dev -- deleteProduct "61a7c7a2b4b6c7d8e9f10111"
```

### Para compilar a JavaScript

```bash 
npm run build
```

## Estructura del Proyecto

mongo-crud-typescript/
│
├── node_modules/
│
├── src/
│   ├── config/
│   │   └── mongo.ts
│   ├── models/
│   │   └── Product.ts
│   ├── crud.ts
│   └── index.ts
│
├── .env
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md

## Contribución

1. Haz un fork del repositorio.

2. Crea una rama nueva para tu contribución:

```bash 
git checkout -b feature/nueva-funcionalidad
```

3. Realiza tus cambios y haz commits con mensajes descriptivos.

4. Haz un pull request a la rama principal del repositorio original.
