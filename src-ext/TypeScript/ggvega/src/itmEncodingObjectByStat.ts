/* eslint-disable @typescript-eslint/no-unused-vars */
import * as VLChanDef from 'vega-lite/src/channeldef';
import * as GG from '../../ggschema/src/index';
import {ItmEncodingObject} from './itmEncodingObject';
import {hasKey} from './utils';

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
 * **Called by**
 * @see itmLayer
 *
 * **Calls**
 * @see itmEncodingObjectByStatIdentity
 * @see itmEncodingObjectByStatCount
 * @see itmEncodingObjectByStatBoxplot
 *
 * @param itmEncodingObject
 * @param ggStatSet
 *
 * @returns itmEncodingObject
 */
export function itmEncodingObjectByStat(
  itmEncodingObject: ItmEncodingObject,
  ggStatSet: GG.StatSet
): ItmEncodingObject {
  const statMap = {
    StatIdentity: itmEncodingObjectByStatIdentity,
    StatCount: itmEncodingObjectByStatCount,
    StatBoxplot: itmEncodingObjectByStatBoxplot
  };

  // validate
  if (!Object.keys(statMap).includes(ggStatSet.stat.class)) {
    throw new Error(`ggplot object contains unsupported stat: ${ggStatSet.stat.class}`);
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
 * @param ggStatSet
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

function itmEncodingObjectByStatCount(itmEncodingObject: ItmEncodingObject, ggStatSet: GG.StatSet): ItmEncodingObject {
  // build y-encoding
  const y: VLChanDef.PositionFieldDef<VLChanDef.Field> = {
    type: 'quantitative'
  };

  // is weight an encoding?
  if (hasKey(itmEncodingObject, 'weight')) {
    // need to insist on which type this is
    const weight = itmEncodingObject.weight as VLChanDef.NumericFieldDefWithCondition<VLChanDef.Field>;

    y.aggregate = 'sum';
    y.field = weight.field;

    // remove weight from encoding-object
    delete itmEncodingObject.weight;
  } else {
    y.aggregate = 'count';
  }

  // put encoding into encoding object
  itmEncodingObject.y = y;

  return itmEncodingObject;
}

function itmEncodingObjectByStatBoxplot(
  itmEncodingObject: ItmEncodingObject,
  ggStatSet: GG.StatSet
): ItmEncodingObject {
  // do nothing
  return itmEncodingObject;
}
