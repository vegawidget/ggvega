import {DatasetsObject} from './data';
import {LayerArray} from './layer';
import {LabelObject} from './labels';
import {ScaleArray} from './scale';
import {Coord} from './coordinates';
import {Facet} from './facet';

export interface TopLevelSpec {
  data: DatasetsObject;
  layers: LayerArray;
  scales: ScaleArray;
  labels: LabelObject;
  coordinates: Coord;
  facet: Facet;
}
