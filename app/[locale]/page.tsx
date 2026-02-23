import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

const homeUrl = 'https://www.investigacaoforense.com/';
const homeOgImage = 'https://www.investigacaoforense.com/images/metascope/screenshot-1-v2.png';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'Home' });

  return {
    title: t('heroTitle') + ' | Investigação Forense',
    description: t('heroSubtitle'),
    alternates: {
      canonical: homeUrl,
      languages: {
        'pt-BR': homeUrl,
        'en': homeUrl + 'en',
      },
    },
    openGraph: {
      type: 'website',
      locale: resolvedParams.locale === 'en' ? 'en_US' : 'pt_BR',
      url: homeUrl,
      title: t('heroTitle') + ' | Investigação Forense',
      description: t('heroSubtitle'),
      siteName: 'Investigação Forense',
      images: [
        {
          url: homeOgImage,
          width: 1200,
          height: 630,
          alt: 'Investigação Forense',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('heroTitle') + ' | Investigação Forense',
      description: t('heroSubtitle'),
      images: [homeOgImage],
    },
  };
}

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Investigação Forense',
  url: homeUrl,
};

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Investigação Forense',
  url: homeUrl,
  logo: 'https://www.investigacaoforense.com/favicon.ico',
  sameAs: [
    'https://www.linkedin.com/in/peritotales/',
    'https://www.linkedin.com/in/matheusvieira-dev/',
  ],
};

