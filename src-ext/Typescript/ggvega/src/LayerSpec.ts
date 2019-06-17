import * as vlspec from './VlSpec';
import {TranslateEncoding} from './Encoding';

/**
 * This function used to translate the LayerSpec
 * @param layer
 * The layer in ggSpec
 * @param ggSpec
 */
export function TranslateLayer(layer: any, labels: any, data: any, scales: any): vlspec.LayerSpec {
  const layerData: any = data[layer['data']];

  const layerspec: vlspec.LayerSpec = {
    data: {
      name: layer['data']
    },
    mark: TranslateMark(layer['geom']),
    encoding: TranslateEncoding(layer, labels, layerData, scales)
  };

  return layerspec;
}

function TranslateMark(geom: any): vlspec.Mark {
  let mark: vlspec.Mark;
  if (geom['class'] == 'GeomPoint') {
    mark = vlspec.Mark.Point;
  } else {
    mark = vlspec.Mark.Point;
  }

  return mark;
}
