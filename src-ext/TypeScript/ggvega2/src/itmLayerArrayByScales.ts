import * as GG from '../../ggschema/src/index';
import {ItmLayer} from './itmLayer';

export function itmLayerArrayByScalesArray(itmLayerArray: ItmLayer[], ggScaleArray: GG.Scale[]): ItmLayer[] {
  // suspect we will need metadata
  // why? - looking at this later, I can't remember
  // loop through the layers
  // within each layer:
  //   - get the encoding keys (aesthetic names)
  //   - get the scale keys (aesthetic names)
  //   - for each scale key:
  //       - if there is a match with an encoding key (first match that is not value-only):
  //           -  set the scale on the encoding
  //           -  set the encoing name to the scale name
  //           -  remove the scale from the scale array
  return itmLayerArray;
}
