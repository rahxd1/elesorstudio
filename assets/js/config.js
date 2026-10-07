/**
 * Elesor Studio — Configuración Centralizada
 * Centraliza datos del estudio, URLs de tiendas, rutas de assets y marcadores legales.
 */
const CONFIG = {
  COMPANY_NAME: "Elesor Studio",
  LEGAL_COMPANY_NAME: "Elesor Studio",
  CONTACT_EMAIL: "contacto@elesorstudio.com",
  PRIVACY_EMAIL: "privacidad@elesorstudio.com",
  LEGAL_ADDRESS: "México",
  COUNTRY: "México",
  WEBSITE_URL: "https://elesorstudio.com",
  AVENTURA_PLAY_URL: "https://elesorstudio.com/aventura-numerica/",
  MIAU_PLAY_URL: "https://elesorstudio.com/miau-multiplicacion/",
  IMAGES: {
    LOGO: "/assets/img/logo.png",
    AVENTURA_ICON: "/assets/img/aventura-numerica.png",
    MIAU_ICON: "/assets/img/miautiplicacion.png",
  },
  EFFECTIVE_DATE: "Octubre 2026",
  LAST_UPDATED: "Octubre 2026"
};

// Exportar para entornos con módulos si se requiere
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
