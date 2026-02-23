import { defineRouting } from 'next-intl/routing';
import { createNavigation } from 'next-intl/navigation';

export const routing = defineRouting({
    locales: ['pt', 'en'],
    defaultLocale: 'pt',
    localePrefix: 'as-needed',
    localeDetection: false,
    pathnames: {
        '/': '/',
        '/aplicacoes': {
            pt: '/aplicacoes',
            en: '/applications'
        },
        '/aplicacoes/metascope': {
            pt: '/aplicacoes/metascope',
            en: '/applications/metascope'
        },
        '/aplicacoes/condohub': {
            pt: '/aplicacoes/condohub',
            en: '/applications/condohub'
        },
        '/servicos': {
            pt: '/servicos',
            en: '/services'
        },
        '/portfolio': {
            pt: '/portfolio',
            en: '/portfolio'
        },
        '/contato': {
            pt: '/contato',
            en: '/contact'
        },
        '/cursos': {
            pt: '/cursos',
            en: '/courses'
        },
        '/landingpage': {
            pt: '/landingpage',
            en: '/landingpage'
        },
        '/plataforma-dados-criticos': {
            pt: '/plataforma-dados-criticos',
            en: '/critical-data-platform'
        },
        '/politica-de-privacidade': {
            pt: '/politica-de-privacidade',
            en: '/privacy-policy'
        },
        '/sobre': {
            pt: '/sobre',
            en: '/about'
        },
        '/solucoes': {
            pt: '/solucoes',
            en: '/solutions'
        }
    }
});

export const { Link, redirect, usePathname, useRouter, getPathname } = createNavigation(routing);
