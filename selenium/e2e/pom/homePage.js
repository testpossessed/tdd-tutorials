import AddTaskPage from './addTaskPage.js';
import PageBase from './pageBase.js';

class HomePage extends PageBase {
  constructor(driver) {
    super(driver);
  }

  async addTask() {
    await this.waitForElementWithIdAndClick('addTask');    
    await this.waitForTitleToBe('To Do - Add Task');
    return new AddTaskPage(this.driver);
  }
}

export default HomePage;