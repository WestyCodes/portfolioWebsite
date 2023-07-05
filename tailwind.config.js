/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            backgroundImage: {},
            colors: {
                midnightBlue: {
                    100: '#0300A1',
                    200: '#01004A',
                    300: '#010021',
                },
            },
        },
    },
    plugins: [],
};
