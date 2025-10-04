/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",

        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            gridTemplateColumns: {
                'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
            },
            fontFamily: {
                Outfit: ["Outfit", "sans-serif"],
                Ovo: ["Ovo", "serif"]
            },
            animation: {
                spin_slow: 'spin 12s linear infinite reverse',
                rotate_gradient: 'rotate_pulse 8s ease-in-out infinite',
                rotate_gradient_fast: 'rotate 7.5s linear infinite',
                rotate_border: 'rotate 8s linear infinite'
            },
            keyframes: {
                rotate: {
                    '100%': { transform: 'rotate(1turn)' }
                },
                rotate_pulse: {
                    '0%': { transform: 'rotate(0deg) scale(0.7)' },
                    '50%': { transform: 'rotate(180deg) scale(0.9)' },
                    '100%': { transform: 'rotate(360deg) scale(0.7)' }
                }
            },
            colors: {
                lightHover: '#fcf4ff',
                darkHover: '#2a004a',
                darkTheme: '#11001F'
            },
            boxShadow: {
                'black': '4px 4px 0 #000',
                'white': '4px 4px 0 #fff',
            }
        },
    },
    darkMode: 'selector',
    plugins: [],
}