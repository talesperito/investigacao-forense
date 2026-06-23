'use client';

import React, { useState } from 'react';
import { useTranslations } from 'next-intl';
import {
  ArrowRight,
  FileText,
  Lock,
  Map,
  MapPin,
  ShieldCheck,
  Users,
  Download,
  Layers,
  Camera,
  Gift,
  Cpu,
} from 'lucide-react';
import Reveal from '@/components/Reveal';

const LOCUS_VPS_URL = 'https://locus-pericial-locus.2bwwuq.easypanel.host/';

export default function LocusPage() {
  const t = useTranslations('Locus');
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

  const faqItems = [
    { q: t('faq1Q'), a: t('faq1A') },
    { q: t('faq2Q'), a: t('faq2A') },
    { q: t('faq3Q'), a: t('faq3A') },
    { q: t('faq4Q'), a: t('faq4A') },
    { q: t('faq5Q'), a: t('faq5A') },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Background glow */}
      <div
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            'radial-gradient(800px circle at 15% 10%, rgba(15, 118, 110, 0.08), transparent 45%), radial-gradient(900px circle at 85% 20%, rgba(2, 132, 199, 0.07), transparent 40%)',
        }}
      />

      {/* HERO */}
      <div className="container mx-auto px-4 pt-10 pb-10">
        <Reveal>
          <div className="rounded-[32px] border border-slate-200 bg-white/80 backdrop-blur p-8 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-7">
                <div className="inline-flex items-center gap-2 rounded-full bg-teal-50 text-teal-700 px-4 py-2 text-sm font-semibold border border-teal-100 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                  <MapPin className="h-4 w-4" />
                  {t('heroTag')}
                </div>

                <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                  {t('heroTitle')}
                </h1>

                <p className="mt-5 text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                  {t('heroDesc')}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    disabled
                    className="inline-flex justify-center items-center gap-2 rounded-2xl border border-slate-300 bg-slate-100 px-7 py-4 text-slate-400 font-extrabold cursor-not-allowed"
                  >
                    {t('ctaPrimary')} — em breve
                  </button>

                  <a
                    href="#como-funciona"
                    className="inline-flex justify-center items-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-slate-900 font-extrabold hover:bg-slate-50 hover:shadow-sm transition-all duration-200"
                  >
                    {t('ctaSecondary')}
                  </a>
                </div>

              </div>

              {/* Sidebar */}
              <div className="lg:col-span-5">
                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                  <p className="text-sm font-semibold text-teal-700">{t('sidebarTitle')}</p>

                  <div className="mt-4 space-y-3">
                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                      <div className="flex items-start gap-3">
                        <Lock className="h-5 w-5 text-teal-700 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-extrabold">{t('sidebar1Title')}</p>
                          <p className="text-sm text-slate-600">{t('sidebar1Desc')}</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                      <div className="flex items-start gap-3">
                        <Map className="h-5 w-5 text-teal-700 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-extrabold">{t('sidebar2Title')}</p>
                          <p className="text-sm text-slate-600">{t('sidebar2Desc')}</p>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                      <div className="flex items-start gap-3">
                        <Download className="h-5 w-5 text-teal-700 mt-0.5 shrink-0" />
                        <div>
                          <p className="font-extrabold">{t('sidebar3Title')}</p>
                          <p className="text-sm text-slate-600">{t('sidebar3Desc')}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
                    <p className="font-extrabold">{t('techNoteTitle')}</p>
                    <p className="mt-1">{t('techNoteDesc')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* FREE + NO-AI HIGHLIGHT */}
      <div className="container mx-auto px-4 pb-4">
        <Reveal>
          <div className="rounded-[32px] border border-teal-200 bg-gradient-to-br from-teal-50 to-white p-6 md:p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                  <Gift className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-extrabold text-slate-900">{t('freeForeverTitle')}</p>
                  <p className="mt-1 text-sm md:text-base text-slate-600 leading-relaxed">{t('freeForeverDesc')}</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-100 text-teal-700">
                  <Cpu className="h-6 w-6" />
                </span>
                <div>
                  <p className="font-extrabold text-slate-900">{t('noAiTitle')}</p>
                  <p className="mt-1 text-sm md:text-base text-slate-600 leading-relaxed">{t('noAiDesc')}</p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* HOW IT WORKS */}
      <div id="como-funciona" className="container mx-auto px-4 pb-24 relative mt-4">
        <Reveal>
          <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-teal-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-sky-600/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20 relative z-10">
              <span className="inline-block py-1 px-4 rounded-full bg-slate-900 text-white text-xs md:text-sm font-bold tracking-widest uppercase mb-6 shadow-xl shadow-slate-900/10 ring-1 ring-white/20">
                {t('howPretitle')}
              </span>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
                {t('howItWorksTitle')}
              </h2>
              <p className="text-lg md:text-xl text-slate-600 font-medium max-w-3xl mx-auto leading-relaxed">
                {t('howItWorksSubtitle')}
              </p>
            </div>

            <div className="relative z-10">
              <div className="hidden lg:block absolute top-[60px] left-[16%] right-[16%] h-0.5 border-t-2 border-dashed border-slate-300 z-0" />

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 relative z-10">
                {[
                  {
                    step: t('howStep1Title'),
                    desc: t('howStep1Desc'),
                    icon: <Camera className="w-8 h-8 text-teal-600 transition-colors duration-500 group-hover:text-white" />,
                    bg: 'bg-teal-50/50',
                    hoverBg: 'bg-teal-600',
                    border: 'border-teal-100 group-hover:border-teal-500',
                    textHover: 'group-hover:text-white',
                    descHover: 'group-hover:text-teal-100',
                  },
                  {
                    step: t('howStep2Title'),
                    desc: t('howStep2Desc'),
                    icon: <FileText className="w-8 h-8 text-indigo-600 transition-colors duration-500 group-hover:text-white" />,
                    bg: 'bg-indigo-50/50',
                    hoverBg: 'bg-indigo-600',
                    border: 'border-indigo-100 group-hover:border-indigo-500',
                    textHover: 'group-hover:text-white',
                    descHover: 'group-hover:text-indigo-100',
                  },
                  {
                    step: t('howStep3Title'),
                    desc: t('howStep3Desc'),
                    icon: <Download className="w-8 h-8 text-emerald-600 transition-colors duration-500 group-hover:text-white" />,
                    bg: 'bg-emerald-50/50',
                    hoverBg: 'bg-emerald-600',
                    border: 'border-emerald-100 group-hover:border-emerald-500',
                    textHover: 'group-hover:text-white',
                    descHover: 'group-hover:text-emerald-100',
                  },
                ].map((s, idx) => (
                  <Reveal key={s.step} delayMs={100 + idx * 150}>
                    <div className={`group relative h-full rounded-[32px] border ${s.border} bg-white p-8 md:p-10 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl shadow-sm cursor-default overflow-hidden`}>
                      <div className={`absolute inset-0 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 ${s.hoverBg} transition-all duration-500 ease-out z-0`} />

                      <div className="relative z-10 flex flex-col h-full text-center lg:text-left items-center lg:items-start">
                        <div className={`w-24 h-24 rounded-2xl ${s.bg} group-hover:bg-white/20 border border-slate-100 shadow-inner flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative`}>
                          <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white/40 to-transparent blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                          {s.icon}
                        </div>

                        <h3 className={`text-2xl lg:text-3xl font-black text-slate-900 mb-4 ${s.textHover} transition-colors duration-500`}>
                          {s.step}
                        </h3>
                        <p className={`text-slate-600 text-base md:text-lg leading-relaxed ${s.descHover} transition-colors duration-500`}>
                          {s.desc}
                        </p>
                      </div>

                      <div className="absolute top-8 right-8 w-3 h-3 rounded-full bg-slate-200 group-hover:bg-white animate-pulse transition-colors duration-500" />
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* PRIVACY SECTION */}
      <div className="bg-slate-900 py-16">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="max-w-5xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-teal-500/20 text-teal-300 px-4 py-2 text-sm font-bold border border-teal-500/30 mb-8">
                <Lock className="h-4 w-4" />
                Segurança de Evidências
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6">
                {t('privacyTitle')}
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-3xl mx-auto mb-10">
                {t('privacyDesc')}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: t('privacyBadge1'), icon: '🚫' },
                  { label: t('privacyBadge2'), icon: '💻' },
                  { label: t('privacyBadge3'), icon: '📄' },
                  { label: t('privacyBadge4'), icon: '🔒' },
                  { label: t('privacyBadge5'), icon: '⚙️' },
                  { label: t('privacyBadge6'), icon: '🎁' },
                ].map((badge) => (
                  <div
                    key={badge.label}
                    className="rounded-2xl border border-teal-500/30 bg-teal-500/10 px-4 py-5 text-center"
                  >
                    <div className="text-2xl mb-2">{badge.icon}</div>
                    <p className="text-sm font-bold text-teal-200 leading-tight">{badge.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* FEATURES 2x2 */}
      <div className="container mx-auto px-4 py-16">
        <Reveal>
          <div className="mb-10 text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{t('featuresTitle')}</h2>
            <p className="mt-4 text-lg text-slate-600">{t('featuresSubtitle')}</p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              tag: t('featureGPSTag'),
              tagBg: 'bg-teal-50',
              tagText: 'text-teal-700',
              title: t('featureGPSTitle'),
              desc: t('featureGPSDesc'),
              icon: <MapPin className="h-6 w-6 text-teal-600" />,
              iconBg: 'bg-teal-50',
            },
            {
              tag: t('featureMapTag'),
              tagBg: 'bg-sky-50',
              tagText: 'text-sky-700',
              title: t('featureMapTitle'),
              desc: t('featureMapDesc'),
              icon: <Layers className="h-6 w-6 text-sky-600" />,
              iconBg: 'bg-sky-50',
            },
            {
              tag: t('featureReportTag'),
              tagBg: 'bg-indigo-50',
              tagText: 'text-indigo-700',
              title: t('featureReportTitle'),
              desc: t('featureReportDesc'),
              icon: <FileText className="h-6 w-6 text-indigo-600" />,
              iconBg: 'bg-indigo-50',
            },
            {
              tag: t('featureLicenseTag'),
              tagBg: 'bg-emerald-50',
              tagText: 'text-emerald-700',
              title: t('featureLicenseTitle'),
              desc: t('featureLicenseDesc'),
              icon: <ShieldCheck className="h-6 w-6 text-emerald-600" />,
              iconBg: 'bg-emerald-50',
            },
          ].map((card, idx) => (
            <Reveal key={card.title} delayMs={60 + idx * 80}>
              <div className="group h-full rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${card.iconBg} group-hover:scale-110 transition-transform duration-300`}>
                    {card.icon}
                  </span>
                  <p className={`text-sm font-bold uppercase tracking-wide ${card.tagText}`}>{card.tag}</p>
                </div>
                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-teal-700 transition-colors">{card.title}</h3>
                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* AUDIENCE */}
      <div className="container mx-auto px-4 pb-16">
        <Reveal>
          <div className="rounded-[28px] border border-slate-200 bg-white p-10 shadow-sm">
            <h2 className="text-3xl md:text-4xl font-extrabold">{t('audienceTitle')}</h2>
            <p className="mt-3 text-base md:text-lg text-slate-600 max-w-4xl">{t('audienceSubtitle')}</p>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  icon: <ShieldCheck className="h-6 w-6 text-teal-600" />,
                  bg: 'bg-teal-50',
                  title: t('audienceForensicsTitle'),
                  desc: t('audienceForensicsDesc'),
                },
                {
                  icon: <FileText className="h-6 w-6 text-indigo-600" />,
                  bg: 'bg-indigo-50',
                  title: t('audienceLegalTitle'),
                  desc: t('audienceLegalDesc'),
                },
                {
                  icon: <Map className="h-6 w-6 text-amber-600" />,
                  bg: 'bg-amber-50',
                  title: t('audienceFireTitle'),
                  desc: t('audienceFireDesc'),
                },
                {
                  icon: <Users className="h-6 w-6 text-sky-600" />,
                  bg: 'bg-sky-50',
                  title: t('audienceMPTitle'),
                  desc: t('audienceMPDesc'),
                },
              ].map((item, idx) => (
                <Reveal key={item.title} delayMs={80 + idx * 80}>
                  <div className="group h-full rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-white hover:border-teal-200 transition-all duration-300">
                    <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-teal-700 transition-colors">{item.title}</h3>
                    <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* SEO SECTION */}
      <div className="container mx-auto px-4 pb-16 mt-4">
        <Reveal>
          <div className="rounded-[32px] border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-8 md:p-12 text-center max-w-5xl mx-auto shadow-sm hover:shadow-md transition-shadow">
            <MapPin className="w-10 h-10 text-teal-600 mx-auto mb-6" />
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              {t('seoSectionTitle')}
            </h2>
            <p className="text-base md:text-lg text-slate-600 leading-relaxed max-w-3xl mx-auto mb-8">
              {t('seoSectionDesc')}
            </p>

            <button
              type="button"
              disabled
              className="inline-flex justify-center items-center gap-2 rounded-2xl border border-slate-300 bg-slate-100 px-6 py-3.5 text-slate-400 font-bold cursor-not-allowed"
            >
              {t('ctaPrimary')} — em breve
            </button>
          </div>
        </Reveal>
      </div>

      {/* Academia Forense */}
      <div className="container mx-auto px-4 pb-10">
        <Reveal>
          <div className="rounded-[28px] border border-teal-100 bg-teal-50 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-teal-600 text-white">
                <FileText className="h-5 w-5" />
              </span>
              <p className="text-sm font-bold uppercase tracking-wide text-teal-700">Academia Forense</p>
            </div>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-900 mb-3">Aprenda enquanto aguarda o lançamento</h2>
            <p className="text-slate-600 leading-relaxed mb-6 max-w-3xl">
              O Locus ainda está em desenvolvimento, mas você já pode se aprofundar nas ciências forenses pela Academia. Acesse artigos sobre fundamentos periciais, coleta de evidências digitais e análise de imagens com IA.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                { title: 'Fundamentos das Ciências Forenses', href: 'https://app.metascopeforense.com/academy/fundamentos-das-ciencias-forenses' },
                { title: 'Forense Digital: da Coleta ao Laudo', href: 'https://app.metascopeforense.com/academy/forense-digital-da-coleta-ao-laudo' },
                { title: 'Inteligência Artificial e Perícia de Imagens', href: 'https://app.metascopeforense.com/academy/inteligencia-artificial-e-pericia-de-imagens' },
                { title: 'Glossário Forense', href: 'https://app.metascopeforense.com/academy/glossario-forense' },
              ].map((article) => (
                <a
                  key={article.href}
                  href={article.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between gap-2 rounded-2xl border border-teal-200 bg-white px-4 py-3.5 text-sm font-semibold text-slate-800 hover:border-teal-400 hover:shadow-md transition-all duration-200"
                >
                  {article.title}
                  <ArrowRight className="h-4 w-4 shrink-0 text-teal-500 transition-transform group-hover:translate-x-0.5" />
                </a>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* FAQ */}
      <div className="container mx-auto px-4 pb-10">
        <Reveal>
          <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-2xl md:text-3xl font-extrabold">{t('faqTitle')}</h2>
            <p className="mt-2 text-slate-600 max-w-3xl">{t('faqSubtitle')}</p>

            <div className="mt-6 grid grid-cols-1 gap-3">
              {faqItems.map((item, idx) => {
                const isOpen = faqOpenIndex === idx;
                return (
                  <div key={item.q} className="rounded-3xl border border-slate-200 bg-slate-50 shadow-sm hover:shadow-md transition-all duration-200">
                    <button
                      type="button"
                      onClick={() => setFaqOpenIndex((prev) => (prev === idx ? null : idx))}
                      className="w-full px-5 py-4 text-left flex items-center justify-between gap-4"
                      aria-expanded={isOpen}
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-[0_1px_0_rgba(15,23,42,0.04)] text-teal-700 font-extrabold shrink-0">?</span>
                        <span className="font-extrabold text-slate-900">{item.q}</span>
                      </div>
                      <span className={['shrink-0 inline-flex h-9 w-9 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-[0_1px_0_rgba(15,23,42,0.04)] transition-transform duration-200', isOpen ? 'rotate-45' : 'rotate-0'].join(' ')} aria-hidden="true">
                        <span className="text-slate-700 text-xl leading-none">+</span>
                      </span>
                    </button>
                    <div className={['grid transition-all duration-200 ease-out', isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'].join(' ')}>
                      <div className="overflow-hidden">
                        <div className="px-5 pb-5 pt-0 text-slate-600">{item.a}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-6 rounded-3xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              <p className="font-extrabold">{t('transparencyTitle')}</p>
              <p className="mt-1">{t('transparencyDesc')}</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* FINAL CTA */}
      <div className="container mx-auto px-4 pb-16">
        <Reveal>
          <div className="relative overflow-hidden rounded-[32px] border border-teal-500 bg-gradient-to-br from-teal-600 to-teal-800 text-white shadow-xl shadow-teal-700/20">
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

            <div className="relative z-10 p-8 md:p-12 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
              <div className="max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">{t('finalCtaTitle')}</h2>
                <p className="mt-3 text-lg md:text-xl text-teal-100/90 leading-relaxed">{t('finalCtaDesc')}</p>
              </div>

              <div className="flex flex-col sm:flex-row lg:flex-col lg:justify-center gap-4 shrink-0">
                <button
                  type="button"
                  disabled
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-white/20 border border-white/30 px-8 py-4 font-extrabold text-white/50 cursor-not-allowed whitespace-nowrap"
                >
                  {t('finalCtaButton')} — em breve
                </button>
                <a
                  href="#como-funciona"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-white/20 bg-transparent px-8 py-4 font-extrabold text-white hover:bg-white/10 transition-all whitespace-nowrap"
                >
                  {t('finalCtaSecondary')}
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Mobile sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-slate-200 bg-white/85 backdrop-blur">
        <div className="px-4 py-3">
          <button
            type="button"
            disabled
            className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-300 bg-slate-100 px-5 py-3 text-slate-400 font-extrabold cursor-not-allowed"
          >
            {t('mobileCtaButton')} — em breve
          </button>
        </div>
      </div>
    </div>
  );
}
