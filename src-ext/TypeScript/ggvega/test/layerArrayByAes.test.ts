import {layerArrayByAes, layerByItmLayer} from '../src/layerArrayByAes';
import * as GG from '../../ggschema/src/index';
import * as VL from '../src/vlSpec';
import * as ggSpec from './ggSpec';
import * as itmSpec from './itmSpec';
import * as vlSpec from './vlSpec';
import {itmLayer, ItmLayer} from '../src/itmLayer';

describe('layerArray', () => {
  it('should create an intermediate `encoding` object using a `mapping` object', () => {

    let ggDatasetObject;
    let ggLayerArray;
    let ggScaleArray;
    let ggLabelsObject;
    let ggCoordCartesian;
    let vlLayerSpecArray;

    ggDatasetObject = ggSpec.iris01.data;
    ggLayerArray = ggSpec.iris01.layers;
    ggScaleArray = ggSpec.iris01.scales;
    ggLabelsObject = ggSpec.iris01.labels;
    ggCoordCartesian = ggSpec.iris01.coordinates;
    vlLayerSpecArray = vlSpec.iris01.layer;

    /*     expect(
          layerArrayByAes(
            ggDatasetObject as GG.DatasetObject,
            ggLayerArray as GG.Layer[],
            ggScaleArray as GG.Scale[],
            ggLabelsObject as GG.LabelObject,
            ggCoordCartesian as GG.CoordCartesian
          )
        ).toEqual(vlLayerSpecArray as VL.LayerSpec[]); */

    ggDatasetObject = ggSpec.iris02.data;
    ggLayerArray = ggSpec.iris02.layers;
    ggScaleArray = ggSpec.iris02.scales;
    ggLabelsObject = ggSpec.iris02.labels;
    ggCoordCartesian = ggSpec.iris02.coordinates;
    vlLayerSpecArray = vlSpec.iris02.layer;

    /*     expect(
          layerArrayByAes(
            ggDatasetObject as GG.DatasetObject,
            ggLayerArray as GG.Layer[],
            ggScaleArray as GG.Scale[],
            ggLabelsObject as GG.LabelObject,
            ggCoordCartesian as GG.CoordCartesian
          )
        ).toEqual(vlLayerSpecArray as VL.LayerSpec[]); */

  });
});


describe('layer', () => {

  console.log(JSON.stringify(itmSpec.barStackedMpg.layer[0], null, 2));

  expect(
    layerByItmLayer(itmSpec.barStackedMpg.layer[0] as ItmLayer)
  ).toEqual(
    vlSpec.barStackedMpg.layer[0] as VL.LayerSpec
  );

});
