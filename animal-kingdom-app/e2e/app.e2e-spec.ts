import { AnimalKingdomAppPage } from './app.po';

describe('animal-kingdom-app App', () => {
  let page: AnimalKingdomAppPage;

  beforeEach(() => {
    page = new AnimalKingdomAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
