/**
 * Modify an encoding object according to a ggspec stat
 * 
 * @remark
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
 * @param itmEncodingObject 
 * @param gsStat 
 * @param gsStatParams 
 * 
 * @return itmEncodingObject
 */
function itmEncodingObjectByStat(
  itmEncodingObject: ItmEncodingObject, 
  gsStat: gs.Stat, 
  gsStatParams: gs.StatParams
): ItmEncodingObject {

  let statMap = {
    StatIndentity: itmEncodingObjectByStatIdentity
  }

  // validate
  if (!contains(Object.keys(statMap), gsStat.class)) {
    throw new Error('ggplot object contains unsupported stat: ' + gsStat.class);  
  }

  // translate
  const functionTranslate = statMap[gsStat.class];
  
  return functionTranslate(itmEncodingObject, gsStat, gsStatParams);
}

/**
 * Modify an encoding object according an identity stat
 * 
 * @remark
 * This function does nothing.
 * 
 * **Called by**
 * @see itmEncodingObjectByStat
 * 
 * @param itmEncodingObject 
 * @param gsStat 
 * @param gsStatParams 
 * 
 * @return itmEncodingObject
 */
function itmEncodingObjectByStatIdentity(
  itmEncodingObject: ItmEncodingObject, 
  gsStat: gs.Stat, 
  gsStatParams: gs.StatParams  
): ItmEncodingObject {

  // do nothing
  return itmEncodingObject;
}