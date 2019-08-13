function encodingValueSize(size: number): number {

  // TODO: keep in mind that this will likely depend on the Geom,
  // so we will likely need to take this into account
  
  // translate
  return 20 * size;
}

function encodingValueShape(shape: number): string {

  // TODO: think more about this map
  const shapeMap: any = {
    0: 'circle',
    1: 'square',
    3: 'cross',
    4: 'diamond',
    5: 'triangle-up',
    6: 'triangle-down',
    7: 'triangle-right',
    8: 'triangle-left'
  };

  // validate
  if (!contains(Object.keys(shapeMap), shape)) {
    throw new Error('ggplot object contains unsupported shape: ' + shape);  
  }
  
  // translate
  return shapeMap[shape];
}

function encodingValueColor(color: string): string {
  // colors in R can have numbers at the end, in Vega-Lite (css), they don't
  // - we can get a good-enough mapping by removing the numbers.

  // return hex-values as-is
  // validate
  if (color.match(/^(#[0-9a-f]{3}|#[0-9a-f]{6})$/i)) {
    // translate
    return color;
  }

  // translate
  let colorNew: string = color.replace(/[0-9]+$/, "") 

  // TODO validate - check that color is in Vega-Lite colors
  // if (!validColorNew) {
  //   throw new Error('ggplot object contains unsupported color: ' + color);  
  // }

  return colorNew;
}