import * as GG from '../../ggschema/src/index';
import {ItmLayer} from './itmLayer';
import {contains} from './utils';

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
    CoordCartesian: itmLayerArrayByCoordCartesian
  };

  // validate
  const className: string = ggCoord.class;
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
function itmLayerArrayByCoordCartesian(itmLayerArray: ItmLayer[], gsCoord: gs.Coord[]): ItmLayer[] {
  // do nothing
  return itmLayerArray;
}
