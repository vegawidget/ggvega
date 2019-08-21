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
function facet(ggFacet: GG.Facet): VL.Facet {

  // validate
  throw new Error('ggplot object contains unsupported facet: ' + ggFacet.class);  

  let facet: VL.Facet = {}; 

  return facet;
}