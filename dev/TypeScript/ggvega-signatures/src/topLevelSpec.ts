/**
 * Create a TopLevelSpec
 * 
 * @remarks
 * This seems like a good place to discuss coding ideas.
 * 
 * **Motivation**
 * 
 * When we add another ggplot2 `Geom`, `Stat`, `Position`, etc., we want to make it
 * as simple as possible to add the translation code here.
 * 
 * **Principles**
 * 
 * - Use short, focused functions. 
 * - Use class-dispatch where appropriate.
 * - Keep in mind that ggplot/ggspec can provide redundant or conflicting 
 *   information, develop rules to resolve.
 * 
 * **Conventions**
 * 
 * - The word `translate` is not used in function names because virtually
 *   every function performs a translation; the word is not telling us 
 *   anything new.
 * 
 * - Functions are named after the type of object they return,
 *   e.g. this function is named `topLevelSpec`. 
 * 
 * - Functions that depend on certain ggplot2 features, e.g. `Geom`,
 *   are further named using the preposition `By`, e.g. `markByGeom`.
 * 
 *   - Functions that operate on different types of a ggplot2 feature,
 *     e.g. `markByGeom`: `markByGeomDefault`, `markByGeomBoxplot`,
 *     are collected in a single file, e.g. `markByGeom.ts`
 * 
 * - Functions or variables that refer to a Vega-Lite objects
 *   *not* use a prefix. Those that refer to a ggspec or intermidate object,
 *   use the prefixes `gs` or `itm`, respectively.
 * 
 * - Functions or variables that refer to collections of similar things, 
 *   e.g. `layerArray` or `encodingObject`, use the suffixes `Array` or 
 *   `Object`.
 * 
 * - End-users are not expected to know about ggspec or ggschema; 
 *   error messages should refer to the ggplot opbject.
 * 
 * **Resolutions**
 * 
 *  - In an `encoding`:
 *   - a ggplot2 `scale` name takes precedence over a ggplot2 `label` value.
 *   - a ggplot2 `mapping` takes precedence over a ggplot2 `stat` `default_aes`.
 * 
 * @param ggspec - `gs.TopLevelSpec`, validated ggspec
 *
 * @returns `vl.TopLevelSpec`, Vega-Lite specification
 *
 */
function topLevelSpec(ggspec: gs.TopLevelSpec): vl.TopLevelSpec {

  // The structure of a Vega-Lite specification depends on whether or not
  // it is faceted.

  // is there a way to get this from the Vega-Lite code?
  // also - what mechanism do we use to update the Vega-Lite schema?
  const schema = 'https://vega.github.io/schema/vega-lite/v3.json'

  let topLevelSpec: vl.TopLevelSpec = {};

  // faceted
  if (ggspec.facet.class != 'FacetNull') {

    // at the moment, this code will not run because 
    // `facet()`, by design, throws an error

    topLevelSpec = {
      $schema: schema,
      datasets: datasetsObject(ggspec.data),
      spec: {
        layer: layerArray(ggspec.data, ggspec.layers, ggspec.scales, ggspec.labels, ggspec.coordinates)
      },
      facet: facet(ggspec.facet)
    }

    return topLevelSpec;
  }  

  // not faceted
  topLevelSpec = {
    $schema: schema,
    datasets: datasetsObject(ggspec.data),
    layer: layerArray(ggspec.data, ggspec.layers, ggspec.scales, ggspec.labels, ggspec.coordinates)
  };

  return topLevelSpec;
}
