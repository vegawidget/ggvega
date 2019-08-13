/**
 * Create an intermediate `encoding` object using a `mapping` object
 * 
 * @remark
 * This function creates an intermdiate `encoding` object using a 
 * ggspec `mapping` object and a ggspec `aesParams` object.
 * 
 * This could be split into two functions: one that deals with
 * `gsMappingObject` and `gsMetadataObject`
 * 
 * This is more of a note to myself, we are starting to see the patterns
 * of how ggplot2 mappings, aes_params, and stat default_aes are related.
 * I suspect this should be addressed in ggschema.
 * See <https://github.com/vegawidget/ggvega/issues/44>
 * 
 * @param gsMappingObject - `gs.Mapping` maps data varaibles to aesthetics
 * @param gsAesParamsObject - `gs.AesParams` maps values to aestheics
 * @param gsMetadataObject - `gs.Metadata` contains the metadata for the data
 *   associated to this layer
 * 
 * @return `ItmEncodingObject`
 */
function itmEncodingObjectByMappingObject(
  gsMappingObject: gs.Mapping, 
  gsAesParamsObject: gs.AesParams,
  gsMetadataObject: gs.Metadata
): ItmEncodingObject {

  // translate

  // create empty itmEncodingObject
  // TODO: define interface for ItmEncodingObject
  let itmEncodingObject: ItmEncodingObject = {};

  // TODO: if the type is `ordinal`, and we have level, 
  // we should set the scale domain according to the levels.
  //
  // larger TODO: determine and document the relationship between
  // ggplot    - factor, ordered-factor, levels
  // Vega-Lite - nominal, ordinal, scale-domain

  // for each member of gsMappingObject:
  // - create an itmEncoding
  // - populate the itmEncoding using the mapping
  // - put itmEncoding into the itmEncodingObject 
  for (let aesName in gsMappingObject) {
    if (gsMappingObject.hasOwnProperty(aesName)) {
      // do we have a type/class for `mapping`?

      // extract information from mapping object, metatdata
      let mapping = gsMappingObject[aesName];

      const field: string = fieldName(mapping.field);
      const type: vl.StandardType = gsMetadata[field].type;

      // create ItmEncoding
      let encoding: vl.Encoding = itmEncoding(aesName);

      // popuate ItmEncoding  
      encoding.field = field;
      encoding.type = type;

      // assuming that TypeScript will protect us from setting 
      // properties that are not available

      // put ItmEncoding into ItmEncodingObject
      itmEncodingObject[aesName] = encoding;
    }
  }

  // return 
  return itmEncodingObject;
}

function itmEncodingObjectByAesParamsObject(
  itmEncodingObject: ItmEncodingObject,
  gsAesParamsObject: gs.AesParams,
): ItmEncodingObject {

  // NOTE: we may have to pass the `geom` from itmLayer()

  // for each member of gsAesParams:
  // - create an itmEncoding
  // - populate the itmEncoding
  // - put itmEncoding into the itmEncodingObject 
  for (let aesName in gsAesParamsObject) {
    if (gsAesParamsObject.hasOwnProperty(aesName)) {

      // extract information from aes_params
      let value: string | number | boolean = gsAesParamsObject[key];

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

       // create ItmEncoding     
      let encoding: vl.Encoding = itmEncoding(aesName);

      // populate ItmEncoding
      encoding.value = value;

      // put ItmEncoding into ItmEncodingObject
      itmEncodingObject[aesName] = encoding;
    }
  }
    // return 
    return itmEncodingObject;
}