export default function About() {
    const data = [
        {
            name: 'Verified Identity',
            icon1: '/assets/code-icon.png',
            icon2: '/assets/code-icon-dark.png',
            description: 'Selfie and ID verification ensures every user is real and authentic',
        },
        {
            name: 'No Photos First',
            icon1: '/assets/edu-icon.png',
            icon2: '/assets/edu-icon-dark.png',
            description: 'Connect through conversation, see photos only when you both feel ready',
        },
        {
            name: 'Zero Tolerance',
            icon1: '/assets/project-icon.png',
            icon2: '/assets/project-icon-dark.png',
            description: 'No bots, no catfishing, no fake profiles - just genuine people',
        },
    ];
    return (
        <div id="about" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-xl md:text-2xl font-Ovo">What makes us different</h4>
            <h2 className="text-center text-5xl sm:text-6xl font-Ovo">Why Lustless?</h2>

            <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-20">
                <div className="max-w-max mx-auto relative">
                    <img src='/assets/user-image.png' alt="" className="w-64 sm:w-80 rounded-3xl max-w-none" />

                    <div className="bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center">
                        <img src="/assets/circular-text.png" alt="" className="w-full animate-spin_slow" />
                        <img src="/assets/dev-icon.png" alt="" className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                    </div>
                </div>
                <div className="flex-1">
                    <p className="mb-10 max-w-2xl font-Ovo text-base md:text-lg">Dating apps have become superficial. We believe real connection starts with conversation, not a swipe based on appearance. Lustless brings back the excitement of getting to know someone for who they really are.</p>

                    <ul className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
                        {data.map((data) => (
                            <li key={data.name} className="border border-gray-300 dark:border-white/30 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:hover:shadow-white/80 dark:hover:bg-darkHover/50">
                                <img src={data.icon1} alt="" className="w-7 mt-3 dark:hidden" />
                                <img src={data.icon2} alt="" className="w-7 mt-3 hidden dark:block" />
                                <h3 className="my-4 font-semibold text-gray-700 dark:text-white text-xl md:text-2xl">{data.name}</h3>
                                <p className="text-gray-600 dark:text-white/80 text-base md:text-lg">{data.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}