import {itmLayerArrayByLabelsObject} from '../src/itmLayerArrayByLabels';
import * as GG from '../../ggschema/src/index';
import * as ggSpec from './ggSpec';
import * as itmSpec from './itmSpec';
import {ItmLayer} from '../src/itmLayer';

describe('itmLayerArrayByLabels/itmLayerArrayByLabelsObject', () => {
  it('should Modify a layer array according to a set of labels', () => {
    const itmLayerArray = itmSpec.iris01.layer;

    const ggLabels = ggSpec.iris01.labels;

    const itmLayerArrayByLabels = [
      {
        data: {
          name: 'data-00'
        },
        geomSet: {
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
            type: 'quantitative',
            title: 'Sepal.Width'
          },
          y: {
            field: 'Sepal\\.Length',
            type: 'quantitative',
            title: 'Sepal.Length'
          },
          colour: {
            field: 'Species',
            type: 'nominal',
            title: 'Species'
          }
        }
      }
    ];

    expect(itmLayerArrayByLabelsObject(itmLayerArray as ItmLayer[], ggLabels as GG.LabelObject)).toEqual(
      itmLayerArrayByLabels as ItmLayer[]
    );
  });
});
