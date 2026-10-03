/**
 * Miau Multiplicación — JavaScript Específico
 * Lightbox accesible y microinteracciones felinas.
 */

document.addEventListener('DOMContentLoaded', () => {
  initMiauLightbox();
  initCatInteractivity();
});

function initMiauLightbox() {
  const galleryItems = document.querySelectorAll('[data-lightbox-src]');
  const modal = document.getElementById('gallery-modal');
  const modalImg = document.getElementById('modal-img');
  const closeBtn = document.getElementById('modal-close');

  if (!modal || !modalImg || !closeBtn) return;

  let lastActiveElement = null;

  const openLightbox = (src, alt) => {
    lastActiveElement = document.activeElement;
    modalImg.src = src;
    modalImg.alt = alt || 'Captura de pantalla ampliada 16:9';
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

  galleryItems.forEach((item) => {
    item.addEventListener('click', () => {
      const src = item.getAttribute('data-lightbox-src');
      const alt = item.querySelector('img')?.alt || '';
      openLightbox(src, alt);
    });

    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const src = item.getAttribute('data-lightbox-src');
        const alt = item.querySelector('img')?.alt || '';
        openLightbox(src, alt);
      }
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
}

function initCatInteractivity() {
  const catContainer = document.querySelector('.animated-cat-container');
  if (!catContainer) return;

  catContainer.addEventListener('click', () => {
    catContainer.style.transform = 'scale(1.08)';
    setTimeout(() => {
      catContainer.style.transform = '';
    }, 200);
  });
}
