


# TypeScript part of ggvega

The purpose of this document is to introduce the TypeScript part of ggvega. This document will summarize our work during the GSoC 2019. This document will also discuss some important topics, including the extensibility of our framework, and the design choices and compromises we made.



## Google Summer of Code 2019 


***Student : [Wenyu Yang](https://github.com/wenyuyangpku)***

***Mentors : [Ian Lyttle](https://github.com/ijlyttle) , [Haley Jeppson](https://github.com/haleyjeppson)***

During the GSoC 2019, I am responsible for the [TypeScript part of ggvega](https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript).  The goal of this part is to translate a *ggschema* specification to a Vega-Lite specification. In general, it includes [ggschema](https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggschema) and [ggvega TypeScript](https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggvega). 


### ggschema

[ggschema](https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggschema) is the TypeScript definition of *ggschema* specification. 

Link: https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggschema

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

// Copy files
"copyfiles":  "^2.1.1",

// Code formatter
"prettier":  "^1.17.1",

// Generate json schema from TypeScript class
"ts-json-schema-generator":  "^0.51.0",

}
```



### ggvega TypeScript

[ggvega TypeScript](https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggvega) is the main part which contains all tranlation functions.

Link: https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggvega

- Start to translate *ggschema* specification to Vega-Lite specification.

- Use [quicktype](https://github.com/quicktype/quicktype) to generate [`vlSpec.ts`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggvega/src/vlSpec.ts) from [`vega-lite schema`](https://vega.github.io/schema/vega-lite/v3.json). `vlSpec.ts` constains all types of Vega-Lite specification.

- Use [rollup](https://github.com/rollup/rollup) to generate [`ggvega.js`](https://github.com/vegawidget/ggvega/blob/master/inst/js/ggvega.js). In the R part of this package, ggvega use `ggvega.js` to translate *ggschema* specification.

- Use [ts-jest](https://github.com/kulshekhar/ts-jest) to test the TypeScript code and examples.

- Use [typedoc](https://github.com/TypeStrong/typedoc) to generat documentation for this TypeScript project.

- Use [`ggschema.json`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggschema/build/ggschema.json) to validate the *ggschema* specification. `ggschema.json` is the json-schema of *ggschema* specification.


Here are some comments on [ggvega package.json](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggvega/package.json):

```

// The version of Vega-Lite schema. You can update the Vega-Lite schema version by change this URL
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

// Use TypeScript coding pattern
"@typescript-eslint/eslint-plugin": "^1.12.0",

//Use ggschema.ts validate ggSpec
"ajv": "^6.10.2",

//Copy files
"copyfiles": "^2.1.0",

//Code formatter
"prettier":  "^1.17.1",

//Generate TypeScript from json schema
"quicktype": "^15.0.199",

//Combine JavaScripts into one JavaScript
"rollup": "^1.14.3",

//Test TypeScript Code
"ts-jest": "^24.0.2",

//Generate TypeScript documentation
"typedoc":  "^0.15.0",

}
```




## The extensibility of the framework


When Ian designed the framework of ggvega TypeScript, what he cares about most is the extensibility of the framework. We have designed two frameworks. The first one was put forward by me, and we find it is difficult to add a new Geoms/Stats/etc., which is why we went through the big effort to make a new framework for the ggvega part. Here  I want to share the difference between these two frameworks and an example about how to add another Geom/Stat/Scale/etc easily in our new framework.

### Vega-Lite Spec example
Here is an example of the Vega-Lite Spec.  And I will use it to introduce the first framework and the second one.

```
vlSpec={
    $schema:  'https://vega.github.io/schema/vega-lite/v3.json',
    datasets: {
        'data-00': [{
            'Sepal.Length':  5.1,
            'Sepal.Width':  3.5,
            'Petal.Length':  1.4,
            'Petal.Width':  0.2,
            Species:  'setosa'
        }]
    },
    layer: [{
        data: {name:  'data-00'},
        mark: {type:  'point'},
        encoding: {
            x: {
                field:  'Sepal\\.Width',
                type:  'quantitative',
                title:  'Sepal.Width',
                scale: {type:'log',base:10}
            },
            y: {
                field:  'Sepal\\.Length',
                type:  'quantitative',
                title:  'Sepal.Length'
            },
            stroke: {
                field:  'Species',
                type:  'nominal',
                title:  'Species'
            }
        }
    }]
};
```


### First framework

When I design the first framework, my idea is very simple: I tried to translate all properties of ggSpec to their corresponding part of Vega-Lite spec. The order to translate is based the order of Vega-Lite spec. We can find it's easy to translate the `$schema` and `datasets`. When we translate the `layer`, our work becomes difficult, especially when we translate the `encoding`.  Here I want to summarize some faults of the first framework.

- Too many repeats

Think about it. If we use a function `encodingX()` to translate `vlSpec.Layer.encoding.x`, what information we need? To get the `field`, we need `mapping` in ggSpec. To get `type`, we need `metadata` in ggSpec. To get `title`, we need `labels` in ggSpec. To get `scale`, we need `scale` in ggSpec.   And we have to repeat these steps when we translate other aesthetics, like y, size, color, shape, etc..  We have to repeat these complicated steps and we want to respect the principle of "Don't Repeat Yourself", or DRY. That's the first reason we want to drop this framework.

- Not friendly to Scales and Labels

When I design the first framework, I ignore an important thing that Scales and Labels in ggplot2 are very different from them in Vega-Lite spec.  In the philosophy of ggplot2, that all layers share scales and labels. But in Vega-Lite, every layer has its labels and scales. In the first framework, we translate each layer separately. Finally, we have to translate all Labels and Scales in every layer. That's meaningless and redundant

- Difficult to add another Geom/Stat/Scale/etc.

Another mistake I have made is that I didn't focus on the extensibility when I design the first framework. And we encountered trouble when we tried to support `GeomBar`.  For Vega-Lite, `point` and `bar` have different ways to implement. For example, `bar` use `aggregate` rather than `field` sometimes and we `stat` in ggSpec rather than `mapping`.  What's more, when the `Geom` type is `GeomBar` or `GeomLine`,  we find `size` in ggploit2 is not the `size` in Vega-Lite any more. Now it means `strokeWidth` in Vega-Lite. And I realized that we have to design different ways to translate different `Geom` type. That makes our function too big and difficult to extend.

### Second framework

Since the first framework has so much shortcoming, Ian helps me to design a new framework which is focused on the extensibility. Unlike the first framework. the new framework adds a new class `itmEncoding` which is the intermediate encoding. The **key** of `itmEncoding` is ggplot2 aesthetic and the type of the **value** is Vega-Lite type, which means we don't need to care the encoding map for different `Geom` type until we translate the `itmEncoding` to Vega-Lite `Encoding`.  And the logic of translation is based on ggplot2, which means we just translate a ggSpec step by step and it simplifies our function. Next, I can say it more clearly on how the second framework overcome the faults of the first framework.

- Reduce repeat

In the first framework, to translate the `encoding.x` we just find everything in the ggSpec. Get `field` from `mapping`, get `value` from `aes_params`, get `title` from `labels`, get `scale` from `scales` and more. That's so complicated and will change as the `Geom` type change. In the new framework, we follow the step of the implementation of ggplot2. When we translate encoding, we translate `mapping`, `aes_params` and `stat` one by one. When we translate layers, we translate `labels`, `scales` and `Coord` one by one. We don't need to look for everything and just put them in the right place. And we don't have the so 'big' functions or too many repeats.

- Friendly to Scales and Labels

As I have told in **Reduce repeat**, this time we translate `labels`, `scales` and `coord` when we translate layers. This way accords with the philosophy of ggplot2. We only specify a `scale` or a `label`  for the first appearance of the aesthetic in the layers list. We translate them one by one, we can simplify our work. For example, if the `scale` has a `name`, it will substitute the corresponding `name` in `label`. We do what ggplot2 have done. That's great.

- Easy to add another Geom/Stat/Scale/etc.

In the first two parts, I have introduced how this new framework translates ggSpec. Here I will explain why it's easier to add another Geom/Stat/Scale/etc. 

If we want to add `GeomBar` in the first framework, what we have to do? We almost have to change all functions. We also use `encoding` as an example. When we translate `field`, we have to consider the `Geom` Type, because it might be `aggregate` for `GeomBar`. When we translate `value` from `aes_params`, we have to consider the `Geom` type, because different `Geom` type means a different map of encoding key. `size` means `size` for `GeomPoint`, but it means `strokeWidth` for `GeomBar`. If we want to add a new `Scale` or `Label`, we will add it to all the layers of Vega-Lite spec.

But the new framework can avoid these problems. When we add `GeomBar`, we only need to care about 4 functions: `encodingNameByGeom()`, `itmEncodingObjectByMappingObject()`, `itmEncodingObjectByAesParamsObject()` and `itmEncodingObjectByStat()`.  Because we use the same functions to translate every aesthetic of the `encoding`. And when we add new `Scale`, `Label` or `Coord`, we use `itmLayerArrayByLabelsObject()` , `itmLayerArrayByScalesArray()`and `itmLayerArrayByCoord()`. We can just add new class in it's own function.

Since the new framework overcomes the fatal shortcoming of the last one, we believe it will work well for us for now. Here I also want to share some examples of adding another Geom/Stat/Scale/etc.

### Add `GeomLine` 

 1. Make the examples by hand to show what the ggSpec and vlSpec should look like. This can help us design ggschema and test ggvega.
 2. Build the new class of this ggSpec in ggschema.
 ```
