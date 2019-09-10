export type Position = PositionIdentity | PositionStack | PositionFill;

export interface PositionIdentity {
  position: {
    class: 'PositionIdentity';
  }
}

export interface PositionStack {
  position: {
    class: 'PositionStack';
  }
}

export interface PositionFill {
  position: {
    class: 'PositionFill';
  }
}
