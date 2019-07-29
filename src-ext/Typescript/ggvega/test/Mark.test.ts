import {TranslatePointShape, TranslatePointSize} from '../src/Mark';

describe('Mark/TranslatePointShape', () => {
  it('should tranlate ggSpec point `shape` to vega-lite spec point `shape`', () => {
    expect(TranslatePointShape(1)).toEqual('square');
  });
});

describe('Mark/TranslatePointSize', () => {
  it('should tranlate ggSpec `size` to vega-lite spec `size`', () => {
    expect(TranslatePointSize(1)).toEqual(20);
  });
});
