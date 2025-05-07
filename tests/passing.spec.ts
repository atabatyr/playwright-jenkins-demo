import { test, expect } from "@playwright/test";

test("should pass successfully", async ({ page }) => {
  await page.goto("https://playwright.dev");
  await expect(page).toHaveTitle(/Playwright/);
});
