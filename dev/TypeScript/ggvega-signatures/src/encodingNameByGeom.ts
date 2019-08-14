/**
 * Get encoding name from aesthetic name
 * 
 * @remarks
 * The mapping of a ggplot aesthetic name to an encoding name depends
 * on the Geom under consideration.
 * 
 * **Called by**
 * @see layerByItmLayer
 * 
 * @param aesName - `string` ggplot aesthetic-name
 * @param ggGeom - `GG.Geom` ggschema Geom object
 * 
 * @returns 
 */
function encodingNameByGeom(aesName: string, ggGeom: GG.Geom): string {

  // keys: names of ggplot2 aesthetics
  // values: names of Vega-Lite encodings
  var encodingMap = {
    x: 'x',
    y: 'y',
    colour: 'stroke',
    fill: 'fill',
    size: 'size',
    alpha: 'opacity',
    group: 'detail',
    shape: 'shape'
  }

  // validate
  if (!contains(Object.keys(encodingMap), ggGeom.class)) {
    throw new Error('ggplot object contains unsupported aesthetic: ' + aesName);  
  }
  
  // translate

  // exceptions
  if (ggGeom.class == "GeomLine") {
    encodingMap.size = "strokeWidth";
  }

  if (ggGeom.class == "GeomBar") {
    encodingMap.size = "strokeWidth";
  } 

  return encodingMap[aesName];
}
