# ggvega  0.0.0 (development version) 

* Introduce `ggvega_examples`: a list of example-objects. Each object has a `plot`, `code`, and `as_vegaspec()`

* Update to Vega-Lite 4.0.2. (#79)

* Internal change to use "modern" V8 engine and Vega-Lite classes directly. (#77)

* Added support for `geom_bar()` and `stat_count()`. (#42, #44)

* Added an option to `as_vegaspec()`, `single_view` to indicate to collapse a single-layer ggplot2 object into a single-view Vega-Lite specification. This makes it easier to add selections and conditional encodings using {vlbuildr}. (#70)

* Added support for `ggplot2::coord_flip()`.

* Added support for basic scatterplots (`ggplot2::geom_point()`), not faceted.

* Added a `NEWS.md` file to track changes to the package.
