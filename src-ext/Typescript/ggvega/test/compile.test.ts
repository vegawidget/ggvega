import {gg2vl, TranslateDatasets, TranslateLayers, removeEmpty} from '../src/compile';

describe('compile/gg2vl', () => {
  it('should throw error for an invalid spec', () => {
    expect(() => {
      gg2vl({} as any);
    }).toThrowError();

    expect(() => {
      gg2vl({
        data: {'data-00': {}},
        labels: {
          title: 'text'
        }
      });
    }).toThrowError();

    expect(() => {
      gg2vl({
        layers: [
          {
            geom: {class: 'GeomPoint'},
            mapping: {}
          }
        ]
      });
    }).toThrowError();

    expect(() => {
      gg2vl({
        data: {'data-00': {}},
        layers: [
          {
            data: 'data-00',
            geom: {class: 'GeomPoint'},
            mapping: {}
          }
        ]
      });
    }).not.toThrowError();
  });

  it('should have the vega-lite schema v3', () => {
    const vl = gg2vl({
      data: {'data-00': {}},
      layers: [
        {
          data: 'data-00',
          geom: {class: 'GeomPoint'},
          mapping: {}
        }
      ]
    });

    expect(vl.$schema).toEqual('https://vega.github.io/schema/vega-lite/v3.json');
  });

  it('should use `title` in `labels` as `title', () => {
    const vl = gg2vl({
      data: {'data-00': {}},
      labels: {
        title: 'text'
      },
      layers: [
        {
          data: 'data-00',
          geom: {class: 'GeomPoint'},
          mapping: {}
        }
      ]
    });

    expect(vl.title).toBe('text');
  });
});

describe('compile/TranslateDatasets', () => {
  it('should translate `ggSpec.data` to `vlSpec.datasets` ', () => {
    const vlDatasets = TranslateDatasets({
      'data-00': {
        metadata: {},
        observations: [{a: 'A', b: 28}, {a: 'A', b: 28}]
      },
      'data-01': {
        metadata: {},
        observations: [{a: 'A', b: 28}]
      }
    });

    expect(vlDatasets).toEqual({
      'data-00': [{a: 'A', b: 28}, {a: 'A', b: 28}],
      'data-01': [{a: 'A', b: 28}]
    });
  });
});

describe('compile/TranslateLayers', () => {
  it('should trabslate `ggSpec.layers` to `vlSpec.layers`', () => {
    const ggLayers = [
      {
        data: 'data-00',
        geom: {class: 'GeomPoint'},
        mapping: {}
      }
    ];

    const ggData = {'data-00': {}};

    const vlLayers = TranslateLayers(ggLayers, undefined, ggData, undefined);

    console.log(vlLayers);

    expect(vlLayers).toEqual([
      {
        data: {name: 'data-00'},
        mark: 'point',
        encoding: {}
      }
    ]);
  });
});

describe('compile/removeEmpty', () => {
  it('should omit all empty objects in the final vega-lite spec', () => {
    const vl = {
      data: {
        metadata: null,
        undefined: undefined,
        values: [{a: 'A', b: 28}],
        observations: {
          values: {}
        }
      },
      title: null,
      layer: {},
      scale: {
        class: null
      }
    };

    removeEmpty(vl);

    expect(vl).toEqual({data: {values: [{a: 'A', b: 28}]}});
  });
});
