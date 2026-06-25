const { chromium } = require('playwright');

async function getProphetPage() {
    const browser = await chromium.connectOverCDP('http://localhost:9222');

    const context = browser.contexts()[0];

    const page = context.pages()[0] || await context.newPage();

    await page.bringToFront();

    await page.goto('https://www.prophet.build/');

    return page;
}

module.exports = { getProphetPage };