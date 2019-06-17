export function TranslateEncoding(layer, labels, layerData, scales) {
    var layerEncoding = {
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
function TranslateXClass(layer, labels, layerData, scales) {
    var field = layer['mapping']['x']['field'];
    var type = layerData['metadata'][field]['type'];
    var scale;
    var title = labels['x'];
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
    var xClass = {
        field: field,
        type: type,
        title: title,
        scale: scale
    };
    return xClass;
}
function TranslateYClass(layer, labels, layerData, scales) {
    var field = layer['mapping']['y']['field'];
    var type = layerData['metadata'][field]['type'];
    var scale;
    var title = labels['y'];
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
    var yClass = {
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
    if (layer['aes_params']['size']) {
        size = {
            value: layer['aes_params']['size']["value"] * 20
        };
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
    if (layer['aes_params']['shape']) {
        shape = {
            value: Number2Shape(layer['aes_params']['shape']['value'], layer["geom"])
        };
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
    if (layer['aes_params']['colour']) {
        stroke = layer['aes_params']['colour'];
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
    if (layer['aes_params']['stroke']) {
        strokeWidth = {
            value: layer['aes_params']['stroke']["value"]
        };
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
    if (layer['aes_params']['alpha']) {
        opacity = {
            value: layer['aes_params']['alpha']["value"]
        };
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
function TranslateFill(layer, labels, layerData) {
    var fill;
    if (layer['aes_params']['fill']) {
        fill = layer['aes_params']['fill'];
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
function Number2Shape(ggShape, geom) {
    var shape = '';
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
