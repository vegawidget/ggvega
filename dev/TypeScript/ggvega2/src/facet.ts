import * as vl from './vlSpec';
import * as gs from '../../ggschema/src/index';

// this is a stub that we can complete when we define facets
export function facet(gsFacet: gs.Facet): vl.Facet {
  // validate
  throw new Error('ggplot object contains unsupported facet: ' + gsFacet.class);

  const facet: vl.Facet = {};

  return facet;
}
