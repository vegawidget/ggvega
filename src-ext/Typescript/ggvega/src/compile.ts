import {TopLevelSpec, InlineDataset, LayerSpec} from './vlSpec';
import {TranslateLayer} from './LayerSpec';

export function gg2vl(ggSpec: any): TopLevelSpec {
  const vl: TopLevelSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v3.json',

    title: TranslateTitle(ggSpec['labels']),

    datasets: TranslateDatasets(ggSpec['data']),

    layer: TranslateLayers(ggSpec['layers'], ggSpec['labels'], ggSpec['data'], ggSpec['scales'])
  };

  return vl;
}

function TranslateTitle(ggLabels: any): string | undefined {
  if (!ggLabels) return undefined;

  if (ggLabels['title']) return ggLabels['title'];
  else return undefined;
}

export function TranslateDatasets(ggData: any): {[key: string]: InlineDataset} {
  let n = 0;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const _dataset in ggData) {
    n++;
  }
  if (n == 0) {
    throw new Error('ggSpec should have at least 1 dataset');
  } else {
    const datasets: {[key: string]: InlineDataset} = {};
    for (const dataset in ggData) {
      datasets[dataset] = ggData[dataset]['observations'];
    }
    return datasets;
  }
}

export function TranslateLayers(ggLayers: any, ggLabels: any, ggData: any, ggScales: any): LayerSpec[] {
  let n = 0;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const _layer in ggLayers) {
    n++;
  }
  if (n == 0) {
    throw new Error('ggSpec should have at least 1 layer');
  } else {
    const layers: LayerSpec[] = [];

    for (const layer of ggLayers) {
      layers.push(TranslateLayer(layer, ggLabels, ggData, ggScales));
    }

    return layers;
  }
}

/**
 * This function remove empty object in the vlSpec
 * @param obj
 *
 */
export function removeEmpty(obj: any) {
  if (!(obj != null && typeof obj === 'object')) return;

  Object.keys(obj).forEach(function(key) {
    if (obj[key] && typeof obj[key] === 'object') {
      if (Object.keys(obj[key]).length === 0) {
        delete obj[key];
        return;
      }

      removeEmpty(obj[key]);

      if (Object.keys(obj[key]).length === 0) {
        delete obj[key];
        return;
      }
    } else if (obj[key] === null) {
      delete obj[key];
      return;
    }
  });
}
