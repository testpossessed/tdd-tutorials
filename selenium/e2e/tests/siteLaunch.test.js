import { equal } from 'assert';
import  HomePage from '../pom/homePage.js';

describe('Site launches with correct title', function() {
  let homePage;

  before(async function() {
    homePage = new HomePage();
    await homePage.navigateTo('http://localhost:3000');
  });
  
  after(async () => await homePage.closeBrowser());
  
  it('Should have the correct title', async function() {
    const title = await homePage.getTitle();
    equal("To Do", title);      
  });
});