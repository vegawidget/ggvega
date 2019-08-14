import * as gs from '../../ggschema/src/index';

/* eslint-disable @typescript-eslint/camelcase */

/**
 * Invalid ggSpec:
 * A valid ggSpec should have both `data` and `layers`
 * A valid ggSpec should have at least 1 `layer` in `layers`
 * A valid ggSpec should have `data`,`geom` and `mapping`  in `layer`
 */
export const invalidSpec01: any = {};

export const invalidSpec02: any = {
  data: {'data-00': {metadata: {}, observations: {}}},
  labels: {},
  layers: [],
  scales: []
};

export const invalidSpec03: any = {
  data: {},
  labels: {},
  layers: [
    {
      data: 'data-00',
      geom: {class: 'GeomPoint'},
      mapping: {}
    }
  ]
};

export const invalidSpec04: any = {
  data: {'data-00': {}},
  layers: [
    {
      data: 'data-00',
      geom: {class: 'point'},
      mapping: {}
    }
  ]
};

/**
 * Valid ggSpec
 */

export const ggSpec01: gs.TopLevelSpec = {
  data: {'data-00': {metadata: {}, observations: {}}},
  labels: {},
  layers: [
    {
      data: 'data-00',
      geom: {class: 'GeomPoint'},
      geom_params: {'na.rm': true},
      mapping: {},
      aes_params: {},
      stat: {
        class: 'StatIdentity',
        default_aes: {},
        required_aes: {}
      },
      stat_params: {
        'na.rm': true
      },
      position: {class: 'PositionIdentity'}
    }
  ],
  scales: [],
  coordinates: {class: 'CoordCartesian'},
  facet: {class: 'FacetNull'}
};
export const ggSpec02: gs.TopLevelSpec = {
  data: {'data-00': {metadata: {}, observations: {}}},
  labels: {title: 'text'},
  layers: [
    {
      data: 'data-00',
      geom: {class: 'GeomPoint'},
      geom_params: {'na.rm': true},
      mapping: {},
      aes_params: {},
      stat: {
        class: 'StatIdentity',
        default_aes: {},
        required_aes: {}
      },
      stat_params: {
        'na.rm': true
      },
      position: {class: 'PositionIdentity'}
    }
  ],
  scales: [],
  coordinates: {class: 'CoordCartesian'},
  facet: {class: 'FacetNull'}
};

export const ggSpec03: gs.TopLevelSpec = {
  data: {
    'data-00': {
      metadata: {},
      observations: [{a: 'A', b: 28}, {a: 'A', b: 28}]
    },
    'data-01': {
      metadata: {},
      observations: [{a: 'A', b: 28}]
    }
  },
  labels: {},
  layers: [
    {
      data: 'data-00',
      geom: {class: 'GeomPoint'},
      geom_params: {'na.rm': true},
      mapping: {},
      aes_params: {},
      stat: {
        class: 'StatIdentity',
        default_aes: {},
        required_aes: {}
      },
      stat_params: {
        'na.rm': true
      },
      position: {class: 'PositionIdentity'}
    }
  ],
  scales: [],
  coordinates: {class: 'CoordCartesian'},
  facet: {class: 'FacetNull'}
};

export const ggSpec04: gs.TopLevelSpec = {
  data: {
    'data-00': {
      metadata: {
        mpg: {type: gs.StandardType.Quantitative},
        cyl: {type: gs.StandardType.Quantitative},
        disp: {type: gs.StandardType.Quantitative},
        hp: {type: gs.StandardType.Quantitative},
        drat: {type: gs.StandardType.Quantitative},
        wt: {type: gs.StandardType.Quantitative},
        qsec: {type: gs.StandardType.Quantitative},
        vs: {type: gs.StandardType.Quantitative},
        am: {type: gs.StandardType.Quantitative},
        gear: {type: gs.StandardType.Quantitative},
        carb: {type: gs.StandardType.Quantitative}
      },
      observations: [
        {mpg: 21, cyl: 6, disp: 160, hp: 110, drat: 3.9, wt: 2.62, qsec: 16.46, vs: 0, am: 1, gear: 4, carb: 4}
      ]
    }
  },
  layers: [
    {
      data: 'data-00',
      geom: {class: 'GeomPoint'},
      geom_params: {'na.rm': true},
      mapping: {},
      aes_params: {},
      stat: {
        class: 'StatIdentity',
        default_aes: {},
        required_aes: {}
      },
      stat_params: {
        'na.rm': true
      },
      position: {class: 'PositionIdentity'}
    }
  ],
  scales: [],
  labels: {x: 'wt', y: 'mpg'},
  coordinates: {class: 'CoordCartesian'},
  facet: {class: 'FacetNull'}
};

