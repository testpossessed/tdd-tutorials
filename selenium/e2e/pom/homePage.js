import AddTaskPage from './addTaskPage.js';
import PageBase from './pageBase.js';

class HomePage extends PageBase {
  async addTask() {
    await this.clickOnElementWithId('addTask');
    return new AddTaskPage();
  }
}

export default HomePage;