import createNextIntlPlugin from 'next-intl/plugin';
import type { NextConfig } from "next";

const withNextIntl = createNextIntlPlugin('./i18n/request.ts');

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Legacy root-level aliases
      {
        source: "/solucoes",
        destination: "/aplicacoes",
        permanent: true,
      },
      {
        source: "/blog",
        destination: "/",
        permanent: true,
      },
      {
        source: "/blog/:slug",
        destination: "/",
        permanent: true,
      },
      {
        source: "/sobre",
        destination: "/",
        permanent: true,
      },
      {
        source: "/downloads",
        destination: "/cursos",
        permanent: true,
      },
      {
        source: "/consultoria-em-pericias-civeis-e-trabalhistas",
        destination: "/servicos",
        permanent: true,
      },
      {
        source: "/laudos-periciais-como-escrever-um-documento-objetivo-e-inquestionavel",
        destination: "/servicos",
        permanent: true,
      },
      {
        source: "/politica-de-privacidade-2",
        destination: "/politica-de-privacidade",
        permanent: true,
      },
      {
        source: "/explorando-a-carreira-de-perito-criminal",
        destination: "/cursos",
        permanent: true,
      },
      {
        source: "/aqui-voce-pode-testar-seus-conhecimentos",
        destination: "/cursos",
        permanent: true,
      },
      // Strategic old posts: keep discoverable via equivalent page until rebuilt
      {
        source: "/revelando-segredos-digitais-a-importancia-dos-metadados-na-analise-pericial",
        destination: "/plataforma-dados-criticos",
        permanent: true,
      },
      {
        source: "/a-importancia-da-cadeia-de-custodia-da-prova-pericial-mudancas-legais-e-responsabilidades-da-pericia-criminal",
        destination: "/servicos",
        permanent: true,
      },
      {
        source: "/pericia-criminal-e-inteligencia-artificial-o-futuro-das-investigacoes",
        destination: "/aplicacoes",
        permanent: true,
      },
      {
        source: "/tecnologia-na-pericia-criminal-ferramentas-avancadas-para-investigacoes-modernas",
        destination: "/aplicacoes",
        permanent: true,
      },
      {
        source: "/hash-e-assinaturas-eletronicas-como-a-tecnologia-protege-anonimiza-e-garante-integridade-de-dados",
        destination: "/plataforma-dados-criticos",
        permanent: true,
      },
    ];
  },
};

export default withNextIntl(nextConfig);
