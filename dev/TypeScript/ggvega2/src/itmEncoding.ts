import * as vl from './vlSpec';

// return an empty encoding accoridng to an aesthetic name
export function itmEncoding(aesName: string): vl.Encoding {
  // keys are ggplot2 aesthetic names
  // values are Vega-Lite encoding constructor-functions
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
    weight: encodingNumber // aes used for stat calculations
  };

  // validate
  if (!contains(Object.keys(itmEncodingMap), aesName)) {
    throw new Error('ggplot object contains unsupported aesthetic: ' + aesName);
  }

  // return empty object
  return itmEncodingMap[aesName]();
}

// return empty object
function encodingX(): vl.XClass {
  const encoding: vl.XClass = {};

  return encoding;
}

// return empty object
function encodingY(): vl.YClass {
  const encoding: vl.YClass = {};

  return encoding;
}

// return empty object
function encodingNumber(): vl.DefWithConditionMarkPropFieldDefNumber {
  const encoding: vl.DefWithConditionMarkPropFieldDefNumber = {};

  return encoding;
}

// return empty object
function encodingString(): vl.DefWithConditionMarkPropFieldDefStringNull {
  const encoding: vl.DefWithConditionMarkPropFieldDefStringNull = {};

  return encoding;
}

// return empty object
function encodingDetail(): vl.Detail {
  const encoding: vl.Detail = {};

  return encoding;
}

// return empty object
function encodingShape(): vl.DefWithConditionMarkPropFieldDefTypeForShapeStringNull {
  const encoding: vl.DefWithConditionMarkPropFieldDefTypeForShapeStringNull = {};

  return encoding;
}
