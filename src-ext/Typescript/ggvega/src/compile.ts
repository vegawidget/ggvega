import * as vl from './vlSpec';
import * as gs from '../../ggschema/src/ggSpec';
import {TranslateLayer} from './layer';
import {validateGs} from './util';

export function gs2vl(ggJson: any): vl.TopLevelSpec {
  validateGs(ggJson);

  const ggSpec = ggJson as gs.TopLevelSpec;

  return gs2vlValidated(ggSpec);
}

export function gs2vlValidated(ggSpec: gs.TopLevelSpec): vl.TopLevelSpec {
  const ggLayers = ggSpec.layers;

  const ggLabels = ggSpec.labels;

  const ggData = ggSpec.data;

  const ggScales = ggSpec.scales;

  const vlSpec: vl.TopLevelSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v3.json',

    title: TranslateTitle(ggLabels),

    datasets: TranslateDatasets(ggData),

    layer: TranslateLayers(ggLayers, ggLabels, ggData, ggScales)
  };

  return vlSpec;
}

function TranslateTitle(ggLabels: gs.Labels): string | undefined {
  return ggLabels['title'];
}

export function TranslateDatasets(ggData: {[key: string]: gs.Dataset}): {[key: string]: vl.InlineDataset} {
  const datasets: {[key: string]: vl.InlineDataset} = {};

  for (const dataset in ggData) {
    datasets[dataset] = ggData[dataset].observations;
  }

  if (Object.keys(datasets).length == 0) {
    throw new Error('ggSpec.datasets should have at least 1 dataset');
  }

  return datasets;
}

export function TranslateLayers(
  ggLayers: gs.Layer[],
  ggLabels: gs.Labels,
  ggData: gs.Datasets,
  ggScales: gs.Scale[]
): vl.LayerSpec[] {
  if (ggLayers.length == 0) {
    throw new Error('`Layers` should have at least 1 `Layer`');
  }

  const layers: vl.LayerSpec[] = [];

  ggLayers.map((gglayer: gs.Layer) => {
    layers.push(TranslateLayer(gglayer, ggLabels, ggData, ggScales));
  });

  return layers;
}
