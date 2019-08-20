export type ScaleArray = Scale[];

export type Scale = ScaleContinuousPosition;
export interface ScaleContinuousPosition {
  class: 'ScaleContinuousPosition';
  aesthetics: string[];
  name?: string;
  transform: Transform; // TODO@ian - remove this for now
}

// TODO@ian - remove this for now
export interface Transform {
  type: ScaleType;
  base: number;
}


// TODO@ian - remove this for now
export enum ScaleType {
  Log = 'log'
}
