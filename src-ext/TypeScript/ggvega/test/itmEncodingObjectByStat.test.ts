import {cp} from '../src/utils';
import {ItmEncodingObject} from '../src/itmEncodingObject';
import {itmEncodingObjectByStat} from '../src/itmEncodingObjectByStat';
import * as GG from '../../ggschema/src/index';

const itmEncObj = {
  x: {
    field: 'class',
    type: 'nominal'
  }
} as ItmEncodingObject;

const itmEncObjWeight = {
  x: {
    field: 'class',
    type: 'nominal'
  },
  weight: {
    field: 'displ',
    type: 'quantitative'
  }
} as ItmEncodingObject;

const statSetIdentity = {
  stat: {
    class: 'StatIdentity',
    default_aes: {}
  },
  stat_params: {
    'na.rm': false
  }
} as GG.StatSetIdentity;

const statSetCount = {
  stat: {
    class: 'StatCount',
    default_aes: {}
  },
  stat_params: {
    'na.rm': false
  }
} as GG.StatSetCount;

describe('itmEncodingObject/itmEncodingObjectByMappingObject', () => {
  it('should work with StatSetIdentity', () => {
    expect(itmEncodingObjectByStat(cp(itmEncObj), statSetIdentity)).toEqual(itmEncObj);

    expect(itmEncodingObjectByStat(cp(itmEncObjWeight), statSetIdentity)).toEqual(itmEncObjWeight);
  });

  const itmEncObjCount = {
    x: {
      field: 'class',
      type: 'nominal'
    },
    y: {
      aggregate: 'count',
      type: 'quantitative'
    }
  } as ItmEncodingObject;

  const itmEncObjCountWeight = {
    x: {
      field: 'class',
      type: 'nominal'
    },
    y: {
      aggregate: 'sum',
      field: 'displ',
      type: 'quantitative'
    }
  } as ItmEncodingObject;

  it('should work with StatSetCount', () => {
    expect(itmEncodingObjectByStat(cp(itmEncObj), statSetCount)).toEqual(itmEncObjCount);

    expect(itmEncodingObjectByStat(cp(itmEncObjWeight), statSetCount)).toEqual(itmEncObjCountWeight);
  });
});
