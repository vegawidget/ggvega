
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

The goal of **ggvega** is to translate a ggplot2 object to a Vega-Lite
specification.

``` r
library(ggvega)
#> Welcome to ggvega; this package is not yet fully functional, and is under active development.
library(ggplot2)

p <- 
  ggplot(iris) + 
  geom_point(aes(x = Petal.Width, y = Petal.Length, colour = Species))

ggspec<-gg2spec(p)

ct <- V8::v8()

ct$source(system.file("js/underscore.js", package="V8"))
```

## test

    library(ggvega)
    library(ggplot2)
    
    p <- 
      ggplot(iris) + 
      geom_point(aes(x = Petal.Width, y = Petal.Length, colour = Species))
    
    as_vegaspec(p)

### Important Note

This package is in an *extremely* experimental state, under *very*
active development.

At present, we can translate:

  - `geom_point()`
  - aesthetics: `x`, `y`, `colour`
  - unit-plots; no facetting.

We have plans to expand this capability; presently, we are working out a
system to add new capabilities quickly and reliably.

## Installation

You can install the development version from
[GitHub](https://github.com/) with:

``` r
# install.packages("devtools")
devtools::install_github("vegawidget/ggvega")
```
