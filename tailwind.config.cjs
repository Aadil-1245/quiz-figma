module.exports = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        "teal-800": "#1e3a5f",
        "teal-600": "#2a7a99",
        "accent-a": "#a8d8ea",
        "accent-b": "#cdeaf5"
      },
      fontFamily: {
        playfair: ["'Playfair Display'", "serif"],
        inter: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: []
}
