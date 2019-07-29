export function TranslatePointShape(ggShape) {
    return gg2vlPointShape[ggShape % 8];
}
var gg2vlPointShape = {
    0: 'circle',
    1: 'square',
    3: 'cross',
    4: 'diamond',
    5: 'triangle-up',
    6: 'triangle-down',
    7: 'triangle-right',
    8: 'triangle-left'
};
export function TranslateStroke(ggStroke) {
    return ggStroke;
}
export function TranslateStrokeWidth(ggStrokeWidth) {
    return ggStrokeWidth;
}
export function TranslateOpacity(ggOpacity) {
    return ggOpacity;
}
export function TranslateFill(ggFill) {
    return ggFill;
}
export function TranslatePointSize(ggSize) {
    return ggSize * 20;
}
