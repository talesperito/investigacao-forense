'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { X, Cookie, Settings } from 'lucide-react';

type CookieConsent = 'all' | 'essential' | null;

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [consent, setConsent] = useState<CookieConsent>(null);

    useEffect(() => {
        // Check if user has already made a choice
        const savedConsent = localStorage.getItem('cookie-consent');
        if (!savedConsent) {
            // Small delay to avoid layout shift on page load
            const timer = setTimeout(() => setShowBanner(true), 1000);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleAcceptAll = () => {
        localStorage.setItem('cookie-consent', 'all');
        localStorage.setItem('cookie-consent-date', new Date().toISOString());
        setConsent('all');
        setShowBanner(false);
        setShowSettings(false);
    };

    const handleAcceptEssential = () => {
        localStorage.setItem('cookie-consent', 'essential');
        localStorage.setItem('cookie-consent-date', new Date().toISOString());
        setConsent('essential');
        setShowBanner(false);
        setShowSettings(false);
    };

    const handleOpenSettings = () => {
        setShowSettings(true);
    };

    if (!showBanner) return null;

    return (
        <>
            {/* Cookie Banner - Discreto na parte inferior */}
            <div
                className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-500 ${showBanner ? 'translate-y-0' : 'translate-y-full'
                    }`}
            >
                <div className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 shadow-2xl">
                    <div className="max-w-6xl mx-auto px-4 py-4">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            {/* Texto */}
                            <div className="flex items-center gap-3 text-sm text-gray-300">
                                <Cookie className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <p>
                                    Utilizamos cookies para melhorar sua experiência. Ao continuar navegando, você concorda com nossa{' '}
                                    <Link href="/politica-de-privacidade" className="text-blue-400 hover:underline">
                                        Política de Privacidade
                                    </Link>.
                                </p>
                            </div>

                            {/* Botões */}
                            <div className="flex items-center gap-3 flex-shrink-0">
                                <button
                                    onClick={handleOpenSettings}
                                    className="flex items-center gap-1 px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                                    aria-label="Configurar cookies"
                                >
                                    <Settings className="w-4 h-4" />
                                    <span className="hidden sm:inline">Configurar</span>
                                </button>
                                <button
                                    onClick={handleAcceptEssential}
                                    className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                                >
                                    Apenas Essenciais
                                </button>
                                <button
                                    onClick={handleAcceptAll}
                                    className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-medium"
                                >
                                    Aceitar Todos
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal de Configurações */}
            {showSettings && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                    <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto">
                        {/* Header */}
                        <div className="flex items-center justify-between p-6 border-b border-gray-700">
                            <h2 className="text-xl font-bold text-white">Configurações de Cookies</h2>
                            <button
                                onClick={() => setShowSettings(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="Fechar"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Content */}
                        <div className="p-6 space-y-6">
                            {/* Cookies Essenciais */}
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Cookies Essenciais</h3>
                                    <p className="text-sm text-gray-400">
                                        Necessários para o funcionamento básico do site. Não podem ser desativados.
                                    </p>
                                </div>
                                <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full flex-shrink-0">
                                    Sempre Ativo
                                </div>
                            </div>

                            {/* Cookies de Analytics */}
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Cookies de Análise</h3>
                                    <p className="text-sm text-gray-400">
                                        Nos ajudam a entender como os visitantes interagem com o site, coletando informações anônimas.
                                    </p>
                                </div>
                                <div className="text-gray-400 text-xs px-2 py-1 border border-gray-600 rounded-full flex-shrink-0">
                                    Opcional
                                </div>
                            </div>

                            {/* Cookies de Marketing */}
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="font-semibold text-white mb-1">Cookies de Marketing</h3>
                                    <p className="text-sm text-gray-400">
                                        Utilizados para exibir anúncios relevantes e medir a eficácia das campanhas publicitárias.
                                    </p>
                                </div>
                                <div className="text-gray-400 text-xs px-2 py-1 border border-gray-600 rounded-full flex-shrink-0">
                                    Opcional
                                </div>
                            </div>

                            <div className="text-sm text-gray-500">
                                Para mais informações, consulte nossa{' '}
                                <Link href="/politica-de-privacidade" className="text-blue-400 hover:underline">
                                    Política de Privacidade completa
                                </Link>.
                            </div>
                        </div>

                        {/* Footer */}
                        <div className="flex gap-3 p-6 border-t border-gray-700">
                            <button
                                onClick={handleAcceptEssential}
                                className="flex-1 px-4 py-3 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                            >
                                Apenas Essenciais
                            </button>
                            <button
                                onClick={handleAcceptAll}
                                className="flex-1 px-4 py-3 text-sm bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-medium"
                            >
                                Aceitar Todos
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
