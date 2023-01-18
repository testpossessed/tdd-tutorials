import AddTaskPage from './addTaskPage.js';
import PageBase from './pageBase.js';

class HomePage extends PageBase {
  constructor(driver) {
    super(driver);
  }

  async addTask() {
    await this.waitForElementWithIdAndClick('addTask');
    return new AddTaskPage(this.driver);
  }
}

export default HomePage;