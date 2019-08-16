import {GeomSet} from './layerGeom';
import {Mapping, AesParams} from './layerMapping';
import {StatSet} from './layerStat';
/**
 * The `Layers` should have at least one layer
 * @minItems 1
 */
export type Layers = Layer[];
export interface BaseLayer {
  data: string;
  mapping: Mapping;
  aes_params: AesParams;
}

export type Layer = BaseLayer & GeomSet & StatSet;
