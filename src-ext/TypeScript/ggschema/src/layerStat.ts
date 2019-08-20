import {Value, MappingStat} from './layerMapping';

export type StatSet = StatSetIdentity | StatSetBoxplot;

export interface StatSetIdentity {
  stat: {
    class: 'StatIdentity';
    // TODO @wenyu: define default_aes
    // default_aes: Value | MappingStat;
  };
  stat_params: {
    'na.rm': boolean;
  };
}

export interface StatSetBoxplot {
  stat: {class: 'StatBoxplot'};
  stat_params: {
    'na.rm': boolean;
    coef?: string | number;
  };
}
