import * as VL from './vlSpec';
import * as GG from '../../ggschema/src/index';
import {contains, fieldName} from './util';
import {GGKey} from './encodingkey';
import {encodingByAes} from './encodingByAes';

export function itmEncodingObjectByMappingObject(
  ggMappingObject: GG.Mapping,
  ggMetadataObject: GG.Metadata
): ItmEncodingObject {
  let itmEncodingObject: ItmEncodingObject = {};

  for (let aesName in ggMappingObject) {
    if (ggMappingObject.hasOwnProperty(aesName)) {
      let mapping: GG.Encoding = ggMappingObject[aesName as GGKey] as GG.Encoding;

      let field: string = fieldName(mapping.field);
      let type: VL.StandardType = ggMetadataObject[field].type;

      let encoding:
        | VL.DefWithConditionMarkPropFieldDefNumber
        | VL.DefWithConditionMarkPropFieldDefStringNull
        | VL.DefWithConditionMarkPropFieldDefTypeForShapeStringNull = encodingByAes(aesName);

      // popuate Encoding
      encoding.field = field;
      encoding.type = type;

      // assuming that TypeScript will protect us from setting
      // properties that are not available

      // put Encoding into ItmEncodingObject
      itmEncodingObject[aesName] = encoding;
    }
  }

  // return
  return itmEncodingObject;
}

export type ItmEncodingObject = any;

export function itmEncodingObjectByAesParamsObject(
  itmEncodingObject: ItmEncodingObject,
  ggAesParamsObject: GG.AesParams
): ItmEncodingObject {
  // NOTE: we may have to pass the `geom` from itmLayer()

  // for each member of gsAesParams:
  //   - extract information from aesParams
  //   - create ItmEncoding
  //   - populate ItmEncoding
  //   - put ItmEncoding into itmEncodingObject
  for (let aesName in ggAesParamsObject) {
    if (ggAesParamsObject.hasOwnProperty(aesName)) {
      // extract information from aes_params
      let value: string | number | boolean = ggAesParamsObject[key];

      /**
       * keep in mind that values are interpreted
       * in the "visual" space, not the "data" space
       *
       * this will be an issue for geom_hline and geom_vline,
       * as their x & y aes_params are specified in "data" space
       *
       * issue: https://github.com/vega/vega-lite/issues/1601
       * PR: https://github.com/vega/vega-lite/pull/4201
       */

      // tranlsate
      if (aesName == 'shape') {
        // TODO: we will likely need the Geom, which I think we can get
        // from the `geom` breadcrumb included with the itmEncoding
        value = encodingValueShape(Number(value));
      }

      if (aesName == 'colour' || key == 'fill') {
        value = encodingValueColor(String(value));
      }

      if (aesName == 'size') {
        value = encodingValueSize(Number(value));
      }

      // create Encoding
      let encoding: VL.Encoding = encodingByAes(aesName);

      // populate Encoding
      encoding.value = value;

      // put Encoding into ItmEncodingObject
      itmEncodingObject[aesName] = encoding;
    }
  }

  // return
  return itmEncodingObject;
}

export function itmEncodingObjectByStat(itmEncodingObject: ItmEncodingObject, ggStat: GG.Stat): ItmEncodingObject {
  const statMap = {
    StatIdentity: itmEncodingObjectByStatIdentity
  };

  // validate
  if (!contains(Object.keys(statMap), ggStat.stat.class)) {
    throw new Error('ggplot object contains unsupported stat: ' + ggStat.stat.class);
  }

  const key: 'StatIdentity' = ggStat.stat.class;

  const functionTranslate = statMap[key];

  return functionTranslate(itmEncodingObject, ggStat);
}

/**
 * Modify an encoding object according an identity stat
 *
 * @remarks
 * This function does nothing.
 *
 * **Called by**
 * @see itmEncodingObjectByStat
 *
 * @param itmEncodingObject
 * @param ggStat
 * @param ggStatParams
 *
 * @return itmEncodingObject
 */
function itmEncodingObjectByStatIdentity(itmEncodingObject: ItmEncodingObject, ggStat: GG.Stat): ItmEncodingObject {
  // do nothing
  return itmEncodingObject;
}
