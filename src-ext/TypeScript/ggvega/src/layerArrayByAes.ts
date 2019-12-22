import * as VLEncoding from 'vega-lite/src/encoding';
import * as VLChanDef from 'vega-lite/src/channeldef';
import * as VLLayerSpec from 'vega-lite/src/spec/layer';
import * as VLSpec from 'vega-lite/src/spec';
import * as GG from '../../ggschema/src/index';
import {itmLayer, ItmLayer} from './itmLayer';
import {itmLayerArrayByLabelsObject} from './itmLayerArrayByLabels';
import {itmLayerArrayByScalesArray} from './itmLayerArrayByScales';
import {itmLayerArrayByCoord} from './itmLayerArrayByCoord';
import {encodingNameByGeom, GGEncodingKey} from './encodingNameByGeom';
import {hasKey} from './utils';

/**
 * Create layer array
 *
 * @remark
 * A layer array is composed of individual layers. Here, the translation
 * process has two parts; the layer array is built in stages:
 *
 *  - Each Vega-Lite `layer` is built according to its corresponding
 *    ggspec `layer`.
 *
 *  - The Vega-Lite layer array is then modified according to:
 *
 *    - ggspec `labels`:
 *       - each label is associated with a group of aesthetics
 *       - each aesthetic-group is to be labelled no more than once
 *       - as such, we apply a label to its first match in a layer array:
 *         the first matching aesthetic in the first matching layer
 *
 *    - ggspec `scales`:
 *       - each scale is associated with a group of aesthetics
 *       - each aesthetic-group is to have a scale defined no more than once
 *       - as such, we apply a scale to its first match in a layer array:
 *         the first matching aesthetic in the first matching layer
 *
 *    - ggspec `coordinates`:
 *       - for the immediate future, Vega-Lite can support only Cartesian
 *         coordinates: <https://github.com/vega/vega-lite/issues/408>
 *       - ggplot2 offers "flipped" (Cartesian) coordinates,
 *         which we will support
 *
 *  There is one other process happening here - each `layer` is initially
 *  constructed not as a Vega-Lite `layer`, but as an "intermediate" `layer`.
 *
 *  When constructing a `layer` (array), we found to simpler to keep the
 *  `encoding` namespace, i.e. the names of the keys in the `encoding`
 *  object, based on ggplot2's aesthetic names, rather than Vega-Lite's encoding
 *  names. This makes it easier to incorporate `stat`s, `scales`, `labels`, etc.
 *
 *  This means, at the end of this process, to convert from an intermediate
 *  `layer` array Vega-Lite `layer` array, we have change the `encoding`
 *  namespace to conform to Vega-Lite.
 *
 * **Called by**
 *
 * @see topLevelSpec
 *
 * **Calls**
 *
 * @see itmLayer
 * @see itmLayerArrayByLabelObject
 * @see itmLayerArrayByScaleArray
 * @see itmLayerArrayByCoord
 * @see layerByItmLayer
 *
 * @param ggDatasetObject `GG.DatasetObject`, key-value pairs of ggspec datasets
 * @param ggLayerArray `GG.Layer[]` - array of ggspec layers
 * @param ggScaleArray `GG.Scale[]` - array of ggspec scales
 * @param ggLabelObject `GG.LabelObject` - key-value pairs of ggspec labels
 * @param ggCoordinates `GG.Coord` - ggspec coordinates
 *
 * @returns `vl.LayerSpec[]`, array containing Vega-Lite layer specs
 *
 */
