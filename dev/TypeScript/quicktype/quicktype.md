

# quicktype 

In TS ggvega, we use quicktype to generate vlSpec.ts from Vega-Lite schema. That is because we want to use Vega-Lite classes when we generate the Vega-Lite specification. The quickest way is to use Vega-Lite source code directly, but the R package V8 doesn't support es6 on Ubuntu 16.04. Then we cannot use Vega-Lite source code until the V8 package is fully ES6 compliant.

To work around this problem, we believe that generating the Vega-Lite classes from the Vega-Lite schema is a feasible solution. Because Vega-Lite contains all information about Vega-Lite classes and we can generate TypeScript classes from JSON schema. After trying several ways to generate TypeScript classes, I found the best result is provided by quicktype. So, we decide to use it to generate Vega-Lite classes. Here is a link about how quicktype translate JSON schema to TypeScript.

## Boxplot Enum

However, when we used quicktype to generate Vega-Lite classes, we encountered a bug that quicktype cannot separate Enum type. For example,  here is my input: [The link of the example in QuickType](https://app.quicktype.io?share=mSby87Y3k9npwXjcBeZm).

```json
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

```ts
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
```ts
export enum AnyMark {
    Area = "area",
    Bar = "bar",
    Boxplot = "boxplot",
    Errorbar = "errorbar",
}
```
The quicktype cannot seperate all enum class. And we are looking forward to the answer from quicktype. For now, they are still working on this issue [https://github.com/quicktype/quicktype/issues/493](https://github.com/quicktype/quicktype/issues/493).


To solve this bug, what we have done is rename the `Boxplot` to `Mark`.  To be clear, the type of all marks are `Mark`. Including `Boxplot` and `Errorbar`. 

```ts
export enum Mark {
    Area = "area",
    Bar = "bar",
    Boxplot = "boxplot",
    Errorbar = "errorbar",
}
```
## PurpleBin

To be clear, this problem not just happened on the **BoxPlot Enum**.  All the `anyOf`  structures in JSON schema have the potential risks to face this problem. [https://json-schema.org/understanding-json-schema/reference/combining.html](https://json-schema.org/understanding-json-schema/reference/combining.html) tells us the definitions of `anyOf`, `allOf` and `oneOf`. And it's difficult for quicktype to understand the logic of them. What quicktype has done is to combine similar type and use the first one to name the new class. If these classes are not similar, it will generate a new type.

For example, In vlSpec.ts, you can find the definition of bins are stange:
```ts
bin?:  PurpleBin;
bin?:  FluffyBin;
```
Actually, the definition of `bin` in Vega-Lite schema is:
```json
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
That means Vega-Lite has two kinds of `bin`. One has four different types: `boolean`, `BinParams`, `enum` and `null`. One has three different types `boolean`, `BinParams`, and `null`.
To solve this case, quicktype build 2 new types:
```ts
export  type  FluffyBin  =  boolean  |  BinParams  |  BinEnum  |  null;
export  type  PurpleBin  =  boolean  |  BinParams  |  null;
```
I think this solution is acceptable. Although the names of these new types are ambiguous, it gives a new type to the types union.  And we can also avoid this by removing the `--explicit-unions` option from the command line.

Once you remove `--explicit-unions`, the new TypeScript code is:
```ts
bin?:  boolean  |  BinParams  |  null;
bin?:  boolean  |  BinParams  |  BinEnum  |  null;
```
Which is more clear than the `PurpleBin` and `FluffyBin`. But when the types are so complicated, it's not clear for us to understand the type. For example, the `dataset`  is:
```ts
//--explicit-unions
datasets?: {[key:  string]:  InlineDataset};
export  type  InlineDataset  =  InlineDatasetElement[] | {[key:  string]:  any} |  string;
export  type  InlineDatasetElement  =  boolean  |  number  | {[key:  string]:  any} |  string;
//--(no)explicit-unions
datasets?: {[key:  string]:  Array<boolean  |  number  | {[key:  string]:  any} |  string> | {[key:  string]:  any} |  string};
```
Without an explicit unions type, the definition of a type is too long and complicated.

Finally, we decide to use `--explicit-unions`.


## URLData

Another confusing name is `URLData`. Although we don't use `topLevelSpec.data`, we find it's strange. 
I think the reason is in thi we have 2 `data`
```ts
data?:  URLData  |  null;
data:  Data;
```
```json
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

## Our Plan for now

Here is the code about how we use quicktype and solve these problems:
```json
"schema2ts": "quicktype -s schema $npm_package_vlschema -o src/vlSpec.ts --top-level TopLevelSpec --just-types --explicit-unions && node fixbug.js"
```
- `$npm_package_vlschema` is the Vega-Lite version
- `src/vlSpec.ts` is the generated TypeScript class
- `--just-types` means only generating type, no functions
- `--top-level TopLevelSpec` means our toplevel called `TopLevelSpec`
- `--explicit-unions` means we use `explicit-unions` to name and construct the types
- `node fixbug.js` runs a javascript to rename some class.

These codes locate at  [`package.json`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggvega/package.json).  If you want to use another Vega-Lite version. You can change the value of `vlschema`.
```json
"vlschema":  "https://vega.github.io/schema/vega-lite/v3.json"
```


## Reverting to using Vega-Lite classes 

When the R V8 package is fully ES6 compliant, these are some things we would need to do to change to use the Vega-Lite code directly.

### Remove quicktype

The only file you need to change is [`package.json`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggvega/package.json).  And we also have a file [`fixbug.js`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggvega/fixbug.js). It's used to change the name `Boxplot` to `Mark`. You can delete it when you don't need `quicktype`.

These two commands are used to generate `vlSpec.ts`. Now you can delete them. `schema2ts` is for Unix/Mac and `winschema2ts` is for Windows.


```json
"scripts": {
    "schema2ts": "quicktype -s schema $npm_package_vlschema -o src/vlSpec.ts --top-level TopLevelSpec --just-types --explicit-unions && node fixbug.js",
    "winschema2ts": "quicktype -s schema %npm_package_vlschema% -o src/vlSpec.ts --top-level TopLevelSpec --just-types --explicit-unions && node fixbug.js"
}
```
Then you can delete the `quicktype` package in `devDependencies`
```json
"devDependencies": {
  "quicktype": "^15.0.199"
}
```
As a reminder, these changes all should be made in the file [`package.json`](https://github.com/vegawidget/ggvega/blob/master/src-ext/TypeScript/ggvega/package.json). 



### Use Vega-Lite Source Code
 You will have to install source code packages. 
 ```json
"vega":  "^5.4.0",
"vega-lite":  "^3.3.0"
"vega-util":  "^1.10.0"
 ```
If you want to import vega-lite type, You have to find the location of these types. Here is an example. 
```ts
import  {TopLevel,  GenericLayerSpec,  UnitSpec}  from  'vega-lite/build/src/spec';
import  {LayerSpec}  from  'vega-lite/build/src/spec/layer';
import  {Datasets}  from  'vega-lite/build/src/spec/toplevel';
```
### Some Possible situations

The most important difference between `vlSpec.ts` and `Vega-Lite source code` is that `Vega-Lite source code` use more union types. That means `Vega-Lite source code` is more specific than `vlSpec.ts`.  

And **Jest** is not very friendly to test code at `./node_modules`. You can use the config in [`vl-source-code`]([https://github.com/vegawidget/ggvega/tree/vl-source-code](https://github.com/vegawidget/ggvega/tree/vl-source-code)) branch to solve this problem. 

### How to use Vega-Lite 

When we revert to using the Vega-Lite classes, we will have to rename the classes we use in ggvega. And Some structure of the classes changes as well. Here are some example changes:

- `VL.TopLevelSpec`==>`TopLevelSpec` 

```ts
import {TopLevelSpec} from  'vega-lite';
``` 

- `VL.LayerSpec`==>`(GenericUnitSpec<CompositeEncoding, AnyMark> |  GenericLayerSpec<GenericUnitSpec<CompositeEncoding, AnyMark>>)[]`

```ts
import {GenericLayerSpec, GenericUnitSpec} from  'vega-lite/src/spec';
import {CompositeEncoding} from  'vega-lite/build/src/compositemark';
import {AnyMark} from  'vega-lite/src/mark';

/**
* NOTE@wenyu: You can simplify the class if you need. For example, in our case,
* we only need `GenericUnitSpec`. You can just use `GenericUnitSpec<CompositeEncoding, AnyMark>`.
*/
```

- `VL.Encoding`==>`CompositeEncoding`
```ts
import {CompositeEncoding} from  'vega-lite/build/src/compositemark';
```

- `VL.XClass`==>`PositionFieldDef<'x'>`

```ts
import {PositionFieldDef} from  'vega-lite/build/src/channeldef';
```

Since the class structures are very similar, I believe you can find the corresponding class in Vega-Lite source code. And for now, we haven't change the structure of our class. That's because we use unions type which contains all possible class structures. But if you want to define the class more precise. Here is an example.

I will use `Encoding.size` as an example. When we use Vega-Lite source code, If we only change the name of class, the `Encoding.size` should be:

```ts
encoding['size']=  itmLayer.encoding['size'] as  
FieldDefWithCondition<MarkPropFieldDef<Field,StandardType>, number> 
|ValueDefWithCondition<MarkPropFieldDef<Field, StandardType>, number>
```

As we have already known, `Encoding.size` has two types. One is based on `Field`. One is based on `Value`. In our current code, we haven't separated these two types, because `quicktype` combines these two types. But if we want to define the `Encoding.size` more precise and clearer, we can do it by using Vega-Lite source code.

For example, when we define `encoding` based on `aes_params`, we should use `ValueDefWithCondition` type. These can prevent us from giving `title` or `scale` to them because these properties only belong to `FieldDefWithConditions`.

If we can use Vega-Lite source code someday, I believe it will be a  better choice.
