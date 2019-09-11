import {cp} from '../src/utils';
import {itmEncodingObjectByMappingObject, ItmEncodingObject} from '../src/itmEncodingObject';
import {itmEncodingObjectByStat} from '../src/itmEncodingObjectByStat';
import * as VL from '../src/vlSpec';
import * as GG from '../../ggschema/src/index';
import * as ggSpec from './ggSpec';
import * as itmLayer from './itmSpec';

const itmEncObj = {
  x: {
    field: "class",
    type: "nominal" as VL.StandardType
  }
} as ItmEncodingObject;

const itmEncObjWeight = {
  x: {
    field: "class",
    type: "nominal" as VL.StandardType
  },
  weight: {
    field: "displ",
    type: "quantitiative" as VL.StandardType
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
    expect(itmEncodingObjectByStat(cp(itmEncObj), statSetIdentity)).
      toEqual(itmEncObj);
  });

  const itmEncObjCount = {
    x: {
      field: "class",
      type: "nominal" as VL.StandardType
    },
    y: {
      aggregate: "count" as VL.AggregateOp,
      type: "quantitative" as VL.StandardType
    }
  } as ItmEncodingObject;

  it('should work with StatSetCount', () => {
    expect(itmEncodingObjectByStat(cp(itmEncObj), statSetCount)).
      toEqual(itmEncObjCount);
  });

});
