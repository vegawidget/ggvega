/**
 * Create an empty `Encoding` according to an aesthetic-name
 * 
 * @remarks
 * There are different "flavors" of Vega-Lite encodings; which one is used
 * depends on the encoding key (name), which in turn depends on the 
 * aesthetic name.
 * 
 * In the future, maybe we could imagine an `opts` argument so that we could 
 * instantiate the encoding and set values in one step.
 * 
 * **Called by**
 * @see {@link itmEncodingObjectByMappingObject}
 * @see {@link itmEncodingObjectByAesParamsObject}
 * 
 * **Calls**
 * @see encodingX
 * @see encodingY
 * @see encodingString
 * @see encodingNumber
 * @see encodingShape
 * @see encodingDetail
 * 
 * @param aesName - `string` name of ggplot2 aesthetic
 * 
 * @returns `vl.Encoding` empty encoding
 */
function encodingByAes(aesName: string): vl.Encoding {

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

/**
 * Create empty X-encoding
 *
 * @remarks
 * **Called by**
 * @see encodingByAes 
 *
 * @returns `vl.XClass`
 */
function encodingX(): vl.XClass {

  let encoding: vl.XClass = {};

  return encoding;
}

/**
 * Create empty Y-encoding
 *
 * @remarks
 * **Called by**
 * @see encodingByAes 
 *
 * @returns `vl.YClass`
 */
function encodingY(): vl.YClass {

  let encoding: vl.YClass = {};

  return encoding;
}

/**
 * Create empty number-encoding
 *
 * @remarks
 * **Called by**
 * @see encodingByAes 
 *
 * @returns `vl.ValueDefWithConditionMarkPropFieldDefNumber`
 */
function encodingNumber(): vl.ValueDefWithConditionMarkPropFieldDefNumber {

  let encoding: vl.ValueDefWithConditionMarkPropFieldDefNumber = {};

  return encoding;
}

/**
 * Create empty string-encoding
 *
 * @remarks
 * **Called by**
 * @see encodingByAes 
 *
 * @returns `vl.ValueDefWithConditionMarkPropFieldDefNumber`
 */
function encodingString(): vl.ValueDefWithConditionMarkPropFieldDefStringNull {

  let encoding: vl.ValueDefWithConditionMarkPropFieldDefStringNull = {};

  return encoding;
}

/**
 * Create empty detail-encoding
 *
 * @remarks
 * **Called by**
 * @see encodingByAes 
 *
 * @returns `vl.Detail`
 */
function encodingDetail(): vl.Detail {

  let encoding: vl.Detail = {};

  return encoding;
}

/**
 * Create empty shape-encoding
 *
 * @remarks
 * **Called by**
 * @see encodingByAes 
 *
 * @returns `vl.ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull`
 */
function encodingShape(): vl.ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull {

  let encoding: vl.ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull = {};

  return encoding;
}
