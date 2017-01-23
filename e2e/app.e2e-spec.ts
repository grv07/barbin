import { Binbar0Page } from './app.po';

describe('binbar0 App', function() {
  let page: Binbar0Page;

  beforeEach(() => {
    page = new Binbar0Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
