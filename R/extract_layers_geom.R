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

  # TODO: some code to validate/sanitize geom_params
  # na.rm - should we support?

  param_spec <-
    list(
      na.rm = list(required = FALSE)
    )

  geom_params <- validate_params(geom_params, param_spec)

  .geom_set(geom, geom_params)
}

geom_set.GeomBar <- function(geom, geom_params, ...) {

  # TODO: some code to validate/sanitize geom_params
  # na.rm - should we support?
  # width - not supported

  param_spec <-
    list(
      na.rm = list(required = FALSE)
    )

  geom_params <- validate_params(geom_params, param_spec)

  .geom_set(geom, geom_params)
}

# internal function to create the geom_set
# - this might become its own class-constructor
.geom_set <- function(geom, geom_params) {
  list(
    geom = list(class = first_class(geom)),
    geom_params = geom_params
  )
}

validate_params <- function(params, spec) {

  # need to actually do something here

  params
}
