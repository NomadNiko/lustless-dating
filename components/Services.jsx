export default function Services() {
    const services = [
        {
            name: 'ID Verification',
            icon: '/assets/web-icon.png',
            description: 'Every user verifies their identity with a selfie and government-issued ID, ensuring a safe and authentic community.',
            link: '',
        },
        {
            name: 'Conversation First',
            icon: '/assets/mobile-icon.png',
            description: 'Chat and connect based on personality, interests, and values before revealing photos to each other.',
            link: '',
        },
        {
            name: 'Mutual Reveal',
            icon: '/assets/ui-icon.png',
            description: 'Photos are revealed only when both people feel ready, creating anticipation and genuine connection.',
            link: '',
        },
        {
            name: 'Safe & Secure',
            icon: '/assets/graphics-icon.png',
            description: 'Advanced safety features, reporting tools, and 24/7 moderation keep our community protected.',
            link: '',
        }
    ];
    return (
        <div id="services" className="w-full px-[12%] py-10 scroll-mt-20">
            <h4 className="text-center mb-2 text-xl md:text-2xl font-Ovo">How we do it</h4>
            <h2 className="text-center text-5xl sm:text-6xl font-Ovo">Key Features</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-base md:text-lg">Lustless combines cutting-edge verification technology with a unique conversation-first approach to create meaningful connections built on authenticity.</p>

            <div className="grid grid-cols-auto gap-6 my-10">
                {services.map((service) => (
                    <div key={service.name} className="border border-gray-300 dark:border-white/30 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white">
                        <img src={service.icon} alt="" className="w-10" />
                        <h3 className="my-4 text-gray-700 dark:text-white text-xl md:text-2xl">{service.name}</h3>
                        <p className="text-gray-600 leading-5 dark:text-white/80 text-base md:text-lg">{service.description}</p>
                        <a href={service.link} className="flex items-center gap-2 mt-5 text-base md:text-lg">Read more <img src="/assets/right-arrow.png" alt="" className="w-4" /></a>
                    </div>
                ))}
            </div>

            {/* Join Waitlist Button */}
            <div className="flex justify-center my-20">
                <div className="rainbow-button relative z-0 overflow-hidden p-0.5 rounded-full hover:scale-105 transition duration-300 active:scale-100">
                    <div className="rainbow-before absolute left-[-50%] top-[-50%] w-[200%] h-[200%] animate-rotate_border -z-10 bg-gradient-to-r from-[#b820e6] to-[#da7d20] blur-md"></div>
                    <a href="#contact"
                        className="px-10 py-2.5 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 relative z-10">
                        Join Waitlist <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
                    </a>
                </div>
            </div>
        </div>
    )
}