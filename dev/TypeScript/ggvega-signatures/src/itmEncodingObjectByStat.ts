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


function itmEncodingObjectByStatIdentity(
  itmEncodingObject: ItmEncodingObject, 
  gsStat: gs.Stat, 
  gsStatParams: gs.StatParams  
): ItmEncodingObject {

  // do nothing
  return itmEncodingObject;
}