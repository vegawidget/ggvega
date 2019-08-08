import * as Mark from './mark';
import * as vl from './vlSpec';
import * as gs from '../../ggschema/src/index';
import {getEncodingKey, GsKey, VlKey} from './encodingkey';

export function TranslateEncoding(gsLayer: gs.Layer, gsMetadata: gs.Metadata, vlMark: vl.Mark): vl.Encoding {
  const encodingKey = getEncodingKey(gsLayer.geom);

  let vlEncoding: vl.Encoding = EncodingMapping(gsLayer.mapping, gsMetadata, encodingKey);

  vlEncoding = EncodingAesParams(vlEncoding, gsLayer.aes_params, vlMark);

  return vlEncoding;
}

//TODO: Map.get() will reture undefine

function EncodingMapping(gsMapping: gs.Mapping, gsMetadata: gs.Metadata, encodingKey: Map<VlKey, GsKey>): vl.Encoding {
  const vlEncoding: vl.LayerEncoding = {
    x: MappingX(gsMapping[(encodingKey.get(VlKey.X) as unknown) as GsKey], gsMetadata),
    y: MappingY(gsMapping[(encodingKey.get(VlKey.Y) as unknown) as GsKey], gsMetadata),
    size: MappingNumber(gsMapping[(encodingKey.get(VlKey.Size) as unknown) as GsKey], gsMetadata),
    shape: MappingShape(gsMapping[(encodingKey.get(VlKey.Shape) as unknown) as GsKey], gsMetadata),
    stroke: MappingString(gsMapping[(encodingKey.get(VlKey.Stroke) as unknown) as GsKey], gsMetadata),
    strokeWidth: MappingNumber(gsMapping[(encodingKey.get(VlKey.StrokeWidth) as unknown) as GsKey], gsMetadata),
    opacity: MappingNumber(gsMapping[(encodingKey.get(VlKey.Opacity) as unknown) as GsKey], gsMetadata),
    fill: MappingString(gsMapping[(encodingKey.get(VlKey.Fill) as unknown) as GsKey], gsMetadata)
  };

  return vlEncoding;
}

function MappingX(gsX: gs.Encoding | undefined, gsMetadata: gs.Metadata): vl.XClass | undefined {
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

function MappingY(gsY: gs.Encoding | undefined, gsMetadata: gs.Metadata): vl.YClass | undefined {
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

function MappingNumber(
  gsEncodingNumber: gs.Encoding | undefined,
  gsMetadata: gs.Metadata
): vl.ValueDefWithConditionMarkPropFieldDefNumber | undefined {
  if (!gsEncodingNumber) return undefined;

  let vlField: string = gsEncodingNumber.field;

  const VlType: vl.StandardType = gsMetadata[vlField].type;

  vlField = vlField.replace('.', '\\.');

  const vlEncodingNumber: vl.ValueDefWithConditionMarkPropFieldDefNumber = {
    field: vlField,
    type: VlType
  };

  return vlEncodingNumber;
}

function MappingShape(
  gsEncodingShape: gs.Encoding | undefined,
  gsMetadata: gs.Metadata
): vl.ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull | undefined {
  if (!gsEncodingShape) return undefined;

  let vlField: string = gsEncodingShape.field;

  const VlType: vl.TypeForShape = (gsMetadata[vlField].type as unknown) as vl.TypeForShape;

  vlField = vlField.replace('.', '\\.');

  const vlEncodingShape: vl.ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull = {
    field: vlField,
    type: VlType
  };

  return vlEncodingShape;
}

function MappingString(
  gsEncodingString: gs.Encoding | undefined,
  gsMetadata: gs.Metadata
): vl.ValueDefWithConditionMarkPropFieldDefStringNull | undefined {
  if (!gsEncodingString) return undefined;

  let vlField: string = gsEncodingString.field;

  const VlType: vl.StandardType = gsMetadata[vlField].type;

  vlField = vlField.replace('.', '\\.');

  const vlEncodingString: vl.ValueDefWithConditionMarkPropFieldDefStringNull = {
    field: vlField,
    type: VlType
  };

  return vlEncodingString;
}

function EncodingAesParams(vlEncoding: vl.Encoding, gsAesParams: gs.AesParams, vlMark: vl.Mark): vl.Encoding {
  if (gsAesParams.size) {
    vlEncoding.size = {value: Mark.AesParamsSize(gsAesParams.size, vlMark)};
  }
  if (gsAesParams.shape) {
    vlEncoding.shape = {value: Mark.AesParamsShape(gsAesParams.shape)};
  }
  if (gsAesParams.colour) {
    vlEncoding.stroke = {value: gsAesParams.colour};
  }
  if (gsAesParams.stroke) {
    vlEncoding.strokeWidth = {value: gsAesParams.stroke};
  }
  if (gsAesParams.alpha) {
    vlEncoding.opacity = {value: gsAesParams.alpha};
  }
  if (gsAesParams.fill) {
    vlEncoding.fill = {value: gsAesParams.fill};
  }

  return vlEncoding;
}
