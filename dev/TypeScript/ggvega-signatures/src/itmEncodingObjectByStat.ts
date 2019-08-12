function itmEncodingObjectByStat(
  itmEncodingObject: ItmEncodingObject, 
  gsStat: gs.Stat, 
  gsStatParams: gs.StatParams
): ItmEncodingObject {

  let statMap = {
    StatIndentity: itmEncodingObjectByStatIdentity
  }

  // validate
  if (!contains(Object.keys(statMap), statMap)) {
    throw new Error('ggplot object contains unsupported stat: ' + statMap);  
  }

  // translate
  const functionTranslate = statMap[gsStat.class];
  
  return functionTranslate(itmEncodingObject, gsStat, gsStatParams);
}


function itmEncodingObjectByStatIdentity(
  itmEncodingObject: ItmEncodingObject, 
  gsStat: gs.Stat, 
  gsStatParams: gs.StatParams  
): ItmEncodingObject {

  // do nothing
  return itmEncodingObject;
}