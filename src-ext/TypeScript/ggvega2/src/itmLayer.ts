import * as GG from '../../ggschema/src/index';

export function itmLayer(ggLayer: GG.Layer, ggData: GG.Datasets): ItmLayer {
  var ggMetadataObject: GG.Metadata = ggData[ggLayer.data].metadata;

  const itmLayer: ItmLayer = {
    data: {name: ggLayer.data},
    // leave `geom` as a breadcrumb so that we can use encodingNameByGeom()
    // - will not be not included in vl.Layer
    geom: ggLayer.geom,
    mark: markByGeom(ggLayer.geom, ggLayer.geom_params, ggLayer.stat_params),
    encoding: itmEncodingObjectByMappingObject(ggLayer.mapping, ggMetadataObject)
  };

  // incorporate aes_params into encoding
  itmLayer.encoding = itmEncodingObjectByAesParamsObject(itmLayer.encoding, ggLayer.aes_params);

  // incorporate stat into encoding
  itmLayer.encoding = itmEncodingObjectByStat(itmLayer.encoding, ggLayer.stat, ggLayer.stat_params);

  // incorporate position into encoding (not yet active)
  // itmLayer.encoding = itmEncodingOjectByPosition(itmLayer.encoding, gsLayer.position);

  return itmLayer;
}

export type ItmLayer = any;
