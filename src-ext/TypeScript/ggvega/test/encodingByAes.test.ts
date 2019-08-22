import {encodingByAes} from '../src/encodingByAes';
import * as VL from '../src/vlSpec';

describe('encodingByAes/encodingByAes', () => {
  it('should create Encoding based on aes', () => {
    expect(encodingByAes('x')).toEqual({} as VL.XClass);
  });
});
