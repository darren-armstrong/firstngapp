import { FirstngappPage } from './app.po';

describe('firstngapp App', () => {
  let page: FirstngappPage;

  beforeEach(() => {
    page = new FirstngappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
