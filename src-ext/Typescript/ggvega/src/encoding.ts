import * as Mark from './mark';
import * as vl from './vlSpec';
import * as gs from '../../ggschema/src/index';
import {getEncodingKey, EncodingKey} from './encodingkey';

export function TranslateEncoding(gsLayer: gs.Layer, gsMetadata: gs.Metadata, vlMark: vl.Mark): vl.Encoding {
  const encodingKey: EncodingKey = getEncodingKey(gsLayer.geom);

  const vlEncoding: vl.Encoding = EncodingMapping(gsLayer.mapping, gsLayer.aes_params, gsMetadata, vlMark, encodingKey);

  return vlEncoding;
}

function EncodingMapping(
  gsMapping: gs.Mapping,
  gsAesParams: gs.AesParams,
  gsMetadata: gs.Metadata,
  vlMark: vl.Mark,
  encodingKey: EncodingKey
): vl.Encoding {
  const vlEncoding: vl.LayerEncoding = {
    x: EncodingX(gsMapping.x, gsMetadata),
    y: EncodingY(gsMapping.y, gsMetadata),
    size: EncodingNumber(encodingKey.size, gsMapping.size, gsAesParams, gsMetadata, vlMark),
    shape: EncodingShapeString(encodingKey.shape, gsMapping.shape, gsAesParams, gsMetadata),
    stroke: EncodingString(encodingKey.stroke, gsMapping.colour, gsAesParams, gsMetadata),
    strokeWidth: EncodingNumber(encodingKey.strokeWidth, gsMapping.stroke, gsAesParams, gsMetadata, vlMark),
    opacity: EncodingNumber(encodingKey.opacity, gsMapping.alpha, gsAesParams, gsMetadata, vlMark),
    fill: EncodingString(encodingKey.fill, gsMapping.fill, gsAesParams, gsMetadata)
  };

  return vlEncoding;
}

function EncodingX(gsX: gs.Encoding | undefined, gsMetadata: gs.Metadata): vl.XClass | undefined {
  if (!gsX) return undefined;

  let vlField: string = gsX.field;

  const vlType: vl.StandardType = gsMetadata[vlField].type;

  vlField = vlField.replace('.', '\\.');

  const vlXClass: vl.XClass = {
    field: vlField,
    type: vlType
  };

  return vlXClass;
}

function EncodingY(gsY: gs.Encoding | undefined, gsMetadata: gs.Metadata): vl.YClass | undefined {
  if (!gsY) return undefined;

  let vlField: string = gsY.field;

  const vlType: vl.StandardType = gsMetadata[vlField].type;

  vlField = vlField.replace('.', '\\.');

  const vlYClass: vl.YClass = {
    field: vlField,
    type: vlType
  };

  return vlYClass;
}

function EncodingNumber(
  property: 'size' | 'stroke' | 'alpha',
  gsEncodingNumber: gs.Encoding | undefined,
  gsAesParams: gs.AesParams,
  gsMetadata: gs.Metadata,
  vlMark: vl.Mark
): vl.ValueDefWithConditionMarkPropFieldDefNumber | undefined {
  let vlEncodingNumber: vl.ValueDefWithConditionMarkPropFieldDefNumber | undefined;

  if (gsAesParams[property]) {
    vlEncodingNumber = {
      value: Mark.TranslateAesParamsNumber(gsAesParams, property, vlMark)
    };
  }

  if (!gsEncodingNumber) return vlEncodingNumber;

  let vlField: string = gsEncodingNumber.field;

  const VlType: vl.StandardType = gsMetadata[vlField].type;

  vlField = vlField.replace('.', '\\.');

  vlEncodingNumber = {
    field: vlField,
    type: VlType
  };

  return vlEncodingNumber;
}

function EncodingShapeString(
  property: 'shape',
  gsEncodingString: gs.Encoding | undefined,
  gsAesParams: gs.AesParams,
  gsMetadata: gs.Metadata
): vl.ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull | undefined {
  let vlEncodingString: vl.ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull | undefined;

  if (gsAesParams[property]) {
    vlEncodingString = {
      value: Mark.TranslateAesParamsShape(gsAesParams, property)
    };
  }

  if (!gsEncodingString) return vlEncodingString;

  let vlField: string = gsEncodingString.field;

  const VlType: vl.TypeForShape = (gsMetadata[vlField].type as unknown) as vl.TypeForShape;

  vlField = vlField.replace('.', '\\.');

  vlEncodingString = {
    field: vlField,
    type: VlType
  };

  return vlEncodingString;
}

function EncodingString(
  property: 'colour' | 'fill',
  gsEncodingString: gs.Encoding | undefined,
  gsAesParams: gs.AesParams,
  gsMetadata: gs.Metadata
): vl.ValueDefWithConditionMarkPropFieldDefStringNull | undefined {
  let vlEncodingString: vl.ValueDefWithConditionMarkPropFieldDefStringNull | undefined;

  if (gsAesParams[property]) {
    vlEncodingString = {
      value: Mark.TranslateAesParamsString(gsAesParams, property)
    };
  }

  if (!gsEncodingString) return vlEncodingString;

  let vlField: string = gsEncodingString.field;

  const VlType: vl.StandardType = gsMetadata[vlField].type;

  vlField = vlField.replace('.', '\\.');

  vlEncodingString = {
    field: vlField,
    type: VlType
  };

  return vlEncodingString;
}
