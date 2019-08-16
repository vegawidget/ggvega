import {contains} from './utils';
import * as VL from './vlSpec';
import {VLMapping} from './itmEncodingObject';
import {GGEncodingKey} from './encodingNameByGeom';

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
 * @returns `VL.Encoding` empty encoding
 */
export function encodingByAes(aesName: string): VLMapping {
  // assuming that VL.ValueDefWithConditionMarkPropFieldDefNumber, etc.
  // are all subclasses of VL.Encoding

  //TODO@wenyu: Add group` and `weight` to GG.Mapping. color or colour?

  // keys are ggplot2 aesthetic names
  // values are Vega-Lite encoding constructor-functions for values
  const itmEncodingMap = {
    x: encodingX,
    y: encodingY,
    colour: encodingString,
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
  return itmEncodingMap[aesName as GGEncodingKey]();
}

/**
 * Create empty X-encoding
 *
 * @remarks
 * **Called by**
 * @see encodingByAes
 *
 * @returns `VL.XClass`
 */
function encodingX(): VL.XClass {
  const encoding: VL.XClass = {};

  return encoding;
}

/**
 * Create empty Y-encoding
 *
 * @remarks
 * **Called by**
 * @see encodingByAes
 *
 * @returns `VL.YClass`
 */
function encodingY(): VL.YClass {
  const encoding: VL.YClass = {};

  return encoding;
}

/**
 * Create empty number-encoding
 *
 * @remarks
 * **Called by**
 * @see encodingByAes
 *
 * @returns `VL.DefWithConditionMarkPropFieldDefNumber`
 */
function encodingNumber(): VL.DefWithConditionMarkPropFieldDefNumber {
  const encoding: VL.DefWithConditionMarkPropFieldDefNumber = {};

  return encoding;
}

/**
 * Create empty string-encoding
 *
 * @remarks
 * **Called by**
 * @see encodingByAes
 *
 * @returns `VL.DefWithConditionMarkPropFieldDefStringNull`
 */
function encodingString(): VL.DefWithConditionMarkPropFieldDefStringNull {
  const encoding: VL.DefWithConditionMarkPropFieldDefStringNull = {};

  return encoding;
}

//TODO@wenyu: Use VL.TypedFieldDef rather than VL.Details. Because VL.TypedFieldDef[] don't have `field`
/**
 * Create empty detail-encoding
 *
 * @remarks
 * **Called by**
 * @see encodingByAes
 *
 * @returns `VL.Detail`
 */
function encodingDetail(): VL.TypedFieldDef {
  //NOTE@wenyu: VL.Detail has to define the type - we think we can change this later
  const encoding: VL.TypedFieldDef = {type: VL.StandardType.Nominal};

  return encoding;
}

/**
 * Create empty shape-encoding
 *
 * @remarks
 * **Called by**
 * @see encodingByAes
 *
 * @returns `VL.DefWithConditionMarkPropFieldDefTypeForShapeStringNull`
 */
function encodingShape(): VL.DefWithConditionMarkPropFieldDefTypeForShapeStringNull {
  const encoding: VL.DefWithConditionMarkPropFieldDefTypeForShapeStringNull = {};

  return encoding;
}
