export default function Header() {
    return (
        <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 pt-[150px] md:pt-0">
            <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo">
                Welcome to Lustless
                <img src="/assets/hand-icon.png" alt="" className="w-6 mb-1" />
            </h3>
            <div className="relative group">
                <div className="absolute inset-0 -m-2 animate-rotate_gradient rounded-full">
                    <div className="w-full h-full bg-gradient-to-r from-fuchsia-600 via-amber-600 to-green-600 opacity-60 blur-lg rounded-full"></div>
                </div>
                <img src="/assets/logo_heart.png" alt="" className="w-48 relative group-hover:scale-110 transition-transform duration-500" />
            </div>
            <h1 className="text-5xl sm:text-6xl font-Ovo">Dating beyond the surface.</h1>
            <p className="max-w-2xl mx-auto font-Ovo text-xl md:text-2xl">
                Connect through conversation, not appearances.<br />
                Verified users, no bots, no catfishing.<br />
                Just authentic connections based on who you really are.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <div className="rainbow-button relative z-0 overflow-hidden p-0.5 rounded-full hover:scale-105 transition duration-300 active:scale-100">
                    <div className="rainbow-before absolute left-[-50%] top-[-50%] w-[200%] h-[200%] animate-rotate_border -z-10 bg-gradient-to-r from-[#b820e6] to-[#da7d20] blur-md"></div>
                    <a href="#contact"
                        className="px-10 py-2.5 rounded-full bg-gradient-to-r from-[#b820e6] to-[#da7d20] text-white flex items-center gap-2 relative z-10">
                        Join Waitlist <img src="/assets/right-arrow-white.png" alt="" className="w-4" />
                    </a>
                </div>

                <a href="#about"
                    className="px-10 py-2.5 rounded-full border border-gray-300 dark:border-white/25 hover:bg-slate-100/70 dark:hover:bg-darkHover flex items-center gap-2 bg-white dark:bg-transparent dark:text-white">
                    Learn More <img src="/assets/download-icon.png" alt="" className="w-4 dark:invert" />
                </a>
            </div>
        </div>
    )
}