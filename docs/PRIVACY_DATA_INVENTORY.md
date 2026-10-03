# Inventario de Datos y Tecnologías de Privacidad

Este inventario documenta las tecnologías, SDKs y tratamientos de datos actuales y potenciales en el ecosistema digital de **Elesor Studio** (`https://elesorstudio.com`), incluyendo el sitio web y las aplicaciones móviles **Aventura Numérica** y **Miau Multiplicación**.

> **Regla de oro:** No se agrega ninguna tecnología de seguimiento o analítica de terceros por costumbre. Todo dato recopilado debe tener justificación operativa legítima, contar con consentimiento cuando aplique y estar verificado técnicamente.

---

## 1. Tabla de Inventario de Tecnologías

| Tecnología | Actualmente usada | Datos involucrados | Propósito | Proveedor | ¿Se comparte con terceros? | Requiere consentimiento expreso |
|---|---|---|---|---|---|---|
| **Analytics (Web)** | NO | Ninguno | — | — | NO | No aplica |
| **Analytics (Apps)** | NO CONFIRMADO | Por determinar en build de producción | Métricas de rendimiento de juego | Pendiente de confirmar en apps | NO | Sí (en apps infantiles debe ser SDK certificado para familias) |
| **Publicidad (Ads)** | NO | Ninguno | — | — | NO | No aplica (versión actual sin anuncios) |
| **Autenticación / Login** | NO | Ninguno | — | — | NO | No aplica (juegos sin cuentas) |
| **Pagos / In-App Purchases (IAP)** | NO | Ninguno | — | — | NO | No aplica (juegos sin microtransacciones) |
| **Crash Reporting** | NO CONFIRMADO | Logs de error del sistema | Detección de fallos | Por determinar | NO | Requiere evaluación técnica previa a release |
| **Notificaciones Push** | NO CONFIRMADO | Token de notificación del dispositivo | Recordatorios locales de práctica | Sistema operativo | NO | Sí (permiso del SO solicitado al tutor) |
| **Cookies (Sitio Web)** | Solo técnicas esenciales | Datos temporales de sesión de red | Seguridad y entrega de contenido estático | Proveedor de hosting | NO | No (exentas al no ser de rastreo ni publicidad) |
| **Píxeles de Rastreo (Meta, TikTok, etc.)** | NO | Ninguno | — | — | NO | No aplica |
| **SDKs de Terceros** | POR DETERMINAR | Por auditar en dependencias finales | Funcionalidades de audio y renderizado | Expo / React Native | NO | Conforme a Políticas de Google Play Families |

---

## 2. Declaración de Almacenamiento Local en las Aplicaciones

* **Aventura Numérica:** Almacena estrellas ganadas, niveles desbloqueados y preferencias de volumen/música mediante almacenamiento persistente local en el teléfono del usuario. Ningún dato sale a la red.
* **Miau Multiplicación:** Almacena perfiles locales de práctica, avance de retos y personalización de la mascota en base de datos SQLite local dentro del dispositivo. Cero sincronización remota en la versión actual.

---

## 3. Protocolo de Modificación
Cualquier incorporación de un SDK de terceros en futuras versiones obligará a:
1. Validar que el SDK esté listado en el índice oficial de SDKs aprobados para familias de Google Play.
2. Actualizar este inventario.
3. Actualizar la sección de *Data Safety* en Google Play Console.
4. Actualizar la política de privacidad de la app correspondiente antes de publicar la actualización.
