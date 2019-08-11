// keys: names of ggplot2 Geom classes
// values: names of Vega-Lite marks
const GeomMarkMap = {
  GeomPoint: 'point',
  GeomBoxplot: 'boxplot'
};

function encodingNameByGeom(aesName: string, gsGeom: gs.Geom): string {

  // default key
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
  if (!contains(Object.keys(encodingMap), gsGeom.class)) {
    throw new Error('ggplot object contains unsupported aesthetic: ' + aesName);  
  }
  
  // translate

  // exceptions
  if (gsGeom.class == "GeomLine") {
    encodingMap.size = "strokeWidth";
  }

  if (gsGeom.class == "GeomBar") {
    encodingMap.size = "strokeWidth";
  } 

  return encodingMap[aesName];
}