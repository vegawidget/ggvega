function markByGeom(
  gsGeom: gs.Geom, 
  gsGeomParams: gs.GeomParams,
  gsStatParams: gs.StatParams
): vl.Mark {
  
  // use this pattern for dispatch if we have only a few exceptions to the default
  // NOTE: we don't have Boxplot defined yet
  if (gsGeom.class == 'GeomBoxplot') {
    return markByGeomBoxplot(gsGeom, gsGeomParams, gsStatParams);
  } 
    
  return markByGeomDefault(gsGeom);
}

function markByGeomDefault(gsGeom: gs.Geom): vl.Mark {

  // validate and translate
  let mark: vl.Mark = {
    type: markNameByGeomName(gsGeom.class)
  }

  return mark;
}

// I know we have not done boxplots yet, this is just to propose an
// extension mechanism.
function markByGeomBoxplot(
  gsGeom: gs.Geom, 
  gsGeomParams: gs.GeomParams,
  gsStatParams: gs.StatParams
): vl.Mark { 

  // validate (look for GeomParams and StatParams we can't translate)

  // translate
  let mark: vl.Mark = markByGeomDefault(gsGeom);

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
