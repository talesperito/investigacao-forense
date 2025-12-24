'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function MetaScopePage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const demoImages = [
    {
      src: '/images/metascope/screenshot-1.png',
      alt: 'MetaScope - Tela de Upload',
      description: 'Interface de upload de arquivos'
    },
    {
      src: '/images/metascope/screenshot-2.png',
      alt: 'MetaScope - Análise de Metadados',
      description: 'Painel técnico com metadados extraídos'
    },
    {
      src: '/images/metascope/screenshot-3.png',
      alt: 'MetaScope - Detecção de IA',
      description: 'Indicadores de detecção de edição por IA'
    },
    {
      src: '/images/metascope/screenshot-4.png',
      alt: 'MetaScope - Geolocalizacão',
      description: 'Dados de geolocalizacão e mapa interativo'
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
            MetaScope Forensic
          </h1>
          <p className="text-xl text-blue-200 mb-8">
            Análise Técnico-Forense Avançada de Arquivos e Links
          </p>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Ferramenta especializada em processamento técnico-forense com leitura de metadados, 
            detecção de edição por IA, extração de geolocalizacão e painel técnico consolidado.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="bg-blue-900/40 border border-blue-500/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-200 mb-2">📊 Metadados Precisos</h3>
            <p className="text-gray-300">Leitura completa de EXIF, MIME types e timestamps</p>
          </div>
          <div className="bg-blue-900/40 border border-blue-500/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-200 mb-2">🤖 Detecção de IA</h3>
            <p className="text-gray-300">Identificação de edição ou processamento por inteligência artificial</p>
          </div>
          <div className="bg-blue-900/40 border border-blue-500/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-200 mb-2">🗣️ Geolocalizacão</h3>
            <p className="text-gray-300">Extração de origem geográfica quando disponível</p>
          </div>
          <div className="bg-blue-900/40 border border-blue-500/30 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-blue-200 mb-2">✅ Validações</h3>
            <p className="text-gray-300">Painel técnico consolidado com indicadores e validações</p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="bg-slate-800/50 border border-blue-500/30 rounded-lg p-8 mb-12">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Demonstracão da Aplicacão
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
                  className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    index === currentImageIndex
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
              <span className="text-blue-300 font-semibold">Python, ExifTool, ML Models</span>
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href={process.env.NEXT_PUBLIC_METASCOPE_URL || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-bold text-lg rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
          >
            🚀 Acesse aqui o MetaScope
          </a>
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
