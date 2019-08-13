/**
 * Create datasets object
 * 
 * @remarks
 * For each key-value pair in `gsDatasetsObject`, a key-value pair is created 
 * in the return object. 
 * 
 * **Called by**
 * 
 * @see topLevelSpec
 * 
 * @param gsDatasetsObject - `{[key: string]: gs.Data}`, key-value pairs of ggspec datasets
 * 
 * @return `{[key: string]: vl.InlineDataset}`, object containing Vega-Lite inline-datasets
 * 
 */ 
function datasetsObject(gsDatasetsObject: {[key: string]: gs.Data}): {[key: string]: vl.InlineDataset} {
  
  // validate
  if (Object.keys(gsDatasetsObject).length == 0) {
    // error messages should refer to the ggplot object; end-user is not expected to know
    // about ggspec/ggschema
    throw new Error('ggplot object has no datasets, requires at least one dataset');
  }

  // translate
  let datasetsObject = {};

  // iterate over object: https://stackoverflow.com/a/684692
  for (let key in gsDatasetsObject) {
    if (gsDatasetsObject.hasOwnProperty(key)) {
      datasetsObject[key] = gsDatasetsObject[key].observations;
    }
  }

  return datasetsObject;
}