module.exports = {
  theme: {
    extend: {
      keyframes: {
        // Left → Right continuous marquee
        "marquee-left-right": {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0)" },
        },
        // Shimmer effect for the glossy overlay
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        "marquee-left-right": "marquee-left-right 12s linear infinite",
        shimmer: "shimmer 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};