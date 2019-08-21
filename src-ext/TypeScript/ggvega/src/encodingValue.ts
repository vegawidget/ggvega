import {contains} from './utils';
/**
 * Translate a ggplot2 size to a Vega-Lite size
 *
 * @remarks
 * In the future, we may have to take the geom into account.
 *
 * **Called by**
 * @see itmEncodingObjectByAesParamsObject
 *
 * @param size - `number`
 *
 * @returns `number`
 */
export function encodingValueSize(size: string | number | undefined): number {
  // translate
  return 20 * Number(size);
}
/**
 * Translate a ggplot2 shape to a Vega-Lite shape
 *
 * @remark
 *
 * We need to think more about how this function behaves.
 *
 * **Called by**
 * @see itmEncodingObjectByAesParamsObject
 *
 * @param size - `number`
 *
 * @returns `number`
 */
export function encodingValueShape(shape: string | number | undefined): string {
  shape = Number(shape);

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

/**
 * Translate a ggplot2 colour to a Vega-Lite color
 *
 * @remark
 *
 * In ggplot2, colours can be hex-codes or named colours; In Vega-Lite,
 * colors can be hex-codes or named colors. Hex-codes mean the same thing
 * in both. Colours, although they have a common heritage, X11, are a little
 * bit different.
 *
 * Hex-codes are returned unchanged.
 *
 * Colour-names that end in numbers have the numbers removed.
 *
 * In the future, we might imagine something more-sophisticated that preserves the
 * names of colours that correspond, but replace those that do not correspond
 * with hex-codes.
 *
 * **Called by**
 * @see itmEncodingObjectByAesParamsObject
 *
 * @param size - `number`
 *
 * @returns `number`
 */
export function encodingValueColor(color: string | number | undefined): string {
  // colors in R can have numbers at the end, in Vega-Lite (css), they don't
  // - we can get a good-enough mapping by removing the numbers.

  //NOTE @wenyu: use String()?
  color = String(color);

  // return hex-values as-is
  // validate
  if (color.match(/^(#[0-9a-f]{3}|#[0-9a-f]{6})$/i)) {
    // translate
    return color;
  }

  // translate
  const colorNew: string = color.replace(/[0-9]+$/, '');

  // TODO validate - check that color is in Vega-Lite colors
  // if (!validColorNew) {
  //   throw new Error('ggplot object contains unsupported color: ' + color);
  // }

  return colorNew;
}

//NOTE @wenyu:
export function encodingValueStroke(stroke: string | number | undefined): number {
  return Number(stroke);
}

export function encodingValueAlpha(alpha: string | number | undefined): number {
  return Number(alpha);
}
