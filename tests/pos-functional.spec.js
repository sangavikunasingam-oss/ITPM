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

test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0001 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'nnan kadaikku poren');
    expect(out).toContain('நான் கடைக்கு போறேன்');
  });

});

test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0002 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'nan kadaikku ponan aana kaaikarikal vaankavillai');
    expect(out).toContain('நான் கடைக்கு போனான் ஆனா காய்கறிகள் வாங்கவில்லை');
  });

});

test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0003 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'enakku singalam theriyathu,athaala nan kathaikala.');
    expect(out).toContain('எனக்கு சிங்களம் தெரியாது ,அதால நான் கதைக்கல.');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0004 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'malai peithathaal kudai pidiththean.');
    expect(out).toContain('.');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0005 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'nenkal enka poreenga?');
    expect(out).toContain('நீங்கள் எங்க போறீங்க?');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0006 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'kathavai moodu');
    expect(out).toContain('கதவை மூடு');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0007 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'enakku athai kuduththu vidunkal');
    expect(out).toContain('எனக்கு அதை குடுத்து விடுங்கள் ');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0008 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'enakku payama irukku.');
    expect(out).toContain('எனக்கு பயமா இருக்கு.');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0009 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'naan zoom vakupukku pokala.');
    expect(out).toContain('நான் zoom வகுப்புக்கு போகல.');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0010 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'naan nalaikku kovil povan.');
    expect(out).toContain('நான் நாளைக்கு கோவில் போவன்.');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0011 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'nandri.');
    expect(out).toContain('நன்றி.');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0012 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'naan anka pokala.');
    expect(out).toContain('நான் அங்க போகல.');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0013 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'naankal nertru kovil ponam.');
    expect(out).toContain('நாங்கள் நேற்று கோவில் போனோம்.');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0014 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'naan seithathu thappu thayavu seithu ennai manniunkal.');
    expect(out).toContain('நான் செய்தது தப்பு தயவு செய்து என்னை மன்னியுங்கள்.');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0015 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page,'naan school pokavillai.');
    expect(out).toContain('நான் school போகவில்லை.');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0016 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'naan atm kku ponan.');
    expect(out).toContain('நான் atm க்கு போனான்.');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0017 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'enakku kashdam athaala enakku rupee 5000 kadan kidaikkumaa.');
    expect(out).toContain('எனக்கு கஷ்டம் அதால எனக்கு ரூபாய் 50000 கடன் கிடைக்குமா.');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0018 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'naan 01.00 PM kku thaan maththiyaana saappaadu saappitten.');
    expect(out).toContain('நான் 1.00 PM க்கு தான் மத்தியான சாப்பாடு சாப்பிட்டேன்.');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0019 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'enakku konjam konjam tamil theriyum.');
    expect(out).toContain('எனக்கு கொஞ்சம் கொஞ்சம் தமிழ் தெரியும்.');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0020 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'enakku kodu.');
    expect(out).toContain('எனக்கு கொடு.');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0021 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'enakku antha penaiyai kodukka  mudiyumaa.');
    expect(out).toContain('எனக்கு அந்த பேனையை கொடுக்க முடியுமா.');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0022 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'enaanga kovil kku povoma?');
    expect(out).toContain('நாங்க கோயில் க்கு போவாமா?');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0023 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'enakku athu vennum aanaal ennaal athai samaikka mudiyaathu.');
    expect(out).toContain('எனக்கு அது வேணும் ஆனால் என்னால அதை சமைக்க முடியாது');
  });

});
test.describe('Positive Functional Test Cases', () => {

  test('Pos_Fun_0024 - Simple daily sentence', async ({ page }) => {
    await page.goto(URL);
    const out = await typeAndRead(page, 'indaiku enakku velai irukku athaala naan  zoom meeting vara maadean.');
    expect(out).toContain('இண்டைக்கு எனக்கு வேலை இருக்கு அதால நான் zoom meeting  வர மாட்டேன்.');
  });

});

