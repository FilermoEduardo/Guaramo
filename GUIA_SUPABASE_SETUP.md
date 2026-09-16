# 🚀 Guia Passo a Passo: Preparação do Supabase Antes de Iniciar o Backlog

Este guia contém exatamente **tudo o que você precisa fazer no Supabase** antes de começarmos a alterar o código do projeto.

---

## 📋 Sumário
1. [Criar Conta e Projeto no Supabase](#1-criar-conta-e-projeto-no-supabase)
2. [Criar as Tabelas e Políticas de Segurança via SQL](#2-criar-as-tabelas-e-políticas-de-segurança-via-sql)
3. [Conferir se as Tabelas foram Criadas](#3-conferir-se-as-tabelas-foram-criadas)
4. [Copiar as Chaves de Conexão (Credenciais)](#4-copiar-as-chaves-de-conexão-credenciais)
5. [Checklist Final: O que ter em mãos](#5-checklist-final-o-que-ter-em-mãos)

---

## 1. Criar Conta e Projeto no Supabase

1. Acesse **[supabase.com](https://supabase.com/)** e clique em **"Start your project"** ou **"Sign In"** (pode entrar diretamente com sua conta do GitHub).
2. No painel principal (Dashboard), clique no botão verde **"New Project"**.
3. Preencha os campos da criação do projeto:
   - **Organization:** Escolha a sua organização pessoal (ou crie uma gratuita).
   - **Name:** Digite `guaramo-arte` (ou o nome de sua preferência).
   - **Database Password:** Escolha uma senha forte (guarde essa senha em um local seguro).
   - **Region:** Selecione **`South America (São Paulo)`** para ter o menor tempo de resposta no Brasil.
   - **Pricing Plan:** Deixe selecionado o plano **Free** (Gratuito).
4. Clique em **"Create new project"** e aguarde cerca de 1 a 2 minutos enquanto o Supabase provisiona seu banco de dados.

---

## 2. Criar as Tabelas e Políticas de Segurança via SQL

Assim que o projeto carregar:

1. No menu lateral esquerdo do Supabase, clique no ícone **SQL Editor** (parece um terminal com `>_`).
2. Clique no botão **"New Query"** (ou **"+"** no topo).
3. Copie todo o código SQL abaixo e cole no editor:

```sql
-- ============================================================================
-- PROJETO GUARAMO ARTE: CRIAÇÃO DE TABELAS E SEGURANÇA (RLS)
-- ============================================================================

-- 1. Habilitar suporte a identificadores únicos universais (UUID)
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- 2. Criar a Tabela de Beneficiários (Pessoas que solicitam acolhimento)
CREATE TABLE IF NOT EXISTS public.beneficiarios (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    telefone VARCHAR(30) NOT NULL,
    area_ajuda VARCHAR(50) NOT NULL,
    status_atendimento VARCHAR(30) DEFAULT 'novo',
    observacoes_internas TEXT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 3. Criar a Tabela de Colaboradores / Voluntários
CREATE TABLE IF NOT EXISTS public.colaboradores (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(150) NOT NULL,
    telefone VARCHAR(30) NOT NULL,
    area_interesse VARCHAR(50) NOT NULL,
    status VARCHAR(30) DEFAULT 'pendente',
    observacoes_internas TEXT NULL,
    created_at TIMESTAMPTZ DEFAULT now()
);

-- 4. Ativar o Row Level Security (RLS) para proteger os dados
ALTER TABLE public.beneficiarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.colaboradores ENABLE ROW LEVEL SECURITY;

-- 5. Permitir que visitantes do site enviem seus dados através do formulário
CREATE POLICY "Permitir envio publico de beneficiario"
    ON public.beneficiarios
    FOR INSERT
    TO anon
    WITH CHECK (true);

CREATE POLICY "Permitir envio publico de colaborador"
    ON public.colaboradores
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- 6. Bloquear leitura de dados por pessoas anônimas na internet
-- (Apenas membros da equipe que fizerem login no Supabase podem ver a lista)
CREATE POLICY "Apenas equipe autenticada le beneficiarios"
    ON public.beneficiarios
    FOR SELECT
    TO authenticated
    USING (true);

CREATE POLICY "Apenas equipe autenticada le colaboradores"
    ON public.colaboradores
    FOR SELECT
    TO authenticated
    USING (true);
```

4. Clique no botão verde **"Run"** (ou pressione `Ctrl + Enter`).
5. Você verá uma mensagem de sucesso no rodapé: `Success. No rows returned`.

---

## 3. Conferir se as Tabelas foram Criadas

1. No menu lateral esquerdo, clique no ícone **Table Editor** (ícone de planilha/tabela).
2. Você deverá ver as duas tabelas listadas:
   - `beneficiarios`
   - `colaboradores`
3. Se clicar em qualquer uma delas, verá as colunas prontas para receber dados (`id`, `nome`, `email`, `telefone`, etc.).

---

## 4. Copiar as Chaves de Conexão (Credenciais)

Essas duas chaves serão usadas para conectar o código JavaScript do site ao Supabase:

1. No menu lateral esquerdo, clique na **engrenagem no final da barra** (**Project Settings**).
2. No submenu de configurações, clique em **API**.
3. Na seção **Project API keys** e **Project URL**, localize e copie dois dados:
   - **Project URL:** Algo como `https://abcdefghijklm.supabase.co`
   - **anon / public key:** Uma chave de texto longa que começa com `eyJhbGciOi...`

> ⚠️ **Atenção:** Copie a chave chamada **`anon` / `public`**. **NUNCA** copie ou compartilhe a chave `service_role` / `secret`, pois ela ignora todas as travas de segurança.

---

## 5. Checklist Final: O que ter em mãos

Antes de iniciar as alterações nos arquivos do projeto, certifique-se de que tem:

- [ ] Projeto criado na região de **São Paulo (South America)**.
- [ ] Script SQL executado com sucesso (tabelas `beneficiarios` e `colaboradores` criadas).
- [ ] Sua **Project URL**.
- [ ] Sua chave **`anon` (public)**.

Com esses itens prontos, o banco de dados estará 100% configurado para recebermos os envios do formulário do site!
