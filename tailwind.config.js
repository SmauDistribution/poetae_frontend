module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "custom-gray": "#c5c5c5",
        "custom-darkgray": "#141414",
        "custom-darkgray-900": "#292929",
      },

      fontFamily: {
        sans: ["Lora", "sans-serif"],
      },

      spacing: {
        lg: "35rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
