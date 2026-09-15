# Backlog Técnico — Guaramo Arte do Mundo

> Baseado na revisão de código de 14/09/2026 (index.html, data.json, css/, js/). Considera que o projeto vai evoluir para ter banco de dados (Fase 2/3 do roadmap: Supabase + API Flask).

---

## 🔴 Prioridade Alta — Segurança & Dados Pessoais

O site vai coletar dados de **população vulnerável** (migrantes, refugiados, gestantes) e de voluntários. Isso exige cuidado redobrado assim que o banco de dados entrar em cena.

- [x] **Sanitizar/escapar todo dado renderizado via `innerHTML`** antes de ligar o backend. ✅ Criado `js/modules/utils.js` com `escapeHtml()`/`escapeAttr()`, aplicado em `partners.js`, `impact.js`, `gallery.js`, `services.js`, `header.js` e `registration.js`. Continua valendo reforçar validação/sanitização no backend quando a API existir — escape no frontend não substitui isso.
- [ ] **Validação de input no backend, não só no frontend.** Os formulários de beneficiário/voluntário (`registration.js`) hoje só têm `required` no HTML. Quando a API Flask existir, validar tipo, tamanho e formato (e-mail, telefone) no servidor — o `required` do HTML é só UX, não segurança.
- [ ] **Definir base legal e política de retenção de dados (LGPD).** Como o site vai armazenar nome, e-mail, telefone e "área de ajuda" de pessoas em situação de vulnerabilidade (inclusive campo de gestantes, que é dado sensível), é preciso: termo de consentimento no formulário, política de privacidade linkada, e regra clara de por quanto tempo os dados ficam armazenados.
- [ ] **Nunca expor a chave/URL do banco (Supabase) direto no frontend sem RLS (Row Level Security).** Se o cadastro for feito via client-side diretamente no Supabase (sem passar pela API Flask), configurar RLS nas tabelas `Beneficiarios`, `Voluntarios` e `Parceiros` para impedir leitura pública de dados pessoais.
- [ ] **Rate limiting nos endpoints de cadastro** para evitar spam/flood nos formulários assim que a API existir.

## 🟠 Prioridade Alta — Preparação para Backend

- [ ] **Conectar `registration.js` à API real (Fase 3 do roadmap).** Hoje o `handleFormSubmit` só faz `console.log` e reseta o form. Trocar por `fetch(POST)` para o endpoint Flask, com tratamento de erro visível ao usuário (hoje só existe o caminho de sucesso — não há feedback de falha de rede/validação).
- [x] **Adicionar estado de carregamento no botão de submit** (ex: "Enviando..." + disabled) para evitar múltiplos envios enquanto aguarda resposta da API. ✅ Feito em `registration.js`, já com bloco try/catch/finally pronto para o `fetch` real (comentário `TODO(Fase 3)` marcando onde entra a chamada) e um caminho de erro visível que antes não existia.
- [ ] **Modelar as tabelas do Supabase** (`Beneficiarios`, `Voluntarios`, `Parceiros`) espelhando os campos já usados no frontend, incluindo os `value` das opções de `area_ajuda` / `area_interesse` do `data.json` como enum/FK, para manter consistência entre o texto exibido e o valor salvo.
- [ ] **Definir se `partners.js` vai continuar lendo do `data.json` estático ou passar a puxar da tabela `Parceiros`.** Se for do banco, o componente precisa de um fallback de loading/erro (hoje ele assume que os dados sempre chegam).

## 🟡 Prioridade Média — Robustez do Frontend

- [x] **Tratar falha no `fetchSiteData()` com UI visível.** ✅ Adicionado `showFatalErrorBanner()` em `main.js` — mostra um aviso fixo no topo da página quando o carregamento inicial falha, em vez de deixar a página em branco.
- [x] **Revisar acessibilidade do menu mobile.** ✅ Parcial: adicionado fechar com `Esc` + devolver foco ao botão de menu em `header.js`. A navegação por Tab dentro do menu aberto usa a ordem natural do DOM (já funciona, pois o painel usa `display: none` quando fechado, tirando os links da ordem de tabulação). Ainda vale um teste manual completo com leitor de tela antes de publicar.
- [x] **Adicionar `fetchpriority="high"` na imagem do hero** (`hero-bg-img`), já que ela é grande (1.3MB) e crítica para o LCP — usar `loading="lazy"` nela seria contraproducente por estar acima da dobra. Compressão da imagem em si continua pendente (ver item de Polish abaixo).

## 🟢 Prioridade Baixa — Conteúdo & Polish

- [ ] **Preencher os parceiros reais no `data.json`.** Atualmente 3 dos 4 itens em `partners.items` estão com o nome genérico "Parceiro".
- [ ] **Comprimir as imagens em `images/`.** Todas estão entre 1.3MB e 2.6MB (PNG) — vale converter para WebP/otimizar, isso vai pesar ainda mais quando o site tiver mais tráfego.
- [ ] **Revisar meta description e Open Graph** — só há `meta description` básica; ao publicar (Fase 4), adicionar tags OG/Twitter Card para compartilhamento em redes sociais.

---

*Gerado a partir da revisão de código de 14/09/2026. Atualizar este backlog conforme os itens forem endereçados.*
