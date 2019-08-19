#' Determine if two lists are spec-equivalent
#'
#' In a JSON spec, order does not matter when testing the equivalence of
#' objects (`{}`), but it *does* matter when testing the equivalence of
#' arrays (`[]`). In R, this would mean that order does not matter
#' for unnamed objects, but does matter for named objects; where an object
#' can be a list or a vector.
#'
#' In this context, *normalize* means to reorder any named objects into
#' alphabetical order, and to do so recursively.
#'
#' @param x, `object`
#'
#' @return `x` normalized version of the object
#' @noRd
#'
normalize <- function(x) {

  if (length(x) <= 1L) {
    return(x)
  }

  names_x <- names(x)

  # if named, alphabetize
  if (!is.null(names_x)) {
    x <- x[order(names(x))]
  }

  # call on each element of x
  x <- purrr::map(x, normalize)

  x
}

dir_test_examples <- function() {

  if (!requireNamespace("here", quietly = TRUE)) {
    stop("need {here} package")
  }

  here::here("tests", "testthat", "examples")
}

ggspec_test <- function(example, normalize = TRUE,
                        dir = dir_test_examples()) {

  path <- fs::path_join(c(dir, "ggplot", glue::glue("{example}.R")))
  gg <- source(path)$value

  ggspec <- gg2spec(gg)

  if (normalize) {
    ggspec <- normalize(ggspec)
  }

  ggspec
}

ggspec_ref <- function(example, normalize = TRUE,
                      dir = dir_test_examples()) {

  path <- fs::path_join(c(dir, "ggspec", glue::glue("{example}.gg.json")))
  ggspec <- from_json(path)

  if (normalize) {
    ggspec <- normalize(ggspec)
  }

  ggspec
}

vegaspec_test <- function(example, normalize = TRUE,
                          dir = dir_test_examples()) {

  ggspec <- ggspec_ref(example, normalize, dir)
  vegaspec <- spec2vl(ggspec)

  if (normalize) {
    vegaspec <- normalize(vegaspec)
  }

  vegaspec
}

vegaspec_ref <- function(example, normalize = TRUE,
                         dir = dir_test_examples()) {

  path <- fs::path_join(c(dir, "vegaspec", glue::glue("{example}.vl.json")))
  vegaspec <- from_json(path)

  if (normalize) {
    vegaspec <- normalize(vegaspec)
  }

  vegaspec
}
