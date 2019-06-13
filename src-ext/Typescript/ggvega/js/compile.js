// import {GgSpec} from './ggspec';
import * as vlspec from './vlspec';
/**
 * Main function to translate ggspec to vlspec
 * @param ggJSON
 */
export function gg2vl(ggJSON) {
    var data = {
        values: ggJSON['data']['data-00']['observations']
    };
    var layers = [];
    for (var _i = 0, _a = ggJSON['layers']; _i < _a.length; _i++) {
        var layer = _a[_i];
        layers.push(gg2layer(layer, ggJSON));
    }
    var vl = {
        $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
        title: ggJSON['labels']['title'],
        data: data,
        layer: layers
    };
    return vl;
}
function gg2layer(layer, ggJSON) {
    var layerspec = {
        data: {
            values: ggJSON['data'][layer['data']]['observations']
        },
        mark: gg2mark(layer['geom'], layer['aes_params']),
        encoding: gg2encoding(layer, ggJSON)
    };
    return layerspec;
}
function gg2mark(geom, aesParams) {
    var type;
    if (geom['class'] == 'GeomPoint') {
        type = vlspec.BoxPlot.Point;
    }
    else {
        type = vlspec.BoxPlot.Point;
    }
    var color;
    var size;
    var opacity;
    var fill;
    var stroke;
    var strokeWidth;
    var shape;
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
            var ggShape = aesParams['shape']['value'];
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
    var mark = {
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
function gg2encoding(layer, ggJSON) {
    var color;
    var size;
    var shape;
    if (layer['mapping']['colour']) {
        color = gg2color(layer, ggJSON);
    }
    if (layer['mapping']['size']) {
        size = gg2size(layer, ggJSON);
    }
    if (layer['mapping']['shape']) {
        shape = gg2shape(layer, ggJSON);
    }
    var layerEncoding = {
        x: gg2xclass(layer, ggJSON),
        y: gg2yclass(layer, ggJSON),
        color: color,
        size: size,
        shape: shape
    };
    return layerEncoding;
}
function gg2xclass(layer, ggJSON) {
    var field = layer['mapping']['x']['field'];
    var type = ggJSON['data'][layer['data']]['metadata'][field]['type'];
    var scale = {};
    var title = ggJSON['labels']['x'];
    for (var _i = 0, _a = ggJSON['scales']; _i < _a.length; _i++) {
        var ggScale = _a[_i];
        if (ggScale['aesthetics'][0] == 'x') {
            scale = ggScale['transform'];
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
function gg2yclass(layer, ggJSON) {
    var field = layer['mapping']['y']['field'];
    var type = ggJSON['data'][layer['data']]['metadata'][field]['type'];
    var scale = {};
    var title = ggJSON['labels']['y'];
    for (var _i = 0, _a = ggJSON['scales']; _i < _a.length; _i++) {
        var ggScale = _a[_i];
        if (ggScale['aesthetics'][0] == 'y') {
            scale = ggScale['transform'];
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
function gg2color(layer, ggJSON) {
    var color = {};
    if (layer['mapping']['colour']) {
        if (!layer['mapping']['colour']['field']) {
            return color;
        }
        var field = layer['mapping']['colour']['field'];
        var type = ggJSON['data'][layer['data']]['metadata'][field]['type'];
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
function gg2size(layer, ggJSON) {
    var size = {};
    if (layer['mapping']['size']) {
        if (!layer['mapping']['size']['field']) {
            return size;
        }
        var field = layer['mapping']['size']['field'];
        var type = ggJSON['data'][layer['data']]['metadata'][field]['type'];
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
function gg2shape(layer, ggJSON) {
    var shape = {};
    if (layer['mapping']['shape']) {
        if (!layer['mapping']['shape']['field']) {
            return shape;
        }
        var field = layer['mapping']['shape']['field'];
        var type = ggJSON['data'][layer['data']]['metadata'][field]['type'];
        field = field.replace('.', '\\.');
        shape = {
            field: field,
            type: type,
            title: ggJSON['labels']['shape']
        };
    }
    return shape;
}
