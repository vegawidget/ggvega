import { TranslateLayer } from './LayerSpec';
/**
 * Main function to translate ggspec to vlspec
 * @param ggSpec
 */
export function gg2vl(ggSpec) {
    var layers;
    var labels = ggSpec['labels'];
    var data = ggSpec['data'];
    var scales = ggSpec['scales'];
    var title;
    if (labels) {
        if (labels['title']) {
            title = labels['title'];
        }
    }
    if (ggSpec['layers'] != null) {
        layers = [];
        for (var _i = 0, _a = ggSpec['layers']; _i < _a.length; _i++) {
            var layer = _a[_i];
            layers.push(TranslateLayer(layer, labels, data, scales));
        }
    }
    var datasets = {};
    for (var dataset in ggSpec['data']) {
        datasets[dataset] = ggSpec['data'][dataset]['observations'];
    }
    var vl = {
        $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
        title: title,
        datasets: datasets,
        layer: layers
    };
    removeEmpty(vl);
    return vl;
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
