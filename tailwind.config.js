/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-color": "#94adcf",
        "main-active-color": "#fabb18",
        "wrong-color": "#f44336",

        "bg-color": "#38404b",
        "bg-overlay-from": "#22343c75",
        "bg-overlay-to": "#1f2e3572",
        "bg-overlay":
          "linear-gradient(138.13deg, #22343c75 25.87%, #1f2e3572 100%)",
      },
      boxShadow: {
        "main-shadow":
          "-1px 1px 2px rgba(22, 26, 30, 0.2), 1px -1px 2px rgba(22, 26, 30, 0.2), -1px -1px 2px rgba(90, 102, 120, 0.9), 1px 1px 3px rgba(22, 26, 30, 0.9), inset 1px 1px 2px rgba(90, 102, 120, 0.3), inset -1px -1px 2px rgba(22, 26, 30, 0.5)",
        "main-shadow-active":
          "1px 1px 2px rgba(66, 75, 88, 0.3), -1px -1px 2px rgba(46, 53, 62, 0.5), inset -3px 3px 6px rgba(46, 53, 62, 0.2), inset 3px -3px 6px rgba(46, 53, 62, 0.2), inset -3px -3px 6px rgba(66, 75, 88, 0.9), inset 3px 3px 8px rgba(46, 53, 62, 0.9)",

        "second-shadow":
          "-5px 5px 10px rgba(48, 54, 64, 0.2),5px -5px 10px rgba(48, 54, 64, 0.2), -5px -5px 10px rgba(64, 74, 86, 0.9),5px 5px 13px rgba(48, 54, 64, 0.9), inset 1px 1px 2px rgba(64, 74, 86, 0.3),inset -1px -1px 2px rgba(48, 54, 64, 0.5)",
        "second-shadow-active":
          "1px 1px 2px rgba(64, 74, 86, 0.3), -1px -1px 2px rgba(48, 54, 64, 0.5), inset -5px 5px 10px rgba(48, 54, 64, 0.2), inset 5px -5px 10px rgba(48, 54, 64, 0.2), inset -5px -5px 10px rgba(64, 74, 86, 0.9), inset 5px 5px 13px rgba(48, 54, 64, 0.9)",
      },
    },
  },
  plugins: [],
};
