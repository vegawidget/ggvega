import * as vl from './vlSpec';
import * as gs from '../../ggschema/src/index';
import {TranslateEncoding} from './encoding';

/**
 * @param gsLayer
 * @param labels
 * @param data
 * @param scales
 */
export function TranslateLayer(gsData: gs.Datasets, gsLayer: gs.Layer): vl.LayerSpec {
  const gsMetadata: gs.Metadata = GetMetadata(gsData, gsLayer);

  const vlLayer: vl.LayerSpec = StartLayer(gsLayer, gsMetadata);

  return vlLayer;
}

export function GetMetadata(gsData: gs.Datasets, gsLayer: gs.Layer): gs.Metadata {
  return gsData[gsLayer.data].metadata;
}

export function StartLayer(gsLayer: gs.Layer, gsMetadata: gs.Metadata): vl.LayerSpec {
  // eslint-disable-next-line @typescript-eslint/camelcase
  const vlMark: vl.Mark = TranslateMark({geom: gsLayer.geom, geom_params: gsLayer.geom_params} as gs.Geom);

  const vlLayer: vl.LayerSpec = {
    data: {
      name: gsLayer.data
    },
    mark: vlMark,
    encoding: TranslateEncoding(gsLayer, gsMetadata, vlMark)
  };

  return vlLayer;
}

export function TranslateMark(geom: gs.Geom): vl.Mark {
  let mark: vl.Mark;
  if (geom.geom.class == 'GeomPoint') {
    mark = vl.Mark.Point;
  } else {
    throw new Error('geom.class can only be `GeomPoint`');
  }

  return mark;
}
