/**
 * Módulo de Impacto & Arte: Projeto em Destaque e Contadores Animados
 */

export function renderImpact(impactData) {
  if (!impactData) return;

  const headerTitle = document.getElementById('impact-title');
  const headerSubtitle = document.getElementById('impact-subtitle');
  const featuredContainer = document.getElementById('impact-featured');
  const statsContainer = document.getElementById('impact-stats');

  if (headerTitle && impactData.title) {
    headerTitle.textContent = impactData.title;
  }

  if (headerSubtitle && impactData.subtitle) {
    headerSubtitle.textContent = impactData.subtitle;
  }

  // 1. Renderizar Projeto em Destaque (Saboroso Caribe)
  if (featuredContainer && impactData.featured) {
    const f = impactData.featured;
    featuredContainer.innerHTML = `
      <div>
        <span class="featured-badge">${f.badge}</span>
        <h3 class="featured-title">${f.name}</h3>
        <p class="featured-text">${f.description}</p>
        <p class="featured-lead">
          Sob o comando da <span class="highlight">${f.chefHighlight || 'Chef Damelis Castillo'}</span>, cada prato é um encontro entre o Caribe e o Brasil.
        </p>
      </div>
      <div class="featured-image-wrapper">
        <img src="${f.image}" alt="${f.imageAlt || f.name}" loading="lazy" />
        <div class="featured-image-caption">
          <div class="caption-tag-box">
            <div class="caption-icon-circle" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m16 2-2.3 2.3a3 3 0 0 0 0 4.2l1.8 1.8a3 3 0 0 0 4.2 0L22 8Z"/>
                <path d="M15 15 3.3 3.3a4.2 4.2 0 0 0 0 6l7.3 7.3c.7.7 2 .7 2.8 0L15 15Zm0 0 7 7"/>
                <path d="m2.1 21.8 6.4-6.3"/>
                <path d="m19 5-7 7"/>
              </svg>
            </div>
            <p class="caption-text">${f.tag || 'Sabores que unem povos'}</p>
          </div>
        </div>
      </div>
    `;
  }

  // 2. Renderizar Cards de Estatísticas
  if (statsContainer && Array.isArray(impactData.stats)) {
    statsContainer.innerHTML = impactData.stats
      .map(
        (stat) => `
        <div class="stat-card" data-target="${stat.target}">
          <div class="stat-number color-${stat.color || 'emerald'}">0+</div>
          <p class="stat-label">${stat.label}</p>
        </div>
      `
      )
      .join('');

    // 3. Animar contadores ao entrar na tela (IntersectionObserver)
    initCounterAnimations(statsContainer);
  }
}

function initCounterAnimations(container) {
  const cards = container.querySelectorAll('.stat-card');
  if (!cards.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const targetNum = parseInt(card.getAttribute('data-target') || '0', 10);
          const numEl = card.querySelector('.stat-number');

          animateNumber(numEl, targetNum);
          observer.unobserve(card);
        }
      });
    },
    { threshold: 0.3 }
  );

  cards.forEach((card) => observer.observe(card));
}

function animateNumber(element, target) {
  if (!element || !target) return;

  const duration = 1600; // ms
  const start = performance.now();

  const tick = (now) => {
    const elapsed = now - start;
    const progress = Math.min(elapsed / duration, 1);
    // Easing cubic suave (easeOutCubic)
    const eased = 1 - Math.pow(1 - progress, 3);
    const currentVal = Math.floor(eased * target);

    element.textContent = `${currentVal.toLocaleString('pt-BR')}+`;

    if (progress < 1) {
      requestAnimationFrame(tick);
    } else {
      element.textContent = `${target.toLocaleString('pt-BR')}+`;
    }
  };

  requestAnimationFrame(tick);
}
