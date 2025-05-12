import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    files: ["**/*.{ts,tsx,js,jsx}"], // Apply to all TS/JS files
    rules: {
      // Disable specific rules
      "no-unused-vars": "off",               // Base ESLint rule
      "@typescript-eslint/no-unused-vars": "warn", // TS unused vars (warn instead of error)
      "@typescript-eslint/no-explicit-any": "off", // Allow 'any' type
      "@next/next/no-img-element": "off",     // Allow <img> tags
      // Add more rules here as needed
    },
  },
];

export default eslintConfig;
