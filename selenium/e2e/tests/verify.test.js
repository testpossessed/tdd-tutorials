const {By, Builder} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');
const assert = require('assert');

suite(function(env) {
  describe('Verify Selenium Setup', function() {
    let driver;
  
    before(async function() {
      driver = await new Builder().forBrowser('chrome').build();
    });
    
    after(async () => await driver.quit());
    
    it('Should have the correct title', async function() {
      await driver.get('http://localhost:3000');
      
      let title = await driver.getTitle();
      assert.equal("Express", title);      
    });
  });
});