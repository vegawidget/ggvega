import {datasetsObject} from '../src/datasetsObject';
import * as ggSpec from './ggSpec';
import * as vlSpec from './vlSpec';

describe('datasetsObject/datasetsObject', () => {
  it('should translate `ggSpec.data` to `vlSpec.datasets` ', () => {
    const vlDatasets = datasetsObject(ggSpec.ggSpec03['data']);

    expect(vlDatasets).toEqual(vlSpec.vlSpec03['datasets']);
  });
});
