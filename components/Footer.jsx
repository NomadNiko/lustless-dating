'use client'
import { useTranslations } from 'next-intl';

export default function Footer() {
    const t = useTranslations('footer');

    return (
        <div className="mt-20">
            <div className="text-center">
                <img src="/assets/logo.png" alt="" className="w-36 mx-auto mb-2 dark:hidden" />
                <img src="/assets/logo_dark.png" alt="" className="w-36 mx-auto mb-2 hidden dark:block" />


                <div className="w-max flex items-center gap-2 mx-auto text-base md:text-lg">
                    <img src="/assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="/assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href={`mailto:${t('email')}`}>{t('email')}</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3 text-base md:text-lg">
                <p>{t('copyright', { year: new Date().getFullYear() })}</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a target='_blank' href="https://nomadsoft.us">{t('links.corporate')}</a></li>
                    <li><a target='_blank' href="https://github.com/NomadNiko">{t('links.github')}</a></li>
                    <li><a href="mailto:press@nomadsoft.us">{t('links.press')}</a></li>
                </ul>
            </div>
        </div>
    )
}