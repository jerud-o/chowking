/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: theme => ({
                'white-brick': "url('/brick.jpg')",
                'red-circles': "url('/peakpx.jpg')",
            }),
        },
    },
    plugins: [require("daisyui")],
}

