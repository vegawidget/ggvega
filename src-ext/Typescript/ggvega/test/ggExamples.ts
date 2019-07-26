/* eslint-disable @typescript-eslint/camelcase */

export const gg: object = {
  layers: [],
  scales: [],
  labels: {}
};

export const ggTopLevelSpec02: object = {
  data: {
    'data-00': {
      metadata: {},
      observations: []
    },
    'data-01': {
      metadata: {},
      observations: []
    }
  },
  layers: [],
  scales: [],
  labels: {}
};

export const iris01: object = {
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
        {'Sepal.Length': 5.1, 'Sepal.Width': 3.5, 'Petal.Length': 1.4, 'Petal.Width': 0.2, Species: 'setosa'},
        {'Sepal.Length': 4.9, 'Sepal.Width': 3, 'Petal.Length': 1.4, 'Petal.Width': 0.2, Species: 'setosa'}
      ]
    }
  },
  layers: [
    {
      data: 'data-00',
      geom: {class: 'GeomPoint'},
      mapping: {x: {field: 'Petal.Width'}, y: {field: 'Petal.Length'}},
      aes_params: {colour: {value: 'red'}, size: {value: 3}}
    }
  ],
  scales: [
    {
      name: 'petal length',
      class: 'ScaleContinuousPosition',
      aesthetics: ['y', 'ymin', 'ymax', 'yend', 'yintercept', 'ymin_final', 'ymax_final', 'lower', 'middle', 'upper'],
      transform: {type: 'log', base: 10}
    }
  ],
  labels: {title: 'Hello World', x: 'Petal.Width', y: 'Petal.Length'}
};
