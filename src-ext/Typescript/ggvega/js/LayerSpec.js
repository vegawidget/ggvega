import * as vlspec from './VlSpec';
import { TranslateEncoding } from './Encoding';
/**
 * This function used to translate the LayerSpec
 * @param layer
 * The layer in ggSpec
 * @param ggSpec
 */
export function TranslateLayer(layer, ggSpec) {
    var layerspec = {
        data: {
            name: layer['data']
        },
        mark: TranslateMark(layer['geom']),
        encoding: TranslateEncoding(layer, ggSpec)
    };
    return layerspec;
}
function TranslateMark(geom) {
    var type;
    if (geom['class'] == 'GeomPoint') {
        type = vlspec.BoxPlot.Point;
    }
    else {
        type = vlspec.BoxPlot.Point;
    }
    var mark = {
        type: type
    };
    return mark;
}
