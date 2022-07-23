/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#f3f5f7",
        "gradient-dark": "#574AEB",
        "gradient-light": "#3EA1DB",

        "gray-dark": "#1A202C",
        gray: "#717171",
        shape: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
