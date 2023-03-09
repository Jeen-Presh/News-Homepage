const daisyui = require("daisyui");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
