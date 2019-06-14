// import {GgSpec} from './ggspec';
import * as vlspec from './vlspec';

/**
 * Main function to translate ggspec to vlspec
 * @param ggJSON
 */
export function gg2vl(ggJSON: any): vlspec.VlSpec {
  const data: vlspec.Data = {
    name: 'data-00',
    values: ggJSON['data']['data-00']['observations']
  };

  const layers: vlspec.LayerSpec[] = [];

  for (const layer of ggJSON['layers']) {
    layers.push(gg2layer(layer, ggJSON));
  }

  const vl: vlspec.VlSpec = {
    $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
    title: ggJSON['labels']['title'],
    data: data,
    layer: layers
  };

  return vl;
}

function gg2layer(layer: any, ggJSON: any): vlspec.LayerSpec {
  const layerspec: vlspec.LayerSpec = {
    data: {
      name: layer['data'],
      values: ggJSON['data'][layer['data']]['observations']
    },
    mark: gg2mark(layer['geom'], layer['aes_params']),
    encoding: gg2encoding(layer, ggJSON)
  };

  return layerspec;
}

function gg2mark(geom: any, aesParams: any): vlspec.BoxPlotDefClass {
  let type: vlspec.BoxPlot;
  if (geom['class'] == 'GeomPoint') {
    type = vlspec.BoxPlot.Point;
  } else {
    type = vlspec.BoxPlot.Point;
  }

  let color;

  let size;

  let opacity;

  let fill;

  let stroke;

  let strokeWidth;

  let shape;

  if (aesParams) {
    if (aesParams['colour']) {
      color = aesParams['colour']['value'];
    }

    if (aesParams['size']) {
      if (aesParams['size']['value'] && geom['class'] == 'GeomPoint') {
        size = aesParams['size']['value'] * 30;
      }
    }

    if (aesParams['alpha']) {
      opacity = aesParams['alpha']['value'];
    }

    if (aesParams['fill']) {
      fill = aesParams['fill']['value'];
      stroke = aesParams['colour']['value'];
      color = undefined;
    }

    if (aesParams['stroke']) {
      strokeWidth = aesParams['stroke']['value'];
    }

    if (aesParams['shape'] && geom['class'] == 'GeomPoint') {
      const ggShape: number = aesParams['shape']['value'];
      if (ggShape % 8 == 0) {
        shape = 'circle';
      }
      if (ggShape % 8 == 1) {
        shape = 'square';
      }
      if (ggShape % 8 == 2) {
        shape = 'cross';
      }
      if (ggShape % 8 == 3) {
        shape = 'diamond';
      }
      if (ggShape % 8 == 4) {
        shape = 'triangle-up';
      }
      if (ggShape % 8 == 5) {
        shape = 'triangle-down';
      }
      if (ggShape % 8 == 6) {
        shape = 'triangle-right';
      }
      if (ggShape % 8 == 7) {
        shape = 'triangle-left';
      }
    }
  }

  const mark: vlspec.BoxPlotDefClass = {
    type: type,
    color: color,
    size: size,
    opacity: opacity,
    fill: fill,
    stroke: stroke,
    strokeWidth: strokeWidth,
    shape: shape
  };

  return mark;
}

function gg2encoding(layer: any, ggJSON: any): vlspec.LayerEncoding {
  let color;

  let size;

  let shape;

  if (layer['mapping']['colour']) {
    color = gg2color(layer, ggJSON);
  }

  if (layer['mapping']['size']) {
    size = gg2size(layer, ggJSON);
  }

  if (layer['mapping']['shape']) {
    shape = gg2shape(layer, ggJSON);
  }

  const layerEncoding: vlspec.LayerEncoding = {
    x: gg2xclass(layer, ggJSON),
    y: gg2yclass(layer, ggJSON),
    color: color,
    size: size,
    shape: shape
  };

  return layerEncoding;
}

function gg2xclass(layer: any, ggJSON: any): vlspec.XClass {
  let field: string = layer['mapping']['x']['field'];

  const type: vlspec.StandardType = ggJSON['data'][layer['data']]['metadata'][field]['type'];

  let scale: vlspec.Scale = {};

  let title: string = ggJSON['labels']['x'];

  for (const ggScale of ggJSON['scales']) {
    if (ggScale['aesthetics'][0] == 'x') {
      scale = ggScale['transform'];

      if (ggScale['name']) {
        title = ggScale['name'];
      }
    }
  }

  field = field.replace('.', '\\.');

  const xClass: vlspec.XClass = {
    field: field,
    type: type,
    title: title,
    scale: scale
  };

  return xClass;
}

function gg2yclass(layer: any, ggJSON: any): vlspec.YClass {
  let field: string = layer['mapping']['y']['field'];

  const type: vlspec.StandardType = ggJSON['data'][layer['data']]['metadata'][field]['type'];

  let scale: vlspec.Scale = {};

  let title: string = ggJSON['labels']['y'];

  for (const ggScale of ggJSON['scales']) {
    if (ggScale['aesthetics'][0] == 'y') {
      scale = ggScale['transform'];

      if (ggScale['name']) {
        title = ggScale['name'];
      }
    }
  }

  field = field.replace('.', '\\.');

  const yClass: vlspec.YClass = {
    field: field,
    type: type,
    title: title,
    scale: scale
  };

  return yClass;
}

function gg2color(layer: any, ggJSON: any): vlspec.ValueDefWithConditionMarkPropFieldDefStringNull {
  let color: vlspec.ValueDefWithConditionMarkPropFieldDefStringNull = {};

  if (layer['mapping']['colour']) {
    if (!layer['mapping']['colour']['field']) {
      return color;
    }

    let field: string = layer['mapping']['colour']['field'];

    const type: vlspec.StandardType = ggJSON['data'][layer['data']]['metadata'][field]['type'];

    field = field.replace('.', '\\.');

    color = {
      field: field,
      type: type,
      title: ggJSON['labels']['colour']
    };
  }

  return color;
}

/**
 * TODO:// default type is ordinal bin
 * translate encoding.size
 * @param layer in ggJSON['layers']
 * @param ggJSON is the ggSpec
 */
function gg2size(layer: any, ggJSON: any): vlspec.ValueDefWithConditionMarkPropFieldDefNumber {
  let size: vlspec.ValueDefWithConditionMarkPropFieldDefNumber = {};

  if (layer['mapping']['size']) {
    if (!layer['mapping']['size']['field']) {
      return size;
    }

    let field: string = layer['mapping']['size']['field'];

    const type: vlspec.StandardType = ggJSON['data'][layer['data']]['metadata'][field]['type'];

    field = field.replace('.', '\\.');

    size = {
      field: field,
      type: type,
      title: ggJSON['labels']['size'],
      bin: true
    };
  }

  return size;
}

function gg2shape(layer: any, ggJSON: any): vlspec.ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull {
  let shape: vlspec.ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull = {};

  if (layer['mapping']['shape']) {
    if (!layer['mapping']['shape']['field']) {
      return shape;
    }

    let field: string = layer['mapping']['shape']['field'];

    const type: vlspec.TypeForShape = ggJSON['data'][layer['data']]['metadata'][field]['type'];

    field = field.replace('.', '\\.');

    shape = {
      field: field,
      type: type,
      title: ggJSON['labels']['shape']
    };
  }

  return shape;
}
