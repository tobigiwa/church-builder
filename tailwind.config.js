/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f8f8f8",
          "200": "#f0f0f2",
          "300": "#eee"
        },
        royalblue: {
          "100": "#2352d5",
          "200": "#224cbf",
          "300": "rgba(35, 82, 213, 0.6)"
        },
        midnightblue: "#12328c",
        dimgray: {
          "100": "#666",
          "200": "#54585a",
          "300": "#4d4d4d"
        },
        gainsboro: {
          "100": "#e8e8e8",
          "200": "#d8d8d8"
        },
        crimson: "#ed254e",
        gray: {
          "100": "#222",
          "200": "#1e1e1e",
          "300": "#161722",
          "400": "#111",
          "500": "rgba(0, 0, 0, 0)",
          "trans": "#ffffff1a",
          "600": "rgba(255, 255, 255, 0.4)"
        },
        slateblue: "#103ab1",
        lightgray: {
          "100": "#d4d4d4",
          "200": "#d0d0d0",
          "300": "#cacacb"
        },
        darkgray: "#989a9c",
        aliceblue: "#e9eefb",
        mediumslateblue: "#4f64ff",
        "gray-800": "#1f1f1f",
        "night-ghost-text": "#fff",
        "primary-black-100": "#000",
        cornflowerblue: "#9bb1f2",
        "gray-500": "#757575",
        lightpink: "#f8a8b8",
        lavender: "#d0daf6"
      },
      fontFamily: {
        "public-sans": "'Public Sans'",
        "label-medium-600": "Inter",
        "overlock": "Overlock",
        "rasa": "Rasa",
        "roboto-condensed": "'Roboto Condensed'"
      },
      borderRadius: {
        "xl": "20px",
        "2xs": "11px",
        "81xl": "100px",
        "mid": "17px",
        "3xs": "10px",
        "xs-6": "11.6px",
        "8xs-6": "4.6px",
        "7xs-7": "5.7px"
      },
      borderRadius: {
        "81xl": "100px",
        mid: "17px",
        xl: "20px",
        "2xs": "11px",
        "3xs": "10px",
        "xs-6": "11.6px",
        "8xs-6": "4.6px",
        "7xs-7": "5.7px",
      },
    },
    fontSize: {
      lg: "18px",
      sm: "14px",
      mini: "15px",
      base: "16px",
      "3xl": "22px",
      "21xl": "40px",
      "16xl": "35px",
      "17xl": "36px",
      "3xs": "10px",
      "11xl": "30px",
      mid: "17px",
      "sm-3": "13.3px",
      "5xl": "24px",
      xs: "12px",
      xl: "20px",
      "9xs-7": "3.7px",
      "8xs-6": "4.6px",
      "7xs-9": "5.9px",
      "7xs-7": "5.7px",
      "4xs-6": "8.6px",
      smi: "13px",
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