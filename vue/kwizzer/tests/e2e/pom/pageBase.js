let _browser;
let _page;

async function getPage() {
  if (!_page) {
    _page = await _browser.newPage();
  }
  return _page;
}

class PageBase {
  constructor(browser) {
    _browser = browser;
  }

  async navigateTo(url) {
    await (await getPage()).goto(url);
  }

  async close() {
    await (await getPage()).close();
  }

  async getTitle() {
    return await (await getPage()).title();
  }
}

module.exports = { PageBase };
