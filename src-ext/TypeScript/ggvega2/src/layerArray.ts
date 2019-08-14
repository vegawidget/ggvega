import * as VL from './vlSpec';
import * as GG from '../../ggschema/src/index';
import {itmLayer, ItmLayer} from './itmLayer';
import {itmLayerArrayByLabelsObject} from './itmLayerArrayByLabels';
import {itmLayerArrayByScalesArray} from './itmLayerArrayByScales';
import {itmLayerArrayByCoord} from './itmLayerArrayByCoord';

export function layerArray(
  ggData: GG.Datasets,
  ggLayerArray: GG.Layer[],
  ggScaleArray: GG.Scale[],
  ggLabelObject: GG.Labels,
  ggCoordinates: GG.Coord
): VL.LayerSpec[] {
  if (ggLayerArray.length == 0) {
    throw new Error('ggplot object has no layers, requires at least one layer');
  }

  let itmLayerArray: ItmLayer[] = ggLayerArray.map((ggLayer: GG.Layer) => {
    return itmLayer(ggLayer, ggData);
  });

  itmLayerArray = itmLayerArrayByLabelsObject(itmLayerArray, ggLabelObject);

  itmLayerArray = itmLayerArrayByScalesArray(itmLayerArray, ggScaleArray);

  itmLayerArray = itmLayerArrayByCoord(itmLayerArray, ggCoordinates);

  // change encoding-key namespace from ggplot2 to Vega-Lite
  const layerArray: VL.LayerSpec[] = itmLayerArray.map(layerByItmLayer);

  return layerArray;
}

function layerByItmLayer(itmLayer: ItmLayer): VL.LayerSpec {
  // create new encoding
  var encoding: VL.Encoding = {};

  // loop over aesthetic names in itmLayerEncoding
  for (const aesName in itmLayer.encoding) {
    if (Object.prototype.hasOwnProperty.call(itmLayer.encoding, aesName)) {
      // get the encoding name, add to the encoding
      // var encodingName = encodingNameByGeom(aesName, itmLayer.geom);
      // encoding[encodingName] = itmLayer.encoding[aesName];
    }
  }

  const layer: VL.LayerSpec = {
    data: itmLayer.data,
    mark: itmLayer.mark,
    encoding: encoding
  };

  return layer;
}
