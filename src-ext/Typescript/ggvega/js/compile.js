import { TranslateLayer } from './LayerSpec';
export function gg2vl(ggSpec) {
    var vl = {
        $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
        title: TranslateTitle(ggSpec['labels']),
        datasets: TranslateDatasets(ggSpec['data']),
        layer: TranslateLayers(ggSpec['layers'], ggSpec['labels'], ggSpec['data'], ggSpec['scales'])
    };
    return vl;
}
function TranslateTitle(ggLabels) {
    if (!ggLabels)
        return undefined;
    if (ggLabels['title'])
        return ggLabels['title'];
    else
        return undefined;
}
export function TranslateDatasets(ggData) {
    var n = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (var _dataset in ggData) {
        n++;
    }
    if (n == 0) {
        throw new Error('ggSpec should have at least 1 dataset');
    }
    else {
        var datasets = {};
        for (var dataset in ggData) {
            datasets[dataset] = ggData[dataset]['observations'];
        }
        return datasets;
    }
}
export function TranslateLayers(ggLayers, ggLabels, ggData, ggScales) {
    var n = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (var _layer in ggLayers) {
        n++;
    }
    if (n == 0) {
        throw new Error('ggSpec should have at least 1 layer');
    }
    else {
        var layers = [];
        for (var _i = 0, ggLayers_1 = ggLayers; _i < ggLayers_1.length; _i++) {
            var layer = ggLayers_1[_i];
            layers.push(TranslateLayer(layer, ggLabels, ggData, ggScales));
        }
        return layers;
    }
}
/**
 * This function remove empty object in the vlSpec
 * @param obj
 *
 */
export function removeEmpty(obj) {
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
