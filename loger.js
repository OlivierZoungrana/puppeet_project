const puppeteer = require("puppeteer")
const adresseWeb= 'https://www.seloger.com'


(async () => {

const browser = await puppeteer.launch({headless:false})
const page = await browser.newPage()
await page.goto(adresseWeb, {waitUntil: 'networkidle2'})
await browser.close()

})();