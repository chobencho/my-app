/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "node_modules/preline/dist/*.js",
    "./src/**/*.{html,js,isx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "540px",
      },
    },
  },
  plugins: [require("preline/plugin")],
};
