import { Builder } from 'selenium-webdriver';
import { equal } from 'assert';
import  HomePage from '../pom/homePage.js';

describe('Site launches with correct title', function() {
  let homePage;

  before(async function() {
    const driver = new Builder().forBrowser('chrome').build();
    homePage = new HomePage(driver);
    await homePage.navigateTo('http://localhost:3000');
  });
  
  after(async () => {
    await homePage.closeBrowser();
  });
  
  it('Should have the correct title', async function() {
    const title = await homePage.getTitle();
    equal("To Do", title);      
  });
});