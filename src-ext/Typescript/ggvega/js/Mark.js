export function TranslatePointShape(ggShape) {
    var shape = '';
    if (ggShape % 8 == 0) {
        shape = 'circle';
    }
    if (ggShape % 8 == 1) {
        shape = 'square';
    }
    if (ggShape % 8 == 2) {
        shape = 'cross';
    }
    if (ggShape % 8 == 3) {
        shape = 'diamond';
    }
    if (ggShape % 8 == 4) {
        shape = 'triangle-up';
    }
    if (ggShape % 8 == 5) {
        shape = 'triangle-down';
    }
    if (ggShape % 8 == 6) {
        shape = 'triangle-right';
    }
    if (ggShape % 8 == 7) {
        shape = 'triangle-left';
    }
    return shape;
}
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
