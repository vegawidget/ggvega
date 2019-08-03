import {TranslateEncoding} from './encoding';
import * as vl from './vlSpec';
import * as gs from '../../ggschema/src/gsSpec';

/**
 * @param gsLayer
 * @param labels
 * @param data
 * @param scales
 */
export function TranslateLayer(
  gsData: gs.Datasets,
  gsLayer: gs.Layer,
  gsScales: gs.Scale[],
  gsLabels: gs.Labels
): vl.LayerSpec {
  const layerData = gsData[gsLayer.data];

  const layerspec: vl.LayerSpec = {
    data: {
      name: gsLayer.data
    },
    mark: TranslateMark(gsLayer.geom),
    encoding: TranslateEncoding(gsLayer, gsLabels, layerData, gsScales)
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

export function getEncodingKey(geom: gs.Geom): EncodingKey {
  const key = {
    GeomPoint: getEncodingKeyGeomPoint,
    GeomBar: getEncodingKeyGeomBar
  };

  const fn = key[geom.class];

  return fn();
}

function getEncodingKeyGeomPoint(): EncodingKey {
  // logic for this function
  return DefaultEncodingKey;
}

function getEncodingKeyGeomBar(): EncodingKey {
  // logic for this function
  return DefaultEncodingKey;
}

export interface EncodingKey {
  [key: string]: string;
}

export const DefaultEncodingKey: EncodingKey = {
  x: 'x',
  y: 'y',
  colour: 'stroke',
  size: 'size',
  shape: 'shape',
  stroke: 'strokeWidth',
  alpha: 'opacity',
  fill: 'fill'
};
