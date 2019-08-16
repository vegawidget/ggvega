import * as GG from '../../ggschema/src/index';
import {contains} from './utils';
import {ItmEncodingObject} from './itmEncodingObject';

/**
 * Modify an encoding object according to a ggspec stat
 *
 * @remarks
 * Note about side-effects.
 *
 * This function is used to determine the specific function
 * according to the class of the ggspec stat. The actual work
 * is done in these specific functions.
 *
 * Right now, we support only one ggspec stat: `StatIdentity`.
 *
 * **Called by**
 * @see itmLayer
 *
 * **Calls**
 * @see itmEncodingObjectByStatIdentity
 *
 *
 * @param itmEncodingObject
 * @param ggStat
 * @param ggStatParams
 *
 * @returns itmEncodingObject
 */
export function itmEncodingObjectByStat(
  itmEncodingObject: ItmEncodingObject,
  ggStatSet: GG.StatSet
): ItmEncodingObject {
  //TODO@wenyu: StatIdentity
  const statMap = {
    StatIdentity: itmEncodingObjectByStatIdentity
  };

  // validate
  if (!contains(Object.keys(statMap), ggStatSet.stat.class)) {
    throw new Error('ggplot object contains unsupported stat: ' + ggStatSet.stat.class);
  }

  // translate
  const functionTranslate = statMap[ggStatSet.stat.class];

  return functionTranslate(itmEncodingObject, ggStatSet);
}

/**
 * Modify an encoding object according an identity stat
 *
 * @remarks
 * This function does nothing.
 *
 * **Called by**
 * @see itmEncodingObjectByStat
 *
 * @param itmEncodingObject
 * @param ggStat
 * @param ggStatParams
 *
 * @return itmEncodingObject
 */
function itmEncodingObjectByStatIdentity(
  itmEncodingObject: ItmEncodingObject,
  ggStatSet: GG.StatSet
): ItmEncodingObject {
  // do nothing
  return itmEncodingObject;
}
