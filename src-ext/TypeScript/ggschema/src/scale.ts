export type ScaleArray = Scale[];

export type Scale = ScaleContinuousPosition;
export interface ScaleContinuousPosition {
  class: 'ScaleContinuousPosition';
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
