import type { Metadata } from 'next';
import Image from 'next/image';
import {
  Archive,
  BookOpenCheck,
  CheckCircle2,
  Fingerprint,
  Globe2,
  Inbox,
  Link2,
  OctagonAlert,
  Send,
  ShieldCheck,
} from 'lucide-react';
import { GuideAppLink, GuideDownloadLink } from './GuideLinks';
import { guideCopy, guideDownloadPath, guideSha256, hashDemo, pageUrls, type Locale } from './copy';

type PageProps = {
  params: Promise<{ locale: string }>;
};

const siteUrl = 'https://www.investigacaoforense.com';
const coverImage = '/images/metascope/guia/guia-capa.webp';
const protocolImage = '/images/metascope/guia/guia-protocolo.webp';
const boletoImage = '/images/metascope/guia/guia-boleto-nfe.webp';

const proofIcons = [Fingerprint, ShieldCheck, Globe2];
const flowIcons = [Inbox, Send, Archive, Link2];

function getLocale(locale: string): Locale {
  return locale === 'en' ? 'en' : 'pt';
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = guideCopy[getLocale(locale)];
  const pageUrl = pageUrls[getLocale(locale)];
  const image = `${siteUrl}${coverImage}`;

  return {
    title: t.metaTitle,
    description: t.metaDescription,
    alternates: {
      canonical: pageUrl,
      languages: {
        'pt-BR': pageUrls.pt,
        en: pageUrls.en,
      },
    },
    openGraph: {
      type: 'website',
      locale: t.ogLocale,
      url: pageUrl,
      title: t.ogTitle,
      description: t.ogDescription,
      siteName: 'Investigação Forense',
      images: [{ url: image, width: 1075, height: 1521, alt: t.ogAlt }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.ogTitle,
      description: t.metaDescription,
      images: [image],
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

/** Compara os dois hashes posicao a posicao e destaca o que mudou. */
function HashLine({ value, against, highlight }: { value: string; against: string; highlight: boolean }) {
  return (
    <p className="break-all font-mono text-[13px] leading-6 tracking-wide sm:text-sm">
      {value.split('').map((char, index) => {
        const changed = highlight && char !== against[index];
        return (
          <span key={index} className={changed ? 'rounded-sm bg-amber-400/20 font-bold text-amber-300' : 'text-slate-300'}>
            {char}
          </span>
        );
      })}
    </p>
  );
}

function SectionHeading({
  eyebrow,
  title,
  description,
  tone = 'light',
}: {
  eyebrow: string;
  title: string;
  description?: string;
  tone?: 'light' | 'dark';
}) {
  const dark = tone === 'dark';
  return (
    <div className="max-w-3xl">
      <p className={`text-sm font-bold uppercase ${dark ? 'text-blue-200' : 'text-blue-700'}`}>{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-black md:text-4xl">{title}</h2>
      {description ? (
        <p className={`mt-4 text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>{description}</p>
      ) : null}
    </div>
  );
}

export default async function GuiaIntegridadeDigitalPage({ params }: PageProps) {
  const { locale: rawLocale } = await params;
  const locale = getLocale(rawLocale);
  const t = guideCopy[locale];
  const pageUrl = pageUrls[locale];
  const isEn = locale === 'en';

  const documentSchema = {
    '@context': 'https://schema.org',
    '@type': 'DigitalDocument',
    name: t.schemaName,
    description: t.schemaDescription,
    url: pageUrl,
    inLanguage: 'pt-BR',
    isAccessibleForFree: true,
    encodingFormat: 'application/pdf',
    image: `${siteUrl}${coverImage}`,
    dateModified: '2026-11-17',
    encoding: {
      '@type': 'MediaObject',
      contentUrl: `${siteUrl}${guideDownloadPath}`,
      encodingFormat: 'application/pdf',
      sha256: guideSha256,
    },
    author: [
      { '@type': 'Organization', name: 'MetaScope Forense', url: `${siteUrl}/aplicacoes/metascope` },
      { '@type': 'Person', name: 'Tales Giuliano Vieira' },
    ],
    publisher: { '@type': 'Organization', name: 'Investigação Forense', url: siteUrl },
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: t.breadcrumb.home, item: isEn ? `${siteUrl}/en` : `${siteUrl}/` },
      {
        '@type': 'ListItem',
        position: 2,
        name: t.breadcrumb.apps,
        item: isEn ? `${siteUrl}/en/applications/metascope` : `${siteUrl}/aplicacoes/metascope`,
      },
      { '@type': 'ListItem', position: 3, name: t.breadcrumb.guide, item: pageUrl },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: t.faq.items.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: { '@type': 'Answer', text: item.answer },
    })),
  };

  return (
    <main className="min-h-screen bg-slate-50 pb-20 text-slate-950 md:pb-0">
      {[documentSchema, breadcrumbSchema, faqSchema].map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background:
              'linear-gradient(135deg, rgba(15, 23, 42, 0.96), rgba(30, 41, 59, 0.92)), radial-gradient(circle at 78% 20%, rgba(14, 165, 233, 0.28), transparent 34%)',
          }}
        />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-16 md:px-8 md:py-20 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-4 py-2 text-sm font-bold text-blue-100">
              <BookOpenCheck className="h-4 w-4" aria-hidden="true" />
              {t.hero.badge}
            </div>

            <h1 className="mt-6 max-w-4xl text-4xl font-black leading-tight tracking-normal md:text-6xl">{t.hero.title}</h1>
            <p className="mt-4 max-w-3xl text-xl font-semibold leading-snug text-blue-100 md:text-2xl">{t.hero.subtitle}</p>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-slate-200">{t.hero.description}</p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <GuideDownloadLink
                href={guideDownloadPath}
                label={t.hero.download}
                locale={locale}
                placement="hero"
              />
              <a
                href="#conteudo"
                className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-7 py-4 text-base font-extrabold text-white transition hover:bg-white/10"
              >
                {t.hero.secondary}
              </a>
            </div>

            <p className="mt-5 text-sm text-slate-300">{t.hero.note}</p>
            {t.hero.langNote ? (
              <p className="mt-4 max-w-2xl rounded-2xl border border-amber-300/25 bg-amber-300/10 p-4 text-sm leading-relaxed text-amber-100">
                {t.hero.langNote}
              </p>
            ) : null}
          </div>

          <div className="lg:col-span-5">
            <div className="mx-auto max-w-sm rounded-[28px] border border-white/10 bg-white/10 p-4 shadow-2xl shadow-black/30 backdrop-blur">
              <Image
                src={coverImage}
                alt={t.hero.coverAlt}
                width={1075}
                height={1521}
                priority
                sizes="(min-width: 1024px) 384px, 90vw"
                className="h-auto w-full rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Proof cards */}
      <section className="mx-auto max-w-7xl px-4 py-14 md:px-8">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {t.proof.map((card, index) => {
            const Icon = proofIcons[index];
            return (
              <div key={card.title} className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm">
                <Icon className="h-8 w-8 text-blue-700" aria-hidden="true" />
                <h2 className="mt-5 text-xl font-black">{card.title}</h2>
                <p className="mt-3 leading-relaxed text-slate-600">{card.description}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Hash demo */}
      <section id="conteudo" className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading
            eyebrow={t.hashDemo.eyebrow}
            title={t.hashDemo.title}
            description={t.hashDemo.description}
            tone="dark"
          />

          <figure className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <p className="text-sm font-bold text-slate-300">{t.hashDemo.originalLabel}</p>
              <div className="mt-4">
                <HashLine value={hashDemo.original} against={hashDemo.altered} highlight={false} />
              </div>
            </div>
            <div className="rounded-3xl border border-amber-300/30 bg-amber-300/5 p-6">
              <p className="text-sm font-bold text-amber-300">{t.hashDemo.alteredLabel}</p>
              <div className="mt-4">
                <HashLine value={hashDemo.altered} against={hashDemo.original} highlight />
              </div>
            </div>
            <figcaption className="text-sm text-slate-400 md:col-span-2">
              {t.hashDemo.caption} {t.hashDemo.legend}
            </figcaption>
          </figure>

          <h3 className="mt-14 text-xl font-black">{t.hashDemo.ideasTitle}</h3>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            {t.hashDemo.ideas.map((idea) => (
              <div key={idea.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h4 className="text-lg font-black text-white">{idea.title}</h4>
                <p className="mt-3 leading-relaxed text-slate-300">{idea.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brazilian documents */}
      <section id="brasil" className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionHeading eyebrow={t.brazil.eyebrow} title={t.brazil.title} description={t.brazil.description} />

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-start">
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm lg:col-span-8">
            <table className="w-full border-collapse text-left text-sm md:text-base">
              <thead className="bg-slate-100 text-xs font-bold uppercase text-slate-600">
                <tr>
                  <th scope="col" className="px-5 py-3">
                    {t.brazil.columns.term}
                  </th>
                  {t.brazil.columns.what ? (
                    <th scope="col" className="hidden px-5 py-3 md:table-cell">
                      {t.brazil.columns.what}
                    </th>
                  ) : null}
                  <th scope="col" className="px-5 py-3">
                    {t.brazil.columns.covers}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                {t.brazil.rows.map((row) => (
                  <tr key={row.term} className="align-top">
                    <th scope="row" className="px-5 py-4 font-black text-slate-950">
                      {row.term}
                      {row.what ? <span className="mt-2 block text-sm font-normal text-slate-600 md:hidden">{row.what}</span> : null}
                    </th>
                    {t.brazil.columns.what ? (
                      <td className="hidden px-5 py-4 leading-relaxed text-slate-600 md:table-cell">{row.what}</td>
                    ) : null}
                    <td className="px-5 py-4 leading-relaxed text-slate-700">{row.covers}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="lg:col-span-4">
            <div className="mx-auto max-w-xs rounded-3xl border border-slate-200 bg-white p-3 shadow-sm lg:max-w-none">
              <Image
                src={boletoImage}
                alt={t.brazil.imageAlt}
                width={1075}
                height={1521}
                sizes="(min-width: 1024px) 33vw, 80vw"
                className="h-auto w-full rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>

        <p className="mt-6 max-w-3xl rounded-2xl border border-blue-100 bg-blue-50 p-5 leading-relaxed text-blue-950">
          {t.brazil.note}
        </p>
      </section>

      {/* Four workflows */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow={t.flows.eyebrow} title={t.flows.title} description={t.flows.description} />
          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            {t.flows.items.map((item, index) => {
              const Icon = flowIcons[index];
              return (
                <article key={item.title} className="rounded-[28px] border border-slate-200 bg-slate-50 p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </span>
                    {item.tag ? (
                      <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600 ring-1 ring-slate-200">
                        {item.tag}
                      </span>
                    ) : null}
                  </div>
                  <h3 className="mt-5 text-xl font-black">{item.title}</h3>
                  <p className="mt-3 leading-relaxed text-slate-600">{item.description}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Protocol */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-7">
            <SectionHeading eyebrow={t.protocol.eyebrow} title={t.protocol.title} description={t.protocol.description} />

            <ol className="mt-8 space-y-3">
              {t.protocol.steps.map((step, index) => (
                <li
                  key={step.title}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm sm:items-center"
                >
                  <span
                    className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-base font-black ${
                      index === 0 ? 'bg-amber-600 text-white' : 'border border-slate-300 bg-white text-slate-900'
                    }`}
                  >
                    {index + 1}
                  </span>
                  <div className="sm:flex sm:flex-1 sm:items-baseline sm:gap-4">
                    <p className="text-lg font-black sm:w-32 sm:shrink-0">{step.title}</p>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-2xl border-l-4 border-sky-500 bg-slate-950 p-5 text-slate-100">
              <p className="font-black text-white">{t.protocol.channelTitle}</p>
              <p className="mt-2 leading-relaxed text-slate-300">{t.protocol.channel}</p>
            </div>
            <div className="mt-4 rounded-2xl border-l-4 border-amber-600 bg-amber-50 p-5 text-amber-950">
              <p className="flex items-center gap-2 font-black">
                <OctagonAlert className="h-5 w-5" aria-hidden="true" />
                {t.protocol.warningTitle}
              </p>
              <p className="mt-2 leading-relaxed">{t.protocol.warning}</p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="mx-auto max-w-sm rounded-3xl border border-slate-200 bg-white p-3 shadow-sm lg:sticky lg:top-24">
              <Image
                src={protocolImage}
                alt={t.protocol.imageAlt}
                width={1075}
                height={1521}
                sizes="(min-width: 1024px) 384px, 90vw"
                className="h-auto w-full rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Inside the guide */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow={t.inside.eyebrow} title={t.inside.title} description={t.inside.description} />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.inside.items.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-black">{item.title}</h3>
                  {item.tag ? (
                    <span className="shrink-0 rounded-full bg-white px-3 py-1 text-xs font-bold text-slate-600 ring-1 ring-slate-200">
                      {item.tag}
                    </span>
                  ) : null}
                </div>
                <p className="mt-3 leading-relaxed text-slate-600">{item.description}</p>
              </div>
            ))}
          </div>

          {t.kit ? (
            <div className="mt-16">
              <SectionHeading eyebrow={t.kit.eyebrow} title={t.kit.title} description={t.kit.description} />
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                {t.kit.items.map((item) => (
                  <div key={item.title} className="flex gap-4 rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-blue-700" aria-hidden="true" />
                    <div>
                      <h3 className="text-lg font-black">{item.title}</h3>
                      <p className="mt-2 leading-relaxed text-slate-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </section>

      {/* Limits */}
      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4 md:px-8">
          <SectionHeading eyebrow={t.limits.eyebrow} title={t.limits.title} description={t.limits.description} tone="dark" />
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {t.limits.items.map((item) => (
              <div key={item.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                <h3 className="text-lg font-black text-white">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-300">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <SectionHeading eyebrow={t.privacy.eyebrow} title={t.privacy.title} description={t.privacy.description} />
        <div className="mt-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <table className="w-full border-collapse text-left text-sm md:text-base">
            <thead className="bg-slate-100 text-xs font-bold uppercase text-slate-600">
              <tr>
                <th scope="col" className="px-5 py-3">
                  {t.privacy.columns.tool}
                </th>
                <th scope="col" className="px-5 py-3">
                  {t.privacy.columns.what}
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {t.privacy.rows.map((row) => (
                <tr key={row.tool} className="align-top">
                  <th scope="row" className="w-2/5 px-5 py-4 font-black text-slate-950 md:w-1/4">
                    {row.tool}
                  </th>
                  <td className="px-5 py-4 leading-relaxed text-slate-700">{row.what}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 max-w-4xl leading-relaxed text-slate-600">
          {t.privacy.retention}{' '}
          <a
            href={t.privacy.policyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-blue-800 underline decoration-blue-200 underline-offset-4 hover:decoration-blue-700"
          >
            {t.privacy.policyLabel}
          </a>
          .
        </p>
        <p className="mt-3 max-w-4xl text-sm leading-relaxed text-slate-500">{t.privacy.disclaimer}</p>
      </section>

      {/* Verify the download */}
      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h2 className="text-2xl font-black md:text-3xl">{t.verify.title}</h2>
          <p className="mt-3 max-w-3xl leading-relaxed text-slate-600">{t.verify.description}</p>
          <div className="mt-6 rounded-3xl bg-slate-950 p-6 text-slate-200">
            <p className="text-xs font-bold uppercase text-slate-400">{t.verify.hashLabel}</p>
            <p className="mt-2 break-all font-mono text-sm leading-6 text-emerald-300 md:text-base">{guideSha256}</p>
            <p className="mt-6 text-sm text-slate-400">{t.verify.commandsLabel}</p>
            <p className="mt-2 break-all font-mono text-sm">
              <span className="text-slate-500">{t.verify.windows}: </span>
              certutil -hashfile quando-o-arquivo-engana-guia-integridade-digital.pdf SHA256
            </p>
            <p className="mt-1 break-all font-mono text-sm">
              <span className="text-slate-500">{t.verify.unix}: </span>
              sha256sum quando-o-arquivo-engana-guia-integridade-digital.pdf
            </p>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm md:p-10">
          <p className="text-sm font-bold uppercase text-blue-700">{t.about.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-black">{t.about.title}</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">{t.about.description}</p>
          <div className="mt-6 max-w-md rounded-3xl bg-slate-50 p-5">
            <p className="text-lg font-black">{t.about.author}</p>
            <p className="mt-1 text-slate-600">{t.about.authorRole}</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-5xl px-4 md:px-8">
          <h2 className="text-3xl font-black md:text-4xl">{t.faq.title}</h2>
          <div className="mt-8 grid gap-4">
            {t.faq.items.map((item) => (
              <article key={item.question} className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                <h3 className="text-lg font-black text-slate-950">{item.question}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="overflow-hidden rounded-[32px] bg-blue-700 text-white shadow-xl shadow-blue-900/20">
          <div className="grid grid-cols-1 gap-8 p-8 md:p-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="text-3xl font-black md:text-4xl">{t.final.title}</h2>
              <p className="mt-4 max-w-3xl text-lg leading-relaxed text-blue-50">{t.final.description}</p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-5 lg:justify-end">
              <GuideDownloadLink
                href={guideDownloadPath}
                label={t.final.download}
                locale={locale}
                placement="final"
                variant="light"
              />
              <GuideAppLink label={t.final.app} placement="final" variant="ghost" />
            </div>
          </div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200 bg-white/90 px-4 py-3 backdrop-blur md:hidden">
        <GuideDownloadLink
          href={guideDownloadPath}
          label={t.mobileDownload}
          locale={locale}
          placement="mobile-bar"
          variant="bar"
        />
      </div>
    </main>
  );
}
