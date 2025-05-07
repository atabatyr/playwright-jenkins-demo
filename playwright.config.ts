import { defineConfig } from "@playwright/test";

export default defineConfig({
  reporter: [["html", { outputFolder: "playwright-report", open: "never" }]],
  projects: [{ name: "chromium", use: { browserName: "chromium" } }],
});
