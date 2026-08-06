/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./hooks/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#0B1120",
        surface: "#111827",
        card: "#1E293B",

        primary: "#3B82F6",
        secondary: "#2563EB",

        accent: "#8B5CF6",

        success: "#22C55E",
        warning: "#F59E0B",
        danger: "#EF4444",

        text: "#F8FAFC",
        muted: "#94A3B8",

        border: "#334155",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      borderRadius: {
        xl: "16px",
        "2xl": "24px",
      },

      boxShadow: {
        glow: "0 0 30px rgba(59,130,246,0.25)",
        card: "0 10px 30px rgba(0,0,0,0.30)",
      },

      backgroundImage: {
        hero:
          "linear-gradient(135deg, #0B1120 0%, #111827 50%, #1E3A8A 100%)",
      },
    },
  },

  plugins: [],
};