import { Builder } from 'selenium-webdriver';
import { By } from 'selenium-webdriver';

var driver = new Builder().forBrowser('chrome').build();

class PageBase {
  constructor() {
    global.driver = driver;
  }

  async navigateTo(url) {
    await driver.get(url);
  }

  async closeBrowser() {
    await driver.quit();
  }

  async findElementById(id) {
    return await driver.findElement(By.id(id));
  }

  async clickOnElementWithId(id) {
    (await this.findElementById(id)).click();
  }

  async findElementByCss(css) {
    return await driver.findElement(By.css(css));
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
    return await driver.getTitle();
  }  
}

export default PageBase;