import type { Metadata } from "next";
import type { ReactNode } from "react";

const pageUrl = "https://www.investigacaoforense.com/portfolio";
const ogImage = "https://www.investigacaoforense.com/tales.PNG";

export const metadata: Metadata = {
  title: "Portfólio de Aplicações e Projetos | Investigação Forense",
  description:
    "Conheça o portfólio de aplicações e projetos de tecnologia desenvolvidos por Tales e Matheus Vieira: perícia digital, BI, automação, compliance e soluções de dados.",
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
    title: "Portfólio de Aplicações e Projetos | Investigação Forense",
    description:
      "Projetos e aplicações de tecnologia em perícia digital, dados, automação e compliance para setores público e privado.",
    siteName: "Investigação Forense",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "Portfólio de aplicações e projetos - Investigação Forense",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfólio de Aplicações e Projetos | Investigação Forense",
    description:
      "Aplicações e projetos de tecnologia com foco em perícia digital, BI, automação e compliance.",
    images: [ogImage],
  },
};

const collectionPageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Portfólio de Aplicações e Projetos",
  url: pageUrl,
  description:
    "Portfólio com aplicações e projetos de tecnologia em perícia digital, investigação, BI e compliance.",
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
  name: "Projetos e aplicações do portfólio",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "MetaScope" },
    { "@type": "ListItem", position: 2, name: "Inspecta Manager" },
    { "@type": "ListItem", position: 3, name: "SynapseOS" },
    { "@type": "ListItem", position: 4, name: "EcoCompliance" },
    { "@type": "ListItem", position: 5, name: "EvidenceOS" },
    { "@type": "ListItem", position: 6, name: "CondoHub e Sistema de Auditoria Geolocalizada" },
    { "@type": "ListItem", position: 7, name: "ScamTrace" },
    { "@type": "ListItem", position: 8, name: "FaceID Forense" },
    { "@type": "ListItem", position: 9, name: "BI para Segurança Pública e Investigação Forense" },
    { "@type": "ListItem", position: 10, name: "Perícia Digital em Dispositivos Móveis" },
    { "@type": "ListItem", position: 11, name: "Análise e Integridade de Laudos e Documentos" },
    { "@type": "ListItem", position: 12, name: "Plataforma InvestigacaoForense.com" },
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
