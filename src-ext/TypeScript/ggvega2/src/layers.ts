import * as vl from './vlSpec';
import * as gs from '../../ggschema/src/index';
import {TranslateLayer} from './layer';
import {DefaultEncodingKey, GsKey, VlKey} from './encodingkey';

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

//ToDo: if we use Encodingkey, We should use GeomType? But every layer has different GeomType
//for Each and map don't support break?
export function LayersLabels(vlLayers: vl.LayerSpec[], gsLabels: gs.Labels): vl.LayerSpec[] {
  for (const key in DefaultEncodingKey) {
    if (gsLabels[DefaultEncodingKey[key as VlKey] as GsKey]) {
      for (const vlLayer of vlLayers) {
        if (vlLayer.encoding) {
          const vlLayerEncodingValue = vlLayer.encoding[key as VlKey];
          if (vlLayerEncodingValue) {
            vlLayerEncodingValue.title = gsLabels[DefaultEncodingKey[key as VlKey] as GsKey];
            break;
          }
        }
      }
    }
  }

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
