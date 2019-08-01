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
  if (geom.class == 'GeomPoint') {
    mark = vl.Mark.Point;
  } else {
    throw new Error('geom.class can only be `GeomPoint`');
  }

  return mark;
}

export function getEncodingKey(geom: gs.GeomPoint): EncodingKey;
export function getEncodingKey(geom: gs.GeomBar): EncodingKey;

export function getEncodingKey(geom: gs.GeomPoint | gs.GeomBar): EncodingKey {
  if (geom.class == 'GeomPoint') return PointEncodingKey;
  if (geom.class == 'GeomBar') return BarEncodingKey;
  else {
    throw new Error();
  }
}

export interface EncodingKey {
  [key: string]: string;
}

const PointEncodingKey: EncodingKey = {
  x: 'x',
  y: 'y',
  colour: 'stroke',
  size: 'size',
  shape: 'shape',
  stroke: 'strokeWidth',
  alpha: 'opacity',
  fill: 'fill'
};
const BarEncodingKey: EncodingKey = {};
