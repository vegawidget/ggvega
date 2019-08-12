function itmEncodingObjectByMapping(
  gsMapping: gs.Mapping, 
  gsAesParams: gs.AesParams,
  gsMetadata: gs.Metadata
): ItmEncodingObject {

  // translate

  // create empty itmEncodingObject
  // TODO: define ItmEncodingObject
  let itmEncodingObject: ItmEncodingObject = {};

  // for each member of gsLayerMapping:
  // - create an itmLayerEncoding
  // - populate the itmLayerEncoding
  // - put itmLayerEncoding into the itmLayerEncodingObject 
  for (let key in gsMapping) {
    if (gsMapping.hasOwnProperty(key)) {
      // do we have a type/class for `mapping`?
      let mapping = gsMapping[key];
      let encoding: vl.Encoding = itmEncoding(key);

      let field: string = fieldName(mapping.field);
      let type: vl.StandardType = gsMetadata[field].type;

      // assuming that TypeScript will protect us from setting 
      // properties that are not available
      encoding.field = field;
      encoding.type = type;

      // I think that by changing `encoding`, we change `itmLayerEncoding(key)`
    }
  }

  // for each member of gsAesParams:
  // - create an itmEncoding
  // - populate the itmEncoding
  // - put itmEncoding into the itmEncodingObject 
  for (let key in gsAesParams) {
    if (gsAesParams.hasOwnProperty(key)) {
      let mapping: string | number | boolean = gsMapping[key];
      let encoding: vl.Encoding = itmEncoding(key);

      // is there a Vega-Lite type for this?
      let value: string | number | boolean = mapping; 

      // one thing to keep in mind is that values are interpreted 
      // in the "visual" space, not the "data" space
      //
      // issue: https://github.com/vega/vega-lite/issues/1601, 
      // PR: https://github.com/vega/vega-lite/pull/4201

      // key is ggplot-aesthetic name
      if (key == 'shape') {
        value = valueShape(Number(mapping));
      } 
      
      if (key == 'colour' || key == 'fill') {
        value = valueColor(String(mapping));
      }
      
      if (key == 'size') {
        value = valueSize(Number(mapping));
      }  

      encoding.value = value; 
    }
  }
  // return itmEncodingObject
  return itmEncodingObject;
}