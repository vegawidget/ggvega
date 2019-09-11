import {cp} from '../src/utils';
import {itmEncodingObjectByMappingObject, ItmEncodingObject} from '../src/itmEncodingObject';
import {itmEncodingObjectByPosition} from '../src/itmEncodingObjectByPosition';
import * as VL from '../src/vlSpec';
import * as GG from '../../ggschema/src/index';
import * as ggSpec from './ggSpec';
import * as itmLayer from './itmSpec';

const itmEncObj = {
  x: {
    field: 'class',
    type: 'nominal' as VL.StandardType
  },
  y: {
    aggregate: 'count',
    type: 'quantitative' as VL.StandardType
  }
} as ItmEncodingObject;

const positionIdentity = {
  class: 'PositionIdentity'
} as GG.PositionIdentity;

const positionStack = {
  class: 'PositionStack'
} as GG.PositionStack;

const positionFill = {
  class: 'PositionFill'
} as GG.PositionFill;

describe('itmEncodingObject/itmEncodingObjectByMappingObject', () => {

  it('should work with PositionIdentity', () => {
    expect(itmEncodingObjectByPosition(cp(itmEncObj), positionIdentity)).
      toEqual(itmEncObj);
  });

  const itmEncObjStack = {
    x: {
      field: 'class',
      type: 'nominal' as VL.StandardType
    },
    y: {
      aggregate: 'count',
      stack: 'zero',
      type: 'quantitative' as VL.StandardType
    }
  } as ItmEncodingObject;

  it('should work with PositionStack', () => {
    expect(itmEncodingObjectByPosition(cp(itmEncObj), positionStack)).
      toEqual(itmEncObjStack);
  });

  const itmEncObjFill = {
    x: {
      field: 'class',
      type: 'nominal' as VL.StandardType
    },
    y: {
      aggregate: 'count',
      stack: 'normalize',
      type: 'quantitative' as VL.StandardType
    }
  } as ItmEncodingObject;

  it('should work with PositionFill', () => {
    expect(itmEncodingObjectByPosition(cp(itmEncObj), positionFill)).
      toEqual(itmEncObjFill);
  });

});
