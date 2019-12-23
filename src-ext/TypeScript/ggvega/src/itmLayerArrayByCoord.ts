import * as GG from '../../ggschema/src/index';
import {ItmLayer} from './itmLayer';
import {contains, hasKey} from './utils';

/**
 * Modify an intermediate-layer array by coordinates
 *
 * @remarks
 * This function is used to dispatch according to the ggschema coordinates.
 *
 * **Calls**
 * @see itmLayerArrayByCoordCartesian
 *
 *
 * @param itmLayerArray
 * @param ggCoord
 *
 * @returns `ItmLayer[]`
 */
export function itmLayerArrayByCoord(itmLayerArray: ItmLayer[], ggCoord: GG.Coord): ItmLayer[] {
  // keys: class names
  // values: function to call
  const CoordMap = {
    CoordCartesian: itmLayerArrayByCoordCartesian,
    CoordFlip: itmLayerArrayByCoordFlip
  };

  // validate
  const className = ggCoord.class;
  if (!contains(Object.keys(CoordMap), className)) {
    throw new Error('ggplot object contains unsupported coordinates: ' + className);
  }

  // translate
  return CoordMap[className](itmLayerArray, ggCoord);
}

/**
 * Modify an intermediate-layer array by Cartesian coordinates
 *
 * @remarks
 * Cartesian coordinates are the default; this function is a no-op.
 *
 * **Called by**
 * @see itmLayerArrayByCoord
 *
 * @param itmLayerArray
 * @param ggCoord
 *
 * @returns `ItmLayer[]`
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function itmLayerArrayByCoordCartesian(itmLayerArray: ItmLayer[], gsCoord: GG.Coord): ItmLayer[] {
  // do nothing
  return itmLayerArray;
}

/**
 * Modify an intermediate-layer array by flipped Cartesian coordinates
 *
 * @remarks
 * This function will switch x-encodings with y-encodings
 *
 * **Called by**
 * @see itmLayerArrayByCoord
 *
 * @param itmLayerArray
 * @param ggCoord
 *
 * @returns `ItmLayer[]`
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function itmLayerArrayByCoordFlip(itmLayerArray: ItmLayer[], gsCoord: GG.Coord): ItmLayer[] {
  // exchange encoding.x+ and encoding.y+

  itmLayerArray.map(itmLayer => {
    //NOTE @wenyu: Copy the encoding. Use Object.assign() to  keep safe. Because object is mutable
    const encoding = copy(itmLayer.encoding);

    for (const aesName in itmLayer.encoding) {
      if (hasKey(itmLayer.encoding, aesName)) {
        itmLayer.encoding[replaceXY(aesName)] = encoding[aesName];
      }
    }
  });

  return itmLayerArray;
}

/**
 * This function is to replace x+ to y+
 *
 * @param aesName `string`
 */
function replaceXY(aesName: string): string {
  if (aesName[0] == 'x') return 'y' + aesName.substr(1);

  if (aesName[0] == 'y') return 'x' + aesName.substr(1);

  return aesName;
}

//NOTE@wenyu: Since Object.assign() is not a part of es5. Use this function to copy. Can be moved to ./utils.ts
export function copy(mainObj: any) {
  const objCopy: any = {}; // objCopy will store a copy of the mainObj

  for (const key in mainObj) {
    objCopy[key] = mainObj[key]; // copies each property to the objCopy object
  }
  return objCopy;
}
