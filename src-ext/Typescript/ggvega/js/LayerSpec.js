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
    var mark = TranslateMark(layer['geom']);
    var layerspec = {
        data: {
            name: layer['data']
        },
        mark: mark,
        encoding: TranslateEncoding(layer, labels, layerData, scales, mark)
    };
    return layerspec;
}
export function TranslateMark(geom) {
    var mark;
    if (geom['class'] == 'GeomPoint') {
        mark = Mark.Point;
    }
    if (geom['class'] == 'GeomBar') {
        mark = Mark.Bar;
    }
    else {
        mark = Mark.Point;
    }
    return mark;
}
