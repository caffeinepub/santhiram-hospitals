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
          DEFAULT: "oklch(0.38 0.13 195)",
          dark: "oklch(0.28 0.11 195)",
          light: "oklch(0.78 0.15 75)",
          foreground: "oklch(1 0 0)",
        },
        emergency: {
          DEFAULT: "oklch(0.58 0.22 25)",
          foreground: "oklch(1 0 0)",
        },
        hospital: {
          bg: "oklch(0.96 0.015 195)",
          border: "oklch(0.91 0.008 200)",
          muted: "oklch(0.52 0.02 200)",
          heading: "oklch(0.18 0.02 270)",
        },
        border: "oklch(0.91 0.008 200)",
        input: "oklch(0.91 0.008 200)",
        ring: "oklch(0.38 0.13 195)",
        background: "oklch(0.98 0.005 80)",
        foreground: "oklch(0.18 0.02 270)",
        card: {
          DEFAULT: "oklch(1 0 0)",
          foreground: "oklch(0.18 0.02 270)",
        },
        muted: {
          DEFAULT: "oklch(0.96 0.015 195)",
          foreground: "oklch(0.52 0.02 200)",
        },
        accent: {
          DEFAULT: "oklch(0.78 0.15 75)",
          foreground: "oklch(0.18 0.02 270)",
        },
        destructive: {
          DEFAULT: "oklch(0.58 0.22 25)",
          foreground: "oklch(1 0 0)",
        },
        secondary: {
          DEFAULT: "oklch(0.96 0.015 195)",
          foreground: "oklch(0.28 0.11 195)",
        },
        popover: {
          DEFAULT: "oklch(1 0 0)",
          foreground: "oklch(0.18 0.02 270)",
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
        card: "0 2px 16px 0 rgba(5, 80, 80, 0.08)",
        "card-hover": "0 8px 32px 0 rgba(5, 80, 80, 0.18)",
        header: "0 2px 12px 0 rgba(5, 80, 80, 0.12)",
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
