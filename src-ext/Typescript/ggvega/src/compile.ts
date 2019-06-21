import * as vlspec from './VlSpec';
import {TranslateLayer} from './LayerSpec';

/**
 * Main function to translate ggspec to vlspec
 * @param ggSpec
 */
export function gg2vl(ggSpec: any): vlspec.TopLevelSpec {
  let layers: vlspec.LayerSpec[] | undefined;

  const labels: any = ggSpec['labels'];

  const data: any = ggSpec['data'];

  const scales: any = ggSpec['scales'];

  let title: string | undefined;

  if (labels) {
    if (labels['title']) {
      title = labels['title'];
    }
  }

  if (ggSpec['layers'] != null) {
    layers = [];

    for (const layer of ggSpec['layers']) {
      layers.push(TranslateLayer(layer, labels, data, scales));
    }
  }

  const datasets: any = {};

  for (const dataset in ggSpec['data']) {
    datasets[dataset] = ggSpec['data'][dataset]['observations'];
  }

  const vl: vlspec.TopLevelSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
    title: title,
    datasets: datasets,
    layer: layers
  };

  removeEmpty(vl);

  return vl;
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
