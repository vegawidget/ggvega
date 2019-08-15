import {datasetsObject} from '../src/datasetsObject';
import * as VL from '../src/vlSpec';
import * as GG from '../../ggschema/src/index';

describe('datasetsObject/datasetsObject', () => {
  it('should create datasets object', () => {
    const ggDatasetsObject = {
      'data-00': {
        metadata: {
          'Sepal.Length': {type: 'quantitative'},
          'Sepal.Width': {type: 'quantitative'},
          'Petal.Length': {type: 'quantitative'},
          'Petal.Width': {type: 'quantitative'},
          Species: {type: 'nominal', levels: ['setosa', 'versicolor', 'virginica']}
        },
        observations: [
          {'Sepal.Length': 5.1, 'Sepal.Width': 3.5, 'Petal.Length': 1.4, 'Petal.Width': 0.2, Species: 'setosa'}
        ]
      }
    };

    const vlDatasetsObject = {
      'data-00': [{'Sepal.Length': 5.1, 'Sepal.Width': 3.5, 'Petal.Length': 1.4, 'Petal.Width': 0.2, Species: 'setosa'}]
    };

    expect(datasetsObject(ggDatasetsObject as GG.Datasets)).toEqual(vlDatasetsObject as {
      [key: string]: VL.InlineDataset;
    });
  });
});
