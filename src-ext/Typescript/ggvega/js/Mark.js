"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function TranslatePointShape(ggShape) {
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
exports.TranslatePointShape = TranslatePointShape;
function TranslateStroke(ggStroke) {
    return ggStroke;
}
exports.TranslateStroke = TranslateStroke;
function TranslateStrokeWidth(ggStrokeWidth) {
    return ggStrokeWidth;
}
exports.TranslateStrokeWidth = TranslateStrokeWidth;
function TranslateOpacity(ggOpacity) {
    return ggOpacity;
}
exports.TranslateOpacity = TranslateOpacity;
function TranslateFill(ggFill) {
    return ggFill;
}
exports.TranslateFill = TranslateFill;
function TranslatePointSize(ggSize) {
    return ggSize * 20;
}
exports.TranslatePointSize = TranslatePointSize;