//Add GeomSetLine to GeomSet
export  type  GeomSet  =  GeomSetPoint  |  GeomSetBar  |  GeomSetBoxplot  |  GeomSetLine;

//Build new class GeomSetLine
export  interface  GeomSetLine {
`geom: {class:  'GeomLine'};
`geom_params: {'na.rm':  boolean;};
}
``` 
 3. Write or complete functions in ggvega TypeScript to support these new features.
```
//Change encodingMap in function encodingNameByGeom()
if (ggGeomSet.geom.class  ==  'GeomLine') {
    encodingMap.size  =  'strokeWidth';
}
//Build new function to translate Aes value based on `Geom` type.
```
### Add `CoordFlip`
 1. Make the examples by hand to show what the ggSpec and vlSpec should look like. This can help us design ggschema and test ggvega.
 2. Build the new class of this ggSpec in ggschema.
```
//Add CoordFlip to Coord  
export  type  Coord  =  CoordCartesian  |  CoordFlip;

//Build new class CoordFlip 
export  interface  CoordFlip {
    class:  'CoordFlip';
}
```
  3. Write or complete functions in ggvega TypeScript to support these new features.
```
//Change CoordMap in function itmLayerArrayByCoord()
const  CoordMap  = {
    CoordCartesian:  itmLayerArrayByCoordCartesian,
    CoordFlip:  itmLayerArrayByCoordFlip
};
//Build new function itmLayerArrayByCoordFlip() to translate the Coord
```



## The design choices and compromises we made

### Why TypeScript?

At the root is that we wanted to base our code on Vega-Lite schema, and we needed an environment where we can "do something" with the schema. Compared to JavaScript, TypeScript is more strict on type checking. Here I list some reasons why we have to use TypeScript:

- Generate  [`vlSpec.ts`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggvega/src/vlSpec.ts) from [`vega-lite schema`](https://vega.github.io/schema/vega-lite/v3.json). We can only generate TypeScript class from JSON schema.
- Generate [`ggschema.json`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggschema/build/ggschema.json) to validate ggSpec. We can generate JSON-schema from TypeScript class.
- If one day we want to use Vega-Lite source code, we have to use TypeScript.


### Why use quicktype?

Since the R V8 package is not fully ES6 compliant yet, we faced the same error on using Vega-Lite source code directly. To work around this problem, we have to generate the Vega-Lite type from the [vega-lite schema](https://vega.github.io/schema/vega-lite/v3.json). We have tried different ways to generate TypeScript from JSON-schema. The best result is provided by [quicktype](https://quicktype.io/typescript/). Here is a [link](https://app.quicktype.io/?share=1KFE6qo8KU8cupEl5gh6) about how they translate JSON-schema to TypeScript.

You can read more details on [quicktype.md](https://github.com/vegawidget/ggvega/blob/quicktype/dev/TypeScript/quicktype/quicktype.md).



## TODO

 - [ ] Support more kinds of Geom/Stat/Scale/etc.
 - [ ] Our goal was to make it easier to add features even though Wenyu would not be available as much in the future.
 - [ ] If we can use Vega-Lite source code, we can try to use it.
 - [ ] When we try to support `GeomBar` or other `Geom` situation where the mapping is a `stat` instead of a `field`, make sure our framework still works well.
