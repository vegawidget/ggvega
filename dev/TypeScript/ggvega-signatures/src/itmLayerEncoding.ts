// return an empty encoding accoridng to an aesthetic name
function itmLayerEncoding(aesName: string): vl.Encoding {

  // keys are ggplot2 aesthetic names
  // values are Vega-Lite encoding constructor-functions
  const itmEncodingMap = {
    x: layerEncodingX,
    y: layerEncodingY,
    color: layerEncodingString,
    fill: layerEncodingString,
    size: layerEncodingNumber, 
    stroke: layerEncodingNumber, 
    alpha: layerEncodingNumber,
    group: layerEncodingDetail,
    shape: layerEncodingShape,
    weight: layerEncodingNumber // aes used for stat calculations
  }

  // validate
  if (!contains(Object.keys(itmEncodingMap), aesName)) {
    throw new Error('ggplot object contains unsupported aesthetic: ' + aesName);  
  }

  // return empty object
  return itmEncodingMap[aesName]();
}


// return empty object
function layerEncodingX(): vl.XClass {

  let encoding: vl.XClass = {};

  return encoding;
}

// return empty object
function layerEncodingY(): vl.YClass {

  let encoding: vl.YClass = {};

  return encoding;
}


// return empty object
function layerEncodingNumber(): vl.ValueDefWithConditionMarkPropFieldDefNumber {

  let encoding: vl.ValueDefWithConditionMarkPropFieldDefNumber = {};

  return encoding;
}

// return empty object
function layerEncodingString(): vl.ValueDefWithConditionMarkPropFieldDefStringNull {

  let encoding: vl.ValueDefWithConditionMarkPropFieldDefStringNull = {};

  return encoding;
}

// return empty object
function layerEncodingDetail(): vl.Detail {

  let encoding: vl.Detail = {};

  return encoding;
}

// return empty object
function layerEncodingShape(): vl.ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull {

  let encoding: vl.ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull = {};

  return encoding;
}
