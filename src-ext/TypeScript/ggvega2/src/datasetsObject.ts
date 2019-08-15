import * as VL from './vlSpec';
import * as GG from '../../ggschema/src/index';

//TODO@wenyu: We don't have GG.Data type. We have GG.Datasets and GG.Dataset. GG.Datasets={[key: string]: GG.Dataset}

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
 * @param ggDatasetsObject - `{[key: string]: GG.Data}`, key-value pairs of ggspec datasets
 *
 * @returns `{[key: string]: VL.InlineDataset}`, object containing Vega-Lite inline-datasets
 *
 */
export function datasetsObject(ggDatasetsObject: GG.Datasets): {[key: string]: VL.InlineDataset} {
  // validate
  if (Object.keys(ggDatasetsObject).length == 0) {
    // error messages should refer to the ggplot object; end-user is not expected to know
    // about ggspec/ggschema
    throw new Error('ggplot object has no datasets, requires at least one dataset');
  }

  // translate
  const datasetsObject: {[key: string]: VL.InlineDataset} = {};

  // iterate over object: https://stackoverflow.com/a/684692

  //TODO@wenyu: https://eslint.org/docs/rules/no-prototype-builtins
  for (const key in ggDatasetsObject) {
    if (Object.prototype.hasOwnProperty.call(ggDatasetsObject, key)) {
      datasetsObject[key] = ggDatasetsObject[key].observations;
    }
  }

  return datasetsObject;
}
