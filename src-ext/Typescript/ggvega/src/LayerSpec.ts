import {TranslateEncoding} from './Encoding';
import {LayerSpec, Mark} from './vlSpec';
/**
 * This function used to translate the LayerSpec
 * @param layer
 * The layer in ggSpec
 * @param ggSpec
 */
export function TranslateLayer(layer: any, labels: any, data: any, scales: any): LayerSpec {
  const layerData: any = data[layer['data']];

  const layerspec: LayerSpec = {
    data: {
      name: layer['data']
    },
    mark: TranslateMark(layer['geom']),
    encoding: TranslateEncoding(layer, labels, layerData, scales)
  };

  return layerspec;
}

export function TranslateMark(geom: any): Mark | undefined {
  let mark: Mark | undefined;
  if (geom['class'] == 'GeomPoint') {
    mark = Mark.Point;
  } else {
    mark = undefined;
  }

  return mark;
}
