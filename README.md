
<!-- README.md is generated from README.Rmd. Please edit that file -->

# ggvega

<!-- badges: start -->

[![CRAN
status](https://www.r-pkg.org/badges/version/ggvega)](https://cran.r-project.org/package=ggvega)
[![Lifecycle:
experimental](https://img.shields.io/badge/lifecycle-experimental-orange.svg)](https://www.tidyverse.org/lifecycle/#experimental)
[![Travis build
status](https://travis-ci.org/vegawidget/ggvega.svg?branch=master)](https://travis-ci.org/vegawidget/ggvega)
<!-- badges: end -->

The goal of ggvega is to translate ggplot2 object to vega-lite spec.

``` r
library(ggvega)
library(ggplot2)

p <- ggplot(iris) + 
  geom_point(aes(x = Sepal.Length, y = Sepal.Width, color = Species))

as_vegaspec(p)
#> [1] "Error printing vegawidget in non-HTML format:"                                                                                                                           
#> [2] "Node is required for vw_to_svg(spec, width = width, height = height, ...)\nPlease install node from https://nodejs.org/en/download/ and ensure that node is on the PATH."
```

## Installation

You can install the development version from
[GitHub](https://github.com/) with:

``` r
# install.packages("devtools")
devtools::install_github("vegawidget/ggvega")
```
