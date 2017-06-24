import { HelloPwa2Page } from './app.po';

describe('hello-pwa2 App', () => {
  let page: HelloPwa2Page;

  beforeEach(() => {
    page = new HelloPwa2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
