import * as vl from './vlSpec';
import * as gs from '../../ggschema/src/index';

/**
 * Create datasets object
 *
 * @remarks
 *
 * For each key-value pair in `gsDatasetsObject`, a key-value pair is created
 * in the return object.
 *
 * @param gsDatasetsObject - `{[key: string]: gs.Data}`, key-value pairs of ggspec datasets
 *
 * @return `{[key: string]: vl.InlineDataset}`, object containing Vega-Lite inline-datasets
 *
 */
export function datasetsObject(gsDatasetsObject: {[key: string]: gs.Dataset}): {[key: string]: vl.InlineDataset} {
  // validate
  if (Object.keys(gsDatasetsObject).length == 0) {
    // error messages should refer to the ggplot object; end-user is not expected to know
    // about ggspec/ggschema
    throw new Error('ggplot object has no datasets, requires at least one dataset');
  }

  // translate
  const datasetsObject = {};

  // iterate over object: https://stackoverflow.com/a/684692
  //@wenyu https://eslint.org/docs/rules/no-prototype-builtins
  for (const key in gsDatasetsObject) {
    if (Object.prototype.hasOwnProperty.call(gsDatasetsObject, key)) {
      datasetsObject[key] = gsDatasetsObject[key].observations;
    }
  }

  return datasetsObject;
}
