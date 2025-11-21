/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'neuro-dark': '#0A0A0A', // Base background
                'neuro-neon': '#00FFFF', // Cyan accents
                'neuro-magenta': '#FF00FF', // Magenta for highlights
                'neuro-gray': '#1A1A1A', // Card backgrounds
            },
            fontFamily: {
                'neuro': ['Orbitron', 'monospace'], // Futuristic font – add via Google Fonts below
            },
        },
    },
    plugins: [],
    darkMode: 'class', // Enable dark mode globally
}