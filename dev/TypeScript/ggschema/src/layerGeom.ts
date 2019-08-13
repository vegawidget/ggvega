export type Geom = GeomPoint | GeomBar;

export interface GeomPoint {
  geom: {class: 'GeomPoint'};
  geom_params: {
    'na.rm': boolean;
  };
}

export interface GeomBar {
  geom: {class: 'GeomBar'};
  geom_params: {
    'na.rm': boolean;
  };
}
