/**
 * The `Layers` should have at least one layer
 * @minItems 1
 */

export type Layers = Layer[];
export interface Layer {
  data: string;
  geom: Geom;
  geom_params?: GeomParams;

  mapping: Mapping;
  aes_params: AesParams;
  stat?: Stat;
  stat_params?: any;
}


