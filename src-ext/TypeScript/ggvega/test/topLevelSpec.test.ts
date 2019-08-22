import {spec2vl} from '../src/topLevelSpec';
import * as VL from '../src/vlSpec';
import * as ggSpec from './ggSpec';
import * as vlSpec from './vlSpec';

describe('topLevelSpec/spec2vl', () => {
  it('should create a vega-lite TopLevelSpec from a ggSpec', () => {
    let ggSpecObject;
    let vlSpecObject;

    ggSpecObject = ggSpec.iris01;
    vlSpecObject = vlSpec.iris01;

    expect(spec2vl(ggSpecObject)).toEqual(vlSpecObject as VL.TopLevelSpec);

    ggSpecObject = ggSpec.iris02;
    vlSpecObject = vlSpec.iris02;

    expect(spec2vl(ggSpecObject)).toEqual(vlSpecObject as VL.TopLevelSpec);

    ggSpecObject = ggSpec.iris03;
    vlSpecObject = vlSpec.iris03;

    expect(spec2vl(ggSpecObject)).toEqual(vlSpecObject as VL.TopLevelSpec);
  });
});
