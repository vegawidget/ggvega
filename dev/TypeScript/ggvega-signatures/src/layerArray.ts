function layerArray(
  gsData: {[key: string]: gs.Data},
  gsLayerArray: gs.Layer[],
  gsScaleArray: gs.Scale[],
  gsLabelObject: gs.Labels,
  gsCoordinates: gs.Coord
) {

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
  itmLayerArray = itmLayerArrayByCoordinates(itmLayerArray, gsCoordinates);

  // change encoding-key namespace from ggspec to Vega-Lite
  let layerArray: vl.LayerSpec[] = itmLayerArray.map(layerRename);

  return layerArray;
}
