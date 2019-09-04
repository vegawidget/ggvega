#' Extract coordinates
#'
#' This extracts the `coordinates` element of the ggplot object.
#'
#' At present, it collects only the `class`, which will support the
#' default case of `CoordCartesian`.
#'
#' @param geom ggproto object with S3 class `Geom`
#' @param geom_params `list()`
#'
#' @return named `list` with element `class`
#' @noRd
#'
#' @examples
#' library(ggplot2)
#' p <- ggplot(data = iris)
#' p <- p + geom_point(aes(x = Petal.Width, y = Petal.Length))
#'
#' coordinates(p$coordinates)
#'
geom_set <- function (geom, geom_params, ...) {
  UseMethod("geom_set")
}

geom_set.default <- function(geom, geom_params, ...) {
  stop(
    glue::glue(
      "geom class `{first_class(geom)}` not supported"
    )
  )
}

geom_set.GeomPoint <- function(geom, geom_params, ...) {

  if (!is.null(geom_params$not_supported)) {
    warning()
  }

  list(
    geom = list(class = "something"),
    geom_params = list()
  )
}
