const { chromium } = require("playwright");
const { expect } = require("chai");

describe("On Site Launch", () => {
  let browser;
  let page;

  before(async () => {
    browser = await chromium.launch();
    page = await browser.newPage();
    await page.goto("http://localhost:8080");
  });

  after(async () => {
    await page.close();
    await browser.close();
  });

  it("Should have the correct title", async () => {
    expect(await page.title()).to.equal("Kwizzer");
  });

});
