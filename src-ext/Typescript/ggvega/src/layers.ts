import * as vl from './vlSpec';
import * as gs from '../../ggschema/src/index';
import {TranslateLayer} from './layer';

export function TranslateLayers(
  gsData: gs.Datasets,
  gsLayers: gs.Layers,
  gsScales: gs.Scale[],
  gsLabels: gs.Labels
): vl.LayerSpec[] {
  if (gsLayers.length == 0) {
    throw new Error('`Layers` should have at least 1 `Layer`');
  }

  let vlLayers: vl.LayerSpec[] = [];

  gsLayers.map((gslayer: gs.Layer) => {
    vlLayers.push(TranslateLayer(gsData, gslayer));
  });

  vlLayers = LayersLabels(vlLayers, gsLabels);

  vlLayers = LayersScales(vlLayers, gsScales);

  return vlLayers;
}

//ToDo: Use Map() and ?(EncodingKey)
export function LayersLabels(vlLayers: vl.LayerSpec[], gsLabels: gs.Labels): vl.LayerSpec[] {
  vlLayers.map((vlLayer: vl.LayerSpec) => {
    if (vlLayer.encoding) {
      if (vlLayer.encoding.x) {
        vlLayer.encoding.x.title = gsLabels.x;
      }
      if (vlLayer.encoding.y) {
        vlLayer.encoding.y.title = gsLabels.y;
      }
      if (vlLayer.encoding.size) {
        vlLayer.encoding.size.title = gsLabels.size;
      }
      if (vlLayer.encoding.shape) {
        vlLayer.encoding.shape.title = gsLabels.shape;
      }
      if (vlLayer.encoding.stroke) {
        vlLayer.encoding.stroke.title = gsLabels.colour;
      }
      if (vlLayer.encoding.strokeWidth) {
        vlLayer.encoding.strokeWidth.title = gsLabels.stroke;
      }
      if (vlLayer.encoding.opacity) {
        vlLayer.encoding.opacity.title = gsLabels.alpha;
      }
      if (vlLayer.encoding.fill) {
        vlLayer.encoding.fill.title = gsLabels.fill;
      }
    }
  });

  return vlLayers;
}

export function LayersScales(vlLayers: vl.LayerSpec[], gsScales: gs.Scale[]): vl.LayerSpec[] {
  gsScales.map((gsScale: gs.Scale) => {
    vlLayers[0] = LayerScale(vlLayers[0], gsScale);
  });
  return vlLayers;
}

/**
 * TODO: Use methoad loading to add four scales
 * @param vlLayer
 * @param gsScale
 */
export function LayerScale(vlLayer: vl.LayerSpec, gsScale: gs.Scale): vl.LayerSpec {
  if (!vlLayer.encoding) return vlLayer;
  if (gsScale.aesthetics[0] == 'x' && vlLayer.encoding.x) {
    vlLayer.encoding.x.scale = gsScale.transform;
  }
  if (gsScale.aesthetics[0] == 'y' && vlLayer.encoding.y) {
    vlLayer.encoding.y.scale = gsScale.transform;
  }
  return vlLayer;
}
