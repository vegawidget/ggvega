import * as gs from '../../ggschema/src/index';

export function getEncodingKey(geom: gs.Geom): EncodingKey {
  const EncodingKey = {
    GeomPoint: getEncodingKeyGeomPoint,
    GeomBar: getEncodingKeyGeomBar
  };

  const key:'GeomPoint'|'GeomBar'=geom.geom.class
  const fn = EncodingKey[key};

  if (fn) return fn();
  else return DefaultEncodingKey;
}

export enum VlKey {
  x = 'x',
  y = 'y',
  Stroke = 'stroke',
  Size = 'size',
  Shape = 'shape',
  StrokeWidth = 'strokeWidth',
  Opacity = 'opacity',
  Fill = 'fill'
}

export enum GGKey {
  X = 'x',
  Y = 'y',
  Colour = 'colour',
  Size = 'size',
  Shape = 'shape',
  Stroke = 'stroke',
  Alpha = 'alpha',
  Fill = 'fill'
}

function getEncodingKeyGeomPoint(): EncodingKey {
  const PointEncodingKey: EncodingKey = {
    x: GGKey.X,
    y: GGKey.Y,
    stroke: GGKey.Colour,
    size: GGKey.Size,
    shape: GGKey.Shape,
    strokeWidth: GGKey.Stroke,
    opacity: GGKey.Alpha,
    fill: GGKey.Fill
  };

  return PointEncodingKey;
}

function getEncodingKeyGeomBar(): EncodingKey {
  // logic for this function
  return DefaultEncodingKey;
}

export const DefaultEncodingKey: EncodingKey = {
  x: GGKey.X,
  y: GGKey.Y,
  stroke: GGKey.Colour,
  size: GGKey.Size,
  shape: GGKey.Shape,
  strokeWidth: GGKey.Stroke,
  opacity: GGKey.Alpha,
  fill: GGKey.Fill
};

export interface EncodingKey {
  x: GGKey;
  y: GGKey;
  stroke: GGKey;
  size: GGKey;
  shape: GGKey;
  strokeWidth: GGKey;
  opacity: GGKey;
  fill: GGKey;
}
