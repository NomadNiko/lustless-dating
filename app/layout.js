import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-outfit",
});
const ovo = Ovo({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-ovo",
});

export const metadata = {
    title: "Lustless - Dating Beyond the Surface",
    description: "Connect through meaningful conversation, not appearances. Verified users, no bots, no catfishing. Just authentic connections based on who you really are.",
    metadataBase: new URL('https://lustless.barvibez.app'),
    openGraph: {
        title: "Lustless - Dating Beyond the Surface",
        description: "Connect through meaningful conversation, not appearances. Verified users, no bots, no catfishing. Just authentic connections based on who you really are.",
        url: 'https://lustless.barvibez.app',
        siteName: 'Lustless',
        locale: 'en_US',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: "Lustless - Dating Beyond the Surface",
        description: "Connect through meaningful conversation, not appearances. Verified users, no bots, no catfishing. Just authentic connections based on who you really are.",
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

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="dark">
            <body className="font-Outfit leading-8 dark:bg-darkTheme dark:text-white">
                {children}
            </body>
        </html>
    );
}