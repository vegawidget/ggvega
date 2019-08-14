import {gs2vl} from '../src/topLevelSpec';
import * as ggSpec from './ggSpec';
import * as vlSpec from './vlSpec';

describe('The test of the ts test', () => {
  it('should always fail when we set the value to `false`', () => {
    expect(true).toBeTruthy();
  });
});

describe('compile/gg2vl', () => {
  it('should throw error for an invalid spec', () => {
    expect(() => {
      gs2vl(ggSpec.invalidSpec01);
    }).toThrowError();

    expect(() => {
      gs2vl(ggSpec.invalidSpec01);
    }).toThrow();

    expect(() => {
      gs2vl(ggSpec.invalidSpec02);
    }).toThrowError();

    expect(() => {
      gs2vl(ggSpec.invalidSpec03);
    }).toThrowError();

    expect(() => {
      gs2vl(ggSpec.ggSpec01);
    }).not.toThrowError();

    expect(gs2vl(ggSpec.ggJson01)).toEqual(vlSpec.vlJson01);
  });

  it('should have the vega-lite schema v3', () => {
    const vl = gs2vl(ggSpec.ggSpec01);

    expect(vl.$schema).toEqual(vlSpec.vlSpec01['$schema']);
  });

  it('should use `title` in `labels` as `title', () => {
    const vl = gs2vl(ggSpec.ggSpec02);

    expect(vl.title).toEqual(vlSpec.vlSpec02['title']);
  });
});
