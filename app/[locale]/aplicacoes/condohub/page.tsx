'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CondoHubPage() {
    const t = useTranslations('CondoHub');
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const demoImages = [
        { src: '/images/condohub/screenshot-1.png', alt: t('img1Alt'), description: t('img1Desc') },
        { src: '/images/condohub/screenshot-2.png', alt: t('img2Alt'), description: t('img2Desc') },
        { src: '/images/condohub/screenshot-3.png', alt: t('img3Alt'), description: t('img3Desc') },
        { src: '/images/condohub/screenshot-4.png', alt: t('img4Alt'), description: t('img4Desc') },
    ];

    const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % demoImages.length);
    const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + demoImages.length) % demoImages.length);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-4">CondoHub</h1>
                    <p className="text-xl text-blue-200 mb-8">{t('subtitle')}</p>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">{t('description')}</p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    <div className="bg-blue-900/40 border border-blue-500/30 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-200 mb-2">📢 {t('feature1Title')}</h3>
                        <p className="text-gray-300">{t('feature1Desc')}</p>
                    </div>
                    <div className="bg-blue-900/40 border border-blue-500/30 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-200 mb-2">🛒 {t('feature2Title')}</h3>
                        <p className="text-gray-300">{t('feature2Desc')}</p>
                    </div>
                    <div className="bg-blue-900/40 border border-blue-500/30 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-200 mb-2">📅 {t('feature3Title')}</h3>
                        <p className="text-gray-300">{t('feature3Desc')}</p>
                    </div>
                    <div className="bg-blue-900/40 border border-blue-500/30 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-200 mb-2">⚠️ {t('feature4Title')}</h3>
                        <p className="text-gray-300">{t('feature4Desc')}</p>
                    </div>
                </div>

                {/* Gallery */}
                <div className="bg-slate-800/50 border border-blue-500/30 rounded-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">{t('galleryTitle')}</h2>

                    <div className="relative w-full mb-8 bg-slate-900 rounded-lg overflow-hidden border border-blue-500/20">
                        <div className="relative w-full h-96 md:h-[500px]">
                            <Image src={demoImages[currentImageIndex].src} alt={demoImages[currentImageIndex].alt} fill className="object-contain" priority />
                        </div>
                    </div>

                    <div className="text-center mb-8">
                        <p className="text-lg text-gray-300">
                            <span className="text-blue-300 font-semibold">{currentImageIndex + 1}</span> {t('of')}{' '}
                            <span className="text-blue-300 font-semibold">{demoImages.length}</span>
                        </p>
                        <p className="text-xl text-white font-semibold mt-2">{demoImages[currentImageIndex].description}</p>
                    </div>

                    <div className="flex justify-center items-center gap-8 mb-8">
                        <button onClick={prevImage} className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors" aria-label={t('prevImage')}>
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>

                        <div className="flex gap-4">
                            {demoImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${index === currentImageIndex ? 'border-blue-400 ring-2 ring-blue-300' : 'border-gray-600 opacity-60 hover:opacity-100'}`}
                                >
                                    <Image src={image.src} alt={image.alt} width={64} height={64} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>

                        <button onClick={nextImage} className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors" aria-label={t('nextImage')}>
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                    </div>

                    <div className="bg-slate-900/50 rounded-lg p-4 mb-8 text-center">
                        <p className="text-gray-300">
                            <span className="text-gray-400">Stack: </span>
                            <span className="text-blue-300 font-semibold">Next.js, Automação, Real-time</span>
                        </p>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <span className="inline-block bg-blue-900/40 border border-blue-500/30 rounded-full px-6 py-2 text-blue-200">
                        {t('stageBadge')}
                    </span>
                </div>
            </div>
        </div>
    );
}
