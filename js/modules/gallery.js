/**
 * Módulo da Galeria de Fotos
 */
import { escapeHtml, escapeAttr } from './utils.js';

export function renderGallery(galleryData) {
  if (!galleryData) return;

  const headerTitle = document.getElementById('gallery-title');
  const headerSubtitle = document.getElementById('gallery-subtitle');
  const gridContainer = document.getElementById('gallery-grid');

  if (headerTitle && galleryData.title) {
    headerTitle.textContent = galleryData.title;
  }

  if (headerSubtitle && galleryData.subtitle) {
    headerSubtitle.textContent = galleryData.subtitle;
  }

  if (gridContainer && Array.isArray(galleryData.photos)) {
    gridContainer.innerHTML = galleryData.photos
      .map(
        (photo) => `
        <figure class="gallery-card">
          <img src="${escapeAttr(photo.src)}" alt="${escapeAttr(photo.alt || photo.caption)}" loading="lazy" />
          <figcaption class="gallery-caption">
            <span>${escapeHtml(photo.caption)}</span>
          </figcaption>
        </figure>
      `
      )
      .join('');
  }
}
