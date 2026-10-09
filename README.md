# KAPITAL® — Organizador de Gastos Personales & Finanzas Modulares

Sistema web de gestión financiera personal diseñado con la arquitectura visual y metodológica de **Dagatek**.

---

## 🚀 Despliegue en Render (Guía Rápida)

### Opción 1: Despliegue Automático con `render.yaml` (Blueprint)
1. Sube este repositorio a tu cuenta de **GitHub** o **GitLab**.
2. En tu panel de [Render.com](https://dashboard.render.com), haz clic en **New +** -> **Blueprint**.
3. Conecta el repositorio: Render detectará automáticamente el archivo `render.yaml` y configurará el Web Service gratuito.
4. Haz clic en **Apply** y tu aplicación estará activa con URL pública HTTPS en minutos.

### Opción 2: Web Service Manual en Render
* **Build Command:** `npm install`
* **Start Command:** `node server.js`
* **Environment:** `Node`
* **Plan:** `Free`

---

## 🛠️ Ejecución Local

```bash
npm install
npm run dev
# Abre http://localhost:3000
```
