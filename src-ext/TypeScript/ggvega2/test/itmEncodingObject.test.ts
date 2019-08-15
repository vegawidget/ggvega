import {itmEncodingObjectByMappingObject, ItmEncodingObject} from '../src/itmEncodingObject';
import * as GG from '../../ggschema/src/index';

describe('itmEncodingObject/itmEncodingObjectByMappingObject', () => {
  it('should create an intermediate `encoding` object using a `mapping` object', () => {
    const ggMapping = {
      x: {
        field: 'Sepal.Width'
      },
      y: {
        field: 'Sepal.Length'
      },
      colour: {
        field: 'Species'
      }
    };

    const ggMetadataObject = {
      'Sepal.Length': {
        type: 'quantitative'
      },
      'Sepal.Width': {
        type: 'quantitative'
      },
      'Petal.Length': {
        type: 'quantitative'
      },
      'Petal.Width': {
        type: 'quantitative'
      },
      Species: {
        type: 'nominal',
        levels: ['setosa', 'versicolor', 'virginica']
      }
    };

    const itmEncodingObject = {
      x: {field: 'Sepal\\.Width', type: 'quantitative'},
      y: {field: 'Sepal\\.Length', type: 'quantitative'},
      colour: {field: 'Species', type: 'nominal'}
    };

    expect(itmEncodingObjectByMappingObject(ggMapping as GG.Mapping, ggMetadataObject as GG.Metadata)).toEqual(
      itmEncodingObject as ItmEncodingObject
    );
  });
});
