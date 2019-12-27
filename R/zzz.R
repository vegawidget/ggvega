#' Examples
#'
#' A list of example objects. In addition to showing the types of plots we can
#' translate, we use these examples in our test suite and in our documentation
#' to make sure things continue to work as we expect.
#'
#' This is a named list; each name refers to an example. Each element is an R6
#' object with accessors:
#'
#' \describe{
#'   \item{`$plot`}{returns the ggplot object.}
#'   \item{`$path`}{returns the path to the R file containing ggplot2 code.}
#'   \item{`$code`}{returns the code that builds the ggplot object.}
#'   \item{`$as_vegaspec()`}{returns the Vega-Lite translation.}
#'   \item{`$display()`}{used in documentation, works only with knitr.}
#' }
#'
#' The naming convention is to start with the geom being used, e.g. `point`, `bar`.
#' You can use `names(ggvega_examples)` to return the names of all the examples.
#' Because this is a list of R6 objects, in the RStudio IDE you can use
#' autocomplete with the `$` operator.
#'
#' @examples
#'   library("ggplot2")
#'   # print method
#'   # ggvega_examples$point_iris$plot returns the ggplot object
#'   ggvega_examples$point_iris
#'   # return the ggplot code
#'   ggvega_examples$point_iris$code
#'   # translate to Vega-Lite
#'   ggvega_examples$point_iris$as_vegaspec()
#'
#' @export ggvega_examples
#'
ggvega_examples <- NULL

.onLoad <- function(libname, pkgname) {
  ggvega_examples <<- make_examples()
}

.onAttach <- function(libname, pkgname) {
  packageStartupMessage(
    "Welcome to ggvega; this package is not yet fully functional, and ",
    "is under active development."
  )
}
