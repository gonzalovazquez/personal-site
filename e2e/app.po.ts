export class GvWebsiteIoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('gv-website-io-app h1')).getText();
  }
}
