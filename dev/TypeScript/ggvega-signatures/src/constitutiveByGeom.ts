// keys: names of ggplot2 Geom classes
// values: names of Vega-Lite marks
const markByGeomMap = {
  GeomPoint: 'point',
  GeomBoxplot: 'boxplot'
};

function markNameByGeomName(geom: string): string {
 
  // validate
  if (!contains(Object.keys(markByGeomMap), geom)) {
    throw new Error('ggplot object contains unsupported geom: ' + geom);  
  }

  // translate
  return markByGeomMap[geom];
}


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