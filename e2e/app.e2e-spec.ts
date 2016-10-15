import { TddFrontendPage } from './app.po';

describe('tdd-frontend App', function() {
  let page: TddFrontendPage;

  beforeEach(() => {
    page = new TddFrontendPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
