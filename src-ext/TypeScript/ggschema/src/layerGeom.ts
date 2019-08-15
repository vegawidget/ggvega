export type GeomSet = GeomPointSet | GeomBarSet | GeomBoxplotSet | GeomLine;

export interface GeomPointSet {
  geom: {class: 'GeomPoint'};
  geom_params: {
    'na.rm': boolean;
  };
}

export interface GeomBarSet {
  geom: {class: 'GeomBar'};
  geom_params: {
    'na.rm': boolean;
  };
}

export interface GeomBoxplotSet {
  geom: {class: 'GeomBoxplot'};
  geom_params: {
    'na.rm': boolean;
  };
}

export interface GeomLine {
  geom: {class: 'GeomLine'};
  geom_params: {
    'na.rm': boolean;
  };
}
