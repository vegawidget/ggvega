import * as VL from './vlSpec';
import * as GG from '../../ggschema/src/index';
import {validateGs} from './utils';
import {vlschema} from '../package.json';
import {datasetObject} from './datasetObject';
import {layerArrayByAes} from './layerArrayByAes';
import {facet} from './facet';

export function spec2vl(spec: any, singleView = false): VL.TopLevelSpec {
  const ggSpec: GG.TopLevelSpec = ggValidate(spec);

  const vlSpec: VL.TopLevelSpec = topLevelSpec(ggSpec, singleView);

  return vlSpec;
}

function ggValidate(spec: any): GG.TopLevelSpec {
  // validate here

  //NOTE @wenyu: This function throw warnings and return true(validated) or false(not validated).
  validateGs(spec);

  const ggSpec: GG.TopLevelSpec = spec as GG.TopLevelSpec;

  return ggSpec;
}

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
 *   information, develop rules to resolve those conflicts.
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
 * - Functions or variables that refer to a Vega-Lite objects
 *   do *not* use a prefix. Those that refer to a ggspec or intermidate object
 *   use the prefixes `gg` or `itm`, respectively.
 *
 * - Functions and files containing functions that depend on
 *   certain ggplot2 features, e.g. `Geom`, are further named using
 *   the preposition `By`, e.g. `markByGeom`.
 *
 *   - Functions that operate on different types of a ggplot2 feature,
 *     e.g. `markByGeom`: `markByGeomDefault`, `markByGeomBoxplot`,
 *     are collected in a single file, e.g. `markByGeom.ts`
 *
 * - Functions or variables that refer to collections of similar things,
 *   e.g. `layerArray` or `encodingObject`, use the suffixes `Array` or
 *   `Object`.
 *
 * - TODO: find out the convention for noting that mutable function-arguments
 *   are changed as a side-effect of calling, and that sometimes we might do this
 *   intentionally.
 *
 * - End-users are not expected to know about ggspec or ggschema;
 *   error messages should refer to the ggplot object.
 *
 * **Resolutions**
 *
 *  - In an `encoding`:
 *   - a ggplot2 `scale` name takes precedence over a ggplot2 `label` value.
 *   - a ggplot2 `mapping` takes precedence over a ggplot2 `stat` `default_aes`.
 *
 * ---
 *
 * **Calls**
 * @see datasetsObject
 * @see layerArray
 * @see facet
 *
 * @param ggSpec - `GG.TopLevelSpec`, validated ggspec
 * @param singleView - `boolean`, indicates to "collapse" spec with one layer to
 *   a single-view spec (default `false`)
 *
 * @returns `VL.TopLevelSpec`, Vega-Lite specification
 *
 */
function topLevelSpec(ggSpec: GG.TopLevelSpec, singleView = false): VL.TopLevelSpec {
  // The structure of a Vega-Lite specification depends on whether or not
  // it is faceted.

  // Want to specify this URL exactly **one** place in the project
  // also - what mechanism do we use to update the Vega-Lite schema?
  // const schema = 'https://vega.github.io/schema/vega-lite/v3.json';

  let topLevelSpec: VL.TopLevelSpec = {};

  let title = ggSpec.labels.title || undefined;
  let datasets = datasetObject(ggSpec.data);
  let layer = layerArrayByAes(ggSpec.data, ggSpec.layers, ggSpec.scales, ggSpec.labels, ggSpec.coordinates);

  // faceted
  if (ggSpec.facet.class != 'FacetNull') {

    // at the moment, this code will not run because
    // `facet()`, by design, throws an error
    topLevelSpec = {
      $schema: vlschema, // vlschema defined in package.json
      title: title,
      datasets: datasets,
      spec: {
        layer: layer
      },
      facet: facet(ggSpec.facet)
    };

    return topLevelSpec;
  }

  // not faceted
  topLevelSpec = {
    $schema: vlschema,
    title: title,
    datasets: datasets,
    layer: layer
  };

  // single-view not-faceted
  if (singleView) {

    if (layer.length > 1) {
      // warn that we cannot create a single view with more than one layer
      console.warn('Cannot create single-view spec, returning spec with multiple layers.');
      return topLevelSpec;
    }

    // put all of the elements of into single view
    let topLevelSingleViewSpec: VL.TopLevelSpec = {
      $schema: vlschema,
      title: title,
      datasets: datasets,
    }

    // append the layer-elements into the top-level spec
    // Object.assign() is ES6; using this instead: https://stackoverflow.com/a/43675279
    topLevelSingleViewSpec = {...topLevelSingleViewSpec, ...layer[0]};

    return topLevelSingleViewSpec;
  }

  return topLevelSpec;
}
