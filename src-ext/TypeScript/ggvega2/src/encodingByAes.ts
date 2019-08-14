import {contains} from './util';
import * as VL from './VLSpec';

export function encodingByAes(aesName: string): any {
  // assuming that VL.ValueDefWithConditionMarkPropFieldDefNumber, etc.
  // are all subclasses of VL.Encoding

  // keys are ggplot2 aesthetic names
  // values are Vega-Lite encoding constructor-functions for values
  const itmEncodingMap = {
    x: encodingX,
    y: encodingY,
    color: encodingString,
    fill: encodingString,
    size: encodingNumber,
    stroke: encodingNumber,
    alpha: encodingNumber,
    group: encodingDetail,
    shape: encodingShape,
    weight: encodingNumber
    // NOTE: the weight aesthetic is used for stat calculations, it will
    // not appear as an encoding key.
  };

  // validate
  if (!contains(Object.keys(itmEncodingMap), aesName)) {
    throw new Error('ggplot object contains unsupported aesthetic: ' + aesName);
  }

  // return empty object
  return itmEncodingMap[aesName]();
}

function encodingX(): VL.XClass {
  let encoding: VL.XClass = {};

  return encoding;
}

function encodingY(): VL.YClass {
  let encoding: VL.YClass = {};

  return encoding;
}

function encodingNumber(): VL.DefWithConditionMarkPropFieldDefNumber {
  let encoding: VL.DefWithConditionMarkPropFieldDefNumber = {};

  return encoding;
}

function encodingString(): VL.DefWithConditionMarkPropFieldDefStringNull {
  let encoding: VL.DefWithConditionMarkPropFieldDefStringNull = {};

  return encoding;
}

function encodingDetail(): VL.Detail {
  let encoding: VL.Detail = {};

  return encoding;
}

function encodingShape(): VL.DefWithConditionMarkPropFieldDefTypeForShapeStringNull {
  let encoding: VL.DefWithConditionMarkPropFieldDefTypeForShapeStringNull = {};

  return encoding;
}