export const ggSpec05: gs.TopLevelSpec = {
  data: {
    'data-00': {
      metadata: {
        'Sepal.Length': {type: gs.StandardType.Quantitative},
        'Sepal.Width': {type: gs.StandardType.Quantitative},
        'Petal.Length': {type: gs.StandardType.Quantitative},
        'Petal.Width': {type: gs.StandardType.Quantitative},
        Species: {type: gs.StandardType.Nominal, levels: ['setosa', 'versicolor', 'virginica']}
      },
      observations: [
        {'Sepal.Length': 5.1, 'Sepal.Width': 3.5, 'Petal.Length': 1.4, 'Petal.Width': 0.2, Species: 'setosa'}
      ]
    }
  },
  layers: [
    {
      data: 'data-00',
      geom: {class: 'GeomPoint'},
      geom_params: {'na.rm': true},
      mapping: {},
      aes_params: {},
      stat: {
        class: 'StatIdentity',
        default_aes: {},
        required_aes: {}
      },
      stat_params: {
        'na.rm': true
      },
      position: {class: 'PositionIdentity'}
    }
  ],
  scales: [],
  labels: {x: 'Petal.Width', y: 'Petal.Length', colour: 'Species'},
  coordinates: {class: 'CoordCartesian'},
  facet: {class: 'FacetNull'}
};

export const ggSpec06: gs.TopLevelSpec = {
  data: {
    'data-00': {
      metadata: {
        'Sepal.Length': {type: gs.StandardType.Quantitative},
        'Sepal.Width': {type: gs.StandardType.Quantitative},
        'Petal.Length': {type: gs.StandardType.Quantitative},
        'Petal.Width': {type: gs.StandardType.Quantitative},
        Species: {type: gs.StandardType.Nominal, levels: ['setosa', 'versicolor', 'virginica']}
      },
      observations: [
        {'Sepal.Length': 5.1, 'Sepal.Width': 3.5, 'Petal.Length': 1.4, 'Petal.Width': 0.2, Species: 'setosa'}
      ]
    }
  },
  layers: [
    {
      data: 'data-00',
      geom: {class: 'GeomPoint'},
      geom_params: {'na.rm': true},
      mapping: {},
      aes_params: {},
      stat: {
        class: 'StatIdentity',
        default_aes: {},
        required_aes: {}
      },
      stat_params: {
        'na.rm': true
      },
      position: {class: 'PositionIdentity'}
    }
  ],
  scales: [],
  labels: {x: 'Petal.Width', y: 'Petal.Length', shape: 'Species'},
  coordinates: {class: 'CoordCartesian'},
  facet: {class: 'FacetNull'}
};

export const ggSpec07: gs.TopLevelSpec = {
  data: {
    'data-00': {
      metadata: {
        mpg: {type: gs.StandardType.Quantitative},
        cyl: {type: gs.StandardType.Quantitative},
        disp: {type: gs.StandardType.Quantitative},
        hp: {type: gs.StandardType.Quantitative},
        drat: {type: gs.StandardType.Quantitative},
        wt: {type: gs.StandardType.Quantitative},
        qsec: {type: gs.StandardType.Quantitative},
        vs: {type: gs.StandardType.Quantitative},
        am: {type: gs.StandardType.Quantitative},
        gear: {type: gs.StandardType.Quantitative},
        carb: {type: gs.StandardType.Quantitative}
      },
      observations: [
        {mpg: 21, cyl: 6, disp: 160, hp: 110, drat: 3.9, wt: 2.62, qsec: 16.46, vs: 0, am: 1, gear: 4, carb: 4}
      ]
    }
  },
  layers: [
    {
      data: 'data-00',
      geom: {class: 'GeomPoint'},
      geom_params: {'na.rm': true},
      mapping: {},
      aes_params: {},
      stat: {
        class: 'StatIdentity',
        default_aes: {},
        required_aes: {}
      },
      stat_params: {
        'na.rm': true
      },
      position: {class: 'PositionIdentity'}
    }
  ],
  scales: [],
  labels: {x: 'wt', y: 'mpg', size: 'cyl'},
  coordinates: {class: 'CoordCartesian'},
  facet: {class: 'FacetNull'}
};

export const ggSpec08: gs.TopLevelSpec = {
  data: {
    'data-00': {
      metadata: {
        mpg: {type: gs.StandardType.Quantitative},
        cyl: {type: gs.StandardType.Quantitative},
        disp: {type: gs.StandardType.Quantitative},
        hp: {type: gs.StandardType.Quantitative},
        drat: {type: gs.StandardType.Quantitative},
        wt: {type: gs.StandardType.Quantitative},
        qsec: {type: gs.StandardType.Quantitative},
        vs: {type: gs.StandardType.Quantitative},
        am: {type: gs.StandardType.Quantitative},
        gear: {type: gs.StandardType.Quantitative},
        carb: {type: gs.StandardType.Quantitative}
      },
      observations: [
        {mpg: 21, cyl: 6, disp: 160, hp: 110, drat: 3.9, wt: 2.62, qsec: 16.46, vs: 0, am: 1, gear: 4, carb: 4}
      ]
    }
  },
  layers: [
    {
      data: 'data-00',
      geom: {class: 'GeomPoint'},
      geom_params: {'na.rm': true},
      mapping: {},
      aes_params: {},
      stat: {
        class: 'StatIdentity',
        default_aes: {},
        required_aes: {}
      },
      stat_params: {
        'na.rm': true
      },
      position: {class: 'PositionIdentity'}
    }
  ],
  scales: [],
  labels: {x: 'wt', y: 'mpg', shape: 'cyl'},
  coordinates: {class: 'CoordCartesian'},
  facet: {class: 'FacetNull'}
};

