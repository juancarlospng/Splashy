module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        carbon: "#1C1C1C",
        bone: "#EFE9DB",
        forest: "#4C5C52",
        rust: "#C6561A",
        stonegray: "#606060",
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      letterSpacing: {
        label: "0.22em",
      },
      maxWidth: {
        shell: "1440px",
      },
    },
  },
  plugins: [],
};
