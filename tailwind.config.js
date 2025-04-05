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
        text: { primary: "#1C252E", secondary: "#637381" },
        blue: {
          new: "#003DA0",
          light: "#0375F3",
        },
        neutral: {
          "01": "#141522",
          "02": "#D0D5DD",
        },
        error: {
          main: "#FF5630",
          light: "#FFAC82",
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
