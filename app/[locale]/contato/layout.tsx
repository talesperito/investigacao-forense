import type { ReactNode } from 'react';
import { getMessages } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

export default async function ContatoLayout({
    children,
}: {
    children: ReactNode;
}) {
    // Provide Contact namespace to client page
    const allMessages = await getMessages();
    const pageMessages = {
        Contact: (allMessages as Record<string, unknown>).Contact,
    };

    return (
        <NextIntlClientProvider messages={pageMessages}>
            {children}
        </NextIntlClientProvider>
    );
}
