import * as vl from './vlSpec';
import * as gs from '../../ggschema/src/gsSpec';
import {TranslateLayers} from './layers';
import {validateGs} from './util';

export function gs2vl(ggJson: any): vl.TopLevelSpec {
  validateGs(ggJson);

  const gsSpec = ggJson as gs.TopLevelSpec;

  return gs2vlValidated(gsSpec);
}

export function gs2vlValidated(gsSpec: gs.TopLevelSpec): vl.TopLevelSpec {
  const gsData = gsSpec.data;

  const gsLayers = gsSpec.layers;

  const gsScales = gsSpec.scales;

  const gsLabels = gsSpec.labels;

  const vlSpec: vl.TopLevelSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v3.json',

    title: TranslateTitle(gsLabels),

    datasets: TranslateDatasets(gsData),

    layer: TranslateLayers(gsData, gsLayers, gsScales, gsLabels)
  };

  return vlSpec;
}

function TranslateTitle(gsLabels: gs.Labels): string | undefined {
  return gsLabels['title'];
}

export function TranslateDatasets(gsData: {[key: string]: gs.Dataset}): {[key: string]: vl.InlineDataset} {
  const datasets: {[key: string]: vl.InlineDataset} = {};

  for (const dataset in gsData) {
    datasets[dataset] = gsData[dataset].observations;
  }

  if (Object.keys(datasets).length == 0) {
    throw new Error('gsSpec.datasets should have at least 1 dataset');
  }

  return datasets;
}
