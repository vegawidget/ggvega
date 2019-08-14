/* eslint-disable no-shadow */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-var-requires */
var fs = require('fs');
fs.readFile('src/vlSpec.ts', 'utf8', function(err, data) {
  if (err) {
    return console.log(err);
  }
  var result = data.replace(/\bBoxPlot\b/g, 'Mark');

  result = result.replace(/\bBoxPlotDefClass\b/g, 'MarkDefClass');

  fs.writeFile('src/vlSpec.ts', result, 'utf8', function(err) {
    if (err) return console.log(err);
  });
});
