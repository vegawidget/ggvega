import {spec2vl} from '../src/topLevelSpec';
import * as VL from '../src/vlSpec';
import * as ggSpec from './ggSpec';
import * as vlSpec from './vlSpec';

// helper function to preserve ggspecs by copying
let cp = function (x: any) {
  return JSON.parse(JSON.stringify(x))
}

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

    expect(spec2vl(cp(ggSpec.iris03))).toEqual(vlSpec.iris03);

    // single-view option
    expect(spec2vl(cp(ggSpec.iris03), true)).toEqual(vlSpec.iris03Single);

  });
});
