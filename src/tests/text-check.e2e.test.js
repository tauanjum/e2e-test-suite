import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("staging environment test - contains the welcome text", async () => {
    await page.goto("<URL_OF_THE_STAGING_FRONTEND_APP>");
    await page.waitForSelector(".App-welcome-message");
    await delay(10000);
    const text = await page.$eval(".App-welcome-message", (e) => e.textContent);
    expect(text).toContain("Hello from NodeJs server");
  }, 15000);

  afterAll(() => browser.close());
});

function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}
