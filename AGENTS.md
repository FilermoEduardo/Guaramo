# Instruções para Agentes de IA - Projeto Guaramo

Este arquivo contém as diretrizes para assistentes de IA (como Gemini / Antigravity) ao trabalharem neste repositório.

## 📄 Contexto Principal
Por favor, consulte o arquivo [`CONTEXT.md`](file:///c:/Users/FilermoEduardo/Documents/Projetos/Guaramo/CONTEXT.md) para entender a visão geral, stack tecnológica e estrutura do projeto Guaramo.

## 🛠️ Diretrizes de Desenvolvimento
1. **Idioma das Respostas:** Sempre responda ao usuário em Português do Brasil (pt-BR).
2. **Framework & Tecnologias:**
   - Next.js 16 (App Router em `app/`)
   - React 19 com TypeScript
   - Tailwind CSS v4 para estilização
3. **Padrões de Código:**
   - Mantenha a separação de responsabilidades em componentes na pasta `components/`.
   - Utilize imports com o alias `@/` para arquivos internos.
   - Siga o padrão de design system estabelecido no projeto.
