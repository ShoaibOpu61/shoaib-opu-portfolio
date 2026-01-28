import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                gold: {
                    400: "#e6c35c",
                    500: "#d4af37", // Primary Gold
                    600: "#b5952f",
                },
                dark: {
                    900: "#0a0a0a", // Deep Black
                    800: "#121212", // Surface
                },
            },
            fontFamily: {
                sans: ["var(--font-inter)"],
                serif: ["var(--font-playfair)"],
            },
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "cinema-gradient": "linear-gradient(to bottom, transparent, #0a0a0a)",
            },
        },
    },
    plugins: [],
};
export default config;
