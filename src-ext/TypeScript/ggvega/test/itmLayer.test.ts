import {itmLayer, ItmLayer} from '../src/itmLayer';
import * as GG from '../../ggschema/src/index';
import * as ggSpec from './ggSpec';
import * as itmSpec from './itmSpec';

describe('itmLayer/itmLayer', () => {
  it('should create intermediate layer', () => {

    let ggLayer: any;
    let ggDatasets: any;
    let itmLayerObject: any;

    ggLayer = ggSpec.iris01.layers[0];
    ggDatasets = ggSpec.iris01.data;
    itmLayerObject = itmSpec.iris01.layer[0];

    expect(itmLayer(ggLayer as GG.Layer, ggDatasets as GG.DatasetObject)).toEqual(itmLayerObject as ItmLayer);

    ggLayer = ggSpec.iris02.layers[0];
    ggDatasets = ggSpec.iris02.data;
    itmLayerObject = itmSpec.iris02.layer[0];

    expect(itmLayer(ggLayer as GG.Layer, ggDatasets as GG.DatasetObject)).toEqual(itmLayerObject as ItmLayer);

    itmLayerObject = itmSpec.barStackedMpg.layer[0] as ItmLayer;

    itmLayerObject.encoding.x.title = undefined;
    itmLayerObject.encoding.y.title = undefined;
    itmLayerObject.encoding.fill.title = undefined;

    expect(
      itmLayer(ggSpec.barStackedMpg.layers[0] as GG.Layer, ggSpec.barStackedMpg.data as GG.DatasetObject)
    ).toEqual(itmLayerObject);

  });
});


