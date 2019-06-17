/**
 * A Vega-Lite top-level specification.
 * This is the root class for all Vega-Lite specifications.
 * (The json schema is generated from this type.)
 */
export interface TopLevelSpec {
  /**
   * URL to [JSON schema](http://json-schema.org/) for a Vega-Lite specification. Unless you
   * have a reason to change this, use `https://vega.github.io/schema/vega-lite/v3.json`.
   * Setting the `$schema` property allows automatic validation and autocomplete in editors
   * that support JSON schema.
   */
  $schema?: string;
  /**
   * The alignment to apply to grid rows and columns.
   * The supported string values are `"all"`, `"each"`, and `"none"`.
   *
   * - For `"none"`, a flow layout will be used, in which adjacent subviews are simply placed
   * one after the other.
   * - For `"each"`, subviews will be aligned into a clean grid structure, but each row or
   * column may be of variable size.
   * - For `"all"`, subviews will be aligned and each row or column will be sized identically
   * based on the maximum observed size. String values for this property will be applied to
   * both grid rows and columns.
   *
   * Alternatively, an object value of the form `{"row": string, "column": string}` can be
   * used to supply different alignments for rows and columns.
   *
   * __Default value:__ `"all"`.
   */
  align?: RowColLayoutAlign | LayoutAlign;
  /**
   * Sets how the visualization size should be determined. If a string, should be one of
   * `"pad"`, `"fit"` or `"none"`.
   * Object values can additionally specify parameters for content sizing and automatic
   * resizing.
   * `"fit"` is only supported for single and layered views that don't use `rangeStep`.
   *
   * __Default value__: `pad`
   */
  autosize?: AutoSizeParams | AutosizeType;
  /**
   * CSS color property to use as the background of the entire view.
   *
   * __Default value:__ none (transparent)
   */
  background?: string;
  /**
   * The bounds calculation method to use for determining the extent of a sub-plot. One of
   * `full` (the default) or `flush`.
   *
   * - If set to `full`, the entire calculated bounds (including axes, title, and legend) will
   * be used.
   * - If set to `flush`, only the specified width and height values for the sub-view will be
   * used. The `flush` setting can be useful when attempting to place sub-plots without axes
   * or legends into a uniform grid structure.
   *
   * __Default value:__ `"full"`
   */
  bounds?: BoundsEnum;
  /**
   * Boolean flag indicating if subviews should be centered relative to their respective rows
   * or columns.
   *
   * An object value of the form `{"row": boolean, "column": boolean}` can be used to supply
   * different centering values for rows and columns.
   *
   * __Default value:__ `false`
   *
   * Boolean flag indicating if subviews should be centered relative to their respective rows
   * or columns.
   *
   * __Default value:__ `false`
   */
  center?: boolean | RowColBoolean;
  /**
   * The number of columns to include in the view composition layout.
   *
   * __Default value__: `undefined` -- An infinite number of columns (a single row) will be
   * assumed. This is equivalent to
   * `hconcat` (for `concat`) and to using the `column` channel (for `facet` and `repeat`).
   *
   * __Note__:
   *
   * 1) This property is only for:
   * - the general (wrappable) `concat` operator (not `hconcat`/`vconcat`)
   * - the `facet` and `repeat` operator with one field/repetition definition (without
   * row/column nesting)
   *
   * 2) Setting the `columns` to `1` is equivalent to `vconcat` (for `concat`) and to using
   * the `row` channel (for `facet` and `repeat`).
   */
  columns?: number;
  /**
   * Vega-Lite configuration object.  This property can only be defined at the top-level of a
   * specification.
   */
  config?: Config;
  /**
   * An object describing the data source
   */
  data?: Data;
  /**
   * A global data store for named datasets. This is a mapping from names to inline datasets.
   * This can be an array of objects or primitive values or a string. Arrays of primitive
   * values are ingested as objects with a `data` property.
   */
  datasets?: {[key: string]: Array<boolean | number | {[key: string]: any} | string> | {[key: string]: any} | string};
  /**
   * Description of this mark for commenting purpose.
   */
  description?: string;
  /**
   * A key-value mapping between encoding channels and definition of fields.
   *
   * A shared key-value mapping between encoding channels and definition of fields in the
   * underlying layers.
   */
  encoding?: Encoding;
  /**
   * The height of a visualization.
   *
   * __Default value:__
   * - If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type
   * is `"fit"` or its y-channel has a [continuous
   * scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the height will be
   * the value of
   * [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).
   * - For y-axis with a band or point scale: if
   * [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value
   * or unspecified, the height is [determined by the range step, paddings, and the
   * cardinality of the field mapped to
   * y-channel](https://vega.github.io/vega-lite/docs/scale.html#band). Otherwise, if the
   * `rangeStep` is `null`, the height will be the value of
   * [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).
   * - If no field is mapped to `y` channel, the `height` will be the value of `rangeStep`.
   *
   * __Note__: For plots with [`row` and `column`
   * channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the
   * height of a single view.
   *
   * __See also:__ The documentation for [width and
   * height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.
   */
  height?: number;
  /**
   * A string describing the mark type (one of `"bar"`, `"circle"`, `"square"`, `"tick"`,
   * `"line"`,
   * `"area"`, `"point"`, `"rule"`, `"geoshape"`, and `"text"`) or a [mark definition
   * object](https://vega.github.io/vega-lite/docs/mark.html#mark-def).
   */
  mark?: MarkDefClass | Mark;
  /**
   * Name of the visualization for later reference.
   */
  name?: string;
  /**
   * The default visualization padding, in pixels, from the edge of the visualization canvas
   * to the data rectangle.  If a number, specifies padding for all sides.
   * If an object, the value should have the format `{"left": 5, "top": 5, "right": 5,
   * "bottom": 5}` to specify padding for each side of the visualization.
   *
   * __Default value__: `5`
   */
  padding?: PaddingClass | number;
  /**
   * An object defining properties of geographic projection, which will be applied to `shape`
   * path for `"geoshape"` marks
   * and to `latitude` and `"longitude"` channels for other marks.
   *
   * An object defining properties of the geographic projection shared by underlying layers.
   */
  projection?: Projection;
  /**
   * Scale, axis, and legend resolutions for view composition specifications.
   */
  resolve?: Resolve;
  /**
   * A key-value mapping between selection names and definitions.
   */
  selection?: {[key: string]: SelectionDef};
  /**
   * The spacing in pixels between sub-views of the composition operator.
   * An object of the form `{"row": number, "column": number}` can be used to set
   * different spacing values for rows and columns.
   *
   * __Default value__: Depends on `"spacing"` property of [the view composition
   * configuration](https://vega.github.io/vega-lite/docs/config.html#view-config) (`20` by
   * default)
   *
   * The spacing in pixels between sub-views of the concat operator.
   *
   * __Default value__: `10`
   */
  spacing?: RowColNumber | number;
  /**
   * Title for the plot.
   */
  title?: TitleParams | string;
  /**
   * An array of data transformations such as filter and new field calculation.
   */
  transform?: Transform[];
  /**
   * Optional metadata that will be passed to Vega.
   * This object is completely ignored by Vega and Vega-Lite and can be used for custom
   * metadata.
   */
  usermeta?: {[key: string]: any};
  /**
   * An object defining the view background's fill and stroke.
   *
   * __Default value:__ none (transparent)
   */
  view?: ViewBackground;
  /**
   * The width of a visualization.
   *
   * __Default value:__ This will be determined by the following rules:
   *
   * - If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type
   * is `"fit"` or its x-channel has a [continuous
   * scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the width will be
   * the value of
   * [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).
   * - For x-axis with a band or point scale: if
   * [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value
   * or unspecified, the width is [determined by the range step, paddings, and the cardinality
   * of the field mapped to
   * x-channel](https://vega.github.io/vega-lite/docs/scale.html#band).   Otherwise, if the
   * `rangeStep` is `null`, the width will be the value of
   * [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).
   * - If no field is mapped to `x` channel, the `width` will be the value of
   * [`config.scale.textXRangeStep`](https://vega.github.io/vega-lite/docs/size.html#default-width-and-height)
   * for `text` mark and the value of `rangeStep` for other marks.
   *
   * __Note:__ For plots with [`row` and `column`
   * channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the
   * width of a single view.
   *
   * __See also:__ The documentation for [width and
   * height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.
   */
  width?: number;
  /**
   * Definition for how to facet the data.  One of:
   * 1) [a field definition for faceting the plot by one
   * field](https://vega.github.io/vega-lite/docs/facet.html#field-def)
   * 2) [An object that maps `row` and `column` channels to their field
   * definitions](https://vega.github.io/vega-lite/docs/facet.html#mapping)
   */
  facet?: Facet;
  /**
   * A specification of the view that gets faceted.
   *
   * A specification of the view that gets repeated.
   */
  spec?: SpecClass;
  /**
   * Layer or single view specifications to be layered.
   *
   * __Note__: Specifications inside `layer` cannot use `row` and `column` channels as
   * layering facet specifications is not allowed. Instead, use the [facet
   * operator](https://vega.github.io/vega-lite/docs/facet.html) and place a layer inside a
   * facet.
   */
  layer?: LayerSpec[];
  /**
   * Definition for fields to be repeated.  One of:
   * 1) An array of fields to be repeated.  If `"repeat"` is an array, the field can be
   * referred using `{"repeat": "repeat"}`
   * 2) An object that mapped `"row"` and/or `"column"` to the listed of fields to be repeated
   * along the particular orientations. The objects `{"repeat": "row"}` and `{"repeat":
   * "column"}` can be used to refer to the repeated field respectively.
   */
  repeat?: string[] | RepeatMapping;
  /**
   * A list of views to be concatenated.
   */
  concat?: Spec[];
  /**
   * A list of views to be concatenated and put into a column.
   */
  vconcat?: Spec[];
  /**
   * A list of views to be concatenated and put into a row.
   */
  hconcat?: Spec[];
}

export interface RowColLayoutAlign {
  column?: LayoutAlign;
  row?: LayoutAlign;
}

/**
 * The alignment to apply to symbol legends rows and columns. The supported string values
 * are `"all"`, `"each"` (the default), and `none`. For more information, see the [grid
 * layout documentation](https://vega.github.io/vega/docs/layout).
 *
 * __Default value:__ `"each"`.
 */
export enum LayoutAlign {
  All = 'all',
  Each = 'each',
  None = 'none'
}

export interface AutoSizeParams {
  /**
   * Determines how size calculation should be performed, one of `"content"` or `"padding"`.
   * The default setting (`"content"`) interprets the width and height settings as the data
   * rectangle (plotting) dimensions, to which padding is then added. In contrast, the
   * `"padding"` setting includes the padding within the view size calculations, such that the
   * width and height settings indicate the **total** intended size of the view.
   *
   * __Default value__: `"content"`
   */
  contains?: Contains;
  /**
   * A boolean flag indicating if autosize layout should be re-calculated on every view
   * update.
   *
   * __Default value__: `false`
   */
  resize?: boolean;
  /**
   * The sizing format type. One of `"pad"`, `"fit"` or `"none"`. See the [autosize
   * type](https://vega.github.io/vega-lite/docs/size.html#autosize) documentation for
   * descriptions of each.
   *
   * __Default value__: `"pad"`
   */
  type?: AutosizeType;
}

/**
 * Determines how size calculation should be performed, one of `"content"` or `"padding"`.
 * The default setting (`"content"`) interprets the width and height settings as the data
 * rectangle (plotting) dimensions, to which padding is then added. In contrast, the
 * `"padding"` setting includes the padding within the view size calculations, such that the
 * width and height settings indicate the **total** intended size of the view.
 *
 * __Default value__: `"content"`
 */
export enum Contains {
  Content = 'content',
  Padding = 'padding'
}

/**
 * The sizing format type. One of `"pad"`, `"fit"` or `"none"`. See the [autosize
 * type](https://vega.github.io/vega-lite/docs/size.html#autosize) documentation for
 * descriptions of each.
 *
 * __Default value__: `"pad"`
 */
export enum AutosizeType {
  Fit = 'fit',
  None = 'none',
  Pad = 'pad'
}

/**
 * The bounds calculation method to use for determining the extent of a sub-plot. One of
 * `full` (the default) or `flush`.
 *
 * - If set to `full`, the entire calculated bounds (including axes, title, and legend) will
 * be used.
 * - If set to `flush`, only the specified width and height values for the sub-view will be
 * used. The `flush` setting can be useful when attempting to place sub-plots without axes
 * or legends into a uniform grid structure.
 *
 * __Default value:__ `"full"`
 */
export enum BoundsEnum {
  Flush = 'flush',
  Full = 'full'
}

export interface RowColBoolean {
  column?: boolean;
  row?: boolean;
}

/**
 * A specification of the view that gets faceted.
 *
 * A full layered plot specification, which may contains `encoding` and `projection`
 * properties that will be applied to underlying unit (single-view) specifications.
 *
 * Unit spec that can have a composite mark and row or column channels (shorthand for a
 * facet spec).
 *
 * A specification of the view that gets repeated.
 *
 * Any specification in Vega-Lite.
 *
 * Base interface for a facet specification.
 *
 * Base interface for a repeat specification.
 *
 * Base interface for a generalized concatenation specification.
 *
 * Base interface for a vertical concatenation specification.
 *
 * Base interface for a horizontal concatenation specification.
 */
export interface SpecClass {
  /**
   * An object describing the data source
   */
  data?: Data;
  /**
   * Description of this mark for commenting purpose.
   */
  description?: string;
  /**
   * A shared key-value mapping between encoding channels and definition of fields in the
   * underlying layers.
   *
   * A key-value mapping between encoding channels and definition of fields.
   */
  encoding?: Encoding;
  /**
   * The height of a visualization.
   *
   * __Default value:__
   * - If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type
   * is `"fit"` or its y-channel has a [continuous
   * scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the height will be
   * the value of
   * [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).
   * - For y-axis with a band or point scale: if
   * [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value
   * or unspecified, the height is [determined by the range step, paddings, and the
   * cardinality of the field mapped to
   * y-channel](https://vega.github.io/vega-lite/docs/scale.html#band). Otherwise, if the
   * `rangeStep` is `null`, the height will be the value of
   * [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).
   * - If no field is mapped to `y` channel, the `height` will be the value of `rangeStep`.
   *
   * __Note__: For plots with [`row` and `column`
   * channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the
   * height of a single view.
   *
   * __See also:__ The documentation for [width and
   * height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.
   */
  height?: number;
  /**
   * Layer or single view specifications to be layered.
   *
   * __Note__: Specifications inside `layer` cannot use `row` and `column` channels as
   * layering facet specifications is not allowed. Instead, use the [facet
   * operator](https://vega.github.io/vega-lite/docs/facet.html) and place a layer inside a
   * facet.
   */
  layer?: LayerSpec[];
  /**
   * Name of the visualization for later reference.
   */
  name?: string;
  /**
   * An object defining properties of the geographic projection shared by underlying layers.
   *
   * An object defining properties of geographic projection, which will be applied to `shape`
   * path for `"geoshape"` marks
   * and to `latitude` and `"longitude"` channels for other marks.
   */
  projection?: Projection;
  /**
   * Scale, axis, and legend resolutions for view composition specifications.
   */
  resolve?: Resolve;
  /**
   * Title for the plot.
   */
  title?: TitleParams | string;
  /**
   * An array of data transformations such as filter and new field calculation.
   */
  transform?: Transform[];
  /**
   * An object defining the view background's fill and stroke.
   *
   * __Default value:__ none (transparent)
   */
  view?: ViewBackground;
  /**
   * The width of a visualization.
   *
   * __Default value:__ This will be determined by the following rules:
   *
   * - If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type
   * is `"fit"` or its x-channel has a [continuous
   * scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the width will be
   * the value of
   * [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).
   * - For x-axis with a band or point scale: if
   * [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value
   * or unspecified, the width is [determined by the range step, paddings, and the cardinality
   * of the field mapped to
   * x-channel](https://vega.github.io/vega-lite/docs/scale.html#band).   Otherwise, if the
   * `rangeStep` is `null`, the width will be the value of
   * [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).
   * - If no field is mapped to `x` channel, the `width` will be the value of
   * [`config.scale.textXRangeStep`](https://vega.github.io/vega-lite/docs/size.html#default-width-and-height)
   * for `text` mark and the value of `rangeStep` for other marks.
   *
   * __Note:__ For plots with [`row` and `column`
   * channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the
   * width of a single view.
   *
   * __See also:__ The documentation for [width and
   * height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.
   */
  width?: number;
  /**
   * The alignment to apply to grid rows and columns.
   * The supported string values are `"all"`, `"each"`, and `"none"`.
   *
   * - For `"none"`, a flow layout will be used, in which adjacent subviews are simply placed
   * one after the other.
   * - For `"each"`, subviews will be aligned into a clean grid structure, but each row or
   * column may be of variable size.
   * - For `"all"`, subviews will be aligned and each row or column will be sized identically
   * based on the maximum observed size. String values for this property will be applied to
   * both grid rows and columns.
   *
   * Alternatively, an object value of the form `{"row": string, "column": string}` can be
   * used to supply different alignments for rows and columns.
   *
   * __Default value:__ `"all"`.
   */
  align?: RowColLayoutAlign | LayoutAlign;
  /**
   * The bounds calculation method to use for determining the extent of a sub-plot. One of
   * `full` (the default) or `flush`.
   *
   * - If set to `full`, the entire calculated bounds (including axes, title, and legend) will
   * be used.
   * - If set to `flush`, only the specified width and height values for the sub-view will be
   * used. The `flush` setting can be useful when attempting to place sub-plots without axes
   * or legends into a uniform grid structure.
   *
   * __Default value:__ `"full"`
   */
  bounds?: BoundsEnum;
  /**
   * Boolean flag indicating if subviews should be centered relative to their respective rows
   * or columns.
   *
   * An object value of the form `{"row": boolean, "column": boolean}` can be used to supply
   * different centering values for rows and columns.
   *
   * __Default value:__ `false`
   *
   * Boolean flag indicating if subviews should be centered relative to their respective rows
   * or columns.
   *
   * __Default value:__ `false`
   */
  center?: boolean | RowColBoolean;
  /**
   * The number of columns to include in the view composition layout.
   *
   * __Default value__: `undefined` -- An infinite number of columns (a single row) will be
   * assumed. This is equivalent to
   * `hconcat` (for `concat`) and to using the `column` channel (for `facet` and `repeat`).
   *
   * __Note__:
   *
   * 1) This property is only for:
   * - the general (wrappable) `concat` operator (not `hconcat`/`vconcat`)
   * - the `facet` and `repeat` operator with one field/repetition definition (without
   * row/column nesting)
   *
   * 2) Setting the `columns` to `1` is equivalent to `vconcat` (for `concat`) and to using
   * the `row` channel (for `facet` and `repeat`).
   */
  columns?: number;
  /**
   * A string describing the mark type (one of `"bar"`, `"circle"`, `"square"`, `"tick"`,
   * `"line"`,
   * `"area"`, `"point"`, `"rule"`, `"geoshape"`, and `"text"`) or a [mark definition
   * object](https://vega.github.io/vega-lite/docs/mark.html#mark-def).
   */
  mark?: MarkDefClass | Mark;
  /**
   * A key-value mapping between selection names and definitions.
   */
  selection?: {[key: string]: SelectionDef};
  /**
   * The spacing in pixels between sub-views of the composition operator.
   * An object of the form `{"row": number, "column": number}` can be used to set
   * different spacing values for rows and columns.
   *
   * __Default value__: Depends on `"spacing"` property of [the view composition
   * configuration](https://vega.github.io/vega-lite/docs/config.html#view-config) (`20` by
   * default)
   *
   * The spacing in pixels between sub-views of the concat operator.
   *
   * __Default value__: `10`
   */
  spacing?: RowColNumber | number;
  /**
   * Definition for how to facet the data.  One of:
   * 1) [a field definition for faceting the plot by one
   * field](https://vega.github.io/vega-lite/docs/facet.html#field-def)
   * 2) [An object that maps `row` and `column` channels to their field
   * definitions](https://vega.github.io/vega-lite/docs/facet.html#mapping)
   */
  facet?: Facet;
  /**
   * A specification of the view that gets faceted.
   *
   * A specification of the view that gets repeated.
   */
  spec?: SpecClass;
  /**
   * Definition for fields to be repeated.  One of:
   * 1) An array of fields to be repeated.  If `"repeat"` is an array, the field can be
   * referred using `{"repeat": "repeat"}`
   * 2) An object that mapped `"row"` and/or `"column"` to the listed of fields to be repeated
   * along the particular orientations. The objects `{"repeat": "row"}` and `{"repeat":
   * "column"}` can be used to refer to the repeated field respectively.
   */
  repeat?: string[] | RepeatMapping;
  /**
   * A list of views to be concatenated.
   */
  concat?: Spec[];
  /**
   * A list of views to be concatenated and put into a column.
   */
  vconcat?: Spec[];
  /**
   * A list of views to be concatenated and put into a row.
   */
  hconcat?: Spec[];
}

/**
 * A specification of the view that gets repeated.
 *
 * Any specification in Vega-Lite.
 *
 * Unit spec that can have a composite mark and row or column channels (shorthand for a
 * facet spec).
 *
 * A full layered plot specification, which may contains `encoding` and `projection`
 * properties that will be applied to underlying unit (single-view) specifications.
 *
 * Base interface for a facet specification.
 *
 * Base interface for a repeat specification.
 *
 * Base interface for a generalized concatenation specification.
 *
 * Base interface for a vertical concatenation specification.
 *
 * Base interface for a horizontal concatenation specification.
 */
export interface Spec {
  /**
   * The alignment to apply to grid rows and columns.
   * The supported string values are `"all"`, `"each"`, and `"none"`.
   *
   * - For `"none"`, a flow layout will be used, in which adjacent subviews are simply placed
   * one after the other.
   * - For `"each"`, subviews will be aligned into a clean grid structure, but each row or
   * column may be of variable size.
   * - For `"all"`, subviews will be aligned and each row or column will be sized identically
   * based on the maximum observed size. String values for this property will be applied to
   * both grid rows and columns.
   *
   * Alternatively, an object value of the form `{"row": string, "column": string}` can be
   * used to supply different alignments for rows and columns.
   *
   * __Default value:__ `"all"`.
   */
  align?: RowColLayoutAlign | LayoutAlign;
  /**
   * The bounds calculation method to use for determining the extent of a sub-plot. One of
   * `full` (the default) or `flush`.
   *
   * - If set to `full`, the entire calculated bounds (including axes, title, and legend) will
   * be used.
   * - If set to `flush`, only the specified width and height values for the sub-view will be
   * used. The `flush` setting can be useful when attempting to place sub-plots without axes
   * or legends into a uniform grid structure.
   *
   * __Default value:__ `"full"`
   */
  bounds?: BoundsEnum;
  /**
   * Boolean flag indicating if subviews should be centered relative to their respective rows
   * or columns.
   *
   * An object value of the form `{"row": boolean, "column": boolean}` can be used to supply
   * different centering values for rows and columns.
   *
   * __Default value:__ `false`
   *
   * Boolean flag indicating if subviews should be centered relative to their respective rows
   * or columns.
   *
   * __Default value:__ `false`
   */
  center?: boolean | RowColBoolean;
  /**
   * The number of columns to include in the view composition layout.
   *
   * __Default value__: `undefined` -- An infinite number of columns (a single row) will be
   * assumed. This is equivalent to
   * `hconcat` (for `concat`) and to using the `column` channel (for `facet` and `repeat`).
   *
   * __Note__:
   *
   * 1) This property is only for:
   * - the general (wrappable) `concat` operator (not `hconcat`/`vconcat`)
   * - the `facet` and `repeat` operator with one field/repetition definition (without
   * row/column nesting)
   *
   * 2) Setting the `columns` to `1` is equivalent to `vconcat` (for `concat`) and to using
   * the `row` channel (for `facet` and `repeat`).
   */
  columns?: number;
  /**
   * An object describing the data source
   */
  data?: Data;
  /**
   * Description of this mark for commenting purpose.
   */
  description?: string;
  /**
   * A key-value mapping between encoding channels and definition of fields.
   *
   * A shared key-value mapping between encoding channels and definition of fields in the
   * underlying layers.
   */
  encoding?: Encoding;
  /**
   * The height of a visualization.
   *
   * __Default value:__
   * - If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type
   * is `"fit"` or its y-channel has a [continuous
   * scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the height will be
   * the value of
   * [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).
   * - For y-axis with a band or point scale: if
   * [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value
   * or unspecified, the height is [determined by the range step, paddings, and the
   * cardinality of the field mapped to
   * y-channel](https://vega.github.io/vega-lite/docs/scale.html#band). Otherwise, if the
   * `rangeStep` is `null`, the height will be the value of
   * [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).
   * - If no field is mapped to `y` channel, the `height` will be the value of `rangeStep`.
   *
   * __Note__: For plots with [`row` and `column`
   * channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the
   * height of a single view.
   *
   * __See also:__ The documentation for [width and
   * height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.
   */
  height?: number;
  /**
   * A string describing the mark type (one of `"bar"`, `"circle"`, `"square"`, `"tick"`,
   * `"line"`,
   * `"area"`, `"point"`, `"rule"`, `"geoshape"`, and `"text"`) or a [mark definition
   * object](https://vega.github.io/vega-lite/docs/mark.html#mark-def).
   */
  mark?: MarkDefClass | Mark;
  /**
   * Name of the visualization for later reference.
   */
  name?: string;
  /**
   * An object defining properties of geographic projection, which will be applied to `shape`
   * path for `"geoshape"` marks
   * and to `latitude` and `"longitude"` channels for other marks.
   *
   * An object defining properties of the geographic projection shared by underlying layers.
   */
  projection?: Projection;
  /**
   * Scale, axis, and legend resolutions for view composition specifications.
   */
  resolve?: Resolve;
  /**
   * A key-value mapping between selection names and definitions.
   */
  selection?: {[key: string]: SelectionDef};
  /**
   * The spacing in pixels between sub-views of the composition operator.
   * An object of the form `{"row": number, "column": number}` can be used to set
   * different spacing values for rows and columns.
   *
   * __Default value__: Depends on `"spacing"` property of [the view composition
   * configuration](https://vega.github.io/vega-lite/docs/config.html#view-config) (`20` by
   * default)
   *
   * The spacing in pixels between sub-views of the concat operator.
   *
   * __Default value__: `10`
   */
  spacing?: RowColNumber | number;
  /**
   * Title for the plot.
   */
  title?: TitleParams | string;
  /**
   * An array of data transformations such as filter and new field calculation.
   */
  transform?: Transform[];
  /**
   * An object defining the view background's fill and stroke.
   *
   * __Default value:__ none (transparent)
   */
  view?: ViewBackground;
  /**
   * The width of a visualization.
   *
   * __Default value:__ This will be determined by the following rules:
   *
   * - If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type
   * is `"fit"` or its x-channel has a [continuous
   * scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the width will be
   * the value of
   * [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).
   * - For x-axis with a band or point scale: if
   * [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value
   * or unspecified, the width is [determined by the range step, paddings, and the cardinality
   * of the field mapped to
   * x-channel](https://vega.github.io/vega-lite/docs/scale.html#band).   Otherwise, if the
   * `rangeStep` is `null`, the width will be the value of
   * [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).
   * - If no field is mapped to `x` channel, the `width` will be the value of
   * [`config.scale.textXRangeStep`](https://vega.github.io/vega-lite/docs/size.html#default-width-and-height)
   * for `text` mark and the value of `rangeStep` for other marks.
   *
   * __Note:__ For plots with [`row` and `column`
   * channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the
   * width of a single view.
   *
   * __See also:__ The documentation for [width and
   * height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.
   */
  width?: number;
  /**
   * Layer or single view specifications to be layered.
   *
   * __Note__: Specifications inside `layer` cannot use `row` and `column` channels as
   * layering facet specifications is not allowed. Instead, use the [facet
   * operator](https://vega.github.io/vega-lite/docs/facet.html) and place a layer inside a
   * facet.
   */
  layer?: LayerSpec[];
  /**
   * Definition for how to facet the data.  One of:
   * 1) [a field definition for faceting the plot by one
   * field](https://vega.github.io/vega-lite/docs/facet.html#field-def)
   * 2) [An object that maps `row` and `column` channels to their field
   * definitions](https://vega.github.io/vega-lite/docs/facet.html#mapping)
   */
  facet?: Facet;
  /**
   * A specification of the view that gets faceted.
   *
   * A specification of the view that gets repeated.
   */
  spec?: SpecClass;
  /**
   * Definition for fields to be repeated.  One of:
   * 1) An array of fields to be repeated.  If `"repeat"` is an array, the field can be
   * referred using `{"repeat": "repeat"}`
   * 2) An object that mapped `"row"` and/or `"column"` to the listed of fields to be repeated
   * along the particular orientations. The objects `{"repeat": "row"}` and `{"repeat":
   * "column"}` can be used to refer to the repeated field respectively.
   */
  repeat?: string[] | RepeatMapping;
  /**
   * A list of views to be concatenated.
   */
  concat?: Spec[];
  /**
   * A list of views to be concatenated and put into a column.
   */
  vconcat?: Spec[];
  /**
   * A list of views to be concatenated and put into a row.
   */
  hconcat?: Spec[];
}

/**
 * An object describing the data source
 *
 * Secondary data source to lookup in.
 */
export interface Data {
  /**
   * An object that specifies the format for parsing the data.
   */
  format?: DataFormat;
  /**
   * Provide a placeholder name and bind data at runtime.
   */
  name?: string;
  /**
   * An URL from which to load the data set. Use the `format.type` property
   * to ensure the loaded data is correctly parsed.
   */
  url?: string;
  /**
   * The full data set, included inline. This can be an array of objects or primitive values,
   * an object, or a string.
   * Arrays of primitive values are ingested as objects with a `data` property. Strings are
   * parsed according to the specified format type.
   */
  values?: Array<boolean | number | {[key: string]: any} | string> | {[key: string]: any} | string;
  /**
   * Generate a sequence of numbers.
   */
  sequence?: SequenceParams;
  /**
   * Generate sphere GeoJSON data for the full globe.
   */
  sphere?: boolean;
  /**
   * Generate graticule GeoJSON data for geographic reference lines.
   */
  graticule?: boolean | GraticuleParams;
}

/**
 * An object that specifies the format for parsing the data.
 */
export interface DataFormat {
  /**
   * If set to `null`, disable type inference based on the spec and only use type inference
   * based on the data.
   * Alternatively, a parsing directive object can be provided for explicit data types. Each
   * property of the object corresponds to a field name, and the value to the desired data
   * type (one of `"number"`, `"boolean"`, `"date"`, or null (do not parse the field)).
   * For example, `"parse": {"modified_on": "date"}` parses the `modified_on` field in each
   * input record a Date value.
   *
   * For `"date"`, we parse data based using Javascript's
   * [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse).
   * For Specific date formats can be provided (e.g., `{foo: "date:'%m%d%Y'"}`), using the
   * [d3-time-format syntax](https://github.com/d3/d3-time-format#locale_format). UTC date
   * format parsing is supported similarly (e.g., `{foo: "utc:'%m%d%Y'"}`). See more about
   * [UTC time](https://vega.github.io/vega-lite/docs/timeunit.html#utc)
   */
  parse?: {[key: string]: null | string} | null;
  /**
   * Type of input data: `"json"`, `"csv"`, `"tsv"`, `"dsv"`.
   *
   * __Default value:__  The default format type is determined by the extension of the file
   * URL.
   * If no extension is detected, `"json"` will be used by default.
   */
  type?: DataFormatType;
  /**
   * The delimiter between records. The delimiter must be a single character (i.e., a single
   * 16-bit code unit); so, ASCII delimiters are fine, but emoji delimiters are not.
   */
  delimiter?: string;
  /**
   * The JSON property containing the desired data.
   * This parameter can be used when the loaded JSON file may have surrounding structure or
   * meta-data.
   * For example `"property": "values.features"` is equivalent to retrieving
   * `json.values.features`
   * from the loaded JSON object.
   */
  property?: string;
  /**
   * The name of the TopoJSON object set to convert to a GeoJSON feature collection.
   * For example, in a map of the world, there may be an object set named `"countries"`.
   * Using the feature property, we can extract this set and generate a GeoJSON feature object
   * for each country.
   */
  feature?: string;
  /**
   * The name of the TopoJSON object set to convert to mesh.
   * Similar to the `feature` option, `mesh` extracts a named TopoJSON object set.
   * Unlike the `feature` option, the corresponding geo data is returned as a single, unified
   * mesh instance, not as individual GeoJSON features.
   * Extracting a mesh is useful for more efficiently drawing borders or other geographic
   * elements that you do not need to associate with specific regions such as individual
   * countries, states or counties.
   */
  mesh?: string;
}

/**
 * Type of input data: `"json"`, `"csv"`, `"tsv"`, `"dsv"`.
 *
 * __Default value:__  The default format type is determined by the extension of the file
 * URL.
 * If no extension is detected, `"json"` will be used by default.
 */
export enum DataFormatType {
  Csv = 'csv',
  Dsv = 'dsv',
  Json = 'json',
  Topojson = 'topojson',
  Tsv = 'tsv'
}

export interface GraticuleParams {
  /**
   * Sets both the major and minor extents to the same values.
   */
  extent?: number[][];
  /**
   * The major extent of the graticule as a two-element array of coordinates.
   */
  extentMajor?: number[][];
  /**
   * The minor extent of the graticule as a two-element array of coordinates.
   */
  extentMinor?: number[][];
  /**
   * The precision of the graticule in degrees.
   *
   * __Default value:__ `2.5`
   */
  precision?: number;
  /**
   * Sets both the major and minor step angles to the same values.
   */
  step?: number[];
  /**
   * The major step angles of the graticule.
   *
   *
   * __Default value:__ `[90, 360]`
   */
  stepMajor?: number[];
  /**
   * The minor step angles of the graticule.
   *
   * __Default value:__ `[10, 10]`
   */
  stepMinor?: number[];
}

/**
 * Generate a sequence of numbers.
 */
export interface SequenceParams {
  /**
   * The name of the generated sequence field.
   *
   * __Default value:__ `"data"`
   */
  as?: string;
  /**
   * The starting value of the sequence (inclusive).
   */
  start: number;
  /**
   * The step value between sequence entries.
   *
   * __Default value:__ `1`
   */
  step?: number;
  /**
   * The ending value of the sequence (exclusive).
   */
  stop: number;
}

/**
 * A key-value mapping between encoding channels and definition of fields.
 *
 * A shared key-value mapping between encoding channels and definition of fields in the
 * underlying layers.
 */
export interface Encoding {
  /**
   * Color of the marks – either fill or stroke color based on  the `filled` property of mark
   * definition.
   * By default, `color` represents fill color for `"area"`, `"bar"`, `"tick"`,
   * `"text"`, `"trail"`, `"circle"`, and `"square"` / stroke color for `"line"` and
   * `"point"`.
   *
   * __Default value:__ If undefined, the default color depends on [mark
   * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `color` property.
   *
   * _Note:_
   * 1) For fine-grained control over both fill and stroke colors of the marks, please use the
   * `fill` and `stroke` channels.  If either `fill` or `stroke` channel is specified, `color`
   * channel will be ignored.
   * 2) See the scale documentation for more information about customizing [color
   * scheme](https://vega.github.io/vega-lite/docs/scale.html#scheme).
   */
  color?: ValueDefWithConditionMarkPropFieldDefStringNull;
  /**
   * A field definition for the horizontal facet of trellis plots.
   */
  column?: FacetFieldDef;
  /**
   * Additional levels of detail for grouping data in aggregate views and
   * in line, trail, and area marks without mapping data to a specific visual channel.
   */
  detail?: TypedFieldDef[] | TypedFieldDef;
  /**
   * A field definition for the (flexible) facet of trellis plots.
   *
   * If either `row` or `column` is specified, this channel will be ignored.
   */
  facet?: FacetFieldDef;
  /**
   * Fill color of the marks.
   * __Default value:__ If undefined, the default color depends on [mark
   * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `color` property.
   *
   * _Note:_ When using `fill` channel, `color ` channel will be ignored. To customize both
   * fill and stroke, please use `fill` and `stroke` channels (not `fill` and `color`).
   */
  fill?: ValueDefWithConditionMarkPropFieldDefStringNull;
  /**
   * Fill opacity of the marks.
   *
   * __Default value:__ If undefined, the default opacity depends on [mark
   * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `fillOpacity` property.
   */
  fillOpacity?: ValueDefWithConditionMarkPropFieldDefNumber;
  /**
   * A URL to load upon mouse click.
   */
  href?: ValueDefWithConditionTextFieldDefValue;
  /**
   * A data field to use as a unique key for data binding. When a visualization’s data is
   * updated, the key value will be used to match data elements to existing mark instances.
   * Use a key channel to enable object constancy for transitions over dynamic data.
   */
  key?: TypedFieldDef;
  /**
   * Latitude position of geographically projected marks.
   */
  latitude?: LatitudeClass;
  /**
   * Latitude-2 position for geographically projected ranged `"area"`, `"bar"`, `"rect"`, and
   * `"rule"`.
   */
  latitude2?: Latitude2Class;
  /**
   * Longitude position of geographically projected marks.
   */
  longitude?: LatitudeClass;
  /**
   * Longitude-2 position for geographically projected ranged `"area"`, `"bar"`, `"rect"`,
   * and  `"rule"`.
   */
  longitude2?: Latitude2Class;
  /**
   * Opacity of the marks.
   *
   * __Default value:__ If undefined, the default opacity depends on [mark
   * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `opacity` property.
   */
  opacity?: ValueDefWithConditionMarkPropFieldDefNumber;
  /**
   * Order of the marks.
   * - For stacked marks, this `order` channel encodes [stack
   * order](https://vega.github.io/vega-lite/docs/stack.html#order).
   * - For line and trail marks, this `order` channel encodes order of data points in the
   * lines. This can be useful for creating [a connected
   * scatterplot](https://vega.github.io/vega-lite/examples/connected_scatterplot.html).
   * Setting `order` to `{"value": null}` makes the line marks use the original order in the
   * data sources.
   * - Otherwise, this `order` channel encodes layer order of the marks.
   *
   * __Note__: In aggregate plots, `order` field should be `aggregate`d to avoid creating
   * additional aggregation grouping.
   */
  order?: OrderFieldDef[] | OrderFieldDefClass;
  /**
   * A field definition for the vertical facet of trellis plots.
   */
  row?: FacetFieldDef;
  /**
   * Shape of the mark.
   *
   * 1. For `point` marks the supported values include:
   * - plotting shapes: `"circle"`, `"square"`, `"cross"`, `"diamond"`, `"triangle-up"`,
   * `"triangle-down"`, `"triangle-right"`, or `"triangle-left"`.
   * - the line symbol `"stroke"`
   * - centered directional shapes `"arrow"`, `"wedge"`, or `"triangle"`
   * - a custom [SVG path
   * string](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) (For correct
   * sizing, custom shape paths should be defined within a square bounding box with
   * coordinates ranging from -1 to 1 along both the x and y dimensions.)
   *
   * 2. For `geoshape` marks it should be a field definition of the geojson data
   *
   * __Default value:__ If undefined, the default shape depends on [mark
   * config](https://vega.github.io/vega-lite/docs/config.html#point-config)'s `shape`
   * property. (`"circle"` if unset.)
   */
  shape?: ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull;
  /**
   * Size of the mark.
   * - For `"point"`, `"square"` and `"circle"`, – the symbol size, or pixel area of the mark.
   * - For `"bar"` and `"tick"` – the bar and tick's size.
   * - For `"text"` – the text's font size.
   * - Size is unsupported for `"line"`, `"area"`, and `"rect"`. (Use `"trail"` instead of
   * line with varying size)
   */
  size?: ValueDefWithConditionMarkPropFieldDefNumber;
  /**
   * Stroke color of the marks.
   * __Default value:__ If undefined, the default color depends on [mark
   * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `color` property.
   *
   * _Note:_ When using `stroke` channel, `color ` channel will be ignored. To customize both
   * stroke and fill, please use `stroke` and `fill` channels (not `stroke` and `color`).
   */
  stroke?: ValueDefWithConditionMarkPropFieldDefStringNull;
  /**
   * Stroke opacity of the marks.
   *
   * __Default value:__ If undefined, the default opacity depends on [mark
   * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `strokeOpacity`
   * property.
   */
  strokeOpacity?: ValueDefWithConditionMarkPropFieldDefNumber;
  /**
   * Stroke width of the marks.
   *
   * __Default value:__ If undefined, the default stroke width depends on [mark
   * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `strokeWidth` property.
   */
  strokeWidth?: ValueDefWithConditionMarkPropFieldDefNumber;
  /**
   * Text of the `text` mark.
   */
  text?: ValueDefWithConditionTextFieldDefValue;
  /**
   * The tooltip text to show upon mouse hover.
   */
  tooltip?: TextFieldDef[] | FieldDefWithConditionTextFieldDefValue | null;
  /**
   * X coordinates of the marks, or width of horizontal `"bar"` and `"area"` without `x2`.
   *
   * The `value` of this channel can be a number or a string `"width"`.
   */
  x?: XClass;
  /**
   * X2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   *
   * The `value` of this channel can be a number or a string `"width"`.
   */
  x2?: X2Class;
  /**
   * Error value of x coordinates for error specified `"errorbar"` and `"errorband"`.
   */
  xError?: Latitude2Class;
  /**
   * Secondary error value of x coordinates for error specified `"errorbar"` and `"errorband"`.
   */
  xError2?: Latitude2Class;
  /**
   * Y coordinates of the marks, or height of vertical `"bar"` and `"area"` without `y2`
   *
   * The `value` of this channel can be a number or a string `"height"`.
   */
  y?: YClass;
  /**
   * Y2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   *
   * The `value` of this channel can be a number or a string `"height"`.
   */
  y2?: Y2Class;
  /**
   * Error value of y coordinates for error specified `"errorbar"` and `"errorband"`.
   */
  yError?: Latitude2Class;
  /**
   * Secondary error value of y coordinates for error specified `"errorbar"` and `"errorband"`.
   */
  yError2?: Latitude2Class;
}

/**
 * Color of the marks – either fill or stroke color based on  the `filled` property of mark
 * definition.
 * By default, `color` represents fill color for `"area"`, `"bar"`, `"tick"`,
 * `"text"`, `"trail"`, `"circle"`, and `"square"` / stroke color for `"line"` and
 * `"point"`.
 *
 * __Default value:__ If undefined, the default color depends on [mark
 * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `color` property.
 *
 * _Note:_
 * 1) For fine-grained control over both fill and stroke colors of the marks, please use the
 * `fill` and `stroke` channels.  If either `fill` or `stroke` channel is specified, `color`
 * channel will be ignored.
 * 2) See the scale documentation for more information about customizing [color
 * scheme](https://vega.github.io/vega-lite/docs/scale.html#scheme).
 *
 * Fill color of the marks.
 * __Default value:__ If undefined, the default color depends on [mark
 * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `color` property.
 *
 * _Note:_ When using `fill` channel, `color ` channel will be ignored. To customize both
 * fill and stroke, please use `fill` and `stroke` channels (not `fill` and `color`).
 *
 * Stroke color of the marks.
 * __Default value:__ If undefined, the default color depends on [mark
 * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `color` property.
 *
 * _Note:_ When using `stroke` channel, `color ` channel will be ignored. To customize both
 * stroke and fill, please use `stroke` and `fill` channels (not `stroke` and `color`).
 *
 * A FieldDef with Condition<ValueDef>
 * {
 * condition: {value: ...},
 * field: ...,
 * ...
 * }
 *
 * A ValueDef with optional Condition<ValueDef | FieldDef>
 * {
 * condition: {field: ...} | {value: ...},
 * value: ...,
 * }
 *
 * A Condition<ValueDef | FieldDef> only definition.
 * {
 * condition: {field: ...} | {value: ...}
 * }
 */
export interface ValueDefWithConditionMarkPropFieldDefStringNull {
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: boolean | BinParams | null;
  /**
   * One or more value definition(s) with [a selection or a test
   * predicate](https://vega.github.io/vega-lite/docs/condition.html).
   *
   * __Note:__ A field definition's `condition` property can only contain [conditional value
   * definitions](https://vega.github.io/vega-lite/docs/condition.html#value)
   * since Vega-Lite only allows at most one encoded field per encoding channel.
   *
   * A field definition or one or more value definition(s) with a selection predicate.
   */
  condition?: PurpleConditionalValueDef[] | ConditionalPredicateStringValueDefClass;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * An object defining properties of the legend.
   * If `null`, the legend for the encoding channel will be removed.
   *
   * __Default value:__ If undefined, default [legend
   * properties](https://vega.github.io/vega-lite/docs/legend.html) are applied.
   */
  legend?: Legend | null;
  /**
   * An object defining properties of the channel's scale, which is the function that
   * transforms values in the data domain (numbers, dates, strings, etc) to visual values
   * (pixels, colors, sizes) of the encoding channels.
   *
   * If `null`, the scale will be [disabled and the data value will be directly
   * encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).
   *
   * __Default value:__ If undefined, default [scale
   * properties](https://vega.github.io/vega-lite/docs/scale.html) are applied.
   */
  scale?: Scale | null;
  /**
   * Sort order for the encoded field.
   *
   * For continuous fields (quantitative or temporal), `sort` can be either `"ascending"` or
   * `"descending"`.
   *
   * For discrete fields, `sort` can be one of the following:
   * - `"ascending"` or `"descending"` -- for sorting by the values' natural order in
   * Javascript.
   * - [A sort-by-encoding
   * definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) for sorting
   * by another encoding channel. (This type of sort definition is not available for `row` and
   * `column` channels.)
   * - [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field)
   * for sorting by another field.
   * - [An array specifying the field values in preferred
   * order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the
   * sort order will obey the values in the array, followed by any unspecified values in their
   * original order.  For discrete time field, values in the sort array can be [date-time
   * definition objects](types#datetime). In addition, for time units `"month"` and `"day"`,
   * the values can be the month or day names (case insensitive) or their 3-letter initials
   * (e.g., `"Mon"`, `"Tue"`).
   * - `null` indicating no sort.
   *
   * __Default value:__ `"ascending"`
   *
   * __Note:__ `null` is not supported for `row` and `column`.
   */
  sort?: Array<boolean | DateTime | number | string> | EncodingSortField | SortOrder | null;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
   * `"nominal"`).
   * It can also be a `"geojson"` type for encoding
   * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
   *
   *
   * __Note:__
   *
   * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
   * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
   * `1552199579097`).
   * - Data `type` describes the semantics of the data rather than the primitive data types
   * (`number`, `string`, etc.). The same primitive data type can have different types of
   * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
   * data.
   * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
   * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
   * (for using an ordinal bin
   * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
   * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
   * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
   * the `type` property refers to the post-aggregation data type. For example, we can
   * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
   * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
   * output is `"quantitative"`.
   * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
   * have exactly the same type as their primary channels (e.g., `x`, `y`).
   */
  type?: StandardType;
  /**
   * A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between
   * `0` to `1` for opacity).
   */
  value?: null | string;
}

export interface ArgmDef {
  argmax?: string;
  argmin?: string;
}

/**
 * An [aggregate operation](https://vega.github.io/vega-lite/docs/aggregate.html#ops) to
 * perform on the field prior to sorting (e.g., `"count"`, `"mean"` and `"median"`).
 * An aggregation is required when there are multiple values of the sort field for each
 * encoded data field.
 * The input data objects will be aggregated, grouped by the encoded data field.
 *
 * For a full list of operations, please see the documentation for
 * [aggregate](https://vega.github.io/vega-lite/docs/aggregate.html#ops).
 *
 * __Default value:__ `"sum"` for stacked plots. Otherwise, `"mean"`.
 *
 * The aggregation operation to apply to the fields (e.g., sum, average or count).
 * See the [full list of supported aggregation
 * operations](https://vega.github.io/vega-lite/docs/aggregate.html#ops)
 * for more information.
 *
 * The aggregation operation to apply (e.g., sum, average or count). See the list of all
 * supported operations [here](https://vega.github.io/vega-lite/docs/aggregate.html#ops).
 */
export enum AggregateOp {
  Argmax = 'argmax',
  Argmin = 'argmin',
  Average = 'average',
  Ci0 = 'ci0',
  Ci1 = 'ci1',
  Count = 'count',
  Distinct = 'distinct',
  Max = 'max',
  Mean = 'mean',
  Median = 'median',
  Min = 'min',
  Missing = 'missing',
  Q1 = 'q1',
  Q3 = 'q3',
  Stderr = 'stderr',
  Stdev = 'stdev',
  Stdevp = 'stdevp',
  Sum = 'sum',
  Valid = 'valid',
  Values = 'values',
  Variance = 'variance',
  Variancep = 'variancep'
}

/**
 * Binning properties or boolean flag for determining whether to bin data or not.
 */
export interface BinParams {
  /**
   * A value in the binned domain at which to anchor the bins, shifting the bin boundaries if
   * necessary to ensure that a boundary aligns with the anchor value.
   *
   * __Default Value:__ the minimum bin extent value
   */
  anchor?: number;
  /**
   * The number base to use for automatic bin determination (default is base 10).
   *
   * __Default value:__ `10`
   */
  base?: number;
  /**
   * When set to true, Vega-Lite treats the input data as already binned.
   */
  binned?: boolean;
  /**
   * Scale factors indicating allowable subdivisions. The default value is [5, 2], which
   * indicates that for base 10 numbers (the default base), the method may consider dividing
   * bin sizes by 5 and/or 2. For example, for an initial step size of 10, the method can
   * check if bin sizes of 2 (= 10/5), 5 (= 10/2), or 1 (= 10/(5*2)) might also satisfy the
   * given constraints.
   *
   * __Default value:__ `[5, 2]`
   */
  divide?: number[];
  /**
   * A two-element (`[min, max]`) array indicating the range of desired bin values.
   */
  extent?: number[];
  /**
   * Maximum number of bins.
   *
   * __Default value:__ `6` for `row`, `column` and `shape` channels; `10` for other channels
   */
  maxbins?: number;
  /**
   * A minimum allowable step size (particularly useful for integer values).
   */
  minstep?: number;
  /**
   * If true (the default), attempts to make the bin boundaries use human-friendly boundaries,
   * such as multiples of ten.
   */
  nice?: boolean;
  /**
   * An exact step size to use between bins.
   *
   * __Note:__ If provided, options such as maxbins will be ignored.
   */
  step?: number;
  /**
   * An array of allowable step sizes to choose from.
   */
  steps?: number[];
}

export interface PurpleConditionalValueDef {
  /**
   * Predicate for triggering the condition
   */
  test?: Predicate | string;
  /**
   * A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between
   * `0` to `1` for opacity).
   */
  value: boolean | number | null | string;
  /**
   * A [selection name](https://vega.github.io/vega-lite/docs/selection.html), or a series of
   * [composed selections](https://vega.github.io/vega-lite/docs/selection.html#compose).
   */
  selection?: Selection | string;
}

export interface Selection {
  not?: Selection | string;
  and?: Array<Selection | string>;
  or?: Array<Selection | string>;
}

export interface Predicate {
  not?: Predicate | string;
  and?: Array<Predicate | string>;
  or?: Array<Predicate | string>;
  /**
   * The value that the field should be equal to.
   */
  equal?: boolean | DateTime | number | string;
  /**
   * Field to be filtered.
   */
  field?: string;
  /**
   * Time unit for the field to be filtered.
   */
  timeUnit?: TimeUnit;
  /**
   * An array of inclusive minimum and maximum values
   * for a field value of a data item to be included in the filtered data.
   */
  range?: Array<DateTime | number | null>;
  /**
   * A set of values that the `field`'s value should be a member of,
   * for a data item included in the filtered data.
   */
  oneOf?: Array<boolean | DateTime | number | string>;
  /**
   * The value that the field should be less than.
   */
  lt?: DateTime | number | string;
  /**
   * The value that the field should be greater than.
   */
  gt?: DateTime | number | string;
  /**
   * The value that the field should be less than or equals to.
   */
  lte?: DateTime | number | string;
  /**
   * The value that the field should be greater than or equals to.
   */
  gte?: DateTime | number | string;
  /**
   * If set to true the field's value has to be valid, meaning both not `null` and not
   * [`NaN`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN).
   */
  valid?: boolean;
  /**
   * Filter using a selection name.
   */
  selection?: Selection | string;
}

/**
 * Object for defining datetime in Vega-Lite Filter.
 * If both month and quarter are provided, month has higher precedence.
 * `day` cannot be combined with other date.
 * We accept string for month and day names.
 */
export interface DateTime {
  /**
   * Integer value representing the date from 1-31.
   */
  date?: number;
  /**
   * Value representing the day of a week.  This can be one of: (1) integer value -- `1`
   * represents Monday; (2) case-insensitive day name (e.g., `"Monday"`);  (3)
   * case-insensitive, 3-character short day name (e.g., `"Mon"`).   <br/> **Warning:** A
   * DateTime definition object with `day`** should not be combined with `year`, `quarter`,
   * `month`, or `date`.
   */
  day?: number | string;
  /**
   * Integer value representing the hour of a day from 0-23.
   */
  hours?: number;
  /**
   * Integer value representing the millisecond segment of time.
   */
  milliseconds?: number;
  /**
   * Integer value representing the minute segment of time from 0-59.
   */
  minutes?: number;
  /**
   * One of: (1) integer value representing the month from `1`-`12`. `1` represents January;
   * (2) case-insensitive month name (e.g., `"January"`);  (3) case-insensitive, 3-character
   * short month name (e.g., `"Jan"`).
   */
  month?: number | string;
  /**
   * Integer value representing the quarter of the year (from 1-4).
   */
  quarter?: number;
  /**
   * Integer value representing the second segment (0-59) of a time value
   */
  seconds?: number;
  /**
   * A boolean flag indicating if date time is in utc time. If false, the date time is in
   * local time
   */
  utc?: boolean;
  /**
   * Integer value representing the year.
   */
  year?: number;
}

/**
 * Time unit for the field to be filtered.
 *
 * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
 * or [a temporal field that gets casted as
 * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
 *
 * __Default value:__ `undefined` (None)
 *
 * The timeUnit.
 */
export enum TimeUnit {
  Date = 'date',
  Day = 'day',
  Hours = 'hours',
  Hoursminutes = 'hoursminutes',
  Hoursminutesseconds = 'hoursminutesseconds',
  Milliseconds = 'milliseconds',
  Minutes = 'minutes',
  Minutesseconds = 'minutesseconds',
  Month = 'month',
  Monthdate = 'monthdate',
  Monthdatehours = 'monthdatehours',
  Quarter = 'quarter',
  Quartermonth = 'quartermonth',
  Seconds = 'seconds',
  Secondsmilliseconds = 'secondsmilliseconds',
  Utcdate = 'utcdate',
  Utcday = 'utcday',
  Utchours = 'utchours',
  Utchoursminutes = 'utchoursminutes',
  Utchoursminutesseconds = 'utchoursminutesseconds',
  Utcmilliseconds = 'utcmilliseconds',
  Utcminutes = 'utcminutes',
  Utcminutesseconds = 'utcminutesseconds',
  Utcmonth = 'utcmonth',
  Utcmonthdate = 'utcmonthdate',
  Utcmonthdatehours = 'utcmonthdatehours',
  Utcquarter = 'utcquarter',
  Utcquartermonth = 'utcquartermonth',
  Utcseconds = 'utcseconds',
  Utcsecondsmilliseconds = 'utcsecondsmilliseconds',
  Utcyear = 'utcyear',
  Utcyearmonth = 'utcyearmonth',
  Utcyearmonthdate = 'utcyearmonthdate',
  Utcyearmonthdatehours = 'utcyearmonthdatehours',
  Utcyearmonthdatehoursminutes = 'utcyearmonthdatehoursminutes',
  Utcyearmonthdatehoursminutesseconds = 'utcyearmonthdatehoursminutesseconds',
  Utcyearquarter = 'utcyearquarter',
  Utcyearquartermonth = 'utcyearquartermonth',
  Year = 'year',
  Yearmonth = 'yearmonth',
  Yearmonthdate = 'yearmonthdate',
  Yearmonthdatehours = 'yearmonthdatehours',
  Yearmonthdatehoursminutes = 'yearmonthdatehoursminutes',
  Yearmonthdatehoursminutesseconds = 'yearmonthdatehoursminutesseconds',
  Yearquarter = 'yearquarter',
  Yearquartermonth = 'yearquartermonth'
}

export interface ConditionalPredicateStringValueDefClass {
  /**
   * Predicate for triggering the condition
   */
  test?: Predicate | string;
  /**
   * A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between
   * `0` to `1` for opacity).
   */
  value?: boolean | number | null | string;
  /**
   * A [selection name](https://vega.github.io/vega-lite/docs/selection.html), or a series of
   * [composed selections](https://vega.github.io/vega-lite/docs/selection.html#compose).
   */
  selection?: Selection | string;
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: boolean | BinParams | null;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * An object defining properties of the legend.
   * If `null`, the legend for the encoding channel will be removed.
   *
   * __Default value:__ If undefined, default [legend
   * properties](https://vega.github.io/vega-lite/docs/legend.html) are applied.
   */
  legend?: Legend | null;
  /**
   * An object defining properties of the channel's scale, which is the function that
   * transforms values in the data domain (numbers, dates, strings, etc) to visual values
   * (pixels, colors, sizes) of the encoding channels.
   *
   * If `null`, the scale will be [disabled and the data value will be directly
   * encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).
   *
   * __Default value:__ If undefined, default [scale
   * properties](https://vega.github.io/vega-lite/docs/scale.html) are applied.
   */
  scale?: Scale | null;
  /**
   * Sort order for the encoded field.
   *
   * For continuous fields (quantitative or temporal), `sort` can be either `"ascending"` or
   * `"descending"`.
   *
   * For discrete fields, `sort` can be one of the following:
   * - `"ascending"` or `"descending"` -- for sorting by the values' natural order in
   * Javascript.
   * - [A sort-by-encoding
   * definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) for sorting
   * by another encoding channel. (This type of sort definition is not available for `row` and
   * `column` channels.)
   * - [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field)
   * for sorting by another field.
   * - [An array specifying the field values in preferred
   * order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the
   * sort order will obey the values in the array, followed by any unspecified values in their
   * original order.  For discrete time field, values in the sort array can be [date-time
   * definition objects](types#datetime). In addition, for time units `"month"` and `"day"`,
   * the values can be the month or day names (case insensitive) or their 3-letter initials
   * (e.g., `"Mon"`, `"Tue"`).
   * - `null` indicating no sort.
   *
   * __Default value:__ `"ascending"`
   *
   * __Note:__ `null` is not supported for `row` and `column`.
   */
  sort?: Array<boolean | DateTime | number | string> | EncodingSortField | SortOrder | null;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
   * `"nominal"`).
   * It can also be a `"geojson"` type for encoding
   * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
   *
   *
   * __Note:__
   *
   * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
   * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
   * `1552199579097`).
   * - Data `type` describes the semantics of the data rather than the primitive data types
   * (`number`, `string`, etc.). The same primitive data type can have different types of
   * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
   * data.
   * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
   * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
   * (for using an ordinal bin
   * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
   * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
   * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
   * the `type` property refers to the post-aggregation data type. For example, we can
   * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
   * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
   * output is `"quantitative"`.
   * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
   * have exactly the same type as their primary channels (e.g., `x`, `y`).
   */
  type?: StandardType;
}

/**
 * Reference to a repeated value.
 */
export interface RepeatRef {
  repeat: RepeatEnum;
}

export enum RepeatEnum {
  Column = 'column',
  Repeat = 'repeat',
  Row = 'row'
}

/**
 * Properties of a legend or boolean flag for determining whether to show it.
 */
export interface Legend {
  /**
   * The height in pixels to clip symbol legend entries and limit their size.
   */
  clipHeight?: number;
  /**
   * The horizontal padding in pixels between symbol legend entries.
   *
   * __Default value:__ `10`.
   */
  columnPadding?: number;
  /**
   * The number of columns in which to arrange symbol legend entries. A value of `0` or lower
   * indicates a single row with one column per entry.
   */
  columns?: number;
  /**
   * Corner radius for the full legend.
   */
  cornerRadius?: number;
  /**
   * The direction of the legend, one of `"vertical"` or `"horizontal"`.
   *
   * __Default value:__
   * - For top-/bottom-`orient`ed legends, `"horizontal"`
   * - For left-/right-`orient`ed legends, `"vertical"`
   * - For top/bottom-left/right-`orient`ed legends, `"horizontal"` for gradient legends and
   * `"vertical"` for symbol legends.
   */
  direction?: Orientation;
  /**
   * Background fill color for the full legend.
   */
  fillColor?: string;
  /**
   * The text formatting pattern for labels of guides (axes, legends, headers) and text
   * marks.
   *
   * - If the format type is `"number"` (e.g., for quantitative fields), this is D3's [number
   * format pattern](https://github.com/d3/d3-format#locale_format).
   * - If the format type is `"time"` (e.g., for temporal fields), this is D3's [time format
   * pattern](https://github.com/d3/d3-time-format#locale_format).
   *
   * See the [format documentation](https://vega.github.io/vega-lite/docs/format.html) for
   * more examples.
   *
   * __Default value:__  Derived from
   * [numberFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for
   * number format and from
   * [timeFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for time
   * format.
   */
  format?: string;
  /**
   * The format type for labels (`"number"` or `"time"`).
   *
   * __Default value:__
   * - `"time"` for temporal fields and ordinal and nomimal fields with `timeUnit`.
   * - `"number"` for quantitative fields as well as ordinal and nomimal fields without
   * `timeUnit`.
   */
  formatType?: FormatType;
  /**
   * The length in pixels of the primary axis of a color gradient. This value corresponds to
   * the height of a vertical gradient or the width of a horizontal gradient.
   *
   * __Default value:__ `200`.
   */
  gradientLength?: number;
  /**
   * Opacity of the color gradient.
   */
  gradientOpacity?: number;
  /**
   * The color of the gradient stroke, can be in hex color code or regular color name.
   *
   * __Default value:__ `"lightGray"`.
   */
  gradientStrokeColor?: string;
  /**
   * The width of the gradient stroke, in pixels.
   *
   * __Default value:__ `0`.
   */
  gradientStrokeWidth?: number;
  /**
   * The thickness in pixels of the color gradient. This value corresponds to the width of a
   * vertical gradient or the height of a horizontal gradient.
   *
   * __Default value:__ `16`.
   */
  gradientThickness?: number;
  /**
   * The alignment to apply to symbol legends rows and columns. The supported string values
   * are `"all"`, `"each"` (the default), and `none`. For more information, see the [grid
   * layout documentation](https://vega.github.io/vega/docs/layout).
   *
   * __Default value:__ `"each"`.
   */
  gridAlign?: LayoutAlign;
  /**
   * The alignment of the legend label, can be left, center, or right.
   */
  labelAlign?: Align;
  /**
   * The position of the baseline of legend label, can be `"top"`, `"middle"`, `"bottom"`, or
   * `"alphabetic"`.
   *
   * __Default value:__ `"middle"`.
   */
  labelBaseline?: TextBaseline;
  /**
   * The color of the legend label, can be in hex color code or regular color name.
   */
  labelColor?: string;
  /**
   * The font of the legend label.
   */
  labelFont?: string;
  /**
   * The font size of legend label.
   *
   * __Default value:__ `10`.
   */
  labelFontSize?: number;
  /**
   * The font style of legend label.
   */
  labelFontStyle?: string;
  /**
   * The font weight of legend label.
   */
  labelFontWeight?: number | FontWeightEnum;
  /**
   * Maximum allowed pixel width of axis tick labels.
   *
   * __Default value:__ `160`.
   */
  labelLimit?: number;
  /**
   * The offset of the legend label.
   */
  labelOffset?: number;
  /**
   * Opacity of labels.
   */
  labelOpacity?: number;
  /**
   * The strategy to use for resolving overlap of labels in gradient legends. If `false`, no
   * overlap reduction is attempted. If set to `true` (default) or `"parity"`, a strategy of
   * removing every other label is used. If set to `"greedy"`, a linear scan of the labels is
   * performed, removing any label that overlaps with the last visible label (this often works
   * better for log-scaled axes).
   *
   * __Default value:__ `true`.
   */
  labelOverlap?: boolean | LabelOverlapEnum;
  /**
   * Padding in pixels between the legend and legend labels.
   */
  labelPadding?: number;
  /**
   * The minimum separation that must be between label bounding boxes for them to be
   * considered non-overlapping (default `0`). This property is ignored if *labelOverlap*
   * resolution is not enabled.
   */
  labelSeparation?: number;
  /**
   * Custom x-position for legend with orient "none".
   */
  legendX?: number;
  /**
   * Custom y-position for legend with orient "none".
   */
  legendY?: number;
  /**
   * The offset in pixels by which to displace the legend from the data rectangle and axes.
   *
   * __Default value:__ `18`.
   */
  offset?: number;
  /**
   * The orientation of the legend, which determines how the legend is positioned within the
   * scene. One of `"left"`, `"right"`, `"top-left"`, `"top-right"`, `"bottom-left"`,
   * `"bottom-right"`, `"none"`.
   *
   * __Default value:__ `"right"`
   */
  orient?: LegendOrient;
  /**
   * The padding between the border and content of the legend group.
   *
   * __Default value:__ `0`.
   */
  padding?: number;
  /**
   * The vertical padding in pixels between symbol legend entries.
   *
   * __Default value:__ `2`.
   */
  rowPadding?: number;
  /**
   * Border stroke color for the full legend.
   */
  strokeColor?: string;
  /**
   * An array of alternating [stroke, space] lengths for dashed symbol strokes.
   */
  symbolDash?: number[];
  /**
   * The pixel offset at which to start drawing with the symbol stroke dash array.
   */
  symbolDashOffset?: number;
  /**
   * The color of the legend symbol,
   */
  symbolFillColor?: string;
  /**
   * Horizontal pixel offset for legend symbols.
   *
   * __Default value:__ `0`.
   */
  symbolOffset?: number;
  /**
   * Opacity of the legend symbols.
   */
  symbolOpacity?: number;
  /**
   * The size of the legend symbol, in pixels.
   *
   * __Default value:__ `100`.
   */
  symbolSize?: number;
  /**
   * Stroke color for legend symbols.
   */
  symbolStrokeColor?: string;
  /**
   * The width of the symbol's stroke.
   *
   * __Default value:__ `1.5`.
   */
  symbolStrokeWidth?: number;
  /**
   * Default shape type (such as "circle") for legend symbols.
   * Can be one of ``"circle"`, `"square"`, `"cross"`, `"diamond"`, `"triangle-up"`,
   * `"triangle-down"`, `"triangle-right"`, or `"triangle-left"`.
   * * In addition to a set of built-in shapes, custom shapes can be defined using [SVG path
   * strings](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths).
   * *
   * * __Default value:__ `"circle"`.
   * *
   */
  symbolType?: string;
  /**
   * The desired number of tick values for quantitative legends.
   */
  tickCount?: number;
  /**
   * The minimum desired step between legend ticks, in terms of scale domain values. For
   * example, a value of `1` indicates that ticks should not be less than 1 unit apart. If
   * `tickMinStep` is specified, the `tickCount` value will be adjusted, if necessary, to
   * enforce the minimum step value.
   *
   * __Default value__: `undefined`
   */
  tickMinStep?: number;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * Horizontal text alignment for legend titles.
   *
   * __Default value:__ `"left"`.
   */
  titleAlign?: Align;
  /**
   * Text anchor position for placing legend titles.
   */
  titleAnchor?: TitleAnchor | null;
  /**
   * Vertical text baseline for legend titles.
   *
   * __Default value:__ `"top"`.
   */
  titleBaseline?: TextBaseline;
  /**
   * The color of the legend title, can be in hex color code or regular color name.
   */
  titleColor?: string;
  /**
   * The font of the legend title.
   */
  titleFont?: string;
  /**
   * The font size of the legend title.
   */
  titleFontSize?: number;
  /**
   * The font style of the legend title.
   */
  titleFontStyle?: string;
  /**
   * The font weight of the legend title.
   * This can be either a string (e.g `"bold"`, `"normal"`) or a number (`100`, `200`, `300`,
   * ..., `900` where `"normal"` = `400` and `"bold"` = `700`).
   */
  titleFontWeight?: number | FontWeightEnum;
  /**
   * Maximum allowed pixel width of axis titles.
   *
   * __Default value:__ `180`.
   */
  titleLimit?: number;
  /**
   * Opacity of the legend title.
   */
  titleOpacity?: number;
  /**
   * Orientation of the legend title.
   */
  titleOrient?: Orient;
  /**
   * The padding, in pixels, between title and legend.
   *
   * __Default value:__ `5`.
   */
  titlePadding?: number;
  /**
   * The type of the legend. Use `"symbol"` to create a discrete legend and `"gradient"` for a
   * continuous color gradient.
   *
   * __Default value:__ `"gradient"` for non-binned quantitative fields and temporal fields;
   * `"symbol"` otherwise.
   */
  type?: LegendType;
  /**
   * Explicitly set the visible legend values.
   */
  values?: Array<boolean | DateTime | number | string>;
  /**
   * A non-positive integer indicating z-index of the legend.
   * If zindex is 0, legend should be drawn behind all chart elements.
   * To put them in front, use zindex = 1.
   */
  zindex?: number;
}

/**
 * The orientation of a non-stacked bar, tick, area, and line charts.
 * The value is either horizontal (default) or vertical.
 * - For bar, rule and tick, this determines whether the size of the bar and tick
 * should be applied to x or y dimension.
 * - For area, this property determines the orient property of the Vega output.
 * - For line and trail marks, this property determines the sort order of the points in the
 * line
 * if `config.sortLineBy` is not specified.
 * For stacked charts, this is always determined by the orientation of the stack;
 * therefore explicitly specified value will be ignored.
 *
 * The default direction (`"horizontal"` or `"vertical"`) for gradient legends.
 *
 * __Default value:__ `"vertical"`.
 *
 * The default direction (`"horizontal"` or `"vertical"`) for symbol legends.
 *
 * __Default value:__ `"vertical"`.
 *
 * The direction of the legend, one of `"vertical"` or `"horizontal"`.
 *
 * __Default value:__
 * - For top-/bottom-`orient`ed legends, `"horizontal"`
 * - For left-/right-`orient`ed legends, `"vertical"`
 * - For top/bottom-left/right-`orient`ed legends, `"horizontal"` for gradient legends and
 * `"vertical"` for symbol legends.
 *
 * Orientation of the box plot.  This is normally automatically determined based on types of
 * fields on x and y channels. However, an explicit `orient` be specified when the
 * orientation is ambiguous.
 *
 * __Default value:__ `"vertical"`.
 *
 * Orientation of the error bar.  This is normally automatically determined, but can be
 * specified when the orientation is ambiguous and cannot be automatically determined.
 *
 * Orientation of the error band. This is normally automatically determined, but can be
 * specified when the orientation is ambiguous and cannot be automatically determined.
 */
export enum Orientation {
  Horizontal = 'horizontal',
  Vertical = 'vertical'
}

/**
 * The format type for labels (`"number"` or `"time"`).
 *
 * __Default value:__
 * - `"time"` for temporal fields and ordinal and nomimal fields with `timeUnit`.
 * - `"number"` for quantitative fields as well as ordinal and nomimal fields without
 * `timeUnit`.
 */
export enum FormatType {
  Number = 'number',
  Time = 'time'
}

/**
 * The horizontal alignment of the text. One of `"left"`, `"right"`, `"center"`.
 *
 * Horizontal text alignment of axis tick labels, overriding the default setting for the
 * current axis orientation.
 *
 * Horizontal text alignment of axis titles.
 *
 * Horizontal text alignment of header labels.
 *
 * Horizontal text alignment (to the anchor) of header titles.
 *
 * The alignment of the legend label, can be left, center, or right.
 *
 * Horizontal text alignment for legend titles.
 *
 * __Default value:__ `"left"`.
 */
export enum Align {
  Center = 'center',
  Left = 'left',
  Right = 'right'
}

/**
 * The vertical alignment of the text. One of `"top"`, `"middle"`, `"bottom"`.
 *
 * __Default value:__ `"middle"`
 *
 * Vertical text baseline of axis tick labels, overriding the default setting for the
 * current axis orientation. Can be `"top"`, `"middle"`, `"bottom"`, or `"alphabetic"`.
 *
 * Vertical text baseline for axis titles.
 *
 * Vertical text baseline for the header title. One of `"top"`, `"bottom"`, `"middle"`.
 *
 * __Default value:__ `"middle"`
 *
 * The position of the baseline of legend label, can be `"top"`, `"middle"`, `"bottom"`, or
 * `"alphabetic"`.
 *
 * __Default value:__ `"middle"`.
 *
 * Vertical text baseline for legend titles.
 *
 * __Default value:__ `"top"`.
 *
 * Vertical text baseline for title text. One of `"top"`, `"middle"`, `"bottom"`, or
 * `"alphabetic"`.
 */
export enum TextBaseline {
  Alphabetic = 'alphabetic',
  Bottom = 'bottom',
  Middle = 'middle',
  Top = 'top'
}

export enum FontWeightEnum {
  Bold = 'bold',
  Bolder = 'bolder',
  Lighter = 'lighter',
  Normal = 'normal'
}

export enum LabelOverlapEnum {
  Greedy = 'greedy',
  Parity = 'parity'
}

/**
 * The orientation of the legend, which determines how the legend is positioned within the
 * scene. One of "left", "right", "top-left", "top-right", "bottom-left", "bottom-right",
 * "none".
 *
 * __Default value:__ `"right"`
 *
 * The orientation of the legend, which determines how the legend is positioned within the
 * scene. One of `"left"`, `"right"`, `"top-left"`, `"top-right"`, `"bottom-left"`,
 * `"bottom-right"`, `"none"`.
 *
 * __Default value:__ `"right"`
 */
export enum LegendOrient {
  Bottom = 'bottom',
  BottomLeft = 'bottom-left',
  BottomRight = 'bottom-right',
  Left = 'left',
  None = 'none',
  Right = 'right',
  Top = 'top',
  TopLeft = 'top-left',
  TopRight = 'top-right'
}

export enum TitleAnchor {
  End = 'end',
  Middle = 'middle',
  Start = 'start'
}

/**
 * The orientation of the header label. One of `"top"`, `"bottom"`, `"left"` or `"right"`.
 *
 * The orientation of the header title. One of `"top"`, `"bottom"`, `"left"` or `"right"`.
 *
 * Orientation of the legend title.
 *
 * The orientation of the axis. One of `"top"`, `"bottom"`, `"left"` or `"right"`. The
 * orientation can be used to further specialize the axis type (e.g., a y-axis oriented
 * towards the right edge of the chart).
 *
 * __Default value:__ `"bottom"` for x-axes and `"left"` for y-axes.
 */
export enum Orient {
  Bottom = 'bottom',
  Left = 'left',
  Right = 'right',
  Top = 'top'
}

/**
 * The type of the legend. Use `"symbol"` to create a discrete legend and `"gradient"` for a
 * continuous color gradient.
 *
 * __Default value:__ `"gradient"` for non-binned quantitative fields and temporal fields;
 * `"symbol"` otherwise.
 */
export enum LegendType {
  Gradient = 'gradient',
  Symbol = 'symbol'
}

export interface Scale {
  /**
   * The logarithm base of the `log` scale (default `10`).
   */
  base?: number;
  /**
   * An array of bin boundaries over the scale domain. If provided, axes and legends will use
   * the bin boundaries to inform the choice of tick marks and text labels.
   */
  bins?: number[];
  /**
   * If `true`, values that exceed the data domain are clamped to either the minimum or
   * maximum range value
   *
   * __Default value:__ derived from the [scale
   * config](https://vega.github.io/vega-lite/docs/config.html#scale-config)'s `clamp` (`true`
   * by default).
   */
  clamp?: boolean;
  /**
   * A constant determining the slope of the symlog function around zero. Only used for
   * `symlog` scales.
   *
   * __Default value:__ `1`
   */
  constant?: number;
  /**
   * Customized domain values.
   *
   * For _quantitative_ fields, `domain` can take the form of a two-element array with minimum
   * and maximum values.  [Piecewise
   * scales](https://vega.github.io/vega-lite/docs/scale.html#piecewise) can be created by
   * providing a `domain` with more than two entries.
   * If the input field is aggregated, `domain` can also be a string value `"unaggregated"`,
   * indicating that the domain should include the raw data values prior to the aggregation.
   *
   * For _temporal_ fields, `domain` can be a two-element array minimum and maximum values, in
   * the form of either timestamps or the [DateTime definition
   * objects](https://vega.github.io/vega-lite/docs/types.html#datetime).
   *
   * For _ordinal_ and _nominal_ fields, `domain` can be an array that lists valid input
   * values.
   *
   * The `selection` property can be used to [interactively
   * determine](https://vega.github.io/vega-lite/docs/selection.html#scale-domains) the scale
   * domain.
   */
  domain?: Array<boolean | DateTime | number | string> | DomainClass | Domain;
  /**
   * The exponent of the `pow` scale.
   */
  exponent?: number;
  /**
   * The interpolation method for range values. By default, a general interpolator for
   * numbers, dates, strings and colors (in HCL space) is used. For color ranges, this
   * property allows interpolation in alternative color spaces. Legal values include `rgb`,
   * `hsl`, `hsl-long`, `lab`, `hcl`, `hcl-long`, `cubehelix` and `cubehelix-long` ('-long'
   * variants use longer paths in polar coordinate spaces). If object-valued, this property
   * accepts an object with a string-valued _type_ property and an optional numeric _gamma_
   * property applicable to rgb and cubehelix interpolators. For more, see the [d3-interpolate
   * documentation](https://github.com/d3/d3-interpolate).
   *
   * * __Default value:__ `hcl`
   */
  interpolate?: ScaleInterpolateParams | ScaleInterpolate;
  /**
   * Extending the domain so that it starts and ends on nice round values. This method
   * typically modifies the scale’s domain, and may only extend the bounds to the nearest
   * round value. Nicing is useful if the domain is computed from data and may be irregular.
   * For example, for a domain of _[0.201479…, 0.996679…]_, a nice domain might be _[0.2,
   * 1.0]_.
   *
   * For quantitative scales such as linear, `nice` can be either a boolean flag or a number.
   * If `nice` is a number, it will represent a desired tick count. This allows greater
   * control over the step size used to extend the bounds, guaranteeing that the returned
   * ticks will exactly cover the domain.
   *
   * For temporal fields with time and utc scales, the `nice` value can be a string indicating
   * the desired time interval. Legal values are `"millisecond"`, `"second"`, `"minute"`,
   * `"hour"`, `"day"`, `"week"`, `"month"`, and `"year"`. Alternatively, `time` and `utc`
   * scales can accept an object-valued interval specifier of the form `{"interval": "month",
   * "step": 3}`, which includes a desired number of interval steps. Here, the domain would
   * snap to quarter (Jan, Apr, Jul, Oct) boundaries.
   *
   * __Default value:__ `true` for unbinned _quantitative_ fields; `false` otherwise.
   */
  nice?: boolean | NiceClass | number | NiceTime;
  /**
   * For _[continuous](https://vega.github.io/vega-lite/docs/scale.html#continuous)_ scales,
   * expands the scale domain to accommodate the specified number of pixels on each of the
   * scale range. The scale range must represent pixels for this parameter to function as
   * intended. Padding adjustment is performed prior to all other adjustments, including the
   * effects of the `zero`, `nice`, `domainMin`, and `domainMax` properties.
   *
   * For _[band](https://vega.github.io/vega-lite/docs/scale.html#band)_ scales, shortcut for
   * setting `paddingInner` and `paddingOuter` to the same value.
   *
   * For _[point](https://vega.github.io/vega-lite/docs/scale.html#point)_ scales, alias for
   * `paddingOuter`.
   *
   * __Default value:__ For _continuous_ scales, derived from the [scale
   * config](https://vega.github.io/vega-lite/docs/scale.html#config)'s `continuousPadding`.
   * For _band and point_ scales, see `paddingInner` and `paddingOuter`.
   */
  padding?: number;
  /**
   * The inner padding (spacing) within each band step of band scales, as a fraction of the
   * step size. This value must lie in the range [0,1].
   *
   * For point scale, this property is invalid as point scales do not have internal band
   * widths (only step sizes between bands).
   *
   * __Default value:__ derived from the [scale
   * config](https://vega.github.io/vega-lite/docs/scale.html#config)'s `bandPaddingInner`.
   */
  paddingInner?: number;
  /**
   * The outer padding (spacing) at the ends of the range of band and point scales,
   * as a fraction of the step size. This value must lie in the range [0,1].
   *
   * __Default value:__ derived from the [scale
   * config](https://vega.github.io/vega-lite/docs/scale.html#config)'s `bandPaddingOuter` for
   * band scales and `pointPadding` for point scales.
   */
  paddingOuter?: number;
  /**
   * The range of the scale. One of:
   *
   * - A string indicating a [pre-defined named scale
   * range](https://vega.github.io/vega-lite/docs/scale.html#range-config) (e.g., example,
   * `"symbol"`, or `"diverging"`).
   *
   * - For [continuous scales](https://vega.github.io/vega-lite/docs/scale.html#continuous),
   * two-element array indicating  minimum and maximum values, or an array with more than two
   * entries for specifying a [piecewise
   * scale](https://vega.github.io/vega-lite/docs/scale.html#piecewise).
   *
   * - For [discrete](https://vega.github.io/vega-lite/docs/scale.html#discrete) and
   * [discretizing](https://vega.github.io/vega-lite/docs/scale.html#discretizing) scales, an
   * array of desired output values.
   *
   * __Notes:__
   *
   * 1) For color scales you can also specify a color
   * [`scheme`](https://vega.github.io/vega-lite/docs/scale.html#scheme) instead of `range`.
   *
   * 2) Any directly specified `range` for `x` and `y` channels will be ignored. Range can be
   * customized via the view's corresponding
   * [size](https://vega.github.io/vega-lite/docs/size.html) (`width` and `height`) or via
   * [range steps and paddings properties](#range-step) for [band](#band) and [point](#point)
   * scales.
   */
  range?: Array<number | string> | string;
  /**
   * The distance between the starts of adjacent bands or points in
   * [band](https://vega.github.io/vega-lite/docs/scale.html#band) and
   * [point](https://vega.github.io/vega-lite/docs/scale.html#point) scales.
   *
   * If `rangeStep` is `null` or if the view contains the scale's corresponding
   * [size](https://vega.github.io/vega-lite/docs/size.html) (`width` for `x` scales and
   * `height` for `y` scales), `rangeStep` will be automatically determined to fit the size of
   * the view.
   *
   * __Default value:__  derived the [scale
   * config](https://vega.github.io/vega-lite/docs/config.html#scale-config)'s
   * `textXRangeStep` (`90` by default) for x-scales of `text` marks and `rangeStep` (`21` by
   * default) for x-scales of other marks and y-scales.
   *
   * __Warning__: If `rangeStep` is `null` and the cardinality of the scale's domain is higher
   * than `width` or `height`, the rangeStep might become less than one pixel and the mark
   * might not appear correctly.
   */
  rangeStep?: number | null;
  /**
   * If `true`, rounds numeric output values to integers. This can be helpful for snapping to
   * the pixel grid.
   *
   * __Default value:__ `false`.
   */
  round?: boolean;
  /**
   * A string indicating a color
   * [scheme](https://vega.github.io/vega-lite/docs/scale.html#scheme) name (e.g.,
   * `"category10"` or `"blues"`) or a [scheme parameter
   * object](https://vega.github.io/vega-lite/docs/scale.html#scheme-params).
   *
   * Discrete color schemes may be used with
   * [discrete](https://vega.github.io/vega-lite/docs/scale.html#discrete) or
   * [discretizing](https://vega.github.io/vega-lite/docs/scale.html#discretizing) scales.
   * Continuous color schemes are intended for use with color scales.
   *
   * For the full list of supported schemes, please refer to the [Vega
   * Scheme](https://vega.github.io/vega/docs/schemes/#reference) reference.
   */
  scheme?: SchemeParams | string;
  /**
   * The type of scale.  Vega-Lite supports the following categories of scale types:
   *
   * 1) [**Continuous Scales**](https://vega.github.io/vega-lite/docs/scale.html#continuous)
   * -- mapping continuous domains to continuous output ranges
   * ([`"linear"`](https://vega.github.io/vega-lite/docs/scale.html#linear),
   * [`"pow"`](https://vega.github.io/vega-lite/docs/scale.html#pow),
   * [`"sqrt"`](https://vega.github.io/vega-lite/docs/scale.html#sqrt),
   * [`"symlog"`](https://vega.github.io/vega-lite/docs/scale.html#symlog),
   * [`"log"`](https://vega.github.io/vega-lite/docs/scale.html#log),
   * [`"time"`](https://vega.github.io/vega-lite/docs/scale.html#time),
   * [`"utc"`](https://vega.github.io/vega-lite/docs/scale.html#utc).
   *
   * 2) [**Discrete Scales**](https://vega.github.io/vega-lite/docs/scale.html#discrete) --
   * mapping discrete domains to discrete
   * ([`"ordinal"`](https://vega.github.io/vega-lite/docs/scale.html#ordinal)) or continuous
   * ([`"band"`](https://vega.github.io/vega-lite/docs/scale.html#band) and
   * [`"point"`](https://vega.github.io/vega-lite/docs/scale.html#point)) output ranges.
   *
   * 3) [**Discretizing
   * Scales**](https://vega.github.io/vega-lite/docs/scale.html#discretizing) -- mapping
   * continuous domains to discrete output ranges
   * [`"bin-ordinal"`](https://vega.github.io/vega-lite/docs/scale.html#bin-ordinal),
   * [`"quantile"`](https://vega.github.io/vega-lite/docs/scale.html#quantile),
   * [`"quantize"`](https://vega.github.io/vega-lite/docs/scale.html#quantize) and
   * [`"threshold"`](https://vega.github.io/vega-lite/docs/scale.html#threshold).
   *
   * __Default value:__ please see the [scale type
   * table](https://vega.github.io/vega-lite/docs/scale.html#type).
   */
  type?: ScaleType;
  /**
   * If `true`, ensures that a zero baseline value is included in the scale domain.
   *
   * __Default value:__ `true` for x and y channels if the quantitative field is not binned
   * and no custom `domain` is provided; `false` otherwise.
   *
   * __Note:__ Log, time, and utc scales do not support `zero`.
   */
  zero?: boolean;
}

export interface DomainClass {
  /**
   * The field name to extract selected values for, when a selection is
   * [projected](https://vega.github.io/vega-lite/docs/project.html)
   * over multiple fields or encodings.
   */
  field?: string;
  /**
   * The name of a selection.
   */
  selection: string;
  /**
   * The encoding channel to extract selected values for, when a selection is
   * [projected](https://vega.github.io/vega-lite/docs/project.html)
   * over multiple fields or encodings.
   */
  encoding?: string;
}

export enum Domain {
  Unaggregated = 'unaggregated'
}

export interface ScaleInterpolateParams {
  gamma?: number;
  type: ScaleInterpolateParamsType;
}

export enum ScaleInterpolateParamsType {
  Cubehelix = 'cubehelix',
  CubehelixLong = 'cubehelix-long',
  Rgb = 'rgb'
}

export enum ScaleInterpolate {
  Cubehelix = 'cubehelix',
  CubehelixLong = 'cubehelix-long',
  Hcl = 'hcl',
  HclLong = 'hcl-long',
  Hsl = 'hsl',
  HslLong = 'hsl-long',
  Lab = 'lab',
  Rgb = 'rgb'
}

export interface NiceClass {
  interval: string;
  step: number;
}

export enum NiceTime {
  Day = 'day',
  Hour = 'hour',
  Minute = 'minute',
  Month = 'month',
  Second = 'second',
  Week = 'week',
  Year = 'year'
}

export interface SchemeParams {
  /**
   * The number of colors to use in the scheme. This can be useful for scale types such as
   * `"quantize"`, which use the length of the scale range to determine the number of discrete
   * bins for the scale domain.
   */
  count?: number;
  /**
   * The extent of the color range to use. For example `[0.2, 1]` will rescale the color
   * scheme such that color values in the range _[0, 0.2)_ are excluded from the scheme.
   */
  extent?: number[];
  /**
   * A color scheme name for ordinal scales (e.g., `"category10"` or `"blues"`).
   *
   * For the full list of supported schemes, please refer to the [Vega
   * Scheme](https://vega.github.io/vega/docs/schemes/#reference) reference.
   */
  name: string;
}

/**
 * The type of scale.  Vega-Lite supports the following categories of scale types:
 *
 * 1) [**Continuous Scales**](https://vega.github.io/vega-lite/docs/scale.html#continuous)
 * -- mapping continuous domains to continuous output ranges
 * ([`"linear"`](https://vega.github.io/vega-lite/docs/scale.html#linear),
 * [`"pow"`](https://vega.github.io/vega-lite/docs/scale.html#pow),
 * [`"sqrt"`](https://vega.github.io/vega-lite/docs/scale.html#sqrt),
 * [`"symlog"`](https://vega.github.io/vega-lite/docs/scale.html#symlog),
 * [`"log"`](https://vega.github.io/vega-lite/docs/scale.html#log),
 * [`"time"`](https://vega.github.io/vega-lite/docs/scale.html#time),
 * [`"utc"`](https://vega.github.io/vega-lite/docs/scale.html#utc).
 *
 * 2) [**Discrete Scales**](https://vega.github.io/vega-lite/docs/scale.html#discrete) --
 * mapping discrete domains to discrete
 * ([`"ordinal"`](https://vega.github.io/vega-lite/docs/scale.html#ordinal)) or continuous
 * ([`"band"`](https://vega.github.io/vega-lite/docs/scale.html#band) and
 * [`"point"`](https://vega.github.io/vega-lite/docs/scale.html#point)) output ranges.
 *
 * 3) [**Discretizing
 * Scales**](https://vega.github.io/vega-lite/docs/scale.html#discretizing) -- mapping
 * continuous domains to discrete output ranges
 * [`"bin-ordinal"`](https://vega.github.io/vega-lite/docs/scale.html#bin-ordinal),
 * [`"quantile"`](https://vega.github.io/vega-lite/docs/scale.html#quantile),
 * [`"quantize"`](https://vega.github.io/vega-lite/docs/scale.html#quantize) and
 * [`"threshold"`](https://vega.github.io/vega-lite/docs/scale.html#threshold).
 *
 * __Default value:__ please see the [scale type
 * table](https://vega.github.io/vega-lite/docs/scale.html#type).
 */
export enum ScaleType {
  Band = 'band',
  BinOrdinal = 'bin-ordinal',
  Linear = 'linear',
  Log = 'log',
  Ordinal = 'ordinal',
  Point = 'point',
  Pow = 'pow',
  Quantile = 'quantile',
  Quantize = 'quantize',
  Sqrt = 'sqrt',
  Symlog = 'symlog',
  Threshold = 'threshold',
  Time = 'time',
  Utc = 'utc'
}

/**
 * A sort definition for sorting a discrete scale in an encoding field definition.
 */
export interface EncodingSortField {
  /**
   * The data [field](https://vega.github.io/vega-lite/docs/field.html) to sort by.
   *
   * __Default value:__ If unspecified, defaults to the field specified in the outer data
   * reference.
   */
  field?: RepeatRef | string;
  /**
   * An [aggregate operation](https://vega.github.io/vega-lite/docs/aggregate.html#ops) to
   * perform on the field prior to sorting (e.g., `"count"`, `"mean"` and `"median"`).
   * An aggregation is required when there are multiple values of the sort field for each
   * encoded data field.
   * The input data objects will be aggregated, grouped by the encoded data field.
   *
   * For a full list of operations, please see the documentation for
   * [aggregate](https://vega.github.io/vega-lite/docs/aggregate.html#ops).
   *
   * __Default value:__ `"sum"` for stacked plots. Otherwise, `"mean"`.
   */
  op?: AggregateOp;
  /**
   * The sort order. One of `"ascending"` (default), `"descending"`, or `null` (no not sort).
   */
  order?: SortOrder | null;
  /**
   * The [encoding channel](https://vega.github.io/vega-lite/docs/encoding.html#channels) to
   * sort by (e.g., `"x"`, `"y"`)
   */
  encoding?: SingleDefUnitChannel;
}

/**
 * The [encoding channel](https://vega.github.io/vega-lite/docs/encoding.html#channels) to
 * sort by (e.g., `"x"`, `"y"`)
 */
export enum SingleDefUnitChannel {
  Color = 'color',
  Fill = 'fill',
  FillOpacity = 'fillOpacity',
  Href = 'href',
  Key = 'key',
  Latitude = 'latitude',
  Latitude2 = 'latitude2',
  Longitude = 'longitude',
  Longitude2 = 'longitude2',
  Opacity = 'opacity',
  Shape = 'shape',
  Size = 'size',
  Stroke = 'stroke',
  StrokeOpacity = 'strokeOpacity',
  StrokeWidth = 'strokeWidth',
  Text = 'text',
  Tooltip = 'tooltip',
  X = 'x',
  X2 = 'x2',
  Y = 'y',
  Y2 = 'y2'
}

/**
 * The sort order. One of `"ascending"` (default) or `"descending"`.
 */
export enum SortOrder {
  Ascending = 'ascending',
  Descending = 'descending'
}

/**
 * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
 * `"nominal"`).
 * It can also be a `"geojson"` type for encoding
 * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
 *
 *
 * __Note:__
 *
 * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
 * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
 * `1552199579097`).
 * - Data `type` describes the semantics of the data rather than the primitive data types
 * (`number`, `string`, etc.). The same primitive data type can have different types of
 * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
 * data.
 * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
 * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
 * (for using an ordinal bin
 * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
 * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
 * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
 * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
 * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
 * the `type` property refers to the post-aggregation data type. For example, we can
 * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
 * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
 * output is `"quantitative"`.
 * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
 * have exactly the same type as their primary channels (e.g., `x`, `y`).
 */
export enum StandardType {
  Nominal = 'nominal',
  Ordinal = 'ordinal',
  Quantitative = 'quantitative',
  Temporal = 'temporal'
}

/**
 * A field definition for the horizontal facet of trellis plots.
 *
 * A field definition for the (flexible) facet of trellis plots.
 *
 * If either `row` or `column` is specified, this channel will be ignored.
 *
 * A field definition for the vertical facet of trellis plots.
 */
export interface FacetFieldDef {
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: boolean | BinParams | null;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * An object defining properties of a facet's header.
   */
  header?: Header;
  /**
   * Sort order for the encoded field.
   *
   * For continuous fields (quantitative or temporal), `sort` can be either `"ascending"` or
   * `"descending"`.
   *
   * For discrete fields, `sort` can be one of the following:
   * - `"ascending"` or `"descending"` -- for sorting by the values' natural order in
   * Javascript.
   * - [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field)
   * for sorting by another field.
   * - [An array specifying the field values in preferred
   * order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the
   * sort order will obey the values in the array, followed by any unspecified values in their
   * original order.  For discrete time field, values in the sort array can be [date-time
   * definition objects](types#datetime). In addition, for time units `"month"` and `"day"`,
   * the values can be the month or day names (case insensitive) or their 3-letter initials
   * (e.g., `"Mon"`, `"Tue"`).
   * - `null` indicating no sort.
   *
   * __Default value:__ `"ascending"`
   *
   * __Note:__ `null` is not supported for `row` and `column`.
   */
  sort?: Array<boolean | DateTime | number | string> | SortEncodingSortField | SortOrder | null;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
   * `"nominal"`).
   * It can also be a `"geojson"` type for encoding
   * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
   *
   *
   * __Note:__
   *
   * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
   * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
   * `1552199579097`).
   * - Data `type` describes the semantics of the data rather than the primitive data types
   * (`number`, `string`, etc.). The same primitive data type can have different types of
   * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
   * data.
   * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
   * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
   * (for using an ordinal bin
   * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
   * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
   * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
   * the `type` property refers to the post-aggregation data type. For example, we can
   * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
   * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
   * output is `"quantitative"`.
   * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
   * have exactly the same type as their primary channels (e.g., `x`, `y`).
   */
  type: StandardType;
}

/**
 * An object defining properties of a facet's header.
 *
 * Headers of row / column channels for faceted plots.
 */
export interface Header {
  /**
   * The text formatting pattern for labels of guides (axes, legends, headers) and text
   * marks.
   *
   * - If the format type is `"number"` (e.g., for quantitative fields), this is D3's [number
   * format pattern](https://github.com/d3/d3-format#locale_format).
   * - If the format type is `"time"` (e.g., for temporal fields), this is D3's [time format
   * pattern](https://github.com/d3/d3-time-format#locale_format).
   *
   * See the [format documentation](https://vega.github.io/vega-lite/docs/format.html) for
   * more examples.
   *
   * __Default value:__  Derived from
   * [numberFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for
   * number format and from
   * [timeFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for time
   * format.
   */
  format?: string;
  /**
   * The format type for labels (`"number"` or `"time"`).
   *
   * __Default value:__
   * - `"time"` for temporal fields and ordinal and nomimal fields with `timeUnit`.
   * - `"number"` for quantitative fields as well as ordinal and nomimal fields without
   * `timeUnit`.
   */
  formatType?: FormatType;
  /**
   * Horizontal text alignment of header labels.
   */
  labelAlign?: Align;
  /**
   * The anchor position for placing the labels. One of `"start"`, `"middle"`, or `"end"`. For
   * example, with a label orientation of top these anchor positions map to a left-, center-,
   * or right-aligned label.
   */
  labelAnchor?: TitleAnchor | null;
  /**
   * The rotation angle of the header labels.
   *
   * __Default value:__ `0` for column header, `-90` for row header.
   */
  labelAngle?: number;
  /**
   * The color of the header label, can be in hex color code or regular color name.
   */
  labelColor?: string;
  /**
   * The font of the header label.
   */
  labelFont?: string;
  /**
   * The font size of the header label, in pixels.
   */
  labelFontSize?: number;
  /**
   * The maximum length of the header label in pixels. The text value will be automatically
   * truncated if the rendered size exceeds the limit.
   *
   * __Default value:__ `0`, indicating no limit
   */
  labelLimit?: number;
  /**
   * The orientation of the header label. One of `"top"`, `"bottom"`, `"left"` or `"right"`.
   */
  labelOrient?: Orient;
  /**
   * The padding, in pixel, between facet header's label and the plot.
   *
   * __Default value:__ `10`
   */
  labelPadding?: number;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * Horizontal text alignment (to the anchor) of header titles.
   */
  titleAlign?: Align;
  /**
   * The anchor position for placing the title. One of `"start"`, `"middle"`, or `"end"`. For
   * example, with an orientation of top these anchor positions map to a left-, center-, or
   * right-aligned title.
   */
  titleAnchor?: TitleAnchor | null;
  /**
   * The rotation angle of the header title.
   *
   * __Default value:__ `0`.
   */
  titleAngle?: number;
  /**
   * Vertical text baseline for the header title. One of `"top"`, `"bottom"`, `"middle"`.
   *
   * __Default value:__ `"middle"`
   */
  titleBaseline?: TextBaseline;
  /**
   * Color of the header title, can be in hex color code or regular color name.
   */
  titleColor?: string;
  /**
   * Font of the header title. (e.g., `"Helvetica Neue"`).
   */
  titleFont?: string;
  /**
   * Font size of the header title.
   */
  titleFontSize?: number;
  /**
   * Font weight of the header title.
   * This can be either a string (e.g `"bold"`, `"normal"`) or a number (`100`, `200`, `300`,
   * ..., `900` where `"normal"` = `400` and `"bold"` = `700`).
   */
  titleFontWeight?: number | FontWeightEnum;
  /**
   * The maximum length of the header title in pixels. The text value will be automatically
   * truncated if the rendered size exceeds the limit.
   *
   * __Default value:__ `0`, indicating no limit
   */
  titleLimit?: number;
  /**
   * The orientation of the header title. One of `"top"`, `"bottom"`, `"left"` or `"right"`.
   */
  titleOrient?: Orient;
  /**
   * The padding, in pixel, between facet header's title and the label.
   *
   * __Default value:__ `10`
   */
  titlePadding?: number;
}

/**
 * A sort definition for sorting a discrete scale in an encoding field definition.
 */
export interface SortEncodingSortField {
  /**
   * The data [field](https://vega.github.io/vega-lite/docs/field.html) to sort by.
   *
   * __Default value:__ If unspecified, defaults to the field specified in the outer data
   * reference.
   */
  field?: RepeatRef | string;
  /**
   * An [aggregate operation](https://vega.github.io/vega-lite/docs/aggregate.html#ops) to
   * perform on the field prior to sorting (e.g., `"count"`, `"mean"` and `"median"`).
   * An aggregation is required when there are multiple values of the sort field for each
   * encoded data field.
   * The input data objects will be aggregated, grouped by the encoded data field.
   *
   * For a full list of operations, please see the documentation for
   * [aggregate](https://vega.github.io/vega-lite/docs/aggregate.html#ops).
   *
   * __Default value:__ `"sum"` for stacked plots. Otherwise, `"mean"`.
   */
  op?: AggregateOp;
  /**
   * The sort order. One of `"ascending"` (default), `"descending"`, or `null` (no not sort).
   */
  order?: SortOrder | null;
}

/**
 * Field Def without scale (and without bin: "binned" support).
 *
 * Definition object for a data field, its type and transformation of an encoding channel.
 *
 * A data field to use as a unique key for data binding. When a visualization’s data is
 * updated, the key value will be used to match data elements to existing mark instances.
 * Use a key channel to enable object constancy for transitions over dynamic data.
 */
export interface TypedFieldDef {
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: boolean | BinParams | BinEnum | null;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
   * `"nominal"`).
   * It can also be a `"geojson"` type for encoding
   * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
   *
   *
   * __Note:__
   *
   * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
   * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
   * `1552199579097`).
   * - Data `type` describes the semantics of the data rather than the primitive data types
   * (`number`, `string`, etc.). The same primitive data type can have different types of
   * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
   * data.
   * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
   * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
   * (for using an ordinal bin
   * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
   * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
   * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
   * the `type` property refers to the post-aggregation data type. For example, we can
   * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
   * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
   * output is `"quantitative"`.
   * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
   * have exactly the same type as their primary channels (e.g., `x`, `y`).
   */
  type: StandardType;
}

export enum BinEnum {
  Binned = 'binned'
}

/**
 * Fill opacity of the marks.
 *
 * __Default value:__ If undefined, the default opacity depends on [mark
 * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `fillOpacity`
 * property.
 *
 * Opacity of the marks.
 *
 * __Default value:__ If undefined, the default opacity depends on [mark
 * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `opacity` property.
 *
 * Size of the mark.
 * - For `"point"`, `"square"` and `"circle"`, – the symbol size, or pixel area of the mark.
 * - For `"bar"` and `"tick"` – the bar and tick's size.
 * - For `"text"` – the text's font size.
 * - Size is unsupported for `"line"`, `"area"`, and `"rect"`. (Use `"trail"` instead of
 * line with varying size)
 *
 * Stroke opacity of the marks.
 *
 * __Default value:__ If undefined, the default opacity depends on [mark
 * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `strokeOpacity`
 * property.
 *
 * Stroke width of the marks.
 *
 * __Default value:__ If undefined, the default stroke width depends on [mark
 * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `strokeWidth`
 * property.
 *
 * A FieldDef with Condition<ValueDef>
 * {
 * condition: {value: ...},
 * field: ...,
 * ...
 * }
 *
 * A ValueDef with optional Condition<ValueDef | FieldDef>
 * {
 * condition: {field: ...} | {value: ...},
 * value: ...,
 * }
 *
 * A Condition<ValueDef | FieldDef> only definition.
 * {
 * condition: {field: ...} | {value: ...}
 * }
 */
export interface ValueDefWithConditionMarkPropFieldDefNumber {
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: boolean | BinParams | null;
  /**
   * One or more value definition(s) with [a selection or a test
   * predicate](https://vega.github.io/vega-lite/docs/condition.html).
   *
   * __Note:__ A field definition's `condition` property can only contain [conditional value
   * definitions](https://vega.github.io/vega-lite/docs/condition.html#value)
   * since Vega-Lite only allows at most one encoded field per encoding channel.
   *
   * A field definition or one or more value definition(s) with a selection predicate.
   */
  condition?: FluffyConditionalValueDef[] | ConditionalPredicateNumberValueDefClass;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * An object defining properties of the legend.
   * If `null`, the legend for the encoding channel will be removed.
   *
   * __Default value:__ If undefined, default [legend
   * properties](https://vega.github.io/vega-lite/docs/legend.html) are applied.
   */
  legend?: Legend | null;
  /**
   * An object defining properties of the channel's scale, which is the function that
   * transforms values in the data domain (numbers, dates, strings, etc) to visual values
   * (pixels, colors, sizes) of the encoding channels.
   *
   * If `null`, the scale will be [disabled and the data value will be directly
   * encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).
   *
   * __Default value:__ If undefined, default [scale
   * properties](https://vega.github.io/vega-lite/docs/scale.html) are applied.
   */
  scale?: Scale | null;
  /**
   * Sort order for the encoded field.
   *
   * For continuous fields (quantitative or temporal), `sort` can be either `"ascending"` or
   * `"descending"`.
   *
   * For discrete fields, `sort` can be one of the following:
   * - `"ascending"` or `"descending"` -- for sorting by the values' natural order in
   * Javascript.
   * - [A sort-by-encoding
   * definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) for sorting
   * by another encoding channel. (This type of sort definition is not available for `row` and
   * `column` channels.)
   * - [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field)
   * for sorting by another field.
   * - [An array specifying the field values in preferred
   * order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the
   * sort order will obey the values in the array, followed by any unspecified values in their
   * original order.  For discrete time field, values in the sort array can be [date-time
   * definition objects](types#datetime). In addition, for time units `"month"` and `"day"`,
   * the values can be the month or day names (case insensitive) or their 3-letter initials
   * (e.g., `"Mon"`, `"Tue"`).
   * - `null` indicating no sort.
   *
   * __Default value:__ `"ascending"`
   *
   * __Note:__ `null` is not supported for `row` and `column`.
   */
  sort?: Array<boolean | DateTime | number | string> | EncodingSortField | SortOrder | null;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
   * `"nominal"`).
   * It can also be a `"geojson"` type for encoding
   * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
   *
   *
   * __Note:__
   *
   * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
   * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
   * `1552199579097`).
   * - Data `type` describes the semantics of the data rather than the primitive data types
   * (`number`, `string`, etc.). The same primitive data type can have different types of
   * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
   * data.
   * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
   * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
   * (for using an ordinal bin
   * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
   * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
   * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
   * the `type` property refers to the post-aggregation data type. For example, we can
   * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
   * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
   * output is `"quantitative"`.
   * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
   * have exactly the same type as their primary channels (e.g., `x`, `y`).
   */
  type?: StandardType;
  /**
   * A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between
   * `0` to `1` for opacity).
   */
  value?: number;
}

export interface FluffyConditionalValueDef {
  /**
   * Predicate for triggering the condition
   */
  test?: Predicate | string;
  /**
   * A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between
   * `0` to `1` for opacity).
   */
  value: boolean | number | null | string;
  /**
   * A [selection name](https://vega.github.io/vega-lite/docs/selection.html), or a series of
   * [composed selections](https://vega.github.io/vega-lite/docs/selection.html#compose).
   */
  selection?: Selection | string;
}

export interface ConditionalPredicateNumberValueDefClass {
  /**
   * Predicate for triggering the condition
   */
  test?: Predicate | string;
  /**
   * A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between
   * `0` to `1` for opacity).
   */
  value?: boolean | number | null | string;
  /**
   * A [selection name](https://vega.github.io/vega-lite/docs/selection.html), or a series of
   * [composed selections](https://vega.github.io/vega-lite/docs/selection.html#compose).
   */
  selection?: Selection | string;
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: boolean | BinParams | null;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * An object defining properties of the legend.
   * If `null`, the legend for the encoding channel will be removed.
   *
   * __Default value:__ If undefined, default [legend
   * properties](https://vega.github.io/vega-lite/docs/legend.html) are applied.
   */
  legend?: Legend | null;
  /**
   * An object defining properties of the channel's scale, which is the function that
   * transforms values in the data domain (numbers, dates, strings, etc) to visual values
   * (pixels, colors, sizes) of the encoding channels.
   *
   * If `null`, the scale will be [disabled and the data value will be directly
   * encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).
   *
   * __Default value:__ If undefined, default [scale
   * properties](https://vega.github.io/vega-lite/docs/scale.html) are applied.
   */
  scale?: Scale | null;
  /**
   * Sort order for the encoded field.
   *
   * For continuous fields (quantitative or temporal), `sort` can be either `"ascending"` or
   * `"descending"`.
   *
   * For discrete fields, `sort` can be one of the following:
   * - `"ascending"` or `"descending"` -- for sorting by the values' natural order in
   * Javascript.
   * - [A sort-by-encoding
   * definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) for sorting
   * by another encoding channel. (This type of sort definition is not available for `row` and
   * `column` channels.)
   * - [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field)
   * for sorting by another field.
   * - [An array specifying the field values in preferred
   * order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the
   * sort order will obey the values in the array, followed by any unspecified values in their
   * original order.  For discrete time field, values in the sort array can be [date-time
   * definition objects](types#datetime). In addition, for time units `"month"` and `"day"`,
   * the values can be the month or day names (case insensitive) or their 3-letter initials
   * (e.g., `"Mon"`, `"Tue"`).
   * - `null` indicating no sort.
   *
   * __Default value:__ `"ascending"`
   *
   * __Note:__ `null` is not supported for `row` and `column`.
   */
  sort?: Array<boolean | DateTime | number | string> | EncodingSortField | SortOrder | null;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
   * `"nominal"`).
   * It can also be a `"geojson"` type for encoding
   * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
   *
   *
   * __Note:__
   *
   * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
   * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
   * `1552199579097`).
   * - Data `type` describes the semantics of the data rather than the primitive data types
   * (`number`, `string`, etc.). The same primitive data type can have different types of
   * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
   * data.
   * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
   * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
   * (for using an ordinal bin
   * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
   * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
   * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
   * the `type` property refers to the post-aggregation data type. For example, we can
   * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
   * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
   * output is `"quantitative"`.
   * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
   * have exactly the same type as their primary channels (e.g., `x`, `y`).
   */
  type?: StandardType;
}

/**
 * A URL to load upon mouse click.
 *
 * Text of the `text` mark.
 *
 * A FieldDef with Condition<ValueDef>
 * {
 * condition: {value: ...},
 * field: ...,
 * ...
 * }
 *
 * A ValueDef with optional Condition<ValueDef | FieldDef>
 * {
 * condition: {field: ...} | {value: ...},
 * value: ...,
 * }
 *
 * A Condition<ValueDef | FieldDef> only definition.
 * {
 * condition: {field: ...} | {value: ...}
 * }
 */
export interface ValueDefWithConditionTextFieldDefValue {
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: boolean | BinParams | BinEnum | null;
  /**
   * One or more value definition(s) with [a selection or a test
   * predicate](https://vega.github.io/vega-lite/docs/condition.html).
   *
   * __Note:__ A field definition's `condition` property can only contain [conditional value
   * definitions](https://vega.github.io/vega-lite/docs/condition.html#value)
   * since Vega-Lite only allows at most one encoded field per encoding channel.
   *
   * A field definition or one or more value definition(s) with a selection predicate.
   */
  condition?: ConditionalValueDef[] | ConditionalPredicateTextFieldDefClass;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * The text formatting pattern for labels of guides (axes, legends, headers) and text
   * marks.
   *
   * - If the format type is `"number"` (e.g., for quantitative fields), this is D3's [number
   * format pattern](https://github.com/d3/d3-format#locale_format).
   * - If the format type is `"time"` (e.g., for temporal fields), this is D3's [time format
   * pattern](https://github.com/d3/d3-time-format#locale_format).
   *
   * See the [format documentation](https://vega.github.io/vega-lite/docs/format.html) for
   * more examples.
   *
   * __Default value:__  Derived from
   * [numberFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for
   * number format and from
   * [timeFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for time
   * format.
   */
  format?: string;
  /**
   * The format type for labels (`"number"` or `"time"`).
   *
   * __Default value:__
   * - `"time"` for temporal fields and ordinal and nomimal fields with `timeUnit`.
   * - `"number"` for quantitative fields as well as ordinal and nomimal fields without
   * `timeUnit`.
   */
  formatType?: FormatType;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
   * `"nominal"`).
   * It can also be a `"geojson"` type for encoding
   * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
   *
   *
   * __Note:__
   *
   * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
   * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
   * `1552199579097`).
   * - Data `type` describes the semantics of the data rather than the primitive data types
   * (`number`, `string`, etc.). The same primitive data type can have different types of
   * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
   * data.
   * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
   * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
   * (for using an ordinal bin
   * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
   * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
   * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
   * the `type` property refers to the post-aggregation data type. For example, we can
   * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
   * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
   * output is `"quantitative"`.
   * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
   * have exactly the same type as their primary channels (e.g., `x`, `y`).
   */
  type?: StandardType;
  /**
   * A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between
   * `0` to `1` for opacity).
   */
  value?: boolean | number | null | string;
}

export interface ConditionalValueDef {
  /**
   * Predicate for triggering the condition
   */
  test?: Predicate | string;
  /**
   * A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between
   * `0` to `1` for opacity).
   */
  value: boolean | number | null | string;
  /**
   * A [selection name](https://vega.github.io/vega-lite/docs/selection.html), or a series of
   * [composed selections](https://vega.github.io/vega-lite/docs/selection.html#compose).
   */
  selection?: Selection | string;
}

export interface ConditionalPredicateTextFieldDefClass {
  /**
   * Predicate for triggering the condition
   */
  test?: Predicate | string;
  /**
   * A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between
   * `0` to `1` for opacity).
   */
  value?: boolean | number | null | string;
  /**
   * A [selection name](https://vega.github.io/vega-lite/docs/selection.html), or a series of
   * [composed selections](https://vega.github.io/vega-lite/docs/selection.html#compose).
   */
  selection?: Selection | string;
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: boolean | BinParams | BinEnum | null;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * The text formatting pattern for labels of guides (axes, legends, headers) and text
   * marks.
   *
   * - If the format type is `"number"` (e.g., for quantitative fields), this is D3's [number
   * format pattern](https://github.com/d3/d3-format#locale_format).
   * - If the format type is `"time"` (e.g., for temporal fields), this is D3's [time format
   * pattern](https://github.com/d3/d3-time-format#locale_format).
   *
   * See the [format documentation](https://vega.github.io/vega-lite/docs/format.html) for
   * more examples.
   *
   * __Default value:__  Derived from
   * [numberFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for
   * number format and from
   * [timeFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for time
   * format.
   */
  format?: string;
  /**
   * The format type for labels (`"number"` or `"time"`).
   *
   * __Default value:__
   * - `"time"` for temporal fields and ordinal and nomimal fields with `timeUnit`.
   * - `"number"` for quantitative fields as well as ordinal and nomimal fields without
   * `timeUnit`.
   */
  formatType?: FormatType;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
   * `"nominal"`).
   * It can also be a `"geojson"` type for encoding
   * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
   *
   *
   * __Note:__
   *
   * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
   * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
   * `1552199579097`).
   * - Data `type` describes the semantics of the data rather than the primitive data types
   * (`number`, `string`, etc.). The same primitive data type can have different types of
   * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
   * data.
   * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
   * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
   * (for using an ordinal bin
   * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
   * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
   * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
   * the `type` property refers to the post-aggregation data type. For example, we can
   * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
   * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
   * output is `"quantitative"`.
   * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
   * have exactly the same type as their primary channels (e.g., `x`, `y`).
   */
  type?: StandardType;
}

/**
 * Latitude position of geographically projected marks.
 *
 * Longitude position of geographically projected marks.
 *
 * Definition object for a constant value of an encoding channel.
 */
export interface LatitudeClass {
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: null;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
   * `"nominal"`).
   * It can also be a `"geojson"` type for encoding
   * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
   *
   *
   * __Note:__
   *
   * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
   * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
   * `1552199579097`).
   * - Data `type` describes the semantics of the data rather than the primitive data types
   * (`number`, `string`, etc.). The same primitive data type can have different types of
   * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
   * data.
   * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
   * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
   * (for using an ordinal bin
   * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
   * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
   * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
   * the `type` property refers to the post-aggregation data type. For example, we can
   * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
   * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
   * output is `"quantitative"`.
   * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
   * have exactly the same type as their primary channels (e.g., `x`, `y`).
   */
  type?: LatitudeType;
  /**
   * A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between
   * `0` to `1` for opacity).
   */
  value?: number;
}

/**
 * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
 * `"nominal"`).
 * It can also be a `"geojson"` type for encoding
 * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
 *
 *
 * __Note:__
 *
 * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
 * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
 * `1552199579097`).
 * - Data `type` describes the semantics of the data rather than the primitive data types
 * (`number`, `string`, etc.). The same primitive data type can have different types of
 * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
 * data.
 * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
 * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
 * (for using an ordinal bin
 * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
 * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
 * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
 * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
 * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
 * the `type` property refers to the post-aggregation data type. For example, we can
 * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
 * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
 * output is `"quantitative"`.
 * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
 * have exactly the same type as their primary channels (e.g., `x`, `y`).
 */
export enum LatitudeType {
  Quantitative = 'quantitative'
}

/**
 * Latitude-2 position for geographically projected ranged `"area"`, `"bar"`, `"rect"`, and
 * `"rule"`.
 *
 * Longitude-2 position for geographically projected ranged `"area"`, `"bar"`, `"rect"`,
 * and  `"rule"`.
 *
 * Error value of x coordinates for error specified `"errorbar"` and `"errorband"`.
 *
 * Secondary error value of x coordinates for error specified `"errorbar"` and
 * `"errorband"`.
 *
 * Error value of y coordinates for error specified `"errorbar"` and `"errorband"`.
 *
 * Secondary error value of y coordinates for error specified `"errorbar"` and
 * `"errorband"`.
 *
 * A field definition of a secondary channel that shares a scale with another primary
 * channel.  For example, `x2`, `xError` and `xError2` share the same scale with `x`.
 *
 * Definition object for a constant value of an encoding channel.
 */
export interface Latitude2Class {
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: null;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between
   * `0` to `1` for opacity).
   */
  value?: number;
}

export interface OrderFieldDef {
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: boolean | BinParams | BinEnum | null;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * The sort order. One of `"ascending"` (default) or `"descending"`.
   */
  sort?: SortOrder;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
   * `"nominal"`).
   * It can also be a `"geojson"` type for encoding
   * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
   *
   *
   * __Note:__
   *
   * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
   * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
   * `1552199579097`).
   * - Data `type` describes the semantics of the data rather than the primitive data types
   * (`number`, `string`, etc.). The same primitive data type can have different types of
   * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
   * data.
   * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
   * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
   * (for using an ordinal bin
   * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
   * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
   * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
   * the `type` property refers to the post-aggregation data type. For example, we can
   * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
   * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
   * output is `"quantitative"`.
   * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
   * have exactly the same type as their primary channels (e.g., `x`, `y`).
   */
  type: StandardType;
}

/**
 * Definition object for a constant value of an encoding channel.
 */
export interface OrderFieldDefClass {
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: boolean | BinParams | BinEnum | null;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * The sort order. One of `"ascending"` (default) or `"descending"`.
   */
  sort?: SortOrder;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
   * `"nominal"`).
   * It can also be a `"geojson"` type for encoding
   * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
   *
   *
   * __Note:__
   *
   * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
   * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
   * `1552199579097`).
   * - Data `type` describes the semantics of the data rather than the primitive data types
   * (`number`, `string`, etc.). The same primitive data type can have different types of
   * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
   * data.
   * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
   * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
   * (for using an ordinal bin
   * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
   * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
   * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
   * the `type` property refers to the post-aggregation data type. For example, we can
   * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
   * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
   * output is `"quantitative"`.
   * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
   * have exactly the same type as their primary channels (e.g., `x`, `y`).
   */
  type?: StandardType;
  /**
   * A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between
   * `0` to `1` for opacity).
   */
  value?: number;
}

/**
 * Shape of the mark.
 *
 * 1. For `point` marks the supported values include:
 * - plotting shapes: `"circle"`, `"square"`, `"cross"`, `"diamond"`, `"triangle-up"`,
 * `"triangle-down"`, `"triangle-right"`, or `"triangle-left"`.
 * - the line symbol `"stroke"`
 * - centered directional shapes `"arrow"`, `"wedge"`, or `"triangle"`
 * - a custom [SVG path
 * string](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) (For correct
 * sizing, custom shape paths should be defined within a square bounding box with
 * coordinates ranging from -1 to 1 along both the x and y dimensions.)
 *
 * 2. For `geoshape` marks it should be a field definition of the geojson data
 *
 * __Default value:__ If undefined, the default shape depends on [mark
 * config](https://vega.github.io/vega-lite/docs/config.html#point-config)'s `shape`
 * property. (`"circle"` if unset.)
 *
 * A FieldDef with Condition<ValueDef>
 * {
 * condition: {value: ...},
 * field: ...,
 * ...
 * }
 *
 * A ValueDef with optional Condition<ValueDef | FieldDef>
 * {
 * condition: {field: ...} | {value: ...},
 * value: ...,
 * }
 *
 * A Condition<ValueDef | FieldDef> only definition.
 * {
 * condition: {field: ...} | {value: ...}
 * }
 */
export interface ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull {
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: boolean | BinParams | null;
  /**
   * One or more value definition(s) with [a selection or a test
   * predicate](https://vega.github.io/vega-lite/docs/condition.html).
   *
   * __Note:__ A field definition's `condition` property can only contain [conditional value
   * definitions](https://vega.github.io/vega-lite/docs/condition.html#value)
   * since Vega-Lite only allows at most one encoded field per encoding channel.
   *
   * A field definition or one or more value definition(s) with a selection predicate.
   */
  condition?: PurpleConditionalValueDef[] | Conditional;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * An object defining properties of the legend.
   * If `null`, the legend for the encoding channel will be removed.
   *
   * __Default value:__ If undefined, default [legend
   * properties](https://vega.github.io/vega-lite/docs/legend.html) are applied.
   */
  legend?: Legend | null;
  /**
   * An object defining properties of the channel's scale, which is the function that
   * transforms values in the data domain (numbers, dates, strings, etc) to visual values
   * (pixels, colors, sizes) of the encoding channels.
   *
   * If `null`, the scale will be [disabled and the data value will be directly
   * encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).
   *
   * __Default value:__ If undefined, default [scale
   * properties](https://vega.github.io/vega-lite/docs/scale.html) are applied.
   */
  scale?: Scale | null;
  /**
   * Sort order for the encoded field.
   *
   * For continuous fields (quantitative or temporal), `sort` can be either `"ascending"` or
   * `"descending"`.
   *
   * For discrete fields, `sort` can be one of the following:
   * - `"ascending"` or `"descending"` -- for sorting by the values' natural order in
   * Javascript.
   * - [A sort-by-encoding
   * definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) for sorting
   * by another encoding channel. (This type of sort definition is not available for `row` and
   * `column` channels.)
   * - [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field)
   * for sorting by another field.
   * - [An array specifying the field values in preferred
   * order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the
   * sort order will obey the values in the array, followed by any unspecified values in their
   * original order.  For discrete time field, values in the sort array can be [date-time
   * definition objects](types#datetime). In addition, for time units `"month"` and `"day"`,
   * the values can be the month or day names (case insensitive) or their 3-letter initials
   * (e.g., `"Mon"`, `"Tue"`).
   * - `null` indicating no sort.
   *
   * __Default value:__ `"ascending"`
   *
   * __Note:__ `null` is not supported for `row` and `column`.
   */
  sort?: Array<boolean | DateTime | number | string> | EncodingSortField | SortOrder | null;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
   * `"nominal"`).
   * It can also be a `"geojson"` type for encoding
   * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
   *
   *
   * __Note:__
   *
   * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
   * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
   * `1552199579097`).
   * - Data `type` describes the semantics of the data rather than the primitive data types
   * (`number`, `string`, etc.). The same primitive data type can have different types of
   * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
   * data.
   * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
   * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
   * (for using an ordinal bin
   * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
   * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
   * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
   * the `type` property refers to the post-aggregation data type. For example, we can
   * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
   * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
   * output is `"quantitative"`.
   * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
   * have exactly the same type as their primary channels (e.g., `x`, `y`).
   */
  type?: TypeForShape;
  /**
   * A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between
   * `0` to `1` for opacity).
   */
  value?: null | string;
}

export interface Conditional {
  /**
   * Predicate for triggering the condition
   */
  test?: Predicate | string;
  /**
   * A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between
   * `0` to `1` for opacity).
   */
  value?: boolean | number | null | string;
  /**
   * A [selection name](https://vega.github.io/vega-lite/docs/selection.html), or a series of
   * [composed selections](https://vega.github.io/vega-lite/docs/selection.html#compose).
   */
  selection?: Selection | string;
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: boolean | BinParams | null;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * An object defining properties of the legend.
   * If `null`, the legend for the encoding channel will be removed.
   *
   * __Default value:__ If undefined, default [legend
   * properties](https://vega.github.io/vega-lite/docs/legend.html) are applied.
   */
  legend?: Legend | null;
  /**
   * An object defining properties of the channel's scale, which is the function that
   * transforms values in the data domain (numbers, dates, strings, etc) to visual values
   * (pixels, colors, sizes) of the encoding channels.
   *
   * If `null`, the scale will be [disabled and the data value will be directly
   * encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).
   *
   * __Default value:__ If undefined, default [scale
   * properties](https://vega.github.io/vega-lite/docs/scale.html) are applied.
   */
  scale?: Scale | null;
  /**
   * Sort order for the encoded field.
   *
   * For continuous fields (quantitative or temporal), `sort` can be either `"ascending"` or
   * `"descending"`.
   *
   * For discrete fields, `sort` can be one of the following:
   * - `"ascending"` or `"descending"` -- for sorting by the values' natural order in
   * Javascript.
   * - [A sort-by-encoding
   * definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) for sorting
   * by another encoding channel. (This type of sort definition is not available for `row` and
   * `column` channels.)
   * - [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field)
   * for sorting by another field.
   * - [An array specifying the field values in preferred
   * order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the
   * sort order will obey the values in the array, followed by any unspecified values in their
   * original order.  For discrete time field, values in the sort array can be [date-time
   * definition objects](types#datetime). In addition, for time units `"month"` and `"day"`,
   * the values can be the month or day names (case insensitive) or their 3-letter initials
   * (e.g., `"Mon"`, `"Tue"`).
   * - `null` indicating no sort.
   *
   * __Default value:__ `"ascending"`
   *
   * __Note:__ `null` is not supported for `row` and `column`.
   */
  sort?: Array<boolean | DateTime | number | string> | EncodingSortField | SortOrder | null;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
   * `"nominal"`).
   * It can also be a `"geojson"` type for encoding
   * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
   *
   *
   * __Note:__
   *
   * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
   * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
   * `1552199579097`).
   * - Data `type` describes the semantics of the data rather than the primitive data types
   * (`number`, `string`, etc.). The same primitive data type can have different types of
   * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
   * data.
   * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
   * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
   * (for using an ordinal bin
   * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
   * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
   * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
   * the `type` property refers to the post-aggregation data type. For example, we can
   * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
   * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
   * output is `"quantitative"`.
   * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
   * have exactly the same type as their primary channels (e.g., `x`, `y`).
   */
  type?: TypeForShape;
}

/**
 * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
 * `"nominal"`).
 * It can also be a `"geojson"` type for encoding
 * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
 *
 *
 * __Note:__
 *
 * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
 * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
 * `1552199579097`).
 * - Data `type` describes the semantics of the data rather than the primitive data types
 * (`number`, `string`, etc.). The same primitive data type can have different types of
 * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
 * data.
 * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
 * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
 * (for using an ordinal bin
 * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
 * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
 * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
 * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
 * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
 * the `type` property refers to the post-aggregation data type. For example, we can
 * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
 * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
 * output is `"quantitative"`.
 * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
 * have exactly the same type as their primary channels (e.g., `x`, `y`).
 */
export enum TypeForShape {
  Geojson = 'geojson',
  Nominal = 'nominal',
  Ordinal = 'ordinal'
}

export interface TextFieldDef {
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: boolean | BinParams | BinEnum | null;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * The text formatting pattern for labels of guides (axes, legends, headers) and text
   * marks.
   *
   * - If the format type is `"number"` (e.g., for quantitative fields), this is D3's [number
   * format pattern](https://github.com/d3/d3-format#locale_format).
   * - If the format type is `"time"` (e.g., for temporal fields), this is D3's [time format
   * pattern](https://github.com/d3/d3-time-format#locale_format).
   *
   * See the [format documentation](https://vega.github.io/vega-lite/docs/format.html) for
   * more examples.
   *
   * __Default value:__  Derived from
   * [numberFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for
   * number format and from
   * [timeFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for time
   * format.
   */
  format?: string;
  /**
   * The format type for labels (`"number"` or `"time"`).
   *
   * __Default value:__
   * - `"time"` for temporal fields and ordinal and nomimal fields with `timeUnit`.
   * - `"number"` for quantitative fields as well as ordinal and nomimal fields without
   * `timeUnit`.
   */
  formatType?: FormatType;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
   * `"nominal"`).
   * It can also be a `"geojson"` type for encoding
   * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
   *
   *
   * __Note:__
   *
   * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
   * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
   * `1552199579097`).
   * - Data `type` describes the semantics of the data rather than the primitive data types
   * (`number`, `string`, etc.). The same primitive data type can have different types of
   * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
   * data.
   * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
   * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
   * (for using an ordinal bin
   * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
   * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
   * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
   * the `type` property refers to the post-aggregation data type. For example, we can
   * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
   * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
   * output is `"quantitative"`.
   * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
   * have exactly the same type as their primary channels (e.g., `x`, `y`).
   */
  type: StandardType;
}

/**
 * A FieldDef with Condition<ValueDef>
 * {
 * condition: {value: ...},
 * field: ...,
 * ...
 * }
 *
 * A ValueDef with optional Condition<ValueDef | FieldDef>
 * {
 * condition: {field: ...} | {value: ...},
 * value: ...,
 * }
 *
 * A Condition<ValueDef | FieldDef> only definition.
 * {
 * condition: {field: ...} | {value: ...}
 * }
 */
export interface FieldDefWithConditionTextFieldDefValue {
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: boolean | BinParams | BinEnum | null;
  /**
   * One or more value definition(s) with [a selection or a test
   * predicate](https://vega.github.io/vega-lite/docs/condition.html).
   *
   * __Note:__ A field definition's `condition` property can only contain [conditional value
   * definitions](https://vega.github.io/vega-lite/docs/condition.html#value)
   * since Vega-Lite only allows at most one encoded field per encoding channel.
   *
   * A field definition or one or more value definition(s) with a selection predicate.
   */
  condition?: ConditionalValueDef[] | ConditionalPredicateTextFieldDefClass;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * The text formatting pattern for labels of guides (axes, legends, headers) and text
   * marks.
   *
   * - If the format type is `"number"` (e.g., for quantitative fields), this is D3's [number
   * format pattern](https://github.com/d3/d3-format#locale_format).
   * - If the format type is `"time"` (e.g., for temporal fields), this is D3's [time format
   * pattern](https://github.com/d3/d3-time-format#locale_format).
   *
   * See the [format documentation](https://vega.github.io/vega-lite/docs/format.html) for
   * more examples.
   *
   * __Default value:__  Derived from
   * [numberFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for
   * number format and from
   * [timeFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for time
   * format.
   */
  format?: string;
  /**
   * The format type for labels (`"number"` or `"time"`).
   *
   * __Default value:__
   * - `"time"` for temporal fields and ordinal and nomimal fields with `timeUnit`.
   * - `"number"` for quantitative fields as well as ordinal and nomimal fields without
   * `timeUnit`.
   */
  formatType?: FormatType;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
   * `"nominal"`).
   * It can also be a `"geojson"` type for encoding
   * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
   *
   *
   * __Note:__
   *
   * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
   * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
   * `1552199579097`).
   * - Data `type` describes the semantics of the data rather than the primitive data types
   * (`number`, `string`, etc.). The same primitive data type can have different types of
   * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
   * data.
   * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
   * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
   * (for using an ordinal bin
   * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
   * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
   * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
   * the `type` property refers to the post-aggregation data type. For example, we can
   * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
   * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
   * output is `"quantitative"`.
   * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
   * have exactly the same type as their primary channels (e.g., `x`, `y`).
   */
  type?: StandardType;
  /**
   * A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between
   * `0` to `1` for opacity).
   */
  value?: boolean | number | null | string;
}

/**
 * X coordinates of the marks, or width of horizontal `"bar"` and `"area"` without `x2`.
 *
 * The `value` of this channel can be a number or a string `"width"`.
 *
 * Definition object for a constant value of an encoding channel.
 */
export interface XClass {
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * An object defining properties of axis's gridlines, ticks and labels.
   * If `null`, the axis for the encoding channel will be removed.
   *
   * __Default value:__ If undefined, default [axis
   * properties](https://vega.github.io/vega-lite/docs/axis.html) are applied.
   */
  axis?: Axis | null;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: boolean | BinParams | BinEnum | null;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * An object defining the properties of the Impute Operation to be applied.
   * The field value of the other positional channel is taken as `key` of the `Impute`
   * Operation.
   * The field of the `color` channel if specified is used as `groupby` of the `Impute`
   * Operation.
   */
  impute?: ImputeParams;
  /**
   * An object defining properties of the channel's scale, which is the function that
   * transforms values in the data domain (numbers, dates, strings, etc) to visual values
   * (pixels, colors, sizes) of the encoding channels.
   *
   * If `null`, the scale will be [disabled and the data value will be directly
   * encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).
   *
   * __Default value:__ If undefined, default [scale
   * properties](https://vega.github.io/vega-lite/docs/scale.html) are applied.
   */
  scale?: Scale | null;
  /**
   * Sort order for the encoded field.
   *
   * For continuous fields (quantitative or temporal), `sort` can be either `"ascending"` or
   * `"descending"`.
   *
   * For discrete fields, `sort` can be one of the following:
   * - `"ascending"` or `"descending"` -- for sorting by the values' natural order in
   * Javascript.
   * - [A sort-by-encoding
   * definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) for sorting
   * by another encoding channel. (This type of sort definition is not available for `row` and
   * `column` channels.)
   * - [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field)
   * for sorting by another field.
   * - [An array specifying the field values in preferred
   * order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the
   * sort order will obey the values in the array, followed by any unspecified values in their
   * original order.  For discrete time field, values in the sort array can be [date-time
   * definition objects](types#datetime). In addition, for time units `"month"` and `"day"`,
   * the values can be the month or day names (case insensitive) or their 3-letter initials
   * (e.g., `"Mon"`, `"Tue"`).
   * - `null` indicating no sort.
   *
   * __Default value:__ `"ascending"`
   *
   * __Note:__ `null` is not supported for `row` and `column`.
   */
  sort?: Array<boolean | DateTime | number | string> | EncodingSortField | SortOrder | null;
  /**
   * Type of stacking offset if the field should be stacked.
   * `stack` is only applicable for `x` and `y` channels with continuous domains.
   * For example, `stack` of `y` can be used to customize stacking for a vertical bar chart.
   *
   * `stack` can be one of the following values:
   * - `"zero"` or `true`: stacking with baseline offset at zero value of the scale (for
   * creating typical stacked [bar](https://vega.github.io/vega-lite/docs/stack.html#bar) and
   * [area](https://vega.github.io/vega-lite/docs/stack.html#area) chart).
   * - `"normalize"` - stacking with normalized domain (for creating [normalized stacked bar
   * and area charts](https://vega.github.io/vega-lite/docs/stack.html#normalized). <br/>
   * -`"center"` - stacking with center baseline (for
   * [streamgraph](https://vega.github.io/vega-lite/docs/stack.html#streamgraph)).
   * - `null` or `false` - No-stacking. This will produce layered
   * [bar](https://vega.github.io/vega-lite/docs/stack.html#layered-bar-chart) and area
   * chart.
   *
   * __Default value:__ `zero` for plots with all of the following conditions are true:
   * (1) the mark is `bar` or `area`;
   * (2) the stacked measure channel (x or y) has a linear scale;
   * (3) At least one of non-position channels mapped to an unaggregated field that is
   * different from x and y.  Otherwise, `null` by default.
   */
  stack?: boolean | StackOffset | null;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
   * `"nominal"`).
   * It can also be a `"geojson"` type for encoding
   * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
   *
   *
   * __Note:__
   *
   * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
   * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
   * `1552199579097`).
   * - Data `type` describes the semantics of the data rather than the primitive data types
   * (`number`, `string`, etc.). The same primitive data type can have different types of
   * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
   * data.
   * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
   * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
   * (for using an ordinal bin
   * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
   * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
   * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
   * the `type` property refers to the post-aggregation data type. For example, we can
   * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
   * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
   * output is `"quantitative"`.
   * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
   * have exactly the same type as their primary channels (e.g., `x`, `y`).
   */
  type?: StandardType;
  /**
   * A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between
   * `0` to `1` for opacity).
   */
  value?: number | PurpleValue;
}

export interface Axis {
  /**
   * An interpolation fraction indicating where, for `band` scales, axis ticks should be
   * positioned. A value of `0` places ticks at the left edge of their bands. A value of `0.5`
   * places ticks in the middle of their bands.
   *
   * __Default value:__ `0.5`
   */
  bandPosition?: number;
  /**
   * A boolean flag indicating if the domain (the axis baseline) should be included as part of
   * the axis.
   *
   * __Default value:__ `true`
   */
  domain?: boolean;
  /**
   * Color of axis domain line.
   *
   * __Default value:__ `"gray"`.
   */
  domainColor?: string;
  /**
   * An array of alternating [stroke, space] lengths for dashed domain lines.
   */
  domainDash?: number[];
  /**
   * The pixel offset at which to start drawing with the domain dash array.
   */
  domainDashOffset?: number;
  /**
   * Opacity of the axis domain line.
   */
  domainOpacity?: number;
  /**
   * Stroke width of axis domain line
   *
   * __Default value:__ `1`
   */
  domainWidth?: number;
  /**
   * The text formatting pattern for labels of guides (axes, legends, headers) and text
   * marks.
   *
   * - If the format type is `"number"` (e.g., for quantitative fields), this is D3's [number
   * format pattern](https://github.com/d3/d3-format#locale_format).
   * - If the format type is `"time"` (e.g., for temporal fields), this is D3's [time format
   * pattern](https://github.com/d3/d3-time-format#locale_format).
   *
   * See the [format documentation](https://vega.github.io/vega-lite/docs/format.html) for
   * more examples.
   *
   * __Default value:__  Derived from
   * [numberFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for
   * number format and from
   * [timeFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for time
   * format.
   */
  format?: string;
  /**
   * The format type for labels (`"number"` or `"time"`).
   *
   * __Default value:__
   * - `"time"` for temporal fields and ordinal and nomimal fields with `timeUnit`.
   * - `"number"` for quantitative fields as well as ordinal and nomimal fields without
   * `timeUnit`.
   */
  formatType?: FormatType;
  /**
   * A boolean flag indicating if grid lines should be included as part of the axis
   *
   * __Default value:__ `true` for [continuous
   * scales](https://vega.github.io/vega-lite/docs/scale.html#continuous) that are not binned;
   * otherwise, `false`.
   */
  grid?: boolean;
  /**
   * Color of gridlines.
   *
   * __Default value:__ `"lightGray"`.
   */
  gridColor?: string;
  /**
   * An array of alternating [stroke, space] lengths for dashed grid lines.
   */
  gridDash?: number[];
  /**
   * The pixel offset at which to start drawing with the grid dash array.
   */
  gridDashOffset?: number;
  /**
   * The stroke opacity of grid (value between [0,1])
   *
   * __Default value:__ `1`
   */
  gridOpacity?: number;
  /**
   * The grid width, in pixels.
   *
   * __Default value:__ `1`
   */
  gridWidth?: number;
  /**
   * Horizontal text alignment of axis tick labels, overriding the default setting for the
   * current axis orientation.
   */
  labelAlign?: Align;
  /**
   * The rotation angle of the axis labels.
   *
   * __Default value:__ `-90` for nominal and ordinal fields; `0` otherwise.
   */
  labelAngle?: number;
  /**
   * Vertical text baseline of axis tick labels, overriding the default setting for the
   * current axis orientation. Can be `"top"`, `"middle"`, `"bottom"`, or `"alphabetic"`.
   */
  labelBaseline?: TextBaseline;
  /**
   * Indicates if labels should be hidden if they exceed the axis range. If `false` (the
   * default) no bounds overlap analysis is performed. If `true`, labels will be hidden if
   * they exceed the axis range by more than 1 pixel. If this property is a number, it
   * specifies the pixel tolerance: the maximum amount by which a label bounding box may
   * exceed the axis range.
   *
   * __Default value:__ `false`.
   */
  labelBound?: boolean | number;
  /**
   * The color of the tick label, can be in hex color code or regular color name.
   */
  labelColor?: string;
  /**
   * Indicates if the first and last axis labels should be aligned flush with the scale range.
   * Flush alignment for a horizontal axis will left-align the first label and right-align the
   * last label. For vertical axes, bottom and top text baselines are applied instead. If this
   * property is a number, it also indicates the number of pixels by which to offset the first
   * and last labels; for example, a value of 2 will flush-align the first and last labels and
   * also push them 2 pixels outward from the center of the axis. The additional adjustment
   * can sometimes help the labels better visually group with corresponding axis ticks.
   *
   * __Default value:__ `true` for axis of a continuous x-scale. Otherwise, `false`.
   */
  labelFlush?: boolean | number;
  /**
   * Indicates the number of pixels by which to offset flush-adjusted labels. For example, a
   * value of `2` will push flush-adjusted labels 2 pixels outward from the center of the
   * axis. Offsets can help the labels better visually group with corresponding axis ticks.
   *
   * __Default value:__ `0`.
   */
  labelFlushOffset?: number;
  /**
   * The font of the tick label.
   */
  labelFont?: string;
  /**
   * The font size of the label, in pixels.
   */
  labelFontSize?: number;
  /**
   * Font style of the title.
   */
  labelFontStyle?: string;
  /**
   * Font weight of axis tick labels.
   */
  labelFontWeight?: number | FontWeightEnum;
  /**
   * Maximum allowed pixel width of axis tick labels.
   *
   * __Default value:__ `180`
   */
  labelLimit?: number;
  /**
   * The opacity of the labels.
   */
  labelOpacity?: number;
  /**
   * The strategy to use for resolving overlap of axis labels. If `false` (the default), no
   * overlap reduction is attempted. If set to `true` or `"parity"`, a strategy of removing
   * every other label is used (this works well for standard linear axes). If set to
   * `"greedy"`, a linear scan of the labels is performed, removing any labels that overlaps
   * with the last visible label (this often works better for log-scaled axes).
   *
   * __Default value:__ `true` for non-nominal fields with non-log scales; `"greedy"` for log
   * scales; otherwise `false`.
   */
  labelOverlap?: boolean | LabelOverlapEnum;
  /**
   * The padding, in pixels, between axis and text labels.
   *
   * __Default value:__ `2`
   */
  labelPadding?: number;
  /**
   * A boolean flag indicating if labels should be included as part of the axis.
   *
   * __Default value:__ `true`.
   */
  labels?: boolean;
  /**
   * The minimum separation that must be between label bounding boxes for them to be
   * considered non-overlapping (default `0`). This property is ignored if *labelOverlap*
   * resolution is not enabled.
   */
  labelSeparation?: number;
  /**
   * The maximum extent in pixels that axis ticks and labels should use. This determines a
   * maximum offset value for axis titles.
   *
   * __Default value:__ `undefined`.
   */
  maxExtent?: number;
  /**
   * The minimum extent in pixels that axis ticks and labels should use. This determines a
   * minimum offset value for axis titles.
   *
   * __Default value:__ `30` for y-axis; `undefined` for x-axis.
   */
  minExtent?: number;
  /**
   * The offset, in pixels, by which to displace the axis from the edge of the enclosing group
   * or data rectangle.
   *
   * __Default value:__ derived from the [axis
   * config](https://vega.github.io/vega-lite/docs/config.html#facet-scale-config)'s `offset`
   * (`0` by default)
   */
  offset?: number;
  /**
   * The orientation of the axis. One of `"top"`, `"bottom"`, `"left"` or `"right"`. The
   * orientation can be used to further specialize the axis type (e.g., a y-axis oriented
   * towards the right edge of the chart).
   *
   * __Default value:__ `"bottom"` for x-axes and `"left"` for y-axes.
   */
  orient?: Orient;
  /**
   * The anchor position of the axis in pixels. For x-axes with top or bottom orientation,
   * this sets the axis group x coordinate. For y-axes with left or right orientation, this
   * sets the axis group y coordinate.
   *
   * __Default value__: `0`
   */
  position?: number;
  /**
   * The color of the axis's tick.
   *
   * __Default value:__ `"gray"`
   */
  tickColor?: string;
  /**
   * A desired number of ticks, for axes visualizing quantitative scales. The resulting number
   * may be different so that values are "nice" (multiples of 2, 5, 10) and lie within the
   * underlying scale's range.
   */
  tickCount?: number;
  /**
   * An array of alternating [stroke, space] lengths for dashed tick mark lines.
   */
  tickDash?: number[];
  /**
   * The pixel offset at which to start drawing with the tick mark dash array.
   */
  tickDashOffset?: number;
  /**
   * Boolean flag indicating if an extra axis tick should be added for the initial position of
   * the axis. This flag is useful for styling axes for `band` scales such that ticks are
   * placed on band boundaries rather in the middle of a band. Use in conjunction with
   * `"bandPosition": 1` and an axis `"padding"` value of `0`.
   */
  tickExtra?: boolean;
  /**
   * The minimum desired step between axis ticks, in terms of scale domain values. For
   * example, a value of `1` indicates that ticks should not be less than 1 unit apart. If
   * `tickMinStep` is specified, the `tickCount` value will be adjusted, if necessary, to
   * enforce the minimum step value.
   *
   * __Default value__: `undefined`
   */
  tickMinStep?: number;
  /**
   * Position offset in pixels to apply to ticks, labels, and gridlines.
   */
  tickOffset?: number;
  /**
   * Opacity of the ticks.
   */
  tickOpacity?: number;
  /**
   * Boolean flag indicating if pixel position values should be rounded to the nearest
   * integer.
   *
   * __Default value:__ `true`
   */
  tickRound?: boolean;
  /**
   * Boolean value that determines whether the axis should include ticks.
   *
   * __Default value:__ `true`
   */
  ticks?: boolean;
  /**
   * The size in pixels of axis ticks.
   *
   * __Default value:__ `5`
   */
  tickSize?: number;
  /**
   * The width, in pixels, of ticks.
   *
   * __Default value:__ `1`
   */
  tickWidth?: number;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * Horizontal text alignment of axis titles.
   */
  titleAlign?: Align;
  /**
   * Text anchor position for placing axis titles.
   */
  titleAnchor?: TitleAnchor | null;
  /**
   * Angle in degrees of axis titles.
   */
  titleAngle?: number;
  /**
   * Vertical text baseline for axis titles.
   */
  titleBaseline?: TextBaseline;
  /**
   * Color of the title, can be in hex color code or regular color name.
   */
  titleColor?: string;
  /**
   * Font of the title. (e.g., `"Helvetica Neue"`).
   */
  titleFont?: string;
  /**
   * Font size of the title.
   */
  titleFontSize?: number;
  /**
   * Font style of the title.
   */
  titleFontStyle?: string;
  /**
   * Font weight of the title.
   * This can be either a string (e.g `"bold"`, `"normal"`) or a number (`100`, `200`, `300`,
   * ..., `900` where `"normal"` = `400` and `"bold"` = `700`).
   */
  titleFontWeight?: number | FontWeightEnum;
  /**
   * Maximum allowed pixel width of axis titles.
   */
  titleLimit?: number;
  /**
   * Opacity of the axis title.
   */
  titleOpacity?: number;
  /**
   * The padding, in pixels, between title and axis.
   */
  titlePadding?: number;
  /**
   * X-coordinate of the axis title relative to the axis group.
   */
  titleX?: number;
  /**
   * Y-coordinate of the axis title relative to the axis group.
   */
  titleY?: number;
  /**
   * Explicitly set the visible axis tick values.
   */
  values?: Array<boolean | DateTime | number | string>;
  /**
   * A non-positive integer indicating z-index of the axis.
   * If zindex is 0, axes should be drawn behind all chart elements.
   * To put them in front, use `"zindex = 1"`.
   *
   * __Default value:__ `1` (in front of the marks) for actual axis and `0` (behind the marks)
   * for grids.
   */
  zindex?: number;
}

/**
 * An object defining the properties of the Impute Operation to be applied.
 * The field value of the other positional channel is taken as `key` of the `Impute`
 * Operation.
 * The field of the `color` channel if specified is used as `groupby` of the `Impute`
 * Operation.
 */
export interface ImputeParams {
  /**
   * A frame specification as a two-element array used to control the window over which the
   * specified method is applied. The array entries should either be a number indicating the
   * offset from the current data object, or null to indicate unbounded rows preceding or
   * following the current data object.  For example, the value `[-5, 5]` indicates that the
   * window should include five objects preceding and five objects following the current
   * object.
   *
   * __Default value:__:  `[null, null]` indicating that the window includes all objects.
   */
  frame?: Array<number | null>;
  /**
   * Defines the key values that should be considered for imputation.
   * An array of key values or an object defining a [number
   * sequence](https://vega.github.io/vega-lite/docs/impute.html#sequence-def).
   *
   * If provided, this will be used in addition to the key values observed within the input
   * data.  If not provided, the values will be derived from all unique values of the `key`
   * field. For `impute` in `encoding`, the key field is the x-field if the y-field is
   * imputed, or vice versa.
   *
   * If there is no impute grouping, this property _must_ be specified.
   */
  keyvals?: any[] | ImputeSequence;
  /**
   * The imputation method to use for the field value of imputed data objects.
   * One of `value`, `mean`, `median`, `max` or `min`.
   *
   * __Default value:__  `"value"`
   */
  method?: ImputeMethod;
  /**
   * The field value to use when the imputation `method` is `"value"`.
   */
  value?: any;
}

export interface ImputeSequence {
  /**
   * The starting value of the sequence.
   * __Default value:__ `0`
   */
  start?: number;
  /**
   * The step value between sequence entries.
   * __Default value:__ `1` or `-1` if `stop < start`
   */
  step?: number;
  /**
   * The ending value(exclusive) of the sequence.
   */
  stop: number;
}

/**
 * The imputation method to use for the field value of imputed data objects.
 * One of `value`, `mean`, `median`, `max` or `min`.
 *
 * __Default value:__  `"value"`
 */
export enum ImputeMethod {
  Max = 'max',
  Mean = 'mean',
  Median = 'median',
  Min = 'min',
  Value = 'value'
}

/**
 * Default stack offset for stackable mark.
 *
 * Mode for stacking marks.
 * __Default value:__ `"zero"`
 */
export enum StackOffset {
  Center = 'center',
  Normalize = 'normalize',
  Zero = 'zero'
}

export enum PurpleValue {
  Width = 'width'
}

/**
 * X2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
 *
 * The `value` of this channel can be a number or a string `"width"`.
 *
 * A field definition of a secondary channel that shares a scale with another primary
 * channel.  For example, `x2`, `xError` and `xError2` share the same scale with `x`.
 *
 * Definition object for a constant value of an encoding channel.
 */
export interface X2Class {
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: null;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between
   * `0` to `1` for opacity).
   */
  value?: number | PurpleValue;
}

/**
 * Y coordinates of the marks, or height of vertical `"bar"` and `"area"` without `y2`
 *
 * The `value` of this channel can be a number or a string `"height"`.
 *
 * Definition object for a constant value of an encoding channel.
 */
export interface YClass {
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * An object defining properties of axis's gridlines, ticks and labels.
   * If `null`, the axis for the encoding channel will be removed.
   *
   * __Default value:__ If undefined, default [axis
   * properties](https://vega.github.io/vega-lite/docs/axis.html) are applied.
   */
  axis?: Axis | null;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: boolean | BinParams | BinEnum | null;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * An object defining the properties of the Impute Operation to be applied.
   * The field value of the other positional channel is taken as `key` of the `Impute`
   * Operation.
   * The field of the `color` channel if specified is used as `groupby` of the `Impute`
   * Operation.
   */
  impute?: ImputeParams;
  /**
   * An object defining properties of the channel's scale, which is the function that
   * transforms values in the data domain (numbers, dates, strings, etc) to visual values
   * (pixels, colors, sizes) of the encoding channels.
   *
   * If `null`, the scale will be [disabled and the data value will be directly
   * encoded](https://vega.github.io/vega-lite/docs/scale.html#disable).
   *
   * __Default value:__ If undefined, default [scale
   * properties](https://vega.github.io/vega-lite/docs/scale.html) are applied.
   */
  scale?: Scale | null;
  /**
   * Sort order for the encoded field.
   *
   * For continuous fields (quantitative or temporal), `sort` can be either `"ascending"` or
   * `"descending"`.
   *
   * For discrete fields, `sort` can be one of the following:
   * - `"ascending"` or `"descending"` -- for sorting by the values' natural order in
   * Javascript.
   * - [A sort-by-encoding
   * definition](https://vega.github.io/vega-lite/docs/sort.html#sort-by-encoding) for sorting
   * by another encoding channel. (This type of sort definition is not available for `row` and
   * `column` channels.)
   * - [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field)
   * for sorting by another field.
   * - [An array specifying the field values in preferred
   * order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the
   * sort order will obey the values in the array, followed by any unspecified values in their
   * original order.  For discrete time field, values in the sort array can be [date-time
   * definition objects](types#datetime). In addition, for time units `"month"` and `"day"`,
   * the values can be the month or day names (case insensitive) or their 3-letter initials
   * (e.g., `"Mon"`, `"Tue"`).
   * - `null` indicating no sort.
   *
   * __Default value:__ `"ascending"`
   *
   * __Note:__ `null` is not supported for `row` and `column`.
   */
  sort?: Array<boolean | DateTime | number | string> | EncodingSortField | SortOrder | null;
  /**
   * Type of stacking offset if the field should be stacked.
   * `stack` is only applicable for `x` and `y` channels with continuous domains.
   * For example, `stack` of `y` can be used to customize stacking for a vertical bar chart.
   *
   * `stack` can be one of the following values:
   * - `"zero"` or `true`: stacking with baseline offset at zero value of the scale (for
   * creating typical stacked [bar](https://vega.github.io/vega-lite/docs/stack.html#bar) and
   * [area](https://vega.github.io/vega-lite/docs/stack.html#area) chart).
   * - `"normalize"` - stacking with normalized domain (for creating [normalized stacked bar
   * and area charts](https://vega.github.io/vega-lite/docs/stack.html#normalized). <br/>
   * -`"center"` - stacking with center baseline (for
   * [streamgraph](https://vega.github.io/vega-lite/docs/stack.html#streamgraph)).
   * - `null` or `false` - No-stacking. This will produce layered
   * [bar](https://vega.github.io/vega-lite/docs/stack.html#layered-bar-chart) and area
   * chart.
   *
   * __Default value:__ `zero` for plots with all of the following conditions are true:
   * (1) the mark is `bar` or `area`;
   * (2) the stacked measure channel (x or y) has a linear scale;
   * (3) At least one of non-position channels mapped to an unaggregated field that is
   * different from x and y.  Otherwise, `null` by default.
   */
  stack?: boolean | StackOffset | null;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
   * `"nominal"`).
   * It can also be a `"geojson"` type for encoding
   * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
   *
   *
   * __Note:__
   *
   * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
   * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
   * `1552199579097`).
   * - Data `type` describes the semantics of the data rather than the primitive data types
   * (`number`, `string`, etc.). The same primitive data type can have different types of
   * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
   * data.
   * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
   * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
   * (for using an ordinal bin
   * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
   * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
   * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
   * the `type` property refers to the post-aggregation data type. For example, we can
   * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
   * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
   * output is `"quantitative"`.
   * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
   * have exactly the same type as their primary channels (e.g., `x`, `y`).
   */
  type?: StandardType;
  /**
   * A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between
   * `0` to `1` for opacity).
   */
  value?: number | FluffyValue;
}

export enum FluffyValue {
  Height = 'height'
}

/**
 * Y2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
 *
 * The `value` of this channel can be a number or a string `"height"`.
 *
 * A field definition of a secondary channel that shares a scale with another primary
 * channel.  For example, `x2`, `xError` and `xError2` share the same scale with `x`.
 *
 * Definition object for a constant value of an encoding channel.
 */
export interface Y2Class {
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: null;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * A constant value in visual domain (e.g., `"red"` / "#0099ff" for color, values between
   * `0` to `1` for opacity).
   */
  value?: number | FluffyValue;
}

/**
 * Definition for how to facet the data.  One of:
 * 1) [a field definition for faceting the plot by one
 * field](https://vega.github.io/vega-lite/docs/facet.html#field-def)
 * 2) [An object that maps `row` and `column` channels to their field
 * definitions](https://vega.github.io/vega-lite/docs/facet.html#mapping)
 *
 * A field definition for the horizontal facet of trellis plots.
 *
 * A field definition for the (flexible) facet of trellis plots.
 *
 * If either `row` or `column` is specified, this channel will be ignored.
 *
 * A field definition for the vertical facet of trellis plots.
 */
export interface Facet {
  /**
   * Aggregation function for the field
   * (e.g., `mean`, `sum`, `median`, `min`, `max`, `count`).
   *
   * __Default value:__ `undefined` (None)
   */
  aggregate?: ArgmDef | AggregateOp;
  /**
   * A flag for binning a `quantitative` field, [an object defining binning
   * parameters](https://vega.github.io/vega-lite/docs/bin.html#params), or indicating that
   * the data for `x` or `y` channel are binned before they are imported into Vega-Lite
   * (`"binned"`).
   *
   * - If `true`, default [binning parameters](https://vega.github.io/vega-lite/docs/bin.html)
   * will be applied.
   *
   * - If `"binned"`, this indicates that the data for the `x` (or `y`) channel are already
   * binned. You can map the bin-start field to `x` (or `y`) and the bin-end field to `x2` (or
   * `y2`). The scale and axis will be formatted similar to binning in Vega-lite.  To adjust
   * the axis ticks based on the bin step, you can also set the axis's
   * [`tickMinStep`](https://vega.github.io/vega-lite/docs/axis.html#ticks) property.
   *
   * __Default value:__ `false`
   */
  bin?: boolean | BinParams | null;
  /**
   * __Required.__ A string defining the name of the field from which to pull a data value
   * or an object defining iterated values from the
   * [`repeat`](https://vega.github.io/vega-lite/docs/repeat.html) operator.
   *
   * __Note:__ Dots (`.`) and brackets (`[` and `]`) can be used to access nested objects
   * (e.g., `"field": "foo.bar"` and `"field": "foo['bar']"`).
   * If field names contain dots or brackets but are not nested, you can use `\\` to escape
   * dots and brackets (e.g., `"a\\.b"` and `"a\\[0\\]"`).
   * See more details about escaping in the [field
   * documentation](https://vega.github.io/vega-lite/docs/field.html).
   *
   * __Note:__ `field` is not required if `aggregate` is `count`.
   */
  field?: RepeatRef | string;
  /**
   * An object defining properties of a facet's header.
   */
  header?: Header;
  /**
   * Sort order for the encoded field.
   *
   * For continuous fields (quantitative or temporal), `sort` can be either `"ascending"` or
   * `"descending"`.
   *
   * For discrete fields, `sort` can be one of the following:
   * - `"ascending"` or `"descending"` -- for sorting by the values' natural order in
   * Javascript.
   * - [A sort field definition](https://vega.github.io/vega-lite/docs/sort.html#sort-field)
   * for sorting by another field.
   * - [An array specifying the field values in preferred
   * order](https://vega.github.io/vega-lite/docs/sort.html#sort-array). In this case, the
   * sort order will obey the values in the array, followed by any unspecified values in their
   * original order.  For discrete time field, values in the sort array can be [date-time
   * definition objects](types#datetime). In addition, for time units `"month"` and `"day"`,
   * the values can be the month or day names (case insensitive) or their 3-letter initials
   * (e.g., `"Mon"`, `"Tue"`).
   * - `null` indicating no sort.
   *
   * __Default value:__ `"ascending"`
   *
   * __Note:__ `null` is not supported for `row` and `column`.
   */
  sort?: Array<boolean | DateTime | number | string> | SortEncodingSortField | SortOrder | null;
  /**
   * Time unit (e.g., `year`, `yearmonth`, `month`, `hours`) for a temporal field.
   * or [a temporal field that gets casted as
   * ordinal](https://vega.github.io/vega-lite/docs/type.html#cast).
   *
   * __Default value:__ `undefined` (None)
   */
  timeUnit?: TimeUnit;
  /**
   * A title for the field. If `null`, the title will be removed.
   *
   * __Default value:__  derived from the field's name and transformation function
   * (`aggregate`, `bin` and `timeUnit`).  If the field has an aggregate function, the
   * function is displayed as part of the title (e.g., `"Sum of Profit"`). If the field is
   * binned or has a time unit applied, the applied function is shown in parentheses (e.g.,
   * `"Profit (binned)"`, `"Transaction Date (year-month)"`).  Otherwise, the title is simply
   * the field name.
   *
   * __Notes__:
   *
   * 1) You can customize the default field title format by providing the
   * [`fieldTitle`](https://vega.github.io/vega-lite/docs/config.html#top-level-config)
   * property in the [config](https://vega.github.io/vega-lite/docs/config.html) or
   * [`fieldTitle` function via the `compile` function's
   * options](https://vega.github.io/vega-lite/docs/compile.html#field-title).
   *
   * 2) If both field definition's `title` and axis, header, or legend `title` are defined,
   * axis/header/legend title will be used.
   */
  title?: null | string;
  /**
   * The encoded field's type of measurement (`"quantitative"`, `"temporal"`, `"ordinal"`, or
   * `"nominal"`).
   * It can also be a `"geojson"` type for encoding
   * ['geoshape'](https://vega.github.io/vega-lite/docs/geoshape.html).
   *
   *
   * __Note:__
   *
   * - Data values for a temporal field can be either a date-time string (e.g., `"2015-03-07
   * 12:32:17"`, `"17:01"`, `"2015-03-16"`. `"2015"`) or a timestamp number (e.g.,
   * `1552199579097`).
   * - Data `type` describes the semantics of the data rather than the primitive data types
   * (`number`, `string`, etc.). The same primitive data type can have different types of
   * measurement. For example, numeric data can represent quantitative, ordinal, or nominal
   * data.
   * - When using with [`bin`](https://vega.github.io/vega-lite/docs/bin.html), the `type`
   * property can be either `"quantitative"` (for using a linear bin scale) or [`"ordinal"`
   * (for using an ordinal bin
   * scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`timeUnit`](https://vega.github.io/vega-lite/docs/timeunit.html), the
   * `type` property can be either `"temporal"` (for using a temporal scale) or [`"ordinal"`
   * (for using an ordinal scale)](https://vega.github.io/vega-lite/docs/type.html#cast-bin).
   * - When using with [`aggregate`](https://vega.github.io/vega-lite/docs/aggregate.html),
   * the `type` property refers to the post-aggregation data type. For example, we can
   * calculate count `distinct` of a categorical field `"cat"` using `{"aggregate":
   * "distinct", "field": "cat", "type": "quantitative"}`. The `"type"` of the aggregate
   * output is `"quantitative"`.
   * - Secondary channels (e.g., `x2`, `y2`, `xError`, `yError`) do not have `type` as they
   * have exactly the same type as their primary channels (e.g., `x`, `y`).
   */
  type?: StandardType;
  /**
   * A field definition for the horizontal facet of trellis plots.
   */
  column?: FacetFieldDef;
  /**
   * A field definition for the vertical facet of trellis plots.
   */
  row?: FacetFieldDef;
}

/**
 * A full layered plot specification, which may contains `encoding` and `projection`
 * properties that will be applied to underlying unit (single-view) specifications.
 *
 * A unit specification, which can contain either [primitive marks or composite
 * marks](https://vega.github.io/vega-lite/docs/mark.html#types).
 *
 * Base interface for a unit (single-view) specification.
 */
export interface LayerSpec {
  /**
   * An object describing the data source
   */
  data?: Data;
  /**
   * Description of this mark for commenting purpose.
   */
  description?: string;
  /**
   * A shared key-value mapping between encoding channels and definition of fields in the
   * underlying layers.
   *
   * A key-value mapping between encoding channels and definition of fields.
   */
  encoding?: LayerEncoding;
  /**
   * The height of a visualization.
   *
   * __Default value:__
   * - If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type
   * is `"fit"` or its y-channel has a [continuous
   * scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the height will be
   * the value of
   * [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).
   * - For y-axis with a band or point scale: if
   * [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value
   * or unspecified, the height is [determined by the range step, paddings, and the
   * cardinality of the field mapped to
   * y-channel](https://vega.github.io/vega-lite/docs/scale.html#band). Otherwise, if the
   * `rangeStep` is `null`, the height will be the value of
   * [`config.view.height`](https://vega.github.io/vega-lite/docs/spec.html#config).
   * - If no field is mapped to `y` channel, the `height` will be the value of `rangeStep`.
   *
   * __Note__: For plots with [`row` and `column`
   * channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the
   * height of a single view.
   *
   * __See also:__ The documentation for [width and
   * height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.
   */
  height?: number;
  /**
   * Layer or single view specifications to be layered.
   *
   * __Note__: Specifications inside `layer` cannot use `row` and `column` channels as
   * layering facet specifications is not allowed. Instead, use the [facet
   * operator](https://vega.github.io/vega-lite/docs/facet.html) and place a layer inside a
   * facet.
   */
  layer?: LayerSpec[];
  /**
   * Name of the visualization for later reference.
   */
  name?: string;
  /**
   * An object defining properties of the geographic projection shared by underlying layers.
   *
   * An object defining properties of geographic projection, which will be applied to `shape`
   * path for `"geoshape"` marks
   * and to `latitude` and `"longitude"` channels for other marks.
   */
  projection?: Projection;
  /**
   * Scale, axis, and legend resolutions for view composition specifications.
   */
  resolve?: Resolve;
  /**
   * Title for the plot.
   */
  title?: TitleParams | string;
  /**
   * An array of data transformations such as filter and new field calculation.
   */
  transform?: Transform[];
  /**
   * An object defining the view background's fill and stroke.
   *
   * __Default value:__ none (transparent)
   */
  view?: ViewBackground;
  /**
   * The width of a visualization.
   *
   * __Default value:__ This will be determined by the following rules:
   *
   * - If a view's [`autosize`](https://vega.github.io/vega-lite/docs/size.html#autosize) type
   * is `"fit"` or its x-channel has a [continuous
   * scale](https://vega.github.io/vega-lite/docs/scale.html#continuous), the width will be
   * the value of
   * [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).
   * - For x-axis with a band or point scale: if
   * [`rangeStep`](https://vega.github.io/vega-lite/docs/scale.html#band) is a numeric value
   * or unspecified, the width is [determined by the range step, paddings, and the cardinality
   * of the field mapped to
   * x-channel](https://vega.github.io/vega-lite/docs/scale.html#band).   Otherwise, if the
   * `rangeStep` is `null`, the width will be the value of
   * [`config.view.width`](https://vega.github.io/vega-lite/docs/spec.html#config).
   * - If no field is mapped to `x` channel, the `width` will be the value of
   * [`config.scale.textXRangeStep`](https://vega.github.io/vega-lite/docs/size.html#default-width-and-height)
   * for `text` mark and the value of `rangeStep` for other marks.
   *
   * __Note:__ For plots with [`row` and `column`
   * channels](https://vega.github.io/vega-lite/docs/encoding.html#facet), this represents the
   * width of a single view.
   *
   * __See also:__ The documentation for [width and
   * height](https://vega.github.io/vega-lite/docs/size.html) contains more examples.
   */
  width?: number;
  /**
   * A string describing the mark type (one of `"bar"`, `"circle"`, `"square"`, `"tick"`,
   * `"line"`,
   * `"area"`, `"point"`, `"rule"`, `"geoshape"`, and `"text"`) or a [mark definition
   * object](https://vega.github.io/vega-lite/docs/mark.html#mark-def).
   */
  mark?: MarkDefClass | Mark;
  /**
   * A key-value mapping between selection names and definitions.
   */
  selection?: {[key: string]: SelectionDef};
}

/**
 * A shared key-value mapping between encoding channels and definition of fields in the
 * underlying layers.
 *
 * A key-value mapping between encoding channels and definition of fields.
 */
export interface LayerEncoding {
  /**
   * Color of the marks – either fill or stroke color based on  the `filled` property of mark
   * definition.
   * By default, `color` represents fill color for `"area"`, `"bar"`, `"tick"`,
   * `"text"`, `"trail"`, `"circle"`, and `"square"` / stroke color for `"line"` and
   * `"point"`.
   *
   * __Default value:__ If undefined, the default color depends on [mark
   * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `color` property.
   *
   * _Note:_
   * 1) For fine-grained control over both fill and stroke colors of the marks, please use the
   * `fill` and `stroke` channels.  If either `fill` or `stroke` channel is specified, `color`
   * channel will be ignored.
   * 2) See the scale documentation for more information about customizing [color
   * scheme](https://vega.github.io/vega-lite/docs/scale.html#scheme).
   */
  color?: ValueDefWithConditionMarkPropFieldDefStringNull;
  /**
   * Additional levels of detail for grouping data in aggregate views and
   * in line, trail, and area marks without mapping data to a specific visual channel.
   */
  detail?: TypedFieldDef[] | TypedFieldDef;
  /**
   * Fill color of the marks.
   * __Default value:__ If undefined, the default color depends on [mark
   * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `color` property.
   *
   * _Note:_ When using `fill` channel, `color ` channel will be ignored. To customize both
   * fill and stroke, please use `fill` and `stroke` channels (not `fill` and `color`).
   */
  fill?: ValueDefWithConditionMarkPropFieldDefStringNull;
  /**
   * Fill opacity of the marks.
   *
   * __Default value:__ If undefined, the default opacity depends on [mark
   * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `fillOpacity` property.
   */
  fillOpacity?: ValueDefWithConditionMarkPropFieldDefNumber;
  /**
   * A URL to load upon mouse click.
   */
  href?: ValueDefWithConditionTextFieldDefValue;
  /**
   * A data field to use as a unique key for data binding. When a visualization’s data is
   * updated, the key value will be used to match data elements to existing mark instances.
   * Use a key channel to enable object constancy for transitions over dynamic data.
   */
  key?: TypedFieldDef;
  /**
   * Latitude position of geographically projected marks.
   */
  latitude?: LatitudeClass;
  /**
   * Latitude-2 position for geographically projected ranged `"area"`, `"bar"`, `"rect"`, and
   * `"rule"`.
   */
  latitude2?: Latitude2Class;
  /**
   * Longitude position of geographically projected marks.
   */
  longitude?: LatitudeClass;
  /**
   * Longitude-2 position for geographically projected ranged `"area"`, `"bar"`, `"rect"`,
   * and  `"rule"`.
   */
  longitude2?: Latitude2Class;
  /**
   * Opacity of the marks.
   *
   * __Default value:__ If undefined, the default opacity depends on [mark
   * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `opacity` property.
   */
  opacity?: ValueDefWithConditionMarkPropFieldDefNumber;
  /**
   * Order of the marks.
   * - For stacked marks, this `order` channel encodes [stack
   * order](https://vega.github.io/vega-lite/docs/stack.html#order).
   * - For line and trail marks, this `order` channel encodes order of data points in the
   * lines. This can be useful for creating [a connected
   * scatterplot](https://vega.github.io/vega-lite/examples/connected_scatterplot.html).
   * Setting `order` to `{"value": null}` makes the line marks use the original order in the
   * data sources.
   * - Otherwise, this `order` channel encodes layer order of the marks.
   *
   * __Note__: In aggregate plots, `order` field should be `aggregate`d to avoid creating
   * additional aggregation grouping.
   */
  order?: OrderFieldDef[] | OrderFieldDefClass;
  /**
   * Shape of the mark.
   *
   * 1. For `point` marks the supported values include:
   * - plotting shapes: `"circle"`, `"square"`, `"cross"`, `"diamond"`, `"triangle-up"`,
   * `"triangle-down"`, `"triangle-right"`, or `"triangle-left"`.
   * - the line symbol `"stroke"`
   * - centered directional shapes `"arrow"`, `"wedge"`, or `"triangle"`
   * - a custom [SVG path
   * string](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) (For correct
   * sizing, custom shape paths should be defined within a square bounding box with
   * coordinates ranging from -1 to 1 along both the x and y dimensions.)
   *
   * 2. For `geoshape` marks it should be a field definition of the geojson data
   *
   * __Default value:__ If undefined, the default shape depends on [mark
   * config](https://vega.github.io/vega-lite/docs/config.html#point-config)'s `shape`
   * property. (`"circle"` if unset.)
   */
  shape?: ValueDefWithConditionMarkPropFieldDefTypeForShapeStringNull;
  /**
   * Size of the mark.
   * - For `"point"`, `"square"` and `"circle"`, – the symbol size, or pixel area of the mark.
   * - For `"bar"` and `"tick"` – the bar and tick's size.
   * - For `"text"` – the text's font size.
   * - Size is unsupported for `"line"`, `"area"`, and `"rect"`. (Use `"trail"` instead of
   * line with varying size)
   */
  size?: ValueDefWithConditionMarkPropFieldDefNumber;
  /**
   * Stroke color of the marks.
   * __Default value:__ If undefined, the default color depends on [mark
   * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `color` property.
   *
   * _Note:_ When using `stroke` channel, `color ` channel will be ignored. To customize both
   * stroke and fill, please use `stroke` and `fill` channels (not `stroke` and `color`).
   */
  stroke?: ValueDefWithConditionMarkPropFieldDefStringNull;
  /**
   * Stroke opacity of the marks.
   *
   * __Default value:__ If undefined, the default opacity depends on [mark
   * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `strokeOpacity`
   * property.
   */
  strokeOpacity?: ValueDefWithConditionMarkPropFieldDefNumber;
  /**
   * Stroke width of the marks.
   *
   * __Default value:__ If undefined, the default stroke width depends on [mark
   * config](https://vega.github.io/vega-lite/docs/config.html#mark)'s `strokeWidth` property.
   */
  strokeWidth?: ValueDefWithConditionMarkPropFieldDefNumber;
  /**
   * Text of the `text` mark.
   */
  text?: ValueDefWithConditionTextFieldDefValue;
  /**
   * The tooltip text to show upon mouse hover.
   */
  tooltip?: TextFieldDef[] | FieldDefWithConditionTextFieldDefValue | null;
  /**
   * X coordinates of the marks, or width of horizontal `"bar"` and `"area"` without `x2`.
   *
   * The `value` of this channel can be a number or a string `"width"`.
   */
  x?: XClass;
  /**
   * X2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   *
   * The `value` of this channel can be a number or a string `"width"`.
   */
  x2?: X2Class;
  /**
   * Error value of x coordinates for error specified `"errorbar"` and `"errorband"`.
   */
  xError?: Latitude2Class;
  /**
   * Secondary error value of x coordinates for error specified `"errorbar"` and `"errorband"`.
   */
  xError2?: Latitude2Class;
  /**
   * Y coordinates of the marks, or height of vertical `"bar"` and `"area"` without `y2`
   *
   * The `value` of this channel can be a number or a string `"height"`.
   */
  y?: YClass;
  /**
   * Y2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   *
   * The `value` of this channel can be a number or a string `"height"`.
   */
  y2?: Y2Class;
  /**
   * Error value of y coordinates for error specified `"errorbar"` and `"errorband"`.
   */
  yError?: Latitude2Class;
  /**
   * Secondary error value of y coordinates for error specified `"errorbar"` and `"errorband"`.
   */
  yError2?: Latitude2Class;
}

export interface MarkDefClass {
  /**
   * The horizontal alignment of the text. One of `"left"`, `"right"`, `"center"`.
   */
  align?: Align;
  /**
   * The rotation angle of the text, in degrees.
   */
  angle?: number;
  /**
   * The vertical alignment of the text. One of `"top"`, `"middle"`, `"bottom"`.
   *
   * __Default value:__ `"middle"`
   */
  baseline?: TextBaseline;
  /**
   * Offset between bars for binned field.  Ideal value for this is either 0 (Preferred by
   * statisticians) or 1 (Vega-Lite Default, D3 example style).
   *
   * __Default value:__ `1`
   */
  binSpacing?: number;
  /**
   * Whether a mark be clipped to the enclosing group’s width and height.
   *
   * Whether a composite mark be clipped to the enclosing group’s width and height.
   */
  clip?: boolean;
  /**
   * Default color.  Note that `fill` and `stroke` have higher precedence than `color` and
   * will override `color`.
   *
   * __Default value:__ <span style="color: #4682b4;">&#9632;</span> `"#4682b4"`
   *
   * __Note:__ This property cannot be used in a [style
   * config](https://vega.github.io/vega-lite/docs/mark.html#style-config).
   */
  color?: string;
  /**
   * The radius in pixels of rounded rectangle corners.
   *
   * __Default value:__ `0`
   */
  cornerRadius?: number;
  /**
   * The mouse cursor used over the mark. Any valid [CSS cursor
   * type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used.
   */
  cursor?: Cursor;
  /**
   * The direction of the text. One of `"ltr"` (left-to-right) or `"rtl"` (right-to-left).
   * This property determines on which side is truncated in response to the limit parameter.
   *
   * __Default value:__ `"ltr"`
   */
  dir?: Dir;
  /**
   * The horizontal offset, in pixels, between the text label and its anchor point. The offset
   * is applied after rotation by the _angle_ property.
   */
  dx?: number;
  /**
   * The vertical offset, in pixels, between the text label and its anchor point. The offset
   * is applied after rotation by the _angle_ property.
   */
  dy?: number;
  /**
   * The ellipsis string for text truncated in response to the limit parameter.
   *
   * __Default value:__ `"…"`
   */
  ellipsis?: string;
  /**
   * Default Fill Color.  This has higher precedence than `config.color`
   *
   * __Default value:__ (None)
   */
  fill?: string;
  /**
   * Whether the mark's color should be used as fill color instead of stroke color.
   *
   * __Default value:__ `false` for `point`, `line` and `rule`; otherwise, `true`.
   *
   * __Note:__ This property cannot be used in a [style
   * config](https://vega.github.io/vega-lite/docs/mark.html#style-config).
   */
  filled?: boolean;
  /**
   * The fill opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  fillOpacity?: number;
  /**
   * The typeface to set the text in (e.g., `"Helvetica Neue"`).
   */
  font?: string;
  /**
   * The font size, in pixels.
   */
  fontSize?: number;
  /**
   * The font style (e.g., `"italic"`).
   */
  fontStyle?: string;
  /**
   * The font weight.
   * This can be either a string (e.g `"bold"`, `"normal"`) or a number (`100`, `200`, `300`,
   * ..., `900` where `"normal"` = `400` and `"bold"` = `700`).
   */
  fontWeight?: number | FontWeightEnum;
  /**
   * A URL to load upon mouse click. If defined, the mark acts as a hyperlink.
   */
  href?: string;
  /**
   * The line interpolation method to use for line and area marks. One of the following:
   * - `"linear"`: piecewise linear segments, as in a polyline.
   * - `"linear-closed"`: close the linear segments to form a polygon.
   * - `"step"`: alternate between horizontal and vertical segments, as in a step function.
   * - `"step-before"`: alternate between vertical and horizontal segments, as in a step
   * function.
   * - `"step-after"`: alternate between horizontal and vertical segments, as in a step
   * function.
   * - `"basis"`: a B-spline, with control point duplication on the ends.
   * - `"basis-open"`: an open B-spline; may not intersect the start or end.
   * - `"basis-closed"`: a closed B-spline, as in a loop.
   * - `"cardinal"`: a Cardinal spline, with control point duplication on the ends.
   * - `"cardinal-open"`: an open Cardinal spline; may not intersect the start or end, but
   * will intersect other control points.
   * - `"cardinal-closed"`: a closed Cardinal spline, as in a loop.
   * - `"bundle"`: equivalent to basis, except the tension parameter is used to straighten the
   * spline.
   * - `"monotone"`: cubic interpolation that preserves monotonicity in y.
   *
   * The line interpolation method for the error band. One of the following:
   * - `"linear"`: piecewise linear segments, as in a polyline.
   * - `"linear-closed"`: close the linear segments to form a polygon.
   * - `"step"`: a piecewise constant function (a step function) consisting of alternating
   * horizontal and vertical lines. The y-value changes at the midpoint of each pair of
   * adjacent x-values.
   * - `"step-before"`: a piecewise constant function (a step function) consisting of
   * alternating horizontal and vertical lines. The y-value changes before the x-value.
   * - `"step-after"`: a piecewise constant function (a step function) consisting of
   * alternating horizontal and vertical lines. The y-value changes after the x-value.
   * - `"basis"`: a B-spline, with control point duplication on the ends.
   * - `"basis-open"`: an open B-spline; may not intersect the start or end.
   * - `"basis-closed"`: a closed B-spline, as in a loop.
   * - `"cardinal"`: a Cardinal spline, with control point duplication on the ends.
   * - `"cardinal-open"`: an open Cardinal spline; may not intersect the start or end, but
   * will intersect other control points.
   * - `"cardinal-closed"`: a closed Cardinal spline, as in a loop.
   * - `"bundle"`: equivalent to basis, except the tension parameter is used to straighten the
   * spline.
   * - `"monotone"`: cubic interpolation that preserves monotonicity in y.
   */
  interpolate?: Interpolate;
  /**
   * The maximum length of the text mark in pixels. The text value will be automatically
   * truncated if the rendered size exceeds the limit.
   *
   * __Default value:__ `0`, indicating no limit
   */
  limit?: number;
  /**
   * A flag for overlaying line on top of area marks, or an object defining the properties of
   * the overlayed lines.
   *
   * - If this value is an empty object (`{}`) or `true`, lines with default properties will
   * be used.
   *
   * - If this value is `false`, no lines would be automatically added to area marks.
   *
   * __Default value:__ `false`.
   */
  line?: boolean | OverlayMarkDef;
  /**
   * The overall opacity (value between [0,1]).
   *
   * __Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or
   * `square` marks or layered `bar` charts and `1` otherwise.
   *
   * The opacity (value between [0,1]) of the mark.
   */
  opacity?: number;
  /**
   * For line and trail marks, this `order` property can be set to `null` or `false` to make
   * the lines use the original order in the data sources.
   */
  order?: boolean | null;
  /**
   * The orientation of a non-stacked bar, tick, area, and line charts.
   * The value is either horizontal (default) or vertical.
   * - For bar, rule and tick, this determines whether the size of the bar and tick
   * should be applied to x or y dimension.
   * - For area, this property determines the orient property of the Vega output.
   * - For line and trail marks, this property determines the sort order of the points in the
   * line
   * if `config.sortLineBy` is not specified.
   * For stacked charts, this is always determined by the orientation of the stack;
   * therefore explicitly specified value will be ignored.
   *
   * Orientation of the box plot.  This is normally automatically determined based on types of
   * fields on x and y channels. However, an explicit `orient` be specified when the
   * orientation is ambiguous.
   *
   * __Default value:__ `"vertical"`.
   *
   * Orientation of the error bar.  This is normally automatically determined, but can be
   * specified when the orientation is ambiguous and cannot be automatically determined.
   *
   * Orientation of the error band. This is normally automatically determined, but can be
   * specified when the orientation is ambiguous and cannot be automatically determined.
   */
  orient?: Orientation;
  /**
   * A flag for overlaying points on top of line or area marks, or an object defining the
   * properties of the overlayed points.
   *
   * - If this property is `"transparent"`, transparent points will be used (for enhancing
   * tooltips and selections).
   *
   * - If this property is an empty object (`{}`) or `true`, filled points with default
   * properties will be used.
   *
   * - If this property is `false`, no points would be automatically added to line or area
   * marks.
   *
   * __Default value:__ `false`.
   */
  point?: boolean | OverlayMarkDef | PointEnum;
  /**
   * Polar coordinate radial offset, in pixels, of the text label from the origin determined
   * by the `x` and `y` properties.
   */
  radius?: number;
  /**
   * Shape of the point marks. Supported values include:
   * - plotting shapes: `"circle"`, `"square"`, `"cross"`, `"diamond"`, `"triangle-up"`,
   * `"triangle-down"`, `"triangle-right"`, or `"triangle-left"`.
   * - the line symbol `"stroke"`
   * - centered directional shapes `"arrow"`, `"wedge"`, or `"triangle"`
   * - a custom [SVG path
   * string](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) (For correct
   * sizing, custom shape paths should be defined within a square bounding box with
   * coordinates ranging from -1 to 1 along both the x and y dimensions.)
   *
   * __Default value:__ `"circle"`
   */
  shape?: string;
  /**
   * Default size for marks.
   * - For `point`/`circle`/`square`, this represents the pixel area of the marks. For
   * example: in the case of circles, the radius is determined in part by the square root of
   * the size value.
   * - For `bar`, this represents the band size of the bar, in pixels.
   * - For `text`, this represents the font size, in pixels.
   *
   * __Default value:__ `30` for point, circle, square marks; `rangeStep` - 1 for bar marks
   * with discrete dimensions; `5` for bar marks with continuous dimensions; `11` for text
   * marks.
   *
   * Size of the box and median tick of a box plot
   */
  size?: number;
  /**
   * Default Stroke Color.  This has higher precedence than `config.color`
   *
   * __Default value:__ (None)
   */
  stroke?: string;
  /**
   * The stroke cap for line ending style. One of `"butt"`, `"round"`, or `"square"`.
   *
   * __Default value:__ `"square"`
   */
  strokeCap?: StrokeCap;
  /**
   * An array of alternating stroke, space lengths for creating dashed or dotted lines.
   */
  strokeDash?: number[];
  /**
   * The offset (in pixels) into which to begin drawing with the stroke dash array.
   */
  strokeDashOffset?: number;
  /**
   * The stroke line join method. One of `"miter"`, `"round"` or `"bevel"`.
   *
   * __Default value:__ `"miter"`
   */
  strokeJoin?: StrokeJoin;
  /**
   * The miter limit at which to bevel a line join.
   */
  strokeMiterLimit?: number;
  /**
   * The stroke opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  strokeOpacity?: number;
  /**
   * The stroke width, in pixels.
   */
  strokeWidth?: number;
  /**
   * A string or array of strings indicating the name of custom styles to apply to the mark. A
   * style is a named collection of mark property defaults defined within the [style
   * configuration](https://vega.github.io/vega-lite/docs/mark.html#style-config). If style is
   * an array, later styles will override earlier styles. Any [mark
   * properties](https://vega.github.io/vega-lite/docs/encoding.html#mark-prop) explicitly
   * defined within the `encoding` will override a style default.
   *
   * __Default value:__ The mark's name.  For example, a bar mark will have style `"bar"` by
   * default.
   * __Note:__ Any specified style will augment the default style. For example, a bar mark
   * with `"style": "foo"` will receive from `config.style.bar` and `config.style.foo` (the
   * specified style `"foo"` has higher precedence).
   */
  style?: string[] | string;
  /**
   * Depending on the interpolation type, sets the tension parameter (for line and area
   * marks).
   *
   * The tension parameter for the interpolation type of the error band.
   */
  tension?: number;
  /**
   * Placeholder text if the `text` channel is not specified
   */
  text?: string;
  /**
   * Polar coordinate angle, in radians, of the text label from the origin determined by the
   * `x` and `y` properties. Values for `theta` follow the same convention of `arc` mark
   * `startAngle` and `endAngle` properties: angles are measured in radians, with `0`
   * indicating "north".
   */
  theta?: number;
  /**
   * Thickness of the tick mark.
   *
   * __Default value:__  `1`
   */
  thickness?: number;
  /**
   * The tooltip text string to show upon mouse hover or an object defining which fields
   * should the tooltip be derived from.
   *
   * - If `tooltip` is `{"content": "encoding"}`, then all fields from `encoding` will be
   * used.
   * - If `tooltip` is `{"content": "data"}`, then all fields that appear in the highlighted
   * data point will be used.
   * - If set to `null`, then no tooltip will be used.
   */
  tooltip?: TooltipContent | null | string;
  /**
   * The mark type. This could a primitive mark type
   * (one of `"bar"`, `"circle"`, `"square"`, `"tick"`, `"line"`,
   * `"area"`, `"point"`, `"geoshape"`, `"rule"`, and `"text"`)
   * or a composite mark type (`"boxplot"`, `"errorband"`, `"errorbar"`).
   */
  type: Mark;
  /**
   * X coordinates of the marks, or width of horizontal `"bar"` and `"area"` without `x2`.
   */
  x?: number;
  /**
   * X2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   */
  x2?: number;
  /**
   * Offset for x2-position.
   */
  x2Offset?: number;
  /**
   * Offset for x-position.
   */
  xOffset?: number;
  /**
   * Y coordinates of the marks, or height of vertical `"bar"` and `"area"` without `y2`
   */
  y?: number;
  /**
   * Y2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   */
  y2?: number;
  /**
   * Offset for y2-position.
   */
  y2Offset?: number;
  /**
   * Offset for y-position.
   */
  yOffset?: number;
  box?: boolean | MarkConfig;
  /**
   * The extent of the whiskers. Available options include:
   * - `"min-max"`: min and max are the lower and upper whiskers respectively.
   * - A number representing multiple of the interquartile range.  This number will be
   * multiplied by the IQR to determine whisker boundary, which spans from the smallest data
   * to the largest data within the range _[Q1 - k * IQR, Q3 + k * IQR]_ where _Q1_ and _Q3_
   * are the first and third quartiles while _IQR_ is the interquartile range (_Q3-Q1_).
   *
   * __Default value:__ `1.5`.
   *
   * The extent of the rule. Available options include:
   * - `"ci"`: Extend the rule to the confidence interval of the mean.
   * - `"stderr"`: The size of rule are set to the value of standard error, extending from the
   * mean.
   * - `"stdev"`: The size of rule are set to the value of standard deviation, extending from
   * the mean.
   * - `"iqr"`: Extend the rule to the q1 and q3.
   *
   * __Default value:__ `"stderr"`.
   *
   * The extent of the band. Available options include:
   * - `"ci"`: Extend the band to the confidence interval of the mean.
   * - `"stderr"`: The size of band are set to the value of standard error, extending from the
   * mean.
   * - `"stdev"`: The size of band are set to the value of standard deviation, extending from
   * the mean.
   * - `"iqr"`: Extend the band to the q1 and q3.
   *
   * __Default value:__ `"stderr"`.
   */
  extent?: number | ExtentExtent;
  median?: boolean | MarkConfig;
  outliers?: boolean | MarkConfig;
  rule?: boolean | MarkConfig;
  ticks?: boolean | MarkConfig;
  band?: boolean | MarkConfig;
  borders?: boolean | MarkConfig;
}

/**
 * Circle-Specific Config
 *
 * Geoshape-Specific Config
 *
 * Mark Config
 *
 * Point-Specific Config
 *
 * Rect-Specific Config
 *
 * Rule-Specific Config
 *
 * Square-Specific Config
 */
export interface MarkConfig {
  /**
   * The horizontal alignment of the text. One of `"left"`, `"right"`, `"center"`.
   */
  align?: Align;
  /**
   * The rotation angle of the text, in degrees.
   */
  angle?: number;
  /**
   * The vertical alignment of the text. One of `"top"`, `"middle"`, `"bottom"`.
   *
   * __Default value:__ `"middle"`
   */
  baseline?: TextBaseline;
  /**
   * Default color.  Note that `fill` and `stroke` have higher precedence than `color` and
   * will override `color`.
   *
   * __Default value:__ <span style="color: #4682b4;">&#9632;</span> `"#4682b4"`
   *
   * __Note:__ This property cannot be used in a [style
   * config](https://vega.github.io/vega-lite/docs/mark.html#style-config).
   */
  color?: string;
  /**
   * The radius in pixels of rounded rectangle corners.
   *
   * __Default value:__ `0`
   */
  cornerRadius?: number;
  /**
   * The mouse cursor used over the mark. Any valid [CSS cursor
   * type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used.
   */
  cursor?: Cursor;
  /**
   * The direction of the text. One of `"ltr"` (left-to-right) or `"rtl"` (right-to-left).
   * This property determines on which side is truncated in response to the limit parameter.
   *
   * __Default value:__ `"ltr"`
   */
  dir?: Dir;
  /**
   * The horizontal offset, in pixels, between the text label and its anchor point. The offset
   * is applied after rotation by the _angle_ property.
   */
  dx?: number;
  /**
   * The vertical offset, in pixels, between the text label and its anchor point. The offset
   * is applied after rotation by the _angle_ property.
   */
  dy?: number;
  /**
   * The ellipsis string for text truncated in response to the limit parameter.
   *
   * __Default value:__ `"…"`
   */
  ellipsis?: string;
  /**
   * Default Fill Color.  This has higher precedence than `config.color`
   *
   * __Default value:__ (None)
   */
  fill?: string;
  /**
   * Whether the mark's color should be used as fill color instead of stroke color.
   *
   * __Default value:__ `false` for `point`, `line` and `rule`; otherwise, `true`.
   *
   * __Note:__ This property cannot be used in a [style
   * config](https://vega.github.io/vega-lite/docs/mark.html#style-config).
   */
  filled?: boolean;
  /**
   * The fill opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  fillOpacity?: number;
  /**
   * The typeface to set the text in (e.g., `"Helvetica Neue"`).
   */
  font?: string;
  /**
   * The font size, in pixels.
   */
  fontSize?: number;
  /**
   * The font style (e.g., `"italic"`).
   */
  fontStyle?: string;
  /**
   * The font weight.
   * This can be either a string (e.g `"bold"`, `"normal"`) or a number (`100`, `200`, `300`,
   * ..., `900` where `"normal"` = `400` and `"bold"` = `700`).
   */
  fontWeight?: number | FontWeightEnum;
  /**
   * A URL to load upon mouse click. If defined, the mark acts as a hyperlink.
   */
  href?: string;
  /**
   * The line interpolation method to use for line and area marks. One of the following:
   * - `"linear"`: piecewise linear segments, as in a polyline.
   * - `"linear-closed"`: close the linear segments to form a polygon.
   * - `"step"`: alternate between horizontal and vertical segments, as in a step function.
   * - `"step-before"`: alternate between vertical and horizontal segments, as in a step
   * function.
   * - `"step-after"`: alternate between horizontal and vertical segments, as in a step
   * function.
   * - `"basis"`: a B-spline, with control point duplication on the ends.
   * - `"basis-open"`: an open B-spline; may not intersect the start or end.
   * - `"basis-closed"`: a closed B-spline, as in a loop.
   * - `"cardinal"`: a Cardinal spline, with control point duplication on the ends.
   * - `"cardinal-open"`: an open Cardinal spline; may not intersect the start or end, but
   * will intersect other control points.
   * - `"cardinal-closed"`: a closed Cardinal spline, as in a loop.
   * - `"bundle"`: equivalent to basis, except the tension parameter is used to straighten the
   * spline.
   * - `"monotone"`: cubic interpolation that preserves monotonicity in y.
   */
  interpolate?: Interpolate;
  /**
   * The maximum length of the text mark in pixels. The text value will be automatically
   * truncated if the rendered size exceeds the limit.
   *
   * __Default value:__ `0`, indicating no limit
   */
  limit?: number;
  /**
   * The overall opacity (value between [0,1]).
   *
   * __Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or
   * `square` marks or layered `bar` charts and `1` otherwise.
   */
  opacity?: number;
  /**
   * For line and trail marks, this `order` property can be set to `null` or `false` to make
   * the lines use the original order in the data sources.
   */
  order?: boolean | null;
  /**
   * The orientation of a non-stacked bar, tick, area, and line charts.
   * The value is either horizontal (default) or vertical.
   * - For bar, rule and tick, this determines whether the size of the bar and tick
   * should be applied to x or y dimension.
   * - For area, this property determines the orient property of the Vega output.
   * - For line and trail marks, this property determines the sort order of the points in the
   * line
   * if `config.sortLineBy` is not specified.
   * For stacked charts, this is always determined by the orientation of the stack;
   * therefore explicitly specified value will be ignored.
   */
  orient?: Orientation;
  /**
   * Polar coordinate radial offset, in pixels, of the text label from the origin determined
   * by the `x` and `y` properties.
   */
  radius?: number;
  /**
   * Shape of the point marks. Supported values include:
   * - plotting shapes: `"circle"`, `"square"`, `"cross"`, `"diamond"`, `"triangle-up"`,
   * `"triangle-down"`, `"triangle-right"`, or `"triangle-left"`.
   * - the line symbol `"stroke"`
   * - centered directional shapes `"arrow"`, `"wedge"`, or `"triangle"`
   * - a custom [SVG path
   * string](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) (For correct
   * sizing, custom shape paths should be defined within a square bounding box with
   * coordinates ranging from -1 to 1 along both the x and y dimensions.)
   *
   * __Default value:__ `"circle"`
   */
  shape?: string;
  /**
   * Default size for marks.
   * - For `point`/`circle`/`square`, this represents the pixel area of the marks. For
   * example: in the case of circles, the radius is determined in part by the square root of
   * the size value.
   * - For `bar`, this represents the band size of the bar, in pixels.
   * - For `text`, this represents the font size, in pixels.
   *
   * __Default value:__ `30` for point, circle, square marks; `rangeStep` - 1 for bar marks
   * with discrete dimensions; `5` for bar marks with continuous dimensions; `11` for text
   * marks.
   */
  size?: number;
  /**
   * Default Stroke Color.  This has higher precedence than `config.color`
   *
   * __Default value:__ (None)
   */
  stroke?: string;
  /**
   * The stroke cap for line ending style. One of `"butt"`, `"round"`, or `"square"`.
   *
   * __Default value:__ `"square"`
   */
  strokeCap?: StrokeCap;
  /**
   * An array of alternating stroke, space lengths for creating dashed or dotted lines.
   */
  strokeDash?: number[];
  /**
   * The offset (in pixels) into which to begin drawing with the stroke dash array.
   */
  strokeDashOffset?: number;
  /**
   * The stroke line join method. One of `"miter"`, `"round"` or `"bevel"`.
   *
   * __Default value:__ `"miter"`
   */
  strokeJoin?: StrokeJoin;
  /**
   * The miter limit at which to bevel a line join.
   */
  strokeMiterLimit?: number;
  /**
   * The stroke opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  strokeOpacity?: number;
  /**
   * The stroke width, in pixels.
   */
  strokeWidth?: number;
  /**
   * Depending on the interpolation type, sets the tension parameter (for line and area marks).
   */
  tension?: number;
  /**
   * Placeholder text if the `text` channel is not specified
   */
  text?: string;
  /**
   * Polar coordinate angle, in radians, of the text label from the origin determined by the
   * `x` and `y` properties. Values for `theta` follow the same convention of `arc` mark
   * `startAngle` and `endAngle` properties: angles are measured in radians, with `0`
   * indicating "north".
   */
  theta?: number;
  /**
   * The tooltip text string to show upon mouse hover or an object defining which fields
   * should the tooltip be derived from.
   *
   * - If `tooltip` is `{"content": "encoding"}`, then all fields from `encoding` will be
   * used.
   * - If `tooltip` is `{"content": "data"}`, then all fields that appear in the highlighted
   * data point will be used.
   * - If set to `null`, then no tooltip will be used.
   */
  tooltip?: TooltipContent | null | string;
  /**
   * X coordinates of the marks, or width of horizontal `"bar"` and `"area"` without `x2`.
   */
  x?: number;
  /**
   * X2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   */
  x2?: number;
  /**
   * Y coordinates of the marks, or height of vertical `"bar"` and `"area"` without `y2`
   */
  y?: number;
  /**
   * Y2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   */
  y2?: number;
}

/**
 * The mouse cursor used over the mark. Any valid [CSS cursor
 * type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used.
 */
export enum Cursor {
  Alias = 'alias',
  AllScroll = 'all-scroll',
  Auto = 'auto',
  Cell = 'cell',
  ColResize = 'col-resize',
  ContextMenu = 'context-menu',
  Copy = 'copy',
  Crosshair = 'crosshair',
  Default = 'default',
  EResize = 'e-resize',
  EwResize = 'ew-resize',
  Grab = 'grab',
  Grabbing = 'grabbing',
  Help = 'help',
  Move = 'move',
  NResize = 'n-resize',
  NeResize = 'ne-resize',
  NeswResize = 'nesw-resize',
  NoDrop = 'no-drop',
  None = 'none',
  NotAllowed = 'not-allowed',
  NsResize = 'ns-resize',
  NwResize = 'nw-resize',
  NwseResize = 'nwse-resize',
  Pointer = 'pointer',
  Progress = 'progress',
  RowResize = 'row-resize',
  SResize = 's-resize',
  SeResize = 'se-resize',
  SwResize = 'sw-resize',
  Text = 'text',
  VerticalText = 'vertical-text',
  WResize = 'w-resize',
  Wait = 'wait',
  ZoomIn = 'zoom-in',
  ZoomOut = 'zoom-out'
}

/**
 * The direction of the text. One of `"ltr"` (left-to-right) or `"rtl"` (right-to-left).
 * This property determines on which side is truncated in response to the limit parameter.
 *
 * __Default value:__ `"ltr"`
 */
export enum Dir {
  Ltr = 'ltr',
  Rtl = 'rtl'
}

/**
 * The line interpolation method to use for line and area marks. One of the following:
 * - `"linear"`: piecewise linear segments, as in a polyline.
 * - `"linear-closed"`: close the linear segments to form a polygon.
 * - `"step"`: alternate between horizontal and vertical segments, as in a step function.
 * - `"step-before"`: alternate between vertical and horizontal segments, as in a step
 * function.
 * - `"step-after"`: alternate between horizontal and vertical segments, as in a step
 * function.
 * - `"basis"`: a B-spline, with control point duplication on the ends.
 * - `"basis-open"`: an open B-spline; may not intersect the start or end.
 * - `"basis-closed"`: a closed B-spline, as in a loop.
 * - `"cardinal"`: a Cardinal spline, with control point duplication on the ends.
 * - `"cardinal-open"`: an open Cardinal spline; may not intersect the start or end, but
 * will intersect other control points.
 * - `"cardinal-closed"`: a closed Cardinal spline, as in a loop.
 * - `"bundle"`: equivalent to basis, except the tension parameter is used to straighten the
 * spline.
 * - `"monotone"`: cubic interpolation that preserves monotonicity in y.
 *
 * The line interpolation method for the error band. One of the following:
 * - `"linear"`: piecewise linear segments, as in a polyline.
 * - `"linear-closed"`: close the linear segments to form a polygon.
 * - `"step"`: a piecewise constant function (a step function) consisting of alternating
 * horizontal and vertical lines. The y-value changes at the midpoint of each pair of
 * adjacent x-values.
 * - `"step-before"`: a piecewise constant function (a step function) consisting of
 * alternating horizontal and vertical lines. The y-value changes before the x-value.
 * - `"step-after"`: a piecewise constant function (a step function) consisting of
 * alternating horizontal and vertical lines. The y-value changes after the x-value.
 * - `"basis"`: a B-spline, with control point duplication on the ends.
 * - `"basis-open"`: an open B-spline; may not intersect the start or end.
 * - `"basis-closed"`: a closed B-spline, as in a loop.
 * - `"cardinal"`: a Cardinal spline, with control point duplication on the ends.
 * - `"cardinal-open"`: an open Cardinal spline; may not intersect the start or end, but
 * will intersect other control points.
 * - `"cardinal-closed"`: a closed Cardinal spline, as in a loop.
 * - `"bundle"`: equivalent to basis, except the tension parameter is used to straighten the
 * spline.
 * - `"monotone"`: cubic interpolation that preserves monotonicity in y.
 */
export enum Interpolate {
  Basis = 'basis',
  BasisClosed = 'basis-closed',
  BasisOpen = 'basis-open',
  Bundle = 'bundle',
  Cardinal = 'cardinal',
  CardinalClosed = 'cardinal-closed',
  CardinalOpen = 'cardinal-open',
  Linear = 'linear',
  LinearClosed = 'linear-closed',
  Monotone = 'monotone',
  Step = 'step',
  StepAfter = 'step-after',
  StepBefore = 'step-before'
}

/**
 * The stroke cap for line ending style. One of `"butt"`, `"round"`, or `"square"`.
 *
 * __Default value:__ `"square"`
 */
export enum StrokeCap {
  Butt = 'butt',
  Round = 'round',
  Square = 'square'
}

/**
 * The stroke line join method. One of `"miter"`, `"round"` or `"bevel"`.
 *
 * __Default value:__ `"miter"`
 */
export enum StrokeJoin {
  Bevel = 'bevel',
  Miter = 'miter',
  Round = 'round'
}

export interface TooltipContent {
  content: Content;
}

export enum Content {
  Data = 'data',
  Encoding = 'encoding'
}

/**
 * The extent of the band. Available options include:
 * - `"ci"`: Extend the band to the confidence interval of the mean.
 * - `"stderr"`: The size of band are set to the value of standard error, extending from the
 * mean.
 * - `"stdev"`: The size of band are set to the value of standard deviation, extending from
 * the mean.
 * - `"iqr"`: Extend the band to the q1 and q3.
 *
 * __Default value:__ `"stderr"`.
 *
 * The extent of the rule. Available options include:
 * - `"ci"`: Extend the rule to the confidence interval of the mean.
 * - `"stderr"`: The size of rule are set to the value of standard error, extending from the
 * mean.
 * - `"stdev"`: The size of rule are set to the value of standard deviation, extending from
 * the mean.
 * - `"iqr"`: Extend the rule to the q1 and q3.
 *
 * __Default value:__ `"stderr"`.
 */
export enum ExtentExtent {
  Ci = 'ci',
  Iqr = 'iqr',
  MinMax = 'min-max',
  Stderr = 'stderr',
  Stdev = 'stdev'
}

export interface OverlayMarkDef {
  /**
   * The horizontal alignment of the text. One of `"left"`, `"right"`, `"center"`.
   */
  align?: Align;
  /**
   * The rotation angle of the text, in degrees.
   */
  angle?: number;
  /**
   * The vertical alignment of the text. One of `"top"`, `"middle"`, `"bottom"`.
   *
   * __Default value:__ `"middle"`
   */
  baseline?: TextBaseline;
  /**
   * Whether a mark be clipped to the enclosing group’s width and height.
   */
  clip?: boolean;
  /**
   * Default color.  Note that `fill` and `stroke` have higher precedence than `color` and
   * will override `color`.
   *
   * __Default value:__ <span style="color: #4682b4;">&#9632;</span> `"#4682b4"`
   *
   * __Note:__ This property cannot be used in a [style
   * config](https://vega.github.io/vega-lite/docs/mark.html#style-config).
   */
  color?: string;
  /**
   * The radius in pixels of rounded rectangle corners.
   *
   * __Default value:__ `0`
   */
  cornerRadius?: number;
  /**
   * The mouse cursor used over the mark. Any valid [CSS cursor
   * type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used.
   */
  cursor?: Cursor;
  /**
   * The direction of the text. One of `"ltr"` (left-to-right) or `"rtl"` (right-to-left).
   * This property determines on which side is truncated in response to the limit parameter.
   *
   * __Default value:__ `"ltr"`
   */
  dir?: Dir;
  /**
   * The horizontal offset, in pixels, between the text label and its anchor point. The offset
   * is applied after rotation by the _angle_ property.
   */
  dx?: number;
  /**
   * The vertical offset, in pixels, between the text label and its anchor point. The offset
   * is applied after rotation by the _angle_ property.
   */
  dy?: number;
  /**
   * The ellipsis string for text truncated in response to the limit parameter.
   *
   * __Default value:__ `"…"`
   */
  ellipsis?: string;
  /**
   * Default Fill Color.  This has higher precedence than `config.color`
   *
   * __Default value:__ (None)
   */
  fill?: string;
  /**
   * Whether the mark's color should be used as fill color instead of stroke color.
   *
   * __Default value:__ `false` for `point`, `line` and `rule`; otherwise, `true`.
   *
   * __Note:__ This property cannot be used in a [style
   * config](https://vega.github.io/vega-lite/docs/mark.html#style-config).
   */
  filled?: boolean;
  /**
   * The fill opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  fillOpacity?: number;
  /**
   * The typeface to set the text in (e.g., `"Helvetica Neue"`).
   */
  font?: string;
  /**
   * The font size, in pixels.
   */
  fontSize?: number;
  /**
   * The font style (e.g., `"italic"`).
   */
  fontStyle?: string;
  /**
   * The font weight.
   * This can be either a string (e.g `"bold"`, `"normal"`) or a number (`100`, `200`, `300`,
   * ..., `900` where `"normal"` = `400` and `"bold"` = `700`).
   */
  fontWeight?: number | FontWeightEnum;
  /**
   * A URL to load upon mouse click. If defined, the mark acts as a hyperlink.
   */
  href?: string;
  /**
   * The line interpolation method to use for line and area marks. One of the following:
   * - `"linear"`: piecewise linear segments, as in a polyline.
   * - `"linear-closed"`: close the linear segments to form a polygon.
   * - `"step"`: alternate between horizontal and vertical segments, as in a step function.
   * - `"step-before"`: alternate between vertical and horizontal segments, as in a step
   * function.
   * - `"step-after"`: alternate between horizontal and vertical segments, as in a step
   * function.
   * - `"basis"`: a B-spline, with control point duplication on the ends.
   * - `"basis-open"`: an open B-spline; may not intersect the start or end.
   * - `"basis-closed"`: a closed B-spline, as in a loop.
   * - `"cardinal"`: a Cardinal spline, with control point duplication on the ends.
   * - `"cardinal-open"`: an open Cardinal spline; may not intersect the start or end, but
   * will intersect other control points.
   * - `"cardinal-closed"`: a closed Cardinal spline, as in a loop.
   * - `"bundle"`: equivalent to basis, except the tension parameter is used to straighten the
   * spline.
   * - `"monotone"`: cubic interpolation that preserves monotonicity in y.
   */
  interpolate?: Interpolate;
  /**
   * The maximum length of the text mark in pixels. The text value will be automatically
   * truncated if the rendered size exceeds the limit.
   *
   * __Default value:__ `0`, indicating no limit
   */
  limit?: number;
  /**
   * The overall opacity (value between [0,1]).
   *
   * __Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or
   * `square` marks or layered `bar` charts and `1` otherwise.
   */
  opacity?: number;
  /**
   * For line and trail marks, this `order` property can be set to `null` or `false` to make
   * the lines use the original order in the data sources.
   */
  order?: boolean | null;
  /**
   * The orientation of a non-stacked bar, tick, area, and line charts.
   * The value is either horizontal (default) or vertical.
   * - For bar, rule and tick, this determines whether the size of the bar and tick
   * should be applied to x or y dimension.
   * - For area, this property determines the orient property of the Vega output.
   * - For line and trail marks, this property determines the sort order of the points in the
   * line
   * if `config.sortLineBy` is not specified.
   * For stacked charts, this is always determined by the orientation of the stack;
   * therefore explicitly specified value will be ignored.
   */
  orient?: Orientation;
  /**
   * Polar coordinate radial offset, in pixels, of the text label from the origin determined
   * by the `x` and `y` properties.
   */
  radius?: number;
  /**
   * Shape of the point marks. Supported values include:
   * - plotting shapes: `"circle"`, `"square"`, `"cross"`, `"diamond"`, `"triangle-up"`,
   * `"triangle-down"`, `"triangle-right"`, or `"triangle-left"`.
   * - the line symbol `"stroke"`
   * - centered directional shapes `"arrow"`, `"wedge"`, or `"triangle"`
   * - a custom [SVG path
   * string](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) (For correct
   * sizing, custom shape paths should be defined within a square bounding box with
   * coordinates ranging from -1 to 1 along both the x and y dimensions.)
   *
   * __Default value:__ `"circle"`
   */
  shape?: string;
  /**
   * Default size for marks.
   * - For `point`/`circle`/`square`, this represents the pixel area of the marks. For
   * example: in the case of circles, the radius is determined in part by the square root of
   * the size value.
   * - For `bar`, this represents the band size of the bar, in pixels.
   * - For `text`, this represents the font size, in pixels.
   *
   * __Default value:__ `30` for point, circle, square marks; `rangeStep` - 1 for bar marks
   * with discrete dimensions; `5` for bar marks with continuous dimensions; `11` for text
   * marks.
   */
  size?: number;
  /**
   * Default Stroke Color.  This has higher precedence than `config.color`
   *
   * __Default value:__ (None)
   */
  stroke?: string;
  /**
   * The stroke cap for line ending style. One of `"butt"`, `"round"`, or `"square"`.
   *
   * __Default value:__ `"square"`
   */
  strokeCap?: StrokeCap;
  /**
   * An array of alternating stroke, space lengths for creating dashed or dotted lines.
   */
  strokeDash?: number[];
  /**
   * The offset (in pixels) into which to begin drawing with the stroke dash array.
   */
  strokeDashOffset?: number;
  /**
   * The stroke line join method. One of `"miter"`, `"round"` or `"bevel"`.
   *
   * __Default value:__ `"miter"`
   */
  strokeJoin?: StrokeJoin;
  /**
   * The miter limit at which to bevel a line join.
   */
  strokeMiterLimit?: number;
  /**
   * The stroke opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  strokeOpacity?: number;
  /**
   * The stroke width, in pixels.
   */
  strokeWidth?: number;
  /**
   * A string or array of strings indicating the name of custom styles to apply to the mark. A
   * style is a named collection of mark property defaults defined within the [style
   * configuration](https://vega.github.io/vega-lite/docs/mark.html#style-config). If style is
   * an array, later styles will override earlier styles. Any [mark
   * properties](https://vega.github.io/vega-lite/docs/encoding.html#mark-prop) explicitly
   * defined within the `encoding` will override a style default.
   *
   * __Default value:__ The mark's name.  For example, a bar mark will have style `"bar"` by
   * default.
   * __Note:__ Any specified style will augment the default style. For example, a bar mark
   * with `"style": "foo"` will receive from `config.style.bar` and `config.style.foo` (the
   * specified style `"foo"` has higher precedence).
   */
  style?: string[] | string;
  /**
   * Depending on the interpolation type, sets the tension parameter (for line and area marks).
   */
  tension?: number;
  /**
   * Placeholder text if the `text` channel is not specified
   */
  text?: string;
  /**
   * Polar coordinate angle, in radians, of the text label from the origin determined by the
   * `x` and `y` properties. Values for `theta` follow the same convention of `arc` mark
   * `startAngle` and `endAngle` properties: angles are measured in radians, with `0`
   * indicating "north".
   */
  theta?: number;
  /**
   * The tooltip text string to show upon mouse hover or an object defining which fields
   * should the tooltip be derived from.
   *
   * - If `tooltip` is `{"content": "encoding"}`, then all fields from `encoding` will be
   * used.
   * - If `tooltip` is `{"content": "data"}`, then all fields that appear in the highlighted
   * data point will be used.
   * - If set to `null`, then no tooltip will be used.
   */
  tooltip?: TooltipContent | null | string;
  /**
   * X coordinates of the marks, or width of horizontal `"bar"` and `"area"` without `x2`.
   */
  x?: number;
  /**
   * X2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   */
  x2?: number;
  /**
   * Offset for x2-position.
   */
  x2Offset?: number;
  /**
   * Offset for x-position.
   */
  xOffset?: number;
  /**
   * Y coordinates of the marks, or height of vertical `"bar"` and `"area"` without `y2`
   */
  y?: number;
  /**
   * Y2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   */
  y2?: number;
  /**
   * Offset for y2-position.
   */
  y2Offset?: number;
  /**
   * Offset for y-position.
   */
  yOffset?: number;
}

export enum PointEnum {
  Transparent = 'transparent'
}

/**
 * All types of primitive marks.
 *
 * The mark type. This could a primitive mark type
 * (one of `"bar"`, `"circle"`, `"square"`, `"tick"`, `"line"`,
 * `"area"`, `"point"`, `"geoshape"`, `"rule"`, and `"text"`)
 * or a composite mark type (`"boxplot"`, `"errorband"`, `"errorbar"`).
 */
export enum Mark {
  Area = 'area',
  Bar = 'bar',
  Boxplot = 'boxplot',
  Circle = 'circle',
  Errorband = 'errorband',
  Errorbar = 'errorbar',
  Geoshape = 'geoshape',
  Line = 'line',
  Point = 'point',
  Rect = 'rect',
  Rule = 'rule',
  Square = 'square',
  Text = 'text',
  Tick = 'tick',
  Trail = 'trail'
}

/**
 * Projection configuration, which determines default properties for all
 * [projections](https://vega.github.io/vega-lite/docs/projection.html). For a full list of
 * projection configuration options, please see the [corresponding section of the projection
 * documentation](https://vega.github.io/vega-lite/docs/projection.html#config).
 *
 * Any property of Projection can be in config
 *
 * An object defining properties of geographic projection, which will be applied to `shape`
 * path for `"geoshape"` marks
 * and to `latitude` and `"longitude"` channels for other marks.
 *
 * An object defining properties of the geographic projection shared by underlying layers.
 */
export interface Projection {
  /**
   * Sets the projection’s center to the specified center, a two-element array of longitude
   * and latitude in degrees.
   *
   * __Default value:__ `[0, 0]`
   */
  center?: number[];
  /**
   * Sets the projection’s clipping circle radius to the specified angle in degrees. If
   * `null`, switches to [antimeridian](http://bl.ocks.org/mbostock/3788999) cutting rather
   * than small-circle clipping.
   */
  clipAngle?: number;
  /**
   * Sets the projection’s viewport clip extent to the specified bounds in pixels. The extent
   * bounds are specified as an array `[[x0, y0], [x1, y1]]`, where `x0` is the left-side of
   * the viewport, `y0` is the top, `x1` is the right and `y1` is the bottom. If `null`, no
   * viewport clipping is performed.
   */
  clipExtent?: number[][];
  coefficient?: number;
  distance?: number;
  fraction?: number;
  lobes?: number;
  parallel?: number;
  /**
   * Sets the threshold for the projection’s [adaptive
   * resampling](http://bl.ocks.org/mbostock/3795544) to the specified value in pixels. This
   * value corresponds to the [Douglas–Peucker
   * distance](http://en.wikipedia.org/wiki/Ramer%E2%80%93Douglas%E2%80%93Peucker_algorithm).
   * If precision is not specified, returns the projection’s current resampling precision
   * which defaults to `√0.5 ≅ 0.70710…`.
   */
  precision?: string;
  radius?: number;
  ratio?: number;
  reflectX?: boolean;
  reflectY?: boolean;
  /**
   * Sets the projection’s three-axis rotation to the specified angles, which must be a two-
   * or three-element array of numbers [`lambda`, `phi`, `gamma`] specifying the rotation
   * angles in degrees about each spherical axis. (These correspond to yaw, pitch and roll.)
   *
   * __Default value:__ `[0, 0, 0]`
   */
  rotate?: number[];
  /**
   * Sets the projection's scale (zoom) value, overriding automatic fitting.
   */
  scale?: number;
  spacing?: number;
  tilt?: number;
  /**
   * Sets the projection's translation (pan) value, overriding automatic fitting.
   */
  translate?: number[];
  /**
   * The cartographic projection to use. This value is case-insensitive, for example
   * `"albers"` and `"Albers"` indicate the same projection type. You can find all valid
   * projection types [in the
   * documentation](https://vega.github.io/vega-lite/docs/projection.html#projection-types).
   *
   * __Default value:__ `mercator`
   */
  type?: ProjectionType;
}

/**
 * The cartographic projection to use. This value is case-insensitive, for example
 * `"albers"` and `"Albers"` indicate the same projection type. You can find all valid
 * projection types [in the
 * documentation](https://vega.github.io/vega-lite/docs/projection.html#projection-types).
 *
 * __Default value:__ `mercator`
 */
export enum ProjectionType {
  Albers = 'albers',
  AlbersUsa = 'albersUsa',
  AzimuthalEqualArea = 'azimuthalEqualArea',
  AzimuthalEquidistant = 'azimuthalEquidistant',
  ConicConformal = 'conicConformal',
  ConicEqualArea = 'conicEqualArea',
  ConicEquidistant = 'conicEquidistant',
  Equirectangular = 'equirectangular',
  Gnomonic = 'gnomonic',
  Identity = 'identity',
  Mercator = 'mercator',
  Orthographic = 'orthographic',
  Stereographic = 'stereographic',
  TransverseMercator = 'transverseMercator'
}

/**
 * Scale, axis, and legend resolutions for view composition specifications.
 *
 * Defines how scales, axes, and legends from different specs should be combined. Resolve is
 * a mapping from `scale`, `axis`, and `legend` to a mapping from channels to resolutions.
 */
export interface Resolve {
  axis?: AxisResolveMap;
  legend?: LegendResolveMap;
  scale?: ScaleResolveMap;
}

export interface AxisResolveMap {
  x?: ResolveMode;
  y?: ResolveMode;
}

export enum ResolveMode {
  Independent = 'independent',
  Shared = 'shared'
}

export interface LegendResolveMap {
  color?: ResolveMode;
  fill?: ResolveMode;
  fillOpacity?: ResolveMode;
  opacity?: ResolveMode;
  shape?: ResolveMode;
  size?: ResolveMode;
  stroke?: ResolveMode;
  strokeOpacity?: ResolveMode;
  strokeWidth?: ResolveMode;
}

export interface ScaleResolveMap {
  color?: ResolveMode;
  fill?: ResolveMode;
  fillOpacity?: ResolveMode;
  opacity?: ResolveMode;
  shape?: ResolveMode;
  size?: ResolveMode;
  stroke?: ResolveMode;
  strokeOpacity?: ResolveMode;
  strokeWidth?: ResolveMode;
  x?: ResolveMode;
  y?: ResolveMode;
}

export interface SelectionDef {
  /**
   * Establish a two-way binding between a single selection and input elements
   * (also known as dynamic query widgets). A binding takes the form of
   * Vega's [input element binding definition](https://vega.github.io/vega/docs/signals/#bind)
   * or can be a mapping between projected field/encodings and binding definitions.
   *
   * See the [bind transform](https://vega.github.io/vega-lite/docs/bind.html) documentation
   * for more information.
   *
   * Establishes a two-way binding between the interval selection and the scales
   * used within the same view. This allows a user to interactively pan and
   * zoom the view.
   */
  bind?: BindEnum | BindBind;
  /**
   * Clears the selection, emptying it of all values. Can be an
   * [EventStream](https://vega.github.io/vega/docs/event-streams/) or `false` to disable.
   *
   * __Default value:__ `dblclick`.
   *
   * See the [clear](https://vega.github.io/vega-lite/docs/clear.html) documentation for more
   * information.
   */
  clear?: any;
  /**
   * By default, `all` data values are considered to lie within an empty selection.
   * When set to `none`, empty selections contain no data values.
   */
  empty?: Empty;
  /**
   * An array of encoding channels. The corresponding data field values
   * must match for a data tuple to fall within the selection.
   */
  encodings?: SingleDefUnitChannel[];
  /**
   * An array of field names whose values must match for a data tuple to
   * fall within the selection.
   */
  fields?: string[];
  /**
   * Initialize the selection with a mapping between [projected channels or field
   * names](https://vega.github.io/vega-lite/docs/project.html) and initial values.
   *
   * Initialize the selection with a mapping between [projected channels or field
   * names](https://vega.github.io/vega-lite/docs/project.html) and an initial
   * value (or array of values).
   *
   * Initialize the selection with a mapping between [projected channels or field
   * names](https://vega.github.io/vega-lite/docs/project.html) and arrays of
   * initial values.
   */
  init?:
    | Array<{[key: string]: boolean | DateTime | number | string}>
    | {[key: string]: Array<boolean | DateTime | number | string> | boolean | DateTime | number | string};
  /**
   * When true, an invisible voronoi diagram is computed to accelerate discrete
   * selection. The data value _nearest_ the mouse cursor is added to the selection.
   *
   * See the [nearest transform](https://vega.github.io/vega-lite/docs/nearest.html)
   * documentation for more information.
   */
  nearest?: boolean;
  /**
   * A [Vega event stream](https://vega.github.io/vega/docs/event-streams/) (object or
   * selector) that triggers the selection.
   * For interval selections, the event stream must specify a [start and
   * end](https://vega.github.io/vega/docs/event-streams/#between-filters).
   */
  on?: any;
  /**
   * With layered and multi-view displays, a strategy that determines how
   * selections' data queries are resolved when applied in a filter transform,
   * conditional encoding rule, or scale domain.
   */
  resolve?: SelectionResolution;
  type: SelectionDefType;
  /**
   * Controls whether data values should be toggled or only ever inserted into
   * multi selections. Can be `true`, `false` (for insertion only), or a
   * [Vega expression](https://vega.github.io/vega/docs/expressions/).
   *
   * __Default value:__ `true`, which corresponds to `event.shiftKey` (i.e.,
   * data values are toggled when a user interacts with the shift-key pressed).
   *
   * See the [toggle transform](https://vega.github.io/vega-lite/docs/toggle.html)
   * documentation for more information.
   */
  toggle?: boolean | string;
  /**
   * An interval selection also adds a rectangle mark to depict the
   * extents of the interval. The `mark` property can be used to customize the
   * appearance of the mark.
   */
  mark?: BrushConfig;
  /**
   * When truthy, allows a user to interactively move an interval selection
   * back-and-forth. Can be `true`, `false` (to disable panning), or a
   * [Vega event stream definition](https://vega.github.io/vega/docs/event-streams/)
   * which must include a start and end event to trigger continuous panning.
   *
   * __Default value:__ `true`, which corresponds to
   * `[mousedown, window:mouseup] > window:mousemove!` which corresponds to
   * clicks and dragging within an interval selection to reposition it.
   */
  translate?: boolean | string;
  /**
   * When truthy, allows a user to interactively resize an interval selection.
   * Can be `true`, `false` (to disable zooming), or a [Vega event stream
   * definition](https://vega.github.io/vega/docs/event-streams/). Currently,
   * only `wheel` events are supported.
   *
   *
   * __Default value:__ `true`, which corresponds to `wheel!`.
   */
  zoom?: boolean | string;
}

/**
 * Establishes a two-way binding between the interval selection and the scales
 * used within the same view. This allows a user to interactively pan and
 * zoom the view.
 */
export enum BindEnum {
  Scales = 'scales'
}

/**
 * Establish a two-way binding between a single selection and input elements
 * (also known as dynamic query widgets). A binding takes the form of
 * Vega's [input element binding definition](https://vega.github.io/vega/docs/signals/#bind)
 * or can be a mapping between projected field/encodings and binding definitions.
 *
 * See the [bind transform](https://vega.github.io/vega-lite/docs/bind.html) documentation
 * for more information.
 */
export interface BindBind {
  debounce?: Binding | number;
  element?: Binding | string;
  input?: Binding | string;
  name?: Binding | string;
  type?: Binding | string;
  options?: any[] | Binding;
  max?: Binding | number;
  min?: Binding | number;
  step?: Binding | number;
  autocomplete?: Binding | string;
  placeholder?: Binding | string;
}

export interface Binding {
  debounce?: number;
  element?: string;
  input?: string;
  name?: string;
  type?: string;
  options?: any[];
  max?: number;
  min?: number;
  step?: number;
  autocomplete?: string;
  placeholder?: string;
}

/**
 * By default, `all` data values are considered to lie within an empty selection.
 * When set to `none`, empty selections contain no data values.
 */
export enum Empty {
  All = 'all',
  None = 'none'
}

/**
 * An interval selection also adds a rectangle mark to depict the
 * extents of the interval. The `mark` property can be used to customize the
 * appearance of the mark.
 */
export interface BrushConfig {
  /**
   * The fill color of the interval mark.
   *
   * __Default value:__ `#333333`
   */
  fill?: string;
  /**
   * The fill opacity of the interval mark (a value between 0 and 1).
   *
   * __Default value:__ `0.125`
   */
  fillOpacity?: number;
  /**
   * The stroke color of the interval mark.
   *
   * __Default value:__ `#ffffff`
   */
  stroke?: string;
  /**
   * An array of alternating stroke and space lengths,
   * for creating dashed or dotted lines.
   */
  strokeDash?: number[];
  /**
   * The offset (in pixels) with which to begin drawing the stroke dash array.
   */
  strokeDashOffset?: number;
  /**
   * The stroke opacity of the interval mark (a value between 0 and 1).
   */
  strokeOpacity?: number;
  /**
   * The stroke width of the interval mark.
   */
  strokeWidth?: number;
}

/**
 * With layered and multi-view displays, a strategy that determines how
 * selections' data queries are resolved when applied in a filter transform,
 * conditional encoding rule, or scale domain.
 */
export enum SelectionResolution {
  Global = 'global',
  Intersect = 'intersect',
  Union = 'union'
}

export enum SelectionDefType {
  Interval = 'interval',
  Multi = 'multi',
  Single = 'single'
}

export interface TitleParams {
  align?: Align;
  /**
   * The anchor position for placing the title. One of `"start"`, `"middle"`, or `"end"`. For
   * example, with an orientation of top these anchor positions map to a left-, center-, or
   * right-aligned title.
   *
   * __Default value:__ `"middle"` for
   * [single](https://vega.github.io/vega-lite/docs/spec.html) and
   * [layered](https://vega.github.io/vega-lite/docs/layer.html) views.
   * `"start"` for other composite views.
   *
   * __Note:__ [For now](https://github.com/vega/vega-lite/issues/2875), `anchor` is only
   * customizable only for [single](https://vega.github.io/vega-lite/docs/spec.html) and
   * [layered](https://vega.github.io/vega-lite/docs/layer.html) views.  For other composite
   * views, `anchor` is always `"start"`.
   */
  anchor?: TitleAnchor | null;
  /**
   * Angle in degrees of title text.
   */
  angle?: number;
  /**
   * Vertical text baseline for title text. One of `"top"`, `"middle"`, `"bottom"`, or
   * `"alphabetic"`.
   */
  baseline?: TextBaseline;
  /**
   * Text color for title text.
   */
  color?: string;
  /**
   * Delta offset for title text x-coordinate.
   */
  dx?: number;
  /**
   * Delta offset for title text y-coordinate.
   */
  dy?: number;
  /**
   * Font name for title text.
   */
  font?: string;
  /**
   * Font size in pixels for title text.
   *
   * __Default value:__ `10`.
   */
  fontSize?: number;
  /**
   * Font style for title text.
   */
  fontStyle?: string;
  /**
   * Font weight for title text.
   * This can be either a string (e.g `"bold"`, `"normal"`) or a number (`100`, `200`, `300`,
   * ..., `900` where `"normal"` = `400` and `"bold"` = `700`).
   */
  fontWeight?: number | FontWeightEnum;
  /**
   * The reference frame for the anchor position, one of `"bounds"` (to anchor relative to the
   * full bounding box) or `"group"` (to anchor relative to the group width or height).
   */
  frame?: TitleFrame;
  /**
   * The maximum allowed length in pixels of legend labels.
   */
  limit?: number;
  /**
   * The orthogonal offset in pixels by which to displace the title from its position along
   * the edge of the chart.
   */
  offset?: number;
  /**
   * Default title orientation (`"top"`, `"bottom"`, `"left"`, or `"right"`)
   */
  orient?: TitleOrient;
  /**
   * A [mark style property](https://vega.github.io/vega-lite/docs/config.html#style) to apply
   * to the title text mark.
   *
   * __Default value:__ `"group-title"`.
   */
  style?: string[] | string;
  /**
   * The title text.
   */
  text: string;
  /**
   * The integer z-index indicating the layering of the title group relative to other axis,
   * mark and legend groups.
   *
   * __Default value:__ `0`.
   */
  zindex?: number;
}

/**
 * The reference frame for the anchor position, one of `"bounds"` (to anchor relative to the
 * full bounding box) or `"group"` (to anchor relative to the group width or height).
 */
export enum TitleFrame {
  Bounds = 'bounds',
  Group = 'group'
}

/**
 * Default title orientation (`"top"`, `"bottom"`, `"left"`, or `"right"`)
 */
export enum TitleOrient {
  Bottom = 'bottom',
  Left = 'left',
  None = 'none',
  Right = 'right',
  Top = 'top'
}

export interface Transform {
  /**
   * Array of objects that define fields to aggregate.
   */
  aggregate?: AggregatedFieldDef[];
  /**
   * The data fields to group by. If not specified, a single group containing all data objects
   * will be used.
   *
   * An optional array of fields by which to group the values.
   * Imputation will then be performed on a per-group basis.
   *
   * The data fields for partitioning the data objects into separate groups. If unspecified,
   * all data points will be in a single group.
   *
   * The data fields to group by.
   *
   * The data fields for partitioning the data objects into separate windows. If unspecified,
   * all data points will be in a single window.
   */
  groupby?: string[];
  /**
   * The output fields at which to write the start and end bin values.
   *
   * The field for storing the computed formula value.
   *
   * The output field names for extracted array values.
   *
   * __Default value:__ The field name of the corresponding array field
   *
   * The output field names for the key and value properties produced by the fold transform.
   * __Default value:__ `["key", "value"]`
   *
   * The field or fields for storing the computed formula value.
   * If `from.fields` is specified, the transform will use the same names for `as`.
   * If `from.fields` is not specified, `as` has to be a string and we put the whole object
   * into the data under the specified name.
   *
   * The output field to write the timeUnit value.
   *
   * Output field names. This can be either a string or an array of strings with
   * two elements denoting the name for the fields for stack start and stack end
   * respectively.
   * If a single string(eg."val") is provided, the end field will be "val_end".
   */
  as?: string[] | string;
  /**
   * An object indicating bin properties, or simply `true` for using default bin parameters.
   */
  bin?: boolean | BinParams;
  /**
   * The data field to bin.
   *
   * The data field to apply time unit.
   */
  field?: string;
  /**
   * A [expression](https://vega.github.io/vega-lite/docs/types.html#expression) string. Use
   * the variable `datum` to refer to the current data object.
   */
  calculate?: string;
  /**
   * The `filter` property must be one of the predicate definitions:
   *
   * 1) an [expression](https://vega.github.io/vega-lite/docs/types.html#expression) string,
   * where `datum` can be used to refer to the current data object
   *
   * 2) one of the field predicates:
   * [`equal`](https://vega.github.io/vega-lite/docs/filter.html#equal-predicate),
   * [`lt`](https://vega.github.io/vega-lite/docs/filter.html#lt-predicate),
   * [`lte`](https://vega.github.io/vega-lite/docs/filter.html#lte-predicate),
   * [`gt`](https://vega.github.io/vega-lite/docs/filter.html#gt-predicate),
   * [`gte`](https://vega.github.io/vega-lite/docs/filter.html#gte-predicate),
   * [`range`](https://vega.github.io/vega-lite/docs/filter.html#range-predicate),
   * [`oneOf`](https://vega.github.io/vega-lite/docs/filter.html#one-of-predicate),
   * or [`valid`](https://vega.github.io/vega-lite/docs/filter.html#valid-predicate),
   *
   * 3) a [selection
   * predicate](https://vega.github.io/vega-lite/docs/filter.html#selection-predicate)
   *
   * 4) a logical operand that combines (1), (2), or (3).
   */
  filter?: Predicate | string;
  /**
   * An array of one or more data fields containing arrays to flatten.
   * If multiple fields are specified, their array values should have a parallel structure,
   * ideally with the same length.
   * If the lengths of parallel arrays do not match,
   * the longest array will be used with `null` values added for missing entries.
   */
  flatten?: string[];
  /**
   * An array of data fields indicating the properties to fold.
   */
  fold?: string[];
  /**
   * A frame specification as a two-element array used to control the window over which the
   * specified method is applied. The array entries should either be a number indicating the
   * offset from the current data object, or null to indicate unbounded rows preceding or
   * following the current data object.  For example, the value `[-5, 5]` indicates that the
   * window should include five objects preceding and five objects following the current
   * object.
   *
   * __Default value:__:  `[null, null]` indicating that the window includes all objects.
   *
   * A frame specification as a two-element array indicating how the sliding window should
   * proceed. The array entries should either be a number indicating the offset from the
   * current data object, or null to indicate unbounded rows preceding or following the
   * current data object. The default value is `[null, 0]`, indicating that the sliding window
   * includes the current object and all preceding objects. The value `[-5, 5]` indicates that
   * the window should include five objects preceding and five objects following the current
   * object. Finally, `[null, null]` indicates that the window frame should always include all
   * data objects. If you this frame and want to assign the same value to add objects, you can
   * use the simpler [join aggregate
   * transform](https://vega.github.io/vega-lite/docs/joinaggregate.html). The only operators
   * affected are the aggregation operations and the `first_value`, `last_value`, and
   * `nth_value` window operations. The other window operations are not affected by this.
   *
   * __Default value:__:  `[null, 0]` (includes the current object and all preceding objects)
   */
  frame?: Array<number | null>;
  /**
   * The data field for which the missing values should be imputed.
   */
  impute?: string;
  /**
   * A key field that uniquely identifies data objects within a group.
   * Missing key values (those occurring in the data but not in the current group) will be
   * imputed.
   */
  key?: string;
  /**
   * Defines the key values that should be considered for imputation.
   * An array of key values or an object defining a [number
   * sequence](https://vega.github.io/vega-lite/docs/impute.html#sequence-def).
   *
   * If provided, this will be used in addition to the key values observed within the input
   * data.  If not provided, the values will be derived from all unique values of the `key`
   * field. For `impute` in `encoding`, the key field is the x-field if the y-field is
   * imputed, or vice versa.
   *
   * If there is no impute grouping, this property _must_ be specified.
   */
  keyvals?: any[] | ImputeSequence;
  /**
   * The imputation method to use for the field value of imputed data objects.
   * One of `value`, `mean`, `median`, `max` or `min`.
   *
   * __Default value:__  `"value"`
   */
  method?: ImputeMethod;
  /**
   * The field value to use when the imputation `method` is `"value"`.
   */
  value?: any;
  /**
   * The definition of the fields in the join aggregate, and what calculations to use.
   */
  joinaggregate?: JoinAggregateFieldDef[];
  /**
   * The default value to use if lookup fails.
   *
   * __Default value:__ `null`
   */
  default?: string;
  /**
   * Secondary data reference.
   */
  from?: LookupData;
  /**
   * Key in primary data source.
   */
  lookup?: string;
  /**
   * The timeUnit.
   */
  timeUnit?: TimeUnit;
  /**
   * The maximum number of data objects to include in the sample.
   *
   * __Default value:__ `1000`
   */
  sample?: number;
  /**
   * Mode for stacking marks.
   * __Default value:__ `"zero"`
   */
  offset?: StackOffset;
  /**
   * Field that determines the order of leaves in the stacked charts.
   *
   * A sort field definition for sorting data objects within a window. If two data objects are
   * considered equal by the comparator, they are considered “peer” values of equal rank. If
   * sort is not specified, the order is undefined: data objects are processed in the order
   * they are observed and none are considered peers (the ignorePeers parameter is ignored and
   * treated as if set to `true`).
   */
  sort?: SortField[];
  /**
   * The field which is stacked.
   */
  stack?: string;
  /**
   * Indicates if the sliding window frame should ignore peer values (data that are considered
   * identical by the sort criteria). The default is false, causing the window frame to expand
   * to include all peer values. If set to true, the window frame will be defined by offset
   * values only. This setting only affects those operations that depend on the window frame,
   * namely aggregation operations and the first_value, last_value, and nth_value window
   * operations.
   *
   * __Default value:__ `false`
   */
  ignorePeers?: boolean;
  /**
   * The definition of the fields in the window, and what calculations to use.
   */
  window?: WindowFieldDef[];
}

export interface AggregatedFieldDef {
  /**
   * The output field names to use for each aggregated field.
   */
  as: string;
  /**
   * The data field for which to compute aggregate function. This is required for all
   * aggregation operations except `"count"`.
   */
  field?: string;
  /**
   * The aggregation operation to apply to the fields (e.g., sum, average or count).
   * See the [full list of supported aggregation
   * operations](https://vega.github.io/vega-lite/docs/aggregate.html#ops)
   * for more information.
   */
  op: AggregateOp;
}

/**
 * Secondary data reference.
 */
export interface LookupData {
  /**
   * Secondary data source to lookup in.
   */
  data: Data;
  /**
   * Fields in foreign data to lookup.
   * If not specified, the entire object is queried.
   */
  fields?: string[];
  /**
   * Key in data to lookup.
   */
  key: string;
}

export interface JoinAggregateFieldDef {
  /**
   * The output name for the join aggregate operation.
   */
  as: string;
  /**
   * The data field for which to compute the aggregate function. This can be omitted for
   * functions that do not operate over a field such as `count`.
   */
  field?: string;
  /**
   * The aggregation operation to apply (e.g., sum, average or count). See the list of all
   * supported operations [here](https://vega.github.io/vega-lite/docs/aggregate.html#ops).
   */
  op: AggregateOp;
}

/**
 * A sort definition for transform
 */
export interface SortField {
  /**
   * The name of the field to sort.
   */
  field: string;
  /**
   * Whether to sort the field in ascending or descending order. One of `"ascending"`
   * (default), `"descending"`, or `null` (no not sort).
   */
  order?: SortOrder | null;
}

export interface WindowFieldDef {
  /**
   * The output name for the window operation.
   */
  as: string;
  /**
   * The data field for which to compute the aggregate or window function. This can be omitted
   * for window functions that do not operate over a field such as `count`, `rank`,
   * `dense_rank`.
   */
  field?: string;
  /**
   * The window or aggregation operation to apply within a window (e.g.,`rank`, `lead`, `sum`,
   * `average` or `count`). See the list of all supported operations
   * [here](https://vega.github.io/vega-lite/docs/window.html#ops).
   */
  op: Op;
  /**
   * Parameter values for the window functions. Parameter values can be omitted for operations
   * that do not accept a parameter.
   *
   * See the list of all supported operations and their parameters
   * [here](https://vega.github.io/vega-lite/docs/transforms/window.html).
   */
  param?: number;
}

/**
 * The window or aggregation operation to apply within a window (e.g.,`rank`, `lead`, `sum`,
 * `average` or `count`). See the list of all supported operations
 * [here](https://vega.github.io/vega-lite/docs/window.html#ops).
 *
 * An [aggregate operation](https://vega.github.io/vega-lite/docs/aggregate.html#ops) to
 * perform on the field prior to sorting (e.g., `"count"`, `"mean"` and `"median"`).
 * An aggregation is required when there are multiple values of the sort field for each
 * encoded data field.
 * The input data objects will be aggregated, grouped by the encoded data field.
 *
 * For a full list of operations, please see the documentation for
 * [aggregate](https://vega.github.io/vega-lite/docs/aggregate.html#ops).
 *
 * __Default value:__ `"sum"` for stacked plots. Otherwise, `"mean"`.
 *
 * The aggregation operation to apply to the fields (e.g., sum, average or count).
 * See the [full list of supported aggregation
 * operations](https://vega.github.io/vega-lite/docs/aggregate.html#ops)
 * for more information.
 *
 * The aggregation operation to apply (e.g., sum, average or count). See the list of all
 * supported operations [here](https://vega.github.io/vega-lite/docs/aggregate.html#ops).
 */
export enum Op {
  Argmax = 'argmax',
  Argmin = 'argmin',
  Average = 'average',
  Ci0 = 'ci0',
  Ci1 = 'ci1',
  Count = 'count',
  CumeDist = 'cume_dist',
  DenseRank = 'dense_rank',
  Distinct = 'distinct',
  FirstValue = 'first_value',
  Lag = 'lag',
  LastValue = 'last_value',
  Lead = 'lead',
  Max = 'max',
  Mean = 'mean',
  Median = 'median',
  Min = 'min',
  Missing = 'missing',
  NthValue = 'nth_value',
  Ntile = 'ntile',
  PercentRank = 'percent_rank',
  Q1 = 'q1',
  Q3 = 'q3',
  Rank = 'rank',
  RowNumber = 'row_number',
  Stderr = 'stderr',
  Stdev = 'stdev',
  Stdevp = 'stdevp',
  Sum = 'sum',
  Valid = 'valid',
  Values = 'values',
  Variance = 'variance',
  Variancep = 'variancep'
}

/**
 * An object defining the view background's fill and stroke.
 *
 * __Default value:__ none (transparent)
 */
export interface ViewBackground {
  /**
   * The radius in pixels of rounded rectangle corners.
   *
   * __Default value:__ `0`
   */
  cornerRadius?: number;
  /**
   * The fill color.
   *
   * __Default value:__ `undefined`
   */
  fill?: null | string;
  /**
   * The fill opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  fillOpacity?: number;
  /**
   * The overall opacity (value between [0,1]).
   *
   * __Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or
   * `square` marks or layered `bar` charts and `1` otherwise.
   */
  opacity?: number;
  /**
   * The stroke color.
   *
   * __Default value:__ `"#ddd"`
   */
  stroke?: null | string;
  /**
   * The stroke cap for line ending style. One of `"butt"`, `"round"`, or `"square"`.
   *
   * __Default value:__ `"square"`
   */
  strokeCap?: StrokeCap;
  /**
   * An array of alternating stroke, space lengths for creating dashed or dotted lines.
   */
  strokeDash?: number[];
  /**
   * The offset (in pixels) into which to begin drawing with the stroke dash array.
   */
  strokeDashOffset?: number;
  /**
   * The stroke line join method. One of `"miter"`, `"round"` or `"bevel"`.
   *
   * __Default value:__ `"miter"`
   */
  strokeJoin?: StrokeJoin;
  /**
   * The miter limit at which to bevel a line join.
   */
  strokeMiterLimit?: number;
  /**
   * The stroke opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  strokeOpacity?: number;
  /**
   * The stroke width, in pixels.
   */
  strokeWidth?: number;
  /**
   * A string or array of strings indicating the name of custom styles to apply to the view
   * background. A style is a named collection of mark property defaults defined within the
   * [style configuration](https://vega.github.io/vega-lite/docs/mark.html#style-config). If
   * style is an array, later styles will override earlier styles.
   *
   * __Default value:__ `"cell"`
   * __Note:__ Any specified view background properties will augment the default style.
   */
  style?: string;
}

export interface RepeatMapping {
  /**
   * An array of fields to be repeated horizontally.
   */
  column?: string[];
  /**
   * An array of fields to be repeated vertically.
   */
  row?: string[];
}

export interface RowColNumber {
  column?: number;
  row?: number;
}

/**
 * Vega-Lite configuration object.  This property can only be defined at the top-level of a
 * specification.
 */
export interface Config {
  /**
   * Area-Specific Config
   */
  area?: AreaConfig;
  /**
   * Sets how the visualization size should be determined. If a string, should be one of
   * `"pad"`, `"fit"` or `"none"`.
   * Object values can additionally specify parameters for content sizing and automatic
   * resizing.
   * `"fit"` is only supported for single and layered views that don't use `rangeStep`.
   *
   * __Default value__: `pad`
   */
  autosize?: AutoSizeParams | AutosizeType;
  /**
   * Axis configuration, which determines default properties for all `x` and `y`
   * [axes](https://vega.github.io/vega-lite/docs/axis.html). For a full list of axis
   * configuration options, please see the [corresponding section of the axis
   * documentation](https://vega.github.io/vega-lite/docs/axis.html#config).
   */
  axis?: AxisConfig;
  /**
   * Specific axis config for axes with "band" scales.
   */
  axisBand?: AxisConfig;
  /**
   * Specific axis config for x-axis along the bottom edge of the chart.
   */
  axisBottom?: AxisConfig;
  /**
   * Specific axis config for y-axis along the left edge of the chart.
   */
  axisLeft?: AxisConfig;
  /**
   * Specific axis config for y-axis along the right edge of the chart.
   */
  axisRight?: AxisConfig;
  /**
   * Specific axis config for x-axis along the top edge of the chart.
   */
  axisTop?: AxisConfig;
  /**
   * X-axis specific config.
   */
  axisX?: AxisConfig;
  /**
   * Y-axis specific config.
   */
  axisY?: AxisConfig;
  /**
   * CSS color property to use as the background of the whole Vega-Lite view
   *
   * __Default value:__ none (transparent)
   */
  background?: string;
  /**
   * Bar-Specific Config
   */
  bar?: BarConfig;
  /**
   * Box Config
   */
  boxplot?: BoxPlotConfig;
  /**
   * Circle-Specific Config
   */
  circle?: MarkConfig;
  /**
   * Default configuration for all concatenation view composition operators (`concat`,
   * `hconcat`, and `vconcat`)
   */
  concat?: CompositionConfig;
  /**
   * Default axis and legend title for count fields.
   *
   * __Default value:__ `'Count of Records`.
   */
  countTitle?: string;
  /**
   * ErrorBand Config
   */
  errorband?: ErrorBandConfig;
  /**
   * ErrorBar Config
   */
  errorbar?: ErrorBarConfig;
  /**
   * Default configuration for the `facet` view composition operator
   */
  facet?: CompositionConfig;
  /**
   * Defines how Vega-Lite generates title for fields.  There are three possible styles:
   * - `"verbal"` (Default) - displays function in a verbal style (e.g., "Sum of field",
   * "Year-month of date", "field (binned)").
   * - `"function"` - displays function using parentheses and capitalized texts (e.g.,
   * "SUM(field)", "YEARMONTH(date)", "BIN(field)").
   * - `"plain"` - displays only the field name without functions (e.g., "field", "date",
   * "field").
   */
  fieldTitle?: FieldTitle;
  /**
   * Geoshape-Specific Config
   */
  geoshape?: MarkConfig;
  /**
   * Header configuration, which determines default properties for all
   * [headers](https://vega.github.io/vega-lite/docs/header.html).
   *
   * For a full list of header configuration options, please see the [corresponding section of
   * in the header documentation](https://vega.github.io/vega-lite/docs/header.html#config).
   */
  header?: HeaderConfig;
  /**
   * Header configuration, which determines default properties for column
   * [headers](https://vega.github.io/vega-lite/docs/header.html).
   *
   * For a full list of header configuration options, please see the [corresponding section of
   * in the header documentation](https://vega.github.io/vega-lite/docs/header.html#config).
   */
  headerColumn?: HeaderConfig;
  /**
   * Header configuration, which determines default properties for non-row/column facet
   * [headers](https://vega.github.io/vega-lite/docs/header.html).
   *
   * For a full list of header configuration options, please see the [corresponding section of
   * in the header documentation](https://vega.github.io/vega-lite/docs/header.html#config).
   */
  headerFacet?: HeaderConfig;
  /**
   * Header configuration, which determines default properties for row
   * [headers](https://vega.github.io/vega-lite/docs/header.html).
   *
   * For a full list of header configuration options, please see the [corresponding section of
   * in the header documentation](https://vega.github.io/vega-lite/docs/header.html#config).
   */
  headerRow?: HeaderConfig;
  /**
   * Defines how Vega-Lite should handle invalid values (`null` and `NaN`).
   * - If set to `"filter"` (default), all data items with null values will be skipped (for
   * line, trail, and area marks) or filtered (for other marks).
   * - If `null`, all data items are included. In this case, invalid values will be
   * interpreted as zeroes.
   */
  invalidValues?: InvalidValues | null;
  /**
   * Legend configuration, which determines default properties for all
   * [legends](https://vega.github.io/vega-lite/docs/legend.html). For a full list of legend
   * configuration options, please see the [corresponding section of in the legend
   * documentation](https://vega.github.io/vega-lite/docs/legend.html#config).
   */
  legend?: LegendConfig;
  /**
   * Line-Specific Config
   */
  line?: LineConfig;
  /**
   * Mark Config
   */
  mark?: MarkConfig;
  /**
   * D3 Number format for guide labels and text marks. For example "s" for SI units. Use [D3's
   * number format pattern](https://github.com/d3/d3-format#locale_format).
   */
  numberFormat?: string;
  /**
   * The default visualization padding, in pixels, from the edge of the visualization canvas
   * to the data rectangle.  If a number, specifies padding for all sides.
   * If an object, the value should have the format `{"left": 5, "top": 5, "right": 5,
   * "bottom": 5}` to specify padding for each side of the visualization.
   *
   * __Default value__: `5`
   */
  padding?: PaddingClass | number;
  /**
   * Point-Specific Config
   */
  point?: MarkConfig;
  /**
   * Projection configuration, which determines default properties for all
   * [projections](https://vega.github.io/vega-lite/docs/projection.html). For a full list of
   * projection configuration options, please see the [corresponding section of the projection
   * documentation](https://vega.github.io/vega-lite/docs/projection.html#config).
   */
  projection?: Projection;
  /**
   * An object hash that defines default range arrays or schemes for using with scales.
   * For a full list of scale range configuration options, please see the [corresponding
   * section of the scale
   * documentation](https://vega.github.io/vega-lite/docs/scale.html#config).
   */
  range?: RangeConfig;
  /**
   * Rect-Specific Config
   */
  rect?: MarkConfig;
  /**
   * Default configuration for the `repeat` view composition operator
   */
  repeat?: CompositionConfig;
  /**
   * Rule-Specific Config
   */
  rule?: MarkConfig;
  /**
   * Scale configuration determines default properties for all
   * [scales](https://vega.github.io/vega-lite/docs/scale.html). For a full list of scale
   * configuration options, please see the [corresponding section of the scale
   * documentation](https://vega.github.io/vega-lite/docs/scale.html#config).
   */
  scale?: ScaleConfig;
  /**
   * An object hash for defining default properties for each type of selections.
   */
  selection?: SelectionConfig;
  /**
   * Square-Specific Config
   */
  square?: MarkConfig;
  /**
   * Default stack offset for stackable mark.
   */
  stack?: StackOffset;
  /**
   * An object hash that defines key-value mappings to determine default properties for marks
   * with a given [style](https://vega.github.io/vega-lite/docs/mark.html#mark-def).  The keys
   * represent styles names; the values have to be valid [mark configuration
   * objects](https://vega.github.io/vega-lite/docs/mark.html#config).
   */
  style?: {[key: string]: BaseMarkConfig};
  /**
   * Text-Specific Config
   */
  text?: TextConfig;
  /**
   * Tick-Specific Config
   */
  tick?: TickConfig;
  /**
   * Default time format for raw time values (without time units) in text marks, legend labels
   * and header labels.
   *
   * __Default value:__ `"%b %d, %Y"`
   * __Note:__ Axes automatically determine format each label automatically so this config
   * would not affect axes.
   */
  timeFormat?: string;
  /**
   * Title configuration, which determines default properties for all
   * [titles](https://vega.github.io/vega-lite/docs/title.html). For a full list of title
   * configuration options, please see the [corresponding section of the title
   * documentation](https://vega.github.io/vega-lite/docs/title.html#config).
   */
  title?: BaseTitleConfig;
  /**
   * Trail-Specific Config
   */
  trail?: LineConfig;
  /**
   * Default properties for [single view
   * plots](https://vega.github.io/vega-lite/docs/spec.html#single).
   */
  view?: ViewConfig;
}

/**
 * Area-Specific Config
 */
export interface AreaConfig {
  /**
   * The horizontal alignment of the text. One of `"left"`, `"right"`, `"center"`.
   */
  align?: Align;
  /**
   * The rotation angle of the text, in degrees.
   */
  angle?: number;
  /**
   * The vertical alignment of the text. One of `"top"`, `"middle"`, `"bottom"`.
   *
   * __Default value:__ `"middle"`
   */
  baseline?: TextBaseline;
  /**
   * Default color.  Note that `fill` and `stroke` have higher precedence than `color` and
   * will override `color`.
   *
   * __Default value:__ <span style="color: #4682b4;">&#9632;</span> `"#4682b4"`
   *
   * __Note:__ This property cannot be used in a [style
   * config](https://vega.github.io/vega-lite/docs/mark.html#style-config).
   */
  color?: string;
  /**
   * The radius in pixels of rounded rectangle corners.
   *
   * __Default value:__ `0`
   */
  cornerRadius?: number;
  /**
   * The mouse cursor used over the mark. Any valid [CSS cursor
   * type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used.
   */
  cursor?: Cursor;
  /**
   * The direction of the text. One of `"ltr"` (left-to-right) or `"rtl"` (right-to-left).
   * This property determines on which side is truncated in response to the limit parameter.
   *
   * __Default value:__ `"ltr"`
   */
  dir?: Dir;
  /**
   * The horizontal offset, in pixels, between the text label and its anchor point. The offset
   * is applied after rotation by the _angle_ property.
   */
  dx?: number;
  /**
   * The vertical offset, in pixels, between the text label and its anchor point. The offset
   * is applied after rotation by the _angle_ property.
   */
  dy?: number;
  /**
   * The ellipsis string for text truncated in response to the limit parameter.
   *
   * __Default value:__ `"…"`
   */
  ellipsis?: string;
  /**
   * Default Fill Color.  This has higher precedence than `config.color`
   *
   * __Default value:__ (None)
   */
  fill?: string;
  /**
   * Whether the mark's color should be used as fill color instead of stroke color.
   *
   * __Default value:__ `false` for `point`, `line` and `rule`; otherwise, `true`.
   *
   * __Note:__ This property cannot be used in a [style
   * config](https://vega.github.io/vega-lite/docs/mark.html#style-config).
   */
  filled?: boolean;
  /**
   * The fill opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  fillOpacity?: number;
  /**
   * The typeface to set the text in (e.g., `"Helvetica Neue"`).
   */
  font?: string;
  /**
   * The font size, in pixels.
   */
  fontSize?: number;
  /**
   * The font style (e.g., `"italic"`).
   */
  fontStyle?: string;
  /**
   * The font weight.
   * This can be either a string (e.g `"bold"`, `"normal"`) or a number (`100`, `200`, `300`,
   * ..., `900` where `"normal"` = `400` and `"bold"` = `700`).
   */
  fontWeight?: number | FontWeightEnum;
  /**
   * A URL to load upon mouse click. If defined, the mark acts as a hyperlink.
   */
  href?: string;
  /**
   * The line interpolation method to use for line and area marks. One of the following:
   * - `"linear"`: piecewise linear segments, as in a polyline.
   * - `"linear-closed"`: close the linear segments to form a polygon.
   * - `"step"`: alternate between horizontal and vertical segments, as in a step function.
   * - `"step-before"`: alternate between vertical and horizontal segments, as in a step
   * function.
   * - `"step-after"`: alternate between horizontal and vertical segments, as in a step
   * function.
   * - `"basis"`: a B-spline, with control point duplication on the ends.
   * - `"basis-open"`: an open B-spline; may not intersect the start or end.
   * - `"basis-closed"`: a closed B-spline, as in a loop.
   * - `"cardinal"`: a Cardinal spline, with control point duplication on the ends.
   * - `"cardinal-open"`: an open Cardinal spline; may not intersect the start or end, but
   * will intersect other control points.
   * - `"cardinal-closed"`: a closed Cardinal spline, as in a loop.
   * - `"bundle"`: equivalent to basis, except the tension parameter is used to straighten the
   * spline.
   * - `"monotone"`: cubic interpolation that preserves monotonicity in y.
   */
  interpolate?: Interpolate;
  /**
   * The maximum length of the text mark in pixels. The text value will be automatically
   * truncated if the rendered size exceeds the limit.
   *
   * __Default value:__ `0`, indicating no limit
   */
  limit?: number;
  /**
   * A flag for overlaying line on top of area marks, or an object defining the properties of
   * the overlayed lines.
   *
   * - If this value is an empty object (`{}`) or `true`, lines with default properties will
   * be used.
   *
   * - If this value is `false`, no lines would be automatically added to area marks.
   *
   * __Default value:__ `false`.
   */
  line?: boolean | OverlayMarkDef;
  /**
   * The overall opacity (value between [0,1]).
   *
   * __Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or
   * `square` marks or layered `bar` charts and `1` otherwise.
   */
  opacity?: number;
  /**
   * For line and trail marks, this `order` property can be set to `null` or `false` to make
   * the lines use the original order in the data sources.
   */
  order?: boolean | null;
  /**
   * The orientation of a non-stacked bar, tick, area, and line charts.
   * The value is either horizontal (default) or vertical.
   * - For bar, rule and tick, this determines whether the size of the bar and tick
   * should be applied to x or y dimension.
   * - For area, this property determines the orient property of the Vega output.
   * - For line and trail marks, this property determines the sort order of the points in the
   * line
   * if `config.sortLineBy` is not specified.
   * For stacked charts, this is always determined by the orientation of the stack;
   * therefore explicitly specified value will be ignored.
   */
  orient?: Orientation;
  /**
   * A flag for overlaying points on top of line or area marks, or an object defining the
   * properties of the overlayed points.
   *
   * - If this property is `"transparent"`, transparent points will be used (for enhancing
   * tooltips and selections).
   *
   * - If this property is an empty object (`{}`) or `true`, filled points with default
   * properties will be used.
   *
   * - If this property is `false`, no points would be automatically added to line or area
   * marks.
   *
   * __Default value:__ `false`.
   */
  point?: boolean | OverlayMarkDef | PointEnum;
  /**
   * Polar coordinate radial offset, in pixels, of the text label from the origin determined
   * by the `x` and `y` properties.
   */
  radius?: number;
  /**
   * Shape of the point marks. Supported values include:
   * - plotting shapes: `"circle"`, `"square"`, `"cross"`, `"diamond"`, `"triangle-up"`,
   * `"triangle-down"`, `"triangle-right"`, or `"triangle-left"`.
   * - the line symbol `"stroke"`
   * - centered directional shapes `"arrow"`, `"wedge"`, or `"triangle"`
   * - a custom [SVG path
   * string](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) (For correct
   * sizing, custom shape paths should be defined within a square bounding box with
   * coordinates ranging from -1 to 1 along both the x and y dimensions.)
   *
   * __Default value:__ `"circle"`
   */
  shape?: string;
  /**
   * Default size for marks.
   * - For `point`/`circle`/`square`, this represents the pixel area of the marks. For
   * example: in the case of circles, the radius is determined in part by the square root of
   * the size value.
   * - For `bar`, this represents the band size of the bar, in pixels.
   * - For `text`, this represents the font size, in pixels.
   *
   * __Default value:__ `30` for point, circle, square marks; `rangeStep` - 1 for bar marks
   * with discrete dimensions; `5` for bar marks with continuous dimensions; `11` for text
   * marks.
   */
  size?: number;
  /**
   * Default Stroke Color.  This has higher precedence than `config.color`
   *
   * __Default value:__ (None)
   */
  stroke?: string;
  /**
   * The stroke cap for line ending style. One of `"butt"`, `"round"`, or `"square"`.
   *
   * __Default value:__ `"square"`
   */
  strokeCap?: StrokeCap;
  /**
   * An array of alternating stroke, space lengths for creating dashed or dotted lines.
   */
  strokeDash?: number[];
  /**
   * The offset (in pixels) into which to begin drawing with the stroke dash array.
   */
  strokeDashOffset?: number;
  /**
   * The stroke line join method. One of `"miter"`, `"round"` or `"bevel"`.
   *
   * __Default value:__ `"miter"`
   */
  strokeJoin?: StrokeJoin;
  /**
   * The miter limit at which to bevel a line join.
   */
  strokeMiterLimit?: number;
  /**
   * The stroke opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  strokeOpacity?: number;
  /**
   * The stroke width, in pixels.
   */
  strokeWidth?: number;
  /**
   * Depending on the interpolation type, sets the tension parameter (for line and area marks).
   */
  tension?: number;
  /**
   * Placeholder text if the `text` channel is not specified
   */
  text?: string;
  /**
   * Polar coordinate angle, in radians, of the text label from the origin determined by the
   * `x` and `y` properties. Values for `theta` follow the same convention of `arc` mark
   * `startAngle` and `endAngle` properties: angles are measured in radians, with `0`
   * indicating "north".
   */
  theta?: number;
  /**
   * The tooltip text string to show upon mouse hover or an object defining which fields
   * should the tooltip be derived from.
   *
   * - If `tooltip` is `{"content": "encoding"}`, then all fields from `encoding` will be
   * used.
   * - If `tooltip` is `{"content": "data"}`, then all fields that appear in the highlighted
   * data point will be used.
   * - If set to `null`, then no tooltip will be used.
   */
  tooltip?: TooltipContent | null | string;
  /**
   * X coordinates of the marks, or width of horizontal `"bar"` and `"area"` without `x2`.
   */
  x?: number;
  /**
   * X2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   */
  x2?: number;
  /**
   * Y coordinates of the marks, or height of vertical `"bar"` and `"area"` without `y2`
   */
  y?: number;
  /**
   * Y2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   */
  y2?: number;
}

/**
 * Axis configuration, which determines default properties for all `x` and `y`
 * [axes](https://vega.github.io/vega-lite/docs/axis.html). For a full list of axis
 * configuration options, please see the [corresponding section of the axis
 * documentation](https://vega.github.io/vega-lite/docs/axis.html#config).
 *
 * Specific axis config for axes with "band" scales.
 *
 * Specific axis config for x-axis along the bottom edge of the chart.
 *
 * Specific axis config for y-axis along the left edge of the chart.
 *
 * Specific axis config for y-axis along the right edge of the chart.
 *
 * Specific axis config for x-axis along the top edge of the chart.
 *
 * X-axis specific config.
 *
 * Y-axis specific config.
 */
export interface AxisConfig {
  /**
   * An interpolation fraction indicating where, for `band` scales, axis ticks should be
   * positioned. A value of `0` places ticks at the left edge of their bands. A value of `0.5`
   * places ticks in the middle of their bands.
   *
   * __Default value:__ `0.5`
   */
  bandPosition?: number;
  /**
   * A boolean flag indicating if the domain (the axis baseline) should be included as part of
   * the axis.
   *
   * __Default value:__ `true`
   */
  domain?: boolean;
  /**
   * Color of axis domain line.
   *
   * __Default value:__ `"gray"`.
   */
  domainColor?: string;
  /**
   * An array of alternating [stroke, space] lengths for dashed domain lines.
   */
  domainDash?: number[];
  /**
   * The pixel offset at which to start drawing with the domain dash array.
   */
  domainDashOffset?: number;
  /**
   * Opacity of the axis domain line.
   */
  domainOpacity?: number;
  /**
   * Stroke width of axis domain line
   *
   * __Default value:__ `1`
   */
  domainWidth?: number;
  /**
   * A boolean flag indicating if grid lines should be included as part of the axis
   *
   * __Default value:__ `true` for [continuous
   * scales](https://vega.github.io/vega-lite/docs/scale.html#continuous) that are not binned;
   * otherwise, `false`.
   */
  grid?: boolean;
  /**
   * Color of gridlines.
   *
   * __Default value:__ `"lightGray"`.
   */
  gridColor?: string;
  /**
   * An array of alternating [stroke, space] lengths for dashed grid lines.
   */
  gridDash?: number[];
  /**
   * The pixel offset at which to start drawing with the grid dash array.
   */
  gridDashOffset?: number;
  /**
   * The stroke opacity of grid (value between [0,1])
   *
   * __Default value:__ `1`
   */
  gridOpacity?: number;
  /**
   * The grid width, in pixels.
   *
   * __Default value:__ `1`
   */
  gridWidth?: number;
  /**
   * Horizontal text alignment of axis tick labels, overriding the default setting for the
   * current axis orientation.
   */
  labelAlign?: Align;
  /**
   * The rotation angle of the axis labels.
   *
   * __Default value:__ `-90` for nominal and ordinal fields; `0` otherwise.
   */
  labelAngle?: number;
  /**
   * Vertical text baseline of axis tick labels, overriding the default setting for the
   * current axis orientation. Can be `"top"`, `"middle"`, `"bottom"`, or `"alphabetic"`.
   */
  labelBaseline?: TextBaseline;
  /**
   * Indicates if labels should be hidden if they exceed the axis range. If `false` (the
   * default) no bounds overlap analysis is performed. If `true`, labels will be hidden if
   * they exceed the axis range by more than 1 pixel. If this property is a number, it
   * specifies the pixel tolerance: the maximum amount by which a label bounding box may
   * exceed the axis range.
   *
   * __Default value:__ `false`.
   */
  labelBound?: boolean | number;
  /**
   * The color of the tick label, can be in hex color code or regular color name.
   */
  labelColor?: string;
  /**
   * Indicates if the first and last axis labels should be aligned flush with the scale range.
   * Flush alignment for a horizontal axis will left-align the first label and right-align the
   * last label. For vertical axes, bottom and top text baselines are applied instead. If this
   * property is a number, it also indicates the number of pixels by which to offset the first
   * and last labels; for example, a value of 2 will flush-align the first and last labels and
   * also push them 2 pixels outward from the center of the axis. The additional adjustment
   * can sometimes help the labels better visually group with corresponding axis ticks.
   *
   * __Default value:__ `true` for axis of a continuous x-scale. Otherwise, `false`.
   */
  labelFlush?: boolean | number;
  /**
   * Indicates the number of pixels by which to offset flush-adjusted labels. For example, a
   * value of `2` will push flush-adjusted labels 2 pixels outward from the center of the
   * axis. Offsets can help the labels better visually group with corresponding axis ticks.
   *
   * __Default value:__ `0`.
   */
  labelFlushOffset?: number;
  /**
   * The font of the tick label.
   */
  labelFont?: string;
  /**
   * The font size of the label, in pixels.
   */
  labelFontSize?: number;
  /**
   * Font style of the title.
   */
  labelFontStyle?: string;
  /**
   * Font weight of axis tick labels.
   */
  labelFontWeight?: number | FontWeightEnum;
  /**
   * Maximum allowed pixel width of axis tick labels.
   *
   * __Default value:__ `180`
   */
  labelLimit?: number;
  /**
   * The opacity of the labels.
   */
  labelOpacity?: number;
  /**
   * The strategy to use for resolving overlap of axis labels. If `false` (the default), no
   * overlap reduction is attempted. If set to `true` or `"parity"`, a strategy of removing
   * every other label is used (this works well for standard linear axes). If set to
   * `"greedy"`, a linear scan of the labels is performed, removing any labels that overlaps
   * with the last visible label (this often works better for log-scaled axes).
   *
   * __Default value:__ `true` for non-nominal fields with non-log scales; `"greedy"` for log
   * scales; otherwise `false`.
   */
  labelOverlap?: boolean | LabelOverlapEnum;
  /**
   * The padding, in pixels, between axis and text labels.
   *
   * __Default value:__ `2`
   */
  labelPadding?: number;
  /**
   * A boolean flag indicating if labels should be included as part of the axis.
   *
   * __Default value:__ `true`.
   */
  labels?: boolean;
  /**
   * The minimum separation that must be between label bounding boxes for them to be
   * considered non-overlapping (default `0`). This property is ignored if *labelOverlap*
   * resolution is not enabled.
   */
  labelSeparation?: number;
  /**
   * The maximum extent in pixels that axis ticks and labels should use. This determines a
   * maximum offset value for axis titles.
   *
   * __Default value:__ `undefined`.
   */
  maxExtent?: number;
  /**
   * The minimum extent in pixels that axis ticks and labels should use. This determines a
   * minimum offset value for axis titles.
   *
   * __Default value:__ `30` for y-axis; `undefined` for x-axis.
   */
  minExtent?: number;
  /**
   * The orientation of the axis. One of `"top"`, `"bottom"`, `"left"` or `"right"`. The
   * orientation can be used to further specialize the axis type (e.g., a y-axis oriented
   * towards the right edge of the chart).
   *
   * __Default value:__ `"bottom"` for x-axes and `"left"` for y-axes.
   */
  orient?: Orient;
  /**
   * Whether month names and weekday names should be abbreviated.
   *
   * __Default value:__  `false`
   */
  shortTimeLabels?: boolean;
  /**
   * The color of the axis's tick.
   *
   * __Default value:__ `"gray"`
   */
  tickColor?: string;
  /**
   * An array of alternating [stroke, space] lengths for dashed tick mark lines.
   */
  tickDash?: number[];
  /**
   * The pixel offset at which to start drawing with the tick mark dash array.
   */
  tickDashOffset?: number;
  /**
   * Boolean flag indicating if an extra axis tick should be added for the initial position of
   * the axis. This flag is useful for styling axes for `band` scales such that ticks are
   * placed on band boundaries rather in the middle of a band. Use in conjunction with
   * `"bandPosition": 1` and an axis `"padding"` value of `0`.
   */
  tickExtra?: boolean;
  /**
   * Position offset in pixels to apply to ticks, labels, and gridlines.
   */
  tickOffset?: number;
  /**
   * Opacity of the ticks.
   */
  tickOpacity?: number;
  /**
   * Boolean flag indicating if pixel position values should be rounded to the nearest
   * integer.
   *
   * __Default value:__ `true`
   */
  tickRound?: boolean;
  /**
   * Boolean value that determines whether the axis should include ticks.
   *
   * __Default value:__ `true`
   */
  ticks?: boolean;
  /**
   * The size in pixels of axis ticks.
   *
   * __Default value:__ `5`
   */
  tickSize?: number;
  /**
   * The width, in pixels, of ticks.
   *
   * __Default value:__ `1`
   */
  tickWidth?: number;
  /**
   * Set to null to disable title for the axis, legend, or header.
   */
  title?: null;
  /**
   * Horizontal text alignment of axis titles.
   */
  titleAlign?: Align;
  /**
   * Text anchor position for placing axis titles.
   */
  titleAnchor?: TitleAnchor | null;
  /**
   * Angle in degrees of axis titles.
   */
  titleAngle?: number;
  /**
   * Vertical text baseline for axis titles.
   */
  titleBaseline?: TextBaseline;
  /**
   * Color of the title, can be in hex color code or regular color name.
   */
  titleColor?: string;
  /**
   * Font of the title. (e.g., `"Helvetica Neue"`).
   */
  titleFont?: string;
  /**
   * Font size of the title.
   */
  titleFontSize?: number;
  /**
   * Font style of the title.
   */
  titleFontStyle?: string;
  /**
   * Font weight of the title.
   * This can be either a string (e.g `"bold"`, `"normal"`) or a number (`100`, `200`, `300`,
   * ..., `900` where `"normal"` = `400` and `"bold"` = `700`).
   */
  titleFontWeight?: number | FontWeightEnum;
  /**
   * Maximum allowed pixel width of axis titles.
   */
  titleLimit?: number;
  /**
   * Opacity of the axis title.
   */
  titleOpacity?: number;
  /**
   * The padding, in pixels, between title and axis.
   */
  titlePadding?: number;
  /**
   * X-coordinate of the axis title relative to the axis group.
   */
  titleX?: number;
  /**
   * Y-coordinate of the axis title relative to the axis group.
   */
  titleY?: number;
}

/**
 * Bar-Specific Config
 */
export interface BarConfig {
  /**
   * The horizontal alignment of the text. One of `"left"`, `"right"`, `"center"`.
   */
  align?: Align;
  /**
   * The rotation angle of the text, in degrees.
   */
  angle?: number;
  /**
   * The vertical alignment of the text. One of `"top"`, `"middle"`, `"bottom"`.
   *
   * __Default value:__ `"middle"`
   */
  baseline?: TextBaseline;
  /**
   * Offset between bars for binned field.  Ideal value for this is either 0 (Preferred by
   * statisticians) or 1 (Vega-Lite Default, D3 example style).
   *
   * __Default value:__ `1`
   */
  binSpacing?: number;
  /**
   * Default color.  Note that `fill` and `stroke` have higher precedence than `color` and
   * will override `color`.
   *
   * __Default value:__ <span style="color: #4682b4;">&#9632;</span> `"#4682b4"`
   *
   * __Note:__ This property cannot be used in a [style
   * config](https://vega.github.io/vega-lite/docs/mark.html#style-config).
   */
  color?: string;
  /**
   * The default size of the bars on continuous scales.
   *
   * __Default value:__ `5`
   */
  continuousBandSize?: number;
  /**
   * The radius in pixels of rounded rectangle corners.
   *
   * __Default value:__ `0`
   */
  cornerRadius?: number;
  /**
   * The mouse cursor used over the mark. Any valid [CSS cursor
   * type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used.
   */
  cursor?: Cursor;
  /**
   * The direction of the text. One of `"ltr"` (left-to-right) or `"rtl"` (right-to-left).
   * This property determines on which side is truncated in response to the limit parameter.
   *
   * __Default value:__ `"ltr"`
   */
  dir?: Dir;
  /**
   * The default size of the bars with discrete dimensions.  If unspecified, the default size
   * is  `bandSize-1`,
   * which provides 1 pixel offset between bars.
   */
  discreteBandSize?: number;
  /**
   * The horizontal offset, in pixels, between the text label and its anchor point. The offset
   * is applied after rotation by the _angle_ property.
   */
  dx?: number;
  /**
   * The vertical offset, in pixels, between the text label and its anchor point. The offset
   * is applied after rotation by the _angle_ property.
   */
  dy?: number;
  /**
   * The ellipsis string for text truncated in response to the limit parameter.
   *
   * __Default value:__ `"…"`
   */
  ellipsis?: string;
  /**
   * Default Fill Color.  This has higher precedence than `config.color`
   *
   * __Default value:__ (None)
   */
  fill?: string;
  /**
   * Whether the mark's color should be used as fill color instead of stroke color.
   *
   * __Default value:__ `false` for `point`, `line` and `rule`; otherwise, `true`.
   *
   * __Note:__ This property cannot be used in a [style
   * config](https://vega.github.io/vega-lite/docs/mark.html#style-config).
   */
  filled?: boolean;
  /**
   * The fill opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  fillOpacity?: number;
  /**
   * The typeface to set the text in (e.g., `"Helvetica Neue"`).
   */
  font?: string;
  /**
   * The font size, in pixels.
   */
  fontSize?: number;
  /**
   * The font style (e.g., `"italic"`).
   */
  fontStyle?: string;
  /**
   * The font weight.
   * This can be either a string (e.g `"bold"`, `"normal"`) or a number (`100`, `200`, `300`,
   * ..., `900` where `"normal"` = `400` and `"bold"` = `700`).
   */
  fontWeight?: number | FontWeightEnum;
  /**
   * A URL to load upon mouse click. If defined, the mark acts as a hyperlink.
   */
  href?: string;
  /**
   * The line interpolation method to use for line and area marks. One of the following:
   * - `"linear"`: piecewise linear segments, as in a polyline.
   * - `"linear-closed"`: close the linear segments to form a polygon.
   * - `"step"`: alternate between horizontal and vertical segments, as in a step function.
   * - `"step-before"`: alternate between vertical and horizontal segments, as in a step
   * function.
   * - `"step-after"`: alternate between horizontal and vertical segments, as in a step
   * function.
   * - `"basis"`: a B-spline, with control point duplication on the ends.
   * - `"basis-open"`: an open B-spline; may not intersect the start or end.
   * - `"basis-closed"`: a closed B-spline, as in a loop.
   * - `"cardinal"`: a Cardinal spline, with control point duplication on the ends.
   * - `"cardinal-open"`: an open Cardinal spline; may not intersect the start or end, but
   * will intersect other control points.
   * - `"cardinal-closed"`: a closed Cardinal spline, as in a loop.
   * - `"bundle"`: equivalent to basis, except the tension parameter is used to straighten the
   * spline.
   * - `"monotone"`: cubic interpolation that preserves monotonicity in y.
   */
  interpolate?: Interpolate;
  /**
   * The maximum length of the text mark in pixels. The text value will be automatically
   * truncated if the rendered size exceeds the limit.
   *
   * __Default value:__ `0`, indicating no limit
   */
  limit?: number;
  /**
   * The overall opacity (value between [0,1]).
   *
   * __Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or
   * `square` marks or layered `bar` charts and `1` otherwise.
   */
  opacity?: number;
  /**
   * For line and trail marks, this `order` property can be set to `null` or `false` to make
   * the lines use the original order in the data sources.
   */
  order?: boolean | null;
  /**
   * The orientation of a non-stacked bar, tick, area, and line charts.
   * The value is either horizontal (default) or vertical.
   * - For bar, rule and tick, this determines whether the size of the bar and tick
   * should be applied to x or y dimension.
   * - For area, this property determines the orient property of the Vega output.
   * - For line and trail marks, this property determines the sort order of the points in the
   * line
   * if `config.sortLineBy` is not specified.
   * For stacked charts, this is always determined by the orientation of the stack;
   * therefore explicitly specified value will be ignored.
   */
  orient?: Orientation;
  /**
   * Polar coordinate radial offset, in pixels, of the text label from the origin determined
   * by the `x` and `y` properties.
   */
  radius?: number;
  /**
   * Shape of the point marks. Supported values include:
   * - plotting shapes: `"circle"`, `"square"`, `"cross"`, `"diamond"`, `"triangle-up"`,
   * `"triangle-down"`, `"triangle-right"`, or `"triangle-left"`.
   * - the line symbol `"stroke"`
   * - centered directional shapes `"arrow"`, `"wedge"`, or `"triangle"`
   * - a custom [SVG path
   * string](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) (For correct
   * sizing, custom shape paths should be defined within a square bounding box with
   * coordinates ranging from -1 to 1 along both the x and y dimensions.)
   *
   * __Default value:__ `"circle"`
   */
  shape?: string;
  /**
   * Default size for marks.
   * - For `point`/`circle`/`square`, this represents the pixel area of the marks. For
   * example: in the case of circles, the radius is determined in part by the square root of
   * the size value.
   * - For `bar`, this represents the band size of the bar, in pixels.
   * - For `text`, this represents the font size, in pixels.
   *
   * __Default value:__ `30` for point, circle, square marks; `rangeStep` - 1 for bar marks
   * with discrete dimensions; `5` for bar marks with continuous dimensions; `11` for text
   * marks.
   */
  size?: number;
  /**
   * Default Stroke Color.  This has higher precedence than `config.color`
   *
   * __Default value:__ (None)
   */
  stroke?: string;
  /**
   * The stroke cap for line ending style. One of `"butt"`, `"round"`, or `"square"`.
   *
   * __Default value:__ `"square"`
   */
  strokeCap?: StrokeCap;
  /**
   * An array of alternating stroke, space lengths for creating dashed or dotted lines.
   */
  strokeDash?: number[];
  /**
   * The offset (in pixels) into which to begin drawing with the stroke dash array.
   */
  strokeDashOffset?: number;
  /**
   * The stroke line join method. One of `"miter"`, `"round"` or `"bevel"`.
   *
   * __Default value:__ `"miter"`
   */
  strokeJoin?: StrokeJoin;
  /**
   * The miter limit at which to bevel a line join.
   */
  strokeMiterLimit?: number;
  /**
   * The stroke opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  strokeOpacity?: number;
  /**
   * The stroke width, in pixels.
   */
  strokeWidth?: number;
  /**
   * Depending on the interpolation type, sets the tension parameter (for line and area marks).
   */
  tension?: number;
  /**
   * Placeholder text if the `text` channel is not specified
   */
  text?: string;
  /**
   * Polar coordinate angle, in radians, of the text label from the origin determined by the
   * `x` and `y` properties. Values for `theta` follow the same convention of `arc` mark
   * `startAngle` and `endAngle` properties: angles are measured in radians, with `0`
   * indicating "north".
   */
  theta?: number;
  /**
   * The tooltip text string to show upon mouse hover or an object defining which fields
   * should the tooltip be derived from.
   *
   * - If `tooltip` is `{"content": "encoding"}`, then all fields from `encoding` will be
   * used.
   * - If `tooltip` is `{"content": "data"}`, then all fields that appear in the highlighted
   * data point will be used.
   * - If set to `null`, then no tooltip will be used.
   */
  tooltip?: TooltipContent | null | string;
  /**
   * X coordinates of the marks, or width of horizontal `"bar"` and `"area"` without `x2`.
   */
  x?: number;
  /**
   * X2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   */
  x2?: number;
  /**
   * Y coordinates of the marks, or height of vertical `"bar"` and `"area"` without `y2`
   */
  y?: number;
  /**
   * Y2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   */
  y2?: number;
}

/**
 * Box Config
 */
export interface BoxPlotConfig {
  box?: boolean | MarkConfig;
  /**
   * The extent of the whiskers. Available options include:
   * - `"min-max"`: min and max are the lower and upper whiskers respectively.
   * - A number representing multiple of the interquartile range.  This number will be
   * multiplied by the IQR to determine whisker boundary, which spans from the smallest data
   * to the largest data within the range _[Q1 - k * IQR, Q3 + k * IQR]_ where _Q1_ and _Q3_
   * are the first and third quartiles while _IQR_ is the interquartile range (_Q3-Q1_).
   *
   * __Default value:__ `1.5`.
   */
  extent?: number | ExtentEnum;
  median?: boolean | MarkConfig;
  outliers?: boolean | MarkConfig;
  rule?: boolean | MarkConfig;
  /**
   * Size of the box and median tick of a box plot
   */
  size?: number;
  ticks?: boolean | MarkConfig;
}

export enum ExtentEnum {
  MinMax = 'min-max'
}

/**
 * Default configuration for all concatenation view composition operators (`concat`,
 * `hconcat`, and `vconcat`)
 *
 * Default configuration for the `facet` view composition operator
 *
 * Default configuration for the `repeat` view composition operator
 */
export interface CompositionConfig {
  /**
   * The number of columns to include in the view composition layout.
   *
   * __Default value__: `undefined` -- An infinite number of columns (a single row) will be
   * assumed. This is equivalent to
   * `hconcat` (for `concat`) and to using the `column` channel (for `facet` and `repeat`).
   *
   * __Note__:
   *
   * 1) This property is only for:
   * - the general (wrappable) `concat` operator (not `hconcat`/`vconcat`)
   * - the `facet` and `repeat` operator with one field/repetition definition (without
   * row/column nesting)
   *
   * 2) Setting the `columns` to `1` is equivalent to `vconcat` (for `concat`) and to using
   * the `row` channel (for `facet` and `repeat`).
   */
  columns?: number;
  /**
   * The default spacing in pixels between composed sub-views.
   *
   * __Default value__: `20`
   */
  spacing?: number;
}

/**
 * ErrorBand Config
 */
export interface ErrorBandConfig {
  band?: boolean | MarkConfig;
  borders?: boolean | MarkConfig;
  /**
   * The extent of the band. Available options include:
   * - `"ci"`: Extend the band to the confidence interval of the mean.
   * - `"stderr"`: The size of band are set to the value of standard error, extending from the
   * mean.
   * - `"stdev"`: The size of band are set to the value of standard deviation, extending from
   * the mean.
   * - `"iqr"`: Extend the band to the q1 and q3.
   *
   * __Default value:__ `"stderr"`.
   */
  extent?: ErrorbandExtent;
  /**
   * The line interpolation method for the error band. One of the following:
   * - `"linear"`: piecewise linear segments, as in a polyline.
   * - `"linear-closed"`: close the linear segments to form a polygon.
   * - `"step"`: a piecewise constant function (a step function) consisting of alternating
   * horizontal and vertical lines. The y-value changes at the midpoint of each pair of
   * adjacent x-values.
   * - `"step-before"`: a piecewise constant function (a step function) consisting of
   * alternating horizontal and vertical lines. The y-value changes before the x-value.
   * - `"step-after"`: a piecewise constant function (a step function) consisting of
   * alternating horizontal and vertical lines. The y-value changes after the x-value.
   * - `"basis"`: a B-spline, with control point duplication on the ends.
   * - `"basis-open"`: an open B-spline; may not intersect the start or end.
   * - `"basis-closed"`: a closed B-spline, as in a loop.
   * - `"cardinal"`: a Cardinal spline, with control point duplication on the ends.
   * - `"cardinal-open"`: an open Cardinal spline; may not intersect the start or end, but
   * will intersect other control points.
   * - `"cardinal-closed"`: a closed Cardinal spline, as in a loop.
   * - `"bundle"`: equivalent to basis, except the tension parameter is used to straighten the
   * spline.
   * - `"monotone"`: cubic interpolation that preserves monotonicity in y.
   */
  interpolate?: Interpolate;
  /**
   * The tension parameter for the interpolation type of the error band.
   */
  tension?: number;
}

/**
 * The extent of the band. Available options include:
 * - `"ci"`: Extend the band to the confidence interval of the mean.
 * - `"stderr"`: The size of band are set to the value of standard error, extending from the
 * mean.
 * - `"stdev"`: The size of band are set to the value of standard deviation, extending from
 * the mean.
 * - `"iqr"`: Extend the band to the q1 and q3.
 *
 * __Default value:__ `"stderr"`.
 *
 * The extent of the rule. Available options include:
 * - `"ci"`: Extend the rule to the confidence interval of the mean.
 * - `"stderr"`: The size of rule are set to the value of standard error, extending from the
 * mean.
 * - `"stdev"`: The size of rule are set to the value of standard deviation, extending from
 * the mean.
 * - `"iqr"`: Extend the rule to the q1 and q3.
 *
 * __Default value:__ `"stderr"`.
 */
export enum ErrorbandExtent {
  Ci = 'ci',
  Iqr = 'iqr',
  Stderr = 'stderr',
  Stdev = 'stdev'
}

/**
 * ErrorBar Config
 */
export interface ErrorBarConfig {
  /**
   * The extent of the rule. Available options include:
   * - `"ci"`: Extend the rule to the confidence interval of the mean.
   * - `"stderr"`: The size of rule are set to the value of standard error, extending from the
   * mean.
   * - `"stdev"`: The size of rule are set to the value of standard deviation, extending from
   * the mean.
   * - `"iqr"`: Extend the rule to the q1 and q3.
   *
   * __Default value:__ `"stderr"`.
   */
  extent?: ErrorbandExtent;
  rule?: boolean | MarkConfig;
  ticks?: boolean | MarkConfig;
}

/**
 * Defines how Vega-Lite generates title for fields.  There are three possible styles:
 * - `"verbal"` (Default) - displays function in a verbal style (e.g., "Sum of field",
 * "Year-month of date", "field (binned)").
 * - `"function"` - displays function using parentheses and capitalized texts (e.g.,
 * "SUM(field)", "YEARMONTH(date)", "BIN(field)").
 * - `"plain"` - displays only the field name without functions (e.g., "field", "date",
 * "field").
 */
export enum FieldTitle {
  Functional = 'functional',
  Plain = 'plain',
  Verbal = 'verbal'
}

/**
 * Header configuration, which determines default properties for all
 * [headers](https://vega.github.io/vega-lite/docs/header.html).
 *
 * For a full list of header configuration options, please see the [corresponding section of
 * in the header documentation](https://vega.github.io/vega-lite/docs/header.html#config).
 *
 * Header configuration, which determines default properties for column
 * [headers](https://vega.github.io/vega-lite/docs/header.html).
 *
 * For a full list of header configuration options, please see the [corresponding section of
 * in the header documentation](https://vega.github.io/vega-lite/docs/header.html#config).
 *
 * Header configuration, which determines default properties for non-row/column facet
 * [headers](https://vega.github.io/vega-lite/docs/header.html).
 *
 * For a full list of header configuration options, please see the [corresponding section of
 * in the header documentation](https://vega.github.io/vega-lite/docs/header.html#config).
 *
 * Header configuration, which determines default properties for row
 * [headers](https://vega.github.io/vega-lite/docs/header.html).
 *
 * For a full list of header configuration options, please see the [corresponding section of
 * in the header documentation](https://vega.github.io/vega-lite/docs/header.html#config).
 */
export interface HeaderConfig {
  /**
   * The text formatting pattern for labels of guides (axes, legends, headers) and text
   * marks.
   *
   * - If the format type is `"number"` (e.g., for quantitative fields), this is D3's [number
   * format pattern](https://github.com/d3/d3-format#locale_format).
   * - If the format type is `"time"` (e.g., for temporal fields), this is D3's [time format
   * pattern](https://github.com/d3/d3-time-format#locale_format).
   *
   * See the [format documentation](https://vega.github.io/vega-lite/docs/format.html) for
   * more examples.
   *
   * __Default value:__  Derived from
   * [numberFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for
   * number format and from
   * [timeFormat](https://vega.github.io/vega-lite/docs/config.html#format) config for time
   * format.
   */
  format?: string;
  /**
   * The format type for labels (`"number"` or `"time"`).
   *
   * __Default value:__
   * - `"time"` for temporal fields and ordinal and nomimal fields with `timeUnit`.
   * - `"number"` for quantitative fields as well as ordinal and nomimal fields without
   * `timeUnit`.
   */
  formatType?: FormatType;
  /**
   * Horizontal text alignment of header labels.
   */
  labelAlign?: Align;
  /**
   * The anchor position for placing the labels. One of `"start"`, `"middle"`, or `"end"`. For
   * example, with a label orientation of top these anchor positions map to a left-, center-,
   * or right-aligned label.
   */
  labelAnchor?: TitleAnchor | null;
  /**
   * The rotation angle of the header labels.
   *
   * __Default value:__ `0` for column header, `-90` for row header.
   */
  labelAngle?: number;
  /**
   * The color of the header label, can be in hex color code or regular color name.
   */
  labelColor?: string;
  /**
   * The font of the header label.
   */
  labelFont?: string;
  /**
   * The font size of the header label, in pixels.
   */
  labelFontSize?: number;
  /**
   * The maximum length of the header label in pixels. The text value will be automatically
   * truncated if the rendered size exceeds the limit.
   *
   * __Default value:__ `0`, indicating no limit
   */
  labelLimit?: number;
  /**
   * The orientation of the header label. One of `"top"`, `"bottom"`, `"left"` or `"right"`.
   */
  labelOrient?: Orient;
  /**
   * The padding, in pixel, between facet header's label and the plot.
   *
   * __Default value:__ `10`
   */
  labelPadding?: number;
  /**
   * Whether month names and weekday names should be abbreviated.
   *
   * __Default value:__  `false`
   */
  shortTimeLabels?: boolean;
  /**
   * Set to null to disable title for the axis, legend, or header.
   */
  title?: null;
  /**
   * Horizontal text alignment (to the anchor) of header titles.
   */
  titleAlign?: Align;
  /**
   * The anchor position for placing the title. One of `"start"`, `"middle"`, or `"end"`. For
   * example, with an orientation of top these anchor positions map to a left-, center-, or
   * right-aligned title.
   */
  titleAnchor?: TitleAnchor | null;
  /**
   * The rotation angle of the header title.
   *
   * __Default value:__ `0`.
   */
  titleAngle?: number;
  /**
   * Vertical text baseline for the header title. One of `"top"`, `"bottom"`, `"middle"`.
   *
   * __Default value:__ `"middle"`
   */
  titleBaseline?: TextBaseline;
  /**
   * Color of the header title, can be in hex color code or regular color name.
   */
  titleColor?: string;
  /**
   * Font of the header title. (e.g., `"Helvetica Neue"`).
   */
  titleFont?: string;
  /**
   * Font size of the header title.
   */
  titleFontSize?: number;
  /**
   * Font weight of the header title.
   * This can be either a string (e.g `"bold"`, `"normal"`) or a number (`100`, `200`, `300`,
   * ..., `900` where `"normal"` = `400` and `"bold"` = `700`).
   */
  titleFontWeight?: number | FontWeightEnum;
  /**
   * The maximum length of the header title in pixels. The text value will be automatically
   * truncated if the rendered size exceeds the limit.
   *
   * __Default value:__ `0`, indicating no limit
   */
  titleLimit?: number;
  /**
   * The orientation of the header title. One of `"top"`, `"bottom"`, `"left"` or `"right"`.
   */
  titleOrient?: Orient;
  /**
   * The padding, in pixel, between facet header's title and the label.
   *
   * __Default value:__ `10`
   */
  titlePadding?: number;
}

export enum InvalidValues {
  Filter = 'filter'
}

/**
 * Legend configuration, which determines default properties for all
 * [legends](https://vega.github.io/vega-lite/docs/legend.html). For a full list of legend
 * configuration options, please see the [corresponding section of in the legend
 * documentation](https://vega.github.io/vega-lite/docs/legend.html#config).
 */
export interface LegendConfig {
  /**
   * The height in pixels to clip symbol legend entries and limit their size.
   */
  clipHeight?: number;
  /**
   * The horizontal padding in pixels between symbol legend entries.
   *
   * __Default value:__ `10`.
   */
  columnPadding?: number;
  /**
   * The number of columns in which to arrange symbol legend entries. A value of `0` or lower
   * indicates a single row with one column per entry.
   */
  columns?: number;
  /**
   * Corner radius for the full legend.
   */
  cornerRadius?: number;
  /**
   * Background fill color for the full legend.
   */
  fillColor?: string;
  /**
   * The default direction (`"horizontal"` or `"vertical"`) for gradient legends.
   *
   * __Default value:__ `"vertical"`.
   */
  gradientDirection?: Orientation;
  /**
   * Max legend length for a horizontal gradient when `config.legend.gradientLength` is
   * undefined.
   *
   * __Default value:__ `200`
   */
  gradientHorizontalMaxLength?: number;
  /**
   * Min legend length for a horizontal gradient when `config.legend.gradientLength` is
   * undefined.
   *
   * __Default value:__ `100`
   */
  gradientHorizontalMinLength?: number;
  /**
   * The maximum allowed length in pixels of color ramp gradient labels.
   */
  gradientLabelLimit?: number;
  /**
   * Vertical offset in pixels for color ramp gradient labels.
   *
   * __Default value:__ `2`.
   */
  gradientLabelOffset?: number;
  /**
   * The length in pixels of the primary axis of a color gradient. This value corresponds to
   * the height of a vertical gradient or the width of a horizontal gradient.
   *
   * __Default value:__ `200`.
   */
  gradientLength?: number;
  /**
   * Opacity of the color gradient.
   */
  gradientOpacity?: number;
  /**
   * The color of the gradient stroke, can be in hex color code or regular color name.
   *
   * __Default value:__ `"lightGray"`.
   */
  gradientStrokeColor?: string;
  /**
   * The width of the gradient stroke, in pixels.
   *
   * __Default value:__ `0`.
   */
  gradientStrokeWidth?: number;
  /**
   * The thickness in pixels of the color gradient. This value corresponds to the width of a
   * vertical gradient or the height of a horizontal gradient.
   *
   * __Default value:__ `16`.
   */
  gradientThickness?: number;
  /**
   * Max legend length for a vertical gradient when `config.legend.gradientLength` is
   * undefined.
   *
   * __Default value:__ `200`
   */
  gradientVerticalMaxLength?: number;
  /**
   * Min legend length for a vertical gradient when `config.legend.gradientLength` is
   * undefined.
   *
   * __Default value:__ `100`
   */
  gradientVerticalMinLength?: number;
  /**
   * The alignment to apply to symbol legends rows and columns. The supported string values
   * are `"all"`, `"each"` (the default), and `none`. For more information, see the [grid
   * layout documentation](https://vega.github.io/vega/docs/layout).
   *
   * __Default value:__ `"each"`.
   */
  gridAlign?: LayoutAlign;
  /**
   * The alignment of the legend label, can be left, center, or right.
   */
  labelAlign?: Align;
  /**
   * The position of the baseline of legend label, can be `"top"`, `"middle"`, `"bottom"`, or
   * `"alphabetic"`.
   *
   * __Default value:__ `"middle"`.
   */
  labelBaseline?: TextBaseline;
  /**
   * The color of the legend label, can be in hex color code or regular color name.
   */
  labelColor?: string;
  /**
   * The font of the legend label.
   */
  labelFont?: string;
  /**
   * The font size of legend label.
   *
   * __Default value:__ `10`.
   */
  labelFontSize?: number;
  /**
   * The font style of legend label.
   */
  labelFontStyle?: string;
  /**
   * The font weight of legend label.
   */
  labelFontWeight?: number | FontWeightEnum;
  /**
   * Maximum allowed pixel width of axis tick labels.
   *
   * __Default value:__ `160`.
   */
  labelLimit?: number;
  /**
   * The offset of the legend label.
   */
  labelOffset?: number;
  /**
   * Opacity of labels.
   */
  labelOpacity?: number;
  /**
   * The strategy to use for resolving overlap of labels in gradient legends. If `false`, no
   * overlap reduction is attempted. If set to `true` or `"parity"`, a strategy of removing
   * every other label is used. If set to `"greedy"`, a linear scan of the labels is
   * performed, removing any label that overlaps with the last visible label (this often works
   * better for log-scaled axes).
   *
   * __Default value:__ `"greedy"` for `log scales otherwise `true`.
   * *
   */
  labelOverlap?: boolean | LabelOverlapEnum;
  /**
   * Padding in pixels between the legend and legend labels.
   */
  labelPadding?: number;
  /**
   * The minimum separation that must be between label bounding boxes for them to be
   * considered non-overlapping (default `0`). This property is ignored if *labelOverlap*
   * resolution is not enabled.
   */
  labelSeparation?: number;
  /**
   * Legend orient group layout parameters.
   */
  layout?: LegendLayout;
  /**
   * Custom x-position for legend with orient "none".
   */
  legendX?: number;
  /**
   * Custom y-position for legend with orient "none".
   */
  legendY?: number;
  /**
   * The offset in pixels by which to displace the legend from the data rectangle and axes.
   *
   * __Default value:__ `18`.
   */
  offset?: number;
  /**
   * The orientation of the legend, which determines how the legend is positioned within the
   * scene. One of "left", "right", "top-left", "top-right", "bottom-left", "bottom-right",
   * "none".
   *
   * __Default value:__ `"right"`
   */
  orient?: LegendOrient;
  /**
   * The padding between the border and content of the legend group.
   *
   * __Default value:__ `0`.
   */
  padding?: number;
  /**
   * The vertical padding in pixels between symbol legend entries.
   *
   * __Default value:__ `2`.
   */
  rowPadding?: number;
  /**
   * Whether month names and weekday names should be abbreviated.
   *
   * __Default value:__  `false`
   */
  shortTimeLabels?: boolean;
  /**
   * Border stroke color for the full legend.
   */
  strokeColor?: string;
  /**
   * Border stroke dash pattern for the full legend.
   */
  strokeDash?: number[];
  /**
   * Border stroke width for the full legend.
   */
  strokeWidth?: number;
  /**
   * Default fill color for legend symbols. Only applied if there is no `"fill"` scale color
   * encoding for the legend.
   *
   * __Default value:__ `"transparent"`.
   */
  symbolBaseFillColor?: string;
  /**
   * Default stroke color for legend symbols. Only applied if there is no `"fill"` scale color
   * encoding for the legend.
   *
   * __Default value:__ `"gray"`.
   */
  symbolBaseStrokeColor?: string;
  /**
   * An array of alternating [stroke, space] lengths for dashed symbol strokes.
   */
  symbolDash?: number[];
  /**
   * The pixel offset at which to start drawing with the symbol stroke dash array.
   */
  symbolDashOffset?: number;
  /**
   * The default direction (`"horizontal"` or `"vertical"`) for symbol legends.
   *
   * __Default value:__ `"vertical"`.
   */
  symbolDirection?: Orientation;
  /**
   * The color of the legend symbol,
   */
  symbolFillColor?: string;
  /**
   * Horizontal pixel offset for legend symbols.
   *
   * __Default value:__ `0`.
   */
  symbolOffset?: number;
  /**
   * Opacity of the legend symbols.
   */
  symbolOpacity?: number;
  /**
   * The size of the legend symbol, in pixels.
   *
   * __Default value:__ `100`.
   */
  symbolSize?: number;
  /**
   * Stroke color for legend symbols.
   */
  symbolStrokeColor?: string;
  /**
   * The width of the symbol's stroke.
   *
   * __Default value:__ `1.5`.
   */
  symbolStrokeWidth?: number;
  /**
   * Default shape type (such as "circle") for legend symbols.
   * Can be one of ``"circle"`, `"square"`, `"cross"`, `"diamond"`, `"triangle-up"`,
   * `"triangle-down"`, `"triangle-right"`, or `"triangle-left"`.
   * * In addition to a set of built-in shapes, custom shapes can be defined using [SVG path
   * strings](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths).
   * *
   * * __Default value:__ `"circle"`.
   * *
   */
  symbolType?: string;
  /**
   * Set to null to disable title for the axis, legend, or header.
   */
  title?: null;
  /**
   * Horizontal text alignment for legend titles.
   *
   * __Default value:__ `"left"`.
   */
  titleAlign?: Align;
  /**
   * Text anchor position for placing legend titles.
   */
  titleAnchor?: TitleAnchor | null;
  /**
   * Vertical text baseline for legend titles.
   *
   * __Default value:__ `"top"`.
   */
  titleBaseline?: TextBaseline;
  /**
   * The color of the legend title, can be in hex color code or regular color name.
   */
  titleColor?: string;
  /**
   * The font of the legend title.
   */
  titleFont?: string;
  /**
   * The font size of the legend title.
   */
  titleFontSize?: number;
  /**
   * The font style of the legend title.
   */
  titleFontStyle?: string;
  /**
   * The font weight of the legend title.
   * This can be either a string (e.g `"bold"`, `"normal"`) or a number (`100`, `200`, `300`,
   * ..., `900` where `"normal"` = `400` and `"bold"` = `700`).
   */
  titleFontWeight?: number | FontWeightEnum;
  /**
   * Maximum allowed pixel width of axis titles.
   *
   * __Default value:__ `180`.
   */
  titleLimit?: number;
  /**
   * Opacity of the legend title.
   */
  titleOpacity?: number;
  /**
   * Orientation of the legend title.
   */
  titleOrient?: Orient;
  /**
   * The padding, in pixels, between title and legend.
   *
   * __Default value:__ `5`.
   */
  titlePadding?: number;
}

/**
 * Legend orient group layout parameters.
 */
export interface LegendLayout {
  /**
   * The anchor point for legend orient group layout.
   */
  anchor?: TitleAnchor | null;
  bottom?: BaseLegendLayout;
  'bottom-left'?: BaseLegendLayout;
  'bottom-right'?: BaseLegendLayout;
  /**
   * The bounds calculation to use for legend orient group layout.
   */
  bounds?: SignalRef | BoundsEnum;
  /**
   * A flag to center legends within a shared orient group.
   */
  center?: boolean | SignalRef;
  /**
   * The layout direction for legend orient group layout.
   */
  direction?: SignalRef | Orientation;
  left?: BaseLegendLayout;
  /**
   * The pixel margin between legends within a orient group.
   */
  margin?: SignalRef | number;
  /**
   * The pixel offset from the chart body for a legend orient group.
   */
  offset?: SignalRef | number;
  right?: BaseLegendLayout;
  top?: BaseLegendLayout;
  'top-left'?: BaseLegendLayout;
  'top-right'?: BaseLegendLayout;
}

export interface BaseLegendLayout {
  /**
   * The anchor point for legend orient group layout.
   */
  anchor?: TitleAnchor | null;
  /**
   * The bounds calculation to use for legend orient group layout.
   */
  bounds?: SignalRef | BoundsEnum;
  /**
   * A flag to center legends within a shared orient group.
   */
  center?: boolean | SignalRef;
  /**
   * The layout direction for legend orient group layout.
   */
  direction?: SignalRef | Orientation;
  /**
   * The pixel margin between legends within a orient group.
   */
  margin?: SignalRef | number;
  /**
   * The pixel offset from the chart body for a legend orient group.
   */
  offset?: SignalRef | number;
}

export interface SignalRef {
  signal: string;
}

/**
 * Line-Specific Config
 *
 * Trail-Specific Config
 */
export interface LineConfig {
  /**
   * The horizontal alignment of the text. One of `"left"`, `"right"`, `"center"`.
   */
  align?: Align;
  /**
   * The rotation angle of the text, in degrees.
   */
  angle?: number;
  /**
   * The vertical alignment of the text. One of `"top"`, `"middle"`, `"bottom"`.
   *
   * __Default value:__ `"middle"`
   */
  baseline?: TextBaseline;
  /**
   * Default color.  Note that `fill` and `stroke` have higher precedence than `color` and
   * will override `color`.
   *
   * __Default value:__ <span style="color: #4682b4;">&#9632;</span> `"#4682b4"`
   *
   * __Note:__ This property cannot be used in a [style
   * config](https://vega.github.io/vega-lite/docs/mark.html#style-config).
   */
  color?: string;
  /**
   * The radius in pixels of rounded rectangle corners.
   *
   * __Default value:__ `0`
   */
  cornerRadius?: number;
  /**
   * The mouse cursor used over the mark. Any valid [CSS cursor
   * type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used.
   */
  cursor?: Cursor;
  /**
   * The direction of the text. One of `"ltr"` (left-to-right) or `"rtl"` (right-to-left).
   * This property determines on which side is truncated in response to the limit parameter.
   *
   * __Default value:__ `"ltr"`
   */
  dir?: Dir;
  /**
   * The horizontal offset, in pixels, between the text label and its anchor point. The offset
   * is applied after rotation by the _angle_ property.
   */
  dx?: number;
  /**
   * The vertical offset, in pixels, between the text label and its anchor point. The offset
   * is applied after rotation by the _angle_ property.
   */
  dy?: number;
  /**
   * The ellipsis string for text truncated in response to the limit parameter.
   *
   * __Default value:__ `"…"`
   */
  ellipsis?: string;
  /**
   * Default Fill Color.  This has higher precedence than `config.color`
   *
   * __Default value:__ (None)
   */
  fill?: string;
  /**
   * Whether the mark's color should be used as fill color instead of stroke color.
   *
   * __Default value:__ `false` for `point`, `line` and `rule`; otherwise, `true`.
   *
   * __Note:__ This property cannot be used in a [style
   * config](https://vega.github.io/vega-lite/docs/mark.html#style-config).
   */
  filled?: boolean;
  /**
   * The fill opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  fillOpacity?: number;
  /**
   * The typeface to set the text in (e.g., `"Helvetica Neue"`).
   */
  font?: string;
  /**
   * The font size, in pixels.
   */
  fontSize?: number;
  /**
   * The font style (e.g., `"italic"`).
   */
  fontStyle?: string;
  /**
   * The font weight.
   * This can be either a string (e.g `"bold"`, `"normal"`) or a number (`100`, `200`, `300`,
   * ..., `900` where `"normal"` = `400` and `"bold"` = `700`).
   */
  fontWeight?: number | FontWeightEnum;
  /**
   * A URL to load upon mouse click. If defined, the mark acts as a hyperlink.
   */
  href?: string;
  /**
   * The line interpolation method to use for line and area marks. One of the following:
   * - `"linear"`: piecewise linear segments, as in a polyline.
   * - `"linear-closed"`: close the linear segments to form a polygon.
   * - `"step"`: alternate between horizontal and vertical segments, as in a step function.
   * - `"step-before"`: alternate between vertical and horizontal segments, as in a step
   * function.
   * - `"step-after"`: alternate between horizontal and vertical segments, as in a step
   * function.
   * - `"basis"`: a B-spline, with control point duplication on the ends.
   * - `"basis-open"`: an open B-spline; may not intersect the start or end.
   * - `"basis-closed"`: a closed B-spline, as in a loop.
   * - `"cardinal"`: a Cardinal spline, with control point duplication on the ends.
   * - `"cardinal-open"`: an open Cardinal spline; may not intersect the start or end, but
   * will intersect other control points.
   * - `"cardinal-closed"`: a closed Cardinal spline, as in a loop.
   * - `"bundle"`: equivalent to basis, except the tension parameter is used to straighten the
   * spline.
   * - `"monotone"`: cubic interpolation that preserves monotonicity in y.
   */
  interpolate?: Interpolate;
  /**
   * The maximum length of the text mark in pixels. The text value will be automatically
   * truncated if the rendered size exceeds the limit.
   *
   * __Default value:__ `0`, indicating no limit
   */
  limit?: number;
  /**
   * The overall opacity (value between [0,1]).
   *
   * __Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or
   * `square` marks or layered `bar` charts and `1` otherwise.
   */
  opacity?: number;
  /**
   * For line and trail marks, this `order` property can be set to `null` or `false` to make
   * the lines use the original order in the data sources.
   */
  order?: boolean | null;
  /**
   * The orientation of a non-stacked bar, tick, area, and line charts.
   * The value is either horizontal (default) or vertical.
   * - For bar, rule and tick, this determines whether the size of the bar and tick
   * should be applied to x or y dimension.
   * - For area, this property determines the orient property of the Vega output.
   * - For line and trail marks, this property determines the sort order of the points in the
   * line
   * if `config.sortLineBy` is not specified.
   * For stacked charts, this is always determined by the orientation of the stack;
   * therefore explicitly specified value will be ignored.
   */
  orient?: Orientation;
  /**
   * A flag for overlaying points on top of line or area marks, or an object defining the
   * properties of the overlayed points.
   *
   * - If this property is `"transparent"`, transparent points will be used (for enhancing
   * tooltips and selections).
   *
   * - If this property is an empty object (`{}`) or `true`, filled points with default
   * properties will be used.
   *
   * - If this property is `false`, no points would be automatically added to line or area
   * marks.
   *
   * __Default value:__ `false`.
   */
  point?: boolean | OverlayMarkDef | PointEnum;
  /**
   * Polar coordinate radial offset, in pixels, of the text label from the origin determined
   * by the `x` and `y` properties.
   */
  radius?: number;
  /**
   * Shape of the point marks. Supported values include:
   * - plotting shapes: `"circle"`, `"square"`, `"cross"`, `"diamond"`, `"triangle-up"`,
   * `"triangle-down"`, `"triangle-right"`, or `"triangle-left"`.
   * - the line symbol `"stroke"`
   * - centered directional shapes `"arrow"`, `"wedge"`, or `"triangle"`
   * - a custom [SVG path
   * string](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) (For correct
   * sizing, custom shape paths should be defined within a square bounding box with
   * coordinates ranging from -1 to 1 along both the x and y dimensions.)
   *
   * __Default value:__ `"circle"`
   */
  shape?: string;
  /**
   * Default size for marks.
   * - For `point`/`circle`/`square`, this represents the pixel area of the marks. For
   * example: in the case of circles, the radius is determined in part by the square root of
   * the size value.
   * - For `bar`, this represents the band size of the bar, in pixels.
   * - For `text`, this represents the font size, in pixels.
   *
   * __Default value:__ `30` for point, circle, square marks; `rangeStep` - 1 for bar marks
   * with discrete dimensions; `5` for bar marks with continuous dimensions; `11` for text
   * marks.
   */
  size?: number;
  /**
   * Default Stroke Color.  This has higher precedence than `config.color`
   *
   * __Default value:__ (None)
   */
  stroke?: string;
  /**
   * The stroke cap for line ending style. One of `"butt"`, `"round"`, or `"square"`.
   *
   * __Default value:__ `"square"`
   */
  strokeCap?: StrokeCap;
  /**
   * An array of alternating stroke, space lengths for creating dashed or dotted lines.
   */
  strokeDash?: number[];
  /**
   * The offset (in pixels) into which to begin drawing with the stroke dash array.
   */
  strokeDashOffset?: number;
  /**
   * The stroke line join method. One of `"miter"`, `"round"` or `"bevel"`.
   *
   * __Default value:__ `"miter"`
   */
  strokeJoin?: StrokeJoin;
  /**
   * The miter limit at which to bevel a line join.
   */
  strokeMiterLimit?: number;
  /**
   * The stroke opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  strokeOpacity?: number;
  /**
   * The stroke width, in pixels.
   */
  strokeWidth?: number;
  /**
   * Depending on the interpolation type, sets the tension parameter (for line and area marks).
   */
  tension?: number;
  /**
   * Placeholder text if the `text` channel is not specified
   */
  text?: string;
  /**
   * Polar coordinate angle, in radians, of the text label from the origin determined by the
   * `x` and `y` properties. Values for `theta` follow the same convention of `arc` mark
   * `startAngle` and `endAngle` properties: angles are measured in radians, with `0`
   * indicating "north".
   */
  theta?: number;
  /**
   * The tooltip text string to show upon mouse hover or an object defining which fields
   * should the tooltip be derived from.
   *
   * - If `tooltip` is `{"content": "encoding"}`, then all fields from `encoding` will be
   * used.
   * - If `tooltip` is `{"content": "data"}`, then all fields that appear in the highlighted
   * data point will be used.
   * - If set to `null`, then no tooltip will be used.
   */
  tooltip?: TooltipContent | null | string;
  /**
   * X coordinates of the marks, or width of horizontal `"bar"` and `"area"` without `x2`.
   */
  x?: number;
  /**
   * X2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   */
  x2?: number;
  /**
   * Y coordinates of the marks, or height of vertical `"bar"` and `"area"` without `y2`
   */
  y?: number;
  /**
   * Y2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   */
  y2?: number;
}

export interface PaddingClass {
  bottom?: number;
  left?: number;
  right?: number;
  top?: number;
}

/**
 * An object hash that defines default range arrays or schemes for using with scales.
 * For a full list of scale range configuration options, please see the [corresponding
 * section of the scale
 * documentation](https://vega.github.io/vega-lite/docs/scale.html#config).
 */
export interface RangeConfig {
  /**
   * Default range for _nominal_ (categorical) fields.
   */
  category?: string[] | CategorySchemeConfig;
  /**
   * Default range for diverging _quantitative_ fields.
   */
  diverging?: string[] | CategorySchemeConfig;
  /**
   * Default range for _quantitative_ heatmaps.
   */
  heatmap?: string[] | CategorySchemeConfig;
  /**
   * Default range for _ordinal_ fields.
   */
  ordinal?: string[] | CategorySchemeConfig;
  /**
   * Default range for _quantitative_ and _temporal_ fields.
   */
  ramp?: string[] | CategorySchemeConfig;
  /**
   * Default range palette for the `shape` channel.
   */
  symbol?: string[];
}

export interface CategorySchemeConfig {
  count?: number;
  extent?: number[];
  scheme: string;
}

export interface RangeConfigValueSchemeConfig {
  count?: number;
  extent?: number[];
  scheme?: string;
  step?: number;
}

/**
 * Scale configuration determines default properties for all
 * [scales](https://vega.github.io/vega-lite/docs/scale.html). For a full list of scale
 * configuration options, please see the [corresponding section of the scale
 * documentation](https://vega.github.io/vega-lite/docs/scale.html#config).
 */
export interface ScaleConfig {
  /**
   * Default inner padding for `x` and `y` band-ordinal scales.
   *
   * __Default value:__
   * - `barBandPaddingInner` for bar marks (`0.1` by default)
   * - `rectBandPaddingInner` for rect and other marks (`0` by default)
   */
  bandPaddingInner?: number;
  /**
   * Default outer padding for `x` and `y` band-ordinal scales.
   *
   * If not specified, by default, band scale's paddingOuter is paddingInner/2.
   */
  bandPaddingOuter?: number;
  /**
   * Default inner padding for `x` and `y` band-ordinal scales of `"bar"` marks.
   *
   * __Default value:__ `0.1`
   */
  barBandPaddingInner?: number;
  /**
   * Default outer padding for `x` and `y` band-ordinal scales of `"bar"` marks.
   * If not specified, by default, band scale's paddingOuter is paddingInner/2.
   */
  barBandPaddingOuter?: number;
  /**
   * If true, values that exceed the data domain are clamped to either the minimum or maximum
   * range value
   */
  clamp?: boolean;
  /**
   * Default padding for continuous scales.
   *
   * __Default:__ `5` for continuous x-scale of a vertical bar and continuous y-scale of a
   * horizontal bar.; `0` otherwise.
   */
  continuousPadding?: number;
  /**
   * The default max value for mapping quantitative fields to bar's size/bandSize.
   *
   * If undefined (default), we will use the scale's `rangeStep` - 1.
   */
  maxBandSize?: number;
  /**
   * The default max value for mapping quantitative fields to text's size/fontSize.
   *
   * __Default value:__ `40`
   */
  maxFontSize?: number;
  /**
   * Default max opacity for mapping a field to opacity.
   *
   * __Default value:__ `0.8`
   */
  maxOpacity?: number;
  /**
   * Default max value for point size scale.
   */
  maxSize?: number;
  /**
   * Default max strokeWidth for the scale of strokeWidth for rule and line marks and of size
   * for trail marks.
   *
   * __Default value:__ `4`
   */
  maxStrokeWidth?: number;
  /**
   * The default min value for mapping quantitative fields to bar and tick's size/bandSize
   * scale with zero=false.
   *
   * __Default value:__ `2`
   */
  minBandSize?: number;
  /**
   * The default min value for mapping quantitative fields to tick's size/fontSize scale with
   * zero=false
   *
   * __Default value:__ `8`
   */
  minFontSize?: number;
  /**
   * Default minimum opacity for mapping a field to opacity.
   *
   * __Default value:__ `0.3`
   */
  minOpacity?: number;
  /**
   * Default minimum value for point size scale with zero=false.
   *
   * __Default value:__ `9`
   */
  minSize?: number;
  /**
   * Default minimum strokeWidth for the scale of strokeWidth for rule and line marks and of
   * size for trail marks with zero=false.
   *
   * __Default value:__ `1`
   */
  minStrokeWidth?: number;
  /**
   * Default outer padding for `x` and `y` point-ordinal scales.
   *
   * __Default value:__ `0.5`
   */
  pointPadding?: number;
  /**
   * Default range cardinality for
   * [`quantile`](https://vega.github.io/vega-lite/docs/scale.html#quantile) scale.
   *
   * __Default value:__ `4`
   */
  quantileCount?: number;
  /**
   * Default range cardinality for
   * [`quantize`](https://vega.github.io/vega-lite/docs/scale.html#quantize) scale.
   *
   * __Default value:__ `4`
   */
  quantizeCount?: number;
  /**
   * Default range step for band and point scales of (1) the `y` channel
   * and (2) the `x` channel when the mark is not `text`.
   *
   * __Default value:__ `20`
   */
  rangeStep?: number | null;
  /**
   * Default inner padding for `x` and `y` band-ordinal scales of `"rect"` marks.
   *
   * __Default value:__ `0`
   */
  rectBandPaddingInner?: number;
  /**
   * Default outer padding for `x` and `y` band-ordinal scales of `"rect"` marks.
   * If not specified, by default, band scale's paddingOuter is paddingInner/2.
   */
  rectBandPaddingOuter?: number;
  /**
   * If true, rounds numeric output values to integers.
   * This can be helpful for snapping to the pixel grid.
   * (Only available for `x`, `y`, and `size` scales.)
   */
  round?: boolean;
  /**
   * Default range step for `x` band and point scales of text marks.
   *
   * __Default value:__ `90`
   */
  textXRangeStep?: number;
  /**
   * Use the source data range before aggregation as scale domain instead of aggregated data
   * for aggregate axis.
   *
   * This is equivalent to setting `domain` to `"unaggregate"` for aggregated _quantitative_
   * fields by default.
   *
   * This property only works with aggregate functions that produce values within the raw data
   * domain (`"mean"`, `"average"`, `"median"`, `"q1"`, `"q3"`, `"min"`, `"max"`). For other
   * aggregations that produce values outside of the raw data domain (e.g. `"count"`,
   * `"sum"`), this property is ignored.
   *
   * __Default value:__ `false`
   */
  useUnaggregatedDomain?: boolean;
}

/**
 * An object hash for defining default properties for each type of selections.
 */
export interface SelectionConfig {
  /**
   * The default definition for an
   * [`interval`](https://vega.github.io/vega-lite/docs/selection.html#type) selection. All
   * properties and transformations
   * for an interval selection definition (except `type`) may be specified here.
   *
   * For instance, setting `interval` to `{"translate": false}` disables the ability to move
   * interval selections by default.
   */
  interval?: IntervalSelectionConfig;
  /**
   * The default definition for a
   * [`multi`](https://vega.github.io/vega-lite/docs/selection.html#type) selection. All
   * properties and transformations
   * for a multi selection definition (except `type`) may be specified here.
   *
   * For instance, setting `multi` to `{"toggle": "event.altKey"}` adds additional values to
   * multi selections when clicking with the alt-key pressed by default.
   */
  multi?: MultiSelectionConfig;
  /**
   * The default definition for a
   * [`single`](https://vega.github.io/vega-lite/docs/selection.html#type) selection. All
   * properties and transformations
   * for a single selection definition (except `type`) may be specified here.
   *
   * For instance, setting `single` to `{"on": "dblclick"}` populates single selections on
   * double-click by default.
   */
  single?: SingleSelectionConfig;
}

/**
 * The default definition for an
 * [`interval`](https://vega.github.io/vega-lite/docs/selection.html#type) selection. All
 * properties and transformations
 * for an interval selection definition (except `type`) may be specified here.
 *
 * For instance, setting `interval` to `{"translate": false}` disables the ability to move
 * interval selections by default.
 */
export interface IntervalSelectionConfig {
  /**
   * Establishes a two-way binding between the interval selection and the scales
   * used within the same view. This allows a user to interactively pan and
   * zoom the view.
   */
  bind?: BindEnum;
  /**
   * Clears the selection, emptying it of all values. Can be an
   * [EventStream](https://vega.github.io/vega/docs/event-streams/) or `false` to disable.
   *
   * __Default value:__ `dblclick`.
   *
   * See the [clear](https://vega.github.io/vega-lite/docs/clear.html) documentation for more
   * information.
   */
  clear?: any;
  /**
   * By default, `all` data values are considered to lie within an empty selection.
   * When set to `none`, empty selections contain no data values.
   */
  empty?: Empty;
  /**
   * An array of encoding channels. The corresponding data field values
   * must match for a data tuple to fall within the selection.
   */
  encodings?: SingleDefUnitChannel[];
  /**
   * An array of field names whose values must match for a data tuple to
   * fall within the selection.
   */
  fields?: string[];
  /**
   * Initialize the selection with a mapping between [projected channels or field
   * names](https://vega.github.io/vega-lite/docs/project.html) and arrays of
   * initial values.
   */
  init?: {[key: string]: Array<boolean | DateTime | number | string>};
  /**
   * An interval selection also adds a rectangle mark to depict the
   * extents of the interval. The `mark` property can be used to customize the
   * appearance of the mark.
   */
  mark?: BrushConfig;
  /**
   * A [Vega event stream](https://vega.github.io/vega/docs/event-streams/) (object or
   * selector) that triggers the selection.
   * For interval selections, the event stream must specify a [start and
   * end](https://vega.github.io/vega/docs/event-streams/#between-filters).
   */
  on?: any;
  /**
   * With layered and multi-view displays, a strategy that determines how
   * selections' data queries are resolved when applied in a filter transform,
   * conditional encoding rule, or scale domain.
   */
  resolve?: SelectionResolution;
  /**
   * When truthy, allows a user to interactively move an interval selection
   * back-and-forth. Can be `true`, `false` (to disable panning), or a
   * [Vega event stream definition](https://vega.github.io/vega/docs/event-streams/)
   * which must include a start and end event to trigger continuous panning.
   *
   * __Default value:__ `true`, which corresponds to
   * `[mousedown, window:mouseup] > window:mousemove!` which corresponds to
   * clicks and dragging within an interval selection to reposition it.
   */
  translate?: boolean | string;
  /**
   * When truthy, allows a user to interactively resize an interval selection.
   * Can be `true`, `false` (to disable zooming), or a [Vega event stream
   * definition](https://vega.github.io/vega/docs/event-streams/). Currently,
   * only `wheel` events are supported.
   *
   *
   * __Default value:__ `true`, which corresponds to `wheel!`.
   */
  zoom?: boolean | string;
}

/**
 * The default definition for a
 * [`multi`](https://vega.github.io/vega-lite/docs/selection.html#type) selection. All
 * properties and transformations
 * for a multi selection definition (except `type`) may be specified here.
 *
 * For instance, setting `multi` to `{"toggle": "event.altKey"}` adds additional values to
 * multi selections when clicking with the alt-key pressed by default.
 */
export interface MultiSelectionConfig {
  /**
   * Clears the selection, emptying it of all values. Can be an
   * [EventStream](https://vega.github.io/vega/docs/event-streams/) or `false` to disable.
   *
   * __Default value:__ `dblclick`.
   *
   * See the [clear](https://vega.github.io/vega-lite/docs/clear.html) documentation for more
   * information.
   */
  clear?: any;
  /**
   * By default, `all` data values are considered to lie within an empty selection.
   * When set to `none`, empty selections contain no data values.
   */
  empty?: Empty;
  /**
   * An array of encoding channels. The corresponding data field values
   * must match for a data tuple to fall within the selection.
   */
  encodings?: SingleDefUnitChannel[];
  /**
   * An array of field names whose values must match for a data tuple to
   * fall within the selection.
   */
  fields?: string[];
  /**
   * Initialize the selection with a mapping between [projected channels or field
   * names](https://vega.github.io/vega-lite/docs/project.html) and an initial
   * value (or array of values).
   */
  init?:
    | Array<{[key: string]: boolean | DateTime | number | string}>
    | {[key: string]: boolean | DateTime | number | string};
  /**
   * When true, an invisible voronoi diagram is computed to accelerate discrete
   * selection. The data value _nearest_ the mouse cursor is added to the selection.
   *
   * See the [nearest transform](https://vega.github.io/vega-lite/docs/nearest.html)
   * documentation for more information.
   */
  nearest?: boolean;
  /**
   * A [Vega event stream](https://vega.github.io/vega/docs/event-streams/) (object or
   * selector) that triggers the selection.
   * For interval selections, the event stream must specify a [start and
   * end](https://vega.github.io/vega/docs/event-streams/#between-filters).
   */
  on?: any;
  /**
   * With layered and multi-view displays, a strategy that determines how
   * selections' data queries are resolved when applied in a filter transform,
   * conditional encoding rule, or scale domain.
   */
  resolve?: SelectionResolution;
  /**
   * Controls whether data values should be toggled or only ever inserted into
   * multi selections. Can be `true`, `false` (for insertion only), or a
   * [Vega expression](https://vega.github.io/vega/docs/expressions/).
   *
   * __Default value:__ `true`, which corresponds to `event.shiftKey` (i.e.,
   * data values are toggled when a user interacts with the shift-key pressed).
   *
   * See the [toggle transform](https://vega.github.io/vega-lite/docs/toggle.html)
   * documentation for more information.
   */
  toggle?: boolean | string;
}

/**
 * The default definition for a
 * [`single`](https://vega.github.io/vega-lite/docs/selection.html#type) selection. All
 * properties and transformations
 * for a single selection definition (except `type`) may be specified here.
 *
 * For instance, setting `single` to `{"on": "dblclick"}` populates single selections on
 * double-click by default.
 */
export interface SingleSelectionConfig {
  /**
   * Establish a two-way binding between a single selection and input elements
   * (also known as dynamic query widgets). A binding takes the form of
   * Vega's [input element binding definition](https://vega.github.io/vega/docs/signals/#bind)
   * or can be a mapping between projected field/encodings and binding definitions.
   *
   * See the [bind transform](https://vega.github.io/vega-lite/docs/bind.html) documentation
   * for more information.
   */
  bind?: SingleBind;
  /**
   * Clears the selection, emptying it of all values. Can be an
   * [EventStream](https://vega.github.io/vega/docs/event-streams/) or `false` to disable.
   *
   * __Default value:__ `dblclick`.
   *
   * See the [clear](https://vega.github.io/vega-lite/docs/clear.html) documentation for more
   * information.
   */
  clear?: any;
  /**
   * By default, `all` data values are considered to lie within an empty selection.
   * When set to `none`, empty selections contain no data values.
   */
  empty?: Empty;
  /**
   * An array of encoding channels. The corresponding data field values
   * must match for a data tuple to fall within the selection.
   */
  encodings?: SingleDefUnitChannel[];
  /**
   * An array of field names whose values must match for a data tuple to
   * fall within the selection.
   */
  fields?: string[];
  /**
   * Initialize the selection with a mapping between [projected channels or field
   * names](https://vega.github.io/vega-lite/docs/project.html) and initial values.
   */
  init?: {[key: string]: boolean | DateTime | number | string};
  /**
   * When true, an invisible voronoi diagram is computed to accelerate discrete
   * selection. The data value _nearest_ the mouse cursor is added to the selection.
   *
   * See the [nearest transform](https://vega.github.io/vega-lite/docs/nearest.html)
   * documentation for more information.
   */
  nearest?: boolean;
  /**
   * A [Vega event stream](https://vega.github.io/vega/docs/event-streams/) (object or
   * selector) that triggers the selection.
   * For interval selections, the event stream must specify a [start and
   * end](https://vega.github.io/vega/docs/event-streams/#between-filters).
   */
  on?: any;
  /**
   * With layered and multi-view displays, a strategy that determines how
   * selections' data queries are resolved when applied in a filter transform,
   * conditional encoding rule, or scale domain.
   */
  resolve?: SelectionResolution;
}

/**
 * Establish a two-way binding between a single selection and input elements
 * (also known as dynamic query widgets). A binding takes the form of
 * Vega's [input element binding definition](https://vega.github.io/vega/docs/signals/#bind)
 * or can be a mapping between projected field/encodings and binding definitions.
 *
 * See the [bind transform](https://vega.github.io/vega-lite/docs/bind.html) documentation
 * for more information.
 */
export interface SingleBind {
  debounce?: Binding | number;
  element?: Binding | string;
  input?: Binding | string;
  name?: Binding | string;
  type?: Binding | string;
  options?: any[] | Binding;
  max?: Binding | number;
  min?: Binding | number;
  step?: Binding | number;
  autocomplete?: Binding | string;
  placeholder?: Binding | string;
}

export interface BaseMarkConfig {
  /**
   * The horizontal alignment of the text. One of `"left"`, `"right"`, `"center"`.
   */
  align?: Align;
  /**
   * The rotation angle of the text, in degrees.
   */
  angle?: number;
  /**
   * The vertical alignment of the text. One of `"top"`, `"middle"`, `"bottom"`.
   *
   * __Default value:__ `"middle"`
   */
  baseline?: TextBaseline;
  /**
   * The radius in pixels of rounded rectangle corners.
   *
   * __Default value:__ `0`
   */
  cornerRadius?: number;
  /**
   * The mouse cursor used over the mark. Any valid [CSS cursor
   * type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used.
   */
  cursor?: Cursor;
  /**
   * The direction of the text. One of `"ltr"` (left-to-right) or `"rtl"` (right-to-left).
   * This property determines on which side is truncated in response to the limit parameter.
   *
   * __Default value:__ `"ltr"`
   */
  dir?: Dir;
  /**
   * The horizontal offset, in pixels, between the text label and its anchor point. The offset
   * is applied after rotation by the _angle_ property.
   */
  dx?: number;
  /**
   * The vertical offset, in pixels, between the text label and its anchor point. The offset
   * is applied after rotation by the _angle_ property.
   */
  dy?: number;
  /**
   * The ellipsis string for text truncated in response to the limit parameter.
   *
   * __Default value:__ `"…"`
   */
  ellipsis?: string;
  /**
   * Default Fill Color.  This has higher precedence than `config.color`
   *
   * __Default value:__ (None)
   */
  fill?: string;
  /**
   * The fill opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  fillOpacity?: number;
  /**
   * The typeface to set the text in (e.g., `"Helvetica Neue"`).
   */
  font?: string;
  /**
   * The font size, in pixels.
   */
  fontSize?: number;
  /**
   * The font style (e.g., `"italic"`).
   */
  fontStyle?: string;
  /**
   * The font weight.
   * This can be either a string (e.g `"bold"`, `"normal"`) or a number (`100`, `200`, `300`,
   * ..., `900` where `"normal"` = `400` and `"bold"` = `700`).
   */
  fontWeight?: number | FontWeightEnum;
  /**
   * A URL to load upon mouse click. If defined, the mark acts as a hyperlink.
   */
  href?: string;
  /**
   * The line interpolation method to use for line and area marks. One of the following:
   * - `"linear"`: piecewise linear segments, as in a polyline.
   * - `"linear-closed"`: close the linear segments to form a polygon.
   * - `"step"`: alternate between horizontal and vertical segments, as in a step function.
   * - `"step-before"`: alternate between vertical and horizontal segments, as in a step
   * function.
   * - `"step-after"`: alternate between horizontal and vertical segments, as in a step
   * function.
   * - `"basis"`: a B-spline, with control point duplication on the ends.
   * - `"basis-open"`: an open B-spline; may not intersect the start or end.
   * - `"basis-closed"`: a closed B-spline, as in a loop.
   * - `"cardinal"`: a Cardinal spline, with control point duplication on the ends.
   * - `"cardinal-open"`: an open Cardinal spline; may not intersect the start or end, but
   * will intersect other control points.
   * - `"cardinal-closed"`: a closed Cardinal spline, as in a loop.
   * - `"bundle"`: equivalent to basis, except the tension parameter is used to straighten the
   * spline.
   * - `"monotone"`: cubic interpolation that preserves monotonicity in y.
   */
  interpolate?: Interpolate;
  /**
   * The maximum length of the text mark in pixels. The text value will be automatically
   * truncated if the rendered size exceeds the limit.
   *
   * __Default value:__ `0`, indicating no limit
   */
  limit?: number;
  /**
   * The overall opacity (value between [0,1]).
   *
   * __Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or
   * `square` marks or layered `bar` charts and `1` otherwise.
   */
  opacity?: number;
  /**
   * The orientation of a non-stacked bar, tick, area, and line charts.
   * The value is either horizontal (default) or vertical.
   * - For bar, rule and tick, this determines whether the size of the bar and tick
   * should be applied to x or y dimension.
   * - For area, this property determines the orient property of the Vega output.
   * - For line and trail marks, this property determines the sort order of the points in the
   * line
   * if `config.sortLineBy` is not specified.
   * For stacked charts, this is always determined by the orientation of the stack;
   * therefore explicitly specified value will be ignored.
   */
  orient?: Orientation;
  /**
   * Polar coordinate radial offset, in pixels, of the text label from the origin determined
   * by the `x` and `y` properties.
   */
  radius?: number;
  /**
   * Shape of the point marks. Supported values include:
   * - plotting shapes: `"circle"`, `"square"`, `"cross"`, `"diamond"`, `"triangle-up"`,
   * `"triangle-down"`, `"triangle-right"`, or `"triangle-left"`.
   * - the line symbol `"stroke"`
   * - centered directional shapes `"arrow"`, `"wedge"`, or `"triangle"`
   * - a custom [SVG path
   * string](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) (For correct
   * sizing, custom shape paths should be defined within a square bounding box with
   * coordinates ranging from -1 to 1 along both the x and y dimensions.)
   *
   * __Default value:__ `"circle"`
   */
  shape?: string;
  /**
   * The pixel area each the point/circle/square.
   * For example: in the case of circles, the radius is determined in part by the square root
   * of the size value.
   *
   * __Default value:__ `30`
   */
  size?: number;
  /**
   * Default Stroke Color.  This has higher precedence than `config.color`
   *
   * __Default value:__ (None)
   */
  stroke?: string;
  /**
   * The stroke cap for line ending style. One of `"butt"`, `"round"`, or `"square"`.
   *
   * __Default value:__ `"square"`
   */
  strokeCap?: StrokeCap;
  /**
   * An array of alternating stroke, space lengths for creating dashed or dotted lines.
   */
  strokeDash?: number[];
  /**
   * The offset (in pixels) into which to begin drawing with the stroke dash array.
   */
  strokeDashOffset?: number;
  /**
   * The stroke line join method. One of `"miter"`, `"round"` or `"bevel"`.
   *
   * __Default value:__ `"miter"`
   */
  strokeJoin?: StrokeJoin;
  /**
   * The miter limit at which to bevel a line join.
   */
  strokeMiterLimit?: number;
  /**
   * The stroke opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  strokeOpacity?: number;
  /**
   * The stroke width, in pixels.
   */
  strokeWidth?: number;
  /**
   * Depending on the interpolation type, sets the tension parameter (for line and area marks).
   */
  tension?: number;
  /**
   * Placeholder text if the `text` channel is not specified
   */
  text?: string;
  /**
   * Polar coordinate angle, in radians, of the text label from the origin determined by the
   * `x` and `y` properties. Values for `theta` follow the same convention of `arc` mark
   * `startAngle` and `endAngle` properties: angles are measured in radians, with `0`
   * indicating "north".
   */
  theta?: number;
  /**
   * The tooltip text to show upon mouse hover.
   */
  tooltip?: any;
  /**
   * X coordinates of the marks, or width of horizontal `"bar"` and `"area"` without `x2`.
   */
  x?: number;
  /**
   * X2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   */
  x2?: number;
  /**
   * Y coordinates of the marks, or height of vertical `"bar"` and `"area"` without `y2`
   */
  y?: number;
  /**
   * Y2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   */
  y2?: number;
}

/**
 * Text-Specific Config
 */
export interface TextConfig {
  /**
   * The horizontal alignment of the text. One of `"left"`, `"right"`, `"center"`.
   */
  align?: Align;
  /**
   * The rotation angle of the text, in degrees.
   */
  angle?: number;
  /**
   * The vertical alignment of the text. One of `"top"`, `"middle"`, `"bottom"`.
   *
   * __Default value:__ `"middle"`
   */
  baseline?: TextBaseline;
  /**
   * Default color.  Note that `fill` and `stroke` have higher precedence than `color` and
   * will override `color`.
   *
   * __Default value:__ <span style="color: #4682b4;">&#9632;</span> `"#4682b4"`
   *
   * __Note:__ This property cannot be used in a [style
   * config](https://vega.github.io/vega-lite/docs/mark.html#style-config).
   */
  color?: string;
  /**
   * The radius in pixels of rounded rectangle corners.
   *
   * __Default value:__ `0`
   */
  cornerRadius?: number;
  /**
   * The mouse cursor used over the mark. Any valid [CSS cursor
   * type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used.
   */
  cursor?: Cursor;
  /**
   * The direction of the text. One of `"ltr"` (left-to-right) or `"rtl"` (right-to-left).
   * This property determines on which side is truncated in response to the limit parameter.
   *
   * __Default value:__ `"ltr"`
   */
  dir?: Dir;
  /**
   * The horizontal offset, in pixels, between the text label and its anchor point. The offset
   * is applied after rotation by the _angle_ property.
   */
  dx?: number;
  /**
   * The vertical offset, in pixels, between the text label and its anchor point. The offset
   * is applied after rotation by the _angle_ property.
   */
  dy?: number;
  /**
   * The ellipsis string for text truncated in response to the limit parameter.
   *
   * __Default value:__ `"…"`
   */
  ellipsis?: string;
  /**
   * Default Fill Color.  This has higher precedence than `config.color`
   *
   * __Default value:__ (None)
   */
  fill?: string;
  /**
   * Whether the mark's color should be used as fill color instead of stroke color.
   *
   * __Default value:__ `false` for `point`, `line` and `rule`; otherwise, `true`.
   *
   * __Note:__ This property cannot be used in a [style
   * config](https://vega.github.io/vega-lite/docs/mark.html#style-config).
   */
  filled?: boolean;
  /**
   * The fill opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  fillOpacity?: number;
  /**
   * The typeface to set the text in (e.g., `"Helvetica Neue"`).
   */
  font?: string;
  /**
   * The font size, in pixels.
   */
  fontSize?: number;
  /**
   * The font style (e.g., `"italic"`).
   */
  fontStyle?: string;
  /**
   * The font weight.
   * This can be either a string (e.g `"bold"`, `"normal"`) or a number (`100`, `200`, `300`,
   * ..., `900` where `"normal"` = `400` and `"bold"` = `700`).
   */
  fontWeight?: number | FontWeightEnum;
  /**
   * A URL to load upon mouse click. If defined, the mark acts as a hyperlink.
   */
  href?: string;
  /**
   * The line interpolation method to use for line and area marks. One of the following:
   * - `"linear"`: piecewise linear segments, as in a polyline.
   * - `"linear-closed"`: close the linear segments to form a polygon.
   * - `"step"`: alternate between horizontal and vertical segments, as in a step function.
   * - `"step-before"`: alternate between vertical and horizontal segments, as in a step
   * function.
   * - `"step-after"`: alternate between horizontal and vertical segments, as in a step
   * function.
   * - `"basis"`: a B-spline, with control point duplication on the ends.
   * - `"basis-open"`: an open B-spline; may not intersect the start or end.
   * - `"basis-closed"`: a closed B-spline, as in a loop.
   * - `"cardinal"`: a Cardinal spline, with control point duplication on the ends.
   * - `"cardinal-open"`: an open Cardinal spline; may not intersect the start or end, but
   * will intersect other control points.
   * - `"cardinal-closed"`: a closed Cardinal spline, as in a loop.
   * - `"bundle"`: equivalent to basis, except the tension parameter is used to straighten the
   * spline.
   * - `"monotone"`: cubic interpolation that preserves monotonicity in y.
   */
  interpolate?: Interpolate;
  /**
   * The maximum length of the text mark in pixels. The text value will be automatically
   * truncated if the rendered size exceeds the limit.
   *
   * __Default value:__ `0`, indicating no limit
   */
  limit?: number;
  /**
   * The overall opacity (value between [0,1]).
   *
   * __Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or
   * `square` marks or layered `bar` charts and `1` otherwise.
   */
  opacity?: number;
  /**
   * For line and trail marks, this `order` property can be set to `null` or `false` to make
   * the lines use the original order in the data sources.
   */
  order?: boolean | null;
  /**
   * The orientation of a non-stacked bar, tick, area, and line charts.
   * The value is either horizontal (default) or vertical.
   * - For bar, rule and tick, this determines whether the size of the bar and tick
   * should be applied to x or y dimension.
   * - For area, this property determines the orient property of the Vega output.
   * - For line and trail marks, this property determines the sort order of the points in the
   * line
   * if `config.sortLineBy` is not specified.
   * For stacked charts, this is always determined by the orientation of the stack;
   * therefore explicitly specified value will be ignored.
   */
  orient?: Orientation;
  /**
   * Polar coordinate radial offset, in pixels, of the text label from the origin determined
   * by the `x` and `y` properties.
   */
  radius?: number;
  /**
   * Shape of the point marks. Supported values include:
   * - plotting shapes: `"circle"`, `"square"`, `"cross"`, `"diamond"`, `"triangle-up"`,
   * `"triangle-down"`, `"triangle-right"`, or `"triangle-left"`.
   * - the line symbol `"stroke"`
   * - centered directional shapes `"arrow"`, `"wedge"`, or `"triangle"`
   * - a custom [SVG path
   * string](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) (For correct
   * sizing, custom shape paths should be defined within a square bounding box with
   * coordinates ranging from -1 to 1 along both the x and y dimensions.)
   *
   * __Default value:__ `"circle"`
   */
  shape?: string;
  /**
   * Whether month names and weekday names should be abbreviated.
   */
  shortTimeLabels?: boolean;
  /**
   * Default size for marks.
   * - For `point`/`circle`/`square`, this represents the pixel area of the marks. For
   * example: in the case of circles, the radius is determined in part by the square root of
   * the size value.
   * - For `bar`, this represents the band size of the bar, in pixels.
   * - For `text`, this represents the font size, in pixels.
   *
   * __Default value:__ `30` for point, circle, square marks; `rangeStep` - 1 for bar marks
   * with discrete dimensions; `5` for bar marks with continuous dimensions; `11` for text
   * marks.
   */
  size?: number;
  /**
   * Default Stroke Color.  This has higher precedence than `config.color`
   *
   * __Default value:__ (None)
   */
  stroke?: string;
  /**
   * The stroke cap for line ending style. One of `"butt"`, `"round"`, or `"square"`.
   *
   * __Default value:__ `"square"`
   */
  strokeCap?: StrokeCap;
  /**
   * An array of alternating stroke, space lengths for creating dashed or dotted lines.
   */
  strokeDash?: number[];
  /**
   * The offset (in pixels) into which to begin drawing with the stroke dash array.
   */
  strokeDashOffset?: number;
  /**
   * The stroke line join method. One of `"miter"`, `"round"` or `"bevel"`.
   *
   * __Default value:__ `"miter"`
   */
  strokeJoin?: StrokeJoin;
  /**
   * The miter limit at which to bevel a line join.
   */
  strokeMiterLimit?: number;
  /**
   * The stroke opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  strokeOpacity?: number;
  /**
   * The stroke width, in pixels.
   */
  strokeWidth?: number;
  /**
   * Depending on the interpolation type, sets the tension parameter (for line and area marks).
   */
  tension?: number;
  /**
   * Placeholder text if the `text` channel is not specified
   */
  text?: string;
  /**
   * Polar coordinate angle, in radians, of the text label from the origin determined by the
   * `x` and `y` properties. Values for `theta` follow the same convention of `arc` mark
   * `startAngle` and `endAngle` properties: angles are measured in radians, with `0`
   * indicating "north".
   */
  theta?: number;
  /**
   * The tooltip text string to show upon mouse hover or an object defining which fields
   * should the tooltip be derived from.
   *
   * - If `tooltip` is `{"content": "encoding"}`, then all fields from `encoding` will be
   * used.
   * - If `tooltip` is `{"content": "data"}`, then all fields that appear in the highlighted
   * data point will be used.
   * - If set to `null`, then no tooltip will be used.
   */
  tooltip?: TooltipContent | null | string;
  /**
   * X coordinates of the marks, or width of horizontal `"bar"` and `"area"` without `x2`.
   */
  x?: number;
  /**
   * X2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   */
  x2?: number;
  /**
   * Y coordinates of the marks, or height of vertical `"bar"` and `"area"` without `y2`
   */
  y?: number;
  /**
   * Y2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   */
  y2?: number;
}

/**
 * Tick-Specific Config
 */
export interface TickConfig {
  /**
   * The horizontal alignment of the text. One of `"left"`, `"right"`, `"center"`.
   */
  align?: Align;
  /**
   * The rotation angle of the text, in degrees.
   */
  angle?: number;
  /**
   * The width of the ticks.
   *
   * __Default value:__  3/4 of rangeStep.
   */
  bandSize?: number;
  /**
   * The vertical alignment of the text. One of `"top"`, `"middle"`, `"bottom"`.
   *
   * __Default value:__ `"middle"`
   */
  baseline?: TextBaseline;
  /**
   * Default color.  Note that `fill` and `stroke` have higher precedence than `color` and
   * will override `color`.
   *
   * __Default value:__ <span style="color: #4682b4;">&#9632;</span> `"#4682b4"`
   *
   * __Note:__ This property cannot be used in a [style
   * config](https://vega.github.io/vega-lite/docs/mark.html#style-config).
   */
  color?: string;
  /**
   * The radius in pixels of rounded rectangle corners.
   *
   * __Default value:__ `0`
   */
  cornerRadius?: number;
  /**
   * The mouse cursor used over the mark. Any valid [CSS cursor
   * type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used.
   */
  cursor?: Cursor;
  /**
   * The direction of the text. One of `"ltr"` (left-to-right) or `"rtl"` (right-to-left).
   * This property determines on which side is truncated in response to the limit parameter.
   *
   * __Default value:__ `"ltr"`
   */
  dir?: Dir;
  /**
   * The horizontal offset, in pixels, between the text label and its anchor point. The offset
   * is applied after rotation by the _angle_ property.
   */
  dx?: number;
  /**
   * The vertical offset, in pixels, between the text label and its anchor point. The offset
   * is applied after rotation by the _angle_ property.
   */
  dy?: number;
  /**
   * The ellipsis string for text truncated in response to the limit parameter.
   *
   * __Default value:__ `"…"`
   */
  ellipsis?: string;
  /**
   * Default Fill Color.  This has higher precedence than `config.color`
   *
   * __Default value:__ (None)
   */
  fill?: string;
  /**
   * Whether the mark's color should be used as fill color instead of stroke color.
   *
   * __Default value:__ `false` for `point`, `line` and `rule`; otherwise, `true`.
   *
   * __Note:__ This property cannot be used in a [style
   * config](https://vega.github.io/vega-lite/docs/mark.html#style-config).
   */
  filled?: boolean;
  /**
   * The fill opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  fillOpacity?: number;
  /**
   * The typeface to set the text in (e.g., `"Helvetica Neue"`).
   */
  font?: string;
  /**
   * The font size, in pixels.
   */
  fontSize?: number;
  /**
   * The font style (e.g., `"italic"`).
   */
  fontStyle?: string;
  /**
   * The font weight.
   * This can be either a string (e.g `"bold"`, `"normal"`) or a number (`100`, `200`, `300`,
   * ..., `900` where `"normal"` = `400` and `"bold"` = `700`).
   */
  fontWeight?: number | FontWeightEnum;
  /**
   * A URL to load upon mouse click. If defined, the mark acts as a hyperlink.
   */
  href?: string;
  /**
   * The line interpolation method to use for line and area marks. One of the following:
   * - `"linear"`: piecewise linear segments, as in a polyline.
   * - `"linear-closed"`: close the linear segments to form a polygon.
   * - `"step"`: alternate between horizontal and vertical segments, as in a step function.
   * - `"step-before"`: alternate between vertical and horizontal segments, as in a step
   * function.
   * - `"step-after"`: alternate between horizontal and vertical segments, as in a step
   * function.
   * - `"basis"`: a B-spline, with control point duplication on the ends.
   * - `"basis-open"`: an open B-spline; may not intersect the start or end.
   * - `"basis-closed"`: a closed B-spline, as in a loop.
   * - `"cardinal"`: a Cardinal spline, with control point duplication on the ends.
   * - `"cardinal-open"`: an open Cardinal spline; may not intersect the start or end, but
   * will intersect other control points.
   * - `"cardinal-closed"`: a closed Cardinal spline, as in a loop.
   * - `"bundle"`: equivalent to basis, except the tension parameter is used to straighten the
   * spline.
   * - `"monotone"`: cubic interpolation that preserves monotonicity in y.
   */
  interpolate?: Interpolate;
  /**
   * The maximum length of the text mark in pixels. The text value will be automatically
   * truncated if the rendered size exceeds the limit.
   *
   * __Default value:__ `0`, indicating no limit
   */
  limit?: number;
  /**
   * The overall opacity (value between [0,1]).
   *
   * __Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or
   * `square` marks or layered `bar` charts and `1` otherwise.
   */
  opacity?: number;
  /**
   * For line and trail marks, this `order` property can be set to `null` or `false` to make
   * the lines use the original order in the data sources.
   */
  order?: boolean | null;
  /**
   * The orientation of a non-stacked bar, tick, area, and line charts.
   * The value is either horizontal (default) or vertical.
   * - For bar, rule and tick, this determines whether the size of the bar and tick
   * should be applied to x or y dimension.
   * - For area, this property determines the orient property of the Vega output.
   * - For line and trail marks, this property determines the sort order of the points in the
   * line
   * if `config.sortLineBy` is not specified.
   * For stacked charts, this is always determined by the orientation of the stack;
   * therefore explicitly specified value will be ignored.
   */
  orient?: Orientation;
  /**
   * Polar coordinate radial offset, in pixels, of the text label from the origin determined
   * by the `x` and `y` properties.
   */
  radius?: number;
  /**
   * Shape of the point marks. Supported values include:
   * - plotting shapes: `"circle"`, `"square"`, `"cross"`, `"diamond"`, `"triangle-up"`,
   * `"triangle-down"`, `"triangle-right"`, or `"triangle-left"`.
   * - the line symbol `"stroke"`
   * - centered directional shapes `"arrow"`, `"wedge"`, or `"triangle"`
   * - a custom [SVG path
   * string](https://developer.mozilla.org/en-US/docs/Web/SVG/Tutorial/Paths) (For correct
   * sizing, custom shape paths should be defined within a square bounding box with
   * coordinates ranging from -1 to 1 along both the x and y dimensions.)
   *
   * __Default value:__ `"circle"`
   */
  shape?: string;
  /**
   * Default size for marks.
   * - For `point`/`circle`/`square`, this represents the pixel area of the marks. For
   * example: in the case of circles, the radius is determined in part by the square root of
   * the size value.
   * - For `bar`, this represents the band size of the bar, in pixels.
   * - For `text`, this represents the font size, in pixels.
   *
   * __Default value:__ `30` for point, circle, square marks; `rangeStep` - 1 for bar marks
   * with discrete dimensions; `5` for bar marks with continuous dimensions; `11` for text
   * marks.
   */
  size?: number;
  /**
   * Default Stroke Color.  This has higher precedence than `config.color`
   *
   * __Default value:__ (None)
   */
  stroke?: string;
  /**
   * The stroke cap for line ending style. One of `"butt"`, `"round"`, or `"square"`.
   *
   * __Default value:__ `"square"`
   */
  strokeCap?: StrokeCap;
  /**
   * An array of alternating stroke, space lengths for creating dashed or dotted lines.
   */
  strokeDash?: number[];
  /**
   * The offset (in pixels) into which to begin drawing with the stroke dash array.
   */
  strokeDashOffset?: number;
  /**
   * The stroke line join method. One of `"miter"`, `"round"` or `"bevel"`.
   *
   * __Default value:__ `"miter"`
   */
  strokeJoin?: StrokeJoin;
  /**
   * The miter limit at which to bevel a line join.
   */
  strokeMiterLimit?: number;
  /**
   * The stroke opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  strokeOpacity?: number;
  /**
   * The stroke width, in pixels.
   */
  strokeWidth?: number;
  /**
   * Depending on the interpolation type, sets the tension parameter (for line and area marks).
   */
  tension?: number;
  /**
   * Placeholder text if the `text` channel is not specified
   */
  text?: string;
  /**
   * Polar coordinate angle, in radians, of the text label from the origin determined by the
   * `x` and `y` properties. Values for `theta` follow the same convention of `arc` mark
   * `startAngle` and `endAngle` properties: angles are measured in radians, with `0`
   * indicating "north".
   */
  theta?: number;
  /**
   * Thickness of the tick mark.
   *
   * __Default value:__  `1`
   */
  thickness?: number;
  /**
   * The tooltip text string to show upon mouse hover or an object defining which fields
   * should the tooltip be derived from.
   *
   * - If `tooltip` is `{"content": "encoding"}`, then all fields from `encoding` will be
   * used.
   * - If `tooltip` is `{"content": "data"}`, then all fields that appear in the highlighted
   * data point will be used.
   * - If set to `null`, then no tooltip will be used.
   */
  tooltip?: TooltipContent | null | string;
  /**
   * X coordinates of the marks, or width of horizontal `"bar"` and `"area"` without `x2`.
   */
  x?: number;
  /**
   * X2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   */
  x2?: number;
  /**
   * Y coordinates of the marks, or height of vertical `"bar"` and `"area"` without `y2`
   */
  y?: number;
  /**
   * Y2 coordinates for ranged `"area"`, `"bar"`, `"rect"`, and  `"rule"`.
   */
  y2?: number;
}

/**
 * Title configuration, which determines default properties for all
 * [titles](https://vega.github.io/vega-lite/docs/title.html). For a full list of title
 * configuration options, please see the [corresponding section of the title
 * documentation](https://vega.github.io/vega-lite/docs/title.html#config).
 */
export interface BaseTitleConfig {
  align?: Align;
  /**
   * The anchor position for placing the title. One of `"start"`, `"middle"`, or `"end"`. For
   * example, with an orientation of top these anchor positions map to a left-, center-, or
   * right-aligned title.
   */
  anchor?: TitleAnchor | null;
  /**
   * Angle in degrees of title text.
   */
  angle?: number;
  /**
   * Vertical text baseline for title text. One of `"top"`, `"middle"`, `"bottom"`, or
   * `"alphabetic"`.
   */
  baseline?: TextBaseline;
  /**
   * Text color for title text.
   */
  color?: string;
  /**
   * Delta offset for title text x-coordinate.
   */
  dx?: number;
  /**
   * Delta offset for title text y-coordinate.
   */
  dy?: number;
  /**
   * Font name for title text.
   */
  font?: string;
  /**
   * Font size in pixels for title text.
   *
   * __Default value:__ `10`.
   */
  fontSize?: number;
  /**
   * Font style for title text.
   */
  fontStyle?: string;
  /**
   * Font weight for title text.
   * This can be either a string (e.g `"bold"`, `"normal"`) or a number (`100`, `200`, `300`,
   * ..., `900` where `"normal"` = `400` and `"bold"` = `700`).
   */
  fontWeight?: number | FontWeightEnum;
  /**
   * The reference frame for the anchor position, one of `"bounds"` (to anchor relative to the
   * full bounding box) or `"group"` (to anchor relative to the group width or height).
   */
  frame?: TitleFrame;
  /**
   * The maximum allowed length in pixels of legend labels.
   */
  limit?: number;
  /**
   * The orthogonal offset in pixels by which to displace the title from its position along
   * the edge of the chart.
   */
  offset?: number;
  /**
   * Default title orientation (`"top"`, `"bottom"`, `"left"`, or `"right"`)
   */
  orient?: TitleOrient;
}

/**
 * Default properties for [single view
 * plots](https://vega.github.io/vega-lite/docs/spec.html#single).
 */
export interface ViewConfig {
  /**
   * Whether the view should be clipped.
   */
  clip?: boolean;
  /**
   * The radius in pixels of rounded rectangle corners.
   *
   * __Default value:__ `0`
   */
  cornerRadius?: number;
  /**
   * The fill color.
   *
   * __Default value:__ `undefined`
   */
  fill?: null | string;
  /**
   * The fill opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  fillOpacity?: number;
  /**
   * The default height of the single plot or each plot in a trellis plot when the
   * visualization has a continuous (non-ordinal) y-scale with `rangeStep` = `null`.
   *
   * __Default value:__ `200`
   */
  height?: number;
  /**
   * The overall opacity (value between [0,1]).
   *
   * __Default value:__ `0.7` for non-aggregate plots with `point`, `tick`, `circle`, or
   * `square` marks or layered `bar` charts and `1` otherwise.
   */
  opacity?: number;
  /**
   * The stroke color.
   *
   * __Default value:__ `"#ddd"`
   */
  stroke?: null | string;
  /**
   * The stroke cap for line ending style. One of `"butt"`, `"round"`, or `"square"`.
   *
   * __Default value:__ `"square"`
   */
  strokeCap?: StrokeCap;
  /**
   * An array of alternating stroke, space lengths for creating dashed or dotted lines.
   */
  strokeDash?: number[];
  /**
   * The offset (in pixels) into which to begin drawing with the stroke dash array.
   */
  strokeDashOffset?: number;
  /**
   * The stroke line join method. One of `"miter"`, `"round"` or `"bevel"`.
   *
   * __Default value:__ `"miter"`
   */
  strokeJoin?: StrokeJoin;
  /**
   * The miter limit at which to bevel a line join.
   */
  strokeMiterLimit?: number;
  /**
   * The stroke opacity (value between [0,1]).
   *
   * __Default value:__ `1`
   */
  strokeOpacity?: number;
  /**
   * The stroke width, in pixels.
   */
  strokeWidth?: number;
  /**
   * The default width of the single plot or each plot in a trellis plot when the
   * visualization has a continuous (non-ordinal) x-scale or ordinal x-scale with `rangeStep`
   * = `null`.
   *
   * __Default value:__ `200`
   */
  width?: number;
}
