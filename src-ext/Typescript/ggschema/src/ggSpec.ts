import {Dataset} from './data';
import {Layer} from './layer';
import {Labels} from './labels';

export * from './data';
export * from './layer';
export * from './labels';

export interface TopLevelSpec {
  data: {[key: string]: Dataset};
  layers: Layer[];
  scales?: object[];
  labels?: Labels;
}
