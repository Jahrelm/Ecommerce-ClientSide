/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Toddler Kingdom Pre-Loved Brand Colors
        'primary-blue': '#4A90E2',
        'peachy-pink': '#FFB6C1',
        'accent-cream': '#FFF8E7',
        'soft-lavender': '#E6E6FA',
        'off-white': '#FAFAFA',
        'medium-grey': '#6B7280',
        'success-green': '#10B981',
        
        // Legacy colors (keeping for backward compatibility)
        customBlue: '#4A90E2', // Updated to primary-blue
        primarygray: "#FAFAFA",
        qblack: "#222222",
        qyellow: "#FFBB38",
        qred: "#EF262C",
        qgray: "#6B7280",
        qblacktext: "#1D1D1D",
        qgraytwo: "#8E8E8E",
        "qgray-border": "#EFEFEF",
        "qblue-white": "#CBECFF",
        "qh2-green": "#2D6F6D",
        "qh3-blue":"#4A90E2"
      },
      scale: {
        60: "0.6",
      },
    },
  },
  variants: {
    extend: {
      textColor: ["focus-within"],
      borderStyle: ["last"],
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
