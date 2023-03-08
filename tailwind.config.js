const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

const primary = {
  50: "#99D4F0",
  100: "#87CDED",
  200: "#63BEE8",
  300: "#40AFE3",
  400: "#209FDA",
  500: "#1B85B6",
  600: "#146185",
  700: "#0D3E54",
  800: "#051A23",
  900: "#000000",
}

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php", "./storage/framework/views/*.php", "./resources/views/**/*.blade.php", "./resources/js/**/*.jsx"],
  safelist: [],
  theme: {
    extend: {
      colors: {
        primary,
        secondary: colors.emerald,
        gray: colors.gray,
      },
      fontFamily: {
        sans: ["Figtree", ...defaultTheme.fontFamily.sans],
      },
    },
  },

  plugins: [require("@tailwindcss/forms"), require("tailwindcss-dotted-background")],
}
