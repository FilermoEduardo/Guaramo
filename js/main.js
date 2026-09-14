/**
 * ==========================================================================
 * GUARAMO ARTE DO MUNDO - MAIN JAVASCRIPT ENTRYPOINT (ES MODULES)
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

    console.log('✅ Guaramo Arte do Mundo inicializado com sucesso via ES Modules e data.json!');
  } catch (error) {
    console.error('❌ Falha ao inicializar o portal Guaramo:', error);
  }
});
