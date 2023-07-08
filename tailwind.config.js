const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.{tsx,ts}",
  ],
  darkMode: "class",
  safelist: ["swiper-wrapper"],
  theme: {
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.cyan,
        tri: colors.rose,
        gray: colors.slate,
      },
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        marquee: {
          from: {
            transform: "translateX(0)",
          },
          to: {
            transform: "translateX(100%)",
          },
        },
      },
      animation: {
        "spin-slow": `spin 5s linear infinite`,
        loop: `loop var(--speed) var(--direction) linear infinite`,
        marquee: `marquee var(--speed)ms var(--direction) linear infinite`,
        "play-paused": "test",
      },
      aspectRatio: {
        "4/3": "4 / 3",
      },
    },
  },

  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography"), require("tailwindcss-image-mask"), require("@tailwindcss/container-queries")],
}
