
// TODO - design to dispatch on facet
function topLevelSpecByFacet(ggspec: gs.TopLevelSpec): vl.TopLevelSpec {

  // is there a way to get this from the Vega-Lite code?
  const schema = 'https://vega.github.io/schema/vega-lite/v3.json'

  let topLevelSpec: vl.TopLevelSpec = {};


  if (facet) {
    topLevelSpec = {
      $schema: schema,
      datasets: datasets(ggspec.data),
      spec: {
        layer: layerArray(ggspec.data, ggspec.layers, ggspec.scales, ggspec.labels);
        // coordinates (not yet active)
        // layer: layerArray(ggspec.data, ggspec.layers, ggspec.scales, ggspec.labels, ggspec.coordinates)
      },
      facet: facet(ggspec.facet)
    }
  } else {
    topLevelSpec = {
      $schema: schema,
      datasets: datasets(ggspec.data),
      layer: layerArray(gggspec.data, ggspec.layers, ggspec.scales, ggspec.labels);
      // coordinates (not yet active)
      // layer: layerArray(ggspec.data, ggspec.layers, ggspec.scales, ggspec.labels, ggspec.coordinates)
    };
  }

  return topLevelSpec;

}
