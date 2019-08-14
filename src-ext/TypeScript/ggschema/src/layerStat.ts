export type Stat = StatIdentity;

export interface StatIdentity {
  stat: {
    class: 'StatIdentity';
    default_aes: any;
    required_aes: any;
  };
  stat_params: {
    'na.rm': boolean;
  };
}
