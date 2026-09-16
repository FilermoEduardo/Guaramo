# Documento de Contexto do Projeto: Guaramo Arte

## 1. Visão Geral do Projeto
Desenvolvimento da plataforma web para a ONG e produtora cultural **Guaramo Arte**. O objetivo do site é ser a porta de entrada digital da organização, conectando cultura, arte e assistência social. A plataforma serve para apresentar os serviços de acolhimento oferecidos, divulgar projetos culturais e, principalmente, atuar como um sistema de captação e registro estruturado de beneficiários, voluntários e parceiros.

---

## 2. Identidade Visual e Design
A interface foi projetada para ser acolhedora, humana e culturalmente rica, fugindo do aspecto "frio" de sistemas corporativos.

- **Inspiração:** Natureza, cultura caribenha, sustentabilidade e acolhimento.
- **Paleta de Cores:**
  - **Fundo:** Areia / Off-white acolhedor (`#faf8f5`)
  - **Primária / Conexão:** Verde Folhagem (`#065f46`, `#064e3b`, `#ecfdf5`)
  - **Destaque / Ação:** Amarelo Girassol (`#facc15`, `#fde047`)
  - **Detalhes Culturais:** Tons de barro e madeira (`#92400e`)
- **Tipografia e Acessibilidade:** Fonte `Inter`, com contrastes balanceados, botões grandes e design *mobile-first*, garantindo navegação rápida e acessível pelo celular.

---

## 3. Arquitetura Técnica Desacoplada (HTML5 + CSS Modular + JS ES Modules)

O projeto foi reestruturado seguindo os princípios de modularidade, alta coesão e zero acoplamento de dados:

1. **Pilar 1: Fonte Única da Verdade (`data.json`):**
   - Nenhuma informação (textos, opções de formulários, projetos, fotos, contatos) fica engessada no HTML.
   - Qualquer alteração pode ser realizada apenas atualizando o arquivo `data.json`.
2. **Pilar 2: CSS Modular em Camadas (`css/`):**
   - `css/main.css`: Hub central com `@import`.
   - `css/base/`: Tokens de design (`variables.css`), reset universal (`reset.css`) e tipografia (`typography.css`).
   - `css/layout/`: Contêineres, espaçamentos (`container.css`) e breakpoints responsivos (`responsive.css`).
   - `css/components/`: Estilos isolados por componente (`header.css`, `hero.css`, `services.css`, `impact.css`, `gallery.css`, `registration.css`, `partners.css`, `footer.css`).
3. **Pilar 3: JavaScript Nativo com ES Modules (`js/`):**
   - `js/main.js`: Ponto de entrada que orquestra a aplicação após o `DOMContentLoaded`.
   - `js/modules/`: Funções independentes para cada área (`api.js`, `header.js`, `hero.js`, `services.js`, `impact.js` com contadores animados por `IntersectionObserver`, `gallery.js`, `registration.js` com controle de abas e feedback, `partners.js`, `footer.js`).
4. **Execução Estática Pura:**
   - Sem necessidade de compiladores ou Node.js para rodar. Funciona diretamente em qualquer servidor web ou extensão Live Server.

---

## 4. Estrutura de Arquivos

```text
Guaramo/
├── index.html                 # Casca estrutural semântica (HTML5)
├── data.json                  # Fonte única da verdade (Single Source of Truth)
├── images/                    # Imagens e ícones do projeto
│   ├── hero-fundo.png
│   ├── saboroso-caribe.png
│   ├── galeria-aula.png
│   ├── galeria-arte.png
│   ├── galeria-voluntarios.png
│   └── icon.svg
├── css/                       # Estilos modulares
│   ├── main.css               # Hub de importação (@import)
│   ├── base/
│   │   ├── variables.css      # Tokens (cores, espaçamentos, sombras)
│   │   ├── reset.css          # Normalização universal
│   │   └── typography.css     # Cabeçalhos, textos e utilitários
│   ├── layout/
│   │   ├── container.css      # Grids e dimensões máximas
│   │   └── responsive.css     # Media queries para mobile e tablet
│   └── components/
│       ├── header.css         # Cabeçalho fixo, navegação e menu mobile
│       ├── hero.css           # Seção principal com overlays e CTAs
│       ├── services.css       # Seção "Como Podemos Ajudar" e cards
│       ├── impact.css         # Saboroso Caribe e contadores animados
│       ├── gallery.css        # Galeria com zoom e legendas
│       ├── registration.css   # Abas e formulários (Beneficiário/Voluntário)
│       ├── partners.css       # Grade de parceiros
│       └── footer.css         # Rodapé e redes sociais
├── js/                        # Camada de lógica modular (ES Modules)
│   ├── main.js                # Maestro / Ponto de entrada
│   └── modules/
│       ├── api.js             # Fetch assíncrono do data.json
│       ├── header.js          # Menu hambúrguer e efeito de scroll
│       ├── hero.js            # Injeção dinâmica do Hero
│       ├── services.js        # Injeção dinâmica dos cards com SVGs
│       ├── impact.js          # Injeção do Saboroso Caribe e contadores animados
│       ├── gallery.js         # Injeção dinâmica da galeria
│       ├── registration.js    # Controle de abas e submissão dos formulários
│       ├── partners.js        # Injeção dinâmica dos parceiros
│       └── footer.js          # Injeção dos dados de contato e copyright dinâmico
├── CONTEXT.md                 # Este documento de contexto
└── AGENTS.md                  # Instruções para assistentes de IA
```

---

## 5. Próximos Passos (Roadmap)
- [x] **Fase 1:** Conclusão da arquitetura front-end desacoplada em HTML5, CSS modular e ES Modules com `data.json`.
- [ ] **Fase 2:** Criar o projeto no Supabase e modelar as tabelas no banco de dados (`Beneficiarios`, `Voluntarios`, `Parceiros`).
- [ ] **Fase 3:** Conectar os formulários do `registration.js` via `fetch(POST)` a uma API backend em Python (Flask).
- [ ] **Fase 4:** Hospedagem do site em serviço de arquivos estáticos (GitHub Pages, Vercel ou Netlify).
