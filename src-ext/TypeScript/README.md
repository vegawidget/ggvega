
Welcome to the **TypeScript part of ggvega (TS ggvega)**. The purpose of this document is to summarize our work during the **GSoC 2019**. 

***Author: [Wenyu Yang](https://github.com/wenyuyangpku)***

# Motivation

The goal of **ggvega** is to translate a ggplot2 object to a Vega-Lite specification. To achieve this goal, we divided the task into two parts. The first one is **ggspec** which is to convert a ggplot2 object into a ggschema specification. The second one is this part: **TS ggvega** which is to translate a ggschema specification to a Vega-Lite specification. 

The reason why we divide **ggvega** into two parts is that we want to use TypeScript in this R package.  [Vega-Lite](https://vega.github.io/vega-lite/) is an TypeScript project.  We wanted to base our code on Vega-Lite schema, and we needed an environment where we can "do something" with the schema. In the TypeScript environment, we can use the source code of  [Vega-Lite](https://vega.github.io/vega-lite/). We can also convert TypeScript and JSON schema to each other. I think that's why we have to build **TS ggvega** and why we want to use TypeScript.

Fortunately，during the GSoC 2019, I  can be responsible for the [TS ggvega](https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript). Very thanks for the guidance from my mentors: ***[Ian Lyttle](https://github.com/ijlyttle)*** ,  ***[Haley Jeppson](https://github.com/haleyjeppson)*** and the support from ***[Google Summer of Code](https://summerofcode.withgoogle.com/)*** .


# Development Guide

When we develop **TS ggvega**, we divided it into two TypeScript projects. The major one is [TS ggvega](https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggvega)  which contains all translation functions. Another one is called [TS ggschema](https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggschema) which contains all the definition of ggschema specification. On the one hand, **TS ggvega** can use the classes in **TS ggschema**. On the other hand,  **TS ggschema** generates the  [`ggschema.json`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggschema/build/ggschema.json) which can validate ggschema specification.


## TS ggvega

### Repository Setup
1. Make sure you have  [node.js](https://nodejs.org/en/). 
2. Cd into [TS ggvega directory](https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggvega) in your local clone of the repository and install all the npm dependencies. We use [yarn](https://yarnpkg.com/)to have reproducible dependencies:
```
cd ./src-ext/TypeScript/ggvega
yarn 
```
Now you should be able to build and test the code.

### Directory Structure

- `src/`  - Main source code directory.
- `test/`  - Code for unit testing.  `test`'s name reflects  `src`'s name. For example,  `topLevelSpec.ts`'s test file named  `topLevelSpec.test.ts`. 

### Libraries

This section lists TypeScript libraries which are used during development. See  `package.json`  for other libraries.

- ajv:  [ajv](https://github.com/epoberezkin/ajv) is a JSON Schema validator. We use it and  [`ggschema.json`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggschema/build/ggschema.json) to validate ggschema specification.

- quicktype: [quicktype](https://github.com/quicktype/quicktype) is a code generator. We use it to generate [`vlSpec.ts`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggvega/src/vlSpec.ts) from [`Vega-Lite schema`](https://vega.github.io/schema/vega-lite/v3.json).

- rollup: [rollup](https://github.com/rollup/rollup) is a module bundler for JavaScript. We use it to generate [`ggvega.js`](https://github.com/vegawidget/ggvega/blob/master/inst/js/ggvega.js). In the R part of this package, **ggvega** use [V8](https://cran.r-project.org/web/packages/V8/vignettes/v8_intro.html) and `ggvega.js` to translate ggschema specification.

- ts-jest:  [ts-jest](https://github.com/kulshekhar/ts-jest) is used to test the TypeScript. We use it to test **TS ggvega**.

- typedoc: [typedoc](https://github.com/TypeStrong/typedoc) is a documentation generator for TypeScript projects. We use it to generate documentation for this TypeScript project.


### Commands
This section lists commands that are commonly used during development. See  `package.json`  for other commands.

- Build: You can run  `yarn build`  to compile **TS ggvega** and generate `ggvega.js`. Then copy it into ./inst/js/ggveg.js.
- Test: You can run `yarn test` to test all unit-tests respectively. You can read [jest configuration](https://jestjs.io/docs/en/configuration) to know how to change the setting of your test. For example, run `yarn test --coverage` to see if specific lines are covered in the unit test. If you want to ignore all warning or error messages, run `yarn test silent = true`
- Documentation: You can run `yarn doc` to generate the documentation of **TS ggvega** comments. The documentation should under `./docs`
- Generate `src/vlSpec.ts`： You can run `yarn schema2ts` to generate the `src/vlSpec.ts` from Vega-Lite schema. If you are using Windows system, please run `yarn winschema2ts`

### Retrieve a new Vega-Lite schema
Since we generate [`vlSpec.ts`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggvega/src/vlSpec.ts) from [`Vega-Lite schema`](https://vega.github.io/schema/vega-lite/v3.json) and we need Vega-Lite schema when we build the Vega-Lite specification, the version of Vega-Lite schema is very important for us. If you are prepared to retrieve a new Vega-Lite schema,   do the following.

 1. Go to the [package.json](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggvega/package.json) of **TS ggvega**
 2. Change the value of vlschema. It should be the URL of the new Vega-Lite schema.
 ```
 "vlschema":  "https://vega.github.io/schema/vega-lite/v3.json",
 ```
 3. Run `yarn schema2ts` (for Windows users, it's `yarn winschema2ts`) to generate a new `src/vlSpec.ts`.
 
 You may encounter some errors, because the name and the structure of the TypeScript classes may be changed. If so, you will have to adjust and update the **TS ggvega** code.

### Suggested Programming Environment

We recommend that you use a similar environment to [Vega-Lite](https://vega.github.io/vega-lite/). Like Vega-Lite, we use the  [Visual Studio Code](https://code.visualstudio.com/)  editor.

-   VSCode has nice built-in Typescript support!
-   Make sure to install  [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint),  [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)  extensions.
-   The  [vscode-jest-runner](https://marketplace.visualstudio.com/items?itemName=firsttris.vscode-jest-runner)  extension is also very helpful for debugging tests. 

### Pull Requests and Travis

All pull requests will be tested on [Travis](https://travis-ci.org/). If your PR does not pass the checks, your PR will not be approved. In our [`.travis.yml`](https://github.com/vegawidget/ggvega/blob/master/.travis.yml), we test the R code and TypeScript code at the same time. The Travis' environments will run `yarn test` to test **TS ggvega**.


## TS ggschema

### Repository Setup
 1. Make sure you have  [node.js](https://nodejs.org/en/). 
 2. Cd into [TS ggschema directory](https://github.com/vegawidget/ggvega/tree/master/src-ext/TypeScript/ggvega) in your local clone of the repository, and install all the npm dependencies. We use [yarn](https://yarnpkg.com/)to have reproducible dependencies:
 ```
cd ./src-ext/TypeScript/ggschema
yarn 
```
 3. Run `yarn build`  to generate [`ggschema.json`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggschema/build/ggschema.json).  We use [ts-json-schema-generator](https://github.com/vega/ts-json-schema-generator) to generate JSON schema from TypeScript classes.


# Design

## The translation of the Vega-Lite classes

In **TS ggvega**, we use quicktype to generate [`vlSpec.ts`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggvega/src/vlSpec.ts) from [`Vega-Lite schema`](https://vega.github.io/schema/vega-lite/v3.json). That is because we want to use Vega-Lite classes when we generate the Vega-Lite specification. The quickest way is to use Vega-Lite source code directly, but the R package [V8](https://cran.r-project.org/web/packages/V8/vignettes/v8_intro.html) doesn't support es6 on Ubuntu 16.04. Then we cannot use Vega-Lite source code until the V8 package is fully ES6 compliant.

To work around this problem, we believe that generating the Vega-Lite classes from the [Vega-Lite schema](https://vega.github.io/schema/vega-lite/v3.json) is a feasible solution. Because Vega-Lite contains all information about Vega-Lite classes and we can generate TypeScript classes from JSON schema. After trying several ways to generate TypeScript classes, I found the best result is provided by [quicktype](https://quicktype.io/typescript/). So, we decide to use it to generate Vega-Lite classes. Here is a [link](https://app.quicktype.io/?share=1KFE6qo8KU8cupEl5gh6) about how quicktype translate JSON schema to TypeScript.

### Boxplot enum bug
However, when we use quicktype generate Vega-Lite classes, we encounter a bug that quicktype cannot separate Enum type. [Here is the link of the example in QuickType](https://app.quicktype.io/?share=mSby87Y3k9npwXjcBeZm). 
The output we expected is:
```
export type AnyMark = Mark | Boxplot;

export enum Mark {
  Area = 'area',
  Bar = 'bar'
}
export enum Boxplot {
  Boxplot = 'boxplot',
  Errorbar = 'errorbar'
}

```
But the final output is:

```
export type AnyMark = Boxplot;

export enum Boxplot{
    Area = "area",
    Bar = "bar",
    Boxplot = "boxplot",
    Errorbar = "errorbar",
}
```

That's because the logic of `anyOf`, `allOf` and `oneOf` in JSON schema is too difficult and the developers of quicktype are still working on this issue [https://github.com/quicktype/quicktype/issues/493](https://github.com/quicktype/quicktype/issues/493).

To solve this bug, I wrote a file [`fixbug.js`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggvega/fixbug.js) which is used to change the name `Boxplot` to `Mark`. If you want to change other names of Vega-Lite classes, you can add them into this file.

### Use Vega-Lite Source Code

If we can use Vega-Lite source code someday, I hope this guide can help you. 

When you revert to using the Vega-Lite classes in Vega-Lite source code, you will have to rename the classes you are using in **TS ggvega**. And you will have to adjust your code because some structure of the classes changes as well. Here are some examples of the changes and the location of these Vega-Lite classes:

-   `VL.TopLevelSpec`==>`TopLevelSpec`

-   `VL.LayerSpec`==>`(GenericUnitSpec<CompositeEncoding, AnyMark> | GenericLayerSpec<GenericUnitSpec<CompositeEncoding, AnyMark>>)[]`

-   `VL.Encoding`==>`CompositeEncoding`

-   `VL.XClass`==>`PositionFieldDef<'x'>`

Since the class structures are very similar, I believe you can find the corresponding class in Vega-Lite source code. And for now, we haven't changed the structure of our class. That's because we use unions type which contains all possible class structures. But if you want to define the class more precise. Here is an example.

I will use  `Encoding.size`  as an example. When we use Vega-Lite source code, if we only change the name of class, the  `Encoding.size`  should be:

```
encoding['size'] =  itmLayer.encoding['size'] as  
FieldDefWithCondition<MarkPropFieldDef<Field,StandardType>, number> 
|ValueDefWithCondition<MarkPropFieldDef<Field, StandardType>, number>

```

As we already knew,  `Encoding.size`  has two types. One is based on  `Field`. One is based on  `Value`. In our current code, we haven't separated these two types, because  `quicktype`  combines these two types. But if we want to define the  `Encoding.size`  more precise, we can do it by using Vega-Lite source code. 

For example, when we define  `encoding`  based on  `aes_params`, we should use  `ValueDefWithCondition`  type. This type can prevent us from giving  `title`  or  `scale`  to `Encoding.size` because these properties only belong to  `FieldDefWithConditions`.

You can read more details on [quicktype.md](https://github.com/vegawidget/ggvega/blob/quicktype/dev/TypeScript/quicktype/quicktype.md).



## The extensibility of the framework

Since our package is still under active development, what we are most concerned about is the extensibility of the framework.    When I build **TS ggvega**, I pay more attention to implementation rather than the extensibility. Then we find it is difficult to add a new Geom/Scale/Stat/etc., which is why we went through the big effort to make a new framework for the **TS ggvega**. In our framework, the top-level function is topLevelSpec()

### Framework structure 

In our framework, the top-level function is `topLevelSpec()` which create a Vega-Lite specification from a ggschema specification. Here is the abstract structure of it.

- $schema:  Vega-Lite schema.
- title: the title in ggplot2 `labels`.
- datasets: `datasetObject()`, translate ggplot2 `data`.
- layer: `layerArrayByAes()`, translate ggplot2 `layers`.
	- `itmLayer()`, generate intermediate layers from ggplot2 `layers`.
		- `markByGeom()`, translate ggplot2 `geom`.
		- `itmEncodingObjectByMappingObject()`, translate ggplot2 `mapping`.
		- `itmEncodingObjectByAesParamsObject()`, translate ggplot2 `aes_params`.
		- `itmEncodingObjectByStat()`, translate ggplot2 `stat`.
	- `itmLayerArrayByLabelsObject()`, translate ggplot2 `labels`.
	- `itmLayerArrayByScalesArray()`, translate ggplot2 `scales`.
	- `itmLayerArrayByCoord()`, translate ggplot `coordinates`.
	- `layerByItmLayer()`, generate Vega-Lite `layer` from intermediate layers.
		- `encodingNameByGeom()`, get Vega-Lite encoding name from ggplot2 aesthetic name based on ggplot2 `Geom` type.

Then I want to talk about why use this framework.

### "Don't Repeat Yourself"

When we design the framework, we want to respect the principle of "Don't Repeat Yourself". Think about it. If you want to translate the `encoding.x`of Vega-Lite specification, what information we need? Get `x.field` from ggplot2 `mapping`. Get `type` from ggplot2 `data`. Get `x.title` from ggplot2 `labels`. Get `x.scale` from ggplot2 `scales`. If you put all of them into one function `encodingX()`, it will be so large and complicated.  And you will have to repeat these steps when you translate other aesthetics, like y, size, color, shape, etc. However, in this framework, the translation process has been simplified. For example, you can translate all ggplot2 `mapping` by function `itmEncodingObjectByMappingObject()`. You can translate all ggplot2 `scales` by function `itmLayerArrayByScalesArray()`.  Their translation functions are kind of high cohesion and low coupling so that you don't need care that they influence each other.

### Friendly to `scales` and `labels`

When we design the framework, we noticed one important thing that `scales` and `labels` in ggplot2 are very different from them in Vega-Lite spec. In the philosophy of ggplot2, all layers share the same `scales`, `labels` and `coordinates`. But in Vega-Lite, every layer has its `title` and `scale`. Then we decide to only specify a `scale` or a `label` for the first appearance of the aesthetic in the layers list.  That's why we put `itmLayer()`, `itmLayerArrayByLabelsObject()` and `itmLayerArrayByScalesArray()` at the same level. We translate ggplot2 `labels` and `scales` based on all the intermediate layers rather than the intermediate encoding. We also care about the order of the functions. For example,  `itmLayerArrayByLabelsObject()` is before `itmLayerArrayByScalesArray()`. If the `scales` has a `name`, it will substitute the corresponding `name` in `labels`. The framework just does what ggplot2 does.

### Easy to add another Geom/Stat/Scale/etc.

Since the functions of this framework are high cohesion and low coupling, it should be easy to add a new Geom/Stat/Scale/etc. If you want add another `geom` type, you can just change the function `markByGeom()` and function `encodingNameByGeom()`. If you want to add another `scale`, you can just change the function `itmLayerArrayByScalesArray()`. If you want to add another, you can just change the function `itmEncodingObjectByStat()`.   Here are some examples of adding another Geom/Stat/Scale/etc.

- Add `GeomLine` 

 1. Make the examples by hand to show what the ggschema specification and Vega-Lite specification should look like. This can help us design ggschema and test ggvega.
 2. Build the new class of this ggschema specification in ggschema.
 ```
//Add GeomSetLine to GeomSet
export  type  GeomSet  =  GeomSetPoint  |  GeomSetBar  |  GeomSetBoxplot  |  GeomSetLine;

//Build new class GeomSetLine
export  interface  GeomSetLine {
`geom: {class:  'GeomLine'};
`geom_params: {'na.rm':  boolean;};
}
``` 
 3. Write or complete functions in **TS ggvega** to support these new features.
```
//Add new `geom` to markByGeomMap in function markByGeom()
const  markByGeomMap  = {
GeomPoint:  'point',
GeomBar:  'bar',
GeomBoxplot:  'boxplot',
GeomLine:  'line'
};

//Change encodingMap in function encodingNameByGeom()
if (ggGeomSet.geom.class  ==  'GeomLine') {
    encodingMap.size  =  'strokeWidth';
}
//Build new function to translate Aes value based on `Geom` type.
```

- Add `CoordFlip`
 1. Make the examples by hand to show what the ggschema specification and Vega-Lite specification should look like. This can help us design ggschema and test ggvega.
 2. Build the new class of this ggschema specification in ggschema.
```
//Add CoordFlip to Coord  
export  type  Coord  =  CoordCartesian  |  CoordFlip;

//Build new class CoordFlip 
export  interface  CoordFlip {
    class:  'CoordFlip';
}
```
  3. Write or complete functions in **TS ggvega** to support these new features.
```
//Change CoordMap in function itmLayerArrayByCoord()
const  CoordMap  = {
    CoordCartesian:  itmLayerArrayByCoordCartesian,
    CoordFlip:  itmLayerArrayByCoordFlip
};
//Build new function itmLayerArrayByCoordFlip() to translate the Coord
```


## TODO

 - [ ] Support more kinds of Geom/Stat/Scale/etc.
 - [ ] Our goal was to make it easier to add features even though Wenyu would not be available as much in the future.
 - [ ] If we can use Vega-Lite source code, we can try to use it.
 - [ ] When we try to support `GeomBar` or other `Geom` situation where the mapping is a `stat` instead of a `field`, make sure our framework still works well.
