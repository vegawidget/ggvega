import {DatasetsObject} from './data';
import {Layers} from './layer';
import {Labels} from './labels';
import {Scales} from './scale';
import {Coord} from './coordinates';
import {Facet} from './facet';

export interface TopLevelSpec {
  data: DatasetsObject;
  layers: Layers;
  scales: Scales;
  labels: Labels;
  coordinates: Coord;
  facet: Facet;
}
