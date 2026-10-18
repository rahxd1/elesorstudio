/**
 * Aventura Numérica — JavaScript Específico
 * Manejo de Slider Automático 3D Coverflow para capturas verticales (Portrait)
 * y Lightbox accesible para ampliar en alta resolución.
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavDropdowns();
  const lightboxApi = initGalleryLightbox();
  initScreensAutoSlider(lightboxApi);
});

/**
 * Manejo de submenús desplegables del Header (hover + clic + Escape)
 */
function initNavDropdowns() {
  const dropdowns = Array.from(document.querySelectorAll('.nav-dropdown'));
  if (!dropdowns.length) return;

  const closeAll = () => {
    dropdowns.forEach((dd) => {
      dd.classList.remove('is-open');
      const btn = dd.querySelector('.nav-dropdown-toggle');
      if (btn) btn.setAttribute('aria-expanded', 'false');
    });
  };

  dropdowns.forEach((dd) => {
    const btn = dd.querySelector('.nav-dropdown-toggle');
    const links = dd.querySelectorAll('.nav-dropdown-panel a');

    if (btn) {
      btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = dd.classList.contains('is-open');
        closeAll();
        if (!isOpen) {
          dd.classList.add('is-open');
          btn.setAttribute('aria-expanded', 'true');
        }
      });
    }

    links.forEach((link) => {
      link.addEventListener('click', () => {
        closeAll();
      });
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      closeAll();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeAll();
    }
  });
}

/**
 * Slider Automático 3D Coverflow para las 7 pantallas reales de Aventura Numérica
 */
