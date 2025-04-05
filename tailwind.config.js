const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Add your source folder's paths here for Tailwind to purge unused styles
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          new: "#003DA0",
          light: "#0375F3",
        },
        utility: {
          success: {
            50: "#ECFDF3",
            200: "#ABEFC6",
            500: "#17B26A",
            700: "#067647",
          },
          error: {
            50: "#FEF3F2",
            200: "#FECDCA",
            500: "#F04438",
            600: "#D92D20",
            700: "#B42318",
          },
          blue: {
            light: {
              100: "#E0F2FE",
              200: "#B9E6FE",
              600: "#0086C9",
            },
          },
          green: {
            100: "#D3F8DF",
            200: "#AAF0C4",
            600: "#099250",
          },
          yellow: {
            100: "#FEF7C3",
            200: "#FEEE95",
            600: "#CA8504",
          },
        },
        border: {
          primary: "#D5D7DA",
          secondary: "#E9EAEB",
        },
        bg: {
          secondary: "#F6F7F9",
          primary_hover: "#F6F7F9",
        },
        button: {
          primary: {
            bg: "#A47764",
          },
        },
      },
      screens: {
        mobileSmall: "320px",
        mobileLarge: "425px",
        tabletSmall: "640px",
        tablet: "768px",
        tabletLarge: "962px",
        desktop: "1024px",
        desktopLarge: "1440px",
      },
    },
  },
  darkMode: "class",
  plugins: [
    plugin(function ({ addComponents, theme }) {
      addComponents({
        ".container": {
          maxWidth: theme("columns.10xl"),
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: theme("spacing.4"),
          paddingRight: theme("spacing.4"),
        },
      });
    }),
  ],
};
