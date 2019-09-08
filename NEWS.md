# ggvega  0.0.0 (development version) 

* Added an option to `as_vegaspec()`, `single_view` to indicate to collapse a single-layer ggplot2 object into a single-view Vega-Lite specification. This makes it easier to add selections and conditional encodings using {vlbuildr} (#70). 

* Added support for `ggplot2::coord_flip()`.

* Added support for basic scatterplots (`ggplot2::geom_point()`), not faceted.

* Added a `NEWS.md` file to track changes to the package.
