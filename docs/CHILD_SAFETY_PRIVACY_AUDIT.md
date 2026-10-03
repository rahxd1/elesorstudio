# Auditoría de Seguridad Infantil y Privacidad de Menores

Cuestionario de auditoría y verificación para las aplicaciones **Aventura Numérica** y **Miau Multiplicación** de **Elesor Studio**, con el propósito de garantizar el cumplimiento antes de la presentación en Google Play Console (Políticas del Programa de Desarrolladores y Política de Familias) y de la legislación de protección de datos (LFPDPPP en México; COPPA/GDPR de referencia).

---

## 1. Cuestionario de Auditoría

| Pregunta de Auditoría | Estado en Aventura Numérica | Estado en Miau Multiplicación | Exigencia Legal / Google Play |
|---|---|---|---|
| **1. ¿Requiere creación de cuenta o inicio de sesión?** | **NO.** Se juega de forma directa sin login. | **NO.** Incluye selector de perfiles locales sin cuentas en la nube. | En apps infantiles, evitar cuentas es la mejor práctica. Si se requieren cuentas, se exige consentimiento parental verificable. |
| **2. ¿Se recopila nombre, email, teléfono o dirección?** | **NO.** No se solicita ningún dato personal. | **NO.** Los perfiles locales solo usan apodos o avatares sin transmisión. | Prohibido recopilar información identificable de menores sin consentimiento expreso previo de los padres. |
| **3. ¿Se recopila ubicación precisa o aproximada?** | **NO.** No se solicitan permisos de geolocalización. | **NO.** Sin permisos de ubicación en manifiesto. | Prohibido recopilar ubicación precisa en aplicaciones dirigidas a niños. |
| **4. ¿Se accede a identificadores persistentes (AAID, MAC, IMEI)?** | **NO.** No se transmiten identificadores publicitarios. | **NO.** No se transmiten identificadores publicitarios. | Prohibido transmitir el identificador de publicidad de Android (AAID) vinculado a perfiles de niños. |
| **5. ¿Se accede a cámara, micrófono o contactos?** | **NO.** Sin permisos sensibles solicitados. | **NO.** Sin permisos sensibles solicitados. | Exige justificación estricta de funcionalidad esencial; no requeridos en nuestras apps. |
| **6. ¿Existe alguna herramienta de Analytics?** | **[NO CONFIRMADO]** Pendiente de verificar antes del release final. | **[NO CONFIRMADO]** Pendiente de verificar antes del release final. | Si se usa analítica, el proveedor debe estar certificado en el programa de familias de Google Play. |
| **7. ¿Existe reporte de fallos (Crash Reporting)?** | **[NO CONFIRMADO]** Pendiente de auditar en el paquete binario. | **[NO CONFIRMADO]** Pendiente de auditar en el paquete binario. | Permitido solo si no envía datos identificables del menor ni contenido del dispositivo. |
| **8. ¿Contiene publicidad de terceros?** | **NO.** Versión actual libre de publicidad. | **NO.** Versión actual libre de publicidad. | Si se incorpora publicidad en el futuro, debe ser de redes certificadas por Google Play Families. |
| **9. ¿Contiene compras integradas (IAP)?** | **NO.** Sin microtransacciones ni cobros. | **NO.** Sin microtransacciones ni cobros. | Si se implementan en el futuro, se requiere control parental (*Parental Gate*) obligatorio. |
| **10. ¿Permite chat, mensajería o contenido de usuarios?** | **NO.** Modo de juego individual sin comunicación. | **NO.** Modo de juego individual sin comunicación. | Prohibido chat abierto sin moderación y consentimiento en apps de niños. |
| **11. ¿Contiene enlaces web a sitios externos?** | **NO** en el juego directo. | **NO** en el juego directo. | Todo enlace exterior al sitio web del estudio debe estar protegido por una compuerta parental (*Parental Gate*). |

---

## 2. Declaración de Cumplimiento Requerida en Google Play Console

Al completar la ficha en Google Play Console:
1. **Público objetivo:** Seleccionar grupo de edad correspondiente (por ejemplo: 5 años o menos, 6 a 8 años, o 9 a 12 años).
2. **Diseñado para familias (Designed for Families):** Marcar afirmativamente y confirmar cumplimiento de la Política de Familias.
3. **Data Safety Section:**
   - ¿La app recopila o comparte datos personales del usuario? -> **NO**.
   - ¿Todos los datos recopilados por la app se gestionan localmente en el dispositivo? -> **SÍ**.
4. **URL de Política de Privacidad:**
   - Para Aventura Numérica: `https://elesorstudio.com/aventura-numerica/privacidad.html`
   - Para Miau Multiplicación: `https://elesorstudio.com/miau-multiplicacion/privacidad.html`
