import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getTranslations } from 'next-intl/server';

const ptUrl = 'https://www.investigacaoforense.com/aplicacoes/condohub';
const enUrl = 'https://www.investigacaoforense.com/en/applications/condohub';
const ogImage = 'https://www.investigacaoforense.com/images/condohub/screenshot-1.png';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const locale = resolvedParams.locale;
    const t = await getTranslations({ locale, namespace: 'CondoHub' });

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

export default async function CondoHubLayout({
    children,
    params,
}: {
    children: ReactNode;
    params: Promise<{ locale: string }>;
}) {
    const resolvedParams = await params;
    const locale = resolvedParams.locale;
    const t = await getTranslations({ locale, namespace: 'CondoHub' });

    const isEn = locale === 'en';
    const pageUrl = isEn ? enUrl : ptUrl;

    const softwareApplicationSchema = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: 'CondoHub',
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        url: pageUrl,
        provider: {
            '@type': 'Organization',
            name: 'Investigação Forense',
            url: 'https://www.investigacaoforense.com',
        },
        description: t('description'),
    };

    const breadcrumbSchema = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: isEn ? 'Home' : 'Início',
                item: isEn
                    ? 'https://www.investigacaoforense.com/en'
                    : 'https://www.investigacaoforense.com/',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: isEn ? 'Applications' : 'Aplicações',
                item: isEn
                    ? 'https://www.investigacaoforense.com/en/applications'
                    : 'https://www.investigacaoforense.com/aplicacoes',
            },
            {
                '@type': 'ListItem',
                position: 3,
                name: 'CondoHub',
                item: pageUrl,
            },
        ],
    };

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
            {children}
        </>
    );
}
