import type { Metadata } from 'next';
import type { ReactNode } from 'react';

const pageUrl = 'https://www.investigacaoforense.com/aplicacoes/metascope';
const ogImage = 'https://www.investigacaoforense.com/images/metascope/screenshot-1-v2.png';

export const metadata: Metadata = {
  title: 'MetaScope Forensic | Análise Forense de Arquivos, Links e Prints',
  description:
    'Valide autenticidade e integridade de imagens, vídeos e documentos com hash SHA-256, metadados, detecção de indícios de IA e relatório técnico em PDF.',
  alternates: {
    canonical: pageUrl,
    languages: {
      'pt-BR': pageUrl,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: pageUrl,
    title: 'MetaScope Forensic | Análise Forense de Arquivos, Links e Prints',
    description:
      'Ferramenta de apoio à decisão forense para análise de arquivos, links e prints suspeitos com evidências técnicas e relatório em PDF.',
    siteName: 'Investigação Forense',
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: 'MetaScope Forensic - painel de validação e análise forense',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MetaScope Forensic | Análise Forense de Arquivos, Links e Prints',
    description:
      'Metadados, hash SHA-256, detecção de indícios de IA e relatório técnico para apoio pericial.',
    images: [ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

const softwareApplicationSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: 'MetaScope Forensic',
  applicationCategory: 'SecurityApplication',
  operatingSystem: 'Web',
  url: pageUrl,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'BRL',
    description: 'Acesso de avaliação sob solicitação',
  },
  provider: {
    '@type': 'Organization',
    name: 'Investigação Forense',
    url: 'https://www.investigacaoforense.com',
  },
  description:
    'Ferramenta web de apoio à decisão forense para validação de autenticidade e integridade em arquivos digitais, links e prints suspeitos.',
  featureList: [
    'Extração e análise de metadados técnicos',
    'Hash SHA-256 para verificação de integridade',
    'Detecção de indícios de manipulação e IA',
    'Análise de links e prints suspeitos com OCR',
    'Geração de relatório técnico em PDF',
  ],
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Início',
      item: 'https://www.investigacaoforense.com/',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Aplicações',
      item: 'https://www.investigacaoforense.com/aplicacoes',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'MetaScope',
      item: pageUrl,
    },
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'O MetaScope substitui uma perícia?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. É uma ferramenta de apoio técnico para triagem, validação e documentação. Em casos críticos, recomenda-se análise especializada complementar.',
      },
    },
    {
      '@type': 'Question',
      name: 'O sistema guarda meus arquivos?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. O processamento ocorre no navegador e não há armazenamento em servidor.',
      },
    },
    {
      '@type': 'Question',
      name: 'O MetaScope confirma se algo foi feito por IA?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Ele aponta indícios técnicos e apresenta score com justificativas. Como qualquer detecção automatizada, não é 100% conclusiva.',
      },
    },
    {
      '@type': 'Question',
      name: 'A localização GPS sempre aparece?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Não. A geolocalização só é exibida quando o arquivo contém EXIF GPS. Muitas plataformas removem metadados ao reprocessar imagens.',
      },
    },
  ],
};

export default function MetaScopeLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
