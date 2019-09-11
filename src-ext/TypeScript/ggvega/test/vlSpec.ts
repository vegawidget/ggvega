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

export const iris03 = {
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
        y: {
          field: 'Sepal\\.Width',
          type: 'quantitative',
          title: 'Sepal.Width'
        },
        x: {
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

export const iris03Single = {
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
  data: {
    name: 'data-00'
  },
  mark: {
    type: 'point'
  },
  encoding: {
    y: {
      field: 'Sepal\\.Width',
      type: 'quantitative',
      title: 'Sepal.Width'
    },
    x: {
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

};

// duplicate the layer
export let iris04 = JSON.parse(JSON.stringify(iris03));
iris04.layer.push(JSON.parse(JSON.stringify(iris04.layer[0])));
// remove titles from second layer
iris04.layer[1].encoding.x.title = undefined;
iris04.layer[1].encoding.y.title = undefined;
iris04.layer[1].encoding.stroke.title = undefined;

export let barMpg = {
  $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
  datasets: {
    'data-00': [
      {
        manufacturer: 'audi',
        model: 'a4',
        displ: 1.8,
        year: 1999,
        cyl: 4,
        trans: 'auto(l5)',
        drv: 'f',
        cty: 18,
        hwy: 29,
        fl: 'p',
        class: 'compact'
      }
    ]
  },
  layer: [
    {
      data: {
        name: 'data-00'
      },
      mark: {
        type: 'bar'
      },
      encoding: {
        x: {
          field: 'class',
          type: 'nominal',
          title: 'class'
        },
        y: {
          aggregate: 'count',
          stack: 'zero',
          type: 'quantitative',
          title: 'count'
        }
      }
    }
  ]
};
