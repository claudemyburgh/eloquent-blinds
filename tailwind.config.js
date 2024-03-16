const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
    "./storage/framework/views/*.php",
    "./resources/views/**/*.blade.php",
    "./resources/js/**/*.{tsx,ts}",
    "./resources/ts/**/*.{tsx,ts}",
  ],
  darkMode: "class",
  safelist: ["swiper-wrapper", "heading-1", "heading-2", "heading-3", "image-mask-none", "swiper-slide"],
  theme: {
    corePlugins: {
      aria: false,
    },
    extend: {
      colors: {
        primary: colors.sky,
        secondary: colors.cyan,
        tri: colors.rose,
        gray: colors.slate,
      },
      width: {
        "square-diagonal": Math.sqrt(2) * 100 + "%",
      },
      borderRadius: {
        global: ".75rem",
      },
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        hard: ["0 3px 3px rgba(0, 0, 0, 0.5)", "0 6px 6px rgba(0, 0, 0, 0.25)"],
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

  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
    require("@designbycode/tailwindcss-mask-image"),
    require("@designbycode/tailwindcss-conic-gradient"),
    require("tailwindcss-attributes"),
    require("@designbycode/tailwindcss-text-shadow"),
    require("@designbycode/tailwindcss-reflection"),
  ],
}
