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

export function layerGeomSet(layer: Layer): GeomSet {
  // eslint-disable-next-line @typescript-eslint/camelcase
  return {geom: layer.geom, geom_params: layer.geom_params} as GeomSet;
}

export function layerStatSet(layer: Layer): StatSet {
  // eslint-disable-next-line @typescript-eslint/camelcase
  return {stat: layer.stat, stat_params: layer.stat_params} as StatSet;
}
