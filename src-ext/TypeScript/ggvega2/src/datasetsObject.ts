import * as VL from './vlSpec';
import * as GG from '../../ggschema/src/index';

export function datasetsObject(ggDatasetsObject: GG.Datasets): {[key: string]: VL.InlineDataset} {
  if (Object.keys(ggDatasetsObject).length == 0) {
    throw new Error('ggplot object has no datasets, requires at least one dataset');
  }

  const datasetsObject: {[key: string]: VL.InlineDataset} = {};

  for (const key in ggDatasetsObject) {
    if (Object.prototype.hasOwnProperty.call(ggDatasetsObject, key)) {
      datasetsObject[key] = ggDatasetsObject[key].observations;
    }
  }

  return datasetsObject;
}
