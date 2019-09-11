export type Position = PositionIdentity | PositionStack | PositionFill;

export interface PositionIdentity {
  class: 'PositionIdentity';
}

export interface PositionStack {
  class: 'PositionStack';
}

export interface PositionFill {
  class: 'PositionFill';
}
