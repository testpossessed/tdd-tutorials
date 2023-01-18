import { By, until } from 'selenium-webdriver';

class PageBase {

  constructor(driver) {
    this.driver = driver;
  }

  async navigateTo(url) {
    await this.driver.get(url);
  }

  async closeBrowser() {
    await this.driver.quit();
  }

  async findElementById(id) {
    return await this.driver.findElement(By.id(id));
  }

  async clickOnElementWithId(id) {
    (await this.findElementById(id)).click();
  }

  async findElementByCss(css) {
    return await this.driver.findElement(By.css(css));
  }

  async clickOnElementWithCss(css) {
    (await this.findElementByCss(css)).click()
  }

  async enterTextById(id, text) {
    (await this.findElementById(id)).sendKeys(text);
  }

  async enterTextByCss(css, text) {
    (await this.findElementByCss(css)).sendKeys(text);
  }
  
  async getTitle() {
    return await this.driver.getTitle();
  }  

  async waitUntilUrlIs(url) {
    await this.driver.wait(until.urlIs(url));
  }

  async waitUntilUrlMatches(regEx) {
    await this.driver.wait(until.urlMatches(regEx));
  }

  async waitUntilTitleIs(title) {
    await this.driver.wait(until.titleIs(title));
  }

  async waitUntilTitleMatches(regEx) {
    await this.driver.wait(until.titleMatches(regEx));
  }

  async waitForElementWithId(id) {
    return await this.driver.wait(until.elementLocated(By.id(id)));
  }

  async waitForElementWithCss(css) {
    return await this.driver.wait(until.elementLocated(By.css(id)));
  }

  async waitForElementWithIdAndClick(id) {
    (await this.waitForElementWithId(id)).click();
  }

  async waitForElementWithCssAndClick(css) {
    (await this.waitForElementWithCss(css)).click();
  }  

  async waitForElementWithIdAndEnterText(id, text) {
    (await this.waitForElementWithId(id)).sendKeys(text);
  }

  async waitForElementWithCssAndEnterText(css, text) {
    (await this.waitForElementWithCss(css)).sendKeys(text);
  }

  async waitForTitleToBe(title) {
    await this.waitUntilTitleIs(title);
    return this.getTitle();
  }

  async waitForTitleToMatch(regEx) {
    await this.waitUntilTitleMatches(regEx);
    return this.getTitle();
  }

  async waitForUrlToBe(url) {
    await this.waitUntilUrlIs(url);
    return await this.driver.getCurrentUrl();
  }

  async waitForUrlToMatch(regEx) {
    await this.waitUntilUrlMatches(regEx);
    return await this.driver.getCurrentUrl();
  }
}

export default PageBase;