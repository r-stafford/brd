import { browserHeight, browserWidth } from './Utils';

describe('Utils', () => {

  it('Can determine the browser height', () => {
    expect(browserHeight()).toEqual(0);
  });

  it('Can determine the browser width', () => {
    expect(browserWidth()).toEqual(0);
  });

});
