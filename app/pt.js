const puppeteer = require('puppeteer');

(async () => {
  // Launch the browser and open a new blank page
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();

    // Navigate the page to a URL
    await page.goto('http://localhost:4200/login');

    // Set screen size
    await page.setViewport({width: 1080, height: 1024});

    // Type into search box
    await page.type('.email-input-box', 'smitkumar97@email.io');
    await page.type('.password-input-box', 'smit@123345');

    // Wait and click on first result
    const submitButton = '.submit-btn';
    await page.waitForSelector(submitButton);
    await page.click(submitButton);

    // Locate the full title with a unique string
  const textSelector = await page.waitForSelector(
    'text/Customize and automate'
  );
  const fullTitle = await textSelector?.evaluate(el => el.textContent);

  // Print the full title
  console.log('The title of this blog post is "%s".', fullTitle);

  await browser.close();
})();