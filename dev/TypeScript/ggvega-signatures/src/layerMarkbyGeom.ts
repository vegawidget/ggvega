function layerMarkbyGeom(
  gsGeom: gs.Geom, 
  gsGeomParams: gs.GeomParams,
  gsStatParams: gs.StatParams
): vl.Mark {
  
  // use this pattern for dispatch if we have only a few exceptions to the default
  if (gsGeom.class == 'GeomBoxplot') {
    return layerMarkbyGeomBoxplot(gsGeom, gsGeomParams, gsStatParams);
  } 
    
  return layerMarkbyGeomDefault(gsGeom);
}

function layerMarkbyGeomDefault(gsGeom: gs.Geom): vl.Mark {

  // keys: names of ggplot2 Geom classes
  // values: names of Vega-Lite marks
  const GeomMarkMap = {
    GeomPoint: 'point',
    GeomBoxplot: 'boxplot'
  }

  // validate
  // see utils.ts
  if (!contains(Object.keys(GeomMarkMap), gsGeom.class)) {
    throw new Error('ggplot object contains unsupported geom: ' + gsGeom.class);  
  }

  // translate
  let mark: vl.Mark = {
    type: GeomMarkMap[gsGeom]
  }

  return mark;
}

// I know we have not done boxplots yet, this is just to propose an
// extension mechanism.
function layerMarkbyGeomBoxplot(
  gsGeom: gs.Geom, 
  gsGeomParams: gs.GeomParams,
  gsStatParams: gs.StatParams
): vl.Mark { {

  // validate

  // translate
  let mark: vl.Mark = layerMarkbyGeomDefault(gsGeom);

  // TODO: add geomParams 

  function coef(coef: string | number): string | number {
    
    if (typeof coef == "string") {
      return "max-min";  // catch-all for "Inf"
    }

    return coef;
  }

  mark.extent = coef(gsStatParams.coef); 

  return mark;
}
