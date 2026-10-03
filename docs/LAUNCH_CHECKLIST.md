# Checklist Integral de Lanzamiento (Launch Checklist)

Lista de control paso a paso para el despliegue del ecosistema web y la publicación en Google Play Store de **Elesor Studio** (`https://elesorstudio.com`).

---

## 1. Nivel Corporativo (Elesor Studio)

- [ ] **Dominio y DNS:**
  - [ ] Registrar / configurar DNS de `elesorstudio.com`.
  - [ ] Configurar registros `A` o `CNAME` apuntando al hosting estático (Netlify, Vercel, Cloudflare Pages o GitHub Pages).
  - [ ] Forzar redirección HTTPS automática con certificado SSL/TLS activo.
  - [ ] Redirección de `www.elesorstudio.com` a `https://elesorstudio.com`.
- [ ] **Identidad y Correos:**
  - [ ] Configurar casillas de correo corporativo para `contacto@elesorstudio.com` y `privacidad@elesorstudio.com`.
  - [ ] Validar registros SPF, DKIM y DMARC para garantizar la entregabilidad de los correos.
- [ ] **Datos Legales:**
  - [ ] Sustituir los marcadores `[RAZÓN SOCIAL PENDIENTE]`, `[DOMICILIO LEGAL PENDIENTE]` y `[JURISDICCIÓN PENDIENTE DE DEFINIR]`.
  - [ ] Realizar la revisión jurídica final y retirar el aviso `[REVISIÓN LEGAL REQUERIDA]`.

---

## 2. Nivel Técnico del Sitio Web

- [ ] **SEO y Rastreo:**
  - [ ] `robots.txt` activo en la raíz y apuntando a `https://elesorstudio.com/sitemap.xml`.
  - [ ] `sitemap.xml` con las 9 URLs canónicas completas y fechas actualizadas.
  - [ ] Validar etiquetas `canonical` en las 9 páginas.
  - [ ] Validar etiquetas Open Graph y Twitter Cards con Facebook Sharing Debugger y Twitter Card Validator.
- [ ] **Accesibilidad (WCAG 2.1 Nivel AA):**
  - [ ] Verificar contraste de textos (mínimo 4.5:1 para texto normal, 3:1 para títulos).
  - [ ] Comprobar navegación completa por teclado (Tab, Shift+Tab, Enter, Escape).
  - [ ] Verificar el funcionamiento del enlace de salto accesible (*skip-link*).
  - [ ] Comprobar que `@media (prefers-reduced-motion: reduce)` desactiva animaciones y transiciones.
- [ ] **Responsive Design y Dispositivos:**
  - [ ] Prueba en pantallas móviles estrechas (375px - 430px) sin desbordamientos horizontales.
  - [ ] Prueba en tablets y resoluciones de escritorio (768px, 1024px, 1280px, 1440px).
  - [ ] Comprobar que todos los screenshots y mockups de juegos mantengan su proporción panorámica **16:9** en cualquier resolución.
- [ ] **Formulario y Envíos:**
  - [ ] Integrar el endpoint real en el formulario de contacto sustituyendo `[CONTACT_FORM_ENDPOINT PENDIENTE]`.
  - [ ] Realizar prueba de envío real y verificar recepción de notificación por correo.
  - [ ] Confirmar que el campo oculto honeypot previene el spam automático.

---

## 3. Aventura Numérica (App & Ficha Google Play)

- [ ] **Material Gráfico:**
  - [ ] Ícono oficial de la app verificado en 512x512 px.
  - [ ] Reemplazar los 4 placeholders SVG por capturas de pantalla reales en **16:9 horizontal** (mínimo 1920x1080 o 1600x900).
- [ ] **Google Play Console:**
  - [ ] Registrar la aplicación en Google Play Console con nombre "Aventura Numérica".
  - [ ] **Política de Familias (Designed for Families):** Seleccionar la categoría de edad y declarar cumplimiento integral de la política de familias.
  - [ ] **Sección Data Safety:** Declarar que la app NO recopila ni comparte datos personales con terceros.
  - [ ] **URL de Política de Privacidad:** Introducir obligatoriamente la URL pública: `https://elesorstudio.com/aventura-numerica/privacidad.html`.
  - [ ] **Enlace a la tienda:** Una vez generada la URL de Google Play, actualizar `AVENTURA_PLAY_URL` en `assets/js/config.js` y en la landing.
- [ ] **Auditoría del Paquete (.aab):**
  - [ ] Verificar que no existan SDKs no certificados en el `package.json` de producción.
  - [ ] Comprobar que no se soliciten permisos innecesarios en `AndroidManifest.xml` (sin geolocalización, sin cámara, sin lectura de contactos).

---

## 4. Miau Multiplicación (App & Ficha Google Play)

- [ ] **Material Gráfico:**
  - [ ] Ícono oficial de la app verificado en 512x512 px.
  - [ ] Reemplazar los 4 placeholders SVG por capturas de pantalla reales en **16:9 horizontal** (mínimo 1920x1080 o 1600x900).
- [ ] **Google Play Console:**
  - [ ] Registrar la aplicación en Google Play Console con nombre "Miau Multiplicación".
  - [ ] **Política de Familias:** Declarar público objetivo infantil y certificar ausencia de rastreadores conductuales.
  - [ ] **Sección Data Safety:** Declarar que no se recopila información personal identificable y que el almacenamiento de perfiles de juego es 100% local.
  - [ ] **URL de Política de Privacidad:** Introducir obligatoriamente la URL pública: `https://elesorstudio.com/miau-multiplicacion/privacidad.html`.
  - [ ] **Enlace a la tienda:** Una vez generada la URL de Google Play, actualizar `MIAU_PLAY_URL` en `assets/js/config.js` y en la landing.
- [ ] **Auditoría del Paquete (.aab):**
  - [ ] Verificar que la base de datos local SQLite funcione sin sincronizaciones de red no declaradas.
  - [ ] Verificar que no existan SDKs comerciales de terceros activos.
