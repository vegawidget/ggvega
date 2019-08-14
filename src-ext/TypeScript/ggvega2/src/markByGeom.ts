import * as VL from './vlSpec';
import * as GG from '../../ggschema/src/index';
import {contains} from './util';

export function markByGeom(ggGeom: GG.Geom, ggStat: GG.Stat): VL.MarkDefClass {
  if (ggGeom.geom.class == 'GeomBoxplot') {
    return markByGeomBoxplot(ggGeom, ggStat);
  }

  return markByGeomDefault(ggGeom);
}

/**
 * Create a mark object given a geom class
 *
 * @remark
 * This is the default constructor for a mark object.
 *
 * For developers, whenever you add a new `geom`, you will have to add to the
 * `markByGeomMap` object, which maps names of ggplot2 `geom` classes to
 * names of Vega-Lite `mark` types.
 *
 * **Called by**
 *
 * @see markByGeom
 * @see markByBoxplot
 *
 * @param ggGeom
 *
 * @returns `VL.Mark`
 *
 */
function markByGeomDefault(ggGeom: GG.Geom): VL.MarkDefClass {
  // key: name of ggplot2 geom class
  // value: name of Vega-Lite mark type
  const markByGeomMap = {
    GeomPoint: VL.Mark.Point,
    GeomBar: VL.Mark.Bar,
    GeomBoxplot: VL.Mark.Boxplot
  };

  // validate
  if (!contains(Object.keys(markByGeomMap), ggGeom.geom.class)) {
    throw new Error('ggplot object contains unsupported geom: ' + ggGeom.geom.class);
  }

  // translate
  let mark: VL.MarkDefClass = {
    type: markByGeomMap[ggGeom.geom.class]
  };

  return mark;
}

function markByGeomBoxplot(ggGeom: GG.Geom, ggStat: GG.Stat): VL.MarkDefClass {
  // I know we have not done boxplots yet, this is just to propose an
  // extension mechanism.

  // validate (look for GeomParams and StatParams we can't translate)

  // translate
  let mark: VL.MarkDefClass = markByGeomDefault(ggGeom);

  // TODO: add geomParams

  function coef(coef: string | number): VL.ExtentExtent | number {
    if (typeof coef == 'string') {
      return VL.ExtentExtent.MinMax; // catch-all for "Inf"
    }

    return coef;
  }

  if (ggStat.stat_params.coef) mark.extent = coef(ggStat.stat_params.coef);

  return mark;
}
