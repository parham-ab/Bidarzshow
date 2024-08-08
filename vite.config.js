import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const fileNames = [
  "src",
  "components",
  "assets",
  "pages",
  "services",
  "utils",
  "styles",
  "features",
  "routes",
  "hooks",
  "fonts",
];

const pathes = fileNames.reduce(
  (acc, cur) => ({
    ...acc,
    [cur]: `/${cur === "src" ? cur : "src/" + cur}`,
  }),
  ""
);
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      ...pathes,
    },
  },
});