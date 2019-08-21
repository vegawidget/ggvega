import {datasetObject} from '../src/datasetObject';
import * as VL from '../src/vlSpec';
import * as GG from '../../ggschema/src/index';
import * as ggSpec from './ggSpec';
import * as vlSpec from './vlSpec';

describe('datasetsObject/datasetsObject', () => {
  it('should create datasets object', () => {
    const ggDatasetObject = ggSpec.iris01.data;

    const vlDatasetsObject = vlSpec.iris01.datasets;

    expect(datasetObject(ggDatasetObject as GG.DatasetObject)).toEqual(vlDatasetsObject as {
      [key: string]: VL.InlineDataset;
    });
  });
});
