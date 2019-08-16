import * as GG from '../../ggschema/src/index';
import {ItmLayer} from './itmLayer';

/**
 * Modify a layer array according to a set of labels
 *
 * @remark
 * We want to attach a label to the first match that it finds, but we want it
 * to match only once.
 *
 * One way we can do this is to delete an item from the label object as
 * as soon as we match it - this way it can be used no more than once.
 *
 * We need to define what is a match - I think a match is made between:
 *   - a key (aesthetic name) of an encoding object
 *   - a key of a label
 *
 * Is this always an exact match? Perhaps for position channels, x & y,
 * it need match only the first character. A function could be useful here
 * to determine a match between two strings.
 *
 * I think we have to start by looping over the layers.
 *
 * Then we can have a function that takes an (intermediate) encoding object
 * and a label object. This function can loop over both the enconding object
 * and the label object, looking for a match.
 *
 * **Called by**
 * @see layerArray
 *
 *
 * @param itmLayerArray - `itmLayer[]`
 * @param ggLabelObject - `GG.Labels`
 *
 * @returns `ItmLayer[]`
 */
export function itmLayerArrayByLabelsObject(itmLayerArray: ItmLayer[], ggLabelObject: GG.Labels): ItmLayer[] {
  itmLayerArray.map((itmLayer: ItmLayer) => {
    for (const encodingKey in itmLayer.encoding) {
      for (const labelKey in ggLabelObject) {
        if (labelKey == encodingKey) {
          itmLayer.encoding[encodingKey].title = ggLabelObject[labelKey as keyof GG.Labels];
          delete ggLabelObject[labelKey as keyof GG.Labels];
        }
      }
    }
  });

  // loop through the layers
  // within each layer:
  //   - get the encoding keys (aesthetic names)
  //   - get the label keys (aesthetic names)
  //   - for each label key:
  //       - if there is a match with an encoding key (first match that is not value-only):
  //           -  set the encoding title to the label value
  //           -  remove the label from the label object

  return itmLayerArray;
}
