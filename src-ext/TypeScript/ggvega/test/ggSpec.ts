export const iris01 = {
  data: {
    'data-00': {
      metadata: {
        'Sepal.Length': {
          type: 'quantitative'
        },
        'Sepal.Width': {
          type: 'quantitative'
        },
        'Petal.Length': {
          type: 'quantitative'
        },
        'Petal.Width': {
          type: 'quantitative'
        },
        Species: {
          type: 'nominal',
          levels: ['setosa', 'versicolor', 'virginica']
        }
      },
      observations: [
        {
          'Sepal.Length': 5.1,
          'Sepal.Width': 3.5,
          'Petal.Length': 1.4,
          'Petal.Width': 0.2,
          Species: 'setosa'
        }
      ]
    }
  },
  layers: [
    {
      data: 'data-00',
      geom: {
        class: 'GeomPoint'
      },
      geom_params: {
        'na.rm': false
      },
      mapping: {
        x: {
          field: 'Sepal.Width'
        },
        y: {
          field: 'Sepal.Length'
        },
        colour: {
          field: 'Species'
        }
      },
      aes_params: {},
      stat: {
        class: 'StatIdentity'
      },
      stat_params: {
        'na.rm': false
      }
    }
  ],
  scales: [],
  labels: {
    x: 'Sepal.Width',
    y: 'Sepal.Length',
    colour: 'Species'
  },
  coordinates: {
    class: 'CoordCartesian'
  },
  facet: {
    class: 'FacetNull'
  }
};

export const iris02 = {
  data: {
    'data-00': {
      metadata: {
        'Sepal.Length': {
          type: 'quantitative'
        },
        'Sepal.Width': {
          type: 'quantitative'
        },
        'Petal.Length': {
          type: 'quantitative'
        },
        'Petal.Width': {
          type: 'quantitative'
        },
        Species: {
          type: 'nominal',
          levels: ['setosa', 'versicolor', 'virginica']
        }
      },
      observations: [
        {
          'Sepal.Length': 5.1,
          'Sepal.Width': 3.5,
          'Petal.Length': 1.4,
          'Petal.Width': 0.2,
          Species: 'setosa'
        }
      ]
    }
  },
  layers: [
    {
      data: 'data-00',
      geom: {
        class: 'GeomPoint'
      },
      geom_params: {
        'na.rm': false
      },
      mapping: {
        x: {
          field: 'Sepal.Width'
        },
        y: {
          field: 'Sepal.Length'
        }
      },
      aes_params: {
        colour: 'red'
      },
      stat: {
        class: 'StatIdentity'
      },
      stat_params: {
        'na.rm': false
      }
    }
  ],
  scales: [
    {
      name: 'yScale',
      class: 'ScaleContinuousPosition',
      aesthetics: ['y', 'ymax', 'ymin']
    }
  ],
  labels: {
    x: 'Sepal.Width',
    y: 'Sepal.Length',
    colour: 'colour'
  },
  coordinates: {
    class: 'CoordCartesian'
  },
  facet: {
    class: 'FacetNull'
  }
};

export const iris03 = {
  data: {
    'data-00': {
      metadata: {
        'Sepal.Length': {
          type: 'quantitative'
        },
        'Sepal.Width': {
          type: 'quantitative'
        },
        'Petal.Length': {
          type: 'quantitative'
        },
        'Petal.Width': {
          type: 'quantitative'
        },
        Species: {
          type: 'nominal',
          levels: ['setosa', 'versicolor', 'virginica']
        }
      },
      observations: [
        {
          'Sepal.Length': 5.1,
          'Sepal.Width': 3.5,
          'Petal.Length': 1.4,
          'Petal.Width': 0.2,
          Species: 'setosa'
        }
      ]
    }
  },
  layers: [
    {
      data: 'data-00',
      geom: {
        class: 'GeomPoint'
      },
      geom_params: {
        'na.rm': false
      },
      mapping: {
        x: {
          field: 'Sepal.Width'
        },
        y: {
          field: 'Sepal.Length'
        },
        colour: {
          field: 'Species'
        }
      },
      aes_params: {},
      stat: {
        class: 'StatIdentity'
      },
      stat_params: {
        'na.rm': false
      }
    }
  ],
  scales: [],
  labels: {
    x: 'Sepal.Width',
    y: 'Sepal.Length',
    colour: 'Species'
  },
  coordinates: {
    class: 'CoordFlip'
  },
  facet: {
    class: 'FacetNull'
  }
};

// duplicate the layer
export let iris04 = JSON.parse(JSON.stringify(iris03));
iris04.layers.push(JSON.parse(JSON.stringify(iris04.layers[0])));
//console.log(iris04);

