import {Geom} from './layerGeom';
import {Mapping, AesParams} from './layerMapping';
import {Stat} from './layerStat';
/**
 * The `Layers` should have at least one layer
 * @minItems 1
 */
export type Layers = Layer[];
export interface Layer {
  data: string;
  geom: Geom;
  geom_params?: any;
  mapping: Mapping;
  aes_params: AesParams;
  stat?: Stat;
  stat_params?: any;
}


