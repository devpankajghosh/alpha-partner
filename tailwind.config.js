/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  presets: [require("nativewind/preset")],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#2D9CDB", // Sky Blue for CTAs
        secondary: "#27AE60", // Green for success states
        background: "#F9FAFB", // Light Gray Background
        card: "#FFFFFF", // White card background
        textPrimary: "#333333", // Dark Gray Text
        textSecondary: "#4F4F4F", // Medium Gray Text
        placeholder: "#BDBDBD", // Light Gray for input placeholders
        border: "#E0E0E0", // Input Borders
        error: "#EB5757", // Red for errors
        success: "#6FCF97", // Light Green for success messages
        darkBackground: "#121212", // Dark mode background
        darkCard: "#1E1E1E", // Dark mode card background
        darkText: "#E0E0E0", // Light text for dark mode
      },
      fontFamily: {
        inter: [
          "Inter-Regular",
          "Inter-Medium",
          "Inter-SemiBold",
          "Inter-Bold",
        ],
        roboto: ["Roboto-Regular", "Roboto-Medium", "Roboto-Bold"],
        poppins: [
          "Poppins-Regular",
          "Poppins-Medium",
          "Poppins-SemiBold",
          "Poppins-Bold",
        ],
      },
      fontSize: {
        heading: ["24px", { lineHeight: "32px", fontWeight: "700" }],
        subtext: ["16px", { lineHeight: "24px", fontWeight: "400" }],
        inputLabel: ["14px", { fontWeight: "500" }],
        inputText: ["16px", { fontWeight: "400" }],
        button: ["18px", { fontWeight: "600" }],
        helpText: ["14px", { fontWeight: "400" }],
        footer: ["12px", { fontWeight: "300" }],
      },
      borderRadius: {
        md: "8px",
        lg: "12px",
      },
      spacing: {
        cardPadding: "24px",
        buttonPadding: "14px 16px",
        inputPadding: "12px 16px",
      },
      boxShadow: {
        card: "0px 4px 10px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
