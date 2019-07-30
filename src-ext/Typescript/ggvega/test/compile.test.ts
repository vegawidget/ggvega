import {gg2vl, TranslateDatasets, TranslateLayers, removeEmpty} from '../src/compile';
import * as ggSpec from './ggSpec';
import * as vlSpec from './vlSpec';

describe('The test of the ts test', () => {
  it('should always fail', () => {
    expect(true).toBeTruthy();
  });
});

describe('compile/gg2vl', () => {
  it('should throw error for an invalid spec', () => {
    expect(() => {
      gg2vl(ggSpec.invalidSpec01);
    }).toThrowError();

    expect(() => {
      gg2vl(ggSpec.invalidSpec02);
    }).toThrowError();

    expect(() => {
      gg2vl(ggSpec.invalidSpec03);
    }).toThrowError();

    expect(() => {
      gg2vl(ggSpec.ggSpec01);
    }).not.toThrowError();

    expect(gg2vl(ggSpec.ggJson01)).toEqual(vlSpec.vlJson01);
  });

  it('should have the vega-lite schema v3', () => {
    const vl = gg2vl(ggSpec.ggSpec01);

    expect(vl.$schema).toEqual(vlSpec.vlSpec01['$schema']);
  });

  it('should use `title` in `labels` as `title', () => {
    const vl = gg2vl(ggSpec.ggSpec02);

    expect(vl.title).toEqual(vlSpec.vlSpec02['title']);
  });
});

describe('compile/TranslateDatasets', () => {
  it('should translate `ggSpec.data` to `vlSpec.datasets` ', () => {
    const vlDatasets = TranslateDatasets(ggSpec.ggSpec03['data']);

    expect(vlDatasets).toEqual(vlSpec.vlSpec03['datasets']);
  });
});

describe('compile/TranslateLayers', () => {
  it('should trabslate `ggSpec.layers` to `vlSpec.layers`', () => {
    const vlLayers = TranslateLayers(
      ggSpec.ggSpec01['layers'],
      ggSpec.ggSpec01['labels'],
      ggSpec.ggSpec01['data'],
      ggSpec.ggSpec01['scales']
    );

    expect(vlLayers).toEqual(vlSpec.vlSpec01['layer']);
  });
});

describe('compile/removeEmpty', () => {
  it('should omit all empty objects in an object', () => {
    const empty01 = {};

    removeEmpty(empty01);

    expect(empty01).toEqual({});

    const empty02 = {
      data: {
        metadata: null,
        values: [{a: 'A', b: 28}],
        observations: {
          values: {}
        }
      },
      title: undefined,
      layer: {},
      scale: {
        class: null
      }
    };

    removeEmpty(empty02);

    expect(empty02).toEqual({data: {values: [{a: 'A', b: 28}]}});
  });
});
