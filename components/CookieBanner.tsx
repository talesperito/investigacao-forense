'use client';

import { useState, useEffect } from 'react';
import { Link } from '@/i18n/routing';
import { X, Cookie, Settings } from 'lucide-react';
import { useTranslations } from 'next-intl';

type CookieConsent = 'all' | 'essential' | null;

export default function CookieBanner() {
    const t = useTranslations('CookieBanner');
    const [showBanner, setShowBanner] = useState(false);
    const [showSettings, setShowSettings] = useState(false);
    const [consent, setConsent] = useState<CookieConsent>(null);

    useEffect(() => {
        const savedConsent = localStorage.getItem('cookie-consent');
        if (!savedConsent) {
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
            <div
                className={`fixed bottom-0 left-0 right-0 z-50 transform transition-transform duration-500 ${showBanner ? 'translate-y-0' : 'translate-y-full'
                    }`}
            >
                <div className="bg-gray-900/95 backdrop-blur-sm border-t border-gray-700 shadow-2xl">
                    <div className="max-w-6xl mx-auto px-4 py-4">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                            <div className="flex items-center gap-3 text-sm text-gray-300">
                                <Cookie className="w-5 h-5 text-blue-400 flex-shrink-0" />
                                <p>
                                    {t('message')}{' '}
                                    <Link href="/politica-de-privacidade" className="text-blue-400 hover:underline">
                                        {t('privacyLink')}
                                    </Link>.
                                </p>
                            </div>

                            <div className="flex items-center gap-3 flex-shrink-0">
                                <button
                                    onClick={handleOpenSettings}
                                    className="flex items-center gap-1 px-3 py-2 text-sm text-gray-400 hover:text-white transition-colors"
                                    aria-label={t('settings')}
                                >
                                    <Settings className="w-4 h-4" />
                                    <span className="hidden sm:inline">{t('settings')}</span>
                                </button>
                                <button
                                    onClick={handleAcceptEssential}
                                    className="px-4 py-2 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                                >
                                    {t('essentialOnly')}
                                </button>
                                <button
                                    onClick={handleAcceptAll}
                                    className="px-4 py-2 text-sm bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-medium"
                                >
                                    {t('acceptAll')}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {showSettings && (
                <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
                    <div className="bg-gray-900 border border-gray-700 rounded-2xl shadow-2xl max-w-lg w-full max-h-[80vh] overflow-y-auto">
                        <div className="flex items-center justify-between p-6 border-b border-gray-700">
                            <h2 className="text-xl font-bold text-white">{t('settingsTitle')}</h2>
                            <button
                                onClick={() => setShowSettings(false)}
                                className="text-gray-400 hover:text-white transition-colors"
                                aria-label="Close"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 space-y-6">
                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="font-semibold text-white mb-1">{t('essentialTitle')}</h3>
                                    <p className="text-sm text-gray-400">
                                        {t('essentialDesc')}
                                    </p>
                                </div>
                                <div className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full flex-shrink-0">
                                    {t('alwaysActive')}
                                </div>
                            </div>

                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="font-semibold text-white mb-1">{t('analyticsTitle')}</h3>
                                    <p className="text-sm text-gray-400">
                                        {t('analyticsDesc')}
                                    </p>
                                </div>
                                <div className="text-gray-400 text-xs px-2 py-1 border border-gray-600 rounded-full flex-shrink-0">
                                    {t('optional')}
                                </div>
                            </div>

                            <div className="flex items-start justify-between gap-4">
                                <div>
                                    <h3 className="font-semibold text-white mb-1">{t('marketingTitle')}</h3>
                                    <p className="text-sm text-gray-400">
                                        {t('marketingDesc')}
                                    </p>
                                </div>
                                <div className="text-gray-400 text-xs px-2 py-1 border border-gray-600 rounded-full flex-shrink-0">
                                    {t('optional')}
                                </div>
                            </div>

                            <div className="text-sm text-gray-500">
                                {t('moreInfo')}{' '}
                                <Link href="/politica-de-privacidade" className="text-blue-400 hover:underline">
                                    {t('fullPrivacyPolicy')}
                                </Link>.
                            </div>
                        </div>

                        <div className="flex gap-3 p-6 border-t border-gray-700">
                            <button
                                onClick={handleAcceptEssential}
                                className="flex-1 px-4 py-3 text-sm bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
                            >
                                {t('essentialOnly')}
                            </button>
                            <button
                                onClick={handleAcceptAll}
                                className="flex-1 px-4 py-3 text-sm bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-medium"
                            >
                                {t('acceptAll')}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
