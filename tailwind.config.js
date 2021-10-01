// prettier-ignore
const colors = require("tailwindcss/colors")

module.exports = {
  plugins: [require("daisyui")],
  theme: {
    borderRadius: { "4xl": "2rem" },
    extend: {
      margin: { 68: "17rem" },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.green,
      navy: "#0A2B4E",
      fauxlavender: "#EFE8FF",
    },
  },
};
