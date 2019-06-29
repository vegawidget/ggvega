(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = global || self, factory(global.ggvega = {}));
}(this, function (exports) { 'use strict';

    function TranslatePointShape(ggShape) {
        var shape = '';
        if (ggShape % 8 == 0) {
            shape = 'circle';
        }
        if (ggShape % 8 == 1) {
            shape = 'square';
        }
        if (ggShape % 8 == 2) {
            shape = 'cross';
        }
        if (ggShape % 8 == 3) {
            shape = 'diamond';
        }
        if (ggShape % 8 == 4) {
            shape = 'triangle-up';
        }
        if (ggShape % 8 == 5) {
            shape = 'triangle-down';
        }
        if (ggShape % 8 == 6) {
            shape = 'triangle-right';
        }
        if (ggShape % 8 == 7) {
            shape = 'triangle-left';
        }
        return shape;
    }
    function TranslateStroke(ggStroke) {
        return ggStroke;
    }
    function TranslateStrokeWidth(ggStrokeWidth) {
        return ggStrokeWidth;
    }
    function TranslateOpacity(ggOpacity) {
        return ggOpacity;
    }
    function TranslateFill(ggFill) {
        return ggFill;
    }
    function TranslatePointSize(ggSize) {
        return ggSize * 20;
    }

    function TranslateEncoding(layer, labels, layerData, scales) {
        var layerEncoding = {
            x: TranslateXClass(layer, labels, layerData, scales),
            y: TranslateYClass(layer, labels, layerData, scales),
            // color: TranslateColor(layer, labels, layerData),
            size: TranslateSize(layer, labels, layerData),
            shape: TranslateShape(layer, labels, layerData),
            stroke: TranslateStroke$1(layer, labels, layerData),
            strokeWidth: TranslateStrokeWidth$1(layer, labels, layerData),
            opacity: TranslateOpacity$1(layer, labels, layerData),
            fill: TranslateFill$1(layer, labels, layerData)
        };
        return layerEncoding;
    }
    function TranslateXClass(layer, labels, layerData, scales) {
        var field = layer['mapping']['x']['field'];
        var type = layerData['metadata'][field]['type'];
        var scale;
        var title = labels['x'];
        for (var _i = 0, scales_1 = scales; _i < scales_1.length; _i++) {
            var ggScale = scales_1[_i];
            if (ggScale['aesthetics'][0] == 'x') {
                scale = TranslateScale(ggScale['transform']);
                if (ggScale['name']) {
                    title = ggScale['name'];
                }
            }
        }
        field = field.replace('.', '\\.');
        var xClass = {
            field: field,
            type: type,
            title: title,
            scale: scale
        };
        return xClass;
    }
    function TranslateYClass(layer, labels, layerData, scales) {
        var field = layer['mapping']['y']['field'];
        var type = layerData['metadata'][field]['type'];
        var scale;
        var title = labels['y'];
        for (var _i = 0, scales_2 = scales; _i < scales_2.length; _i++) {
            var ggScale = scales_2[_i];
            if (ggScale['aesthetics'][0] == 'y') {
                scale = TranslateScale(ggScale['transform']);
                if (ggScale['name']) {
                    title = ggScale['name'];
                }
            }
        }
        field = field.replace('.', '\\.');
        var yClass = {
            field: field,
            type: type,
            title: title,
            scale: scale
        };
        return yClass;
    }
    /**
     * This function used tp translate `color`.
     * For now, we believe we can use `fill` and `stroke` substitute `color`. So we just comment this function
     * @param layer
     * @param ggSpec
     */
    // function TranslateColor(layer: any, labels: any, layerData: any): vlspec.ValueDefWithConditionMarkPropFieldDefStringNull | undefined {
    //   let color: vlspec.ValueDefWithConditionMarkPropFieldDefStringNull | undefined;
    //   if (layer['aes_params']['colour']) {
    //     color = layer['aes_params']['colour'];
    //   }
    //   if (layer['mapping']['colour']) {
    //     if (!layer['mapping']['colour']['field']) {
    //       return color;
    //     }
    //     let field: string = layer['mapping']['colour']['field'];
    //     const type: vlspec.StandardType = layerData['metadata'][field]['type'];
    //     field = field.replace('.', '\\.');
    //     color = {
    //       field: field,
    //       type: type,
    //       title: labels['colour']
    //     };
    //   }
    //   return color;
    // }
    /**
     * TODO:// default type is ordinal bin
     * translate encoding.size
     * @param layer in ggSpec['layers']
     * @param ggSpec is the ggSpec
     */
    function TranslateSize(layer, labels, layerData) {
        var size;
        if (layer['aes_params']) {
            if (layer['aes_params']['size']) {
                if (layer['aes_params']['size']['value']) {
                    size = {
                        value: TranslatePointSize(layer['aes_params']['size']['value'])
                    };
                }
            }
        }
        if (layer['mapping']['size']) {
            if (!layer['mapping']['size']['field']) {
                return size;
            }
            var field = layer['mapping']['size']['field'];
            var type = layerData['metadata'][field]['type'];
            field = field.replace('.', '\\.');
            size = {
                field: field,
                type: type,
                title: labels['size'],
                bin: true
            };
        }
        return size;
    }
    function TranslateShape(layer, labels, layerData) {
        var shape;
        if (layer['aes_params']) {
            if (layer['aes_params']['shape']) {
                if (layer['aes_params']['shape']['value']) {
                    if (layer["geom"]['class'] == 'GeomPoint') {
                        shape = {
                            value: TranslatePointShape(layer['aes_params']['shape']['value'])
                        };
                    }
                }
            }
        }
        if (layer['mapping']['shape']) {
            if (!layer['mapping']['shape']['field']) {
                return shape;
            }
            var field = layer['mapping']['shape']['field'];
            var type = layerData['metadata'][field]['type'];
            field = field.replace('.', '\\.');
            shape = {
                field: field,
                type: type,
                title: labels['shape']
            };
        }
        return shape;
    }
    function TranslateScale(transform) {
        return transform;
    }
    function TranslateStroke$1(layer, labels, layerData) {
        var stroke;
        if (layer['aes_params']) {
            if (layer['aes_params']['colour']) {
                if (layer['aes_params']['colour']['value']) {
                    stroke = {
                        value: TranslateStroke(layer['aes_params']['colour']['value'])
                    };
                }
            }
        }
        if (layer['mapping']['colour']) {
            if (!layer['mapping']['colour']['field']) {
                return stroke;
            }
            var field = layer['mapping']['colour']['field'];
            var type = layerData['metadata'][field]['type'];
            field = field.replace('.', '\\.');
            stroke = {
                field: field,
                type: type,
                title: labels['colour']
            };
        }
        return stroke;
    }
    function TranslateStrokeWidth$1(layer, labels, layerData) {
        var strokeWidth;
        if (layer['aes_params']) {
            if (layer['aes_params']['stroke']) {
                if (layer['aes_params']['stroke']['value']) {
                    strokeWidth = {
                        value: TranslateStrokeWidth(layer['aes_params']['stroke']['value'])
                    };
                }
            }
        }
        if (layer['mapping']['stroke']) {
            if (!layer['mapping']['stroke']['field']) {
                return strokeWidth;
            }
            var field = layer['mapping']['stroke']['field'];
            var type = layerData['metadata'][field]['type'];
            field = field.replace('.', '\\.');
            strokeWidth = {
                field: field,
                type: type,
                title: labels['stroke']
            };
        }
        return strokeWidth;
    }
    function TranslateOpacity$1(layer, labels, layerData) {
        var opacity;
        if (layer['aes_params']) {
            if (layer['aes_params']['alpha']) {
                if (layer['aes_params']['alpha']['value']) {
                    opacity = {
                        value: TranslateOpacity(layer['aes_params']['alpha']['value'])
                    };
                }
            }
        }
        if (layer['mapping']['alpha']) {
            if (!layer['mapping']['alpha']['field']) {
                return opacity;
            }
            var field = layer['mapping']['alpha']['field'];
            var type = layerData['metadata'][field]['type'];
            field = field.replace('.', '\\.');
            opacity = {
                field: field,
                type: type,
                title: labels['stroke']
            };
        }
        return opacity;
    }
    function TranslateFill$1(layer, labels, layerData) {
        var fill;
        if (layer['aes_params']) {
            if (layer['aes_params']['fill']) {
                if (layer['aes_params']['fill']['value']) {
                    fill = {
                        value: TranslateFill(layer['aes_params']['fill']['value'])
                    };
                }
            }
        }
        if (layer['mapping']['fill']) {
            if (!layer['mapping']['fill']['field']) {
                return fill;
            }
            var field = layer['mapping']['fill']['field'];
            var type = layerData['metadata'][field]['type'];
            field = field.replace('.', '\\.');
            fill = {
                field: field,
                type: type,
                title: labels['colour']
            };
        }
        return fill;
    }

    /**
     * The alignment to apply to symbol legends rows and columns. The supported string values
     * are `"all"`, `"each"` (the default), and `none`. For more information, see the [grid
     * layout documentation](https://vega.github.io/vega/docs/layout).
     *
     * __Default value:__ `"each"`.
     */
    var LayoutAlign;
    (function (LayoutAlign) {
        LayoutAlign["All"] = "all";
        LayoutAlign["Each"] = "each";
        LayoutAlign["None"] = "none";
    })(LayoutAlign || (LayoutAlign = {}));
    /**
     * Determines how size calculation should be performed, one of `"content"` or `"padding"`.
     * The default setting (`"content"`) interprets the width and height settings as the data
     * rectangle (plotting) dimensions, to which padding is then added. In contrast, the
     * `"padding"` setting includes the padding within the view size calculations, such that the
     * width and height settings indicate the **total** intended size of the view.
     *
     * __Default value__: `"content"`
     */
    var Contains;
    (function (Contains) {
        Contains["Content"] = "content";
        Contains["Padding"] = "padding";
    })(Contains || (Contains = {}));
    /**
     * The sizing format type. One of `"pad"`, `"fit"` or `"none"`. See the [autosize
     * type](https://vega.github.io/vega-lite/docs/size.html#autosize) documentation for
     * descriptions of each.
     *
     * __Default value__: `"pad"`
     */
    var AutosizeType;
    (function (AutosizeType) {
        AutosizeType["Fit"] = "fit";
        AutosizeType["None"] = "none";
        AutosizeType["Pad"] = "pad";
    })(AutosizeType || (AutosizeType = {}));
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
    var BoundsEnum;
    (function (BoundsEnum) {
        BoundsEnum["Flush"] = "flush";
        BoundsEnum["Full"] = "full";
    })(BoundsEnum || (BoundsEnum = {}));
    /**
     * Type of input data: `"json"`, `"csv"`, `"tsv"`, `"dsv"`.
     *
     * __Default value:__  The default format type is determined by the extension of the file
     * URL.
     * If no extension is detected, `"json"` will be used by default.
     */
    var DataFormatType;
    (function (DataFormatType) {
        DataFormatType["CSV"] = "csv";
        DataFormatType["Dsv"] = "dsv";
        DataFormatType["JSON"] = "json";
        DataFormatType["Topojson"] = "topojson";
        DataFormatType["Tsv"] = "tsv";
    })(DataFormatType || (DataFormatType = {}));
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
    var AggregateOp;
    (function (AggregateOp) {
        AggregateOp["Argmax"] = "argmax";
        AggregateOp["Argmin"] = "argmin";
        AggregateOp["Average"] = "average";
        AggregateOp["Ci0"] = "ci0";
        AggregateOp["Ci1"] = "ci1";
        AggregateOp["Count"] = "count";
        AggregateOp["Distinct"] = "distinct";
        AggregateOp["Max"] = "max";
        AggregateOp["Mean"] = "mean";
        AggregateOp["Median"] = "median";
        AggregateOp["Min"] = "min";
        AggregateOp["Missing"] = "missing";
        AggregateOp["Q1"] = "q1";
        AggregateOp["Q3"] = "q3";
        AggregateOp["Stderr"] = "stderr";
        AggregateOp["Stdev"] = "stdev";
        AggregateOp["Stdevp"] = "stdevp";
        AggregateOp["Sum"] = "sum";
        AggregateOp["Valid"] = "valid";
        AggregateOp["Values"] = "values";
        AggregateOp["Variance"] = "variance";
        AggregateOp["Variancep"] = "variancep";
    })(AggregateOp || (AggregateOp = {}));
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
    var TimeUnit;
    (function (TimeUnit) {
        TimeUnit["Date"] = "date";
        TimeUnit["Day"] = "day";
        TimeUnit["Hours"] = "hours";
        TimeUnit["Hoursminutes"] = "hoursminutes";
        TimeUnit["Hoursminutesseconds"] = "hoursminutesseconds";
        TimeUnit["Milliseconds"] = "milliseconds";
        TimeUnit["Minutes"] = "minutes";
        TimeUnit["Minutesseconds"] = "minutesseconds";
        TimeUnit["Month"] = "month";
        TimeUnit["Monthdate"] = "monthdate";
        TimeUnit["Monthdatehours"] = "monthdatehours";
        TimeUnit["Quarter"] = "quarter";
        TimeUnit["Quartermonth"] = "quartermonth";
        TimeUnit["Seconds"] = "seconds";
        TimeUnit["Secondsmilliseconds"] = "secondsmilliseconds";
        TimeUnit["Utcdate"] = "utcdate";
        TimeUnit["Utcday"] = "utcday";
        TimeUnit["Utchours"] = "utchours";
        TimeUnit["Utchoursminutes"] = "utchoursminutes";
        TimeUnit["Utchoursminutesseconds"] = "utchoursminutesseconds";
        TimeUnit["Utcmilliseconds"] = "utcmilliseconds";
        TimeUnit["Utcminutes"] = "utcminutes";
        TimeUnit["Utcminutesseconds"] = "utcminutesseconds";
        TimeUnit["Utcmonth"] = "utcmonth";
        TimeUnit["Utcmonthdate"] = "utcmonthdate";
        TimeUnit["Utcmonthdatehours"] = "utcmonthdatehours";
        TimeUnit["Utcquarter"] = "utcquarter";
        TimeUnit["Utcquartermonth"] = "utcquartermonth";
        TimeUnit["Utcseconds"] = "utcseconds";
        TimeUnit["Utcsecondsmilliseconds"] = "utcsecondsmilliseconds";
        TimeUnit["Utcyear"] = "utcyear";
        TimeUnit["Utcyearmonth"] = "utcyearmonth";
        TimeUnit["Utcyearmonthdate"] = "utcyearmonthdate";
        TimeUnit["Utcyearmonthdatehours"] = "utcyearmonthdatehours";
        TimeUnit["Utcyearmonthdatehoursminutes"] = "utcyearmonthdatehoursminutes";
        TimeUnit["Utcyearmonthdatehoursminutesseconds"] = "utcyearmonthdatehoursminutesseconds";
        TimeUnit["Utcyearquarter"] = "utcyearquarter";
        TimeUnit["Utcyearquartermonth"] = "utcyearquartermonth";
        TimeUnit["Year"] = "year";
        TimeUnit["Yearmonth"] = "yearmonth";
        TimeUnit["Yearmonthdate"] = "yearmonthdate";
        TimeUnit["Yearmonthdatehours"] = "yearmonthdatehours";
        TimeUnit["Yearmonthdatehoursminutes"] = "yearmonthdatehoursminutes";
        TimeUnit["Yearmonthdatehoursminutesseconds"] = "yearmonthdatehoursminutesseconds";
        TimeUnit["Yearquarter"] = "yearquarter";
        TimeUnit["Yearquartermonth"] = "yearquartermonth";
    })(TimeUnit || (TimeUnit = {}));
    var RepeatEnum;
    (function (RepeatEnum) {
        RepeatEnum["Column"] = "column";
        RepeatEnum["Repeat"] = "repeat";
        RepeatEnum["Row"] = "row";
    })(RepeatEnum || (RepeatEnum = {}));
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
    var Orientation;
    (function (Orientation) {
        Orientation["Horizontal"] = "horizontal";
        Orientation["Vertical"] = "vertical";
    })(Orientation || (Orientation = {}));
    /**
     * The format type for labels (`"number"` or `"time"`).
     *
     * __Default value:__
     * - `"time"` for temporal fields and ordinal and nomimal fields with `timeUnit`.
     * - `"number"` for quantitative fields as well as ordinal and nomimal fields without
     * `timeUnit`.
     */
    var FormatType;
    (function (FormatType) {
        FormatType["Number"] = "number";
        FormatType["Time"] = "time";
    })(FormatType || (FormatType = {}));
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
    var Align;
    (function (Align) {
        Align["Center"] = "center";
        Align["Left"] = "left";
        Align["Right"] = "right";
    })(Align || (Align = {}));
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
    var TextBaseline;
    (function (TextBaseline) {
        TextBaseline["Alphabetic"] = "alphabetic";
        TextBaseline["Bottom"] = "bottom";
        TextBaseline["Middle"] = "middle";
        TextBaseline["Top"] = "top";
    })(TextBaseline || (TextBaseline = {}));
    var FontWeightEnum;
    (function (FontWeightEnum) {
        FontWeightEnum["Bold"] = "bold";
        FontWeightEnum["Bolder"] = "bolder";
        FontWeightEnum["Lighter"] = "lighter";
        FontWeightEnum["Normal"] = "normal";
    })(FontWeightEnum || (FontWeightEnum = {}));
    var LabelOverlapEnum;
    (function (LabelOverlapEnum) {
        LabelOverlapEnum["Greedy"] = "greedy";
        LabelOverlapEnum["Parity"] = "parity";
    })(LabelOverlapEnum || (LabelOverlapEnum = {}));
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
    var LegendOrient;
    (function (LegendOrient) {
        LegendOrient["Bottom"] = "bottom";
        LegendOrient["BottomLeft"] = "bottom-left";
        LegendOrient["BottomRight"] = "bottom-right";
        LegendOrient["Left"] = "left";
        LegendOrient["None"] = "none";
        LegendOrient["Right"] = "right";
        LegendOrient["Top"] = "top";
        LegendOrient["TopLeft"] = "top-left";
        LegendOrient["TopRight"] = "top-right";
    })(LegendOrient || (LegendOrient = {}));
    var TitleAnchor;
    (function (TitleAnchor) {
        TitleAnchor["End"] = "end";
        TitleAnchor["Middle"] = "middle";
        TitleAnchor["Start"] = "start";
    })(TitleAnchor || (TitleAnchor = {}));
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
    var Orient;
    (function (Orient) {
        Orient["Bottom"] = "bottom";
        Orient["Left"] = "left";
        Orient["Right"] = "right";
        Orient["Top"] = "top";
    })(Orient || (Orient = {}));
    /**
     * The type of the legend. Use `"symbol"` to create a discrete legend and `"gradient"` for a
     * continuous color gradient.
     *
     * __Default value:__ `"gradient"` for non-binned quantitative fields and temporal fields;
     * `"symbol"` otherwise.
     */
    var LegendType;
    (function (LegendType) {
        LegendType["Gradient"] = "gradient";
        LegendType["Symbol"] = "symbol";
    })(LegendType || (LegendType = {}));
    var Domain;
    (function (Domain) {
        Domain["Unaggregated"] = "unaggregated";
    })(Domain || (Domain = {}));
    var ScaleInterpolateParamsType;
    (function (ScaleInterpolateParamsType) {
        ScaleInterpolateParamsType["Cubehelix"] = "cubehelix";
        ScaleInterpolateParamsType["CubehelixLong"] = "cubehelix-long";
        ScaleInterpolateParamsType["RGB"] = "rgb";
    })(ScaleInterpolateParamsType || (ScaleInterpolateParamsType = {}));
    var ScaleInterpolate;
    (function (ScaleInterpolate) {
        ScaleInterpolate["Cubehelix"] = "cubehelix";
        ScaleInterpolate["CubehelixLong"] = "cubehelix-long";
        ScaleInterpolate["HCL"] = "hcl";
        ScaleInterpolate["HCLLong"] = "hcl-long";
        ScaleInterpolate["Hsl"] = "hsl";
        ScaleInterpolate["HslLong"] = "hsl-long";
        ScaleInterpolate["Lab"] = "lab";
        ScaleInterpolate["RGB"] = "rgb";
    })(ScaleInterpolate || (ScaleInterpolate = {}));
    var NiceTime;
    (function (NiceTime) {
        NiceTime["Day"] = "day";
        NiceTime["Hour"] = "hour";
        NiceTime["Minute"] = "minute";
        NiceTime["Month"] = "month";
        NiceTime["Second"] = "second";
        NiceTime["Week"] = "week";
        NiceTime["Year"] = "year";
    })(NiceTime || (NiceTime = {}));
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
    var ScaleType;
    (function (ScaleType) {
        ScaleType["Band"] = "band";
        ScaleType["BinOrdinal"] = "bin-ordinal";
        ScaleType["Linear"] = "linear";
        ScaleType["Log"] = "log";
        ScaleType["Ordinal"] = "ordinal";
        ScaleType["Point"] = "point";
        ScaleType["Pow"] = "pow";
        ScaleType["Quantile"] = "quantile";
        ScaleType["Quantize"] = "quantize";
        ScaleType["Sqrt"] = "sqrt";
        ScaleType["Symlog"] = "symlog";
        ScaleType["Threshold"] = "threshold";
        ScaleType["Time"] = "time";
        ScaleType["UTC"] = "utc";
    })(ScaleType || (ScaleType = {}));
    /**
     * The [encoding channel](https://vega.github.io/vega-lite/docs/encoding.html#channels) to
     * sort by (e.g., `"x"`, `"y"`)
     */
    var SingleDefUnitChannel;
    (function (SingleDefUnitChannel) {
        SingleDefUnitChannel["Color"] = "color";
        SingleDefUnitChannel["Fill"] = "fill";
        SingleDefUnitChannel["FillOpacity"] = "fillOpacity";
        SingleDefUnitChannel["Href"] = "href";
        SingleDefUnitChannel["Key"] = "key";
        SingleDefUnitChannel["Latitude"] = "latitude";
        SingleDefUnitChannel["Latitude2"] = "latitude2";
        SingleDefUnitChannel["Longitude"] = "longitude";
        SingleDefUnitChannel["Longitude2"] = "longitude2";
        SingleDefUnitChannel["Opacity"] = "opacity";
        SingleDefUnitChannel["Shape"] = "shape";
        SingleDefUnitChannel["Size"] = "size";
        SingleDefUnitChannel["Stroke"] = "stroke";
        SingleDefUnitChannel["StrokeOpacity"] = "strokeOpacity";
        SingleDefUnitChannel["StrokeWidth"] = "strokeWidth";
        SingleDefUnitChannel["Text"] = "text";
        SingleDefUnitChannel["Tooltip"] = "tooltip";
        SingleDefUnitChannel["X"] = "x";
        SingleDefUnitChannel["X2"] = "x2";
        SingleDefUnitChannel["Y"] = "y";
        SingleDefUnitChannel["Y2"] = "y2";
    })(SingleDefUnitChannel || (SingleDefUnitChannel = {}));
    /**
     * The sort order. One of `"ascending"` (default) or `"descending"`.
     */
    var SortOrder;
    (function (SortOrder) {
        SortOrder["Ascending"] = "ascending";
        SortOrder["Descending"] = "descending";
    })(SortOrder || (SortOrder = {}));
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
    var StandardType;
    (function (StandardType) {
        StandardType["Nominal"] = "nominal";
        StandardType["Ordinal"] = "ordinal";
        StandardType["Quantitative"] = "quantitative";
        StandardType["Temporal"] = "temporal";
    })(StandardType || (StandardType = {}));
    var BinEnum;
    (function (BinEnum) {
        BinEnum["Binned"] = "binned";
    })(BinEnum || (BinEnum = {}));
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
    var LatitudeType;
    (function (LatitudeType) {
        LatitudeType["Quantitative"] = "quantitative";
    })(LatitudeType || (LatitudeType = {}));
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
    var TypeForShape;
    (function (TypeForShape) {
        TypeForShape["Geojson"] = "geojson";
        TypeForShape["Nominal"] = "nominal";
        TypeForShape["Ordinal"] = "ordinal";
    })(TypeForShape || (TypeForShape = {}));
    /**
     * The imputation method to use for the field value of imputed data objects.
     * One of `value`, `mean`, `median`, `max` or `min`.
     *
     * __Default value:__  `"value"`
     */
    var ImputeMethod;
    (function (ImputeMethod) {
        ImputeMethod["Max"] = "max";
        ImputeMethod["Mean"] = "mean";
        ImputeMethod["Median"] = "median";
        ImputeMethod["Min"] = "min";
        ImputeMethod["Value"] = "value";
    })(ImputeMethod || (ImputeMethod = {}));
    /**
     * Default stack offset for stackable mark.
     *
     * Mode for stacking marks.
     * __Default value:__ `"zero"`
     */
    var StackOffset;
    (function (StackOffset) {
        StackOffset["Center"] = "center";
        StackOffset["Normalize"] = "normalize";
        StackOffset["Zero"] = "zero";
    })(StackOffset || (StackOffset = {}));
    var PurpleValue;
    (function (PurpleValue) {
        PurpleValue["Width"] = "width";
    })(PurpleValue || (PurpleValue = {}));
    var FluffyValue;
    (function (FluffyValue) {
        FluffyValue["Height"] = "height";
    })(FluffyValue || (FluffyValue = {}));
    /**
     * The mouse cursor used over the mark. Any valid [CSS cursor
     * type](https://developer.mozilla.org/en-US/docs/Web/CSS/cursor#Values) can be used.
     */
    var Cursor;
    (function (Cursor) {
        Cursor["Alias"] = "alias";
        Cursor["AllScroll"] = "all-scroll";
        Cursor["Auto"] = "auto";
        Cursor["Cell"] = "cell";
        Cursor["ColResize"] = "col-resize";
        Cursor["ContextMenu"] = "context-menu";
        Cursor["Copy"] = "copy";
        Cursor["Crosshair"] = "crosshair";
        Cursor["Default"] = "default";
        Cursor["EResize"] = "e-resize";
        Cursor["EwResize"] = "ew-resize";
        Cursor["Grab"] = "grab";
        Cursor["Grabbing"] = "grabbing";
        Cursor["Help"] = "help";
        Cursor["Move"] = "move";
        Cursor["NResize"] = "n-resize";
        Cursor["NSResize"] = "ns-resize";
        Cursor["NeResize"] = "ne-resize";
        Cursor["NeswResize"] = "nesw-resize";
        Cursor["NoDrop"] = "no-drop";
        Cursor["None"] = "none";
        Cursor["NotAllowed"] = "not-allowed";
        Cursor["NwResize"] = "nw-resize";
        Cursor["NwseResize"] = "nwse-resize";
        Cursor["Pointer"] = "pointer";
        Cursor["Progress"] = "progress";
        Cursor["RowResize"] = "row-resize";
        Cursor["SEResize"] = "se-resize";
        Cursor["SResize"] = "s-resize";
        Cursor["SwResize"] = "sw-resize";
        Cursor["Text"] = "text";
        Cursor["VerticalText"] = "vertical-text";
        Cursor["WResize"] = "w-resize";
        Cursor["Wait"] = "wait";
        Cursor["ZoomIn"] = "zoom-in";
        Cursor["ZoomOut"] = "zoom-out";
    })(Cursor || (Cursor = {}));
    /**
     * The direction of the text. One of `"ltr"` (left-to-right) or `"rtl"` (right-to-left).
     * This property determines on which side is truncated in response to the limit parameter.
     *
     * __Default value:__ `"ltr"`
     */
    var Dir;
    (function (Dir) {
        Dir["LTR"] = "ltr";
        Dir["RTL"] = "rtl";
    })(Dir || (Dir = {}));
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
    var Interpolate;
    (function (Interpolate) {
        Interpolate["Basis"] = "basis";
        Interpolate["BasisClosed"] = "basis-closed";
        Interpolate["BasisOpen"] = "basis-open";
        Interpolate["Bundle"] = "bundle";
        Interpolate["Cardinal"] = "cardinal";
        Interpolate["CardinalClosed"] = "cardinal-closed";
        Interpolate["CardinalOpen"] = "cardinal-open";
        Interpolate["Linear"] = "linear";
        Interpolate["LinearClosed"] = "linear-closed";
        Interpolate["Monotone"] = "monotone";
        Interpolate["Step"] = "step";
        Interpolate["StepAfter"] = "step-after";
        Interpolate["StepBefore"] = "step-before";
    })(Interpolate || (Interpolate = {}));
    /**
     * The stroke cap for line ending style. One of `"butt"`, `"round"`, or `"square"`.
     *
     * __Default value:__ `"square"`
     */
    var StrokeCap;
    (function (StrokeCap) {
        StrokeCap["Butt"] = "butt";
        StrokeCap["Round"] = "round";
        StrokeCap["Square"] = "square";
    })(StrokeCap || (StrokeCap = {}));
    /**
     * The stroke line join method. One of `"miter"`, `"round"` or `"bevel"`.
     *
     * __Default value:__ `"miter"`
     */
    var StrokeJoin;
    (function (StrokeJoin) {
        StrokeJoin["Bevel"] = "bevel";
        StrokeJoin["Miter"] = "miter";
        StrokeJoin["Round"] = "round";
    })(StrokeJoin || (StrokeJoin = {}));
    var Content;
    (function (Content) {
        Content["Data"] = "data";
        Content["Encoding"] = "encoding";
    })(Content || (Content = {}));
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
    var ExtentExtent;
    (function (ExtentExtent) {
        ExtentExtent["Ci"] = "ci";
        ExtentExtent["Iqr"] = "iqr";
        ExtentExtent["MinMax"] = "min-max";
        ExtentExtent["Stderr"] = "stderr";
        ExtentExtent["Stdev"] = "stdev";
    })(ExtentExtent || (ExtentExtent = {}));
    var PointEnum;
    (function (PointEnum) {
        PointEnum["Transparent"] = "transparent";
    })(PointEnum || (PointEnum = {}));
    /**
     * The mark type. This could a primitive mark type
     * (one of `"bar"`, `"circle"`, `"square"`, `"tick"`, `"line"`,
     * `"area"`, `"point"`, `"geoshape"`, `"rule"`, and `"text"`)
     * or a composite mark type (`"boxplot"`, `"errorband"`, `"errorbar"`).
     *
     * All types of primitive marks.
     */
    var Mark;
    (function (Mark) {
        Mark["Area"] = "area";
        Mark["Bar"] = "bar";
        Mark["Boxplot"] = "boxplot";
        Mark["Circle"] = "circle";
        Mark["Errorband"] = "errorband";
        Mark["Errorbar"] = "errorbar";
        Mark["Geoshape"] = "geoshape";
        Mark["Line"] = "line";
        Mark["Point"] = "point";
        Mark["Rect"] = "rect";
        Mark["Rule"] = "rule";
        Mark["Square"] = "square";
        Mark["Text"] = "text";
        Mark["Tick"] = "tick";
        Mark["Trail"] = "trail";
    })(Mark || (Mark = {}));
    /**
     * The cartographic projection to use. This value is case-insensitive, for example
     * `"albers"` and `"Albers"` indicate the same projection type. You can find all valid
     * projection types [in the
     * documentation](https://vega.github.io/vega-lite/docs/projection.html#projection-types).
     *
     * __Default value:__ `mercator`
     */
    var ProjectionType;
    (function (ProjectionType) {
        ProjectionType["Albers"] = "albers";
        ProjectionType["AlbersUsa"] = "albersUsa";
        ProjectionType["AzimuthalEqualArea"] = "azimuthalEqualArea";
        ProjectionType["AzimuthalEquidistant"] = "azimuthalEquidistant";
        ProjectionType["ConicConformal"] = "conicConformal";
        ProjectionType["ConicEqualArea"] = "conicEqualArea";
        ProjectionType["ConicEquidistant"] = "conicEquidistant";
        ProjectionType["Equirectangular"] = "equirectangular";
        ProjectionType["Gnomonic"] = "gnomonic";
        ProjectionType["Identity"] = "identity";
        ProjectionType["Mercator"] = "mercator";
        ProjectionType["Orthographic"] = "orthographic";
        ProjectionType["Stereographic"] = "stereographic";
        ProjectionType["TransverseMercator"] = "transverseMercator";
    })(ProjectionType || (ProjectionType = {}));
    var ResolveMode;
    (function (ResolveMode) {
        ResolveMode["Independent"] = "independent";
        ResolveMode["Shared"] = "shared";
    })(ResolveMode || (ResolveMode = {}));
    /**
     * Establishes a two-way binding between the interval selection and the scales
     * used within the same view. This allows a user to interactively pan and
     * zoom the view.
     */
    var BindEnum;
    (function (BindEnum) {
        BindEnum["Scales"] = "scales";
    })(BindEnum || (BindEnum = {}));
    /**
     * By default, `all` data values are considered to lie within an empty selection.
     * When set to `none`, empty selections contain no data values.
     */
    var Empty;
    (function (Empty) {
        Empty["All"] = "all";
        Empty["None"] = "none";
    })(Empty || (Empty = {}));
    /**
     * With layered and multi-view displays, a strategy that determines how
     * selections' data queries are resolved when applied in a filter transform,
     * conditional encoding rule, or scale domain.
     */
    var SelectionResolution;
    (function (SelectionResolution) {
        SelectionResolution["Global"] = "global";
        SelectionResolution["Intersect"] = "intersect";
        SelectionResolution["Union"] = "union";
    })(SelectionResolution || (SelectionResolution = {}));
    var SelectionDefType;
    (function (SelectionDefType) {
        SelectionDefType["Interval"] = "interval";
        SelectionDefType["Multi"] = "multi";
        SelectionDefType["Single"] = "single";
    })(SelectionDefType || (SelectionDefType = {}));
    /**
     * The reference frame for the anchor position, one of `"bounds"` (to anchor relative to the
     * full bounding box) or `"group"` (to anchor relative to the group width or height).
     */
    var TitleFrame;
    (function (TitleFrame) {
        TitleFrame["Bounds"] = "bounds";
        TitleFrame["Group"] = "group";
    })(TitleFrame || (TitleFrame = {}));
    /**
     * Default title orientation (`"top"`, `"bottom"`, `"left"`, or `"right"`)
     */
    var TitleOrient;
    (function (TitleOrient) {
        TitleOrient["Bottom"] = "bottom";
        TitleOrient["Left"] = "left";
        TitleOrient["None"] = "none";
        TitleOrient["Right"] = "right";
        TitleOrient["Top"] = "top";
    })(TitleOrient || (TitleOrient = {}));
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
    var Op;
    (function (Op) {
        Op["Argmax"] = "argmax";
        Op["Argmin"] = "argmin";
        Op["Average"] = "average";
        Op["Ci0"] = "ci0";
        Op["Ci1"] = "ci1";
        Op["Count"] = "count";
        Op["CumeDist"] = "cume_dist";
        Op["DenseRank"] = "dense_rank";
        Op["Distinct"] = "distinct";
        Op["FirstValue"] = "first_value";
        Op["Lag"] = "lag";
        Op["LastValue"] = "last_value";
        Op["Lead"] = "lead";
        Op["Max"] = "max";
        Op["Mean"] = "mean";
        Op["Median"] = "median";
        Op["Min"] = "min";
        Op["Missing"] = "missing";
        Op["NthValue"] = "nth_value";
        Op["Ntile"] = "ntile";
        Op["PercentRank"] = "percent_rank";
        Op["Q1"] = "q1";
        Op["Q3"] = "q3";
        Op["Rank"] = "rank";
        Op["RowNumber"] = "row_number";
        Op["Stderr"] = "stderr";
        Op["Stdev"] = "stdev";
        Op["Stdevp"] = "stdevp";
        Op["Sum"] = "sum";
        Op["Valid"] = "valid";
        Op["Values"] = "values";
        Op["Variance"] = "variance";
        Op["Variancep"] = "variancep";
    })(Op || (Op = {}));
    var ExtentEnum;
    (function (ExtentEnum) {
        ExtentEnum["MinMax"] = "min-max";
    })(ExtentEnum || (ExtentEnum = {}));
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
    var ErrorbandExtent;
    (function (ErrorbandExtent) {
        ErrorbandExtent["Ci"] = "ci";
        ErrorbandExtent["Iqr"] = "iqr";
        ErrorbandExtent["Stderr"] = "stderr";
        ErrorbandExtent["Stdev"] = "stdev";
    })(ErrorbandExtent || (ErrorbandExtent = {}));
    /**
     * Defines how Vega-Lite generates title for fields.  There are three possible styles:
     * - `"verbal"` (Default) - displays function in a verbal style (e.g., "Sum of field",
     * "Year-month of date", "field (binned)").
     * - `"function"` - displays function using parentheses and capitalized texts (e.g.,
     * "SUM(field)", "YEARMONTH(date)", "BIN(field)").
     * - `"plain"` - displays only the field name without functions (e.g., "field", "date",
     * "field").
     */
    var FieldTitle;
    (function (FieldTitle) {
        FieldTitle["Functional"] = "functional";
        FieldTitle["Plain"] = "plain";
        FieldTitle["Verbal"] = "verbal";
    })(FieldTitle || (FieldTitle = {}));
    var InvalidValues;
    (function (InvalidValues) {
        InvalidValues["Filter"] = "filter";
    })(InvalidValues || (InvalidValues = {}));

    /**
     * This function used to translate the LayerSpec
     * @param layer
     * The layer in ggSpec
     * @param ggSpec
     */
    function TranslateLayer(layer, labels, data, scales) {
        var layerData = data[layer['data']];
        var layerspec = {
            data: {
                name: layer['data']
            },
            mark: TranslateMark(layer['geom']),
            encoding: TranslateEncoding(layer, labels, layerData, scales)
        };
        return layerspec;
    }
    function TranslateMark(geom) {
        var mark;
        if (geom['class'] == 'GeomPoint') {
            mark = Mark.Point;
        }
        else {
            mark = undefined;
        }
        return mark;
    }

    function gg2vl(ggSpec) {
        var vl = {
            schema: 'https://vega.github.io/schema/vega-lite/v3.json',
            title: TranslateTitle(ggSpec['labels']),
            datasets: TranslateDatasets(ggSpec['data']),
            layer: TranslateLayers(ggSpec['layers'], ggSpec['labels'], ggSpec['data'], ggSpec['scales'])
        };
        return vl;
    }
    function TranslateTitle(ggLables) {
        if (!ggLables)
            return undefined;
        if (ggLables['title'])
            return ggLables['title'];
    }
    function TranslateDatasets(ggData) {
        if (!ggData)
            return undefined;
        var n = 0;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (var _dataset in ggData) {
            n++;
        }
        if (n == 0)
            return undefined;
        else {
            var datasets = {};
            for (var dataset in ggData) {
                datasets[dataset] = ggData[dataset]['observations'];
            }
            return datasets;
        }
    }
    function TranslateLayers(ggLayers, ggLables, ggData, ggScales) {
        if (!ggLayers)
            return undefined;
        var n = 0;
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        for (var _layer in ggLayers) {
            n++;
        }
        if (n == 0)
            return undefined;
        else {
            var layers = [];
            for (var _i = 0, ggLayers_1 = ggLayers; _i < ggLayers_1.length; _i++) {
                var layer = ggLayers_1[_i];
                layers.push(TranslateLayer(layer, ggLables, ggData, ggScales));
            }
            return layers;
        }
    }
    /**
     * This function remove empty object in the vlSpec
     * @param obj
     *
     */
    function removeEmpty(obj) {
        if (!(obj != null && typeof obj === 'object'))
            return;
        Object.keys(obj).forEach(function (key) {
            if (obj[key] && typeof obj[key] === 'object') {
                if (Object.keys(obj[key]).length === 0) {
                    delete obj[key];
                    return;
                }
                removeEmpty(obj[key]);
                if (Object.keys(obj[key]).length === 0) {
                    delete obj[key];
                    return;
                }
            }
            else if (obj[key] === null) {
                delete obj[key];
                return;
            }
        });
    }

    exports.gg2vl = gg2vl;
    exports.removeEmpty = removeEmpty;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ggvega.js.map
