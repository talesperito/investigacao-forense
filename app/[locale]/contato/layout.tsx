import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { getMessages, getTranslations } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

const ptUrl = 'https://www.investigacaoforense.com/contato';
const enUrl = 'https://www.investigacaoforense.com/en/contact';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
    const resolvedParams = await params;
    const locale = resolvedParams.locale;
    const t = await getTranslations({ locale, namespace: 'Contact' });
    const isEn = locale === 'en';
    const pageUrl = isEn ? enUrl : ptUrl;

    return {
        title: t('heroTitle') + ' | Investigação Forense',
        description: t('heroSubtitle'),
        alternates: {
            canonical: pageUrl,
            languages: { 'pt-BR': ptUrl, 'en': enUrl, 'x-default': ptUrl },
        },
        openGraph: {
            type: 'website',
            locale: isEn ? 'en_US' : 'pt_BR',
            url: pageUrl,
            title: t('heroTitle'),
            description: t('heroSubtitle'),
            siteName: 'Investigação Forense',
        },
    };
}

export default async function ContatoLayout({
    children,
}: {
    children: ReactNode;
}) {
    // Provide Contact namespace to client page
    const allMessages = await getMessages();
    const pageMessages = {
        Contact: (allMessages as Record<string, unknown>).Contact,
    };

    return (
        <NextIntlClientProvider messages={pageMessages}>
            {children}
        </NextIntlClientProvider>
    );
}
