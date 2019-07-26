import { TranslateEncoding } from './Encoding';
import { Mark } from './vlSpec';
/**
 * This function used to translate the LayerSpec
 * @param layer
 * The layer in ggSpec
 * @param ggSpec
 */
export function TranslateLayer(layer, labels, data, scales) {
    var layerData = data[layer['data']];
    var layerspec = {
        data: {
            name: layer['data']
        },
        mark: TranslateMark(layer['geom']),
        encoding: TranslateEncoding(layer, labels, layerData, scales)
    };
    return layerspec;
}
export function TranslateMark(geom) {
    var mark;
    if (geom['class'] == 'GeomPoint') {
        mark = Mark.Point;
    }
    else {
        mark = Mark.Point;
    }
    return mark;
}
