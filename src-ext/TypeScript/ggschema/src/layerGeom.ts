export type GeomSet = GeomSetPoint | GeomSetBar | GeomSetBoxplot | GeomSetLine;

export interface GeomSetPoint {
  geom: {class: 'GeomPoint'};
  geom_params: {
    'na.rm': boolean;
  };
}

export interface GeomSetBar {
  geom: {class: 'GeomBar'};
  geom_params: {
    'na.rm': boolean;
  };
}

export interface GeomSetBoxplot {
  geom: {class: 'GeomBoxplot'};
  geom_params: {
    'na.rm': boolean;
  };
}

export interface GeomSetLine {
  geom: {class: 'GeomLine'};
  geom_params: {
    'na.rm': boolean;
  };
}
