# Ecosistema Web — Elesor Studio (`elesorstudio.com`)

Sitio web corporativo y landings oficiales para las aplicaciones educativas infantiles de **Elesor Studio**:
1. **Aventura Numérica** (`/aventura-numerica/`)
2. **Miau Multiplicación** (`/miau-multiplicacion/`)

Construido con **HTML5 semántico, CSS3 moderno y JavaScript Vanilla ES6+**, sin frameworks pesados, con arquitectura 100% estática y optimizado para cumplir con los estándares de **Google Play Families Policy**, **Data Safety**, **LFPDPPP (México)** y accesibilidad **WCAG 2.1 Nivel AA**.

---

## 📁 Estructura del Proyecto

```
/
├── index.html                      → Landing corporativa de Elesor Studio
├── miau-multiplicacion/
│   ├── index.html                  → Landing oficial de Miau Multiplicación
│   ├── privacidad.html             → Política de privacidad (Google Play Families)
│   └── terminos.html               → Términos y condiciones de la app
├── aventura-numerica/
│   ├── index.html                  → Landing oficial de Aventura Numérica
│   ├── privacidad.html             → Política de privacidad (Google Play Families)
│   └── terminos.html               → Términos y condiciones de la app
├── privacidad.html                 → Política de privacidad general del estudio
├── terminos.html                   → Términos y condiciones generales del estudio
├── robots.txt                      → Directivas de indexación y sitemap
├── sitemap.xml                     → Mapa de sitio XML con 9 URLs canónicas
├── .env.example                    → Plantilla de variables de entorno
├── assets/
│   ├── css/
│   │   ├── base.css                → Reset, variables, botones, 16:9 media, header/footer
│   │   ├── elesor.css              → Estilos propios de la landing corporativa
│   │   ├── miau.css                → Estilos de Miau (gatito SVG animado, colores galácticos)
│   │   ├── aventura.css            → Estilos de Aventura (violetas, ruta SVG, exploración)
│   │   └── legal.css               → Tipografía y tablas para lectura legal
│   ├── js/
│   │   ├── config.js               → Configuración y constantes centralizadas
│   │   ├── main.js                 → Menú móvil, reveal on scroll, año dinámico
│   │   ├── elesor.js               → Smooth scroll y foco accesible en home
│   │   ├── miau.js                 → Lightbox de screenshots y microinteracción del gato
│   │   └── aventura.js             → Lightbox de screenshots para Aventura Numérica
│   └── img/
│       ├── logo.png                → [REAL] Logo oficial de Elesor Studio
│       ├── aventura-numerica.png   → [REAL] Arte e icono de Aventura Numérica
│       ├── miautiplicacion.png     → [REAL] Arte e icono de Miau Multiplicación
│       └── *.svg                   → Placeholders de capturas 16:9 y vistas de juego
└── docs/
    ├── CONTENT_NEEDED.md           → Lista de materiales pendientes para el propietario
    ├── LAUNCH_CHECKLIST.md         → Lista de comprobación paso a paso previa al lanzamiento
    ├── CHILD_SAFETY_PRIVACY_AUDIT.md → Auditoría de privacidad de menores y Google Play
    ├── PRIVACY_DATA_INVENTORY.md   → Inventario de datos, SDKs y cookies
    └── FUENTES.md                  → Normativa oficial consultada (Google Play, LFPDPPP, WCAG)
```

---

## 🚀 Cómo Servir el Sitio Localmente

El sitio es completamente estático y no requiere ningún proceso de compilación (*build*). Puedes probarlo localmente con cualquiera de estas opciones:

### Opción 1: Con Python (Recomendado)
```bash
# Python 3
python -m http.server 8000
```
Luego abre tu navegador en `http://localhost:8000`.

### Opción 2: Con Node.js (`npx serve`)
```bash
npx serve .
```

### Opción 3: Con la extensión Live Server de VS Code / Cursor
Haz clic derecho en `index.html` y selecciona **"Open with Live Server"**.

---

## 🔄 Cómo Reemplazar los Placeholders con Datos Reales

1. **Configuración Centralizada (`assets/js/config.js`):**
   Edita los valores de `LEGAL_COMPANY_NAME`, `CONTACT_EMAIL`, `PRIVACY_EMAIL`, `LEGAL_ADDRESS`, `AVENTURA_PLAY_URL` y `MIAU_PLAY_URL`.
2. **Capturas de Pantalla 16:9:**
   Cuando tengas los screenshots de gameplay reales de ambas aplicaciones (en formato horizontal 16:9), colócalos en `assets/img/` y actualiza las rutas en `aventura-numerica/index.html` y `miau-multiplicacion/index.html`.
3. **Páginas Legales:**
   Revisa los documentos en `docs/CONTENT_NEEDED.md` y realiza la validación jurídica de los textos marcados con `[REVISIÓN LEGAL REQUERIDA]` antes del despliegue en producción.
4. **Formulario de Contacto:**
   Configura un servicio de backend estático (Formspree, Basin, etc.) y actualiza el endpoint en `index.html`.

---

## 🌐 Opciones de Despliegue en Producción

* **Netlify / Vercel:** Conecta el repositorio de GitHub. No requiere comando de build (déjalo vacío o usa `Publish directory: .`).
* **GitHub Pages:** Activa GitHub Pages en las opciones del repositorio seleccionando la rama `main` y directorio raíz `/`.
* **Cloudflare Pages / Hosting cPanel:** Sube todos los archivos a la carpeta raíz de publicación (`public_html` o similar).

---

## 🛡️ Cumplimiento y Privacidad Infantil

Las landing pages de **Aventura Numérica** y **Miau Multiplicación** están preparadas para ser vinculadas directamente en la ficha de **Google Play Console** dentro de la sección obligatoria de **Política de Privacidad**:
- `https://elesorstudio.com/aventura-numerica/privacidad.html`
- `https://elesorstudio.com/miau-multiplicacion/privacidad.html`
