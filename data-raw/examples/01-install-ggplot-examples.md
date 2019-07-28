Install ggplot examples
================

``` r
library("conflicted")
library("magrittr")
library("ggvega")
```

    ## Welcome to ggvega; this package is not yet fully functional, and is under active development.

``` r
library("purrr")
library("here")
```

    ## here() starts at /Users/sesa19001/Documents/repos/public/vegawidget/ggvega

``` r
library("fs")
```

First, let’s create a clean ggplot2-examples directory in `inst`:

``` r
target_dir <- here("inst", "examples", "ggplot2")
target_dir
```

    ## [1] "/Users/sesa19001/Documents/repos/public/vegawidget/ggvega/inst/examples/ggplot2"

``` r
if (dir_exists(target_dir)) {
  dir_delete(target_dir)  
}

dir_create(target_dir)
```

Next, let’s get the names of all the examples in the dev directory.

``` r
names <- gg_example_name_dev()
names
```

    ## [1] "barchart-flipped-mpg" "barchart-mpg"         "barchart-stacked-mpg"
    ## [4] "scatterplot-iris"

TODO: create an exclusion list, for examples that are not quite ready
yet.

Create a function that copies a dev example to be used in the package
itself:

``` r
copy_examples <- 
  . %>%
  fs::file_copy(path = gg_example_path_dev(.), new_path = target_dir)
```

Walk (map) over that function to copy all the files:

``` r
purrr::walk(names, copy_examples)
```

Show what we copied:

``` r
dir_ls(target_dir) %>% basename()
```

    ## [1] "barchart-flipped-mpg.R" "barchart-mpg.R"        
    ## [3] "barchart-stacked-mpg.R" "scatterplot-iris.R"
