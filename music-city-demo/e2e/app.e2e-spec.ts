import { MusicCityDemoPage } from './app.po';

describe('music-city-demo App', () => {
  let page: MusicCityDemoPage;

  beforeEach(() => {
    page = new MusicCityDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
