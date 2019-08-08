Deploying examples
================

The purpose of this document is to manange the deployment of examples
into a package-examples directory, as well as to deploy cases for
testing.

All of our examples are stored in the `ggplot2` directory. The
package-examples are copied directly from this directory. For the
testing examples, each of the datasets is reduced to keep only its first
row.

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

``` r
source_dir <- here("data-raw", "examples", "ggplot2")
source_files <- fs::dir_ls(source_dir, regexp = "[.]R$")
```

## Package examples

First, we create an empty directory to contain our package examples.

``` r
pkgex_dir <- here("inst", "examples", "ggplot2")
pkgex_dir
```

    ## [1] "/Users/sesa19001/Documents/repos/public/vegawidget/ggvega/inst/examples/ggplot2"

``` r
if (dir_exists(pkgex_dir)) {
  dir_delete(pkgex_dir)  
}

dir_create(pkgex_dir)
```

Next, we copy all the files from the source directory to the
package-example directory:

``` r
walk(source_files, fs::file_copy, new_path = pkgex_dir)
```

Finally, to confirm, we list the files in the package-source directory

``` r
dir_ls(pkgex_dir) %>% basename()
```

    ## [1] "barchart-flipped-mpg.R" "barchart-mpg.R"        
    ## [3] "barchart-stacked-mpg.R" "scatterplot-iris.R"

## Testing examples

As above, we create an empty directory to contain the testing examples.

``` r
testex_dir <- here("tests", "testthat", "examples", "ggplot2")
testex_dir
```

    ## [1] "/Users/sesa19001/Documents/repos/public/vegawidget/ggvega/tests/testthat/examples/ggplot2"

``` r
if (dir_exists(testex_dir)) {
  dir_delete(testex_dir)  
}

dir_create(testex_dir)
```

Next, we need a function that will:

  - read a file into lines
  - for each line, substitute the `data` argument with `head(data, 1)`
  - write those lines to a new file, in the test directory

<!-- end list -->

``` r
transfer_test <- function(path) {
  
  new_path <- fs::path_join(c(testex_dir, basename(path)))
  
  content <- readr::read_lines(path)
  content <- purrr::map_chr(content, ggvega:::head_data)

  readr::write_lines(content, path = new_path)
}
```

``` r
walk(source_files, transfer_test)
```
