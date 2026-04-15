import { getTranslations } from 'next-intl/server';

const ptHomeUrl = 'https://www.investigacaoforense.com/';
const enHomeUrl = 'https://www.investigacaoforense.com/en';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;
  const t = await getTranslations({ locale, namespace: 'Home' });
  const isEn = locale === 'en';

  return {
    title: isEn ? `${t('metaTitle')} | Investigação Forense` : t('metaTitle'),
    description: t('metaDesc'),
    alternates: {
      canonical: isEn ? enHomeUrl : ptHomeUrl,
      languages: {
        'pt-BR': ptHomeUrl,
        'en': enHomeUrl,
      },
    },
    robots: {
      index: false,
      follow: true,
    },
  };
}

export { default } from '../page';
