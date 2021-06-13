module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false,
  theme: {
    fontFamily: {
      sans: ['"Work Sans"', "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          darkest: "#004541",
          dark: "#017069",
          DEFAULT: "#5BBB6D",
          light: "#a4d96c",
          lightest: "#D4FCA9",
        },
      },
      minWidth: {
        sm: "420px",
        lg: "1024px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