export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />

      <section className="relative overflow-hidden w-full min-h-[68vh] md:min-h-[74vh] bg-gradient-to-b from-slate-100 via-blue-50 to-cyan-50 border-b border-slate-200">
        <div className="absolute -top-28 -left-20 h-80 w-80 rounded-full bg-blue-300/30 blur-3xl" />
        <div className="absolute top-24 -right-16 h-72 w-72 rounded-full bg-cyan-300/35 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/2 -translate-x-1/2 h-64 w-[46rem] rounded-full bg-blue-200/40 blur-3xl" />

        <div className="relative h-full min-h-[68vh] md:min-h-[74vh] flex flex-col items-center justify-center px-4 text-center text-slate-900">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 md:mb-6 leading-[1.08] tracking-[-0.02em] max-w-[22ch]">
            {t('heroTitle')}
          </h1>
          <p className="text-lg sm:text-xl md:text-[1.95rem] mb-10 md:mb-12 max-w-[42ch] text-slate-700 leading-[1.4]">
            {t('heroSubtitle')}
          </p>

          <div className="flex flex-col md:flex-row gap-4 md:gap-6">
            <Link
              href="/portfolio"
              className="px-8 py-4 bg-blue-600 hover:bg-blue-700 transition-all duration-300 rounded-lg font-semibold text-lg tracking-[-0.01em] text-white shadow-sm hover:shadow-md"
            >
              {t('ctaPrimary')}
            </Link>
            <Link
              href="/aplicacoes"
              className="px-8 py-4 border-2 border-blue-600 text-blue-700 bg-white/70 hover:bg-blue-600 hover:text-white transition-all duration-300 rounded-lg font-semibold text-lg tracking-[-0.01em] shadow-sm hover:shadow-md"
            >
              {t('ctaSecondary')}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-lg md:text-xl text-slate-700 leading-[1.75] mb-8 max-w-[56ch] mx-auto">
            {t('aboutP1')}
          </p>
          <p className="text-base md:text-lg text-slate-600 leading-[1.75] mb-8 max-w-[58ch] mx-auto">
            {t('aboutP2')}
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/plataforma-dados-criticos" className="text-slate-800 hover:text-blue-700 font-bold text-lg transition-colors">
              {'-> '}{t('aboutLink1')}
            </Link>
            <Link href="/aplicacoes" className="text-slate-800 hover:text-blue-700 font-bold text-lg transition-colors">
              {'-> '}{t('aboutLink2')}
            </Link>
            <Link href="/aplicacoes/metascope" className="text-slate-800 hover:text-blue-700 font-bold text-lg transition-colors">
              {'-> '}{t('aboutLink3')}
            </Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-gradient-to-b from-slate-50 to-blue-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-[-0.015em] text-center text-slate-900 mb-16">{t('howWeWorkTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm">
              <h3 className="text-2xl font-bold tracking-[-0.01em] text-slate-900 mb-4">{t('howCard1Title')}</h3>
              <p className="text-slate-600">{t('howCard1Desc')}</p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm">
              <h3 className="text-2xl font-bold tracking-[-0.01em] text-slate-900 mb-4">{t('howCard2Title')}</h3>
              <p className="text-slate-600">{t('howCard2Desc')}</p>
            </div>
            <div className="p-8 bg-white rounded-xl border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-sm">
              <h3 className="text-2xl font-bold tracking-[-0.01em] text-slate-900 mb-4">{t('howCard3Title')}</h3>
              <p className="text-slate-600">{t('howCard3Desc')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-[-0.015em] text-center text-slate-900 mb-4">{t('sectorsTitle')}</h2>
          <p className="text-center text-slate-600 text-lg leading-[1.7] max-w-[58ch] mx-auto mb-14">
            {t('sectorsSubtitle')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {([
              [t('sector1Title'), t('sector1Desc'), t('sector1Tag')],
              [t('sector2Title'), t('sector2Desc'), t('sector2Tag')],
              [t('sector3Title'), t('sector3Desc'), t('sector3Tag')],
              [t('sector4Title'), t('sector4Desc'), t('sector4Tag')],
              [t('sector5Title'), t('sector5Desc'), t('sector5Tag')],
              [t('sector6Title'), t('sector6Desc'), t('sector6Tag')],
            ] as const).map(([title, desc, tag]) => (
              <div key={title} className="p-6 bg-gradient-to-b from-blue-50 to-white border border-blue-100 rounded-xl shadow-sm h-full flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
                <p className="text-slate-600 mb-6">{desc}</p>
                <span className="inline-block mt-auto text-xs px-3 py-1 rounded-full bg-blue-600/10 text-blue-700 font-semibold">{tag}</span>
              </div>
            ))}
          </div>
          <p className="text-center mt-10">
            <Link href="/contato" className="text-blue-700 hover:text-blue-800 font-semibold transition-colors">
              {t('sectorsCta')} {'->'}
            </Link>
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-blue-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 border-l-4 border-blue-600 bg-white rounded-xl shadow-sm">
            <p className="text-xl text-slate-700 leading-relaxed text-center">
              {t('quoteText')}
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-[-0.015em] text-center text-slate-900 mb-4">
            {t('servicesTitle')}
          </h2>
          <p className="text-center text-slate-600 text-lg leading-[1.7] max-w-[58ch] mx-auto mb-14">
            {t('servicesSubtitle')}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="flex flex-col p-8 rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50 to-white">
              <h3 className="text-2xl font-bold tracking-[-0.01em] text-slate-900 mb-8">{t('coreServicesTitle')}</h3>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">-</span>
                  <span className="text-slate-800">{t('coreService1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">-</span>
                  <span className="text-slate-800">{t('coreService2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">-</span>
                  <span className="text-slate-800">{t('coreService3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">-</span>
                  <span className="text-slate-800">{t('coreService4')}</span>
                </li>
              </ul>
              <Link href="/servicos" className="px-6 py-3 border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold rounded-lg text-center">
                {t('coreServicesCta')}
              </Link>
            </div>

            <div className="flex flex-col p-8 rounded-2xl border border-slate-200 bg-slate-50">
              <h3 className="text-2xl font-bold tracking-[-0.01em] text-slate-900 mb-8">{t('deliveryTitle')}</h3>
              <ul className="space-y-4 mb-8 flex-grow">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">-</span>
                  <span className="text-slate-800">{t('delivery1')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">-</span>
                  <span className="text-slate-800">{t('delivery2')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">-</span>
                  <span className="text-slate-800">{t('delivery3')}</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">-</span>
                  <span className="text-slate-800">{t('delivery4')}</span>
                </li>
              </ul>
              <Link href="/contato" className="px-6 py-3 border-2 border-blue-600 text-blue-700 hover:bg-blue-600 hover:text-white transition-all duration-300 font-semibold rounded-lg text-center">
                {t('deliveryCta')}
              </Link>
            </div>
          </div>

          <p className="text-center text-sm text-slate-500 mt-8">
            {t('servicesFootnote')}
          </p>
        </div>
      </section>

      <section className="py-24 px-4 bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-[-0.02em] text-white mb-6">{t('ctaFinalTitle')}</h2>
          <p className="text-xl leading-[1.55] text-blue-50 mb-12 max-w-[38ch] mx-auto">
            {t('ctaFinalSubtitle')}
          </p>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <Link href="/portfolio" className="px-8 py-4 bg-white text-blue-700 hover:bg-blue-50 transition-all duration-300 font-semibold rounded-lg text-lg shadow-sm">
              {t('ctaFinalPrimary')}
            </Link>
            <Link href="/contato" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-blue-700 transition-all duration-300 rounded-lg font-semibold text-lg">
              {t('ctaFinalSecondary')}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}


