import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        border: "rgba(255,255,255,0.08)",
        input: "rgba(255,255,255,0.08)",
        ring: "#3B82F6",
        background: "#0A0A0A",
        foreground: "#FFFFFF",
        primary: {
          DEFAULT: "#3B82F6", // electric blue
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#111111", // soft dark layer
          foreground: "#9CA3AF",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#111111",
          foreground: "#9CA3AF",
        },
        accent: {
          DEFAULT: "#8B5CF6", // premium purple
          foreground: "#FFFFFF",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        popover: {
          DEFAULT: "#0A0A0A",
          foreground: "#FFFFFF",
        },
        card: {
          DEFAULT: "rgba(255,255,255,0.02)",
          foreground: "#FFFFFF",
        },
        sidebar: {
          DEFAULT: "#0A0A0A",
          foreground: "#FFFFFF",
          primary: "#3B82F6",
          "primary-foreground": "#FFFFFF",
          accent: "#8B5CF6",
          "accent-foreground": "#FFFFFF",
          border: "rgba(255,255,255,0.08)",
          ring: "#3B82F6",
        },
      },
      borderRadius: {
        lg: "16px",
        md: "12px",
        sm: "8px",
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
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "glow-pulse": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59, 130, 246, 0.1)" }, // Blue glow
          "50%": { boxShadow: "0 0 50px rgba(59, 130, 246, 0.3)" },
        },
        "glow-purple": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(139, 92, 246, 0.1)" },
          "50%": { boxShadow: "0 0 50px rgba(139, 92, 246, 0.3)" },
        }
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fade-in-up 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards", // smoother
        "glow-pulse": "glow-pulse 3s ease-in-out infinite",
        "glow-purple": "glow-purple 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
