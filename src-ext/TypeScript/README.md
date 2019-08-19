# TypeScript part of ggvega

This is the TypeScript part of ggvega. The goal of ggvega is to translate a ggplot2 object to a Vega-Lite specification. The R part of ggvega is to translate a ggplot2 object to a *ggschema* specification. The TypeScript part of ggvega is to translate a *ggschema* specification to a Vega-Lite specification.


## Google Summer of Code 2019 


***Student : [Wenyu Yang](https://github.com/wenyuyangpku)***

***Mentors : [Ian Lyttle](https://github.com/ijlyttle) , [Haley Jeppson](https://github.com/haleyjeppson)***

During the GSoC 2019, I am responsible for the [TypeScript part of ggvega](https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript). In general, it includes [ggvega TypeScript](https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggvega) and [ggschema](https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggschema). 

### ggvega TypeScript

[ggvega TypeScript](https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggvega) is the main part which contains all tranlation functions.

Link : https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggvega

- Start to translate *ggschema* specification to Vega-Lite specification.

- Use [quicktype](https://github.com/quicktype/quicktype) to generate [`vlSpec.ts`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggvega/src/vlSpec.ts) from [`vega-lite schema`](https://vega.github.io/schema/vega-lite/v3.json). `vlSpec.ts` constains all types of Vega-Lite specification.

- Use [rollup](https://github.com/rollup/rollup) to generate [`ggvega.js`](https://github.com/vegawidget/ggvega/blob/master/inst/js/ggvega.js). In the R part of this package, ggvega use `ggvega.js` to translate *ggschema* specification.

- Use [ts-jest](https://github.com/kulshekhar/ts-jest) to test the TypeScript code and examples.

- Use [typedoc](https://github.com/TypeStrong/typedoc) to generat documentation for this TypeScript project.

- Use [`ggschema.json`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggschema/build/ggschema.json) to validate the *ggschema* specification. `ggschema.json` is the json-schema of *ggschema* specification.



### ggschema

[ggschema](https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggschema) is the TypeScript definition of *ggschema* specification. 

Link : https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggschema

- Start to use TypeScript interface/type to define *ggschema* specification.

- Use [ts-json-schema-generator](https://github.com/vega/ts-json-schema-generator) to generate [`ggschema.json`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggschema/build/ggschema.json).  This is the json-schema of *ggschema* specification.




## TODO

- Support more kinds of Geom type