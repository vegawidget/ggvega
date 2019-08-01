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
