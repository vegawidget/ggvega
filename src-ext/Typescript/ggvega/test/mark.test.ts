import {TranslatePointShape} from '../src/Mark';

import * as mark from '../src/Mark';

describe('Mark/TranslatePointShape', () => {
  it('should translate shapes correctly', () => {
    expect(mark.TranslatePointShape(0)).toEqual('circle');
  });
});
