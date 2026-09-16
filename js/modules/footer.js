/**
 * Módulo do Rodapé
 */

export function renderFooter(footerData, orgData) {
  if (!footerData) return;

  const descEl = document.getElementById('footer-desc');
  const locationEl = document.getElementById('footer-location');
  const emailEl = document.getElementById('footer-email');
  const instaBtn = document.getElementById('footer-instagram');
  const copyEl = document.getElementById('footer-copyright');

  if (descEl && orgData?.description) {
    descEl.textContent = orgData.description;
  }

  if (locationEl && footerData.location) {
    locationEl.textContent = footerData.location;
  }

  if (emailEl && footerData.email) {
    emailEl.textContent = footerData.email;
    emailEl.href = `mailto:${footerData.email}`;
  }

  if (instaBtn && footerData.instagram) {
    instaBtn.href = footerData.instagram.url;
    const labelSpan = instaBtn.querySelector('.instagram-handle');
    if (labelSpan) {
      labelSpan.textContent = footerData.instagram.handle;
    }
  }

  if (copyEl) {
    const currentYear = new Date().getFullYear();
    copyEl.textContent = `© ${currentYear} ${footerData.copyright || 'Guaramo Arte.'}`;
  }
}
