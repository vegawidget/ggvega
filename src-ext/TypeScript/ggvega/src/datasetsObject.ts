import * as VL from './vlSpec';
import * as GG from '../../ggschema/src/index';
import {hasKey} from './utils';

//NOTE @wenyu: After discussion with @ian, we decide to use GG.DatasetsObject to substitute GG.Datasets

/**
 * Create datasets object
 *
 * @remarks
 * For each key-value pair in `ggDatasetsObject`, a key-value pair is created
 * in the return object.
 *
 * **Called by**
 * @see topLevelSpec
 *
 * @param ggDatasetsObject - `GG.DatasetsObject`, key-value pairs of ggspec datasets
 *
 * @returns `{[key: string]: VL.InlineDataset}`, object containing Vega-Lite inline-datasets
 *
 */

export function datasetsObject(ggDatasetsObject: GG.DatasetsObject): {[key: string]: VL.InlineDataset} {
  // validate
  if (Object.keys(ggDatasetsObject).length == 0) {
    // error messages should refer to the ggplot object; end-user is not expected to know
    // about ggspec/ggschema
    throw new Error('ggplot object has no datasets, requires at least one dataset');
  }

  // translate
  const datasetsObject: {[key: string]: VL.InlineDataset} = {};

  // iterate over object: https://stackoverflow.com/a/684692

  //NOTE @wenyu: https://eslint.org/docs/rules/no-prototype-builtins
  for (const dataName in ggDatasetsObject) {
    if (hasKey(ggDatasetsObject, dataName)) {
      datasetsObject[dataName] = ggDatasetsObject[dataName].observations;
    }
  }

  return datasetsObject;
}
