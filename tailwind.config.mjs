/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // ─── TailorApply — Warm Neutral Palette ───────────────────────────────
        primary:      "#E8A849",   // Warm amber — approachability, confidence
        accent:       "#1E3A5F",   // Deep navy — trust, professionalism
        surface:      "#FAFAF8",   // Warm off-white — calm, clean
        background:    "#F5F3EF",   // Cream undertone — soft, not sterile
        "text-main":  "#1A1A1A",   // Near-black — high readability
        "text-muted": "#6B6B6B",   // Warm gray — secondary content
        success:      "#2D8A6E",   // Sage green — completion, validation
      },
      fontFamily: {
        // Fraunces (heading) + General Sans (body)
        // If General Sans unavailable, fallback to Plus Jakarta Sans
        heading: ['"Fraunces"', "Georgia", "serif"],
        body:    ['"General Sans"', "system-ui", "sans-serif"],
      },
      fontSize: {
        // Dramatic scale jumps — hierarchy that reads at a glance.
        "display": ["clamp(3rem, 6vw, 5rem)", { lineHeight: "1.05", letterSpacing: "-0.02em" }],
        "title":   ["clamp(1.75rem, 3vw, 2.75rem)", { lineHeight: "1.15", letterSpacing: "-0.01em" }],
        "lead":    ["clamp(1.05rem, 1.5vw, 1.25rem)", { lineHeight: "1.65" }],
      },
      boxShadow: {
        "card":      "0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.08)",
        "card-hover":"0 2px 8px rgba(0,0,0,0.08), 0 12px 32px rgba(0,0,0,0.12)",
        "cta":       "0 4px 16px rgba(0,0,0,0.15), 0 1px 4px rgba(0,0,0,0.1)",
      },
      animation: {
        "fade-up":    "fadeUp 0.6s ease forwards",
        "fade-in":    "fadeIn 0.5s ease forwards",
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      transitionTimingFunction: {
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
        "smooth": "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      },
    },
  },
};
