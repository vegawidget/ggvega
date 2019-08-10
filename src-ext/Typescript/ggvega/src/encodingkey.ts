import * as gs from '../../ggschema/src/index';

export function getEncodingKey(geom: gs.Geom): EncodingKey {
  const EncodingKey = {
    GeomPoint: getEncodingKeyGeomPoint,
    GeomBar: getEncodingKeyGeomBar
  };

  const fn = EncodingKey[geom.class];

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

export enum GsKey {
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
    x: GsKey.X,
    y: GsKey.Y,
    stroke: GsKey.Colour,
    size: GsKey.Size,
    shape: GsKey.Shape,
    strokeWidth: GsKey.Stroke,
    opacity: GsKey.Alpha,
    fill: GsKey.Fill
  };

  return PointEncodingKey;
}

function getEncodingKeyGeomBar(): EncodingKey {
  // logic for this function
  return DefaultEncodingKey;
}

export const DefaultEncodingKey: EncodingKey = {
  x: GsKey.X,
  y: GsKey.Y,
  stroke: GsKey.Colour,
  size: GsKey.Size,
  shape: GsKey.Shape,
  strokeWidth: GsKey.Stroke,
  opacity: GsKey.Alpha,
  fill: GsKey.Fill
};

export interface EncodingKey {
  x: GsKey;
  y: GsKey;
  stroke: GsKey;
  size: GsKey;
  shape: GsKey;
  strokeWidth: GsKey;
  opacity: GsKey;
  fill: GsKey;
}
