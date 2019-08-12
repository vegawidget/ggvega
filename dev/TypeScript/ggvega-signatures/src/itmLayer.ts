function itmLayer(gsLayer: gs.Layer, gsData: gsData): ItmLayer {

  // translate

  // get the metadata for the data for this layer
  var gsMetadata: gs.Metadata = gsData[gsLayer.data].metadata;

  let itmLayer: ItmLayer = {
    data: {name: gsLayer.data},
    // leave this as a breadcrumb so that we can use encodingNameByGeom()
    // - will not be not included in vl.Layer
    geom: gsLayer.geom, 
    mark: layerMarkbyGeom(gsLayer.geom, gsLayer.geom_params, gsLayer.stat_params),
    encoding: itmLayerEncodingObjectByMapping(gsLayer.mapping, gsLayer.aes_params, gsMetadata)
  };

  // incorporate stat into encoding 
  itmLayer.encoding = itmLayerEncodingObjectByStat(itmLayer.encoding, gsLayer.stat, gsLayer.stat_params);

  // incorporate position into encoding (not yet active)
  // itmLayer.encoding = itmLayerEncodingOjectByPosition(itmLayer.encoding, gsLayer.position);

  return itmLayer;
}