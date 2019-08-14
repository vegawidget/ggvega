import * as GG from '../../ggschema/src/index';
import {ItmLayer} from './itmLayer';
import {contains} from './util';

export function itmLayerArrayByCoord(itmLayerArray: ItmLayer[], ggCoord: GG.Coord): ItmLayer[] {
  // keys: class names
  // values: function to call
  const CoordMap = {
    CoordCartesian: itmLayerArrayByCoordCartesian
  };

  // validate
  const className: 'CoordCartesian' = ggCoord.class;
  if (!contains(Object.keys(CoordMap), className)) {
    throw new Error('ggplot object contains unsupported coordinates: ' + className);
  }

  // translate
  else return CoordMap[className](itmLayerArray, ggCoord);
}

function itmLayerArrayByCoordCartesian(itmLayerArray: ItmLayer[], gsCoord: GG.Coord): ItmLayer[] {
  // do nothing
  return itmLayerArray;
}
