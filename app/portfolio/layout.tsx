import type { Metadata } from "next";
import type { ReactNode } from "react";

const pageUrl = "https://www.investigacaoforense.com/portfolio";
const ogImage = "https://www.investigacaoforense.com/tales.PNG";

export const metadata: Metadata = {
  title: "Portfolio de Aplicacoes e Projetos | Investigacao Forense",
  description:
    "Conheca o portfolio de aplicacoes e projetos de tecnologia desenvolvidos por Tales e Matheus Vieira: pericia digital, BI, automacao, compliance e solucoes de dados.",
  alternates: {
    canonical: pageUrl,
    languages: {
      "pt-BR": pageUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: pageUrl,
    title: "Portfolio de Aplicacoes e Projetos | Investigacao Forense",
    description:
      "Projetos e aplicacoes de tecnologia em pericia digital, dados, automacao e compliance para setores publico e privado.",
    siteName: "Investigacao Forense",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Portfolio de aplicacoes e projetos - Investigacao Forense",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio de Aplicacoes e Projetos | Investigacao Forense",
    description:
      "Aplicacoes e projetos de tecnologia com foco em pericia digital, BI, automacao e compliance.",
    images: [ogImage],
  },
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portfolio de Aplicacoes e Projetos",
  url: pageUrl,
  description:
    "Portfolio com aplicacoes e projetos de tecnologia em pericia digital, investigacao, BI e compliance.",
};

const peopleSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Tales Vieira",
    jobTitle: "Especialista em Pericia Digital e Ciencia de Dados Forense",
    url: pageUrl,
    sameAs: ["https://www.linkedin.com/in/peritotales/"],
  },
  {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Matheus Vieira",
    jobTitle: "Engenheiro de Software Forense",
    url: pageUrl,
    sameAs: ["https://www.linkedin.com/in/matheusvieira-dev/"],
  },
];

const projectListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Projetos e aplicacoes do portfolio",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "BI para Seguranca Publica e Investigacao Forense" },
    { "@type": "ListItem", position: 2, name: "FaceID Forense" },
    { "@type": "ListItem", position: 3, name: "EvidenceOS" },
    { "@type": "ListItem", position: 4, name: "MetaScope" },
    { "@type": "ListItem", position: 5, name: "CondoHub e Sistema de Auditoria Geolocalizada" },
    { "@type": "ListItem", position: 6, name: "ScamTrace" },
    { "@type": "ListItem", position: 7, name: "Analise e Integridade de Laudos e Documentos" },
    { "@type": "ListItem", position: 8, name: "Pericia Digital em Dispositivos Moveis" },
    { "@type": "ListItem", position: 9, name: "Plataforma InvestigacaoForense.com" },
  ],
};

export default function PortfolioLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(peopleSchema[0]) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(peopleSchema[1]) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(projectListSchema) }}
      />
      {children}
    </>
  );
}
