export type ScaleArray = Scale[];

export type Scale = ScaleContinuousPosition;
export interface ScaleContinuousPosition {
  class: 'ScaleContinuousPosition';
  aesthetics: string[];
  name?: string;
}
