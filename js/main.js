/**
 * ==========================================================================
 * GUARAMO ARTE - MAIN JAVASCRIPT ENTRYPOINT (ES MODULES)
 * Arquitetura orientada a dados, desacoplada e 100% nativa (Vanilla JS)
 * ==========================================================================
 */

import { fetchSiteData } from './modules/api.js';
import { initHeader } from './modules/header.js';
import { renderHero } from './modules/hero.js';
import { renderServices } from './modules/services.js';
import { renderImpact } from './modules/impact.js';
import { renderGallery } from './modules/gallery.js';
import { initRegistration } from './modules/registration.js';
import { renderPartners } from './modules/partners.js';
import { renderFooter } from './modules/footer.js';

document.addEventListener('DOMContentLoaded', async () => {
  try {
    // 1. Carregamento dos dados estruturados da Fonte Única da Verdade
    const data = await fetchSiteData();

    // 2. Inicialização e orquestração dos componentes modulares
    initHeader(data.navigation, data.organization);
    renderHero(data.hero);
    renderServices(data.services);
    renderImpact(data.impact);
    renderGallery(data.gallery);
    initRegistration(data.registration);
    renderPartners(data.partners);
    renderFooter(data.footer, data.organization);

    console.log('✅ Guaramo Arte inicializado com sucesso via ES Modules e data.json!');
  } catch (error) {
    console.error('❌ Falha ao inicializar o portal Guaramo:', error);
    showFatalErrorBanner();
  }
});

/**
 * Exibe um aviso visível quando o carregamento inicial dos dados falha
 * (hoje via data.json, futuramente via API). Sem isso, a página fica
 * em branco sem nenhuma explicação para quem está visitando o site.
 */
function showFatalErrorBanner() {
  const banner = document.createElement('div');
  banner.setAttribute('role', 'alert');
  banner.style.cssText = [
    'position: fixed',
    'top: 0',
    'left: 0',
    'right: 0',
    'z-index: 9999',
    'background-color: #fef2f2',
    'color: #991b1b',
    'border-bottom: 1px solid #fecaca',
    'padding: 1rem 1.5rem',
    'text-align: center',
    'font-family: Inter, system-ui, sans-serif',
    'font-size: 0.95rem',
  ].join(';');
  banner.textContent =
    'Não foi possível carregar o conteúdo do site agora. Tente recarregar a página em instantes.';

  document.body.prepend(banner);
}
