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

  validateGg.length;

  if (errors)
    errors.map((err: Ajv.ErrorObject) => {
      throw new Error(err.dataPath + ' ' + err.message);
    });

  return valid;
}

export function gg2vl(ggJson: any): TopLevelSpec {
  validateGG(ggJson);

  const ggSpec = ggJson as ggschema.TopLevelSpec;

  const ggLayers: ggschema.Layer[] = ggSpec.layers;

  const ggLabels: ggschema.Labels | undefined = ggSpec.labels;

  const ggData: {[key: string]: ggschema.Dataset} = ggSpec.data;

  const ggScales: object[] | undefined = ggSpec.scales;

  const vl: TopLevelSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v3.json',

    title: TranslateTitle(ggLabels),

    datasets: TranslateDatasets(ggData),

    layer: TranslateLayers(ggLayers, ggLabels, ggData, ggScales)
  };

  return vl;
}

function TranslateTitle(ggLabels: ggschema.Labels | undefined): string | undefined {
  if (!ggLabels) return undefined;

  if (ggLabels['title']) return ggLabels['title'];
  else return undefined;
}

export function TranslateDatasets(ggData: {[key: string]: ggschema.Dataset}): {[key: string]: InlineDataset} {
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
      if (ggData[dataset]['observations']) {
        datasets[dataset] = ggData[dataset]['observations'];
      }
    }
    return datasets;
  }
}

export function TranslateLayers(
  ggLayers: ggschema.Layer[],
  ggLabels: ggschema.Labels | undefined,
  ggData: {[key: string]: ggschema.Dataset},
  ggScales: object[] | undefined
): LayerSpec[] {
  let n = 0;
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  for (const _layer of ggLayers) {
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
