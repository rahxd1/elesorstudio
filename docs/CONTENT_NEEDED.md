# Contenido y Materiales Pendientes — Checklist para el Propietario

Este documento consolida la lista detallada de elementos, activos gráficos, datos legales y configuraciones que el propietario del proyecto debe proveer o definir para completar la transición de los entornos de desarrollo a producción en **Elesor Studio** (`https://elesorstudio.com`).

---

## 1. Activos Gráficos y Multimedia

| Elemento | Estado Actual | Qué se necesita | Destino en el proyecto |
|---|---|---|---|
| **Logo Vectorial / SVG** | Existe `logo.png` (rasterizado) | Archivo `logo.svg` en vector para escalabilidad infinita sin pérdida de nitidez. | `assets/img/logo.svg` |
| **Paquete de Favicons** | Se usa `logo.png` temporalmente | Generar favicon multipropósito: `favicon.ico`, `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png` (180x180), `android-chrome-192x192.png` y `512x512.png`. | Raíz y `assets/img/` |
| **Screenshots Reales Aventura Numérica (16:9)** | 4 Placeholders SVG 16:9 (`aventura-hero-placeholder.svg`, `aventura-screen-1.svg`, etc.) | **3 a 4 capturas reales de pantalla horizontal (1920x1080 o 1600x900)** tomadas directamente desde la app en emulador o dispositivo real. Deben mostrar: mapa de mundos, dinámicas de cálculo y minijuegos. | `assets/img/` |
| **Screenshots Reales Miau Multiplicación (16:9)** | 4 Placeholders SVG 16:9 (`miau-hero-placeholder.svg`, `miau-screen-1.svg`, etc.) | **3 a 4 capturas reales de pantalla horizontal (1920x1080 o 1600x900)** mostrando: selección de tablas ninja, personalización de la mascota y modo aventura. | `assets/img/` |

---

## 2. Información Legal y Corporativa

| Campo | Marcador Actual | Dato Requerido |
|---|---|---|
| **Razón Social** | `[RAZÓN SOCIAL PENDIENTE]` | Nombre formal de la empresa o nombre del titular persona física con actividad empresarial responsable de la app. |
| **Domicilio Legal** | `[DOMICILIO LEGAL PENDIENTE]` | Domicilio para oír y recibir notificaciones legales en México conforme a la LFPDPPP. |
| **Correo de Contacto** | `[EMAIL DE CONTACTO]` | Correo electrónico oficial del estudio (ej. `contacto@elesorstudio.com` o `hola@elesorstudio.com`). |
| **Correo de Privacidad** | `[EMAIL DE PRIVACIDAD]` | Correo exclusivo para atención de derechos ARCO y privacidad (ej. `privacidad@elesorstudio.com`). |
| **Jurisdicción Judicial** | `[JURISDICCIÓN PENDIENTE DE DEFINIR]` | Ciudad / Estado en México para los tribunales competentes en términos y condiciones (ej. Ciudad de México). |
| **Fecha de Vigencia** | `[FECHA DE VIGENCIA]` | Fecha formal de entrada en vigor de los documentos legales (ej. 1 de noviembre de 2026). |
| **Fecha de Actualización** | `[FECHA DE ACTUALIZACIÓN]` | Fecha de la última revisión documental. |

---

## 3. URLs de Publicación y Servicios de Terceros

| Servicio | Marcador Actual | Acción Requerida |
|---|---|---|
| **Google Play URL Aventura** | `[GOOGLE PLAY URL PENDIENTE]` | Copiar la URL pública asignada por Google Play Console tras crear la ficha de tienda. Configurar en `assets/js/config.js`. |
| **Google Play URL Miau** | `[GOOGLE PLAY URL PENDIENTE]` | Copiar la URL pública asignada por Google Play Console tras crear la ficha de tienda. Configurar en `assets/js/config.js`. |
| **Endpoint del Formulario Web** | `[CONTACT_FORM_ENDPOINT PENDIENTE]` | Crear una cuenta en un servicio receptor de formularios estáticos (como Formspree, Getform o Basin) y colocar la URL del endpoint en el atributo `action` del formulario o en el archivo `.env`. |

---

## 4. Definiciones de Producto y Público Objetivo

* [ ] **Rango etario oficial de Aventura Numérica:** Definir si la app se clasifica en Google Play para "Menores de 5 años", "De 6 a 8 años" o "De 9 a 12 años".
* [ ] **Rango etario oficial de Miau Multiplicación:** Definir la franja etaria correspondiente (habitualmente 6 a 8 años o 9 a 12 años para tablas de multiplicar).
* [ ] **Auditoría de dependencias en React Native / Expo:** Ejecutar una revisión de los paquetes instalados en `aventura-suma` y `miaultiplicacion` antes de compilar el `.aab` de producción, asegurando que no se incluyan bibliotecas de rastreo o analítica no autorizadas por la Política de Familias.