function initScreensAutoSlider(lightboxApi) {
  const wrapper = document.getElementById('screens-auto-slider');
  if (!wrapper) return;

  const slides = Array.from(wrapper.querySelectorAll('.slider-phone-item'));
  const pillButtons = Array.from(wrapper.querySelectorAll('.slider-thumb-pill'));
  const prevBtn = document.getElementById('slider-prev');
  const nextBtn = document.getElementById('slider-next');
  const playToggleBtn = document.getElementById('slider-play-toggle');
  const zoomBtn = document.getElementById('slider-zoom-btn');

  const stepBadgeEl = document.getElementById('slider-step-badge');
  const titleEl = document.getElementById('slider-info-title');
  const descEl = document.getElementById('slider-info-desc');
  const highlightsEl = document.getElementById('slider-highlights');
  const progressFillEl = document.getElementById('slider-progress-fill');

  const SLIDE_DATA = [
    {
      step: 'Pantalla 1 de 7 · Inicio',
      title: 'Portada Mágica y Ajuste Parental',
      desc: 'Entrada inmediata con un solo toque en «▶ Empezar» para los niños, y botón inferior «Soy un adulto (configurar nivel)» protegido por barrera matemática para elegir el grado escolar exacto.',
      highlights: [
        { text: '✨ Arte en Plastilina 3D', cls: 'tag-gold' },
        { text: '🔒 Barrera Parental', cls: 'tag-green' },
        { text: '👶 Perfiles Locales', cls: 'tag-blue' }
      ]
    },
    {
      step: 'Pantalla 2 de 7 · Hogar 3D',
      title: 'Hogar Interactivo: ¡Hora de Comer!',
      desc: 'Las monedas ganadas resolviendo sumas y restas sirven para alimentar a Mochi, Pompón o Bambú con sándwiches, manzanas y bambú fresco. ¡Sin anuncios ni microtransacciones!',
      highlights: [
        { text: '🐼 3 Mascotas en Plastilina', cls: 'tag-gold' },
        { text: '🥪 Comida por Esfuerzo', cls: 'tag-green' },
        { text: '❤️ Vínculo Afectivo', cls: 'tag-purple' }
      ]
    },
    {
      step: 'Pantalla 3 de 7 · Mapa de Ruta',
      title: '6 Mundos Temáticos y «🏁 Ya lo sé»',
      desc: 'Recorre caminos de plastilina como el Castillo Real con niveles progresivos, conteo de estrellas (⭐ 18) y el botón inteligente «🏁 Ya lo sé» para saltar mundos ya dominados.',
      highlights: [
        { text: '🏰 6 Mundos Progresivos', cls: 'tag-gold' },
        { text: '🏁 Salto de Maestría', cls: 'tag-green' },
        { text: '👑 Retos de Jefe Final', cls: 'tag-blue' }
      ]
    },
    {
      step: 'Pantalla 4 de 7 · Memoria',
      title: 'Minijuego: Parejas Equivalentes',
      desc: 'En la Isla del Tesoro, los niños voltean tarjetas en 3D para emparejar sumas con el mismo resultado (ej. 3+1 con 2+2), apoyados por narración por voz (🔊) y botón de Pista (💡).',
      highlights: [
        { text: '🃏 Agilidad Mental', cls: 'tag-gold' },
        { text: '🔊 Narración por Voz', cls: 'tag-green' },
        { text: '💡 Pistas Guiadas', cls: 'tag-blue' }
      ]
    },
    {
      step: 'Pantalla 5 de 7 · Base 10',
      title: 'Constructor de Bloques Base 10',
      desc: 'Para resolver operaciones como 29 + 32 = 61, el niño coloca barras verdes de Decenas (10) y cubos amarillos de Unidades (1) en la caja constructora hasta igualar el objetivo.',
      highlights: [
        { text: '🧱 Decenas (10) y Unidades (1)', cls: 'tag-gold' },
        { text: '🧠 Método Singapur CPA', cls: 'tag-green' },
        { text: '✨ Valor Posicional Real', cls: 'tag-purple' }
      ]
    },
    {
      step: 'Pantalla 6 de 7 · Tren Numérico',
      title: 'Tren Numérico sobre Rieles',
      desc: 'En retos como 22 - 21 = ?, la locomotora carga la operación y el jugador selecciona el vagón con la respuesta correcta antes de que el tren avance por la vía.',
      highlights: [
        { text: '🚂 Sumas y Restas', cls: 'tag-gold' },
        { text: '⚡ Razonamiento Rápido', cls: 'tag-green' },
        { text: '🎯 Retroalimentación Visual', cls: 'tag-blue' }
      ]
    },
    {
      step: 'Pantalla 7 de 7 · Victoria',
      title: '¡Nivel Completado con 3 Estrellas!',
      desc: 'Celebración festiva con confeti, medidor de precisión (🎯 100%), desglose de monedas ganadas y desbloqueo de recompensas especiales para el hogar de tu compañero.',
      highlights: [
        { text: '⭐ 1 a 3 Estrellas', cls: 'tag-gold' },
        { text: '🎯 Medidor de Precisión', cls: 'tag-green' },
        { text: '🎁 Premios Desbloqueables', cls: 'tag-purple' }
      ]
    }
  ];

  const AUTO_DURATION_MS = 4500;
  let currentIndex = 0;
  let isManualPaused = false;
  let isHoverPaused = false;
  let elapsedMs = 0;
  let lastTick = performance.now();
  let rafId = null;

  const total = slides.length;

  function updateSliderUI(index) {
    currentIndex = (index + total) % total;
    const prevIndex = (currentIndex - 1 + total) % total;
    const nextIndex = (currentIndex + 1) % total;

    slides.forEach((slide, i) => {
      slide.classList.remove('is-active', 'is-prev', 'is-next');
      if (i === currentIndex) {
        slide.classList.add('is-active');
      } else if (i === prevIndex) {
        slide.classList.add('is-prev');
      } else if (i === nextIndex) {
        slide.classList.add('is-next');
      }
    });

    pillButtons.forEach((pill, i) => {
      const active = i === currentIndex;
      pill.classList.toggle('is-active', active);
      pill.setAttribute('aria-selected', active ? 'true' : 'false');
    });

    const data = SLIDE_DATA[currentIndex];
    if (data) {
      if (stepBadgeEl) stepBadgeEl.textContent = data.step;
      if (titleEl) titleEl.textContent = data.title;
      if (descEl) descEl.textContent = data.desc;
      if (highlightsEl) {
        highlightsEl.innerHTML = data.highlights
          .map((h) => `<span class="clay-mini-tag ${h.cls}">${h.text}</span>`)
          .join('');
      }
    }

    elapsedMs = 0;
    if (progressFillEl) {
      progressFillEl.style.width = '0%';
    }
  }

  function tick(now) {
    const delta = now - lastTick;
    lastTick = now;

    if (!isManualPaused && !isHoverPaused) {
      elapsedMs += delta;
      const pct = Math.min(100, (elapsedMs / AUTO_DURATION_MS) * 100);
      if (progressFillEl) {
        progressFillEl.style.width = `${pct}%`;
      }
      if (elapsedMs >= AUTO_DURATION_MS) {
        updateSliderUI(currentIndex + 1);
      }
    }

    rafId = requestAnimationFrame(tick);
  }

  // Botones anterior / siguiente
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      updateSliderUI(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      updateSliderUI(currentIndex + 1);
    });
  }

  // Clic en teléfonos: si es prev/next navega a él; si es active abre Lightbox
  slides.forEach((slide, idx) => {
    slide.addEventListener('click', (e) => {
      if (idx !== currentIndex) {
        e.stopPropagation();
        updateSliderUI(idx);
      } else if (lightboxApi) {
        const src = slide.getAttribute('data-lightbox-src');
        const caption = slide.getAttribute('data-lightbox-caption') || '';
        const alt = slide.querySelector('img')?.alt || caption;
        lightboxApi.openLightbox(src, alt, caption);
      }
    });
  });

  // Botón de ampliar captura actual
  if (zoomBtn && lightboxApi) {
    zoomBtn.addEventListener('click', () => {
      const activeSlide = slides[currentIndex];
      if (!activeSlide) return;
      const src = activeSlide.getAttribute('data-lightbox-src');
      const caption = activeSlide.getAttribute('data-lightbox-caption') || '';
      const alt = activeSlide.querySelector('img')?.alt || caption;
      lightboxApi.openLightbox(src, alt, caption);
    });
  }

  // Pills de navegación rápida (1..7)
  pillButtons.forEach((pill) => {
    pill.addEventListener('click', () => {
      const targetIdx = parseInt(pill.getAttribute('data-goto-slide') || '0', 10);
      updateSliderUI(targetIdx);
    });
  });

  // Botón Pausar / Reanudar
  if (playToggleBtn) {
    playToggleBtn.addEventListener('click', () => {
      isManualPaused = !isManualPaused;
      playToggleBtn.classList.toggle('is-paused', isManualPaused);
      playToggleBtn.textContent = isManualPaused ? '▶ Reanudar' : '⏸ Auto';
    });
  }

  // Pausar al pasar el cursor por encima del slider
  wrapper.addEventListener('mouseenter', () => {
    isHoverPaused = true;
  });

  wrapper.addEventListener('mouseleave', () => {
    isHoverPaused = false;
    lastTick = performance.now();
  });

  // Soporte táctil (Swipe izquierda / derecha en móviles)
  const stage = wrapper.querySelector('.slider-phones-stage');
  let touchStartX = 0;
  if (stage) {
    stage.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    stage.addEventListener('touchend', (e) => {
      const touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 40) {
        if (diff > 0) {
          updateSliderUI(currentIndex + 1);
        } else {
          updateSliderUI(currentIndex - 1);
        }
      }
    }, { passive: true });
  }

  // Inicializar estado y arrancar ciclo automático
  updateSliderUI(0);
  lastTick = performance.now();
  rafId = requestAnimationFrame(tick);
}

