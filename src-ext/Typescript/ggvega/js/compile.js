import { TranslateLayer } from './LayerSpec';
export function gg2vl(ggSpec) {
    const vl = {
        $schema: 'https://vega.github.io/schema/vega-lite/v3.json',
        title: TranslateTitle(ggSpec['labels']),
        datasets: TranslateDatasets(ggSpec['data']),
        layer: TranslateLayers(ggSpec['layers'], ggSpec['labels'], ggSpec['data'], ggSpec['scales'])
    };
    return vl;
}
function TranslateTitle(ggLables) {
    if (!ggLables)
        return undefined;
    if (ggLables['title'])
        return ggLables['title'];
    return undefined;
}
function TranslateDatasets(ggData) {
    if (!ggData)
        return undefined;
    let n = 0;
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    for (const _dataset in ggData) {
        n++;
    }
    if (n == 0)
        return undefined;
    else {
        const datasets = {};
        for (const dataset in ggData) {
            datasets[dataset] = ggData[dataset]['observations'];
        }
        return datasets;
    }
}
function TranslateLayers(ggLayers, ggLables, ggData, ggScales) {
    const layers = [];
    if (ggLayers != null) {
        for (const layer of ggLayers) {
            layers.push(TranslateLayer(layer, ggLables, ggData, ggScales));
        }
    }
    return layers;
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
