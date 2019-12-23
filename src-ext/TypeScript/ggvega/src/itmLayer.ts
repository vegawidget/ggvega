import * as VLMark from 'vega-lite/build/src/mark';
import * as VLCompositeMark from 'vega-lite/build/src/compositemark';
import * as GG from '../../ggschema/src/index';
import {markByGeom} from './markByGeom';
import {
  itmEncodingObjectByMappingObject,
  itmEncodingObjectByAesParamsObject,
  ItmEncodingObject
} from './itmEncodingObject';
import {itmEncodingObjectByStat} from './itmEncodingObjectByStat';
import {itmEncodingObjectByPosition} from './itmEncodingObjectByPosition';

/**
 * Create intermediate layer
 *
 * @remarks
 * This function is used to create an intermediate `layer`, using the
 * information contained ggspec `layer`. Other functions will add to the
 * intermediate `layer` using the `scales`, `labels`, etc.
 *
 * Within a `layer`, an `encoding` needs to know the type, e.g.
 * `"quantitative"`, of the variables (`field`s) it uses; this information
 * is kept in the ggspec `data`.
 *
 * An intermediate `layer` has two difference from a Vega-Lite `layer`:
 *
 * - It keeps the ggspec `geom` as an element, using it as a breadcrumb.
 * - Its `encoding` keys use ggplot2 aesthetic names as its namespace,
 *   rather than using Vega-Lite `encoding` names.
 *
 * This function compiles four elements of the `layer`:
 *
 * - `data`: name of the dataframe used for the layer
 * - `geom`: breadcrumb, contains the class of the ggplot2 `geom`
 * - `mark`: determined mainly using the `geom`
 * - `encoding` this is an intermediate encoding, where
 *     the keys use the ggplot2-aesthetic namespace,
 *     rather than the Vega-Lite encoding namespace:
 *     - initial version is built using ggplot2 `mapping`,
 *       as well as the `metadata`
 *     - then modified by `aes_params`
 *     - then modified by `stat` and `stat_params`
 *     - then modified by `position`
 *
 * **Called by**
 * @see layerArray
 *
 * **Calls**
 * @see markByGeom
 * @see itmEncodingObjectByMappingObject
 * @see itmEncodingObjectByAesParamsObject
 * @see itmEncodingObjectByStat
 * @see itmEncodingOjectByPosition
 *
 * @param ggLayer - `GG.Layer`, ggspec layer
 * @param ggDatasetObject - `GG.DatasetObject`, ggspec data - used here for its `metadata`
 *
 * @returns `ItmLayer`, intermediate layer
 */
export function itmLayer(ggLayer: GG.Layer, ggDatasetObject: GG.DatasetObject): ItmLayer {
  // translate

  // get the metadata for the data for this layer
  const ggMetadataObject: GG.MetadataObject = ggDatasetObject[ggLayer.data].metadata;

  const itmLayer: ItmLayer = {
    data: {name: ggLayer.data},
    //NOTE @wenyu: Use GeomSet as breadcrumb?
    // leave `geom` as a breadcrumb so that we can use encodingNameByGeom()
    // - will not be not included in vl.Layer
    geomSet: ggGeomSet(ggLayer),
    mark: markByGeom(ggGeomSet(ggLayer), ggStatSet(ggLayer)),
    encoding: itmEncodingObjectByMappingObject(ggLayer.mapping, ggMetadataObject)
  };

  // incorporate aes_params into encoding
  itmLayer.encoding = itmEncodingObjectByAesParamsObject(itmLayer.encoding, ggLayer.aes_params);

  // incorporate stat into encoding
  itmLayer.encoding = itmEncodingObjectByStat(itmLayer.encoding, ggStatSet(ggLayer));

  // incorporate position into encoding
  itmLayer.encoding = itmEncodingObjectByPosition(itmLayer.encoding, ggLayer.position);

  return itmLayer;
}

//NOTE @wenyu: define a ItmLayer class
export interface ItmLayer {
  data: {name: string};
  // leave `geom` as a breadcrumb so that we can use encodingNameByGeom()
  // - will not be not included in vl.Layer
  geomSet: GG.GeomSet;
  mark: VLMark.GenericMarkDef<VLMark.Mark | VLCompositeMark.CompositeMark>;
  encoding: ItmEncodingObject;
}

// NOTE @wenyu: Remove these 2 functions from ggschema to here. For test these functions and make ggschema clearer
export function ggGeomSet(layer: GG.Layer): GG.GeomSet {
  return {geom: layer.geom, geom_params: layer.geom_params} as GG.GeomSet;
}

export function ggStatSet(layer: GG.Layer): GG.StatSet {
  return {stat: layer.stat, stat_params: layer.stat_params} as GG.StatSet;
}