export function layerArrayByAes(
  ggDatasetObject: GG.DatasetObject,
  ggLayerArray: GG.Layer[],
  ggScaleArray: GG.Scale[],
  ggLabelObject: GG.LabelObject,
  ggCoordinates: GG.Coord
): (VLLayerSpec.GenericLayerSpec<VLSpec.GenericUnitSpec<any, any>> | VLSpec.GenericUnitSpec<any, any>)[] {
  // validate
  if (ggLayerArray.length == 0) {
    throw new Error('ggplot object has no layers, requires at least one layer');
  }

  // translate

  // start intermediate layers according to ggLayerArray
  // could this work?
  let itmLayerArray: ItmLayer[] = ggLayerArray.map((ggLayer: GG.Layer) => {
    return itmLayer(ggLayer, ggDatasetObject);
  });

  // incorporate labels
  itmLayerArray = itmLayerArrayByLabelsObject(itmLayerArray, ggLabelObject);

  // incorporate scales
  itmLayerArray = itmLayerArrayByScalesArray(itmLayerArray, ggScaleArray);

  // incorporate coordinates
  itmLayerArray = itmLayerArrayByCoord(itmLayerArray, ggCoordinates);

  // change encoding-key namespace from ggplot2 to Vega-Lite
  const layerArray = itmLayerArray.map(layerByItmLayer);

  return layerArray;
}

/**
 * Change the `encoding` namespace
 *
 * @remark
 * To translate an intermediate `layer` to a Vega-Lite `layer`, this function
 * changes the `encoding` namespace from ggplo2 aesthetic-names to Vega-Lite
 * `encoding` keys.
 *
 * As well, a ggspec `geom` is an element of an intermediate `layer`; we use it
 * as a "breadcrumb", as the mapping of aesthetic names to encoding names depends
 * on the `geom`.
 *
 * **Called by**
 * @see layerArray
 *
 * **Calls**
 * @see encodingNameByGeom
 *
 *
 * @param itmLayer - `itmLayer`, intermediate layer-object
 *
 * @returns `VL.Layer`, Vega-Lite layer-object
 *
 */
export function layerByItmLayer(
  itmLayer: ItmLayer
): VLSpec.GenericLayerSpec<VLSpec.GenericUnitSpec<any, any>> | VLSpec.GenericUnitSpec<any, any> {
  // create new encoding
  const encoding: VLEncoding.Encoding<VLChanDef.Field> = {};

  // loop over aesthetic names in itmLayerEncoding
  for (const aesName in itmLayer.encoding) {
    if (hasKey(itmLayer.encoding, aesName)) {
      // get the encoding name,and add to the encoding

      const encodingName = encodingNameByGeom(aesName as GGEncodingKey, itmLayer.geomSet);

      if (encodingName == 'x') {
        encoding[encodingName] = itmLayer.encoding[aesName] as VLChanDef.PositionFieldDef<VLChanDef.Field>;
      }

      if (encodingName == 'y') {
        encoding[encodingName] = itmLayer.encoding[aesName] as VLChanDef.PositionFieldDef<VLChanDef.Field>;
      }

      if (encodingName == 'size' || encodingName == 'strokeWidth' || encodingName == 'opacity') {
        encoding[encodingName] = itmLayer.encoding[aesName] as
          | VLChanDef.NumericFieldDefWithCondition<VLChanDef.Field>
          | VLChanDef.NumericValueDefWithCondition<VLChanDef.Field>;
      }

      if (encodingName == 'stroke' || encodingName == 'fill') {
        encoding[encodingName] = itmLayer.encoding[aesName] as
          | VLChanDef.StringFieldDefWithCondition<VLChanDef.Field>
          | VLChanDef.StringValueDefWithCondition<VLChanDef.Field>;
      }

      if (encodingName == 'shape') {
        encoding[encodingName] = itmLayer.encoding[aesName] as
          | VLChanDef.ShapeFieldDefWithCondition<VLChanDef.Field>
          | VLChanDef.ShapeValueDefWithCondition<VLChanDef.Field>;
      }
    }
  }

  const layer: VLSpec.GenericLayerSpec<VLSpec.GenericUnitSpec<any, any>> | VLSpec.GenericUnitSpec<any, any> = {
    data: itmLayer.data,
    mark: itmLayer.mark,
    encoding: encoding
  };

  return layer;
}
