export const vlSpec01: any = {
  $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
  datasets: {},
  layer: [{data: {name: 'data-00'}, mark: 'point', encoding: {}}]
};

export const vlSpec02: any = {
  $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
  title: 'text',
  datasets: {},
  layer: [{data: {name: 'data-00'}, mark: 'point', encoding: {}}]
};

export const vlSpec03: any = {
  $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
  datasets: {'data-00': [{a: 'A', b: 28}, {a: 'A', b: 28}], 'data-01': [{a: 'A', b: 28}]},
  layer: [{data: {name: 'data-00'}, mark: 'point', encoding: {}}]
};

export const vlSpec04: any = {
  $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
  datasets: {
    'data-00': [{mpg: 21, cyl: 6, disp: 160, hp: 110, drat: 3.9, wt: 2.62, qsec: 16.46, vs: 0, am: 1, gear: 4, carb: 4}]
  },
  layer: [
    {
      data: {name: 'data-00'},
      mark: 'point',
      encoding: {
        x: {field: 'wt', type: 'quantitative', title: 'wt'},
        y: {field: 'mpg', type: 'quantitative', title: 'mpg'}
      }
    }
  ]
};

export const vlSpec05: any = {
  $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
  datasets: {
    'data-00': [{'Sepal.Length': 5.1, 'Sepal.Width': 3.5, 'Petal.Length': 1.4, 'Petal.Width': 0.2, Species: 'setosa'}]
  },
  layer: [
    {
      data: {name: 'data-00'},
      mark: 'point',
      encoding: {
        x: {field: 'Petal\\.Width', type: 'quantitative', title: 'Petal.Width'},
        y: {field: 'Petal\\.Length', type: 'quantitative', title: 'Petal.Length'},
        stroke: {field: 'Species', type: 'nominal', title: 'Species'}
      }
    }
  ]
};

export const vlSpec06: any = {
  $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
  datasets: {
    'data-00': [{'Sepal.Length': 5.1, 'Sepal.Width': 3.5, 'Petal.Length': 1.4, 'Petal.Width': 0.2, Species: 'setosa'}]
  },
  layer: [
    {
      data: {name: 'data-00'},
      mark: 'point',
      encoding: {
        x: {field: 'Petal\\.Width', type: 'quantitative', title: 'Petal.Width'},
        y: {field: 'Petal\\.Length', type: 'quantitative', title: 'Petal.Length'},
        shape: {field: 'Species', type: 'nominal', title: 'Species'}
      }
    }
  ]
};

export const vlSpec07: any = {
  $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
  datasets: {
    'data-00': [{mpg: 21, cyl: 6, disp: 160, hp: 110, drat: 3.9, wt: 2.62, qsec: 16.46, vs: 0, am: 1, gear: 4, carb: 4}]
  },
  layer: [
    {
      data: {name: 'data-00'},
      mark: 'point',
      encoding: {
        x: {field: 'wt', type: 'quantitative', title: 'wt'},
        y: {field: 'mpg', type: 'quantitative', title: 'mpg'},
        size: {field: 'cyl', type: 'quantitative', title: 'cyl'}
      }
    }
  ]
};

export const vlSpec08: any = {
  $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
  datasets: {
    'data-00': [{mpg: 21, cyl: 6, disp: 160, hp: 110, drat: 3.9, wt: 2.62, qsec: 16.46, vs: 0, am: 1, gear: 4, carb: 4}]
  },
  layer: [
    {
      data: {name: 'data-00'},
      mark: 'point',
      encoding: {
        x: {field: 'wt', type: 'quantitative', title: 'wt'},
        y: {field: 'mpg', type: 'quantitative', title: 'mpg'},
        shape: {field: 'cyl', type: 'quantitative', title: 'cyl'}
      }
    }
  ]
};

export const vlSpec09: any = {
  $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
  datasets: {
    'data-00': [{mpg: 21, cyl: 6, disp: 160, hp: 110, drat: 3.9, wt: 2.62, qsec: 16.46, vs: 0, am: 1, gear: 4, carb: 4}]
  },
  layer: [
    {
      data: {name: 'data-00'},
      mark: 'point',
      encoding: {
        x: {field: 'wt', type: 'quantitative', title: 'wt'},
        y: {field: 'mpg', type: 'quantitative', title: 'mpg'},
        strokeWidth: {field: 'cyl', type: 'quantitative', title: 'cyl'}
      }
    }
  ]
};

export const vlSpec10: any = {
  $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
  datasets: {
    'data-00': [{mpg: 21, cyl: 6, disp: 160, hp: 110, drat: 3.9, wt: 2.62, qsec: 16.46, vs: 0, am: 1, gear: 4, carb: 4}]
  },
  layer: [
    {
      data: {name: 'data-00'},
      mark: 'point',
      encoding: {
        x: {field: 'wt', type: 'quantitative', title: 'wt'},
        y: {field: 'mpg', type: 'quantitative', title: 'mpg'},
        fill: {field: 'cyl', type: 'quantitative', title: 'cyl'}
      }
    }
  ]
};

export const vlSpec101: any = {
  $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
  datasets: {
    'data-00': [{mpg: 21, cyl: 6, disp: 160, hp: 110, drat: 3.9, wt: 2.62, qsec: 16.46, vs: 0, am: 1, gear: 4, carb: 4}]
  },
  layer: [
    {
      data: {name: 'data-00'},
      mark: 'point',
      encoding: {
        x: {field: 'wt', type: 'quantitative', title: 'wt'},
        y: {field: 'mpg', type: 'quantitative', title: 'mpg'},
        opacity: {field: 'cyl', type: 'quantitative', title: 'cyl'}
      }
    }
  ]
};

/**
 * Import vlSpec as json format
 */
import vliris01 from './vliris01.json';
export const vlJson01 = vliris01;
