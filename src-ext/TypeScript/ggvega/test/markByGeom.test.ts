import {markByGeom} from '../src/markByGeom';
import * as VL from '../src/vlSpec';
import * as GG from '../../ggschema/src/index';

describe('markByGeom/markByGeom', () => {
  it('should create vega-lite mark', () => {
    const ggGeomSet = {
      geom: {
        class: 'GeomPoint'
      },
      geom_params: {
        'na.rm': false
      }
    };

    const ggStatSet = {
      stat: {
        class: 'StatIdentity'
      },
      stat_params: {
        'na.rm': false
      }
    };

    const vlMark = {
      type: 'point'
    };

    expect(markByGeom(ggGeomSet as GG.GeomSet, ggStatSet as GG.StatSet)).toEqual(vlMark as VL.MarkDefClass);
  });
});
