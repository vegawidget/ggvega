import * as VLChanDef from 'vega-lite/src/channeldef';
import {VLEncodingField} from './itmEncodingObject';
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
export function encodingByAes(aesName: string): VLEncodingField {
  // assuming that VL.ValueDefWithConditionMarkPropFieldDefNumber, etc.
  // are all subclasses of VL.Encoding

  // keys are ggplot2 aesthetic names
  // values are Vega-Lite encoding constructor-functions for values
  const itmEncodingMap = {
    x: encodingPosition,
    y: encodingPosition,
    colour: encodingString,
    fill: encodingString,
    size: encodingNumber,
    stroke: encodingNumber,
    alpha: encodingNumber,
    group: encodingDetail,
    shape: encodingShape,
    weight: encodingNumber
    // NOTE: the weight aesthetic is used for stat calculations, it will not appear as an encoding key.
  };

  // validate
  if (!Object.keys(itmEncodingMap).includes(aesName)) {
    throw new Error(`ggplot object contains unsupported aesthetic: ${aesName}`);
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
function encodingPosition(): VLChanDef.PositionFieldDef<VLChanDef.Field> {
  // hoping it's possible to set `type` here, then change it later
  const encoding: VLChanDef.PositionFieldDef<VLChanDef.Field> = {type: 'nominal'};

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
function encodingNumber(): VLChanDef.NumericFieldDefWithCondition<VLChanDef.Field> {
  const encoding: VLChanDef.NumericFieldDefWithCondition<VLChanDef.Field> = {type: 'nominal'};

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
function encodingString(): VLChanDef.StringFieldDefWithCondition<VLChanDef.Field> {
  const encoding: VLChanDef.StringFieldDefWithCondition<VLChanDef.Field> = {type: 'nominal'};

  return encoding;
}

//NOTE @wenyu: Use VL.TypedFieldDef rather than VL.Details. Because we only use VL.TypedFieldDef
/**
 * Create empty detail-encoding
 *
 * @remarks
 * **Called by**
 * @see encodingByAes
 *
 * @returns `VL.TypedFieldDef`
 */
function encodingDetail(): VLChanDef.FieldDefWithoutScale<VLChanDef.Field> {
  //NOTE @wenyu: VL.Detail has to define the type - we think we can change this later
  const encoding: VLChanDef.FieldDefWithoutScale<VLChanDef.Field> = {type: 'nominal'};

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
function encodingShape(): VLChanDef.ShapeFieldDefWithCondition<VLChanDef.Field> {
  const encoding: VLChanDef.ShapeFieldDefWithCondition<VLChanDef.Field> = {type: 'nominal'};

  return encoding;
}
