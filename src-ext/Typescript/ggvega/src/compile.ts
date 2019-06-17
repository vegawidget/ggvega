import * as vlspec from './VlSpec';
import {TranslateLayer} from './LayerSpec';
/**
 * Main function to translate ggspec to vlspec
 * @param ggSpec
 */
export function gg2vl(ggSpec: any): vlspec.TopLevelSpec {
  const layers: vlspec.LayerSpec[] = [];

  const labels: any = ggSpec['labels'];

  const data: any = ggSpec['data'];

  const scales: any = ggSpec['scales'];

  for (const layer of ggSpec['layers']) {
    layers.push(TranslateLayer(layer, labels, data, scales));
  }

  const datasets: any = {};

  for (const dataset in ggSpec['data']) {
    datasets[dataset] = ggSpec['data'][dataset]['observations'];
  }

  const vl: vlspec.TopLevelSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
    title: ggSpec['labels']['title'],
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
function removeEmpty(obj: any) {
  Object.keys(obj).forEach(function(key) {
    if (obj[key] == null || JSON.stringify(obj[key]) == '{}') {
      delete obj[key];
    } else if (obj[key] && typeof obj[key] === 'object') removeEmpty(obj[key]);
  });
}
