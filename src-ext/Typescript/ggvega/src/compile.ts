import {TopLevelSpec, InlineDataset, LayerSpec} from './vlSpec';
import {TranslateLayer} from './LayerSpec';
import * as ggschema from '../../ggschema/src/ggSpec';
import * as ggSpecJsonSchema from '../../ggschema/build/ggschema.json';
import Ajv from 'ajv';

const ajv = new Ajv({
  validateSchema: true,
  allErrors: true,
  extendRefs: 'fail',
  schemaId: 'auto'
});

const validateGg = ajv.compile(ggSpecJsonSchema);

export function validateGG(spec: ggschema.TopLevelSpec) {
  const valid = validateGg(spec);
  const errors = validateGg.errors;

  if (errors)
    errors.map((err: Ajv.ErrorObject) => {
      console.warn('ggSpec' + err.dataPath + ' ' + err.message);

      throw new Error('ggSpec' + err.dataPath + ' ' + err.message);
    });

  return valid;
}

export function gg2vl(ggJson: any): TopLevelSpec {
  validateGG(ggJson);

  const ggSpec = ggJson as ggschema.TopLevelSpec;

  const ggLayers = ggSpec.layers;

  const ggLabels = ggSpec.labels;

  const ggData = ggSpec.data;

  const ggScales = ggSpec.scales;

  const vl: TopLevelSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v3.json',

    title: TranslateTitle(ggLabels),

    datasets: TranslateDatasets(ggData),

    layer: TranslateLayers(ggLayers, ggLabels, ggData, ggScales)
  };

  return vl;
}

function TranslateTitle(ggLabels: ggschema.Labels): string | undefined {
  return ggLabels['title'];
}

export function TranslateDatasets(ggData: {[key: string]: ggschema.Dataset}): {[key: string]: InlineDataset} {
  const datasets: {[key: string]: InlineDataset} = {};

  for (const dataset in ggData) {
    datasets[dataset] = ggData[dataset].observations;
  }

  return datasets;
}

export function TranslateLayers(
  ggLayers: ggschema.Layer[],
  ggLabels: ggschema.Labels,
  ggData: ggschema.Datasets,
  ggScales: ggschema.Scale[]
): LayerSpec[] {
  if (ggLayers.length == 0) {
    throw new Error('`Layers` should have at least 1 `Layer`');
  }

  const layers: LayerSpec[] = [];

  ggLayers.map((gglayer: ggschema.Layer) => {
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
