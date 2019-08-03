import * as vl from './vlSpec';
import {TranslateLayer} from './layer';
import * as gs from '../../ggschema/src/ggSpec';
import * as ggSpecJsonSchema from '../../ggschema/build/ggschema.json';
import Ajv from 'ajv';

const ajv = new Ajv({
  validateSchema: true,
  allErrors: true,
  extendRefs: 'fail',
  schemaId: 'auto'
});

const gsValidate = ajv.compile(ggSpecJsonSchema);

export function validateGs(spec: gs.TopLevelSpec) {
  const valid = gsValidate(spec);
  const errors = gsValidate.errors;

  if (errors)
    errors.map((err: Ajv.ErrorObject) => {
      console.warn('ggSpec' + err.dataPath + ' ' + err.message);

      // throw new Error('ggSpec' + err.dataPath + ' ' + err.message);
    });

  return valid;
}

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

/**
 * This function remove empty object in the vlSpec
 * @param obj
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
