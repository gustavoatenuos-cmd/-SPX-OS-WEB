# SPX OS — Web

Site público e porta de entrada para o SPX OS. Projeto independente do repositório do CRM operacional.

## Objetivo

Transformar o produto real da SPX em uma experiência pública clara, inspirada na lógica de navegação do Gamma: um produto central com páginas de entrada específicas para cada capacidade.

## Posicionamento

**SPX OS — Sistema operacional do crescimento comercial.**

A página comunica a verdade operacional já existente: CRM comercial, jornada, agenda, conversas no contexto do paciente, desempenho, configurações, multiunidade, distribuição e governança.

## Rotas

- `/` — visão geral
- `/crm` — CRM comercial
- `/conversas` — WhatsApp no contexto comercial
- `/jornada` — rotina, agenda e prioridades
- `/inteligencia` — desempenho, conversão e gestão
- `/multiunidade` — governança, configurações e distribuição

Todos os CTAs de acesso apontam para o login oficial existente em `https://www.spxos.com.br/entrar`.

## Stack

- HTML5 sem dependência de runtime
- CSS responsivo
- JavaScript leve para roteamento e navegação
- Deploy estático na Vercel

## Rodar localmente

```bash
python -m http.server 8080
```

Não há etapa de build: o projeto é estático e pronto para deploy.

## Deploy na Vercel

O projeto inclui `vercel.json` com fallback de SPA para permitir acesso direto às rotas públicas.

## Identidade

Cores do brandbook SPX:

- Verde SPX `#0D603D`
- Dourado SPX `#E4A126`
- Marfim `#F3EBDD`
- Grafite `#1F1F1F`

## Regra de marca aplicada

A comunicação prioriza verdade demonstrada, clareza e coerência. Nenhuma funcionalidade futura foi apresentada como capacidade já disponível.
