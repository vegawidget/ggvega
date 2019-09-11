import * as GG from '../../ggschema/src/index';
import {contains} from './utils';
import {ItmEncodingObject} from './itmEncodingObject';

/**
 * Modify an encoding object according to a ggspec position
 *
 * @remarks
 * Note about side-effects.
 *
 * This function is used to determine the specific function
 * according to the class of the ggspec position. The actual work
 * is done in these specific functions.
 *
 * **Called by**
 * @see itmLayer
 *
 * **Calls**
 * @see itmEncodingObjectByStatIdentity
 *
 *
 * @param itmEncodingObject
 * @param ggStatSet
 *
 * @returns itmEncodingObject
 */
export function itmEncodingObjectByPosition(
  itmEncodingObject: ItmEncodingObject,
  ggPosition: GG.Position
): ItmEncodingObject {
  const positionMap = {
    PositionIdentity: itmEncodingObjectByPositionIdentity,
    PositionStack: itmEncodingObjectByPositionStack,
    PositionFill: itmEncodingObjectByPositionFill
  };

  // validate
  if (!contains(Object.keys(positionMap), ggPosition.position.class)) {
    throw new Error('ggplot object contains unsupported stat: ' + ggPosition.position.class);
  }

  // translate
  const functionTranslate = positionMap[ggPosition.position.class];

  return functionTranslate(itmEncodingObject, ggPosition);
}

/**
 * Modify an encoding object according an identity stat
 *
 * @remarks
 * This function does nothing.
 *
 * **Called by**
 * @see itmEncodingObjectByPosition
 *
 * @param itmEncodingObject
 * @param ggPosition
 *
 * @return itmEncodingObject
 */
function itmEncodingObjectByPositionIdentity(
  itmEncodingObject: ItmEncodingObject,
  ggPosition: GG.Position
): ItmEncodingObject {
  // do nothing
  return itmEncodingObject;
}

function itmEncodingObjectByPositionStack(
  itmEncodingObject: ItmEncodingObject,
  ggPosition: GG.Position
): ItmEncodingObject {
  // do nothing
  return itmEncodingObject;
}


function itmEncodingObjectByPositionFill(
  itmEncodingObject: ItmEncodingObject,
  ggPosition: GG.Position
): ItmEncodingObject {
  // do nothing
  return itmEncodingObject;
}
