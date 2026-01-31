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

test.describe('Missing spaces in input', () => {
  test('Neg_Fun_0002', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'enakkuveanaam.');
    expect(out).not.toContain('எனக்கு வேணாம்');
  });
});

test.describe('Heavy slang input', () => {
  test('Neg_Fun_0003', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'dei macha enkadaa poraieanaam.');
    expect(out).not.toContain('டேய் மச்சா எங்கடா போறாய்');
  });
});

test.describe('Extra spaces formatting issue', () => {
  test('Neg_Fun_0004', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'naan      unakku   adikka    poran');
    expect(out).not.toContain('நான் உனக்கு அடிக்க போறன்');
  });
});

test.describe('Symbols and numbers mixed', () => {
  test('Neg_Fun_0005', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'bus 102 la school poran');
    expect(out).not.toContain('பஸ் 102 ல ஸ்கூல் போறன்');
  });
});

test.describe('Unstructured multi-line input', () => {
  test('Neg_Fun_0006', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(
      page,
      'nalaikku morning 8.30AM ku exam late aa vanthaa anumathi illa'
    );
    expect(out).not.toContain(
      'நாளைக்கு 8.30 AM க்கு exam ,late ஆ வந்தா அனுமதி இல்லை'
    );
  });
});

test.describe('Long mixed paragraph input', () => {
  test('Neg_Fun_0007', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(
      page,
      'nalaikku trip plan panni irukkiram kandy poka.morning 6.00AM start panni 120km travel pannanum,time ellam discuss pannittam,weather nalla irukku,ellarum vanthudunka time kku'
    );
    expect(out).not.toContain(
      'நாளைக்கு trip plan பண்ணி இருக்கிறம்'
    );
  });
});

test.describe('Mixed English heavy input', () => {
  test('Neg_Fun_0008', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(
      page,
      'enakku avan email poddu irukkan ,naan athai paakkala'
    );
    expect(out).not.toContain(
      'எனக்கு அவன் email போட்டு இருக்கான்'
    );
  });
});

test.describe('Repeated slang emphasis', () => {
  test('Neg_Fun_0009', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'enda veadu rompa ropma thurathula irukku');
    expect(out).not.toContain('எண்ட வீடு ரொம்ப ரொம்ப தூரத்துல இருக்கு');
  });
});

test.describe('Informal sentence structure', () => {
  test('Neg_Fun_0010', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'eexam irukku');
    expect(out).not.toContain('exam இருக்கு');
  });
});
