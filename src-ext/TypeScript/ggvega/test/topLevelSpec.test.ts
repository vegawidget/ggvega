import * as VLSpec from 'vega-lite/src/spec';
import {cp} from '../src/utils';
import {spec2vl} from '../src/topLevelSpec';
import * as ggSpec from './ggSpec';
import * as vlSpec from './vlSpec';

describe('topLevelSpec/spec2vl', () => {
  it('should create a vega-lite TopLevelSpec from a ggSpec', () => {
    let ggSpecObject;
    let vlSpecObject;

    ggSpecObject = ggSpec.iris01;
    vlSpecObject = vlSpec.iris01;

    expect(spec2vl(ggSpecObject)).toEqual(vlSpecObject as VLSpec.TopLevelSpec);

    ggSpecObject = ggSpec.iris02;
    vlSpecObject = vlSpec.iris02;

    expect(spec2vl(ggSpecObject)).toEqual(vlSpecObject as VLSpec.TopLevelSpec);

    expect(spec2vl(cp(ggSpec.iris03))).toEqual(vlSpec.iris03);

    // single-view option
    expect(spec2vl(cp(ggSpec.iris03), true)).toEqual(vlSpec.iris03Single);
    expect(spec2vl(cp(ggSpec.iris04))).toEqual(vlSpec.iris04);

    // bar-chart
    expect(spec2vl(cp(ggSpec.barMpg))).toEqual(vlSpec.barMpg);
    expect(spec2vl(cp(ggSpec.barStackedMpg))).toEqual(vlSpec.barStackedMpg);
  });
});
