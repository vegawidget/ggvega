/**
 * Create intermediate layer
 * 
 * @remark
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
 * 
 * @see layerArray
 * 
 * **Calls**
 * 
 * @see markByGeom
 * @see itmEncodingObjectByMappingObject
 * @see itmEncodingObjectByAesParamsObject
 * @see itmEncodingObjectByStat
 * @see itmEncodingOjectByPosition
 * 
 * @param gsLayer - `gs.Layer`, ggspec layer
 * @param gsData - `gs.Data`, ggspec data - used here for its `metadata`
 * 
 * @return `ItmLayer`, intermediate layer
 */
function itmLayer(gsLayer: gs.Layer, gsData: gsData): ItmLayer {

  // translate

  // get the metadata for the data for this layer
  var gsMetadataObject: gs.Metadata = gsData[gsLayer.data].metadata;

  let itmLayer: ItmLayer = {
    data: {name: gsLayer.data},
    // leave `geom` as a breadcrumb so that we can use encodingNameByGeom()
    // - will not be not included in vl.Layer
    geom: gsLayer.geom, 
    mark: markByGeom(gsLayer.geom, gsLayer.geom_params, gsLayer.stat_params),
    encoding: itmEncodingObjectByMappingObject(gsLayer.mapping, gsMetadataObject)
  };

  // incorporate aes_params into encoding
  itmLayer.encoding = itmEncodingObjectByAesParamsObject(itmLayer.encoding, gsLayer.aes_params)

  // incorporate stat into encoding 
  itmLayer.encoding = itmEncodingObjectByStat(itmLayer.encoding, gsLayer.stat, gsLayer.stat_params);

  // incorporate position into encoding (not yet active)
  // itmLayer.encoding = itmEncodingOjectByPosition(itmLayer.encoding, gsLayer.position);

  return itmLayer;
}