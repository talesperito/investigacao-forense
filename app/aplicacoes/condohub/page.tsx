'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function CondoHubPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const demoImages = [
        {
            src: '/images/condohub/screenshot-1.png',
            alt: 'CondoHub - Sistema de Infrações',
            description: 'Sistema automatizado de infrações com fluxo verbal → escrita → multa'
        },
        {
            src: '/images/condohub/screenshot-2.png',
            alt: 'CondoHub - Comunicados',
            description: 'Gestão de comunicados e avisos para moradores em tempo real'
        },
        {
            src: '/images/condohub/screenshot-3.png',
            alt: 'CondoHub - Dashboard',
            description: 'Dashboard completo com reservas, comunicados, reclamações e marketplace'
        },
        {
            src: '/images/condohub/screenshot-4.png',
            alt: 'CondoHub - Gerenciar Espaços',
            description: 'Configuração e gestão de espaços comuns com regras de reserva personalizadas'
        }
    ];

    const nextImage = () => {
        setCurrentImageIndex((prev) => (prev + 1) % demoImages.length);
    };

    const prevImage = () => {
        setCurrentImageIndex((prev) => (prev - 1 + demoImages.length) % demoImages.length);
    };

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900">
            {/* Header */}
            <div className="container mx-auto px-4 py-20">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-white mb-4">
                        CondoHub
                    </h1>
                    <p className="text-xl text-blue-200 mb-8">
                        O Sistema Definitivo para Gestão Inteligente de Condomínios
                    </p>
                    <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                        Plataforma completa que centraliza a gestão condominial com funções premium:
                        avisos em tempo real, marketplace exclusivo, gestão de ocorrências, automações,
                        agendamento de espaços, registro de visitantes e sistema automático de infrações.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                    <div className="bg-blue-900/40 border border-blue-500/30 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-200 mb-2">📢 Comunicados em Tempo Real</h3>
                        <p className="text-gray-300">Avisos instantâneos para todos os moradores e condôminos</p>
                    </div>
                    <div className="bg-blue-900/40 border border-blue-500/30 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-200 mb-2">🛒 Marketplace Exclusivo</h3>
                        <p className="text-gray-300">Plataforma de compra e venda entre moradores do condomínio</p>
                    </div>
                    <div className="bg-blue-900/40 border border-blue-500/30 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-200 mb-2">📅 Agendamento de Espaços</h3>
                        <p className="text-gray-300">Reserve áreas comuns com regras e turnos personalizados</p>
                    </div>
                    <div className="bg-blue-900/40 border border-blue-500/30 rounded-lg p-6">
                        <h3 className="text-lg font-semibold text-blue-200 mb-2">⚠️ Sistema de Infrações</h3>
                        <p className="text-gray-300">Fluxo automatizado: advertência verbal → escrita → multa</p>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="bg-slate-800/50 border border-blue-500/30 rounded-lg p-8 mb-12">
                    <h2 className="text-3xl font-bold text-white mb-8 text-center">
                        Demonstração da Aplicação
                    </h2>

                    {/* Main Image */}
                    <div className="relative w-full mb-8 bg-slate-900 rounded-lg overflow-hidden border border-blue-500/20">
                        <div className="relative w-full h-96 md:h-[500px]">
                            <Image
                                src={demoImages[currentImageIndex].src}
                                alt={demoImages[currentImageIndex].alt}
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                    </div>

                    {/* Image Description */}
                    <div className="text-center mb-8">
                        <p className="text-lg text-gray-300">
                            <span className="text-blue-300 font-semibold">{currentImageIndex + 1}</span> de{' '}
                            <span className="text-blue-300 font-semibold">{demoImages.length}</span>
                        </p>
                        <p className="text-xl text-white font-semibold mt-2">
                            {demoImages[currentImageIndex].description}
                        </p>
                    </div>

                    {/* Navigation Controls */}
                    <div className="flex justify-center items-center gap-8 mb-8">
                        <button
                            onClick={prevImage}
                            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                            aria-label="Imagem anterior"
                        >
                            <ChevronLeft className="w-6 h-6 text-white" />
                        </button>

                        {/* Thumbnail Navigation */}
                        <div className="flex gap-4">
                            {demoImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${index === currentImageIndex
                                            ? 'border-blue-400 ring-2 ring-blue-300'
                                            : 'border-gray-600 opacity-60 hover:opacity-100'
                                        }`}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        width={64}
                                        height={64}
                                        className="w-full h-full object-cover"
                                    />
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={nextImage}
                            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
                            aria-label="Próxima imagem"
                        >
                            <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                    </div>

                    {/* Stack Info */}
                    <div className="bg-slate-900/50 rounded-lg p-4 mb-8 text-center">
                        <p className="text-gray-300">
                            <span className="text-gray-400">Stack: </span>
                            <span className="text-blue-300 font-semibold">Next.js, Automação, Real-time</span>
                        </p>
                    </div>
                </div>

                {/* Stack Badge */}
                <div className="mt-12 text-center">
                    <span className="inline-block bg-blue-900/40 border border-blue-500/30 rounded-full px-6 py-2 text-blue-200">
                        MVP em Testes
                    </span>
                </div>
            </div>
        </div>
    );
}
