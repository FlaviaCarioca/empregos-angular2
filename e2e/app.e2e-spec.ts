import { EmpregosAngular2Page } from './app.po';

describe('empregos-angular2 App', function() {
  let page: EmpregosAngular2Page;

  beforeEach(() => {
    page = new EmpregosAngular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
