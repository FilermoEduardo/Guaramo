/**
 * Módulo de Renderização da Seção Hero
 */
export function renderHero(heroData) {
  if (!heroData) return;

  const bgImg = document.getElementById('hero-bg-img');
  const badge = document.getElementById('hero-badge');
  const title = document.getElementById('hero-title');
  const desc = document.getElementById('hero-desc');
  const primaryBtn = document.getElementById('hero-btn-primary');
  const secondaryBtn = document.getElementById('hero-btn-secondary');

  if (bgImg && heroData.bgImage) {
    bgImg.src = heroData.bgImage;
    bgImg.alt = heroData.alt || 'Guaramo Arte';
  }

  if (badge && heroData.badge) {
    badge.textContent = heroData.badge;
  }

  if (title && heroData.title) {
    title.textContent = heroData.title;
  }

  if (desc && heroData.description) {
    desc.textContent = heroData.description;
  }

  if (primaryBtn && heroData.buttons?.primary) {
    primaryBtn.textContent = heroData.buttons.primary.label;
    primaryBtn.href = heroData.buttons.primary.href;
  }

  if (secondaryBtn && heroData.buttons?.secondary) {
    secondaryBtn.textContent = heroData.buttons.secondary.label;
    secondaryBtn.href = heroData.buttons.secondary.href;
  }
}
