import * as VL from './vlSpec';
import * as GG from '../../ggschema/src/index';
export function facet(ggFacet: GG.Facet): VL.Facet {
  throw new Error('ggplot object contains unsupported facet: ' + ggFacet.class);

  const facet: VL.Facet = {};

  return facet;
}
