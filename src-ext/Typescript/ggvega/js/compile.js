"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LayerSpec_1 = require("./LayerSpec");
function gg2vl(ggSpec) {
    var vl = {
        $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
        title: TranslateTitle(ggSpec['labels']),
        datasets: TranslateDatasets(ggSpec['data']),
        layer: TranslateLayers(ggSpec['layers'], ggSpec['labels'], ggSpec['data'], ggSpec['scales'])
    };
    return vl;
}
exports.gg2vl = gg2vl;
function TranslateTitle(ggLables) {
    if (!ggLables)
        return undefined;
    if (ggLables['title'])
        return ggLables['title'];
}
function TranslateDatasets(ggData) {
    if (!ggData)
        return undefined;
    var n = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (var _dataset in ggData) {
        n++;
    }
    if (n == 0)
        return undefined;
    else {
        var datasets = {};
        for (var dataset in ggData) {
            datasets[dataset] = ggData[dataset]['observations'];
        }
        return datasets;
    }
}
function TranslateLayers(ggLayers, ggLables, ggData, ggScales) {
    var layers = [];
    if (ggLayers != null) {
        for (var _i = 0, ggLayers_1 = ggLayers; _i < ggLayers_1.length; _i++) {
            var layer = ggLayers_1[_i];
            layers.push(LayerSpec_1.TranslateLayer(layer, ggLables, ggData, ggScales));
        }
    }
    return layers;
}
/**
 * This function remove empty object in the vlSpec
 * @param obj
 *
 */
function removeEmpty(obj) {
    if (!(obj != null && typeof obj === 'object'))
        return;
    Object.keys(obj).forEach(function (key) {
        if (obj[key] && typeof obj[key] === 'object') {
            if (Object.keys(obj[key]).length === 0) {
                delete obj[key];
                return;
            }
            removeEmpty(obj[key]);
            if (Object.keys(obj[key]).length === 0) {
                delete obj[key];
                return;
            }
        }
        else if (obj[key] === null) {
            delete obj[key];
            return;
        }
    });
}
exports.removeEmpty = removeEmpty;
