# Proyecto Node.js + Express (Curso)

Este proyecto es parte de un curso de introducción a **Node.js**.  
Incluye un servidor HTTP básico que responde con `"Hola Mundo"`, tanto en **localhost** como en **Render**.

---

## 🚀 Requisitos

- [Node.js](https://nodejs.org/) v18 o superior
- npm (viene incluido con Node.js)

---

## 📂 Archivos principales

- **servidor-localhost.js** → versión para correr en tu computadora local en el puerto `3000`.
- **servidor-render.js** → versión lista para desplegar en [Render](https://render.com), donde el puerto lo asigna la plataforma.

---

## ▶️ Ejecución en Localhost

1. Clona este repositorio:

   ```bash
   git clone https://github.com/tu-usuario/tu-repo.git
   cd tu-repo
   ```

2. Instala dependencias (si existieran en el futuro):

   ```bash
   npm install
   ```

3. Ejecuta el servidor local:

   ```bash
   node localhost.js
   ```
4. Para probar un ejemplo de rutas

   ```bash
   node rutas.js
   ```
5. Abre tu navegador en:

   ```
   http://localhost:3000
   ```

También puedes probar con **curl** desde la terminal:

```bash
curl http://localhost:3000
```

Deberías recibir:

```
Hola Mundo
```

---

## 🌐 Ejecución en Render

Render asigna automáticamente el puerto en la variable de entorno `PORT`.

El archivo **server.js** está preparado para eso:

```js
const PORT = process.env.PORT || 3000;
```

Al desplegar en Render, tu aplicación estará disponible en la URL generada por la plataforma, por ejemplo:

```
https://mi-servidor.onrender.com
```

---

## 📌 Notas del curso

- Los servidores incluidos son ejemplos básicos con **Node.js nativo** (sin Express aún).

---

## 👨‍💻 Autor

Proyecto realizado como parte de un curso de **Node.js**.