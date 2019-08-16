import * as GG from '../../ggschema/src/index';
import {contains} from './utils';

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
  //TODO@wenyu: Add `stroke`, What's `weight`
  const encodingMap = encodingMapDefault;

  // validate
  if (!contains(Object.keys(encodingMap), ggGeomSet.geom.class)) {
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

//TODO@wenyu: keyof maybe a better way than enum. But it doesn't work for Vl.Encoding, because VL.Encoding has too many keys.
export type GGEncodingKey = keyof GG.Mapping;

//TODO@wenyu: Be careful of `weight`, Add it with a correspongding VL.Encoding Aes.
export type VLEncodingKey = 'x' | 'y' | 'stroke' | 'fill' | 'size' | 'strokeWidth' | 'opacity' | 'detail' | 'shape';

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
}

// keys: names of ggplot2 aesthetics
// values: names of Vega-Lite encodings
//TODO@wenyu: Add `stroke`, What's `weight`
const encodingMapDefault: EncodingMap = {
  x: 'x',
  y: 'y',
  colour: 'stroke',
  fill: 'fill',
  size: 'size',
  stroke: 'strokeWidth',
  alpha: 'opacity',
  group: 'detail',
  shape: 'shape'
};
export type VLEncodingKey1 = keyof EncodingMap;
