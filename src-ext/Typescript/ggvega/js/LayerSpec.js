"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Encoding_1 = require("./Encoding");
var mark_1 = require("vega-lite/build/src/mark");
/**
 * This function used to translate the LayerSpec
 * @param layer
 * The layer in ggSpec
 * @param ggSpec
 */
function TranslateLayer(layer, labels, data, scales) {
    var layerData = data[layer['data']];
    var layerspec = {
        data: {
            name: layer['data']
        },
        mark: TranslateMark(layer['geom']),
        encoding: Encoding_1.TranslateEncoding(layer, labels, layerData, scales)
    };
    return layerspec;
}
exports.TranslateLayer = TranslateLayer;
function TranslateMark(geom) {
    var mark;
    if (geom['class'] == 'GeomPoint') {
        mark = mark_1.POINT;
    }
    else {
        mark = mark_1.POINT;
    }
    return mark;
}
exports.TranslateMark = TranslateMark;
