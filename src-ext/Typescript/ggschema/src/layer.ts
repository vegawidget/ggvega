/**
 * The `Layers` should have at least one layer
 * @minItems 1
 */

export type Layers = Layer[];
export interface Layer {
  data: string;
  geom: Geom;
  mapping: Mapping;
  aes_params?: object[];
  stat?: Stat;
}

export interface Geom {
  class: GeomType;
}

export interface Mapping {
  x?: Encoding;
  y?: Encoding;
  colour?: Encoding;
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
