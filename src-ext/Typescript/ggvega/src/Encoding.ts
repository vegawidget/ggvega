import * as vlspec from './VlSpec';

export function TranslateEncoding(layer: any, labels: any, layerData: any, scales: any): vlspec.LayerEncoding {
  const layerEncoding: vlspec.LayerEncoding = {
    x: TranslateXClass(layer, labels, layerData, scales),
    y: TranslateYClass(layer, labels, layerData, scales),
    // color: TranslateColor(layer, labels, layerData),
    size: TranslateSize(layer, labels, layerData),
    shape: TranslateShape(layer, labels, layerData),
    stroke: TranslateStroke(layer, labels, layerData),
    strokeWidth: TranslateStrokeWidth(layer, labels, layerData),
    opacity: TranslateOpacity(layer, labels, layerData),
    fill: TranslateFill(layer, labels, layerData)
  };

  return layerEncoding;
}

function TranslateXClass(layer: any, labels: any, layerData: any, scales: any): vlspec.XClass {
  let field: string = layer['mapping']['x']['field'];

  const type: vlspec.StandardType = layerData['metadata'][field]['type'];

  let scale: vlspec.Scale | undefined;

  let title: string = labels['x'];

  for (const ggScale of scales) {
    if (ggScale['aesthetics'][0] == 'x') {
      scale = TranslateScale(ggScale['transform']);

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

function TranslateYClass(layer: any, labels: any, layerData: any, scales: any): vlspec.YClass {
  let field: string = layer['mapping']['y']['field'];

  const type: vlspec.StandardType = layerData['metadata'][field]['type'];

  let scale: vlspec.Scale | undefined;

  let title: string = labels['y'];

  for (const ggScale of scales) {
    if (ggScale['aesthetics'][0] == 'y') {
      scale = TranslateScale(ggScale['transform']);

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

/**
 * This function used tp translate `color`.
 * For now, we believe we can use `fill` and `stroke` substitute `color`. So we just comment this function
 * @param layer
 * @param ggSpec
 */
// function TranslateColor(layer: any, labels: any, layerData: any): vlspec.ValueDefWithConditionMarkPropFieldDefStringNull | undefined {
//   let color: vlspec.ValueDefWithConditionMarkPropFieldDefStringNull | undefined;

//   if (layer['aes_params']['colour']) {
//     color = layer['aes_params']['colour'];
//   }

//   if (layer['mapping']['colour']) {
//     if (!layer['mapping']['colour']['field']) {
//       return color;
//     }

//     let field: string = layer['mapping']['colour']['field'];

//     const type: vlspec.StandardType = layerData['metadata'][field]['type'];

//     field = field.replace('.', '\\.');

//     color = {
//       field: field,
//       type: type,
//       title: labels['colour']
//     };
//   }

//   return color;
// }

/**
 * TODO:// default type is ordinal bin
 * translate encoding.size
 * @param layer in ggSpec['layers']
 * @param ggSpec is the ggSpec
 */
function TranslateSize(
  layer: any,
  labels: any,
  layerData: any
): vlspec.ValueDefWithConditionMarkPropFieldDefNumber | undefined {
  let size: vlspec.ValueDefWithConditionMarkPropFieldDefNumber | undefined;

  if (layer['aes_params']) {
    if (layer['aes_params']['size']) {
      size = {
        value: layer['aes_params']['size'][`value`] * 20
      };
    }
  }

  if (layer['mapping']['size']) {
    if (!layer['mapping']['size']['field']) {
      return size;
    }

    let field: string = layer['mapping']['size']['field'];

    const type: vlspec.StandardType = layerData['metadata'][field]['type'];

    field = field.replace('.', '\\.');

    size = {
      field: field,
      type: type,
      title: labels['size'],
      bin: true
    };
  }

  return size;
}

function TranslateShape(
  layer: any,
  labels: any,
  layerData: any
): vlspec.ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull | undefined {
  let shape: vlspec.ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull | undefined;

  if (layer['aes_params']) {
    if (layer['aes_params']['shape']) {
      shape = {
        value: Number2Shape(layer['aes_params']['shape']['value'], layer[`geom`])
      };
    }
  }

  if (layer['mapping']['shape']) {
    if (!layer['mapping']['shape']['field']) {
      return shape;
    }

    let field: string = layer['mapping']['shape']['field'];

    const type: vlspec.TypeForShape = layerData['metadata'][field]['type'];

    field = field.replace('.', '\\.');

    shape = {
      field: field,
      type: type,
      title: labels['shape']
    };
  }

  return shape;
}

function TranslateScale(transform: any): vlspec.Scale {
  return transform;
}

function TranslateStroke(
  layer: any,
  labels: any,
  layerData: any
): vlspec.ValueDefWithConditionMarkPropFieldDefStringNull | undefined {
  let stroke: vlspec.ValueDefWithConditionMarkPropFieldDefStringNull | undefined;

  if (layer['aes_params']) {
    if (layer['aes_params']['colour']) {
      stroke = layer['aes_params']['colour'];
    }
  }

  if (layer['mapping']['colour']) {
    if (!layer['mapping']['colour']['field']) {
      return stroke;
    }

    let field: string = layer['mapping']['colour']['field'];

    const type: vlspec.StandardType = layerData['metadata'][field]['type'];

    field = field.replace('.', '\\.');

    stroke = {
      field: field,
      type: type,
      title: labels['colour']
    };
  }

  return stroke;
}

function TranslateStrokeWidth(
  layer: any,
  labels: any,
  layerData: any
): vlspec.ValueDefWithConditionMarkPropFieldDefNumber | undefined {
  let strokeWidth: vlspec.ValueDefWithConditionMarkPropFieldDefNumber | undefined;

  if (layer['aes_params']) {
    if (layer['aes_params']['stroke']) {
      strokeWidth = {
        value: layer['aes_params']['stroke'][`value`]
      };
    }
  }

  if (layer['mapping']['stroke']) {
    if (!layer['mapping']['stroke']['field']) {
      return strokeWidth;
    }

    let field: string = layer['mapping']['stroke']['field'];

    const type: vlspec.StandardType = layerData['metadata'][field]['type'];

    field = field.replace('.', '\\.');

    strokeWidth = {
      field: field,
      type: type,
      title: labels['stroke']
    };
  }

  return strokeWidth;
}

function TranslateOpacity(
  layer: any,
  labels: any,
  layerData: any
): vlspec.ValueDefWithConditionMarkPropFieldDefNumber | undefined {
  let opacity: vlspec.ValueDefWithConditionMarkPropFieldDefNumber | undefined;

  if (layer['aes_params']) {
    if (layer['aes_params']['alpha']) {
      opacity = {
        value: layer['aes_params']['alpha'][`value`]
      };
    }
  }

  if (layer['mapping']['alpha']) {
    if (!layer['mapping']['alpha']['field']) {
      return opacity;
    }

    let field: string = layer['mapping']['alpha']['field'];

    const type: vlspec.StandardType = layerData['metadata'][field]['type'];

    field = field.replace('.', '\\.');

    opacity = {
      field: field,
      type: type,
      title: labels['stroke']
    };
  }

  return opacity;
}

function TranslateFill(
  layer: any,
  labels: any,
  layerData: any
): vlspec.ValueDefWithConditionMarkPropFieldDefStringNull | undefined {
  let fill: vlspec.ValueDefWithConditionMarkPropFieldDefStringNull | undefined;

  if (layer['aes_params']) {
    if (layer['aes_params']['fill']) {
      fill = layer['aes_params']['fill'];
    }
  }
  if (layer['mapping']['fill']) {
    if (!layer['mapping']['fill']['field']) {
      return fill;
    }

    let field: string = layer['mapping']['fill']['field'];

    const type: vlspec.StandardType = layerData['metadata'][field]['type'];

    field = field.replace('.', '\\.');

    fill = {
      field: field,
      type: type,
      title: labels['colour']
    };
  }

  return fill;
}

function Number2Shape(ggShape: number, geom: any): string {
  let shape = '';

  if (geom['class'] == 'GeomPoint') {
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

  return shape;
}
