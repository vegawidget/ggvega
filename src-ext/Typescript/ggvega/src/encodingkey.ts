import * as gs from '../../ggschema/src/index';

export function getEncodingKey(geom: gs.Geom): Map<VlKey, GsKey> {
  const EncodingKey = new Map<string, Function>([
    ['GeomPoint', getEncodingKeyGeomPoint],
    ['GeomBar', getEncodingKeyGeomBar]
  ]);

  const fn = EncodingKey.get(geom.class);

  if (fn) return fn();
  else return DefaultEncodingKey;
}

function getEncodingKeyGeomPoint(): Map<VlKey, GsKey> {
  const PointEncodingKey = new Map<VlKey, GsKey>([
    [VlKey.X, GsKey.X],
    [VlKey.Y, GsKey.Y],
    [VlKey.Stroke, GsKey.Colour],
    [VlKey.Size, GsKey.Size],
    [VlKey.Shape, GsKey.Shape],
    [VlKey.StrokeWidth, GsKey.Stroke],
    [VlKey.Opacity, GsKey.Alpha],
    [VlKey.Fill, GsKey.Fill]
  ]);

  return PointEncodingKey;
}

function getEncodingKeyGeomBar(): Map<VlKey, GsKey> {
  // logic for this function
  return DefaultEncodingKey;
}

export enum VlKey {
  X = 'x',
  Y = 'y',
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

export const DefaultEncodingKey = new Map<VlKey, GsKey>([
  [VlKey.X, GsKey.X],
  [VlKey.Y, GsKey.Y],
  [VlKey.Stroke, GsKey.Colour],
  [VlKey.Size, GsKey.Size],
  [VlKey.Shape, GsKey.Shape],
  [VlKey.StrokeWidth, GsKey.Stroke],
  [VlKey.Opacity, GsKey.Alpha],
  [VlKey.Fill, GsKey.Fill]
]);
