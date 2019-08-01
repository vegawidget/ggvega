/**
 * The `Layers` should have at least one layer
 * @minItems 1
 */

export type Layers = Layer[];
export interface Layer {
  data: string;
  geom: Geom;
  geom_params: {[key: string]: string | number};

  mapping: Mapping;
  aes_params?: any;
  stat?: Stat;
  stat_params?: any;
}

export type Geom = GeomPoint | GeomBar;

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

export interface GeomPoint {
  class: 'GeomPoint';
}

export interface GeomBar {
  class: 'GeomBar';
}

export interface Encoding {
  field: string;
}

export interface Stat {
  class: string;
}
