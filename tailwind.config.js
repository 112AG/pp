export default {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF4D4D",
        secondary: "#D4FF00",
        accent: "#FF9E00",
        teal: "#40E0D0",
        "background-light": "#F2EFE9",
        "background-dark": "#121212",
        "text-light": "#1A1A1A",
        "text-dark": "#EDEDED",
      },
      fontFamily: {
        display: ["Syne", "sans-serif"],
        body: ["Space Grotesk", "sans-serif"],
        handwritten: ["Permanent Marker", "cursive"],
      },
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, #e5e5e5 1px, transparent 1px), linear-gradient(to bottom, #e5e5e5 1px, transparent 1px)",
        "grid-pattern-dark":
          "linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)",
      },
      animation: {
        marquee: "marquee 25s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
};
