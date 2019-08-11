import {Datasets} from './data';
import {Layers} from './layer';
import {Labels} from './labels';
import {Scales} from './scale';
import {Coord} from './coordinates';

export interface TopLevelSpec {
  data: Datasets;
  layers: Layers;
  scales: Scales;
  labels: Labels;
  coordinates: Coord;
}
