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
