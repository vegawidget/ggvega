function itmLayerEncodingObjectByMapping(
  gsLayerMapping: gs.Mapping, 
  gsLayerAesParams: gs.AesParams,
  gsMetadata: gs.Metadata
): ItmLayerEncodingObject {

  // translate

  // create empty itmLayerEncodingObject
  // TODO: define ItmLayerEncodingObject
  let itmLayerEncodingObject: ItmLayerEncodingObject = {};

  // for each member of gsLayerMapping:
  // - create an itmLayerEncoding
  // - populate the itmLayerEncoding
  // - put itmLayerEncoding into the itmLayerEncodingObject 
  for (let key in gsLayerMapping) {
    if (gsLayerMapping.hasOwnProperty(key)) {
      // do we have a type/class for `mapping`?
      let mapping = gsLayerMapping[key];
      let encoding: vl.Encoding = itmLayerEncoding(key);

      let field: string = fieldName(mapping.field);
      let type: vl.StandardType = gsMetadata[field].type;

      // assuming that TypeScript will protect us from setting 
      // properties that are not available
      encoding.field = field;
      encoding.type = type;

      // I think that by changing `encoding`, we change `itmLayerEncoding(key)`
    }
  }

  // for each member of gsLayerAesParams:
  // - create an itmLayerEncoding
  // - populate the itmLayerEncoding
  // - put itmLayerEncoding into the itmLayerEncodingObject 
  for (let key in gsLayerAesParams) {
    if (gsLayerAesParams.hasOwnProperty(key)) {
      let mapping: string | number | boolean = gsLayerMapping[key];
      let encoding: vl.Encoding = itmLayerEncoding(key);

      // is there a Vega-Lite type for this?
      let value: string | number | boolean = mapping; 

      encoding.value = value; 
    }
  }
  // return itmLayerEncodingObject
  return itmLayerEncodingObject;
}