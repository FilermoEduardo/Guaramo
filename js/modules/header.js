/**
 * Módulo de Controle do Cabeçalho e Navegação
 */
import { escapeHtml, escapeAttr } from './utils.js';

export function initHeader(navData, orgData) {
  const header = document.querySelector('.site-header');
  const desktopMenu = document.getElementById('nav-menu-desktop');
  const mobileMenu = document.getElementById('nav-menu-mobile');
  const menuToggleBtn = document.getElementById('menu-toggle');
  const mobileNavPanel = document.getElementById('mobile-nav');

  // 1. Scroll listener para adicionar efeito de blur/sombra
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });

  // 2. Renderizar links no Desktop
  if (desktopMenu && navData?.links) {
    desktopMenu.innerHTML = navData.links
      .map(
        (link) => `
        <li>
          <a href="${escapeAttr(link.href)}" class="nav-link">${escapeHtml(link.label)}</a>
        </li>
      `
      )
      .join('');
  }

  // 3. Renderizar links no Mobile
  if (mobileMenu && navData?.links) {
    const linksHtml = navData.links
      .map(
        (link) => `
        <li>
          <a href="${escapeAttr(link.href)}" class="nav-link mobile-link">${escapeHtml(link.label)}</a>
        </li>
      `
      )
      .join('');

    const ctaHtml = navData.cta
      ? `
        <li style="padding-top: 0.5rem;">
          <a href="${escapeAttr(navData.cta.href)}" class="btn-nav-cta mobile-link" style="display: flex;">${escapeHtml(navData.cta.label)}</a>
        </li>
      `
      : '';

    mobileMenu.innerHTML = linksHtml + ctaHtml;
  }

  // 4. Controle do menu mobile (abrir/fechar)
  if (menuToggleBtn && mobileNavPanel) {
    let isOpen = false;

    const toggleMenu = (forceState) => {
      isOpen = typeof forceState === 'boolean' ? forceState : !isOpen;
      menuToggleBtn.setAttribute('aria-expanded', String(isOpen));
      mobileNavPanel.classList.toggle('open', isOpen);

      // Alternar ícone Hamburger <-> Fechar (X)
      menuToggleBtn.innerHTML = isOpen
        ? `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>`
        : `<svg fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>`;
    };

    menuToggleBtn.addEventListener('click', () => toggleMenu());

    // Fechar ao clicar em qualquer link
    mobileNavPanel.querySelectorAll('.mobile-link').forEach((link) => {
      link.addEventListener('click', () => toggleMenu(false));
    });

    // Fechar com Esc e devolver o foco ao botão de menu (acessibilidade via teclado)
    mobileNavPanel.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen) {
        toggleMenu(false);
        menuToggleBtn.focus();
      }
    });
  }
}
