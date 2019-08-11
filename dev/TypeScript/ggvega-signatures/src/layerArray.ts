function layerArray(
  gsData: {[key: string]: gs.Data},
  gsLayerArray: gs.Layer[],
  gsScaleArray: gs.Scale[],
  gsLabels: gs.Labels//,
  // coordinates (not yet active)
  // gsCoordinates: gs.Coordinates
) {

  // validate

  // translate

  // start intermediate layers according to gsLayerArray
 
  // could this work?
  let itmLayerArray = gsLayerArray.map((gsLayer: gs.Layer) => {
    return itmLayer(gsLayer, gsData);
  });

  // incorporate labels

  // incorporate scales

  // incorporate coordinates (not yet active)

  // change encoding-key namespace from ggspec to Vega-Lite

  let layerArray: vl.LayerSpec[] = [];


  return layerArray;
} 