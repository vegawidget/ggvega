import {gg2vl, removeEmpty} from '../src/compile';

describe('test', () => {
  expect(true).toBeTruthy();
});

describe('compile/gg2vl', () => {
  it('should use `datasets` rather than `data`', () => {
    const vl = gg2vl({
      data: {
        'data-00': {
          metadata: {},
          observations: [{a: 'A', b: 28}, {a: 'A', b: 28}]
        },
        'data-01': {
          metadata: {},
          observations: [{a: 'A', b: 28}]
        }
      }
    });

    console.log(vl);

    expect(vl.data).toBeUndefined();
    expect(vl.datasets).toHaveProperty('data-00');
    expect(vl.datasets).toHaveProperty('data-01');
    if (vl.datasets) {
      expect(vl.datasets['data-00']).toHaveLength(2);
      expect(vl.datasets['data-01']).toHaveLength(1);
      expect(vl.datasets['data-02']).toBeUndefined;
    }
  });

  it('should use `title` in `labels` as `title', () => {
    const vl = gg2vl({
      labels: {
        title: 'text'
      }
    });

    const vl01 = gg2vl({
      labels: {
        x: 'text'
      }
    });

    expect(vl.title).toBe('text');
    expect(vl01.title).toBeUndefined;
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
