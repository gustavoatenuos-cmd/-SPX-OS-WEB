# SPX OS Web — Repository Manifest

## Remote target

- GitHub account: `gustavoatenuos-cmd`
- Repository: `-SPX-OS-WEB`
- Intended remote: `https://github.com/gustavoatenuos-cmd/-SPX-OS-WEB.git`
- Default branch: `main`
- Current visibility: public (as created by the owner)

## Product architecture

- `/` — SPX OS product overview and conversion page
- `/crm/` — CRM comercial
- `/conversas/` — WhatsApp contextualizado na jornada comercial
- `/jornada/` — rotina, agenda, prioridades e acompanhamento
- `/inteligencia/` — desempenho, funil, gargalos e tomada de decisão
- `/multiunidade/` — unidades, distribuição, governança e gestão
- `/product/` — imagens reais do produto usadas como prova visual

## Brand system

- Verde SPX: `#0D603D`
- Dourado SPX: `#E4A126`
- Marfim: `#F3EBDD`
- Grafite: `#1F1F1F`

## Conversion model

A experiência pública segue a lógica de produto validada no Gamma, sem copiar identidade ou conteúdo:

1. promessa clara;
2. demonstração visual;
3. módulos apresentados como casos de uso;
4. inteligência apresentada como transformação de dado em decisão;
5. prova por telas reais;
6. CTA recorrente para o ambiente operacional real;
7. páginas específicas por intenção de uso.

## Production contract

O projeto público é independente do CRM existente. Nenhum código do `spx-web/CRM-Larkan` é necessário para executar esta experiência.

O CTA de acesso aponta para o ambiente operacional existente em `https://www.spxos.com.br/entrar`.

## Deployment

A base foi preparada como site estático e possui `vercel.json`, portanto pode ser publicada na Vercel sem etapa de build.
