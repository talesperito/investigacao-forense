import type { Metadata } from 'next';
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import { getTranslations } from 'next-intl/server';

const pageUrl = 'https://www.investigacaoforense.com/aplicacoes';
const ogImage = 'https://www.investigacaoforense.com/images/metascope/screenshot-1-v2.png';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const resolvedParams = await params;
  const t = await getTranslations({ locale: resolvedParams.locale, namespace: 'Applications' });
  return {
    title: t('pageTitle') + ' | Investigação Forense',
    description: t('pageSubtitle'),
    alternates: { canonical: pageUrl, languages: { 'pt-BR': pageUrl, 'en': pageUrl.replace('/aplicacoes', '/en/applications') } },
    openGraph: { type: 'website', locale: resolvedParams.locale === 'en' ? 'en_US' : 'pt_BR', url: pageUrl, title: t('pageTitle'), description: t('pageSubtitle'), siteName: 'Investigação Forense', images: [{ url: ogImage, width: 1200, height: 630, alt: 'Investigação Forense' }] },
    twitter: { card: 'summary_large_image' as const, title: t('pageTitle'), description: t('pageSubtitle'), images: [ogImage] },
  };
}

type CTA = {
  label: string;
  href?: any;
  variant: 'primary' | 'secondary' | 'muted';
  external?: boolean;
  disabled?: boolean;
  helper?: string;
};

type ApplicationCard = {
  name: string;
  stage: string;
  audience: string;
  summary: string;
  bullets: string[];
  ctas: CTA[];
};

