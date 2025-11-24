import nextConfig from "eslint-config-next";

const config = [
  ...nextConfig,
  {
    ignores: ["**/node_modules/**", "**/.next/**", "**/out/**", "**/.turbo/**"],
  },
  {
    rules: {
      "@next/next/no-page-custom-font": "off",
    },
  },
];

export default config;
