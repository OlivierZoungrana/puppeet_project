const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  await page.goto('https:fr.indeed.com/', {waitUntil:'networkidle2'});
  await page.type('[name=q]', 'javascript', {delay: 100})
   // await page.type('[name=l]', 'paris', {delay:50})
   await page.click('button[type=submit]')
//   await browser.close();
})();