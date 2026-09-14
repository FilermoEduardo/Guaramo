/**
 * Módulo de Parceiros e Apoiadores
 */

export function renderPartners(partnersData) {
  if (!partnersData) return;

  const headerTitle = document.getElementById('partners-title');
  const headerSubtitle = document.getElementById('partners-subtitle');
  const gridContainer = document.getElementById('partners-grid');

  if (headerTitle && partnersData.title) {
    headerTitle.textContent = partnersData.title;
  }

  if (headerSubtitle && partnersData.subtitle) {
    headerSubtitle.textContent = partnersData.subtitle;
  }

  if (gridContainer && Array.isArray(partnersData.items)) {
    gridContainer.innerHTML = partnersData.items
      .map(
        (partner) => `
        <div class="partner-card ${partner.isFeatured ? 'featured' : ''}">
          ${partner.name}
        </div>
      `
      )
      .join('');
  }
}
