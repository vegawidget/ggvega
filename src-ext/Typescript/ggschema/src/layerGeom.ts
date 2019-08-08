export type Geom = GeomPoint | GeomBar;

export interface GeomPoint {
  class: 'GeomPoint';
}

export interface GeomBar {
  class: 'GeomBar';
}

export interface GeomParams {
  params?: any;
}
