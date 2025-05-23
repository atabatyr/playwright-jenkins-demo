import { test, expect } from "@playwright/test";

test("should fail intentionally", async ({ page }) => {
  await page.goto("https://playwright.dev");
  // This will fail because the title does NOT contain "Nonexistent"
  //await expect(page).toHaveTitle(/Nonexistent/);
});
