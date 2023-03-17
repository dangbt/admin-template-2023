const DEFAULT_SIZE = {
  4: "4px",
  6: "6px",
  8: "8px",
  12: "12px",
  14: "14px",
  16: "16px",
  18: "18px",
  20: "20px",
  24: "24px",
  32: "32px",
  48: "48px",
  full: "100%",
};

const BREAKPOINT = {
  ["1/4"]: "25%",
  "fit-content": "fit-content",
  300: "300px",
  400: "400px",
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    fontSize: {
      ...DEFAULT_SIZE,
    },
    borderRadius: {
      none: "0",
      ...DEFAULT_SIZE,
      DEFAULT: "4px",
      hafl: "50%",
    },
    spacing: {
      ...DEFAULT_SIZE,
    },
    width: {
      screen: "100vw",
      ...DEFAULT_SIZE,
      ...BREAKPOINT,
    },
    height: {
      screen: "100vh",
      ...DEFAULT_SIZE,
      ...BREAKPOINT,
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      grey: "#bbbdc1",
      primary: {
        100: "#38393d",
        500: "#212327",
        800: "#090b0e",
      },
      secondary: {
        100: "#394b4a",
        500: "#78bfac",
        800: "#4efec9",
      },
      yellow: {
        100: "#4b4a43",
        500: "#dfd6aa",
      },
    },
    extend: {},
  },
  plugins: [],
};
