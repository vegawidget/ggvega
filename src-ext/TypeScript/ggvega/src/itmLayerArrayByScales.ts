import * as GG from '../../ggschema/src/index';

import {ItmLayer} from './itmLayer';
import {VLEncodingField} from './itmEncodingObject';
import {hasKey, contains} from './utils';

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
  const scaleMap = {
    ScaleContinuousPosition: scaleContinuousPosition
  };

  itmLayerArray.map((itmLayer: ItmLayer) => {
    for (const encodingKey in itmLayer.encoding) {
      if (hasKey(itmLayer.encoding, encodingKey)) {
        ggScaleArray.map((ggScale: GG.Scale) => {
          //NOTE @wenyu:https://love2dev.com/blog/javascript-remove-from-array/

          for (let i = 0; i < ggScale.aesthetics.length; i++) {
            if (keyMatch(ggScale.aesthetics[i], encodingKey)) {
              itmLayer.encoding[encodingKey].title = ggScale.name;

              //NOTE @wenyu: validate
              if (!contains(Object.keys(scaleMap), ggScale.class)) {
                throw new Error('ggplot object contains unsupported scale class: ' + ggScale.class);
              }

              //NOTE @wenyu: use function dispatch
              scaleMap[ggScale.class](itmLayer.encoding[encodingKey], ggScale);

              ggScale.aesthetics.splice(i, 1);
            }
          }
        });
      }
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

function keyMatch(scaleKey: string, encodingKey: string): boolean {
  if (scaleKey === encodingKey) return true;

  //NOTE @wenyu: should we match `ymax` to `y`?

  //if (labelKey[0] === encodingKey) return true;

  return false;
}

function scaleContinuousPosition(vlEncodingField: VLEncodingField, ggScale: GG.Scale) {
  vlEncodingField.scale = ggScale.transform;
}
