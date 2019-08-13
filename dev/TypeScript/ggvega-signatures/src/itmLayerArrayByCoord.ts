function itmLayerArrayByCoord(
  itmLayerArray: ItmLayer[],
  ggCoord: GG.Coord[]
): ItmLayer[] {

  // keys: class names
  // values: function to call
  const CoordMap = {
    CoordCartesian: itmLayerArrayByCoordCartesian
  };

  // validate
  const className: string = ggCoord.class;
  if (!contains(Object.keys(CoordMap), className)) {
    throw new Error('ggplot object contains unsupported coordinates: ' + className);  
  }

  // translate
  return CoordMap[className](itmLayerArray, ggCoord);
}

function itmLayerArrayByCoordCartesian(
  itmLayerArray: ItmLayer[],
  gsCoord: gs.Coord[]
): ItmLayer[] {
  // do nothing
  return itmLayerArray;
}