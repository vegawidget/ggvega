export type Coord = CoordCartesian | CoordFlip;

export interface CoordCartesian {
  class: 'CoordCartesian';
}

export interface CoordFlip {
  class: 'CoordFlip';
}
