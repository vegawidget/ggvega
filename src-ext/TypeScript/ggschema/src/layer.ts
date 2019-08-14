import {Geom} from './layerGeom';
import {Mapping, AesParams} from './layerMapping';
import {Stat} from './layerStat';
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

export type Layer = BaseLayer & Geom & Stat;

export function layerGeom(layer: Layer): Geom {
  // eslint-disable-next-line @typescript-eslint/camelcase
  return {geom: layer.geom, geom_params: layer.geom_params} as Geom;
}

export function layerStat(layer: Layer): Stat {
  // eslint-disable-next-line @typescript-eslint/camelcase
  return {stat: layer.stat, stat_params: layer.stat_params} as Stat;
}
