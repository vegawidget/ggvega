export type StatSet = StatIdentity;

export interface StatIdentity {
  stat: {class: 'StatIdentity'};
  stat_params: {
    'na.rm': boolean;
    coef?: string | number;
  };
}
