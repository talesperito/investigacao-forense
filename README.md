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
- **Next-Intl** (Internacionalização/i18n)

## Estrutura

O projeto utiliza a estrutura de **App Router** com suporte nativo a múltiplos idiomas via `next-intl`.

```text
.
|— app/                  # Rotas por idioma
|  |— [locale]/          # Segmento dinamico para idiomas (pt/en)
|  |  |— aplicacoes/
|  |  |— portfolio/
|  |  |— ...
|— i18n/                 # Configurações de roteamento e request i18n
|— messages/             # Arquivos de tradução (JSON)
|  |— pt.json
|  |— en.json
|— components/           # Componentes reutilizaveis
|— public/               # Assets estaticos, sitemap e robots
|— architecture.md       # Visao arquitetural do frontend
`- security.md           # Consideracoes de seguranca
```

## Internacionalização (i18n)

O site é totalmente bilíngue (Português e Inglês). 

- **Detecção**: O idioma é detectado pela URL (ex: `/pt/` ou `/en/`).
- **Traduções**: Centralizadas na pasta `/messages`.
- **SEO**: Tags `hreflang` e metadados dinâmicos são aplicados automaticamente conforme o idioma selecionado.


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
