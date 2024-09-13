import { expect, test } from "@playwright/test";

// h3.newsBlock-title a.newsBlock-link

test("Journées du patrimoine disponible ?", async ({ page, baseURL }) => {
  await page.goto("https://www.elysee.fr/toutes-les-actualites");

  await expect(
    page
      .locator(
        "#first-page-actualities > ul:nth-child(2) > li:nth-child(1) > h3",
      )
      .locator("text=Commémoration de la libération du Havre."),
  ).toBeVisible();
});
