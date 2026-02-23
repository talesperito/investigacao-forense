'use client';

import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useState, useTransition } from 'react';

export default function LanguageSwitcher() {
    const t = useTranslations('LocaleSwitcher');
    const locale = useLocale();
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname();

    const [isOpen, setIsOpen] = useState(false);

    function onSelectChange(nextLocale: 'en' | 'pt') {
        setIsOpen(false);
        startTransition(() => {
            router.replace({ pathname }, { locale: nextLocale });
        });
    }

    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                disabled={isPending}
                className="inline-flex justify-center items-center w-full rounded-md border border-slate-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-slate-700 hover:bg-slate-50 focus:outline-none"
            >
                {locale === 'en' ? 'EN' : 'PT'}
                <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>

            {isOpen && (
                <div className="origin-top-right absolute right-0 mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                    <div className="py-1" role="menu" aria-orientation="vertical">
                        <button
                            onClick={() => onSelectChange('pt')}
                            className={`${locale === 'pt' ? 'bg-slate-100 text-slate-900' : 'text-slate-700'} block px-4 py-2 text-sm w-full text-left hover:bg-slate-100`}
                            role="menuitem"
                        >
                            {t('pt')}
                        </button>
                        <button
                            onClick={() => onSelectChange('en')}
                            className={`${locale === 'en' ? 'bg-slate-100 text-slate-900' : 'text-slate-700'} block px-4 py-2 text-sm w-full text-left hover:bg-slate-100`}
                            role="menuitem"
                        >
                            {t('en')}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
