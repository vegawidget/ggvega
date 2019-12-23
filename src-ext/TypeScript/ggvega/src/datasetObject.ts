import * as VLData from 'vega-lite/build/src/data';
import * as GG from '../../ggschema/src/index';
import {hasKey} from './utils';

//NOTE @wenyu: After discussion with @ian, we decide to use GG.DatasetsObject to substitute GG.Datasets

/**
 * Create datasets object
 *
 * @remarks
 * For each key-value pair in `ggDatasetObject`, a key-value pair is created
 * in the return object.
 *
 * **Called by**
 * @see topLevelSpec
 *
 * @param ggDatasetObject - `GG.DatasetObject`, key-value pairs of ggspec datasets
 *
 * @returns `{[key: string]: VL.InlineDataset}`, object containing Vega-Lite inline-datasets
 *
 */

export function datasetObject(ggDatasetObject: GG.DatasetObject): {[key: string]: VLData.InlineDataset} {
  // validate
  if (Object.keys(ggDatasetObject).length == 0) {
    // error messages should refer to the ggplot object; end-user is not expected to know
    // about ggspec/ggschema
    throw new Error('ggplot object has no datasets, requires at least one dataset');
  }

  // translate
  const datasetObject: {[key: string]: VLData.InlineDataset} = {};

  // iterate over object: https://stackoverflow.com/a/684692

  //NOTE @wenyu: https://eslint.org/docs/rules/no-prototype-builtins
  for (const dataName in ggDatasetObject) {
    if (hasKey(ggDatasetObject, dataName)) {
      datasetObject[dataName] = ggDatasetObject[dataName].observations;
    }
  }

  return datasetObject;
}
