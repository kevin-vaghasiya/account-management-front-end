module.exports = {
  purge: ["./src/pages/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography"),
  require("@tailwindcss/forms"),
  require("@tailwindcss/aspect-ratio"),
  require("@tailwindcss/line-clamp"),],
}
