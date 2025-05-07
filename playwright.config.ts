import { defineConfig } from "@playwright/test";

export default defineConfig({
  use: {
    headless: true,
  },
  reporter: [["html"]],
  projects: [
    {
      name: "chromium",
      use: { browserName: "chromium" },
    },
  ],
});
