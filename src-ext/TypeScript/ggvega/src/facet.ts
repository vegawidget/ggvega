import * as VLFacet from 'vega-lite/src/spec/facet';
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
export function facet(ggFacet: GG.Facet): VLFacet.FacetFieldDef<string> {
  // validate
  throw new Error('ggplot object contains unsupported facet: ' + ggFacet.class);

  // setting `type` here, hopefully change later
  const facet: VLFacet.FacetFieldDef<string> = {type: 'nominal'};

  return facet;
}
