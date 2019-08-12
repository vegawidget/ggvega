
// TODO - design to dispatch on facet
function topLevelSpec(ggspec: gs.TopLevelSpec): vl.TopLevelSpec {

  // is there a way to get this from the Vega-Lite code?
  // also - what mechanism do we use to update the schema?
  const schema = 'https://vega.github.io/schema/vega-lite/v3.json'

  let topLevelSpec: vl.TopLevelSpec = {};

  // faceted
  if (ggspec.facet.class != 'FacetNull') {

    throw new Error('ggplot object contains unsupported facet: ' + ggspec.facet.class); 

    topLevelSpec = {
      $schema: schema,
      datasets: datasets(ggspec.data),
      spec: {
        layer: layerArray(ggspec.data, ggspec.layers, ggspec.scales, ggspec.labels)
        // coordinates (not yet active)
        // layer: layerArray(ggspec.data, ggspec.layers, ggspec.scales, ggspec.labels, ggspec.coordinates)
      },
      facet: facet(ggspec.facet)
    }

    return topLevelSpec;
  }  

  // not faceted
  topLevelSpec = {
    $schema: schema,
    datasets: datasets(ggspec.data),
    layer: layerArray(ggspec.data, ggspec.layers, ggspec.scales, ggspec.labels)
    // coordinates (not yet active)
    // layer: layerArray(ggspec.data, ggspec.layers, ggspec.scales, ggspec.labels, ggspec.coordinates)
  };

  return topLevelSpec;
}
