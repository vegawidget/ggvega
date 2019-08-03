export function TranslatePointShape(ggShape: number): string {
  return gg2vlPointShape[ggShape % 8];
}

const gg2vlPointShape: any = {
  0: 'circle',
  1: 'square',
  3: 'cross',
  4: 'diamond',
  5: 'triangle-up',
  6: 'triangle-down',
  7: 'triangle-right',
  8: 'triangle-left'
};

export function TranslateStroke(ggStroke: string): string {
  return ggStroke;
}

export function TranslateStrokeWidth(ggStrokeWidth: number): number {
  return ggStrokeWidth;
}

export function TranslateOpacity(ggOpacity: number): number {
  return ggOpacity;
}

export function TranslateFill(ggFill: string): string {
  return ggFill;
}

export function TranslatePointSize(ggSize: number): number {
  return ggSize * 20;
}
