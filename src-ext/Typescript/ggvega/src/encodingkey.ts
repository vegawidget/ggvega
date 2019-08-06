import * as gs from '../../ggschema/src/index';

export function getEncodingKey(geom: gs.Geom): EncodingKey {
  const key = {
    GeomPoint: getEncodingKeyGeomPoint,
    GeomBar: getEncodingKeyGeomBar
  };

  const fn = key[geom.class];

  try {
    return fn();
  } catch (error) {
    return DefaultEncodingKey;
  }
}

function getEncodingKeyGeomPoint(): EncodingKey {
  const PointEncodingKey: EncodingKey = {
    x: 'x',
    y: 'y',
    stroke: 'colour',
    size: 'size',
    shape: 'shape',
    strokeWidth: 'stroke',
    opacity: 'alpha',
    fill: 'fill'
  };

  return PointEncodingKey;
}

function getEncodingKeyGeomBar(): EncodingKey {
  // logic for this function
  return DefaultEncodingKey;
}

export interface EncodingKey {
  x: 'x';
  y: 'y';
  stroke: 'colour';
  size: 'size';
  shape: 'shape';
  strokeWidth: 'stroke';
  opacity: 'alpha';
  fill: 'fill';
}

export const DefaultEncodingKey: EncodingKey = {
  x: 'x',
  y: 'y',
  stroke: 'colour',
  size: 'size',
  shape: 'shape',
  strokeWidth: 'stroke',
  opacity: 'alpha',
  fill: 'fill'
};
