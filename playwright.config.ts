import { defineConfig } from "@playwright/test";

export default defineConfig({
  reporter: [
    ["list"], // Optional: shows progress in CLI
    ["html", { outputFolder: "playwright-report", open: "never" }],
    ["junit", { outputFile: "test-results/results.xml" }],
    ["allure-playwright"],
  ],
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
  ],
});
