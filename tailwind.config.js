/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {
                'hero-picture': "url('../public/assets/heroPicture.png')",
                'endless-picture': "url('../public/assets/endlessPicture.png')",
            },
            colors: {
                midnightBlue: {
                    100: '#0300A1',
                    200: '#01004A',
                    300: '#010021',
                },
            },
            scale: {
                '-100': '-1',
            },
        },
    },
    plugins: [],
};
