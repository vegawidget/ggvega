import * as vl from './vlSpec';
import * as gs from '../../ggschema/src/gsSpec';
export function TranslateAesParamsNumber(
  gsAesParams: gs.AesParams,
  property: 'size' | 'stroke' | 'alpha',
  vlMark: vl.Mark
): number | undefined {
  const key = {
    size: AesParamsSize,
    stroke: NoChangeNumber,
    alpha: NoChangeNumber
  };

  const fn = key[property];

  return fn(gsAesParams[property], vlMark);
}
export function AesParamsSize(gsSize: number | undefined, vlMark: vl.Mark): number | undefined {
  if (gsSize) if (vlMark == vl.Mark.Point) return gsSize * 20;
}

export function NoChangeNumber(value: number | undefined) {
  return value;
}

export function TranslateAesParamsShape(gsAesParams: gs.AesParams, property: 'shape'): string | undefined {
  const key = {
    shape: AesParamsShape
  };

  const fn = key[property];

  return fn(gsAesParams[property]);
}

export function AesParamsShape(gsShape: number | undefined): string | undefined {
  if (gsShape) {
    const gs2vlPointShape: any = {
      0: 'circle',
      1: 'square',
      3: 'cross',
      4: 'diamond',
      5: 'triangle-up',
      6: 'triangle-down',
      7: 'triangle-right',
      8: 'triangle-left'
    };

    return gs2vlPointShape[gsShape % 8];
  }
}

export function TranslateAesParamsString(gsAesParams: gs.AesParams, property: 'colour' | 'fill'): string | undefined {
  const key = {
    colour: NoChangeString,
    fill: NoChangeString
  };

  const fn = key[property];

  return fn(gsAesParams[property]);
}
export function NoChangeString(value: string | undefined) {
  return value;
}
