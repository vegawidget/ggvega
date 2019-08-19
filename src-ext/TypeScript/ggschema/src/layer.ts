import {GeomSet} from './layerGeom';
import {MappingObject, AesParamsObject} from './layerMapping';
import {StatSet} from './layerStat';
/**
 * The `Layers` should have at least one layer
 * @minItems 1
 */
export type LayerArray = Layer[];

export type Layer = BaseLayer & GeomSet & StatSet;

export interface BaseLayer {
  data: string;
  mapping: MappingObject;
  aes_params: AesParamsObject;
}
