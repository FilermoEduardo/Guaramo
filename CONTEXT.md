# Documento de Contexto do Projeto: Guaramo Arte do Mundo

## 1. Visão Geral do Projeto
Desenvolvimento de uma plataforma web para a ONG e produtora cultural **Guaramo Arte do Mundo**. O objetivo do site é ser a porta de entrada digital da organização, conectando cultura, arte e assistência social. A plataforma serve para apresentar os serviços de acolhimento oferecidos, divulgar projetos culturais e, principalmente, atuar como um sistema de captação e registro estruturado de beneficiários, voluntários e parceiros.

---

## 2. Identidade Visual e Design
A interface foi projetada para ser acolhedora, humana e culturalmente rica, fugindo do aspecto "frio" de sistemas corporativos.

- **Inspiração:** Natureza, cultura caribenha, sustentabilidade e acolhimento.
- **Paleta de Cores:**
  - **Fundo:** Areia / Off-white (para aquecer a tela)
  - **Primária / Conexão:** Verde Folhagem (conexão com a natureza)
  - **Destaque / Ação:** Amarelo Girassol (para botões e chamadas de ação)
  - **Detalhes:** Tons de barro e madeira
- **Tipografia e Acessibilidade:** Fontes sem serifa (Nunito / Inter), com tamanhos fluidos e botões grandes (design *mobile-first*), garantindo facilidade de uso pelo celular, que é o principal dispositivo dos beneficiários.

---

## 3. Estrutura da Plataforma (Front-end)
A aplicação está organizada nas seguintes seções estratégicas:

1. **Hero Section (Início):**
   - Apresenta o slogan central *"Conectamos culturas, transformamos encontros"* e direciona o usuário rapidamente para conhecer os projetos ou pedir ajuda.
2. **Como Podemos Ajudar? (Serviços Sociais):**
   - Catálogo amigável de serviços de assistência, incluindo:
     - Acesso ao ensino de Português;
     - Orientação para emissão de Documentos;
     - Orientação de Moradia e Aluguel;
     - Registro no SUS;
     - Programa de atenção a mulheres grávidas (Cestas);
     - Oportunidades de trabalho e Diárias.
3. **Impacto & Arte (Projetos Culturais):**
   - Área dedicada à atuação cultural, com destaque especial para o projeto **Saboroso Caribe** (liderado pela Chef Damelis Castillo), unindo gastronomia caribenha, uso de PANCs (Plantas Alimentícias Não Convencionais) e integração social. Inclui métricas da rede (contadores de pessoas atendidas e voluntários).
4. **Portal de Registros (Captação de Dados):**
   - O "coração" operacional do site. Formulário dinâmico dividido em abas para captar:
     - **Beneficiários:** Nome, e-mail, telefone e o tipo de ajuda que necessitam.
     - **Voluntários:** Nome, e-mail, telefone e a área em que desejam atuar (ensino, jurídico, saúde, arte, etc.).
     - **Parceiros:** Área dedicada aos patrocinadores e apoiadores institucionais (com destaque para o FAC DF).

---

## 4. Arquitetura Técnica

- **Front-end (Atual):**
  - **Framework:** Next.js 16 (App Router em `app/`)
  - **Interface & Reatividade:** React 19 com TypeScript
  - **Estilização:** Tailwind CSS v4 e `tw-animate-css`
  - **Componentes:** Base UI (`@base-ui/react`), Shadcn UI (`shadcn`), ícones Lucide React (`lucide-react`)
  - **Gerenciador de Pacotes:** `pnpm`
- **Back-end (Planejado):**
  - API em Python com Flask para receber as requisições (`POST`) dos formulários de registro e processar a lógica de negócios da ONG.
- **Banco de Dados (Planejado):**
  - Supabase (PostgreSQL) para banco de dados relacional, permitindo relacionar os dados (ex: associar voluntários aos beneficiários).

---

## 5. Estrutura de Arquivos do Código

```text
Guaramo/
├── app/                      # Rotas e páginas (App Router)
│   ├── layout.tsx            # Layout principal da aplicação
│   ├── page.tsx              # Página principal (Home)
│   └── globals.css           # Estilos globais e temas
├── components/               # Componentes React reutilizáveis
│   ├── site-header.tsx       # Cabeçalho e navegação
│   ├── hero.tsx              # Hero Section com slogan
│   ├── how-we-help.tsx       # Serviços Sociais
│   ├── impact-art.tsx        # Projetos Culturais & Saboroso Caribe
│   ├── gallery.tsx           # Galeria de fotos e registros
│   ├── registration-portal.tsx # Formulário de cadastro (Beneficiários/Voluntários/Parceiros)
│   ├── partners.tsx          # Parceiros e Apoiadores (FAC DF)
│   └── site-footer.tsx       # Rodapé do site
├── lib/                      # Funções utilitárias (ex: cn do tailwind)
├── CONTEXT.md                # Este documento de contexto do projeto
└── AGENTS.md                 # Diretrizes para assistentes de IA
```

---

## 6. Próximos Passos (Roadmap)
- [x] **Fase 1 (Atual):** Testar, ajustar e aprovar o visual e a estrutura das seções do front-end.
- [ ] **Fase 2:** Criar o projeto no Supabase e modelar as tabelas no banco de dados (`Beneficiarios`, `Voluntarios`, `Parceiros`).
- [ ] **Fase 3:** Desenvolver as rotas na API em Python (Flask) para conectar os formulários com o Supabase.
- [ ] **Fase 4:** Hospedar o projeto para acesso público (Vercel para o Front-end, Render para a API Flask).
