function itmLayerEncodingObjectByStat(
  itmLayerEncodingObject: ItmLayerEncodingObject, 
  gsStat: gs.Stat, 
  gsStatParams: gs.StatParams
): ItmLayerEncodingObject {

  let statMap = {
    StatIndentity: itmLayerEncodingObjectByStatIdentity
  }

  // validate
  if (!contains(Object.keys(statMap), statMap)) {
    throw new Error('ggplot object contains unsupported stat: ' + statMap);  
  }

  // translate
  const functionTranslate = statMap[gsStat.class];
  
  return functionTranslate(itmLayerEncodingObject, gsStat, gsStatParams);
}


function itmLayerEncodingObjectByStatIdentity(
  itmLayerencodingObject: ItmLayerEncodingObject, 
  gsStat: gs.Stat, 
  gsStatParams: gs.StatParams  
): ItmLayerEncodingObject {

  // do nothing
  return itmLayerencodingObject;
}