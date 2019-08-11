function itmLayer(gsLayer: gs.Layer, gsData: gsData): ItmLayer {

  // translate

  // get the metadata for the data for this layer
  var gsMetadata: gs.Metadata = gsData[gsLayer.data].metadata;

  let itmLayer: ItmLayer = {
    data: {name: gsLayer.data},
    mark: itmLayerMarkbyGeom(gsLayer.geom, gsLayer.geom_params),
    // mark: itmLayerMarkbyGeom(gsLayer.geom, gsLayer.geom_params, gsLayer.stat_params),
    encoding: itmLayerEncodingByMapping(gsLayer.mapping, gsLayer.aes_params, gsMetadata)
  };

  // incorporate stat into encoding (not yet active)
  // itmLayer.encoding = itmLayerEncodingByStat(itmLayer.encoding, gsLayer.stat, gsLayer.stat_params) {
  //  
  // };

  // incorporate position into encoding (not yet active)
  // itmLayer.encoding = itmLayerEncodingByPosition(itmLayer.encoding, gsLayer.position) {
  //  
  // };

  return itmLayer;
}