
// this function does not depend on Geom
function fieldName(name: string): string {
  // use regular expression to replaces all matches
  return name.replace(/[.]/g, "\\.")
}

function encodingNameByGeom(aesName: string, gsGeom: gs.Geom): string {

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