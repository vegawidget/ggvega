function itmLayer(gsLayer: gs.Layer, gsData: gsData): ItmLayer {

  // translate

  // get the metadata for the data for this layer
  var gsMetadata: gs.Metadata = gsData[gsLayer.data].metadata;

  let itmLayer: ItmLayer = {
    data: {name: gsLayer.data},
    // leave this as a breadcrumb so that we can use encodingNameByGeom()
    // - will not be not included in vl.Layer
    geom: gsLayer.geom, 
    mark: markByGeom(gsLayer.geom, gsLayer.geom_params, gsLayer.stat_params),
    encoding: itmEncodingObjectByMapping(gsLayer.mapping, gsLayer.aes_params, gsMetadata)
  };

  // incorporate stat into encoding 
  itmLayer.encoding = itmEncodingObjectByStat(itmLayer.encoding, gsLayer.stat, gsLayer.stat_params);

  // incorporate position into encoding (not yet active)
  // itmLayer.encoding = itmEncodingOjectByPosition(itmLayer.encoding, gsLayer.position);

  return itmLayer;
}