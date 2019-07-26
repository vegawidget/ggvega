import * as Mark from './Mark';
import {
  LayerEncoding,
  Scale,
  XClass,
  StandardType,
  YClass,
  ValueDefWithConditionMarkPropFieldDefNumber,
  ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull,
  ValueDefWithConditionMarkPropFieldDefStringNull,
  TypeForShape
} from './vlSpec';

export function TranslateEncoding(layer: any, labels: any, layerData: any, scales: any): LayerEncoding | undefined {
  const layerEncoding: LayerEncoding | undefined = {
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

function TranslateXClass(layer: any, labels: any, layerData: any, scales: any): XClass | undefined {
  if (!layer['mapping']['x']) return undefined;

  let field: string = layer['mapping']['x']['field'];

  const type: StandardType = layerData['metadata'][field]['type'];

  let scale: Scale | undefined;

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

  const xClass: XClass | undefined = {
    field: field,
    type: type,
    title: title,
    scale: scale
  };

  return xClass;
}

function TranslateYClass(layer: any, labels: any, layerData: any, scales: any): YClass | undefined {
  if (!layer['mapping']['x']) return undefined;

  let field: string = layer['mapping']['y']['field'];

  const type: StandardType = layerData['metadata'][field]['type'];

  let scale: Scale | undefined;

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

  const yClass: YClass | undefined = {
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
): ValueDefWithConditionMarkPropFieldDefNumber | undefined {
  let size: ValueDefWithConditionMarkPropFieldDefNumber | undefined;

  if (layer['aes_params']) {
    if (layer['aes_params']['size']) {
      if (layer['aes_params']['size']['value']) {
        size = {
          value: Mark.TranslatePointSize(layer['aes_params']['size']['value'])
        };
      }
    }
  }

  if (layer['mapping']['size']) {
    if (!layer['mapping']['size']['field']) {
      return size;
    }

    let field: string = layer['mapping']['size']['field'];

    const type: StandardType = layerData['metadata'][field]['type'];

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
): ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull | undefined {
  let shape: ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull | undefined;

  if (layer['aes_params']) {
    if (layer['aes_params']['shape']) {
      if (layer['aes_params']['shape']['value']) {
        if (layer[`geom`]['class'] == 'GeomPoint') {
          shape = {
            value: Mark.TranslatePointShape(layer['aes_params']['shape']['value'])
          };
        }
      }
    }
  }

  if (layer['mapping']['shape']) {
    if (!layer['mapping']['shape']['field']) {
      return shape;
    }

    let field: string = layer['mapping']['shape']['field'];

    const type: TypeForShape = layerData['metadata'][field]['type'];

    field = field.replace('.', '\\.');

    shape = {
      field: field,
      type: type,
      title: labels['shape']
    };
  }

  return shape;
}

function TranslateScale(transform: any): Scale {
  return transform;
}

function TranslateStroke(
  layer: any,
  labels: any,
  layerData: any
): ValueDefWithConditionMarkPropFieldDefStringNull | undefined {
  let stroke: ValueDefWithConditionMarkPropFieldDefStringNull | undefined;

  if (layer['aes_params']) {
    if (layer['aes_params']['colour']) {
      if (layer['aes_params']['colour']['value']) {
        stroke = {
          value: Mark.TranslateStroke(layer['aes_params']['colour']['value'])
        };
      }
    }
  }

  if (layer['mapping']['colour']) {
    if (!layer['mapping']['colour']['field']) {
      return stroke;
    }

    let field: string = layer['mapping']['colour']['field'];

    const type: StandardType = layerData['metadata'][field]['type'];

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
): ValueDefWithConditionMarkPropFieldDefNumber | undefined {
  let strokeWidth: ValueDefWithConditionMarkPropFieldDefNumber | undefined;

  if (layer['aes_params']) {
    if (layer['aes_params']['stroke']) {
      if (layer['aes_params']['stroke']['value']) {
        strokeWidth = {
          value: Mark.TranslateStrokeWidth(layer['aes_params']['stroke']['value'])
        };
      }
    }
  }

  if (layer['mapping']['stroke']) {
    if (!layer['mapping']['stroke']['field']) {
      return strokeWidth;
    }

    let field: string = layer['mapping']['stroke']['field'];

    const type: StandardType = layerData['metadata'][field]['type'];

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
): ValueDefWithConditionMarkPropFieldDefNumber | undefined {
  let opacity: ValueDefWithConditionMarkPropFieldDefNumber | undefined;

  if (layer['aes_params']) {
    if (layer['aes_params']['alpha']) {
      if (layer['aes_params']['alpha']['value']) {
        opacity = {
          value: Mark.TranslateOpacity(layer['aes_params']['alpha']['value'])
        };
      }
    }
  }

  if (layer['mapping']['alpha']) {
    if (!layer['mapping']['alpha']['field']) {
      return opacity;
    }

    let field: string = layer['mapping']['alpha']['field'];

    const type: StandardType = layerData['metadata'][field]['type'];

    field = field.replace('.', '\\.');

    opacity = {
      field: field,
      type: type,
      title: labels['stroke']
    };
  }

  return opacity;
}

export function TranslateFill(
  layer: any,
  labels: any,
  layerData: any
): ValueDefWithConditionMarkPropFieldDefStringNull | undefined {
  let fill: ValueDefWithConditionMarkPropFieldDefStringNull | undefined;

  if (layer['aes_params']) {
    if (layer['aes_params']['fill']) {
      if (layer['aes_params']['fill']['value']) {
        fill = {
          value: Mark.TranslateFill(layer['aes_params']['fill']['value'])
        };
      }
    }
  }

  if (layer['mapping']['fill']) {
    if (!layer['mapping']['fill']['field']) {
      return fill;
    }

    let field: string = layer['mapping']['fill']['field'];

    const type: StandardType = layerData['metadata'][field]['type'];

    field = field.replace('.', '\\.');

    fill = {
      field: field,
      type: type,
      title: labels['colour']
    };
  }

  return fill;
}
