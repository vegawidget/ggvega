import * as VL from './vlSpec';
import * as GG from '../../ggschema/src/index';
import {contains} from './utils';

//TODO@wenyu: The use of GeomSet and StatSet

/**
 * Create a `mark` using a `geom`
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
 * {@link markByGeomBoxplot}, to handle the creation of the `mark` object.
 *
 * @param ggGeom - `GG.Geom`, contains class of the ggplot2 `geom`;
 *   these map to the `mark` type
 * @param gsGeomParams - `GG.GeomParams`
 * @param ggStatParams - `GG.StatParams`
 *
 * @returns `VL.Mark`
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
export function markByGeom(ggGeomSet: GG.GeomSet, ggStatSet: GG.StatSet): VL.MarkDefClass {
  // use this pattern for dispatch if we have only a few exceptions to the default
  // NOTE: we don't have Boxplot defined yet
  if (ggGeomSet.geom.class == 'GeomBoxplot') {
    return markByGeomBoxplot(ggGeomSet, ggStatSet);
  }

  return markByGeomDefault(ggGeomSet);
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
function markByGeomDefault(ggGeomSet: GG.GeomSet): VL.MarkDefClass {
  // key: name of ggplot2 geom class
  // value: name of Vega-Lite mark type
  const markByGeomMap = {
    GeomPoint: 'point',
    GeomBar: 'bar',
    GeomBoxplot: 'boxplot',
    GeomLine: 'line'
  };

  // validate
  if (!contains(Object.keys(markByGeomMap), ggGeomSet.geom.class)) {
    throw new Error('ggplot object contains unsupported geom: ' + ggGeomSet.geom.class);
  }

  // translate
  const mark: VL.MarkDefClass = {
    type: markByGeomMap[ggGeomSet.geom.class] as VL.Mark
  };

  return mark;
}

/**
 * Create a boxplot `mark`
 *
 * @remark
 * The boxplot `mark` is a compound type, defined by more than
 * the class of the `geom`:
 *
 * - `extent` is equivalent to ggplot2 `coef`, normally a number,
 *   but we have to take into account infinite values which serialize
 *   and translate as strings.
 *
 * **Called by**
 * @see markByGeom
 *
 * **Calls**
 * @see markByGeomDefault
 *
 *
 * @param ggGeom - `GG.Geom`, contains class of the ggplot2 `geom`
 * @param ggGeomParams - `GG.GeomParams`
 * @param gsStatParams - `GG.StatParams`
 *
 * @returns `VL.Mark`
 *
 */
function markByGeomBoxplot(ggGeomSet: GG.GeomSet, ggStatSet: GG.StatSet): VL.MarkDefClass {
  // I know we have not done boxplots yet, this is just to propose an
  // extension mechanism.

  // validate (look for GeomParams and StatParams we can't translate)

  // translate
  const mark: VL.MarkDefClass = markByGeomDefault(ggGeomSet);

  // TODO: add geomParams

  //TODO@wenyu: use VL.ExtentExtent.MinMax

  function coef(coef: string | number | undefined): VL.ExtentExtent | number | undefined {
    if (typeof coef == 'string') {
      return VL.ExtentExtent.MinMax; // catch-all for "Inf"
    }

    return coef;
  }

  mark.extent = coef(ggStatSet.stat_params.coef);

  return mark;
}
