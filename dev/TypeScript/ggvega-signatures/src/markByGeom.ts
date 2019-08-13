/**
 * Create a mark
 * 
 * @remark
 * 
 * This function creates a Vega-Lite `mark` according to a ggspec `geom`.
 * 
 * For most classes of `geom`, we need only the name of the class. For other
 * classes, like `GeomBoxplot`, we need additional information from `geom_params`
 * and `stat_params`.
 * 
 * For developers of this package, when a new `geom` is added, you will have to
 * add the corresponding `mark` name to {@link markByGeomDefault}. If the `mark`
 * requires additional information, then you can build a new function, like 
 * {@link markByGeomBoxplot}, to handle the creation of the `mark` object.\
 * 
 * @param gsGeom - `gs.Geom`
 * @param gsGeomParams - `gs.GeomParams`
 * @param gsStatParams - `gs.StatParams`
 * 
 * **Called by**
 * 
 * @see itmLayer
 * 
 * **Calls**
 * 
 * @see {@link markByGeomDefault} for most geoms
 * @see {@link markByGeomBoxplot} for boxplots
 * 
 */
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

/**
 * Create a mark object given a geom class
 * 
 * @remark
 * This is the default constructor for a mark object. 
 * 
 * For developers, whenever you add a new `geom` is addded, 
 * you will have to add it to the `markByGeomMap` object.
 * 
 * @param gsGeom 
 * 
 * @return `vl.Mark`
 * 
 */
function markByGeomDefault(gsGeom: gs.Geom): vl.Mark {

  // keys: names of ggplot2 Geom classes
  // values: names of Vega-Lite marks
  const markByGeomMap = {
    GeomPoint: 'point',
    GeomBoxplot: 'boxplot'
  };

  // validate
  if (!contains(Object.keys(markByGeomMap), gsGeom.class)) {
    throw new Error('ggplot object contains unsupported geom: ' + geom);  
  }

  // validate and translate
  let mark: vl.Mark = {
    type: markByGeomMap[gsGeom.class]
  }

  return mark;
}

/**
 * Create a boxplot `mark`
 * 
 * @param gsGeom 
 * @param gsGeomParams 
 * @param gsStatParams 
 * 
 * @return `vl.Mark`
 * 
 */
function markByGeomBoxplot(
  gsGeom: gs.Geom, 
  gsGeomParams: gs.GeomParams,
  gsStatParams: gs.StatParams
): vl.Mark { 

  // I know we have not done boxplots yet, this is just to propose an
  // extension mechanism.

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
