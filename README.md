# Investigação Forense

Site profissional institucional focado em software para dados, documentos e decisoes criticas.

Website oficial: [https://www.investigacaoforense.com](https://www.investigacaoforense.com)

## Objetivo

Este repositorio contem a camada de apresentacao do site: paginas institucionais, portfolio, blog, servicos, cursos e paginas de aplicacoes demonstrativas.

O foco e comunicar experiencia tecnica, casos de uso e posicionamento profissional em:

- dados e BI para ambientes regulados
- automacao de processos e rastreabilidade
- software aplicado a contextos de pericia e investigacao

## Escopo do repositorio

Inclui:

- frontend em Next.js (App Router)
- componentes React reutilizaveis
- ativos estaticos (imagens, sitemap e robots)
- pagina de politica de privacidade e banner de consentimento

Nao inclui:

- APIs de backend
- banco de dados operacional
- autenticacao de usuarios
- pipelines de IA/ML em execucao neste repositorio

Observacao: alguns projetos e resultados apresentados no site referenciam sistemas externos, privados ou institucionais.

## Stack atual

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Lucide React

## Estrutura

```text
.
|- app/                  # rotas (App Router)
|  |- aplicacoes/
|  |- blog/
|  |- contato/
|  |- cursos/
|  |- portfolio/
|  |- servicos/
|  `- ...
|- components/           # componentes reutilizaveis
|- public/               # assets estaticos, sitemap e robots
|- architecture.md       # visao arquitetural do frontend
`- security.md           # consideracoes de seguranca
```

## Execucao local

```bash
git clone https://github.com/talesperito/investigacao-forense.git
cd investigacao-forense
npm install
npm run dev
```

Acesse: `http://localhost:3000`

## Conteudos e secoes principais

- Home institucional com proposta de valor
- Portfolio profissional e casos tecnicos
- Aplicacoes demonstrativas (ex.: MetaScope e CondoHub)
- Blog tecnico
- Paginas de servicos, cursos e contato
- Politica de privacidade (PT/EN)

## Contato

- Email: `talesperito@gmail.com`
- Site: [investigacaoforense.com](https://www.investigacaoforense.com)
- LinkedIn (Tales): [linkedin.com/in/peritotales](https://www.linkedin.com/in/peritotales/)
- LinkedIn (Matheus): [linkedin.com/in/matheusvieira-dev](https://www.linkedin.com/in/matheusvieira-dev/)

## Licenca

Todos os direitos reservados.  
Copyright (c) 2026 Investigacao Forense.
