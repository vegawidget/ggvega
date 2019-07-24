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

  const mark: Mark | undefined = TranslateMark(layer['geom']);

  const layerspec: LayerSpec = {
    data: {
      name: layer['data']
    },
    mark: mark,
    encoding: TranslateEncoding(layer, labels, layerData, scales, mark)
  };

  return layerspec;
}

export function TranslateMark(geom: any): Mark {
  let mark: Mark;

  if (geom['class'] == 'GeomPoint') {
    mark = Mark.Point;
  }

  if (geom['class'] == 'GeomBar') {
    mark = Mark.Bar;
  } else {
    mark = Mark.Point;
  }

  return mark;
}