export default function AplicacoesPage() {
  const t = useTranslations('Applications');

  const applicationCards: ApplicationCard[] = [
    {
      name: 'MetaScope Forensic',
      stage: t('metascopeStage'),
      audience: t('metascopeAudience'),
      summary: t('metascopeSummary'),
      bullets: [t('metascopeBullet1'), t('metascopeBullet2'), t('metascopeBullet3')],
      ctas: [
        { label: t('metascopeCta1'), href: '/aplicacoes/metascope' as const, variant: 'primary' as const },
        { label: t('metascopeCta2'), href: 'https://tally.so/r/lbrQ8p', external: true, variant: 'secondary' as const },
        { label: t('metascopeCta3'), disabled: true, helper: t('metascopeCta3Helper'), variant: 'muted' as const },
      ],
    },
    {
      name: 'EvidenceOS',
      stage: t('evidenceosStage'),
      audience: t('evidenceosAudience'),
      summary: t('evidenceosSummary'),
      bullets: [t('evidenceosBullet1'), t('evidenceosBullet2'), t('evidenceosBullet3')],
      ctas: [
        { label: t('evidenceosCta1'), disabled: true, helper: t('evidenceosCta1Helper'), variant: 'muted' as const },
        { label: t('evidenceosCta2'), href: '/contato' as const, variant: 'secondary' as const },
        { label: t('evidenceosCta3'), disabled: true, variant: 'muted' as const },
      ],
    },
    {
      name: 'CondoHub',
      stage: t('condohubStage'),
      audience: t('condohubAudience'),
      summary: t('condohubSummary'),
      bullets: [t('condohubBullet1'), t('condohubBullet2'), t('condohubBullet3')],
      ctas: [
        { label: t('condohubCta1'), href: '/aplicacoes/condohub' as const, variant: 'primary' as const },
        { label: t('condohubCta2'), href: '/contato' as const, variant: 'secondary' as const },
        { label: t('condohubCta3'), disabled: true, variant: 'muted' as const },
      ],
    },
    {
      name: 'Inspecta Manager',
      stage: t('inspectaStage'),
      audience: t('inspectaAudience'),
      summary: t('inspectaSummary'),
      bullets: [t('inspectaBullet1'), t('inspectaBullet2'), t('inspectaBullet3')],
      ctas: [
        { label: t('inspectaCta1'), disabled: true, helper: t('inspectaCta1Helper'), variant: 'muted' as const },
        { label: t('inspectaCta2'), href: '/contato' as const, variant: 'secondary' as const },
        { label: t('inspectaCta3'), disabled: true, variant: 'muted' as const },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black px-4 md:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto pt-12 pb-20">
        <section className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('pageTitle')}
          </h1>
          <p className="text-lg text-gray-200 leading-relaxed max-w-4xl">
            {t('pageSubtitle')}
          </p>
        </section>

        <section className="mb-12 rounded-2xl border border-blue-800 bg-blue-950/40 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white mb-4">{t('howToNavTitle')}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm md:text-base">
            <div className="rounded-xl border border-blue-800 bg-gray-900/40 p-4 text-gray-200">
              <p className="font-semibold text-white mb-2">{t('step1Title')}</p>
              <p>{t('step1Desc')}</p>
            </div>
            <div className="rounded-xl border border-blue-800 bg-gray-900/40 p-4 text-gray-200">
              <p className="font-semibold text-white mb-2">{t('step2Title')}</p>
              <p>{t('step2Desc')}</p>
            </div>
            <div className="rounded-xl border border-blue-800 bg-gray-900/40 p-4 text-gray-200">
              <p className="font-semibold text-white mb-2">{t('step3Title')}</p>
              <p>{t('step3Desc')}</p>
            </div>
          </div>
        </section>

        <section className="space-y-8">
          {applicationCards.map((app) => (
            <article
              key={app.name}
              className="rounded-2xl border border-gray-700 bg-gray-900/55 p-7 md:p-8 shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <h2 className="text-2xl md:text-3xl font-bold text-white">{app.name}</h2>
                <span className="inline-flex w-fit rounded-full border border-blue-700/70 bg-blue-900/40 px-3 py-1 text-xs font-semibold text-blue-200/90">
                  {t('stageLabel')}: {app.stage}
                </span>
              </div>

              <p className="text-gray-200 leading-relaxed mb-5">{app.summary}</p>
              <p className="text-sm text-slate-300 mb-6">
                <span className="font-semibold text-blue-200">{t('forWhom')}</span> {app.audience}
              </p>

              <ul className="space-y-2 mb-7">
                {app.bullets.map((item) => (
                  <li key={item} className="text-gray-300">
                    - {item}
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                {app.ctas.map((cta) => {
                  const className =
                    cta.variant === 'primary'
                      ? 'w-full inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white transition-colors hover:bg-blue-700 shadow-sm shadow-blue-950/50'
                      : cta.variant === 'secondary'
                        ? 'w-full inline-flex items-center justify-center rounded-lg border border-blue-400/70 bg-blue-500/5 px-5 py-3 font-semibold text-blue-100 transition-colors hover:bg-blue-500/15'
                        : 'w-full inline-flex items-center justify-center rounded-lg border border-slate-700/70 bg-slate-800/45 px-5 py-3 font-semibold text-slate-500 cursor-not-allowed';

                  return (
                    <div key={cta.label} className="space-y-1 min-h-[68px]">
                      {cta.href && !cta.disabled ? (
                        cta.external ? (
                          <a
                            href={cta.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={className}
                          >
                            {cta.label}
                          </a>
                        ) : (
                          <Link href={cta.href as any} className={className}>
                            {cta.label}
                          </Link>
                        )
                      ) : (
                        <button
                          type="button"
                          disabled
                          className={className}
                          title={cta.helper ?? cta.label}
                        >
                          {cta.label}
                        </button>
                      )}
                      <p className="text-xs text-slate-400 text-center min-h-4">{cta.helper ?? ' '}</p>
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </section>

        <section className="mt-12 rounded-2xl border border-gray-700 bg-gray-900/60 p-6 md:p-8">
          <h2 className="text-2xl font-bold text-white mb-3">{t('notSureTitle')}</h2>
          <p className="text-gray-300 mb-6 max-w-3xl">
            {t('notSureDesc')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/portfolio"
              className="inline-flex justify-center rounded-lg border border-white px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
            >
              {t('goToPortfolio')}
            </Link>
            <Link
              href="/contato"
              className="inline-flex justify-center rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-colors hover:bg-blue-700"
            >
              {t('talkToSpecialist')}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
