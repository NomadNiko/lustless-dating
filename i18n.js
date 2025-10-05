import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['en'];
export const defaultLocale = 'en';

export default getRequestConfig(async ({ requestLocale }) => {
    // This function gets called during request, not during static generation
    // For static generation, we need to get locale from headers/routing
    let locale = await requestLocale;

    // Validate that the incoming `locale` parameter is valid
    if (!locale || !locales.includes(locale)) {
        locale = defaultLocale;
    }

    return {
        locale,
        messages: (await import(`./messages/${locale}.json`)).default
    };
});
