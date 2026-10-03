/**
 * Elesor Studio — JavaScript Compartido
 * Manejo accesible del menú móvil, animaciones reveal on scroll, año dinámico,
 * enlace de configuración y validación de formulario.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFooterYear();
  initScrollReveal();
  initConfigBindings();
  initContactForm();
});

/**
 * Navegación móvil con soporte accesible de teclado (ESC y aria-expanded)
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const mobileNav = document.querySelector('.mobile-nav');

  if (!toggleBtn || !mobileNav) return;

  const closeMenu = () => {
    toggleBtn.setAttribute('aria-expanded', 'false');
    mobileNav.classList.remove('is-open');
    document.body.style.overflow = '';
  };

  const openMenu = () => {
    toggleBtn.setAttribute('aria-expanded', 'true');
    mobileNav.classList.add('is-open');
    document.body.style.overflow = 'hidden';
  };

  toggleBtn.addEventListener('click', () => {
    const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
    if (isExpanded) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  // Cerrar al presionar Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('is-open')) {
      closeMenu();
      toggleBtn.focus();
    }
  });

  // Cerrar al hacer clic en un enlace de navegación
  const navLinks = mobileNav.querySelectorAll('a');
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMenu();
    });
  });
}

/**
 * Año actual dinámico en el footer
 */
function initFooterYear() {
  const yearElements = document.querySelectorAll('[data-year]');
  const currentYear = new Date().getFullYear();
  yearElements.forEach((el) => {
    el.textContent = currentYear;
  });
}

/**
 * Animaciones reveal on scroll respetando prefers-reduced-motion
 */
function initScrollReveal() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealElements = document.querySelectorAll('.reveal');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    {
      root: null,
      threshold: 0.1,
      rootMargin: '0px 0px -40px 0px',
    }
  );

  revealElements.forEach((el) => observer.observe(el));
}

/**
 * Inyecta dinámicamente datos de CONFIG en elementos marcados con data-config
 */
function initConfigBindings() {
  if (typeof CONFIG === 'undefined') return;

  // Textos
  document.querySelectorAll('[data-config]').forEach((el) => {
    const key = el.getAttribute('data-config');
    if (CONFIG[key]) {
      el.textContent = CONFIG[key];
    }
  });

  // Enlaces href
  document.querySelectorAll('[data-config-href]').forEach((el) => {
    const key = el.getAttribute('data-config-href');
    if (CONFIG[key] && !CONFIG[key].includes('[PENDIENTE')) {
      el.setAttribute('href', CONFIG[key]);
    }
  });
}

/**
 * Manejador del formulario de contacto con detección de Honeypot y aviso de endpoint
 */
function initContactForm() {
  const contactForm = document.getElementById('contact-form');
  if (!contactForm) return;

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Verificación de Honeypot anti-spam
    const honeypot = contactForm.querySelector('input[name="_honey"]');
    if (honeypot && honeypot.value.trim() !== '') {
      // Bot detectado: silenciar sin procesar
      return;
    }

    const name = (contactForm.querySelector('#contact-name')?.value || '').trim();
    const email = (contactForm.querySelector('#contact-email')?.value || '').trim();
    const message = (contactForm.querySelector('#contact-message')?.value || '').trim();

    if (!name || !email || !message) {
      alert('Por favor, completa todos los campos requeridos.');
      return;
    }

    // Comprobación de endpoint
    const statusMsg = document.getElementById('form-status');
    if (statusMsg) {
      statusMsg.style.display = 'block';
      statusMsg.textContent = 'Mensaje registrado. Nota técnica: [CONTACT_FORM_ENDPOINT PENDIENTE DE CONFIGURACIÓN]. Puedes contactarnos directamente a través de nuestro correo oficial.';
      statusMsg.className = 'form-notice form-notice-info';
    } else {
      alert('Nota: El endpoint del formulario está en proceso de integración [CONTACT_FORM_ENDPOINT PENDIENTE].');
    }
  });
}
