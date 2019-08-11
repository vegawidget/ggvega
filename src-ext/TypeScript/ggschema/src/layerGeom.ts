export type Geom = GeomPoint | GeomBar;

export interface GeomPoint {
  geom: {class: 'GeomPoint'};
  geom_params: string;
}

export interface GeomBar {
  geom: {class: 'GeomBar'};
  geom_params: number;
}
