import * as VL from './vlSpec';
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
  if (!contains(Object.keys(positionMap), ggPosition.class)) {
    throw new Error('ggplot object contains unsupported stat: ' + ggPosition.class);
  }

  // translate
  const functionTranslate = positionMap[ggPosition.class];

  return functionTranslate(itmEncodingObject, ggPosition);
}

/**
 * Modify an encoding object according an identity position
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

/**
 * Modify an encoding object according an stack position
 *
 * @remarks
 * This function adds `stack: 'zero' to a `y` encoding.
 *
 * **Called by**
 * @see itmEncodingObjectByPosition
 *
 * @param itmEncodingObject
 * @param ggPosition
 *
 * @return itmEncodingObject
 */
function itmEncodingObjectByPositionStack(
  itmEncodingObject: ItmEncodingObject,
  ggPosition: GG.Position
): ItmEncodingObject {

  var y: VL.YClass = itmEncodingObject.y as VL.YClass;

  y.stack = 'zero' as VL.StackOffset;

  itmEncodingObject.y = y;

  return itmEncodingObject;
}

/**
 * Modify an encoding object according a fill position
 *
 * @remarks
 * This function adds `stack: 'normalize' to a `y` encoding.
 *
 * **Called by**
 * @see itmEncodingObjectByPosition
 *
 * @param itmEncodingObject
 * @param ggPosition
 *
 * @return itmEncodingObject
 */
function itmEncodingObjectByPositionFill(
  itmEncodingObject: ItmEncodingObject,
  ggPosition: GG.Position
): ItmEncodingObject {

  var y: VL.YClass = itmEncodingObject.y as VL.YClass;

  y.stack = 'normalize' as VL.StackOffset;

  itmEncodingObject.y = y;

  return itmEncodingObject;
}
