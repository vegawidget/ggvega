import {layerArrayByAes} from '../src/layerArrayByAes';
import * as GG from '../../ggschema/src/index';
import * as VL from '../src/vlSpec';
import * as ggSpec from './ggSpec';
import * as vlSpec from './vlSpec';

describe('itmEncodingObject/itmEncodingObjectByMappingObject', () => {
  it('should create an intermediate `encoding` object using a `mapping` object', () => {
    const ggDatasetsObject = ggSpec.iris01.data;

    const ggLayerArray = ggSpec.iris01.layers;

    const ggScaleArray = ggSpec.iris01.scales;

    const ggLabelsObject = ggSpec.iris01.labels;

    const ggCoordCartesian = ggSpec.iris01.coordinates;

    const vlLayerSpecArray = vlSpec.iris01.layer;

    expect(
      layerArrayByAes(
        ggDatasetsObject as GG.DatasetsObject,
        ggLayerArray as GG.Layer[],
        ggScaleArray as GG.Scale[],
        ggLabelsObject as GG.Labels,
        ggCoordCartesian as GG.CoordCartesian
      )
    ).toEqual(vlLayerSpecArray as VL.LayerSpec[]);
  });
});
