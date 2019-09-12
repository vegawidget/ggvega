export const iris01 = {
  layer: [
    {
      data: {
        name: 'data-00'
      },
      geomSet: {
        geom: {
          class: 'GeomPoint'
        },
        geom_params: {
          'na.rm': false
        }
      },
      mark: {type: 'point'},
      encoding: {
        x: {
          field: 'Sepal\\.Width',
          type: 'quantitative'
        },
        y: {
          field: 'Sepal\\.Length',
          type: 'quantitative'
        },
        colour: {
          field: 'Species',
          type: 'nominal'
        }
      }
    }
  ]
};

export const iris02 = {
  layer: [
    {
      data: {
        name: 'data-00'
      },
      geomSet: {
        geom: {
          class: 'GeomPoint'
        },
        geom_params: {
          'na.rm': false
        }
      },
      mark: {type: 'point'},
      encoding: {
        x: {
          field: 'Sepal\\.Width',
          type: 'quantitative'
        },
        y: {
          field: 'Sepal\\.Length',
          type: 'quantitative'
        },
        colour: {
          value: 'red'
        }
      }
    }
  ]
};

export const barStackedMpg = {
  layer: [
    {
      data: {
        name: 'data-00'
      },
      geomSet: {
        geom: {
          class: "GeomBar"
        },
        geom_params: {
          'na.rm': false
        }
      },
      mark: {type: 'bar'},
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
        },
        fill: {
          field: 'drv',
          type: 'nominal',
          title: 'drv'
        }
      }
    }
  ]
};
