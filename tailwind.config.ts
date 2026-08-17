import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{ts,tsx,mdx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./mdx-components.tsx",
  ],
  theme: {
    extend: {
      colors: {
        // Paleta oficial PyForge — ver docs/design-system.md
        primary: {
          DEFAULT: "#2563EB", // Azul profundo
          light: "#3B82F6",
          dark: "#1D4ED8",
        },
        accent: {
          DEFAULT: "#FACC15", // Amarelo Python
        },
        success: {
          DEFAULT: "#22C55E",
        },
        warning: {
          DEFAULT: "#F97316",
        },
        danger: {
          DEFAULT: "#EF4444",
        },
        curiosity: {
          DEFAULT: "#A855F7", // Roxo
        },
        bg: {
          dark: "#09090B",
          "dark-elevated": "#111113",
          light: "#FAFAFA",
          "light-elevated": "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "SFMono-Regular", "monospace"],
      },
      spacing: {
        // Escala fixa definida no Design System (8/16/24/32/48/64)
        "1.5x": "8px",
        "2x": "16px",
        "3x": "24px",
        "4x": "32px",
        "6x": "48px",
        "8x": "64px",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
      },
    },
  },
  plugins: [
    // Registra a variante `light:` — o tema escuro é o padrão da aplicação
    // (ver globals.css), então o tema claro é tratado como uma sobrecarga,
    // ativada quando a tag <html> tem a classe "light".
    plugin(function ({ addVariant }) {
      addVariant("light", "html.light &");
    }),
  ],
};

export default config;

