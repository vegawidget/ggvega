#' Extract position
#'
#' This extracts information from the `position` element of
#' a ggplot-object layer.
#'
#' @param position ggproto object with S3 class `Position`
#'
#' @return named `list`
#' @noRd
#'
#' @examples
#' library(ggplot2)
#' position(position_stack())
#'
position <- function (position, ...) {
  UseMethod("position")
}

position.default <- function(position, ...) {
  stop(
    glue::glue(
      "stat class `{first_class(position)}` not supported"
    )
  )
}

position.PositionIdentity <- function(position, ...) {
  list(
    class = first_class(position)
  )
}

position.PositionStack <- function(position, ...) {

  # TODO: consider vjust and reverse

  list(
    class = first_class(position)
  )
}

position.PositionFill <- function(position, ...) {

  # TODO: consider vjust and reverse

  list(
    class = first_class(position)
  )
}
