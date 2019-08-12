function datasetsObject(gsData: {[key: string]: gs.Data}): {[key: string]: vl.InlineDataset} {
  
  // validate
  if (Object.keys(gsData).length == 0) {
    // error messages should refer to the ggplot object; end-user is not expected to know
    // about ggspec/ggschema
    throw new Error('ggplot object has no datasets, requires at least one dataset');
  }

  // translate
  let datasets = {};

  // iterating over object https://stackoverflow.com/a/684692
  for (let key in gsData) {
    if (gsData.hasOwnProperty(key)) {
      datasets[key] = gsData[key].observations;
    }
  }

  return datasets;
}