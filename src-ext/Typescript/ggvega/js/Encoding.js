import * as ggMark from './Mark';
import { TranslateStat } from './Stat';
import { StandardType, Mark } from './vlSpec';
export function TranslateEncoding(layer, labels, layerData, scales, mark) {
    var layerEncoding = {
        x: TranslateXClass(layer, labels, layerData, scales, mark),
        y: TranslateYClass(layer, labels, layerData, scales, mark),
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
function TranslateXClass(layer, labels, layerData, scales, mark) {
    var xClass;
    var scale;
    var title = labels['x'];
    var aggregate;
    if (!layer['mapping']['x']) {
        if (mark == Mark.Bar) {
            aggregate = TranslateStat(layer['stat']);
            xClass = {
                aggregate: aggregate,
                type: StandardType.Quantitative,
                title: title,
                scale: scale
            };
        }
        return xClass;
    }
    var field = layer['mapping']['x']['field'];
    var type = layerData['metadata'][field]['type'];
    for (var _i = 0, scales_1 = scales; _i < scales_1.length; _i++) {
        var ggScale = scales_1[_i];
        if (ggScale['aesthetics'][0] == 'x') {
            scale = TranslateScale(ggScale['transform']);
            if (ggScale['name']) {
                title = ggScale['name'];
            }
        }
    }
    field = field.replace('.', '\\.');
    xClass = {
        field: field,
        type: type,
        title: title,
        scale: scale
    };
    return xClass;
}
function TranslateYClass(layer, labels, layerData, scales, mark) {
    var yClass;
    var scale;
    var title = labels['y'];
    var aggregate;
    if (!layer['mapping']['y']) {
        if (mark == Mark.Bar) {
            aggregate = TranslateStat(layer['stat']);
            yClass = {
                aggregate: aggregate,
                type: StandardType.Quantitative,
                title: title,
                scale: scale
            };
        }
        return yClass;
    }
    var field = layer['mapping']['y']['field'];
    var type = layerData['metadata'][field]['type'];
    for (var _i = 0, scales_2 = scales; _i < scales_2.length; _i++) {
        var ggScale = scales_2[_i];
        if (ggScale['aesthetics'][0] == 'y') {
            scale = TranslateScale(ggScale['transform']);
            if (ggScale['name']) {
                title = ggScale['name'];
            }
        }
    }
    field = field.replace('.', '\\.');
    yClass = {
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
function TranslateSize(layer, labels, layerData) {
    var size;
    if (layer['aes_params']) {
        if (layer['aes_params']['size']) {
            if (layer['aes_params']['size']['value']) {
                size = {
                    value: ggMark.TranslatePointSize(layer['aes_params']['size']['value'])
                };
            }
        }
    }
    if (layer['mapping']['size']) {
        if (!layer['mapping']['size']['field']) {
            return size;
        }
        var field = layer['mapping']['size']['field'];
        var type = layerData['metadata'][field]['type'];
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
function TranslateShape(layer, labels, layerData) {
    var shape;
    if (layer['aes_params']) {
        if (layer['aes_params']['shape']) {
            if (layer['aes_params']['shape']['value']) {
                if (layer["geom"]['class'] == 'GeomPoint') {
                    shape = {
                        value: ggMark.TranslatePointShape(layer['aes_params']['shape']['value'])
                    };
                }
            }
        }
    }
    if (layer['mapping']['shape']) {
        if (!layer['mapping']['shape']['field']) {
            return shape;
        }
        var field = layer['mapping']['shape']['field'];
        var type = layerData['metadata'][field]['type'];
        field = field.replace('.', '\\.');
        shape = {
            field: field,
            type: type,
            title: labels['shape']
        };
    }
    return shape;
}
function TranslateScale(transform) {
    return transform;
}
function TranslateStroke(layer, labels, layerData) {
    var stroke;
    if (layer['aes_params']) {
        if (layer['aes_params']['colour']) {
            if (layer['aes_params']['colour']['value']) {
                stroke = {
                    value: ggMark.TranslateStroke(layer['aes_params']['colour']['value'])
                };
            }
        }
    }
    if (layer['mapping']['colour']) {
        if (!layer['mapping']['colour']['field']) {
            return stroke;
        }
        var field = layer['mapping']['colour']['field'];
        var type = layerData['metadata'][field]['type'];
        field = field.replace('.', '\\.');
        stroke = {
            field: field,
            type: type,
            title: labels['colour']
        };
    }
    return stroke;
}
function TranslateStrokeWidth(layer, labels, layerData) {
    var strokeWidth;
    if (layer['aes_params']) {
        if (layer['aes_params']['stroke']) {
            if (layer['aes_params']['stroke']['value']) {
                strokeWidth = {
                    value: ggMark.TranslateStrokeWidth(layer['aes_params']['stroke']['value'])
                };
            }
        }
    }
    if (layer['mapping']['stroke']) {
        if (!layer['mapping']['stroke']['field']) {
            return strokeWidth;
        }
        var field = layer['mapping']['stroke']['field'];
        var type = layerData['metadata'][field]['type'];
        field = field.replace('.', '\\.');
        strokeWidth = {
            field: field,
            type: type,
            title: labels['stroke']
        };
    }
    return strokeWidth;
}
function TranslateOpacity(layer, labels, layerData) {
    var opacity;
    if (layer['aes_params']) {
        if (layer['aes_params']['alpha']) {
            if (layer['aes_params']['alpha']['value']) {
                opacity = {
                    value: ggMark.TranslateOpacity(layer['aes_params']['alpha']['value'])
                };
            }
        }
    }
    if (layer['mapping']['alpha']) {
        if (!layer['mapping']['alpha']['field']) {
            return opacity;
        }
        var field = layer['mapping']['alpha']['field'];
        var type = layerData['metadata'][field]['type'];
        field = field.replace('.', '\\.');
        opacity = {
            field: field,
            type: type,
            title: labels['stroke']
        };
    }
    return opacity;
}
export function TranslateFill(layer, labels, layerData) {
    var fill;
    if (layer['aes_params']) {
        if (layer['aes_params']['fill']) {
            if (layer['aes_params']['fill']['value']) {
                fill = {
                    value: ggMark.TranslateFill(layer['aes_params']['fill']['value'])
                };
            }
        }
    }
    if (layer['mapping']['fill']) {
        if (!layer['mapping']['fill']['field']) {
            return fill;
        }
        var field = layer['mapping']['fill']['field'];
        var type = layerData['metadata'][field]['type'];
        field = field.replace('.', '\\.');
        fill = {
            field: field,
            type: type,
            title: labels['colour']
        };
    }
    return fill;
}
