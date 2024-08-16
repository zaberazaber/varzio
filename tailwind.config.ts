import type { Config } from "tailwindcss";
const colors = require('tailwindcss/colors')
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");
const svgToDataUri = require("mini-svg-data-uri");

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend:{
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      zinc: {
        50: '#fafafa',
        100: '#f4f4f5',
        200: '#e4e4e7',
        300: '#d4d4d8',
        400: '#a1a1aa',
        500: '#71717a',
        600: '#52525b',
        700: '#3f3f46',
        800: '#27272a',
        900: '#18181b',
        950: '#09090b',
      },
        primary: "#430909",
        "primary-content": "#ea6161",
        "primary-dark": "#160303",
        "primary-light": "#700f0f",

        secondary: "#244309",
        "secondary-content": "#a1ea61",
        "secondary-dark": "#0c1603",
        "secondary-light": "#3c700f",

        background: "#1e1515",
        foreground: "#2d2020",
        border: "#4b3535",

        copy: "#fcfbfb",
        "copy-light": "#dfd2d2",
        "copy-lighter": "#b59696",

        success: "#094309",
        warning: "#434309",
        error: "#430909",

        "success-content": "#61ea61",
        "warning-content": "#eaea61",
        "error-content": "#ea6161"
    },
  }
  },
  plugins: [
    // @ts-ignore
    function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          // @ts-ignore
          "bg-grid": (value) => ({
            backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" strokeWidth="2" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
          }),
        },
        { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

export default config;
