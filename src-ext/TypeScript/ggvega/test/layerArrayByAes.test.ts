import {layerArrayByAes} from '../src/layerArrayByAes';
import * as GG from '../../ggschema/src/index';
import * as VL from '../src/vlSpec';
import * as ggSpec from './ggSpec';
import * as vlSpec from './vlSpec';

describe('itmEncodingObject/itmEncodingObjectByMappingObject', () => {
  it('should create an intermediate `encoding` object using a `mapping` object', () => {
    let ggDatasetsObject;

    let ggLayerArray;

    let ggScaleArray;

    let ggLabelsObject;

    let ggCoordCartesian;

    let vlLayerSpecArray;

    ggDatasetsObject = ggSpec.iris01.data;

    ggLayerArray = ggSpec.iris01.layers;

    ggScaleArray = ggSpec.iris01.scales;

    ggLabelsObject = ggSpec.iris01.labels;

    ggCoordCartesian = ggSpec.iris01.coordinates;

    vlLayerSpecArray = vlSpec.iris01.layer;

    expect(
      layerArrayByAes(
        ggDatasetsObject as GG.DatasetsObject,
        ggLayerArray as GG.Layer[],
        ggScaleArray as GG.Scale[],
        ggLabelsObject as GG.LabelObject,
        ggCoordCartesian as GG.CoordCartesian
      )
    ).toEqual(vlLayerSpecArray as VL.LayerSpec[]);

    ggDatasetsObject = ggSpec.iris02.data;

    ggLayerArray = ggSpec.iris02.layers;

    ggScaleArray = ggSpec.iris02.scales;

    ggLabelsObject = ggSpec.iris02.labels;

    ggCoordCartesian = ggSpec.iris02.coordinates;

    vlLayerSpecArray = vlSpec.iris02.layer;

    expect(
      layerArrayByAes(
        ggDatasetsObject as GG.DatasetsObject,
        ggLayerArray as GG.Layer[],
        ggScaleArray as GG.Scale[],
        ggLabelsObject as GG.LabelObject,
        ggCoordCartesian as GG.CoordCartesian
      )
    ).toEqual(vlLayerSpecArray as VL.LayerSpec[]);
  });
});
