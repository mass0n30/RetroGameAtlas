/** @type {import('tailwindcss').Config} */

// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
    screens: {
      'xs': '480px',

      'sm': '640px',
      // scale down font further and adjust flex/grid layouts possibly?

      'md': '1000px',
      // scaled down font and flex/grid changes

      'lg': '1280px',
      // default beyond this at 1280px

    },
      height: {
        "nav-height": "var(--nav-height)",
        "header-height": "var(--header-height)",
      },

    colors: {
      // Primary
      primary: "var(--color-primary)",
      "primary-dark": "var(--color-primary-dark)",
      "primary-light": "var(--color-primary-light)",

      // Secondary & Status
      secondary: "var(--color-secondary)",
      destructive: "var(--color-destructive)",
      success: "var(--color-success)",
      "accent-orange": "var(--accent-orange)",

      // Backgrounds & Surfaces
      background: "var(--color-background)",
      "background-alt": "var(--color-background-alt)",
      surface: "var(--color-surface)",
      "surface-elevated": "var(--color-surface-elevated)",

      // Typography
      text: "var(--color-text)",
      foreground: "var(--color-foreground)",
      muted: "var(--color-muted)",

      // Borders
      border: "var(--color-border)",
      "border-subtle": "var(--color-border-subtle)",
    },

      boxShadow: {
        "primary-glow": "var(--glow-primary)",
      },

      borderRadius: {
        xs: "var(--radius-xs)",
        sm: "var(--radius-sm)",
        DEFAULT: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },

      spacing: {
        xs: "var(--space-xs)",
        sm: "var(--space-sm)",
        md: "var(--space-md)",
        lg: "var(--space-lg)",
      },

      fontFamily: {
        sans: ["var(--font-sans)"],
      },
    },
  },

  plugins: [],
};