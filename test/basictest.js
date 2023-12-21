const { test, expect } = require('@playwright/test');

test('homepage has correct title', async ({ page }) => {
  // Replace YOUR_WEBSITE_URL with the URL of the website you're testing
  await page.goto('file:///C:/Users/sabee/OneDrive/Desktop/Final%20Project/Final-Project/index.html');

  // Check if the title is correct
  await expect(page).toHaveTitle(TITAN);

  // Check if a button is present
  const button = await page.$('text=Click Me');
  expect(button).not.toBeNull();
});