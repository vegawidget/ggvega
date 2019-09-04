#' Extract facet
#'
#' This extracts the `coordinates` element of the ggplot object.
#'
#' At present, it collects only the `class`, which will support the
#' default case of `FacetNull`.
#'
#' @param facet_plt ggproto object with S3 class `FacetNull`
#'
#' @return named `list` with element `class`
#' @noRd
#'
#' @examples
#' library(ggplot2)
#' p <- ggplot(data = iris)
#' p <- p + geom_point(aes(x = Petal.Width, y = Petal.Length))
#'
#' facet(p$facet)
#'
facet <- function (facet_plt, ...) {
  UseMethod("facet")
}

facet.default <- function(facet_plt, ...) {

  stop(
    glue::glue(
      "facet class `{first_class(facet_plt)}` not supported"
    )
  )
}

facet.FacetNull <- function(facet_plt, ...) {

  class <- first_class(facet_plt)

  list(class = class)
}


