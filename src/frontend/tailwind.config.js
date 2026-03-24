/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["'Playfair Display'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      colors: {
        primary: {
          DEFAULT: "oklch(0.55 0.12 210)",
          dark: "oklch(0.37 0.10 215)",
          light: "oklch(0.70 0.10 205)",
          foreground: "oklch(1 0 0)",
        },
        emergency: {
          DEFAULT: "oklch(0.52 0.18 25)",
          foreground: "oklch(1 0 0)",
        },
        hospital: {
          bg: "oklch(0.97 0.01 220)",
          border: "oklch(0.93 0.02 220)",
          muted: "oklch(0.52 0.02 220)",
          heading: "oklch(0.15 0 0)",
        },
        border: "oklch(0.93 0.02 220)",
        input: "oklch(0.93 0.02 220)",
        ring: "oklch(0.55 0.12 210)",
        background: "oklch(0.97 0.01 220)",
        foreground: "oklch(0.15 0 0)",
        card: {
          DEFAULT: "oklch(1 0 0)",
          foreground: "oklch(0.15 0 0)",
        },
        muted: {
          DEFAULT: "oklch(0.95 0.01 220)",
          foreground: "oklch(0.52 0.02 220)",
        },
        accent: {
          DEFAULT: "oklch(0.93 0.05 210)",
          foreground: "oklch(0.37 0.10 215)",
        },
        destructive: {
          DEFAULT: "oklch(0.52 0.18 25)",
          foreground: "oklch(1 0 0)",
        },
        secondary: {
          DEFAULT: "oklch(0.93 0.02 220)",
          foreground: "oklch(0.37 0.10 215)",
        },
        popover: {
          DEFAULT: "oklch(1 0 0)",
          foreground: "oklch(0.15 0 0)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.25rem",
        "3xl": "1.5rem",
      },
      boxShadow: {
        card: "0 2px 16px 0 rgba(15, 79, 99, 0.08)",
        "card-hover": "0 8px 32px 0 rgba(15, 79, 99, 0.16)",
        header: "0 2px 12px 0 rgba(15, 79, 99, 0.10)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
