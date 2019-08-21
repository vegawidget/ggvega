import * as GG from '../../ggschema/src/index';
import {contains} from './utils';

//NOTE @wenyu: keyof maybe a better way than enum. But it doesn't work for Vl.Encoding, because VL.Encoding has too many keys.
export type GGEncodingKey = keyof GG.MappingObject;
// these are ggplot aesthetic names
// export type GGEncodingKey = 'x' | 'y' | 'colour' | 'size' | etc.

export type VLEncodingKey = 'x' | 'y' | 'stroke' | 'fill' | 'size' | 'strokeWidth' | 'opacity' | 'detail' | 'shape';
// these are Vega-Lite encoding names
// export type VLEncodingKey = valueOf EncodingMap

//NOTE @wenyu: To extend EncodingMap<key,value>: key is GGEncodingKey, value is VLEncodingKey. If value is `null`, means VLEncodingKey doesn't have this key.
interface EncodingMap {
  x: 'x';
  y: 'y';
  colour: 'stroke';
  fill: 'fill';
  size: 'size' | 'strokeWidth';
  stroke: 'strokeWidth';
  alpha: 'opacity';
  group: 'detail';
  shape: 'shape';
  weight: null;
}

// keys: names of ggplot2 aesthetics
// values: names of Vega-Lite encodings
const encodingMapDefault: EncodingMap = {
  x: 'x',
  y: 'y',
  colour: 'stroke',
  fill: 'fill',
  size: 'size',
  stroke: 'strokeWidth',
  alpha: 'opacity',
  group: 'detail',
  shape: 'shape',
  weight: null
};

/**
 * Get encoding name from aesthetic name
 *
 * @remarks
 * The mapping of a ggplot aesthetic name to an encoding name depends
 * on the Geom under consideration.
 *
 * **Called by**
 * @see layerByItmLayer
 *
 * @param aesName - `GGEncodingKey` ggplot aesthetic-name
 * @param ggGeom - `GG.GeomSet` ggschema GeomSet object
 *
 * @returns
 */
export function encodingNameByGeom(aesName: GGEncodingKey, ggGeomSet: GG.GeomSet): VLEncodingKey {
  // keys: names of ggplot2 aesthetics
  // values: names of Vega-Lite encodings
  //NOTE @wenyu: Add `stroke`, What's `weight`
  const encodingMap = encodingMapDefault;

  // validate
  if (!contains(Object.keys(encodingMap), aesName)) {
    throw new Error('ggplot object contains unsupported aesthetic: ' + aesName);
  }

  // translate

  // exceptions
  if (ggGeomSet.geom.class == 'GeomLine') {
    encodingMap.size = 'strokeWidth';
  }

  if (ggGeomSet.geom.class == 'GeomBar') {
    encodingMap.size = 'strokeWidth';
  }

  return encodingMap[aesName] as VLEncodingKey;
}
