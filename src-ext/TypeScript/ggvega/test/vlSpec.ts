export const iris01 = {
  $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
  datasets: {
    'data-00': [
      {
        'Sepal.Length': 5.1,
        'Sepal.Width': 3.5,
        'Petal.Length': 1.4,
        'Petal.Width': 0.2,
        Species: 'setosa'
      }
    ]
  },
  layer: [
    {
      data: {
        name: 'data-00'
      },
      mark: {type: 'point'},
      encoding: {
        x: {
          field: 'Sepal\\.Width',
          type: 'quantitative',
          title: 'Sepal.Width'
        },
        y: {
          field: 'Sepal\\.Length',
          type: 'quantitative',
          title: 'Sepal.Length'
        },
        stroke: {
          field: 'Species',
          type: 'nominal',
          title: 'Species'
        }
      }
    }
  ]
};

export const iris02 = {
  $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
  datasets: {
    'data-00': [
      {
        'Sepal.Length': 5.1,
        'Sepal.Width': 3.5,
        'Petal.Length': 1.4,
        'Petal.Width': 0.2,
        Species: 'setosa'
      }
    ]
  },
  layer: [
    {
      data: {
        name: 'data-00'
      },
      mark: {
        type: 'point'
      },
      encoding: {
        x: {
          field: 'Sepal\\.Width',
          type: 'quantitative',
          title: 'Sepal.Width'
        },
        y: {
          field: 'Sepal\\.Length',
          type: 'quantitative',
          title: 'yScale'
        },
        stroke: {
          value: 'red'
        }
      }
    }
  ]
};
