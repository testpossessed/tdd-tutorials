import { Builder } from 'selenium-webdriver';
import assert from 'assert';
import HomePage from '../pom/homePage.js';

describe('Add Task', function() {
  let homePage;
  let addTaskPage;

  before(async function() {
    const driver = new Builder().forBrowser('chrome').build();
    homePage = new HomePage(driver);
    homePage.navigateTo('http://localhost:3000');    
    addTaskPage = await homePage.addTask();
  });

  after(async () => await homePage.closeBrowser());

  it('Should navigate to correct page when user requests Add Task', async function() {
    const title = addTaskPage.getTitle('To Do - Add Task');
    assert.equal('To Do - Add Task', title);
  });

  it('Should require a name for the task', async function() {
    const nameField = await addTaskPage.findElementByCss('form input#taskName');
    const requiredAttribute = nameField.getAttribute('required');
    assert.ok(requiredAttribute);
  });
});