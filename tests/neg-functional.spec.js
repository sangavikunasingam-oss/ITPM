const { test, expect } = require('@playwright/test');

const URL = 'https://tamil.changathi.com';

// Common helper function
async function typeAndRead(page, text, wait = 1000) {
  const box = page.locator('textarea');
  await box.click();
  await page.keyboard.type(text);
  await page.waitForTimeout(wait);
  return await box.inputValue();
}

test.describe('Negative Functional Tests', () => {
  test('Neg_Fun_0001', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'nan sapuda porean');
    expect(out).not.toContain('நான் சாப்பிட போறேன்');
  });
});