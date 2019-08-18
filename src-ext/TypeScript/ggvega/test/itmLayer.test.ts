import {itmLayer, ItmLayer} from '../src/itmLayer';
import * as GG from '../../ggschema/src/index';
import * as ggSpec from './ggSpec';
import * as itmSpec from './itmSpec';

describe('itmLayer/itmLayer', () => {
  it('should create intermediate layer', () => {
    const ggLayer = ggSpec.iris01.layers[0];

    const ggDatasets = ggSpec.iris01.data;

    const itmLayerObject = itmSpec.iris01.layer[0];

    expect(itmLayer(ggLayer as GG.Layer, ggDatasets as GG.DatasetsObject)).toEqual(itmLayerObject as ItmLayer);
  });
});
