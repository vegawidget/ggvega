import {spec2vl} from '../src/topLevelSpec';
import * as VL from '../src/vlSpec';
import * as ggSpec from './ggSpec';
import * as vlSpec from './vlSpec';

describe('topLevelSpec/spec2vl', () => {
  it('should create a vega-lite TopLevelSpec from a ggSpec', () => {
    const ggSpecObject = ggSpec.iris01;
    const vlSpecObject = vlSpec.iris01;

    expect(spec2vl(ggSpecObject)).toEqual(vlSpecObject as VL.TopLevelSpec);
  });
});
