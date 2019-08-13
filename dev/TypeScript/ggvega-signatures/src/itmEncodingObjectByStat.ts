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
 * @param ggStat 
 * @param ggStatParams 
 * 
 * @return itmEncodingObject
 */
function itmEncodingObjectByStat(
  itmEncodingObject: ItmEncodingObject, 
  ggStat: GG.Stat, 
  ggStatParams: GG.StatParams
): ItmEncodingObject {

  let statMap = {
    StatIndentity: itmEncodingObjectByStatIdentity
  }

  // validate
  if (!contains(Object.keys(statMap), ggStat.class)) {
    throw new Error('ggplot object contains unsupported stat: ' + ggStat.class);  
  }

  // translate
  const functionTranslate = statMap[ggStat.class];
  
  return functionTranslate(itmEncodingObject, ggStat, ggStatParams);
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
 * @param ggStat 
 * @param ggStatParams 
 * 
 * @return itmEncodingObject
 */
function itmEncodingObjectByStatIdentity(
  itmEncodingObject: ItmEncodingObject, 
  ggStat: GG.Stat, 
  ggStatParams: GG.StatParams  
): ItmEncodingObject {

  // do nothing
  return itmEncodingObject;
}