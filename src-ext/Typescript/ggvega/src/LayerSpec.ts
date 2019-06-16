import * as vlspec from './VlSpec';
import {TranslateEncoding} from './Encoding';

/**
 * This function used to translate the LayerSpec
 * @param layer
 * The layer in ggSpec
 * @param ggSpec
 */
export function TranslateLayer(layer: any, ggSpec: any): vlspec.LayerSpec {
  const layerspec: vlspec.LayerSpec = {
    data: {
      name: layer['data']
    },
    mark: TranslateMark(layer['geom']),
    encoding: TranslateEncoding(layer, ggSpec)
  };

  return layerspec;
}

function TranslateMark(geom: any): vlspec.BoxPlotDefClass {
  let type: vlspec.BoxPlot;
  if (geom['class'] == 'GeomPoint') {
    type = vlspec.BoxPlot.Point;
  } else {
    type = vlspec.BoxPlot.Point;
  }

  const mark: vlspec.BoxPlotDefClass = {
    type: type
  };

  return mark;
}
