import {itmLayer, ItmLayer} from '../src/itmLayer';
import * as GG from '../../ggschema/src/index';

describe('itmLayer/itmLayer', () => {
  it('should create intermediate layer', () => {
    const ggLayer = {
      data: 'data-00',
      geom: {
        class: 'GeomPoint'
      },
      geom_params: {
        'na.rm': false
      },
      mapping: {
        x: {
          field: 'Sepal.Width'
        },
        y: {
          field: 'Sepal.Length'
        },
        colour: {
          field: 'Species'
        }
      },
      aes_params: {},
      stat: {
        class: 'StatIdentity'
      },
      stat_params: {
        'na.rm': false
      }
    };

    const ggDatasets = {
      'data-00': {
        metadata: {
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
        },
        observations: [
          {
            'Sepal.Length': 5.1,
            'Sepal.Width': 3.5,
            'Petal.Length': 1.4,
            'Petal.Width': 0.2,
            Species: 'setosa'
          }
        ]
      }
    };

    //TODO@wenyu: remember to add title after building label function
    const itmLayerObject = {
      data: {
        name: 'data-00'
      },
      geomset: {
        geom: {
          class: 'GeomPoint'
        },
        geom_params: {
          'na.rm': false
        }
      },
      mark: {type: 'point'},
      encoding: {
        x: {
          field: 'Sepal\\.Width',
          type: 'quantitative'
        },
        y: {
          field: 'Sepal\\.Length',
          type: 'quantitative'
        },
        colour: {
          field: 'Species',
          type: 'nominal'
        }
      }
    };

    expect(itmLayer(ggLayer as GG.Layer, ggDatasets as GG.Datasets)).toEqual(itmLayerObject as ItmLayer);
  });
});
