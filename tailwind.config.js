const daisyui = require("daisyui");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    colors: {
      "Soft-orange": "hsl(35, 77%, 62%)",
      "Soft-red": "hsl(5, 85%, 63%)",
      "Off-white": " hsl(36, 100%, 99%)",
      "Grayish-blue": "hsl(233, 8%, 79%)",
      "Dark-grayishblue": "hsl(236, 13%, 42%)",
      "Very-darkblue": "hsl(240, 100%, 5%)",
      white: "#fff",
      gunmetal: "hsl(237, 13%, 42%, 1)",
    },

    fontFamily: {
      sans: ["Inter", "sans-serif"],
    },

    extend: {
      maxWidth: {
        "9xl": "90rem",
        "8xl": "80rem",
      },

      letterSpacing: {
        link: "0.2em",
      },

      zIndex: {
        100: "100",
        99: "99",
      },

      boxShadow: {
        cs: "-10rem -0.5rem 0 20rem rgba(0, 0, 0, 0.5)",
      },

      backgroundColor: {
        bgc: "rgba(0, 0, 0, 0.5)",
      },
    },
  },
  plugins: [],
};
