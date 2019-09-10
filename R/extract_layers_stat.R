#' Extract stat
#'
#' This extracts the `stat` element of the ggplot object layer.
#'
#' At present, it collects everything from `stat_params` and
#' the `class` and the `default_aes` from `stat`.
#'
#' @param stat ggproto object with S3 class `Stat`
#' @param stat_params `list()`
#'
#' @return named `list`
#' @noRd
#'
#' @examples
#' library(ggplot2)
#' p <- ggplot(data = iris)
#' p <- p + geom_point(aes(x = Petal.Width, y = Petal.Length))
#'
#' stat_set(p$layers[[1]]$stat, p$layers[[1]]$stat_params)
#'
stat_set <- function (stat, stat_params, ...) {
  UseMethod("stat_set")
}

stat_set.default <- function(stat, stat_params, ...) {
  stop(
    glue::glue(
      "stat class `{first_class(stat)}` not supported"
    )
  )
}

stat_set.StatIdentity <- function(stat, stat_params, ...) {

  param_spec <- .param_spec()

  .stat_set(stat, stat_params, param_spec)
}

stat_set.StatCount <- function(stat, stat_params, ...) {

  param_spec <- .param_spec()

  .stat_set(stat, stat_params, param_spec)
}

# internal function to create the geom_set
# - this might become its own class-constructor
.stat_set <- function(stat, stat_params, param_spec) {

  class <- first_class(stat)

  # validate and sanitize stat_params (will issue warnings as needed)
  stat_params <- .validate_params(stat_params, param_spec, class)

  list(
    stat = list(
      class = first_class(stat),
      default_aes = stat$default_aes %>% purrr::map(get_mappings)
    ),
    stat_params = stat_params
  )
}
