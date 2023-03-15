module.exports = {
    content: [
        "./public/**/*.html",
        "./src/**/*.{astro,js,jsx,ts,tsx}",
    ],
    plugins: [require("daisyui"), require("@tailwindcss/typography")],
    daisyui: {
        themes: ["cupcake", "wireframe", "pastel", "garden", "bumblebee", "retro", "cyberpunk", "valentine", "lofi", "winter"],
    },
};