/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        royalblue: {
          "100": "#2352d5",
          "200": "#224cbf",
          "300": "rgba(35, 82, 213, 0.6)",
        },
        white: "#fff",
        gainsboro: "#e8e8e8",
        gray: {
          "100": "#222",
          "200": "#1e1e1e",
          "300": "rgba(255, 255, 255, 0.4)",
          "400": "rgba(0, 0, 0, 0)",
        },
        lightgray: {
          "100": "#d4d4d4",
          "200": "#d0d0d0",
          "300": "#cacacb",
        },
        dimgray: {
          "100": "#54585a",
          "200": "#4d4d4d",
        },
        darkgray: "#989a9c",
        black: "#000",
        whitesmoke: "#f0f0f2",
        aliceblue: "#e9eefb",
        midnightblue: "#12328c",
        crimson: "#ed254e",
        slateblue: "#103ab1",
        mediumslateblue: "#4f64ff",
      },
      fontFamily: {
        "public-sans": "'Public Sans'",
        "heading-x-small-600": "Inter",
      },
      borderRadius: {
        xl: "20px",
        "2xs": "11px",
        "81xl": "100px",
        mid: "17px",
      },
    },
    fontSize: {
      lg: "18px",
      sm: "14px",
      mini: "15px",
      base: "16px",
      xl: "20px",
      "17xl": "36px",
      "5xl": "24px",
      "29xl": "48px",
      "21xl": "40px",
      "11xl": "30px",
      xs: "12px",
      "3xs": "10px",
      mid: "17px",
      smi: "13px",
      "sm-3": "13.3px",
      "3xl": "22px",
      "16xl": "35px",
    },
    screens: {
      lg: {
        max: "1200px",
      },
      md: {
        max: "960px",
      },
      sm: {
        max: "420px",
      },
      mq1200: {
        raw: "screen and (min-width: 1199px)",
      },
      mq1148: {
        raw: "screen and (max-width: 1148px)",
      },
      mq716: {
        raw: "screen and (max-width: 716px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
