function itmLayerArrayByCoord(
  itmLayerArray: ItmLayer[],
  gsCoord: gs.Coord[]
): ItmLayer[] {

  // keys: class names
  // values: function to call
  const CoordMap = {
    CoordCartesian: itmLayerArrayByCoordCartesian
  }

  // validate
  const class: string = gsCoord.class;
  if (!contains(Object.keys(CoordMap), class)) {
    throw new Error('ggplot object contains unsupported coordinates: ' + class);  
  }

  // translate
  return CoordMap[class](itmLayerArray, gsCoord);
}

function itmLayerArrayByCoordCartesian(
  itmLayerArray: ItmLayer[],
  gsCoord: gs.Coord[]
): ItmLayer[] {
  // do nothing
  return itmLayerArray;
}