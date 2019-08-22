

# TypeScript part of ggvega

The purpose of this document is to introduce the TypeScript part of ggvega. This document will summarize our work during the GSoC 2019. This document will also discuss some important topics, including  the extensibility of our framework, and the design choices and compromises we made.



## Google Summer of Code 2019 


***Student : [Wenyu Yang](https://github.com/wenyuyangpku)***

***Mentors : [Ian Lyttle](https://github.com/ijlyttle) , [Haley Jeppson](https://github.com/haleyjeppson)***

During the GSoC 2019, I am responsible for the [TypeScript part of ggvega](https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript).  The goal of this part is to translate a *ggschema* specification to a Vega-Lite specification. In general, it includes [ggschema](https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggschema) and [ggvega TypeScript](https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggvega). 


### ggschema

[ggschema](https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggschema) is the TypeScript definition of *ggschema* specification. 

Link : https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggschema

- Start to use TypeScript interface/type to define *ggschema* specification.

- Use [ts-json-schema-generator](https://github.com/vega/ts-json-schema-generator) to generate [`ggschema.json`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggschema/build/ggschema.json).  This is the json-schema of *ggschema* specification.

Here are some comments on [ggschema package.json](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggschema/package.json):
```

"scripts":  {

	// Generate ggschema.json and copy it into ./inst/json/ggschema.ts
	"build":  "npm  run  schema  &&  npm  run  copy",
	
	// Copy it into ./inst/json/ggschema.ts
	"copy":  "copyfiles  -f  build/ggschema.json  ../../../inst/json",

	// Generate ggschema.json
	"schema":  "ts-json-schema-generator  -c  -f  tsconfig.json  -t  TopLevelSpec  >  build/ggschema.json"

},

"devDependencies":  {

// Use TypeScript coding pattern
"@typescript-eslint/eslint-plugin":  "^1.13.0",

"@typescript-eslint/parser":  "^1.13.0",

// Copy files
"copyfiles":  "^2.1.1",

"eslint":  "^5.16.0",

"eslint-config-google":  "^0.13.0",

"eslint-config-prettier":  "^4.3.0",

"eslint-plugin-prettier":  "^3.1.0",

// Code formatter
"prettier":  "^1.17.1",

// Generate json schema from TypeScript class
"ts-json-schema-generator":  "^0.51.0",

"typescript":  "^3.5.3"

}
```



### ggvega TypeScript

[ggvega TypeScript](https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggvega) is the main part which contains all tranlation functions.

Link : https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggvega

- Start to translate *ggschema* specification to Vega-Lite specification.

- Use [quicktype](https://github.com/quicktype/quicktype) to generate [`vlSpec.ts`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggvega/src/vlSpec.ts) from [`vega-lite schema`](https://vega.github.io/schema/vega-lite/v3.json). `vlSpec.ts` constains all types of Vega-Lite specification.

- Use [rollup](https://github.com/rollup/rollup) to generate [`ggvega.js`](https://github.com/vegawidget/ggvega/blob/master/inst/js/ggvega.js). In the R part of this package, ggvega use `ggvega.js` to translate *ggschema* specification.

- Use [ts-jest](https://github.com/kulshekhar/ts-jest) to test the TypeScript code and examples.

- Use [typedoc](https://github.com/TypeStrong/typedoc) to generat documentation for this TypeScript project.

- Use [`ggschema.json`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggschema/build/ggschema.json) to validate the *ggschema* specification. `ggschema.json` is the json-schema of *ggschema* specification.


Here are some comments on [ggvega package.json](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggvega/package.json):

```

// The version of Vega-Lite schema. You can update Vega-Lite schema version by change this URL
"vlschema":  "https://vega.github.io/schema/vega-lite/v3.json",

"scripts":  {

//Generate ggvega.js and copy it into ./inst/js/ggveg.js
"build":  "npm  run  build:only  &&  npm  run  copy",

//Generate ggvega.js
"build:only":  "tsc  &&  rollup  -c",

//Copy it into ./inst/js/ggveg.js
"copy":  "copyfiles  -f  build/ggvega.js  ../../../inst/js",

//Run code testing
"test":  "jest  test/",

//Generate documentation of TypeScript code
"doc":  "typedoc  --out  docs  ./src  --mode  modules",

//Generate vlSpec.ts from Vega-Lite schema(Unix/Mac)
"schema2ts":  "quicktype  -s  schema  $npm_package_vlschema  -o  src/vlSpec.ts  --top-level  TopLevelSpec  --just-types  --explicit-unions  &&  node  fixbug.js",

//Generate vlSpec.ts from Vega-Lite schema(Windows)
"winschema2ts":  "quicktype  -s  schema  %npm_package_vlschema%  -o  src/vlSpec.ts  --top-level  TopLevelSpec  --just-types  --explicit-unions  &&  node  fixbug.js"

},

"devDependencies":  {

//Test TypeScript Code
"@types/jest": "^24.0.15",

// Use TypeScript coding pattern
"@typescript-eslint/eslint-plugin": "^1.12.0",

"@typescript-eslint/parser":  "^1.12.0",

//Use ggschema.ts validate ggSpec
"ajv": "^6.10.2",

//Copy files
"copyfiles": "^2.1.0",

"eslint": "^6.0.1",

"eslint-config-google":  "^0.13.0",

"eslint-config-prettier": "^6.0.0",

"eslint-plugin-prettier": "^3.1.0",

"jest": "^24.8.0",

"lodash": "^4.17.15",

//Code formatter
"prettier":  "^1.17.1",

//Generate TypeScript from json schema
"quicktype": "^15.0.199",

//Combine JavaScripts into one JavaScript
"rollup": "^1.14.3",

"rollup-plugin-commonjs":  "^10.0.0",

"rollup-plugin-json": "^4.0.0",

"rollup-plugin-node-resolve": "^5.0.1",

"ts-jest": "^24.0.2",

//Generate TypeScript documentation
"typedoc":  "^0.15.0",

"typescript":  "3.5.3"

}
```




## Discussion

### The extensibility of the framework

When Ian designed the framework of ggvega TypeScript, what he care about most is the extensibility of the framework. Here  I want to share my thought on how to add another Geom/Stat/Scale/etc more easily.

***Hi @Ian, I find I have no thought, can you write this part? ...***

My idea is about the steps to add another Geom/Stat/Scale/etc.

- Make the examples by hand to show what the ggSpec and vlSpec should look like.
- Build the new class of this ggSpec in ggschema.
- Write or complete functions in ggvega TypeScript to support these new features.

To add another Geom/Stat/Scale/etc, what you have to do is complete the `Geom/Stat/Scale/etc` Map object. Add a new function to solve new features. And these functions are only related to the new feature.



### The design choices and compromises we made

-  Why TypeScript?


	At the root is that we wanted to base our code on Vega-Lite schema, and we needed an environment where we can "do something" with the schema.

- Why use quicktype?


	Since the R V8 package is not fully ES6 compliant yet, we faced the some error on using Vega-Lite source code directly. To work around this problem, we have to generate the Vega-Lite type from the [vega-lite schema](https://vega.github.io/schema/vega-lite/v3.json). We have tried different ways to generate TypeScript from json-schema. The best result is provided by [quicktype](https://quicktype.io/typescript/). Here is a [link](https://app.quicktype.io/?share=1KFE6qo8KU8cupEl5gh6) about how they translate json-schema to TypeScript.

	You can read more details on [quicktype.md](https://github.com/vegawidget/ggvega/blob/quicktype/dev/TypeScript/quicktype/quicktype.md).

-   discuss the design choices and compromises we made
    -   example: why TypeScript? At the root is that we wanted to base our code on Vega-Lite schema, and we needed an environment where we can "do something" with the schema.
    -   example: is the ES5/quicktype issue. A summary will be good here, you can provide a link to your other report for more details.






## TODO

- Support more kinds of Geom/Stat/Scale/etc.
- Our goal was to make it easier to add features even though Wenyu would not be available as much in the future.
- If we can use Vega-Lite source code, we can try to use it.
