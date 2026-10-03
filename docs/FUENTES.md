# Fuentes Oficiales y Marco Normativo de Cumplimiento

Documento de referencia para el diseño, desarrollo, redacción legal y publicación de las aplicaciones y el sitio web de **Elesor Studio** (`https://elesorstudio.com`).

---

## 1. Google Play Console — Políticas del Programa de Desarrolladores

### 1.1 Families Policy (Política de Familias de Google Play)
* **Fuente oficial:** [Google Play Families Policy](https://support.google.com/googleplay/android-developer/answer/9893335)
* **Requisitos clave aplicados:**
  - **Público objetivo infantil:** Toda app dirigida primariamente a niños debe cumplir estrictamente la Política de Familias y el programa *Designed for Families* (DFF).
  - **Recopilación de datos restringida:** Prohibición estricta de transmitir identificadores de publicidad (AAID), dirección MAC, IMEI u otros identificadores persistentes vinculados a niños.
  - **SDKs certificados:** Cualquier SDK de terceros (analítica, anuncios, etc.) debe estar expresamente certificado para el programa de familias de Google Play. Las versiones actuales de nuestras apps operan sin SDKs de terceros no confirmados.
  - **Publicidad:** En caso de incorporar anuncios en versiones futuras, estos deben provenir de redes publicitarias certificadas por Google Play Families, contar con clasificación de contenido adecuada (G o PG) y no contener anuncios basados en intereses o remarketing.
  - **Sin enlaces externos sin protección:** Cualquier enlace saliente (sitio web, redes sociales, compras) debe contar con una barrera o verificación para adultos (*Parental Gate*).

### 1.2 Data Safety Section (Seguridad de los Datos)
* **Fuente oficial:** [Google Play Data Safety Section Requirements](https://support.google.com/googleplay/android-developer/answer/10787469)
* **Requisitos clave aplicados:**
  - Declaración precisa de recopilación, almacenamiento y compartición de datos.
  - Las aplicaciones actuales de Elesor Studio operan 100% de manera local: no recopilan, no transmiten ni comparten información personal identificable.
  - La política de privacidad debe estar publicada en una URL pública, accesible sin inicio de sesión y con formato estándar web (HTML).

---

## 2. Marco Legal de Protección de Datos Personales

### 2.1 México — Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP)
* **Fuente oficial:** [LFPDPPP - Cámara de Diputados de México](https://www.diputados.gob.mx/LeyesBiblio/pdf/LFPDPPP.pdf) / [INAI (Instituto Nacional de Transparencia, Acceso a la Información y Protección de Datos Personales)](https://home.inai.org.mx/)
* **Requisitos clave aplicados:**
  - **Principio de consentimiento para menores de edad:** El tratamiento de datos de niñas, niños y adolescentes requiere el consentimiento expreso del padre, madre o tutor legal.
  - **Aviso de Privacidad Integral:** Identidad y domicilio del responsable, finalidades del tratamiento, mecanismos para ejercer los Derechos ARCO (Acceso, Rectificación, Cancelación y Oposición), medios para revocación del consentimiento y procedimientos ante cambios en el aviso.
  - **Principio de minimización:** Solo deben tratarse los datos estrictamente necesarios. Dado que las apps no requieren registro ni guardan datos en servidores remotos, se cumple por diseño con la máxima protección.

### 2.2 Referencias Internacionales (COPPA y GDPR-K)
* **COPPA (EE.UU. — Children's Online Privacy Protection Act):** 16 CFR Part 312. Aplicable si usuarios de EE.UU. acceden a las apps. Exige no recopilar información de menores de 13 años sin consentimiento paterno verificable.
* **GDPR (Unión Europea — Art. 8):** Regulación para el tratamiento de datos de menores en servicios de la sociedad de la información.

---

## 3. Accesibilidad Web (WCAG 2.1 Nivel AA)

* **Fuente oficial:** [W3C Web Content Accessibility Guidelines (WCAG) 2.1](https://www.w3.org/TR/WCAG21/)
* **Requisitos clave aplicados:**
  - **Contraste de color (Criterio 1.4.3):** Ratio mínimo de contraste de 4.5:1 para texto normal y 3:1 para texto grande/componentes interactivos.
  - **Navegación por teclado (Criterio 2.1.1 & 2.4.7):** Todo elemento interactivo accesible por Tab, con indicador de foco visible (`:focus-visible`).
  - **Preferencia de movimiento reducido (Criterio 2.3.3):** Soporte de `@media (prefers-reduced-motion: reduce)` en CSS y JS para desactivar animaciones complejas o parpadeos.
  - **Semántica y ARIA:** Uso estricto de elementos HTML5 semánticos (`<main>`, `<nav>`, `<article>`, `<header>`, `<footer>`), atributos `aria-expanded`, `aria-label` y enlaces de salto (*skip-link*).
  - **Tamaño de destino táctil:** Mínimo de 44x44 px en botones y enlaces interactivos para dispositivos móviles.

---

## 4. Estándares Técnicos y SEO

* **Schema.org:** Especificaciones para `Organization` y `SoftwareApplication` sin atributos falseados o inventados.
* **Open Graph Protocol & Twitter Cards:** Metadatos canónicos con URLs absolutas para previsualización fidedigna en redes y mensajería.
* **Robots Exclusion Standard & Sitemaps XML:** Protocolos estándar de indexación para buscadores con URLs canónicas limpias.
