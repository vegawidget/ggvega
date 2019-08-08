import {removeEmpty} from '../src/util';

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
