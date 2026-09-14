# Backlog Técnico — Guaramo Arte do Mundo

> Baseado na revisão de código de 14/09/2026 (index.html, data.json, css/, js/). Considera que o projeto vai evoluir para ter banco de dados (Fase 2/3 do roadmap: Supabase + API Flask).

---

## 🔴 Prioridade Alta — Segurança & Dados Pessoais

O site vai coletar dados de **população vulnerável** (migrantes, refugiados, gestantes) e de voluntários. Isso exige cuidado redobrado assim que o banco de dados entrar em cena.

- [ ] **Sanitizar/escapar todo dado renderizado via `innerHTML`** antes de ligar o backend. Hoje `partners.js`, `impact.js` e `gallery.js` injetam campos do `data.json` direto no `innerHTML` sem escape. Enquanto o JSON é estático não há risco, mas assim que dados vierem de um formulário/banco (ex: nome de parceiro cadastrado por um admin), isso vira uma porta de XSS. Trocar por `textContent` onde possível ou criar um helper `escapeHtml()`.
- [ ] **Validação de input no backend, não só no frontend.** Os formulários de beneficiário/voluntário (`registration.js`) hoje só têm `required` no HTML. Quando a API Flask existir, validar tipo, tamanho e formato (e-mail, telefone) no servidor — o `required` do HTML é só UX, não segurança.
- [ ] **Definir base legal e política de retenção de dados (LGPD).** Como o site vai armazenar nome, e-mail, telefone e "área de ajuda" de pessoas em situação de vulnerabilidade (inclusive campo de gestantes, que é dado sensível), é preciso: termo de consentimento no formulário, política de privacidade linkada, e regra clara de por quanto tempo os dados ficam armazenados.
- [ ] **Nunca expor a chave/URL do banco (Supabase) direto no frontend sem RLS (Row Level Security).** Se o cadastro for feito via client-side diretamente no Supabase (sem passar pela API Flask), configurar RLS nas tabelas `Beneficiarios`, `Voluntarios` e `Parceiros` para impedir leitura pública de dados pessoais.
- [ ] **Rate limiting nos endpoints de cadastro** para evitar spam/flood nos formulários assim que a API existir.

## 🟠 Prioridade Alta — Preparação para Backend

- [ ] **Conectar `registration.js` à API real (Fase 3 do roadmap).** Hoje o `handleFormSubmit` só faz `console.log` e reseta o form. Trocar por `fetch(POST)` para o endpoint Flask, com tratamento de erro visível ao usuário (hoje só existe o caminho de sucesso — não há feedback de falha de rede/validação).
- [ ] **Adicionar estado de carregamento no botão de submit** (ex: "Enviando..." + disabled) para evitar múltiplos envios enquanto aguarda resposta da API.
- [ ] **Modelar as tabelas do Supabase** (`Beneficiarios`, `Voluntarios`, `Parceiros`) espelhando os campos já usados no frontend, incluindo os `value` das opções de `area_ajuda` / `area_interesse` do `data.json` como enum/FK, para manter consistência entre o texto exibido e o valor salvo.
- [ ] **Definir se `partners.js` vai continuar lendo do `data.json` estático ou passar a puxar da tabela `Parceiros`.** Se for do banco, o componente precisa de um fallback de loading/erro (hoje ele assume que os dados sempre chegam).

## 🟡 Prioridade Média — Robustez do Frontend

- [ ] **Tratar falha no `fetchSiteData()` com UI visível.** Hoje, se `data.json` (ou futuramente a API) falhar, o erro só vai para `console.error` e a página fica em branco sem explicação para quem está visitando o site.
- [ ] **Revisar acessibilidade do menu mobile após integração com dados dinâmicos** — validar que o foco do teclado se comporta bem quando o menu é populado via JS (hoje a navegação por Tab não foi testada após a injeção dinâmica).
- [ ] **Adicionar `loading="lazy"` também na imagem do hero** (`hero-bg-img`) ou avaliar `fetchpriority="high"`, já que hoje só as imagens de galeria/impacto têm lazy loading — a imagem do hero é grande (1.3MB) e crítica para o LCP.

## 🟢 Prioridade Baixa — Conteúdo & Polish

- [ ] **Preencher os parceiros reais no `data.json`.** Atualmente 3 dos 4 itens em `partners.items` estão com o nome genérico "Parceiro".
- [ ] **Comprimir as imagens em `images/`.** Todas estão entre 1.3MB e 2.6MB (PNG) — vale converter para WebP/otimizar, isso vai pesar ainda mais quando o site tiver mais tráfego.
- [ ] **Revisar meta description e Open Graph** — só há `meta description` básica; ao publicar (Fase 4), adicionar tags OG/Twitter Card para compartilhamento em redes sociais.

---

*Gerado a partir da revisão de código de 14/09/2026. Atualizar este backlog conforme os itens forem endereçados.*
