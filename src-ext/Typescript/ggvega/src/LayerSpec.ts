import {TranslateEncoding} from './Encoding';
import {GenericLayerSpec, UnitSpec} from 'vega-lite/build/src/spec';
import {Mark, POINT} from 'vega-lite/build/src/mark';
/**
 * This function used to translate the LayerSpec
 * @param layer
 * The layer in ggSpec
 * @param ggSpec
 */
export function TranslateLayer(layer: any, labels: any, data: any, scales: any): GenericLayerSpec<UnitSpec> | UnitSpec {
  const layerData: any = data[layer['data']];

  const layerspec: UnitSpec = {
    data: {
      name: layer['data']
    },
    mark: TranslateMark(layer['geom']),
    encoding: TranslateEncoding(layer, labels, layerData, scales)
  };

  return layerspec;
}

export function TranslateMark(geom: any): Mark {
  let mark: Mark;
  if (geom['class'] == 'GeomPoint') {
    mark = POINT;
  } else {
    mark = POINT;
  }

  return mark;
}
