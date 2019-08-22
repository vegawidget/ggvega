import {encodingValueSize} from '../src/encodingValue';

describe('encodingValue/encodingValueSize', () => {
  it('should translate string/number/undefined to number', () => {
    expect(encodingValueSize('32')).toEqual(32 * 20);
  });
});
