/**
 * Elesor Studio — Configuración Centralizada
 * Centraliza datos del estudio, URLs de tiendas, rutas de assets y marcadores legales.
 */
const CONFIG = {
  COMPANY_NAME: "Elesor Studio",
  LEGAL_COMPANY_NAME: "[RAZÓN SOCIAL PENDIENTE]",
  CONTACT_EMAIL: "[EMAIL DE CONTACTO]",
  PRIVACY_EMAIL: "[EMAIL DE PRIVACIDAD]",
  LEGAL_ADDRESS: "[DOMICILIO LEGAL PENDIENTE]",
  COUNTRY: "México",
  WEBSITE_URL: "https://elesorstudio.com",
  AVENTURA_PLAY_URL: "[GOOGLE PLAY URL PENDIENTE]",
  MIAU_PLAY_URL: "[GOOGLE PLAY URL PENDIENTE]",
  IMAGES: {
    LOGO: "/assets/img/logo.png",
    AVENTURA_ICON: "/assets/img/aventura-numerica.png",
    MIAU_ICON: "/assets/img/miautiplicacion.png",
  },
  EFFECTIVE_DATE: "[FECHA DE VIGENCIA]",
  LAST_UPDATED: "[FECHA DE ACTUALIZACIÓN]"
};

// Exportar para entornos con módulos si se requiere
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
