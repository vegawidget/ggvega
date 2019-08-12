/**
 * Create layer array
 * 
 * @remark
 * Some parts of 
 * 
 * @param gsData `{[key: string]: gs.Data}`, key-value pairs of ggspec datasets
 * @param gsLayerArray `gs.Layer[]` - array of ggspec layers
 * @param gsScaleArray `gs.Scale[]` - array of ggspec scales
 * @param gsLabelObject `gs.Labels` - key-value pairs of ggspec labels
 * @param gsCoordinates `gs.Coord` - ggspec coordinates
 * 
 * @return `vl.LayerSpec[]`, array containing Vega-Lite layer specs
 */
function layerArray(
  gsData: {[key: string]: gs.Data},
  gsLayerArray: gs.Layer[],
  gsScaleArray: gs.Scale[],
  gsLabelObject: gs.Labels,
  gsCoordinates: gs.Coord
): vl.LayerSpec[] {

  // validate
  if (gsLayerArray.length == 0) {
    throw new Error('ggplot object has no layers, requires at least one layer');
  }

  // translate

  // start intermediate layers according to gsLayerArray
  // could this work?
  let itmLayerArray: ItmLayer[] = gsLayerArray.map(
    (gsLayer: gs.Layer) => {
      return itmLayer(gsLayer, gsData);
    }
  );

  // incorporate labels
  itmLayerArray = itmLayerArrayByLabelObject(itmLayerArray, gsLabelObject);

  // incorporate scales
  itmLayerArray = itmLayerArrayByScaleArray(itmLayerArray, gsScaleArray);

  // incorporate coordinates 
  itmLayerArray = itmLayerArrayByCoord(itmLayerArray, gsCoordinates);

  // change encoding-key namespace from ggspec to Vega-Lite
  const layerArray: vl.LayerSpec[] = itmLayerArray.map(layerByItmLayer);

  return layerArray;
}

// rename all the encodings in the layer
function layerByItmLayer(itmLayer: itmLayer) {

  // create new encoding
  var encoding: vl.Encoding = {};

  // loop over aesthetic names in itmLayerEncoding
  for (let aesName in itmLayer.encoding) {
    if (itmLayer.encoding.hasOwnProperty(aesName)) {
      // get the encoding name, add to the encoding
      var encodingName = encodingNameByGeom(aesName, itmLayer.geom);
      encoding[encodingName] = itmLayer.encoding[aesName];
    }
  }

  const layer: vl.Layer = {
    data: itmLayer.data,
    mark: itmLayer.mark,
    encoding: encoding
  };
  
  return layer;
}