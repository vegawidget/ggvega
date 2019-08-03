import {TranslateLayer, TranslateMark, getEncodingKey, DefaultEncodingKey} from '../src/layer';
import * as ggSpec from './ggSpec';
import * as vlSpec from './vlSpec';

describe('LayerSpec/TranslateLayer', () => {
  it('should translate ggSpec `layer` to vega-lite `layer`', () => {
    const vlLayer = TranslateLayer(
      ggSpec.ggSpec01['layers'][0],
      ggSpec.ggSpec01['labels'],
      ggSpec.ggSpec01['data'],
      ggSpec.ggSpec01['scales']
    );

    expect(vlLayer).toEqual(vlSpec.vlSpec01['layer'][0]);
  });
});

describe('LayerSpec/TranslateMart', () => {
  it('should only accept standard `geom` type', () => {
    expect(() => {
      TranslateMark(ggSpec.invalidSpec04['layers'][0]['geom']);
    }).toThrowError();
  });

  it('should translate ggplot `geom` to vega-lite `mark`', () => {
    expect(TranslateMark(ggSpec.ggSpec01['layers'][0]['geom'])).toEqual(vlSpec.vlSpec01['layer'][0]['mark']);
  });
});
describe('', () => {
  it('should work', () => {
    expect(getEncodingKey({class: 'GeomPoint'})).toEqual(DefaultEncodingKey);
  });
});
