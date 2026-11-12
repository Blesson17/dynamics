import { defineConfig } from "vite";

export default defineConfig({
  base: process.env.GITHUB_ACTIONS === "true" ? "/dynamics/" : "/",
});import { defineConfig } from "vite";

export default defineConfig({});
