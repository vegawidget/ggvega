import {cp} from '../src/utils';
import {ItmEncodingObject} from '../src/itmEncodingObject';
import {itmEncodingObjectByPosition} from '../src/itmEncodingObjectByPosition';
import * as GG from '../../ggschema/src/index';

const itmEncObj = {
  x: {
    field: 'class',
    type: 'nominal'
  },
  y: {
    aggregate: 'count',
    type: 'quantitative'
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
    expect(itmEncodingObjectByPosition(cp(itmEncObj), positionIdentity)).toEqual(itmEncObj);
  });

  const itmEncObjStack = {
    x: {
      field: 'class',
      type: 'nominal'
    },
    y: {
      aggregate: 'count',
      stack: 'zero',
      type: 'quantitative'
    }
  } as ItmEncodingObject;

  it('should work with PositionStack', () => {
    expect(itmEncodingObjectByPosition(cp(itmEncObj), positionStack)).toEqual(itmEncObjStack);
  });

  const itmEncObjFill = {
    x: {
      field: 'class',
      type: 'nominal'
    },
    y: {
      aggregate: 'count',
      stack: 'normalize',
      type: 'quantitative'
    }
  } as ItmEncodingObject;

  it('should work with PositionFill', () => {
    expect(itmEncodingObjectByPosition(cp(itmEncObj), positionFill)).toEqual(itmEncObjFill);
  });
});
