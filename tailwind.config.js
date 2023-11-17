/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Roboto", "sans-serif"],
      },
      colors: {
        primary: "#e30019",
        secondary: "#6F5CF1",
      },
    },
  },
  plugins: [],
};
