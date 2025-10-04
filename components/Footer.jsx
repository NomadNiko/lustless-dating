export default function Footer() {
    return (
        <div className="mt-20">
            <div className="text-center">
                <img src="/assets/logo.png" alt="" className="w-36 mx-auto mb-2 dark:hidden" />
                <img src="/assets/logo_dark.png" alt="" className="w-36 mx-auto mb-2 hidden dark:block" />


                <div className="w-max flex items-center gap-2 mx-auto text-base md:text-lg">
                    <img src="/assets/mail_icon.png" alt="" className="w-5 dark:hidden" />
                    <img src="/assets/mail_icon_dark.png" alt="" className="w-5 hidden dark:block" />

                    <a href="mailto:hello@lustless.app">hello@lustless.app</a>
                </div>
            </div>
            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-3 text-base md:text-lg">
                <p>© {new Date().getFullYear()} Lustless. All rights reserved.</p>
                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li><a target='_blank' href="#">Instagram</a></li>
                    <li><a target='_blank' href="#">Twitter</a></li>
                    <li><a target='_blank' href="#">TikTok</a></li>
                </ul>
            </div>
        </div>
    )
}