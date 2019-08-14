import * as GG from '../../ggschema/src/index';
import {markByGeom} from './markByGeom';
import {
  itmEncodingObjectByMappingObject,
  itmEncodingObjectByAesParamsObject,
  itmEncodingObjectByStat
} from './itmEncodingObject';

export function itmLayer(ggLayer: GG.Layer, ggData: GG.Datasets): ItmLayer {
  var ggMetadataObject: GG.Metadata = ggData[ggLayer.data].metadata;

  const itmLayer: ItmLayer = {
    data: {name: ggLayer.data},

    geom: ggLayer.geom,

    mark: markByGeom(GG.layerGeom(ggLayer), GG.layerStat(ggLayer)),

    encoding: itmEncodingObjectByMappingObject(ggLayer.mapping, ggMetadataObject)
  };

  // incorporate aes_params into encoding
  itmLayer.encoding = itmEncodingObjectByAesParamsObject(itmLayer.encoding, ggLayer.aes_params);

  // incorporate stat into encoding
  itmLayer.encoding = itmEncodingObjectByStat(itmLayer.encoding, GG.layerStat(itmLayer));

  // incorporate position into encoding (not yet active)
  // itmLayer.encoding = itmEncodingOjectByPosition(itmLayer.encoding, gsLayer.position);

  return itmLayer;
}

export type ItmLayer = any;
