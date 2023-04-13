/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      width: {
        75: "300px",
      },
    },
    colors: {
      white: "#fff",
      black: "#000112",
      "grey-medium": "#828FA3",
      "purple-main": " #635FC7 ",
      "grey-light": "#F4F7FD",
      "grey-dark": "#2B2C37",
      "grey-very-dark": "#20212C;",
      light: "#E4EBFA",
      dark: "#3E3F4E",
    },
  },
  plugins: [],
};
