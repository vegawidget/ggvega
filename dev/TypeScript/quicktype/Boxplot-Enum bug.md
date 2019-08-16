# Quicktype 

Since the R V8 package is not fully ES6 compliant yet, we faced the some error on using vega-lite source code directly. To solve this problem, we have to generate the vega-lite type from the [vega-lite schema](https://vega.github.io/schema/vega-lite/v3.json).  We have tried different ways to generate TypeScript from json-schema. The best result is provided by  [quicktype](https://quicktype.io/typescript/). Here is a[link](https://app.quicktype.io?share=1KFE6qo8KU8cupEl5gh6) about how they translate json-schema to TypeScript. 

## BoxPlot Enum
But the quicktype also has a "bug".  When it translate json-schema to TypeScript, it cannot seperate Enum type. Here is the [link of the issue](https://github.com/quicktype/quicktype/issues/1284). 

For example,  here is my input: [The link of the example in QuickType](https://app.quicktype.io?share=mSby87Y3k9npwXjcBeZm)

```
{
  "$ref": "#/definitions/AnyMark",
  "$schema": "http://json-schema.org/draft-06/schema#",
  "definitions": {
    "AnyMark": {
      "anyOf": [
        {
          "$ref": "#/definitions/Mark"
        },
        {
          "$ref": "#/definitions/CompositeMark"
        }
      ]
    },
    "Mark": {
      "enum": ["area", "bar"],
      "type": "string"
    },
    "CompositeMark": {
      "enum": ["boxplot", "errorbar"],
      "type": "string"
    }
  }
}
```

The ideal output is:

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
export enum AnyMark {
    Area = "area",
    Bar = "bar",
    Boxplot = "boxplot",
    Errorbar = "errorbar",
}
```
The quicktype cannot seperate all enum class. And we are looking forward to the answer from quicktype. For now, they are still working on this issue [https://github.com/quicktype/quicktype/issues/493](https://github.com/quicktype/quicktype/issues/493).


To solve this bug, what we have done is rename the `Boxplot` to `Mark`.  To be clear, the type of all marks are `Mark`. Including `Boxplot` and `Errorbar`. 

```
export enum Mark {
    Area = "area",
    Bar = "bar",
    Boxplot = "boxplot",
    Errorbar = "errorbar",
}
```
## PurpleBin

To be clear, this problem not just happened on the **BoxPlot Enum**.  All the `anyOf`  structures in json-schema have the potential risks to face this problem. [https://json-schema.org/understanding-json-schema/reference/combining.html](https://json-schema.org/understanding-json-schema/reference/combining.html) tells us the definitions of `anyOf`, `allOf` and `oneOf`. And it's diificult for quicktype to understand the logic of them. What quicktype has done is to combine similar type and use the first one to name the new class. If these classes are not similar, it will generate a new type.

For example, In vlSpec.ts, you can find the definition of bins are stange:
```{TypeScript}
bin?:  PurpleBin;
bin?:  FluffyBin;
```
Actually, the definition of `bin` in vega-lite schema is:
```{json-schema}
"ConditionalSelection<TextFieldDef>.bin": {
          "anyOf": [
            {
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            },
            {
              "enum": [
                "binned"
              ],
              "type": "string"
            },
            {
              "type": "null"
            }
          ]
       }
       
  "BinTransform.bin": {
          "anyOf": [
            {
              "enum": [
                true
              ],
              "type": "boolean"
            },
            {
              "$ref": "#/definitions/BinParams"
            }
          ]
        }
```
That means vega-lite has two kinds of `bin`. One has four different types: `boolean`, `BinParams`, `enum` and `null`. One has three different types `boolean`, `BinParams`, and `null`.
To solve these case, quicktype build 2 new types:
```{TypeScript}
export  type  FluffyBin  =  boolean  |  BinParams  |  BinEnum  |  null;
export  type  PurpleBin  =  boolean  |  BinParams  |  null;
```
I think this solution is acceptable. Although the names of these new types are ambiguous, it gives a new type to the types union.  And we can also avoid this by remove the `--explicit-unions` option from the command line.

Once you remove `--explicit-unions`, the new TypeScript code is:
```{TypeScript}
bin?:  boolean  |  BinParams  |  null;
bin?:  boolean  |  BinParams  |  BinEnum  |  null;
```
Which is more clear than the `PurpleBin` and `FluffyBin`. But when the types are so complicated, it's not clear for us to understand the type. For example, the `dataset`  is:
```{TypeScript}
//--explicit-unions
datasets?: {[key:  string]:  InlineDataset};
export  type  InlineDataset  =  InlineDatasetElement[] | {[key:  string]:  any} |  string;
export  type  InlineDatasetElement  =  boolean  |  number  | {[key:  string]:  any} |  string;
//--(no)explicit-unions
datasets?: {[key:  string]:  Array<boolean  |  number  | {[key:  string]:  any} |  string> | {[key:  string]:  any} |  string};
```
Without an explicit unions type, the definition of a type is too long and complicated.

## URLData

Another confused name is `URLData`. Although we don't use `topLevelSpec.data`, we find it's strange. 
I think the reason is in thi we have 2 `data`
```{TypeScript}
data?:  URLData  |  null;
data:  Data;
```
```{json}
 "DataSource": {
      "anyOf": [
        {
          "$ref": "#/definitions/UrlData"
        },
        {
          "$ref": "#/definitions/InlineData"
        },
        {
          "$ref": "#/definitions/NamedData"
        }
      ]
    }
```
Since we already has a `Data` type. And in the fisrt situation, the `UrlData` is the first type. Like `Boxplot`, quicktype use `URLData` as the final type name.

##  when the R V8 package is fully ES6 compliant, what would we need to do to change to use the Vega-Lite code directly?

### Remove quicktype

These two commands are used to generate `vlSpec.ts`. Now you can delete them. `schema2ts` is for Unix/Mac and `winschema2ts` is for Windows.


```{package.json}
"scripts": {
	"schema2ts": "quicktype -s schema $npm_package_vlschema -o src/vlSpec.ts --top-level TopLevelSpec --just-types --explicit-unions && node fixbug.js",
	"winschema2ts": "quicktype -s schema %npm_package_vlschema% -o src/vlSpec.ts --top-level TopLevelSpec --just-types --explicit-unions && node fixbug.js"
}
```
Then you can delete the `quicktype` package in `devDependencies`
```{package.json}
"devDependencies": {
"quicktype": "^15.0.199"
}
```
For now, we also have a file `fixbug.js` at the root folder. It's used to change the name `Boxplot` to `Mark`. You can delete it when you don't need `quicktype`

### Use Vega-lite Source Code
 You will have to install source code packages. 
 ```
"vega":  "^5.4.0",
"vega-lite":  "^3.3.0"
"vega-util":  "^1.10.0"
 ```
If you want to import vega-lite type, You have to find the location of these types. Here is an example. 
```{TypeScript}
import  {TopLevel,  GenericLayerSpec,  UnitSpec}  from  'vega-lite/build/src/spec';
import  {LayerSpec}  from  'vega-lite/build/src/spec/layer';
import  {Datasets}  from  'vega-lite/build/src/spec/toplevel';
```
### Some Possible situations

The most important difference between `vlSpec.ts` and `vega-lite source code` is that `vega-lite source code` use more union types. That means `vega-lite source code` is more specific than `vlSpec.ts`.  

And **Jest** is not very friendly to test code at `./node_modules`. You can use the config in `vl-source-code` branch to solve this problem. 
