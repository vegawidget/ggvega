Compiling full examples
================

The purpose of this document is to compile all the examples in
`inst/examples/full/` from the `ggplot` directory to the `ggspec` and
`vega-lite` directories.

``` r
library("conflicted")
library("magrittr")
library("ggplot2")
library("ggvega")
```

    ## Welcome to ggvega; this package is not yet fully functional, and is under active development.

``` r
library("purrr")
library("readr")
library("glue")
library("here")
```

    ## here() starts at /Users/sesa19001/Documents/repos/public/vegawidget/ggvega

``` r
library("fs")
```

``` r
to_json <- ggvega:::to_json
from_json <- ggvega:::from_json
```

``` r
names <- gg_example_name_dev()

names 
```

    ## [1] "barchart-flipped-mpg" "barchart-mpg"         "barchart-stacked-mpg"
    ## [4] "scatterplot-iris"

## ggspec

Create clean ggspec
directory:

``` r
gs_dir <- path_join(c(ggvega:::.gg_example_root_dev(), "full", "ggspec"))
gs_dir
```

    ## /Users/sesa19001/Documents/repos/public/vegawidget/ggvega/data-raw/examples/full/ggspec

``` r
if (dir_exists(gs_dir)) {
  dir_delete(gs_dir)  
}

dir_create(gs_dir)
```

Define functions to write out ggspec:

``` r
path_ggspec <- function(name) {
  path_join(c(gs_dir, glue("{name}.gs.json")))
}

write_ggspec_json <- function(name) {
  name %>%
  gg_example_dev() %>%
  gg2spec() %>%
  to_json() %>%
  write_file(path_ggspec(name))   
}
```

``` r
walk(names, write_ggspec_json)
```

Show what we translated:

``` r
dir_ls(gs_dir) %>% basename()
```

    ## [1] "barchart-flipped-mpg.gs.json" "barchart-mpg.gs.json"        
    ## [3] "barchart-stacked-mpg.gs.json" "scatterplot-iris.gs.json"

## Vega-Lite

Create clean Vega-Lite
directory:

``` r
vl_dir <- path_join(c(ggvega:::.gg_example_root_dev(), "full", "vega-lite"))
vl_dir
```

    ## /Users/sesa19001/Documents/repos/public/vegawidget/ggvega/data-raw/examples/full/vega-lite

``` r
if (dir_exists(vl_dir)) {
  dir_delete(vl_dir)  
}

dir_create(vl_dir)
```

Define functions to write out vegaspec:

``` r
path_vegaspec <- function(name) {
  path_join(c(vl_dir, glue("{name}.vl.json")))
}

write_vegaspec_json <- function(name) {
  name %>%
  gg_example_dev() %>%
  as_vegaspec() %>%
  vw_as_json() %>%
  write_file(path_vegaspec(name))   
}
```

``` r
names_exclude <- c(
  "barchart-mpg",
  "barchart-flipped-mpg",
  "barchart-stacked-mpg"
)

names_vl <- names[!names %in% names_exclude]

walk(names_vl, write_vegaspec_json)
```

Show what we translated:

``` r
dir_ls(vl_dir) %>% basename()
```

    ## [1] "scatterplot-iris.vl.json"
