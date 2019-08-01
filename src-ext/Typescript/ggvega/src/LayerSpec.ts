import {TranslateEncoding} from './Encoding';
import * as vl from './vlSpec';
import * as gs from '../../ggschema/src/ggSpec';

/**
 * This function used to translate the LayerSpec
 * @param layer
 * The layer in ggSpec
 * @param ggSpec
 */
export function TranslateLayer(
  layer: gs.Layer,
  labels: gs.Labels,
  data: gs.Datasets,
  scales: gs.Scale[]
): vl.LayerSpec {
  const layerData = data[layer.data];

  const layerspec: vl.LayerSpec = {
    data: {
      name: layer.data
    },
    mark: TranslateMark(layer.geom),
    encoding: TranslateEncoding(layer, labels, layerData, scales)
  };

  return layerspec;
}

export function TranslateMark(geom: gs.Geom): vl.Mark {
  let mark: vl.Mark;
  if (geom['class'] == 'GeomPoint') {
    mark = vl.Mark.Point;
  } else {
    throw new Error('geom.class can only be `GeomPoint`');
  }

  return mark;
}
