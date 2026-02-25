'use client';

import React, { useMemo, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import {
    ArrowRight,
    ChevronLeft,
    ChevronRight,
    FileText,
    Globe2,
    Gavel,
    Lock,
    ShieldCheck,
    Sparkles,
    Users,
} from 'lucide-react';
import Reveal from '@/components/Reveal';

export default function CondoHubPage() {
    const t = useTranslations('CondoHub');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imgOpacity, setImgOpacity] = useState(1);
    const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(0);

    const contactUrl = '/contato'; // Or a specific WhatsApp link if provided

    const demoImages = useMemo(
        () => [
            { src: '/images/condohub/screenshot-1.png', alt: t('galleryImg1Alt'), description: t('galleryImg1Desc') },
            { src: '/images/condohub/screenshot-2.png', alt: t('galleryImg2Alt'), description: t('galleryImg2Desc') },
            { src: '/images/condohub/screenshot-3.png', alt: t('galleryImg3Alt'), description: t('galleryImg3Desc') },
            { src: '/images/condohub/screenshot-4.png', alt: t('galleryImg4Alt'), description: t('galleryImg4Desc') },
        ],
        [t]
    );

    const changeImage = (nextIndex: number) => {
        setImgOpacity(0);
        window.setTimeout(() => {
            setCurrentImageIndex(nextIndex);
            setImgOpacity(1);
        }, 140);
    };

    const nextImage = () => changeImage((currentImageIndex + 1) % demoImages.length);
    const prevImage = () => changeImage((currentImageIndex - 1 + demoImages.length) % demoImages.length);

    const faqItems = [
        { q: t('faq1Q'), a: t('faq1A') },
        { q: t('faq2Q'), a: t('faq2A') },
        { q: t('faq3Q'), a: t('faq3A') },
        { q: t('faq4Q'), a: t('faq4A') },
        { q: t('faq5Q'), a: t('faq5A') },
        { q: t('faq6Q'), a: t('faq6A') },
        { q: t('faq7Q'), a: t('faq7A') },
        { q: t('faq8Q'), a: t('faq8A') },
    ];

    return (
        <div className="min-h-screen bg-slate-50 text-slate-900">
            <div
                className="pointer-events-none fixed inset-0 -z-10"
                style={{
                    background:
                        'radial-gradient(800px circle at 18% 12%, rgba(37, 99, 235, 0.10), transparent 45%), radial-gradient(900px circle at 82% 22%, rgba(56, 189, 248, 0.08), transparent 40%)',
                }}
            />

            {/* HERO */}
            <div className="container mx-auto px-4 pt-10 pb-10">
                <Reveal>
                    <div className="rounded-[32px] border border-slate-200 bg-white/80 backdrop-blur p-8 md:p-10 shadow-sm">
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                            <div className="lg:col-span-7">
                                <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 text-blue-700 px-4 py-2 text-sm font-semibold border border-blue-100 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                                    <ShieldCheck className="h-4 w-4" />
                                    {t('heroTag')}
                                </div>

                                <h1 className="mt-6 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
                                    {t('heroTitle')}
                                </h1>

                                <p className="mt-5 text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                                    {t('heroDesc')}
                                </p>

                                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                                    <a
                                        href={contactUrl}
                                        className="group inline-flex justify-center items-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-7 py-4 text-white font-extrabold shadow-lg shadow-blue-700/25 ring-1 ring-blue-500/40 hover:shadow-xl hover:shadow-blue-700/30 hover:from-blue-700 hover:to-blue-800 transition-all duration-200"
                                        aria-label={t('ctaPrimary')}
                                    >
                                        {t('ctaPrimary')}
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                                    </a>

                                    <a
                                        href="#exemplos"
                                        className="inline-flex justify-center items-center gap-2 rounded-2xl border border-slate-200 bg-white px-7 py-4 text-slate-900 font-extrabold hover:bg-slate-50 hover:shadow-sm transition-all duration-200"
                                    >
                                        {t('ctaSecondary')}
                                    </a>
                                </div>

                                <div className="mt-6 text-sm text-slate-600">
                                    <span className="font-semibold text-slate-800">{t('limitsLabel')}</span>{' '}
                                    {t('limitsText')}
                                </div>
                                <p className="mt-3 text-sm text-slate-600">
                                    {t('privacyLine')}{' '}
                                    <a href="/politica-de-privacidade" className="font-semibold text-slate-800 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-600">
                                        {t('privacyLink')}
                                    </a>{' '}
                                    {t('orText')}{' '}
                                    <a href={contactUrl} className="font-semibold text-slate-800 underline decoration-slate-300 underline-offset-4 hover:decoration-slate-600">
                                        {t('specialistLink')}
                                    </a>
                                    .
                                </p>
                            </div>

                            {/* Sidebar */}
                            <div className="lg:col-span-5">
                                <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                                    <p className="text-sm font-semibold text-blue-700">{t('sidebarTitle')}</p>

                                    <div className="mt-4 space-y-3">
                                        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                                            <div className="flex items-start gap-3">
                                                <FileText className="h-5 w-5 text-blue-700 mt-0.5" />
                                                <div>
                                                    <p className="font-extrabold">{t('pdfReportTitle')}</p>
                                                    <p className="text-sm text-slate-600">{t('pdfReportDesc')}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                                            <div className="flex items-start gap-3">
                                                <Lock className="h-5 w-5 text-blue-700 mt-0.5" />
                                                <div>
                                                    <p className="font-extrabold">{t('privacyFocusTitle')}</p>
                                                    <p className="text-sm text-slate-600">{t('privacyFocusDesc')}</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_1px_0_rgba(15,23,42,0.04)]">
                                            <div className="flex items-start gap-3">
                                                <Users className="h-5 w-5 text-blue-700 mt-0.5" />
                                                <div>
                                                    <p className="font-extrabold">{t('controlledAccessTitle')}</p>
                                                    <p className="text-sm text-slate-600">{t('controlledAccessDesc')}</p>
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

            {/* Choose a tool / Modules */}
            <div className="container mx-auto px-4 pb-10">
                <Reveal>
                    <div className="rounded-[28px] border border-slate-200 bg-white p-10 shadow-sm">
                        <h2 className="text-3xl md:text-4xl font-extrabold">{t('chooseToolTitle')}</h2>
                        <p className="mt-3 text-base md:text-lg text-slate-600 max-w-5xl">{t('chooseToolSubtitle')}</p>

                        <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-5 items-stretch">
                            {/* Card 1: Residents */}
                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col h-full">
                                <div className="flex items-start gap-3">
                                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-600/20">🏡</span>
                                    <div>
                                        <h3 className="text-lg font-extrabold text-slate-900">{t('fileAnalysisTitle')}</h3>
                                        <p className="mt-1 text-sm text-slate-600">{t('fileAnalysisDesc')}</p>
                                    </div>
                                </div>

                                <div className="mt-4 rounded-2xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm text-blue-900">
                                    <p className="font-extrabold">{t('filePrivacyTitle')}</p>
                                    <p className="mt-1">
                                        {t('filePrivacyDesc', { boletos: '' }).split('{boletos}')[0]}
                                        <span className="font-semibold">{t('filePrivacyNever')}</span>
                                        {t('filePrivacyDesc', { boletos: '' }).split('{boletos}')[1] || ''}
                                    </p>
                                </div>

                                <ul className="mt-4 space-y-2.5 leading-relaxed text-sm md:text-base text-slate-700">
                                    <li>• {t('fileBullet1')}</li>
                                    <li>• {t('fileBullet2')}</li>
                                    <li>• {t('fileBullet3')}</li>
                                    <li>• {t('fileBullet4')}</li>
                                </ul>

                                <div className="mt-auto pt-6">
                                    <a href={contactUrl} className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-white font-extrabold ring-1 ring-black/5 shadow-lg shadow-blue-700/25 hover:from-blue-700 hover:to-blue-800 hover:-translate-y-0.5 active:translate-y-0 transition-all">
                                        {t('fileCtaButton')}
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                                    </a>
                                </div>

                                <p className="mt-3 text-xs text-slate-500">{t('fileDisclaimer')}</p>
                            </div>

                            {/* Card 2: Admin */}
                            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col h-full">
                                <div className="flex items-start gap-3">
                                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-600 text-white shadow-md shadow-emerald-600/20">🏢</span>
                                    <div>
                                        <h3 className="text-lg font-extrabold text-slate-900">{t('threatAnalysisTitle')}</h3>
                                        <p className="mt-1 text-sm text-slate-600">
                                            {t('threatAnalysisDesc', { noClickRisk: '' }).split('{noClickRisk}')[0]}
                                            <span className="font-semibold">{t('noClickRisk')}</span>
                                            {t('threatAnalysisDesc', { noClickRisk: '' }).split('{noClickRisk}')[1] || ''}
                                        </p>
                                    </div>
                                </div>

                                <div className="mt-4 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-900">
                                    <p className="font-extrabold">{t('threatSafeTitle')}</p>
                                    <p className="mt-1">
                                        {t('threatSafeDesc', { doNotOpen: '' }).split('{doNotOpen}')[0]}
                                        <span className="font-semibold">{t('doNotOpen')}</span>
                                        {t('threatSafeDesc', { doNotOpen: '' }).split('{doNotOpen}')[1] || ''}
                                    </p>
                                </div>

                                <ul className="mt-4 space-y-2.5 leading-relaxed text-sm md:text-base text-slate-700">
                                    <li>• {t('threatBullet1')}</li>
                                    <li>• {t('threatBullet2')}</li>
                                    <li>• {t('threatBullet3')}</li>
                                    <li>• {t('threatBullet4')}</li>
                                </ul>

                                <div className="mt-auto pt-6">
                                    <a href={contactUrl} className="group inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-6 py-4 text-white font-extrabold ring-1 ring-black/5 shadow-lg shadow-emerald-600/20 hover:bg-emerald-700 hover:-translate-y-0.5 active:translate-y-0 transition-all">
                                        {t('threatCtaButton')}
                                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                                    </a>
                                </div>

                                <p className="mt-3 text-xs text-slate-500">{t('threatDisclaimer')}</p>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>


            {/* Audience */}
            <div className="container mx-auto px-4 pb-10">
                <Reveal>
                    <div className="rounded-[28px] border border-slate-200 bg-white p-10 shadow-sm">
                        <h2 className="text-3xl md:text-4xl font-extrabold">{t('audienceTitle')}</h2>
                        <p className="mt-3 text-base md:text-lg text-slate-600 max-w-4xl">{t('audienceSubtitle')}</p>

                        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                            {[
                                { icon: <ShieldCheck className="h-6 w-6 text-blue-600" />, bg: 'bg-blue-50', title: t('audienceForensicsTitle'), desc: t('audienceForensicsDesc') },
                                { icon: <Gavel className="h-6 w-6 text-indigo-600" />, bg: 'bg-indigo-50', title: t('audienceLegalTitle'), desc: t('audienceLegalDesc') },
                                { icon: <Lock className="h-6 w-6 text-emerald-600" />, bg: 'bg-emerald-50', title: t('audienceSecurityTitle'), desc: t('audienceSecurityDesc') },
                                { icon: <Globe2 className="h-6 w-6 text-amber-600" />, bg: 'bg-amber-50', title: t('audienceJournalismTitle'), desc: t('audienceJournalismDesc') },
                            ].map((item, idx) => (
                                <Reveal key={item.title} delayMs={80 + idx * 80}>
                                    <div className="group h-full rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm hover:shadow-md hover:-translate-y-1 hover:bg-white hover:border-blue-200 transition-all duration-300">
                                        <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${item.bg} mb-4 group-hover:scale-110 transition-transform duration-300`}>{item.icon}</div>
                                        <h3 className="text-lg font-extrabold text-slate-900 group-hover:text-blue-700 transition-colors">{item.title}</h3>
                                        <p className="mt-2 text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                                    </div>
                                </Reveal>
                            ))}
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Features */}
            <div className="container mx-auto px-4 pb-16">
                <Reveal>
                    <div className="mb-10 text-center max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">{t('featuresTitle')}</h2>
                        <p className="mt-4 text-lg text-slate-600">{t('featuresSubtitle')}</p>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        { k: t('featureAntifraudTag'), bg: 'bg-emerald-50', text: 'text-emerald-700', title: t('featureAntifraudTitle'), desc: t('featureAntifraudDesc'), icon: <ShieldCheck className="h-6 w-6 text-emerald-600" /> },
                        { k: t('featureIntegrityTag'), bg: 'bg-blue-50', text: 'text-blue-700', title: t('featureIntegrityTitle'), desc: t('featureIntegrityDesc'), icon: <FileText className="h-6 w-6 text-blue-600" /> },
                        { k: t('featureDeepfakeTag'), bg: 'bg-indigo-50', text: 'text-indigo-700', title: t('featureDeepfakeTitle'), desc: t('featureDeepfakeDesc'), icon: <Sparkles className="h-6 w-6 text-indigo-600" /> },
                        { k: t('featureGPSTag'), bg: 'bg-amber-50', text: 'text-amber-700', title: t('featureGPSTitle'), desc: t('featureGPSTDesc'), icon: <Globe2 className="h-6 w-6 text-amber-600" /> },
                    ].map((card, idx) => (
                        <Reveal key={card.title} delayMs={60 + idx * 80}>
                            <div className="group h-full rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                                <div className="flex items-center gap-3 mb-4">
                                    <span className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${card.bg} group-hover:scale-110 transition-transform duration-300`}>{card.icon}</span>
                                    <p className={`text-sm font-bold uppercase tracking-wide ${card.text}`}>{card.k}</p>
                                </div>
                                <h3 className="text-xl font-extrabold text-slate-900 mb-3 group-hover:text-blue-700 transition-colors">{card.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{card.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* How it works */}
            <div className="container mx-auto px-4 pb-16">
                <Reveal>
                    <div className="rounded-[28px] border border-slate-200 bg-white p-10 shadow-sm">
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-8">{t('howItWorksTitle')}</h2>

                        <div className="relative">
                            <div className="hidden md:block absolute left-8 right-8 top-8 h-1 bg-slate-100 rounded-full overflow-hidden">
                                <div className="h-full w-1/2 bg-gradient-to-r from-blue-500/20 to-transparent" />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                {[
                                    { step: '1', title: t('howStep1Title'), desc: t('howStep1Desc') },
                                    { step: '2', title: t('howStep2Title'), desc: t('howStep2Desc') },
                                    { step: '3', title: t('howStep3Title'), desc: t('howStep3Desc') },
                                ].map((s, idx) => (
                                    <Reveal key={s.step} delayMs={80 + idx * 80}>
                                        <div className="relative bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md hover:border-blue-100 transition-all duration-300 h-full">
                                            <div className="relative z-10 h-14 w-14 rounded-2xl bg-blue-600 text-white shadow-lg shadow-blue-600/30 flex items-center justify-center text-xl font-black mb-6">{s.step}</div>
                                            <h3 className="text-xl font-extrabold text-slate-900 mb-3">{s.title}</h3>
                                            <p className="text-slate-600 leading-relaxed">{s.desc}</p>
                                        </div>
                                    </Reveal>
                                ))}
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* SEO Section */}
            <div className="container mx-auto px-4 pb-12">
                <Reveal>
                    <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900">{t('seoSectionTitle')}</h2>
                        <p className="mt-3 text-slate-600 leading-relaxed max-w-4xl">{t('seoSectionDesc')}</p>
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
                                        <button type="button" onClick={() => setFaqOpenIndex((prev) => (prev === idx ? null : idx))} className="w-full px-5 py-4 text-left flex items-center justify-between gap-4" aria-expanded={isOpen}>
                                            <div className="flex items-start gap-3">
                                                <span className="mt-0.5 inline-flex h-8 w-8 items-center justify-center rounded-2xl bg-white border border-slate-200 shadow-[0_1px_0_rgba(15,23,42,0.04)] text-blue-700 font-extrabold">?</span>
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
                            <p className="mt-1">{t('transDesc')}</p>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Gallery */}
            <div id="exemplos" className="container mx-auto px-4 pb-12">
                <Reveal>
                    <div className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm">
                        <h2 className="text-2xl md:text-3xl font-extrabold text-center">{t('galleryTitle')}</h2>
                        <p className="mt-3 text-slate-600 text-center max-w-3xl mx-auto">{t('gallerySubtitle')}</p>

                        <div className="mt-8">
                            <div className="relative w-full bg-slate-50 rounded-3xl overflow-hidden border border-slate-200 shadow-md">
                                <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-white/0 via-white/0 to-slate-900/5" />
                                <div className="relative w-full h-80 md:h-[520px]">
                                    <div className="absolute inset-0 transition-opacity duration-200" style={{ opacity: imgOpacity }}>
                                        <Image src={demoImages[currentImageIndex].src} alt={demoImages[currentImageIndex].alt} fill className="object-cover md:object-contain object-center" priority />
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 text-center">
                                <p className="text-sm text-slate-500">
                                    <span className="font-semibold text-slate-800">{currentImageIndex + 1}</span> {t('galleryImgOf')}{' '}
                                    <span className="font-semibold text-slate-800">{demoImages.length}</span>
                                </p>
                                <p className="mt-2 text-lg md:text-xl font-extrabold text-slate-900">{demoImages[currentImageIndex].description}</p>
                            </div>

                            <div className="mt-6 flex flex-col items-center gap-5">
                                <div className="flex items-center gap-4">
                                    <button onClick={prevImage} className="group p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 shadow-sm hover:shadow-md transition-all duration-200" aria-label="Previous">
                                        <ChevronLeft className="w-6 h-6 text-slate-800 transition-transform group-hover:-translate-x-0.5" />
                                    </button>
                                    <button onClick={nextImage} className="group p-3 rounded-full border border-slate-200 bg-white hover:bg-slate-50 shadow-sm hover:shadow-md transition-all duration-200" aria-label="Next">
                                        <ChevronRight className="w-6 h-6 text-slate-800 transition-transform group-hover:translate-x-0.5" />
                                    </button>
                                </div>

                                <div className="flex gap-3 flex-wrap justify-center">
                                    {demoImages.map((image, index) => (
                                        <button
                                            key={index}
                                            onClick={() => changeImage(index)}
                                            className={['w-16 h-16 rounded-2xl overflow-hidden border-2 transition-all duration-200', index === currentImageIndex ? 'border-blue-500 ring-2 ring-blue-200 shadow-md' : 'border-slate-200 opacity-80 hover:opacity-100 hover:shadow-sm'].join(' ')}
                                            aria-label={`${index + 1}`}
                                        >
                                            <Image src={image.src} alt={image.alt} width={64} height={64} className="w-full h-full object-cover" />
                                        </button>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Final CTA */}
            <div className="container mx-auto px-4 pb-16">
                <Reveal>
                    <div className="rounded-[28px] border border-slate-200 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-10 shadow-xl shadow-blue-700/20">
                        <div className="max-w-3xl">
                            <h2 className="text-2xl md:text-3xl font-extrabold">{t('finalCtaTitle')}</h2>
                            <p className="mt-3 text-blue-100">{t('finalCtaDesc')}</p>

                            <div className="mt-6 flex flex-col sm:flex-row gap-3">
                                <a href={contactUrl} className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-white px-7 py-4 font-extrabold text-blue-700 hover:bg-blue-50 transition-all duration-200 shadow-md">
                                    {t('finalCtaButton')}
                                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                                </a>
                                <a href="#exemplos" className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-transparent px-7 py-4 font-extrabold text-white hover:bg-white/10 transition-all duration-200">
                                    {t('finalCtaSecondary')}
                                </a>
                            </div>

                            <p className="mt-4 text-sm text-blue-100 font-semibold tracking-wide uppercase">
                                {t('finalLimits')}
                            </p>
                            <p className="mt-2 text-sm text-blue-100">
                                {t('finalSecurityQuestion')}{' '}
                                <a href="/contato" className="font-semibold text-white underline decoration-white/50 underline-offset-4 hover:decoration-white">
                                    {t('finalContactLink')}
                                </a>
                                .
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>

            {/* Mobile sticky CTA */}
            <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden border-t border-slate-200 bg-white/85 backdrop-blur">
                <div className="px-4 py-3">
                    <a href={contactUrl} className="group w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-700 px-5 py-3 text-white font-extrabold shadow-lg shadow-blue-700/25">
                        {t('mobileCtaButton')}
                        <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                    </a>
                </div>
            </div>
        </div>
    );
}
