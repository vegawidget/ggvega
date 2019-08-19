import * as VL from './vlSpec';
import * as GG from '../../ggschema/src/index';
import {fieldName} from './utils';
import {encodingByAes} from './encodingByAes';
import {GGEncodingKey} from './encodingNameByGeom';
import {encodingValueColor, encodingValueShape, encodingValueSize} from './encodingValue';

/**
 * Create an intermediate `encoding` object using a `mapping` object
 *
 * @remark
 * This function creates an intermdiate `encoding` object using a
 * ggspec `mapping` object and a ggspec `Metadata` object.
 *
 * Currently, a ggspec `mapping` is an object with a single key, `field`.
 * Its value is a string; that string matches to a variable-name
 * in the data.
 *
 * In the near future, a ggspec `mapping` may instead contain a different
 * single key, `stat`, with a string that matches an stat (aggregation)
 * operation, like `"count"`, or `"sum"`.
 *
 * This is more of a note to myself, we are starting to see the patterns
 * of how ggplot2 mappings, aes_params, and stat default_aes are related.
 * I suspect this should be addressed in ggschema.
 * See <https://github.com/vegawidget/ggvega/issues/44>
 *
 * **Called by**
 *
 * @see {@link itmLayer} to create an intermediate layer
 *
 * **Calls**
 *
 * @see {@link encodingByAes} to create an empty encoding
 * @see {@link fieldName} to handle dots, ".", in field names
 *
 * @param ggMappingObject - `GG.Mapping` maps data varaibles to aesthetics
 * @param ggMetadataObject - `GG.Metadata` contains the metadata for the data
 *   associated to this layer
 *
 * @returns `ItmEncodingObject`
 */
export function itmEncodingObjectByMappingObject(
  ggMappingObject: GG.Mapping,
  ggMetadataObject: GG.Metadata
): ItmEncodingObject {
  // translate

  // create empty itmEncodingObject
  const itmEncodingObject: ItmEncodingObject = {};

  // TODO: if the type is `ordinal`, and we have level,
  // we should set the scale domain according to the levels.
  //
  // larger TODO: determine and document the relationship between
  // ggplot    - factor, ordered-factor, levels
  // Vega-Lite - nominal, ordinal, scale-domain

  // for each mapping in gsMappingObject:
  //   - extract the information from the mapping object, metadata
  //   - create Encoding
  //   - populate Encoding
  //   - put Encoding into itmEncodingObject
  for (const aesName in ggMappingObject) {
    if (Object.prototype.hasOwnProperty.call(ggMappingObject, aesName)) {
      // do we have a type/class for `mapping`?

      // extract information from mapping object, metatdata
      const mapping: GG.Encoding = ggMappingObject[aesName as GGEncodingKey] as GG.Encoding;

      // TODO: we need to handle the situation where the mapping is a
      // `stat` instead of a `field`

      // NOTE @wenyu: Define `type` before we change the value of `field`
      const type: VL.StandardType = ggMetadataObject[mapping.field].type;
      const field: string = fieldName(mapping.field);

      // create Encoding
      const encoding: VLMapping = encodingByAes(aesName);

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

/**
 * Modify an intermediate `encoding` object using an `AesParams` object
 *
 * @remarks
 * This function will have side-effects, as the argument `itmEncodingObject`
 * is mutable, and is modified inside this function. We return this object
 * to signify that we intend to modify it, but we suspect that this is not
 * strictly necessary; the function could return `null` to signify that it
 * is called for side-effects. I am curious to know the convention here.
 *
 * This function modifies an intermdiate `encoding` object using a
 * ggspec `AesParams` object. In the future, we may need the `geom`.
 *
 * A ggspec `AesParams` element is a key-value pair, where the key
 * is a ggplot2 aesthetic-name, and the value can be a `string`, `number`,
 * or `boolean` (?).
 *
 * For each `AesParams` element, an `encoding` object is created, and put
 * into `itmEncodingObject` using the ggplot2 aesthetic-name as a key. The
 * value (of this key-value pair) is an object with a single key-value
 * pair: the key is `value`; its value is the value in "visual" space.
 *
 * There are helper functions to translate values for shape, color, and size.
 *
 * In the future, we may be able to take into account values that are specified
 * using "data" space: <https://github.com/vega/vega-lite/issues/1601>
 *
 * **Called by**
 * @see {@link itmLayer} to create an intermediate layer
 *
 * **Calls**
 * @see {@link encodingByAes} to create an empty encoding
 * @see {@link encodingValueShape} to translate shape values
 * @see {@link encodingValueColor} to translate color values
 * @see {@link encodingValueSize} to translate size values
 *
 *
 * @param itmEncodingObject
 * @param ggAesParamsObject
 *
 * @returns `ItmEncodingObject`
 */
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
  for (const aesName in ggAesParamsObject) {
    if (Object.prototype.hasOwnProperty.call(ggAesParamsObject, aesName)) {
      // extract information from aes_params

      // NOTE @wenyu: Maybe the `value` can have other types
      let value: string | number | undefined = ggAesParamsObject[aesName as keyof GG.AesParams];

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
        // NOTE: we will likely need the Geom, which I think we can get
        // from the `geom` breadcrumb included with the itmEncoding
        value = encodingValueShape(Number(value));
      }

      if (aesName == 'colour' || aesName == 'fill') {
        value = encodingValueColor(String(value));
      }

      if (aesName == 'size') {
        value = encodingValueSize(Number(value));
      }

      // create Encoding
      const encoding: VLAesParams = {};

      //NOTE @wenyu: The encoding can only have the encoding property and the aes_params will overlap mapping. And it shouldn't have a title?
      //  https://github.com/vega/vega-lite/blob/master/src/encoding.ts#L170

      // populate Encoding
      encoding.value = value;

      // put Encoding into ItmEncodingObject
      itmEncodingObject[aesName] = encoding;
    }
  }

  // return
  return itmEncodingObject;
}

//NOTE @wenyu: Define itmEncodingObject
export interface ItmEncodingObject {
  [key: string]: VLMapping | VL.TypedFieldDef;
}

//NOTE @wenyu: Remove VL.TypedFieldDef from Mapping. Because VL.TypedFieldDef doesn't have `value` and `scale`. We only add scale and value to VLMapping
export type VLMapping =
  | VL.XClass
  | VL.YClass
  | VL.DefWithConditionMarkPropFieldDefNumber
  | VL.DefWithConditionMarkPropFieldDefStringNull
  | VL.DefWithConditionMarkPropFieldDefTypeForShapeStringNull;

//NOTE @wenyu: Only used for AesParam
//NOTE @ian - if Vega-Lite enables datum to specify a value in data-space,
// we could add VL.XClass and VL.YClass
export type VLAesParams =
  | VL.DefWithConditionMarkPropFieldDefNumber
  | VL.DefWithConditionMarkPropFieldDefStringNull
  | VL.DefWithConditionMarkPropFieldDefTypeForShapeStringNull;
