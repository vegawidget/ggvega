export type StatSet = StatSetIdentity | StatSetBoxplot;

export interface StatSetIdentity {
  stat: {class: 'StatIdentity'};
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
