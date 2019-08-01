/**
 * The `Layers` should have at least one layer
 * @minItems 1
 */

export type Layers = Layer[];
export interface Layer {
  data: string;
  geom: Geom;
  geom_params: any;
  mapping: Mapping;
  aes_params: object[];
  stat?: Stat;
  stat_params?: any;
}

export interface Geom {
  class: GeomType;
}

export interface Mapping {
  x?: Encoding;
  y?: Encoding;
  colour?: Encoding;
  size?: Encoding;
  shape?: Encoding;
  stroke?: Encoding;
  alpha?: Encoding;
  fill?: Encoding;
}

export enum GeomType {
  GeomPoint = 'GeomPoint'
}

export interface Encoding {
  field: string;
}

export interface Stat {
  class: string;
}
