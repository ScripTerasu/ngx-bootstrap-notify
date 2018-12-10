import { NgxBootstrapNotifyDemoPage } from './app.po';

describe('ngx-bootstrap-notify-demo App', () => {
  let page: NgxBootstrapNotifyDemoPage;

  beforeEach(() => {
    page = new NgxBootstrapNotifyDemoPage ();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
