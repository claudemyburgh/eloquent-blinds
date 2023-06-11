const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.{tsx,ts}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                primary: colors.sky,
                secondary: colors.cyan,
                tri: colors.rose,
                gray: colors.gray,
            },
            fontFamily: {
                sans: ["Figtree", ...defaultTheme.fontFamily.sans],
            },
            animation: {
                "spin-slow": `spin 5s linear infinite`,
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
