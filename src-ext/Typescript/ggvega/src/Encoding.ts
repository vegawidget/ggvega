import * as vlspec from './VlSpec';

export function TranslateEncoding(layer: any, ggSpec: any): vlspec.LayerEncoding {
  const layerEncoding: vlspec.LayerEncoding = {
    x: TranslateXClass(layer, ggSpec),
    y: TranslateYClass(layer, ggSpec),
    color: TranslateColor(layer, ggSpec),
    size: TranslateSize(layer, ggSpec),
    shape: TranslateShape(layer, ggSpec)
  };

  return layerEncoding;
}

function TranslateXClass(layer: any, ggSpec: any): vlspec.XClass {
  let field: string = layer['mapping']['x']['field'];

  const type: vlspec.StandardType = ggSpec['data'][layer['data']]['metadata'][field]['type'];

  let scale: vlspec.Scale | undefined;

  let title: string = ggSpec['labels']['x'];

  for (const ggScale of ggSpec['scales']) {
    if (ggScale['aesthetics'][0] == 'x') {
      scale = TranslateScale(ggScale['transform']);

      if (ggScale['name']) {
        title = ggScale['name'];
      }
    }
  }

  field = field.replace('.', '\\.');

  const xClass: vlspec.XClass = {
    field: field,
    type: type,
    title: title,
    scale: scale
  };

  return xClass;
}

function TranslateYClass(layer: any, ggSpec: any): vlspec.YClass {
  let field: string = layer['mapping']['y']['field'];

  const type: vlspec.StandardType = ggSpec['data'][layer['data']]['metadata'][field]['type'];

  let scale: vlspec.Scale | undefined;

  let title: string = ggSpec['labels']['y'];

  for (const ggScale of ggSpec['scales']) {
    if (ggScale['aesthetics'][0] == 'y') {
      scale = TranslateScale(ggScale['transform']);

      if (ggScale['name']) {
        title = ggScale['name'];
      }
    }
  }

  field = field.replace('.', '\\.');

  const yClass: vlspec.YClass = {
    field: field,
    type: type,
    title: title,
    scale: scale
  };

  return yClass;
}

function TranslateColor(layer: any, ggSpec: any): vlspec.ValueDefWithConditionMarkPropFieldDefStringNull | undefined {
  let color: vlspec.ValueDefWithConditionMarkPropFieldDefStringNull | undefined;

  if (layer['aes_params']['colour']) {
    color = layer['aes_params']['colour'];
  }

  if (layer['mapping']['colour']) {
    if (!layer['mapping']['colour']['field']) {
      return color;
    }

    let field: string = layer['mapping']['colour']['field'];

    const type: vlspec.StandardType = ggSpec['data'][layer['data']]['metadata'][field]['type'];

    field = field.replace('.', '\\.');

    color = {
      field: field,
      type: type,
      title: ggSpec['labels']['colour']
    };
  }

  return color;
}

/**
 * TODO:// default type is ordinal bin
 * translate encoding.size
 * @param layer in ggSpec['layers']
 * @param ggSpec is the ggSpec
 */
function TranslateSize(layer: any, ggSpec: any): vlspec.ValueDefWithConditionMarkPropFieldDefNumber | undefined {
  let size: vlspec.ValueDefWithConditionMarkPropFieldDefNumber | undefined;

  if (layer['aes_params']['size']) {
    size = layer['aes_params']['size'];
  }

  if (layer['mapping']['size']) {
    if (!layer['mapping']['size']['field']) {
      return size;
    }

    let field: string = layer['mapping']['size']['field'];

    const type: vlspec.StandardType = ggSpec['data'][layer['data']]['metadata'][field]['type'];

    field = field.replace('.', '\\.');

    size = {
      field: field,
      type: type,
      title: ggSpec['labels']['size'],
      bin: true
    };
  }

  return size;
}

function TranslateShape(
  layer: any,
  ggSpec: any
): vlspec.ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull | undefined {
  let shape: vlspec.ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull | undefined;

  if (layer['mapping']['shape']) {
    if (!layer['mapping']['shape']['field']) {
      return shape;
    }

    let field: string = layer['mapping']['shape']['field'];

    const type: vlspec.TypeForShape = ggSpec['data'][layer['data']]['metadata'][field]['type'];

    field = field.replace('.', '\\.');

    shape = {
      field: field,
      type: type,
      title: ggSpec['labels']['shape']
    };
  }

  return shape;
}

function TranslateScale(transform: any): vlspec.Scale {
  return transform;
}
