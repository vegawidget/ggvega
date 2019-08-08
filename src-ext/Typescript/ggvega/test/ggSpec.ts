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

export const ggSpec01: any = {
  data: {'data-00': {metadata: {}, observations: {}}},
  labels: {},
  layers: [
    {
      data: 'data-00',
      geom: {class: 'GeomPoint'},
      geom_params: {},
      mapping: {},
      aes_params: {}
    }
  ],
  scales: []
};
export const ggSpec02: any = {
  data: {'data-00': {metadata: {}, observations: {}}},
  labels: {title: 'text'},
  layers: [
    {
      data: 'data-00',
      geom: {class: 'GeomPoint'},
      geom_params: {},
      mapping: {},
      aes_params: {}
    }
  ],
  scales: []
};

export const ggSpec03: any = {
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
  layers: [
    {
      data: 'data-00',
      geom: {class: 'GeomPoint'},
      geom_params: {},
      mapping: {},
      aes_params: null
    }
  ],
  scales: []
};

export const ggSpec04: any = {
  data: {
    'data-00': {
      metadata: {
        mpg: {type: 'quantitative'},
        cyl: {type: 'quantitative'},
        disp: {type: 'quantitative'},
        hp: {type: 'quantitative'},
        drat: {type: 'quantitative'},
        wt: {type: 'quantitative'},
        qsec: {type: 'quantitative'},
        vs: {type: 'quantitative'},
        am: {type: 'quantitative'},
        gear: {type: 'quantitative'},
        carb: {type: 'quantitative'}
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
      geom_params: {},
      mapping: {x: {field: 'wt'}, y: {field: 'mpg'}},
      aes_params: {},
      stat: {class: 'StatIdentity'}
    }
  ],
  scales: [],
  labels: {x: 'wt', y: 'mpg'}
};

export const ggSpec05: any = {
  data: {
    'data-00': {
      metadata: {
        'Sepal.Length': {type: 'quantitative'},
        'Sepal.Width': {type: 'quantitative'},
        'Petal.Length': {type: 'quantitative'},
        'Petal.Width': {type: 'quantitative'},
        Species: {type: 'nominal', levels: ['setosa', 'versicolor', 'virginica']}
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
      geom_params: {},
      mapping: {x: {field: 'Petal.Width'}, y: {field: 'Petal.Length'}, colour: {field: 'Species'}},
      aes_params: {},
      stat: {class: 'StatIdentity'}
    }
  ],
  scales: [],
  labels: {x: 'Petal.Width', y: 'Petal.Length', colour: 'Species'}
};

export const ggSpec06: any = {
  data: {
    'data-00': {
      metadata: {
        'Sepal.Length': {type: 'quantitative'},
        'Sepal.Width': {type: 'quantitative'},
        'Petal.Length': {type: 'quantitative'},
        'Petal.Width': {type: 'quantitative'},
        Species: {type: 'nominal', levels: ['setosa', 'versicolor', 'virginica']}
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
      geom_params: {},
      mapping: {x: {field: 'Petal.Width'}, y: {field: 'Petal.Length'}, shape: {field: 'Species'}},
      aes_params: {},
      stat: {class: 'StatIdentity'}
    }
  ],
  scales: [],
  labels: {x: 'Petal.Width', y: 'Petal.Length', shape: 'Species'}
};

export const ggSpec07: any = {
  data: {
    'data-00': {
      metadata: {
        mpg: {type: 'quantitative'},
        cyl: {type: 'quantitative'},
        disp: {type: 'quantitative'},
        hp: {type: 'quantitative'},
        drat: {type: 'quantitative'},
        wt: {type: 'quantitative'},
        qsec: {type: 'quantitative'},
        vs: {type: 'quantitative'},
        am: {type: 'quantitative'},
        gear: {type: 'quantitative'},
        carb: {type: 'quantitative'}
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
      geom_params: {},
      mapping: {x: {field: 'wt'}, y: {field: 'mpg'}, size: {field: 'cyl'}},
      aes_params: {},
      stat: {class: 'StatIdentity'}
    }
  ],
  scales: [],
  labels: {x: 'wt', y: 'mpg', size: 'cyl'}
};

export const ggSpec08: any = {
  data: {
    'data-00': {
      metadata: {
        mpg: {type: 'quantitative'},
        cyl: {type: 'quantitative'},
        disp: {type: 'quantitative'},
        hp: {type: 'quantitative'},
        drat: {type: 'quantitative'},
        wt: {type: 'quantitative'},
        qsec: {type: 'quantitative'},
        vs: {type: 'quantitative'},
        am: {type: 'quantitative'},
        gear: {type: 'quantitative'},
        carb: {type: 'quantitative'}
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
      geom_params: {},
      mapping: {x: {field: 'wt'}, y: {field: 'mpg'}, shape: {field: 'cyl'}},
      aes_params: {},
      stat: {class: 'StatIdentity'}
    }
  ],
  scales: [],
  labels: {x: 'wt', y: 'mpg', shape: 'cyl'}
};

export const ggSpec09: any = {
  data: {
    'data-00': {
      metadata: {
        mpg: {type: 'quantitative'},
        cyl: {type: 'quantitative'},
        disp: {type: 'quantitative'},
        hp: {type: 'quantitative'},
        drat: {type: 'quantitative'},
        wt: {type: 'quantitative'},
        qsec: {type: 'quantitative'},
        vs: {type: 'quantitative'},
        am: {type: 'quantitative'},
        gear: {type: 'quantitative'},
        carb: {type: 'quantitative'}
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
      geom_params: {},
      mapping: {x: {field: 'wt'}, y: {field: 'mpg'}, stroke: {field: 'cyl'}},
      aes_params: {},
      stat: {class: 'StatIdentity'}
    }
  ],
  scales: [],
  labels: {x: 'wt', y: 'mpg', stroke: 'cyl'}
};

export const ggSpec10: any = {
  data: {
    'data-00': {
      metadata: {
        mpg: {type: 'quantitative'},
        cyl: {type: 'quantitative'},
        disp: {type: 'quantitative'},
        hp: {type: 'quantitative'},
        drat: {type: 'quantitative'},
        wt: {type: 'quantitative'},
        qsec: {type: 'quantitative'},
        vs: {type: 'quantitative'},
        am: {type: 'quantitative'},
        gear: {type: 'quantitative'},
        carb: {type: 'quantitative'}
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
      geom_params: {},
      mapping: {x: {field: 'wt'}, y: {field: 'mpg'}, fill: {field: 'cyl'}},
      aes_params: {},
      stat: {class: 'StatIdentity'}
    }
  ],
  scales: [],
  labels: {x: 'wt', y: 'mpg', fill: 'cyl'}
};

export const ggSpec11: any = {
  data: {
    'data-00': {
      metadata: {
        mpg: {type: 'quantitative'},
        cyl: {type: 'quantitative'},
        disp: {type: 'quantitative'},
        hp: {type: 'quantitative'},
        drat: {type: 'quantitative'},
        wt: {type: 'quantitative'},
        qsec: {type: 'quantitative'},
        vs: {type: 'quantitative'},
        am: {type: 'quantitative'},
        gear: {type: 'quantitative'},
        carb: {type: 'quantitative'}
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
      geom_params: {},
      mapping: {x: {field: 'wt'}, y: {field: 'mpg'}, opacity: {field: 'cyl'}},
      aes_params: {},
      stat: {class: 'StatIdentity'}
    }
  ],
  scales: [],
  labels: {x: 'wt', y: 'mpg', opacity: 'cyl'}
};

/**
 * Import ggSpec as json format
 */
import ggiris01 from './ggiris01.json';
export const ggJson01 = ggiris01;
