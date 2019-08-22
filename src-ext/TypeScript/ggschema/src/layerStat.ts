import {MappingStat} from './layerMapping';

export type StatSet = StatSetIdentity | StatSetCount | StatSetBoxplot;
export type StatClass = StatSet['stat']['class'];

export interface StatSetIdentity {
  stat: {
    class: 'StatIdentity';
    default_aes: {};
  };
  stat_params: {
    'na.rm': boolean;
  };
}

export interface StatSetCount {
  stat: {
    class: 'StatCount';
    // NOTE@ian - if this (apparently) circular reference becomes problematic,
    // perhpas we can define default_aes as `object`. Wenyu may have additional
    // ideas.
    default_aes: {
      y: MappingStat;
      weight: number;
    };
  };
  stat_params: {
    'na.rm': boolean;
  };
}

export interface StatSetBoxplot {
  stat: {
    class: 'StatBoxplot';
    default_aes: {};
  };
  stat_params: {
    'na.rm': boolean;
    coef?: string | number;
  };
}
