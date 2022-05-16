import puppeteer from "puppeteer";

describe("App.js", () => {
  let browser;
  let page;

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
  });

  it("contains the welcome text", async () => {
    await page.goto("https://ganes-constellation.github.io/sample-react-app/");
    await page.waitForSelector(".App-welcome-message");
    await delay(4000);
    const text = await page.$eval(".App-welcome-message", (e) => e.textContent);
    expect(text).toContain("Hello from NodeJs server");
  });

  afterAll(() => browser.close());
});

function delay(time) {
  return new Promise(function(resolve) { 
      setTimeout(resolve, time)
  });
}