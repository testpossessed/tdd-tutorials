const { chromium } = require("playwright");
const { expect } = require("chai");
const { HomePage } = require("./pom/homePage");

describe("On Site Launch", () => {
  let browser;
  let homePage;

  before(async () => {
    browser = await chromium.launch();
    homePage = new HomePage(browser);
    await homePage.navigateTo("http://localhost:8080");
  });

  after(async () => {
    await homePage.close();
    await browser.close();
  });

  it("Should have the correct title", async () => {
    expect(await homePage.getTitle()).to.equal("Kwizzer");
  });
});
