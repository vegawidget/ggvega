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
 * @param ggDatasetsObject - `{[key: string]: GG.Data}`, key-value pairs of ggspec datasets
 * 
 * @return `{[key: string]: VL.InlineDataset}`, object containing Vega-Lite inline-datasets
 * 
 */ 
function datasetsObject(ggDatasetsObject: {[key: string]: GG.Data}): {[key: string]: VL.InlineDataset} {
  
  // validate
  if (Object.keys(ggDatasetsObject).length == 0) {
    // error messages should refer to the ggplot object; end-user is not expected to know
    // about ggspec/ggschema
    throw new Error('ggplot object has no datasets, requires at least one dataset');
  }

  // translate
  let datasetsObject = {};

  // iterate over object: https://stackoverflow.com/a/684692
  for (let key in ggDatasetsObject) {
    if (ggDatasetsObject.hasOwnProperty(key)) {
      datasetsObject[key] = ggDatasetsObject[key].observations;
    }
  }

  return datasetsObject;
}