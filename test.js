const { chromium,test } = require('@playwright/test');
(async () => {
  const browser = await chromium.launch({
    headless:false,
    slowMo:1000,
    executablePath:"C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe",
  });  // Or 'firefox' or 'webkit'.
  const page = await browser.newPage();
  await page.goto('http://example.com');
  // other actions...
  await browser.close();
})();