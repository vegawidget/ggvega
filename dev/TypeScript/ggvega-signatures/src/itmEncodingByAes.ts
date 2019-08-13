// using Const here because we may wish to use datum in addition to value:
// issue: https://github.com/vega/vega-lite/issues/1601
// PR: https://github.com/vega/vega-lite/pull/4201
//
function itmEncodingByAes(aesName: string): vl.Encoding {

  // assuming that vl.ValueDefWithConditionMarkPropFieldDefNumber, etc.
  // are all subclasses of vl.Encoding

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
  }

  // validate
  if (!contains(Object.keys(itmEncodingMap), aesName)) {
    throw new Error('ggplot object contains unsupported aesthetic: ' + aesName);  
  }

  // return empty object
  return itmEncodingMap[aesName]();
}

// return empty object
function encodingX(): vl.XClass {

  let encoding: vl.XClass = {};

  return encoding;
}

// return empty object
function encodingY(): vl.YClass {

  let encoding: vl.YClass = {};

  return encoding;
}


// return empty object
function encodingNumber(): vl.ValueDefWithConditionMarkPropFieldDefNumber {

  let encoding: vl.ValueDefWithConditionMarkPropFieldDefNumber = {};

  return encoding;
}

// return empty object
function encodingString(): vl.ValueDefWithConditionMarkPropFieldDefStringNull {

  let encoding: vl.ValueDefWithConditionMarkPropFieldDefStringNull = {};

  return encoding;
}

// return empty object
function encodingDetail(): vl.Detail {

  let encoding: vl.Detail = {};

  return encoding;
}

// return empty object
function encodingShape(): vl.ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull {

  let encoding: vl.ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull = {};

  return encoding;
}
