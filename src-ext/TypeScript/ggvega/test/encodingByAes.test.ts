import {encodingByAes} from '../src/encodingByAes';
import * as VLChanDef from 'vega-lite/src/channeldef';

describe('encodingByAes/encodingByAes', () => {
  it('should create Encoding based on aes', () => {
    expect(encodingByAes('x')).toEqual({type: 'nominal'} as VLChanDef.PositionFieldDef<VLChanDef.Field>);
  });
});
