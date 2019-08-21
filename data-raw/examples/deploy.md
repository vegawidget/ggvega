Deploying examples
================

The motivation for this effort is to do **verification** and
**validation**. The [definition provided by Barry
Boehm](https://en.wikipedia.org/wiki/Verification_and_validation#Overview)
is useful:

  - **verification** asks the question “are we building the thing
    right?”

  - **validation** asks the question “are building the right thing?”

Accordingly, the purpose of this document is to manange the deployment
of examples to two places:

  - a testing directory, where we **verify** that each of the ggplot
    examples creates the ggspec and vegaspec we expect.

  - a package-examples directory, containing examples of ggplots that we
    claim can be translated. These examples would be the source of a
    pkgdown gallery. This gallery will also serve as a visual
    regression, to **validate** that each translation appears as we
    expect.

A third use of these examples is to create development-documentation.

Our examples appear in the contexts of ggplot2, ggspec, and Vega-Lite.
In the interests of consistency, the directory for a particular type of
example is named after the type of object it creates:

    ggplot/
      scatterplot-iris.R
      ...
    ggspec/ 
      scatterplot-iris.R
      ...
    vegaspec/
      scatterplot-iris.R
      ...

Each example consists of the R source code used to create the particular
object. We, the developers, create these examples by hand, as we specify
new features.

In the R code, each example is referred-to using the `example` keyword.
Above, `example` is `"scatterplot-iris"`.

``` r
library("conflicted")
library("ggplot2")
library("vegawidget")
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
library("readr")
library("fs")
```

``` r
source_dir <- here("data-raw", "examples")
```

## Testing examples

This is where we build our testing examples, which are created in
`tests/testthat/examples/`:

    ggplot/
      scatterplot-iris.R
      ...
    ggspec/ 
      scatterplot-iris.gg.json
      ...
    vegaspec/
      scatterplot-iris.vl.json
      ...

Here, we make a few changes to the original examples:

  - all the data in the examples are truncated. By this, we mean that
    each data frame is each example is modified so that it keeps only
    its first row. The size of the data-frame has no effect on the rest
    of the specification. By truncating the data frame, can make the
    test lighte, and each of the examples more-understandable to humans
    (less JSON to deal with).

  - the ggspec and vegaspec examples are stored as JSON, rather than as
    the source-code used to create them.

As described in at the top of this document, when we develop new cases
we will manually create new examples for ggspec and vegaspec to show how
the feature is to be translated. Because we will develop the examples
before we develop the capability to make the translation, we will want
to skip certain examples from being tested.

As such, we have two collections:

  - `skip_ggspec`: examples for which we do not yet have a `ggspec`
    translation
  - `skip_vegaspec`: examples for which we do not yet have a `vegaspec`
    translation

Examples that appear in a skip collection are not copied into that
testing
directory.

``` r
# Use this chunk to moderate which examples are copied into the testing directories.

skip_ggspec <- c()

skip_vegaspec <- c()

# if something is skipped for ggspec, it is also skipped for vegaspec
skip_vegaspec <- c(skip_ggspec, skip_vegaspec)
```

As above, we create an empty directory to contain the testing examples.

``` r
test_example_dir <- here("tests", "testthat", "examples")
test_example_dir
```

    ## [1] "/Users/sesa19001/Documents/repos/public/vegawidget/ggvega/tests/testthat/examples"

``` r
if (dir_exists(test_example_dir)) {
  dir_delete(test_example_dir)  
}

dir_create(test_example_dir)
dir_create(path_join(c(test_example_dir, "ggplot")))
dir_create(path_join(c(test_example_dir, "ggspec")))
dir_create(path_join(c(test_example_dir, "vegaspec")))
```

### ggplot

Next, we need a function that will:

  - read a file into lines
  - for each line, substitute the `data` argument with `head(data, 1)`
  - write those lines to a new file, in the test directory

<!-- end list -->

``` r
deploy_test_ggplot <- function(example, dir) {
  
  path <- dev_example_path(example, "ggplot")
  new_path <- 
    fs::path_join(c(dir, "ggplot", glue::glue("{example}.R")))
  
  content <- readr::read_lines(path)
  content <- purrr::map_chr(content, ggvega:::head_data)

  readr::write_lines(content, path = new_path)
}
```

``` r
examples <- dev_example_names("ggplot")

walk(examples, deploy_test_ggplot, dir = test_example_dir)
```

### ggspec

Given a ggspec `example` and a directory to put it, we want a function
that will:

  - evaluate the ggspec example
  - truncate the datasets
  - write it out as JSON to the directory

<!-- end list -->

``` r
deploy_test_ggspec <- function(example, dir) {

  path <- dev_example_path(example, "ggspec")
  new_path <- 
    fs::path_join(c(dir, "ggspec", glue::glue("{example}.gg.json")))
  
  ggspec <- source(path)$value
  
  # truncate data
  ggspec <- truncate_data_ggspec(ggspec)
  
  ggspec_json <- ggvega:::to_json(ggspec) 
  
  readr::write_file(ggspec_json, new_path)
}
```

``` r
examples <- dev_example_names("ggspec")
examples <- examples[!examples %in% skip_ggspec]

walk(examples, deploy_test_ggspec, dir = test_example_dir)
```

### vegaspec

Given a vegaspec `example` and a directory to put it, we want a function
that will:

  - evaluate the vegaspec example
  - truncate the datasets
  - write it out as JSON to the directory

<!-- end list -->

``` r
deploy_test_vegaspec <- function(example, dir) {

  path <- dev_example_path(example, "vegaspec")
  new_path <- 
    fs::path_join(c(dir, "vegaspec", glue::glue("{example}.vl.json")))
  
  vegaspec <- source(path)$value
  
  # truncate data
  vegaspec <- truncate_data_vegaspec(vegaspec)
  
  vegaspec_json <- ggvega:::to_json(vegaspec) 
  
  readr::write_file(vegaspec_json, new_path)
}
```

``` r
examples <- dev_example_names("vegaspec")
examples <- examples[!examples %in% skip_vegaspec]

walk(examples, deploy_test_vegaspec, dir = test_example_dir)
```

## Package examples

First, we create an empty directory to contain our package examples.

``` r
pkgex_dir <- here("inst", "examples", "ggplot")
pkgex_dir
```

    ## [1] "/Users/sesa19001/Documents/repos/public/vegawidget/ggvega/inst/examples/ggplot"

``` r
if (dir_exists(pkgex_dir)) {
  dir_delete(pkgex_dir)  
}

dir_create(pkgex_dir)
```

Next, we copy all the examples from the source directory to the
package-example directory - but only those examples that are tested as
vegaspecs.

``` r
copy <- function(example) {
  filename <- glue::glue("{example}.R")
  path_old <- fs::path_join(c(source_dir, "ggplot", filename))
  path_new <- fs::path_join(c(pkgex_dir, filename))
  
  fs::file_copy(path_old, path_new)
}

walk(examples, copy)
```

Finally, to confirm, we list the files in the package-source directory

``` r
dir_ls(pkgex_dir) %>% basename()
```

    ## [1] "scat-scale-name-iris.R" "scatterplot-iris.R"

## Adding a new example

TDDOD: Some words here on what goes into a new example, and how it
becomes “official”.
