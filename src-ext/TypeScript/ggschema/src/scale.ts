export type ScaleArray = Scale[];

export interface Scale {
  class: ScaleClass;
  name?: string;
  aesthetics: string[];
  transform: Transform;
}

export interface Transform {
  type: ScaleType;
  base: number;
}

export enum ScaleType {
  Log = 'log'
}

export enum ScaleClass {
  ScaleContinuousPosition = 'ScaleContinuousPosition'
}
