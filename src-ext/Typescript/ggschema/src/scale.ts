export type Scales = Scale[];
export interface Scale {
  aesthetics: string[];
  transform: Transform;
  name?: string;
}

export interface Transform {
  type: ScaleType;
  base: number;
}

export enum ScaleType {
  Log = 'log'
}
