#' Extract geom
#'
#' This extracts the `geom` element of the ggplot object layer.
#'
#' At present, it collects everything from `geom_params` and
#' only the `class` from `geom`.
#'
#' @param geom ggproto object with S3 class `Geom`
#' @param geom_params `list()`
#'
#' @return named `list`
#' @noRd
#'
#' @examples
#' library(ggplot2)
#' p <- ggplot(data = iris)
#' p <- p + geom_point(aes(x = Petal.Width, y = Petal.Length))
#'
#' geom_set(p$layers[[1]]$geom, p$layers[[1]]$geom_params)
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

  # if (!is.null(geom_params$not_supported)) {
  #   warning()
  # }

  class <- first_class(geom)

  list(
    geom = list(class = class),
    geom_params = geom_params
  )
}

geom_set.GeomBar <- function(geom, geom_params, ...) {

  if (!is.null(geom_params$width)) {
    warning("geom parameter `width` not supported")
  }

  class <- first_class(geom)

  list(
    geom = list(class = class),
    geom_params = geom_params
  )
}

geom_set.GeomBar <- function(geom, geom_params, ...) {

  if (!is.null(geom_params$width)) {
    warning("geom parameter `width` not supported")
  }

  if (!is.null(geom_params$binwidth)) {
    warning("geom parameter `binwidth` not supported")
  }

  if (!is.null(geom_params$bins)) {
    warning("geom parameter `bins` not supported")
  }

  if (!is.null(geom_params$pad)) {
    warning("geom parameter `pad` not supported")
  }

  class <- first_class(geom)

  list(
    geom = list(class = class),
    geom_params = geom_params
  )
}

