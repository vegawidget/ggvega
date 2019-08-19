import * as GG from '../../ggschema/src/index';

import {ItmLayer} from './itmLayer';
import {VLMapping} from './itmEncodingObject';

/**
 * Modify a layer array according to a scale array
 *
 * I think the match-and-delete strategy for scales can be very similar
 * to the one used in {@link itmLayerArrayByLabelsObject}.
 *
 * The obvious difference is that scales are in array, rather than in an object.
 * Another difference is that a scale has an element called `aesthetics` that
 * can make it simpler to match to the encoding key. Perhaps {@link contains}
 * could be used.
 *
 * **Called by**
 * @see layerArray
 *
 * @param itmLayerArray
 * @param ggScaleArray
 *
 * @returns `ItmLayer[]`
 */
export function itmLayerArrayByScalesArray(itmLayerArray: ItmLayer[], ggScaleArray: GG.Scale[]): ItmLayer[] {
  itmLayerArray.map((itmLayer: ItmLayer) => {
    for (const encodingKey in itmLayer.encoding) {
      ggScaleArray.map((ggScale: GG.Scale) => {
        //NOTE @wenyu:https://love2dev.com/blog/javascript-remove-from-array/

        for (let i = 0; i < ggScale.aesthetics.length; i++) {
          if (ggScale.aesthetics[i] === encodingKey) {
            itmLayer.encoding[encodingKey].title = ggScale.name;
            if (ggScale.class === 'ScaleContinuousPosition') {
              (itmLayer.encoding[encodingKey] as VLMapping).scale = ggScale.transform;
            }
            ggScale.aesthetics.splice(i, 1);
          }
        }
      });
    }
  });

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
