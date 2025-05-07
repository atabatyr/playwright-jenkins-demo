import { defineConfig } from "@playwright/test";

export default defineConfig({
  reporter: [
    ["list"],
    ["html", { outputFolder: "playwright-report", open: "never" }],
    ["junit", { outputFile: "results.xml" }],
  ],
  projects: [{ name: "chromium", use: { browserName: "chromium" } }],
});
