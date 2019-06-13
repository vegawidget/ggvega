export interface GgSpec {
  data: Data;
  layers: Layers;
  scales: Scales;
  labels: Labels;
}
interface Data {
  'data-00': {
    metadata: Metadata;
    observations: ObservationsItem[];
  };
}
interface Metadata {}
interface ObservationsItem {}
interface Layers {
  data: string;
  geom: Geom;
  mapping: Mapping;
  aes_params: Aes_params;
}
interface Geom {
  class: string;
}
interface Mapping {
  x: X;
  y: Y;
}
interface X {
  field: string;
  type: string;
}
interface Y {
  field: string;
  type: string;
}
interface Aes_params {
  colour: Colour;
}
interface Colour {
  value: string;
}
interface Scales {
  class: string;
  aesthetics: string[];
  transform: Transform;
}
interface Transform {
  type: string;
  base: number;
}
interface Labels {
  title: string;
  x: string;
  y: string;
}
