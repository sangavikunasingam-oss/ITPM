const { test, expect } = require('@playwright/test');

const URL = 'https://tamil.changathi.com';

test.describe('UI Tests', () => {

  test('Pos_UI_0001 - Real time text update while typing', async ({ page }) => {
    await page.goto(URL);

    const box = page.locator('textarea');
    await expect(box).toBeVisible();

    // Focus textarea
    await box.click();

    // First typing
    await page.keyboard.type('naan ');
    await page.waitForTimeout(500);
    const t1 = await box.inputValue();

    // Second typing
    await page.keyboard.type('veetukku ');
    await page.waitForTimeout(500);
    const t2 = await box.inputValue();

    // UI validation
    expect(t2.length).toBeGreaterThan(t1.length);
  });

});
