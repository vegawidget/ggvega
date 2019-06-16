export function TranslateEncoding(layer, ggSpec) {
    var layerEncoding = {
        x: TranslateXClass(layer, ggSpec),
        y: TranslateYClass(layer, ggSpec),
        color: TranslateColor(layer, ggSpec),
        size: TranslateSize(layer, ggSpec),
        shape: TranslateShape(layer, ggSpec)
    };
    return layerEncoding;
}
function TranslateXClass(layer, ggSpec) {
    var field = layer['mapping']['x']['field'];
    var type = ggSpec['data'][layer['data']]['metadata'][field]['type'];
    var scale;
    var title = ggSpec['labels']['x'];
    for (var _i = 0, _a = ggSpec['scales']; _i < _a.length; _i++) {
        var ggScale = _a[_i];
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
function TranslateYClass(layer, ggSpec) {
    var field = layer['mapping']['y']['field'];
    var type = ggSpec['data'][layer['data']]['metadata'][field]['type'];
    var scale;
    var title = ggSpec['labels']['y'];
    for (var _i = 0, _a = ggSpec['scales']; _i < _a.length; _i++) {
        var ggScale = _a[_i];
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
function TranslateColor(layer, ggSpec) {
    var color;
    if (layer['aes_params']['colour']) {
        color = layer['aes_params']['colour'];
    }
    if (layer['mapping']['colour']) {
        if (!layer['mapping']['colour']['field']) {
            return color;
        }
        var field = layer['mapping']['colour']['field'];
        var type = ggSpec['data'][layer['data']]['metadata'][field]['type'];
        field = field.replace('.', '\\.');
        color = {
            field: field,
            type: type,
            title: ggSpec['labels']['colour']
        };
    }
    return color;
}
/**
 * TODO:// default type is ordinal bin
 * translate encoding.size
 * @param layer in ggSpec['layers']
 * @param ggSpec is the ggSpec
 */
function TranslateSize(layer, ggSpec) {
    var size;
    if (layer['aes_params']['size']) {
        size = layer['aes_params']['size'];
    }
    if (layer['mapping']['size']) {
        if (!layer['mapping']['size']['field']) {
            return size;
        }
        var field = layer['mapping']['size']['field'];
        var type = ggSpec['data'][layer['data']]['metadata'][field]['type'];
        field = field.replace('.', '\\.');
        size = {
            field: field,
            type: type,
            title: ggSpec['labels']['size'],
            bin: true
        };
    }
    return size;
}
function TranslateShape(layer, ggSpec) {
    var shape;
    if (layer['mapping']['shape']) {
        if (!layer['mapping']['shape']['field']) {
            return shape;
        }
        var field = layer['mapping']['shape']['field'];
        var type = ggSpec['data'][layer['data']]['metadata'][field]['type'];
        field = field.replace('.', '\\.');
        shape = {
            field: field,
            type: type,
            title: ggSpec['labels']['shape']
        };
    }
    return shape;
}
function TranslateScale(transform) {
    return transform;
}
