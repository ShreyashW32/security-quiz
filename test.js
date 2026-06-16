const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8000/index.html');
  await page.waitForTimeout(1000);
  
  // Click first option
  await page.locator('.option-label').first().click();
  await page.waitForTimeout(500);
  
  let isChecked = await page.locator('.option-input').first().isChecked();
  console.log('After click:', isChecked);
  
  // Click reset
  await page.click('#btnResetQuestion');
  await page.waitForTimeout(500);
  
  isChecked = await page.locator('.option-input').first().isChecked();
  console.log('After reset:', isChecked);
  
  await browser.close();
})();
