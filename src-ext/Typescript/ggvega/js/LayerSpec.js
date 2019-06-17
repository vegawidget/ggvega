import * as vlspec from './VlSpec';
import { TranslateEncoding } from './Encoding';
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
function TranslateMark(geom) {
    var mark;
    if (geom['class'] == 'GeomPoint') {
        mark = vlspec.Mark.Point;
    }
    else {
        mark = vlspec.Mark.Point;
    }
    return mark;
}
