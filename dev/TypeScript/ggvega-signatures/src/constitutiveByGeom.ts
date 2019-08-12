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

function geomNameByMarkName(mark: string): string {

  // invert markByGeomMap: https://stackoverflow.com/a/23013726
  var geomByMarkMap = {};
  for (var key in markByGeomMap) {
    if (markByGeomMap.hasOwnProperty(key)) {
      geomByMarkMap[markByGeomMap[key]] = key;
    }
  }

  // validate
  if (!contains(Object.keys(geomByMarkMap), mark)) {
    throw new Error('refernce to unsupported mark: ' + mark);  
  }

  // translate
  return geomByMarkMap[mark];
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