/**
 * Lightbox accesible para ampliar capturas de pantalla verticales de la app
 */
function initGalleryLightbox() {
  const standaloneItems = document.querySelectorAll('[data-lightbox-src]:not(.slider-phone-item)');
  const modal = document.getElementById('gallery-modal');
  const modalImg = document.getElementById('modal-img');
  const modalCaption = document.getElementById('modal-caption');
  const closeBtn = document.getElementById('modal-close');

  if (!modal || !modalImg || !closeBtn) return null;

  let lastActiveElement = null;

  const openLightbox = (src, alt, caption) => {
    lastActiveElement = document.activeElement;
    modalImg.src = src;
    modalImg.alt = alt || 'Captura de pantalla oficial de Aventura Numérica';
    if (modalCaption) {
      modalCaption.textContent = caption || alt || '';
    }
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  };

  const closeLightbox = () => {
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    modalImg.src = '';
    if (lastActiveElement) {
      lastActiveElement.focus();
    }
  };

  standaloneItems.forEach((item) => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-lightbox-src');
      const caption = item.getAttribute('data-lightbox-caption') || '';
      const alt = item.querySelector('img')?.alt || caption;
      openLightbox(src, alt, caption);
    });
  });

  closeBtn.addEventListener('click', closeLightbox);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeLightbox();
    }
  });

  return { openLightbox, closeLightbox };
}
