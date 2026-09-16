# Instruções para Agentes de IA - Projeto Guaramo

Este arquivo contém as diretrizes para assistentes de IA ao trabalharem neste repositório.

## 📄 Contexto Principal
Por favor, consulte o arquivo [`CONTEXT.md`](./CONTEXT.md) para entender a visão geral, a arquitetura desacoplada e a estrutura de pastas do projeto Guaramo Arte.

## 🛠️ Diretrizes de Desenvolvimento
1. **Idioma das Respostas:** Sempre responda ao usuário em Português do Brasil (pt-BR).
2. **Arquitetura & Tecnologias:**
   - **Frontend Estático:** HTML5 semântico, CSS modular com `@import`, Vanilla JavaScript com ES Modules nativos (`type="module"`).
   - **Sem Frameworks Pesados:** O projeto não utiliza React, Next.js nem dependências complexas no frontend.
   - **Orientado a Dados (`data.json`):** Toda informação exibida na interface (textos, listas, opções, imagens, contatos) deve ser mantida e lida a partir do `data.json`.
3. **Padrões de Código:**
   - Mantenha os estilos organizados em `css/base/`, `css/components/` e `css/layout/`.
   - Mantenha a lógica JavaScript dividida em módulos reutilizáveis dentro de `js/modules/`.
   - O arquivo `js/main.js` deve apenas orquestrar e chamar os módulos após o carregamento dos dados.
