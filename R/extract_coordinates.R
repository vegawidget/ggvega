#' Extract coordinates
#'
#' This extracts the `coordinates` element of the ggplot object.
#'
#' At present, it collects only the `class`, which will support the
#' default case of `CoordCartesian`.
#'
#' @param coordinates_plt ggproto object with S3 class `coord`
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
coordinates <- function (coordinates_plt, ...) {
  UseMethod("coordinates")
}

coordinates.default <- function(coordinates_plt, ...) {
  stop(
    glue::glue(
      "coordinates class `{first_class(coordinates_plt)}` not supported"
    )
  )
}

coordinates.CoordCartesian <- function(coordinates_plt, ...) {

  class <- first_class(coordinates_plt)

  # throw error if this is not the first class
  if (!identical(class, "CoordCartesian")) {
    coordinates.default(coordinates_plt, ...)
  }

  list(class = class)
}

coordinates.CoordFlip <- function(coordinates_plt, ...) {

  class <- first_class(coordinates_plt)

  list(class = class)
}


