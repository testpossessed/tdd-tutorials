import { Builder } from 'selenium-webdriver';
import { equal } from 'assert';
import HomePage from '../pom/homePage.js';

describe('Add Task', function() {
  let homePage;

  before(async function() {
    const driver = new Builder().forBrowser('chrome').build();
    homePage = new HomePage(driver);
    homePage.navigateTo('http://localhost:3000');
  });

  after(async () => await homePage.closeBrowser());

  it('Should navigate to correct page when user requests Add Task', async function() {
    const addTaskPage = await homePage.addTask();
    const title = await addTaskPage.waitForTitleToBe('To Do - Add Task');
    equal('To Do - Add Task', title);
  });
});