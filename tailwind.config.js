/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",

  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // screens: {
      //   sm: "480",
      //   md: "768",
      //   lg: "1024",
      // },
      maxWidth: {
        container: "1440px",
        contentContainer: "1140px",
        containerSmall: "1024",
        containerxs: "768px",
      },
      colors: {
        bodyColor: "#0a192f",
        textGreen: "#64ffda",
        textLight: "#ccd6f6",
        textDark: "#8892b0",
        hoverColor: "rgba(100,255,218,0.1)",
      },
      boxShadow: {
        navbarShadow: "0 10px 30px -10px rgba(2,12,27,0.7)",
        footerShadow: "30 10px 0 -10px rgba(2,12,27,0.7)",
      },
    },
  },
  plugins: [],
};
