import {ItmLayer} from './itmLayer';

export function itmLayerArrayByLabelObject(itmLayerArray: ItmLayer[], gsLabelObject: gs.Labels): ItmLayer[] {
  // loop through the layers
  // within each layer:
  //   - get the encoding keys (aesthetic names)
  //   - get the label keys (aesthetic names)
  //   - for each label key:
  //       - if there is a match with an encoding key (first match that is not value-only):
  //           -  set the encoding title to the label value
  //           -  remove the label from the label object
}
