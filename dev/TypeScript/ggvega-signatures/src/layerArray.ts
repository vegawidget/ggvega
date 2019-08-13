/**
 * Create layer array
 * 
 * @remark
 * A layer array is composed of individual layers. Here, the translation
 * process has two parts; the layer array is built in stages:
 * 
 *  - Each Vega-Lite `layer` is built according to its corresponding 
 *    ggspec `layer`.
 * 
 *  - The Vega-Lite layer array is then modified according to:
 * 
 *    - ggspec `labels`: 
 *       - each label is associated with a group of aesthetics
 *       - each aesthetic-group is to be labelled no more than once
 *       - as such, we apply a label to its first match in a layer array:
 *         the first matching aesthetic in the first matching layer
 * 
 *    - ggspec `scales`:
 *       - each scale is associated with a group of aesthetics
 *       - each aesthetic-group is to have a scale defined no more than once
 *       - as such, we apply a scale to its first match in a layer array:
 *         the first matching aesthetic in the first matching layer
 * 
 *    - ggspec `coordinates`:
 *       - for the immediate future, Vega-Lite can support only Cartesian
 *         coordinates: <https://github.com/vega/vega-lite/issues/408>
 *       - ggplot2 offers "flipped" (Cartesian) coordinates, 
 *         which we will support 
 * 
 *  There is one other process happening here - each `layer` is initially
 *  constructed not as a Vega-Lite `layer`, but as an "intermediate" `layer`.
 * 
 *  When constructing a `layer` (array), we found to simpler to keep the 
 *  `encoding` namespace, i.e. the names of the keys in the `encoding`
 *  object, based on ggplot2's aesthetic names, rather than Vega-Lite's encoding 
 *  names. This makes it easier to incorporate `stat`s, `scales`, `labels`, etc.
 *  
 *  This means, at the end of this process, to convert from an intermediate 
 *  `layer` array Vega-Lite `layer` array, we have change the `encoding` 
 *  namespace to conform to Vega-Lite.
 * 
 * **Called by**
 * 
 * @see topLevelSpec
 * 
 * **Calls**
 * 
 * @see itmLayer
 * @see itmLayerArrayByLabelObject
 * @see itmLayerArrayByCoord
 * @see layerByItmLayer
 * 
 * @param gsData `{[key: string]: gs.Data}`, key-value pairs of ggspec datasets
 * @param gsLayerArray `gs.Layer[]` - array of ggspec layers
 * @param gsScaleArray `gs.Scale[]` - array of ggspec scales
 * @param gsLabelObject `gs.Labels` - key-value pairs of ggspec labels
 * @param gsCoordinates `gs.Coord` - ggspec coordinates
 * 
 * @return `vl.LayerSpec[]`, array containing Vega-Lite layer specs
 * 
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

  // change encoding-key namespace from ggplot2 to Vega-Lite
  const layerArray: vl.LayerSpec[] = itmLayerArray.map(layerByItmLayer);

  return layerArray;
}

/**
 * Change the `encoding` namespace
 * 
 * @remark
 * To translate an intermediate `layer` to a Vega-Lite `layer`, this function
 * changes the `encoding` namespace from ggplo2 aesthetic-names to Vega-Lite
 * `encoding` keys.
 * 
 * As well, a ggspec `geom` is an element of an intermediate `layer`; we use it
 * as a "breadcrumb", as the mapping of aesthetic names to encoding names depends
 * on the `geom`.
 * 
 * **Called by**
 * 
 * @see layerArray
 * 
 * **Calls**
 * 
 * @see encodingNameByGeom
 * 
 * @param itmLayer - `itmLayer`, intermediate layer-object
 * 
 * @return `vl.Layer`, Vega-Lite layer-object
 *
 */
function layerByItmLayer(itmLayer: itmLayer): vl.Layer {

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