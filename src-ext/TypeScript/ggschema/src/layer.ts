import {GeomSet} from './layerGeom';
import {MappingObject, AesParams} from './layerMapping';
import {StatSet} from './layerStat';
import {Position} from './layerPosition';
/**
 * The `Layers` should have at least one layer
 * @minItems 1
 */
export type LayerArray = Layer[];

export type Layer = BaseLayer & GeomSet & StatSet;

export interface BaseLayer {
  data: string;
  mapping: MappingObject;
  aes_params: AesParams;
  position: Position;
}