export const ggSpec09: gs.TopLevelSpec = {
  data: {
    'data-00': {
      metadata: {
        mpg: {type: gs.StandardType.Quantitative},
        cyl: {type: gs.StandardType.Quantitative},
        disp: {type: gs.StandardType.Quantitative},
        hp: {type: gs.StandardType.Quantitative},
        drat: {type: gs.StandardType.Quantitative},
        wt: {type: gs.StandardType.Quantitative},
        qsec: {type: gs.StandardType.Quantitative},
        vs: {type: gs.StandardType.Quantitative},
        am: {type: gs.StandardType.Quantitative},
        gear: {type: gs.StandardType.Quantitative},
        carb: {type: gs.StandardType.Quantitative}
      },
      observations: [
        {mpg: 21, cyl: 6, disp: 160, hp: 110, drat: 3.9, wt: 2.62, qsec: 16.46, vs: 0, am: 1, gear: 4, carb: 4}
      ]
    }
  },
  layers: [
    {
      data: 'data-00',
      geom: {class: 'GeomPoint'},
      geom_params: {'na.rm': true},
      mapping: {},
      aes_params: {},
      stat: {
        class: 'StatIdentity',
        default_aes: {},
        required_aes: {}
      },
      stat_params: {
        'na.rm': true
      },
      position: {class: 'PositionIdentity'}
    }
  ],
  scales: [],
  labels: {x: 'wt', y: 'mpg', stroke: 'cyl'},
  coordinates: {class: 'CoordCartesian'},
  facet: {class: 'FacetNull'}
};

export const ggSpec10: gs.TopLevelSpec = {
  data: {
    'data-00': {
      metadata: {
        mpg: {type: gs.StandardType.Quantitative},
        cyl: {type: gs.StandardType.Quantitative},
        disp: {type: gs.StandardType.Quantitative},
        hp: {type: gs.StandardType.Quantitative},
        drat: {type: gs.StandardType.Quantitative},
        wt: {type: gs.StandardType.Quantitative},
        qsec: {type: gs.StandardType.Quantitative},
        vs: {type: gs.StandardType.Quantitative},
        am: {type: gs.StandardType.Quantitative},
        gear: {type: gs.StandardType.Quantitative},
        carb: {type: gs.StandardType.Quantitative}
      },
      observations: [
        {mpg: 21, cyl: 6, disp: 160, hp: 110, drat: 3.9, wt: 2.62, qsec: 16.46, vs: 0, am: 1, gear: 4, carb: 4}
      ]
    }
  },
  layers: [
    {
      data: 'data-00',
      geom: {class: 'GeomPoint'},
      geom_params: {'na.rm': true},
      mapping: {},
      aes_params: {},
      stat: {
        class: 'StatIdentity',
        default_aes: {},
        required_aes: {}
      },
      stat_params: {
        'na.rm': true
      },
      position: {class: 'PositionIdentity'}
    }
  ],
  scales: [],
  labels: {x: 'wt', y: 'mpg', fill: 'cyl'},
  coordinates: {class: 'CoordCartesian'},
  facet: {class: 'FacetNull'}
};

export const ggSpec11: gs.TopLevelSpec = {
  data: {
    'data-00': {
      metadata: {
        mpg: {type: gs.StandardType.Quantitative},
        cyl: {type: gs.StandardType.Quantitative},
        disp: {type: gs.StandardType.Quantitative},
        hp: {type: gs.StandardType.Quantitative},
        drat: {type: gs.StandardType.Quantitative},
        wt: {type: gs.StandardType.Quantitative},
        qsec: {type: gs.StandardType.Quantitative},
        vs: {type: gs.StandardType.Quantitative},
        am: {type: gs.StandardType.Quantitative},
        gear: {type: gs.StandardType.Quantitative},
        carb: {type: gs.StandardType.Quantitative}
      },
      observations: [
        {mpg: 21, cyl: 6, disp: 160, hp: 110, drat: 3.9, wt: 2.62, qsec: 16.46, vs: 0, am: 1, gear: 4, carb: 4}
      ]
    }
  },
  layers: [
    {
      data: 'data-00',
      geom: {class: 'GeomPoint'},
      geom_params: {'na.rm': true},
      mapping: {},
      aes_params: {},
      stat: {
        class: 'StatIdentity',
        default_aes: {},
        required_aes: {}
      },
      stat_params: {
        'na.rm': true
      },
      position: {class: 'PositionIdentity'}
    }
  ],
  scales: [],
  labels: {x: 'wt', y: 'mpg', alpha: 'cyl'},
  coordinates: {class: 'CoordCartesian'},
  facet: {class: 'FacetNull'}
};

/**
 * Import ggSpec as json format
 */
import ggiris01 from './ggiris01.json';
export const ggJson01 = ggiris01;
