import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '../../i18n';

export function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const messages = await getMessages({ locale });

    return {
        title: messages.metadata.title,
        description: messages.metadata.description,
        metadataBase: new URL('https://lustless.barvibez.app'),
        openGraph: {
            title: messages.metadata.title,
            description: messages.metadata.description,
            url: 'https://lustless.barvibez.app',
            siteName: messages.metadata.siteName,
            locale: locale === 'en' ? 'en_US' : locale,
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: messages.metadata.title,
            description: messages.metadata.description,
        },
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;

    // Ensure that the incoming `locale` is valid
    if (!locales.includes(locale)) {
        notFound();
    }

    // Providing all messages to the client
    const messages = await getMessages({ locale });

    return (
        <html lang={locale} className="dark">
            <body className="font-Outfit leading-8 dark:bg-darkTheme dark:text-white">
                <NextIntlClientProvider messages={messages}>
                    {children}
                </NextIntlClientProvider>
            </body>
        </html>
    );
}