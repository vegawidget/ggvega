import * as VL from './vlSpec';
import * as GG from '../../ggschema/src/index';
import {validateGs} from './util';
import {vlschema} from '../package.json';
import {datasetsObject} from './datasetsObject';
import {layerArray} from './layerArray';
import {facet} from './facet';

export function gs2vl(ggJson: any): VL.TopLevelSpec {
  validateGs(ggJson);

  const gsSpec = ggJson as GG.TopLevelSpec;

  return topLevelSpec(gsSpec);
}

function topLevelSpec(ggSpec: GG.TopLevelSpec): VL.TopLevelSpec {
  let topLevelSpec: VL.TopLevelSpec = {};

  if (ggSpec.facet.class != 'FacetNull') {
    topLevelSpec = {
      $schema: vlschema,
      title: ggSpec.labels.title,
      datasets: datasetsObject(ggSpec.data),
      spec: {
        layer: layerArray(ggSpec.data, ggSpec.layers, ggSpec.scales, ggSpec.labels, ggSpec.coordinates)
      },
      facet: facet(ggSpec.facet)
    };

    return topLevelSpec;
  }

  topLevelSpec = {
    $schema: vlschema,
    title: ggSpec.labels.title,
    datasets: datasetsObject(ggSpec.data),
    layer: layerArray(ggSpec.data, ggSpec.layers, ggSpec.scales, ggSpec.labels, ggSpec.coordinates)
  };

  return topLevelSpec;
}
