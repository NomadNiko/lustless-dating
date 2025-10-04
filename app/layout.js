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
    description: "Lustless is a revolutionary dating app where verified users connect through conversation, not photos. No bots, no catfishing - just authentic connections based on personality and compatibility.",
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