/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {},
    colors: {
      green: "#516a50",
      pink: "#eeaba9",
      gray: "#888a7d",
      red: "#7a0b13",
      "green-light": "#9cb2a5",
    },
  },

  plugins: [],
};
