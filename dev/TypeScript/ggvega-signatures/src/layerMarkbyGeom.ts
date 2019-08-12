function layerMarByGeom(
  gsGeom: gs.Geom, 
  gsGeomParams: gs.GeomParams,
  gsStatParams: gs.StatParams
): vl.Mark {
  
  // use this pattern for dispatch if we have only a few exceptions to the default
  // NOTE: we don't have Boxplot defined yet
  if (gsGeom.class == 'GeomBoxplot') {
    return layerMarkByGeomBoxplot(gsGeom, gsGeomParams, gsStatParams);
  } 
    
  return layerMarkByGeomDefault(gsGeom);
}

function layerMarkByGeomDefault(gsGeom: gs.Geom): vl.Mark {

  // validate and translate
  let mark: vl.Mark = {
    type: markNameByGeomName(gsGeom.class)
  }

  return mark;
}

// I know we have not done boxplots yet, this is just to propose an
// extension mechanism.
function layerMarkByGeomBoxplot(
  gsGeom: gs.Geom, 
  gsGeomParams: gs.GeomParams,
  gsStatParams: gs.StatParams
): vl.Mark { 

  // validate (look for GeomParams and StatParams we can't translate)

  // translate
  let mark: vl.Mark = layerMarkByGeomDefault(gsGeom);

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
