/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0a0a0a",
          50: "#f5f4f2",
          100: "#e8e6e2",
          200: "#c9c5be",
          300: "#9a958c",
          400: "#6b665e",
          500: "#3d3a36",
          600: "#2a2825",
          700: "#1c1b19",
          800: "#121110",
          900: "#0a0a0a",
        },
        secondary: {
          DEFAULT: "#f4f1eb",
          muted: "#a8a29a",
        },
        accent: {
          DEFAULT: "#f4f1eb",
          warm: "#c4a574",
        },
        surface: {
          DEFAULT: "#111111",
          elevated: "#1a1a1a",
          border: "#2a2a2a",
        },
      },
      fontFamily: {
        // Franklin Gothic Heavy si installé (Windows/Adobe) ; Libre Franklin 900 sinon
        display: [
          '"Franklin Gothic Heavy"',
          '"Franklin Gothic Std Heavy"',
          '"Franklin Gothic"',
          '"Libre Franklin"',
          "Arial Black",
          "sans-serif",
        ],
        sans: ['Roboto', "system-ui", "sans-serif"],
        gobold: ['"Gobold CUTS"', '"Libre Franklin"', "sans-serif"],
      },
      fontSize: {
        "display-xl": ["clamp(2.5rem, 6vw, 4.5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "display-lg": ["clamp(2rem, 4vw, 3.25rem)", { lineHeight: "1.1", letterSpacing: "-0.01em" }],
        "display-md": ["clamp(1.5rem, 3vw, 2.25rem)", { lineHeight: "1.15" }],
        overline: ["0.7rem", { lineHeight: "1", letterSpacing: "0.2em", fontWeight: "500" }],
      },
      spacing: {
        section: "clamp(4rem, 10vw, 7.5rem)",
        gutter: "clamp(1.25rem, 4vw, 3rem)",
      },
      maxWidth: {
        site: "90rem",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "pulse-heart": {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.25)" },
        },
      },
      animation: {
        "pulse-heart": "pulse-heart 0.35s ease-out",
      },
    },
  },
  plugins: [],
};
