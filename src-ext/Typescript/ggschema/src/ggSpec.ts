import {Datasets} from './data';
import {Layers} from './layer';
import {Labels} from './labels';
import {Scale} from './scale';

export * from './data';
export * from './layer';
export * from './labels';
export * from './scale';

export interface TopLevelSpec {
  data: Datasets;
  layers: Layers;
  scales: Scale[];
  labels: Labels;
}
