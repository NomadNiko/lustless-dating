'use client'
import { useTranslations } from 'next-intl';

export default function Work() {
    const t = useTranslations('work');

    const work = [
        {
            name: t('steps.step1.title'),
            icon: '/assets/work-1.png',
            description: t('steps.step1.label'),
            link: '',
        },
        {
            name: t('steps.step2.title'),
            icon: '/assets/work-2.png',
            description: t('steps.step2.label'),
            link: '',
        },
        {
            name: t('steps.step3.title'),
            icon: '/assets/work-3.png',
            description: t('steps.step3.label'),
            link: '',
        },
        {
            name: t('steps.step4.title'),
            icon: '/assets/work-4.png',
            description: t('steps.step4.label'),
            link: '',
        }
    ];
    return (
        <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-xl md:text-2xl font-Ovo">{t('sectionTitle')}</h4>
            <h2 className="text-center text-5xl sm:text-6xl font-Ovo">{t('mainTitle')}</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-base md:text-lg">{t('description')}</p>

            <div className="grid grid-cols-auto my-10 gap-5 dark:text-black">
                {work.map((work) => (
                    <div key={work.name} className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group" style={{ backgroundImage: `url(${work.icon})` }}>
                        <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7">
                            <div>
                                <h2 className="font-semibold text-xl md:text-2xl">{work.name}</h2>
                                <p className="text-gray-700 text-base md:text-lg">{work.description}</p>
                            </div>
                            <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                                <img src="/assets/send-icon.png" alt="" className="w-5" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}