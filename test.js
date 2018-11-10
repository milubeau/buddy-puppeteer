const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({args: ['--no-sandbox', '--disable-setuid-sandbox']});
  const page = await browser.newPage();
  await page.goto('https://milubeau.github.io/trang/chaych2.html');
  await page.screenshot({path: 'buddy-screenshot.png'});
  console.log(await page.content()); 
  setTimeout(async () => await await page.close(), 3600000);
  setTimeout(async () => await browser.close(), 3610000);
 
})();
