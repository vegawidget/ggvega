import * as VL from './vlSpec';
import * as GG from '../../ggschema/src/index';

/**
 * Create a Facet object
 *
 * @remarks
 * This is just a stub right now - to be built soon.
 *
 * **Called by**
 * @see topLevelSpec
 *
 *
 * @param ggFacet - `GG.Facet` ggschema Facet object
 *
 * @returns `VL.Facet`
 */
export function facet(ggFacet: GG.Facet): VL.Facet {
  // validate
  throw new Error('ggplot object contains unsupported facet: ' + ggFacet.class);

  const facet: VL.Facet = {};

  return facet;
}
