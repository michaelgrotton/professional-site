module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        alice: ["Alice", "serif"],
        sanspro: ["Source Sans Pro", "sans-serif"]
      }
    }
  },
  variants: {},
  plugins: []
};
