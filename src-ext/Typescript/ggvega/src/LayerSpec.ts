import {TranslateEncoding} from './Encoding';
import {LayerSpec, Mark} from './vlSpec';
import * as ggschema from '../../ggschema/src/ggSpec';

/**
 * This function used to translate the LayerSpec
 * @param layer
 * The layer in ggSpec
 * @param ggSpec
 */
export function TranslateLayer(
  layer: ggschema.Layer,
  labels: ggschema.Labels,
  data: ggschema.Datasets,
  scales: ggschema.Scale[]
): LayerSpec {
  const layerData = data[layer.data];

  const layerspec: LayerSpec = {
    data: {
      name: layer.data
    },
    mark: TranslateMark(layer.geom),
    encoding: TranslateEncoding(layer, labels, layerData, scales)
  };

  return layerspec;
}

export function TranslateMark(geom: ggschema.Geom): Mark {
  let mark: Mark;
  if (geom['class'] == 'GeomPoint') {
    mark = Mark.Point;
  } else {
    throw new Error('geom.class can only be `GeomPoint`');
  }

  return mark;
}
