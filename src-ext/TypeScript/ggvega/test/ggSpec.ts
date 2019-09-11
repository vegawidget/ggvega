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
        class: 'StatIdentity',
        default_aes: {}
      },
      stat_params: {
        'na.rm': false
      },
      position: {
        class: 'PositionIdentity'
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
        class: 'StatIdentity',
        default_aes: {}
      },
      stat_params: {
        'na.rm': false
      },
      position: {
        class: 'PositionIdentity'
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
        class: 'StatIdentity',
        default_aes: {}
      },
      stat_params: {
        'na.rm': false
      },
      position: {
        class: 'PositionIdentity'
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

export let barMpg = {
  data: {
    'data-00': {
      metadata: {
        manufacturer: {
          type: "nominal"
        },
        model: {
          type: "nominal"
        },
        displ: {
          type: "quantitative"
        },
        year: {
          type: "quantitative"
        },
        cyl: {
          type: "quantitative"
        },
        trans: {
          type: "nominal"
        },
        drv: {
          type: "nominal"
        },
        cty: {
          type: "quantitative"
        },
        hwy: {
          type: "quantitative"
        },
        fl: {
          type: "nominal"
        },
        class: {
          type: "nominal"
        }
      },
      observations: [
        {
          manufacturer: "audi",
          model: "a4",
          displ: 1.8,
          year: 1999,
          cyl: 4,
          trans: "auto(l5)",
          drv: "f",
          cty: 18,
          hwy: 29,
          fl: "p",
          class: "compact"
        }
      ]
    }
  },
  layers: [
    {
      data: "data-00",
      geom: {
        class: "GeomBar"
      },
      geom_params: {
        'na.rm': false
      },
      mapping: {
        x: {
          field: "class"
        }
      },
      aes_params: {},
      stat: {
        class: "StatCount",
        default_aes: {
          y: {
            stat: "count"
          },
          weight: 1
        }
      },
      stat_params: {
        'na.rm': false
      },
      position: {
        class: "PositionStack"
      }
    }
  ],
  scales: [],
  labels: {
    x: "class",
    y: "count",
    weight: "weight"
  },
  coordinates: {
    class: "CoordCartesian"
  },
  facet: {
    class: "FacetNull"
  }
};

export let barStackedMpg = {
  data: {
    'data-00': {
      metadata: {
        manufacturer: {
          type: "nominal"
        },
        model: {
          type: "nominal"
        },
        displ: {
          type: "quantitative"
        },
        year: {
          type: "quantitative"
        },
        cyl: {
          type: "quantitative"
        },
        trans: {
          type: "nominal"
        },
        drv: {
          type: "nominal"
        },
        cty: {
          type: "quantitative"
        },
        hwy: {
          type: "quantitative"
        },
        fl: {
          type: "nominal"
        },
        class: {
          type: "nominal"
        }
      },
      observations: [
        {
          manufacturer: "audi",
          model: "a4",
          displ: 1.8,
          year: 1999,
          cyl: 4,
          trans: "auto(l5)",
          drv: "f",
          cty: 18,
          hwy: 29,
          fl: "p",
          class: "compact"
        }
      ]
    }
  },
  layers: [
    {
      data: "data-00",
      geom: {
        class: "GeomBar"
      },
      geom_params: {
        'na.rm': false
      },
      mapping: {
        x: {
          field: "class"
        },
        fill: {
          field: "drv"
        }
      },
      aes_params: {},
      stat: {
        class: "StatCount",
        default_aes: {
          y: {
            stat: "count"
          },
          weight: 1
        }
      },
      stat_params: {
        'na.rm': false
      },
      position: {
        class: "PositionStack"
      }
    }
  ],
  scales: [],
  labels: {
    x: "class",
    y: "count",
    weight: "weight"
  },
  coordinates: {
    class: "CoordCartesian"
  },
  facet: {
    class: "FacetNull"
  }
};
