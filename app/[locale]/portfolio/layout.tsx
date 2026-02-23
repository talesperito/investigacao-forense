import type { Metadata } from "next";
import type { ReactNode } from "react";
import { getTranslations } from "next-intl/server";

const ptUrl = "https://www.investigacaoforense.com/portfolio";
const enUrl = "https://www.investigacaoforense.com/en/portfolio";
const ogImage = "https://www.investigacaoforense.com/tales.PNG";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const t = await getTranslations({ locale, namespace: 'Portfolio' });

  const isEn = locale === 'en';
  const pageUrl = isEn ? enUrl : ptUrl;

  return {
    title: t('metaTitle'),
    description: t('metaDesc'),
    alternates: {
      canonical: pageUrl,
      languages: {
        "pt-BR": ptUrl,
        "en": enUrl,
      },
    },
    openGraph: {
      type: "website",
      locale: isEn ? "en_US" : "pt_BR",
      url: pageUrl,
      title: t('metaTitle'),
      description: t('metaDesc'),
      siteName: "Investigação Forense",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: t('metaTitle'),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: t('metaTitle'),
      description: t('metaDesc'),
      images: [ogImage],
    },
  };
}

export default async function PortfolioLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const t = await getTranslations({ locale, namespace: 'Portfolio' });

  const isEn = locale === 'en';
  const pageUrl = isEn ? enUrl : ptUrl;

  const collectionPageSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: t('heroTitle'),
    url: pageUrl,
    description: t('metaDesc'),
  };

  const peopleSchema = [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Tales Vieira",
      jobTitle: t('talesRole'),
      url: pageUrl,
      sameAs: ["https://www.linkedin.com/in/peritotales/"],
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Matheus Vieira",
      jobTitle: t('matheusRole'),
      url: pageUrl,
      sameAs: ["https://www.linkedin.com/in/matheusvieira-dev/"],
    },
  ];

  const projectListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: isEn ? "Portfolio projects and applications" : "Projetos e aplicações do portfólio",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "MetaScope" },
      { "@type": "ListItem", position: 2, name: "Inspecta Manager" },
      { "@type": "ListItem", position: 3, name: "SynapseOS" },
      { "@type": "ListItem", position: 4, name: "EcoCompliance" },
      { "@type": "ListItem", position: 5, name: "EvidenceOS" },
      { "@type": "ListItem", position: 6, name: isEn ? "CondoHub & Geolocated Audit System" : "CondoHub e Sistema de Auditoria Geolocalizada" },
      { "@type": "ListItem", position: 7, name: "ScamTrace" },
      { "@type": "ListItem", position: 8, name: isEn ? "FaceID Forensic" : "FaceID Forense" },
      { "@type": "ListItem", position: 9, name: isEn ? "BI for Public Safety & Forensic Investigation" : "BI para Segurança Pública e Investigação Forense" },
      { "@type": "ListItem", position: 10, name: isEn ? "Mobile Device Digital Forensics" : "Perícia Digital em Dispositivos Móveis" },
      { "@type": "ListItem", position: 11, name: isEn ? "Report & Document Analysis & Integrity" : "Análise e Integridade de Laudos e Documentos" },
      { "@type": "ListItem", position: 12, name: "InvestigacaoForense.com" },
    ],
  };

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
