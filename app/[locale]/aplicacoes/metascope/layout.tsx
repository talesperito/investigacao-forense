import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getTranslations, getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

const ptUrl = 'https://www.investigacaoforense.com/aplicacoes/metascope';
const enUrl = 'https://www.investigacaoforense.com/en/applications/metascope';
const ogImage = 'https://www.investigacaoforense.com/images/metascope/screenshot-1-v2.png';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const t = await getTranslations({ locale, namespace: 'MetaScope' });

  const isEn = locale === 'en';
  const pageUrl = isEn ? enUrl : ptUrl;

  return {
    title: t('seoTitle'),
    description: t('seoMetaDesc'),
    alternates: {
      canonical: pageUrl,
      languages: {
        'pt-BR': ptUrl,
        'en': enUrl,
      },
    },
    openGraph: {
      type: 'website',
      locale: isEn ? 'en_US' : 'pt_BR',
      url: pageUrl,
      title: t('seoTitle'),
      description: t('seoOgDesc'),
      siteName: 'Investigação Forense',
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: t('seoOgImageAlt'),
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('seoTitle'),
      description: t('seoMetaDesc'),
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
}

export default async function MetaScopeLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const t = await getTranslations({ locale, namespace: 'MetaScope' });

  const isEn = locale === 'en';
  const pageUrl = isEn ? enUrl : ptUrl;

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
      priceCurrency: isEn ? 'USD' : 'BRL',
      description: t('seoOfferDesc'),
    },
    provider: {
      '@type': 'Organization',
      name: 'Investigação Forense',
      url: 'https://www.investigacaoforense.com',
    },
    description: t('seoAppDesc'),
    featureList: [
      t('seoFeature1'),
      t('seoFeature2'),
      t('seoFeature3'),
      t('seoFeature4'),
      t('seoFeature5'),
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: t('seoBreadcrumbHome'),
        item: isEn
          ? 'https://www.investigacaoforense.com/en'
          : 'https://www.investigacaoforense.com/',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: t('seoBreadcrumbApps'),
        item: isEn
          ? 'https://www.investigacaoforense.com/en/applications'
          : 'https://www.investigacaoforense.com/aplicacoes',
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
        name: t('faq1Q'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t('faq1A'),
        },
      },
      {
        '@type': 'Question',
        name: t('faq2Q'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t('faq2A'),
        },
      },
      {
        '@type': 'Question',
        name: t('faq3Q'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t('faq3A'),
        },
      },
      {
        '@type': 'Question',
        name: t('faq4Q'),
        acceptedAnswer: {
          '@type': 'Answer',
          text: t('faq4A'),
        },
      },
    ],
  };

  // Provide MetaScope namespace to client page
  const allMessages = await getMessages();
  const pageMessages = {
    MetaScope: (allMessages as Record<string, unknown>).MetaScope,
  };

  return (
    <NextIntlClientProvider messages={pageMessages}>
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
    </NextIntlClientProvider>
  );
}
