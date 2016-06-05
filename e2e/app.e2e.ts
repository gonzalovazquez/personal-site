import { GvWebsiteIoPage } from './app.po';

describe('gv-website-io App', function() {
  let page: GvWebsiteIoPage;

  beforeEach(() => {
    page = new GvWebsiteIoPage();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('gv-website-io works!');
  });
});
