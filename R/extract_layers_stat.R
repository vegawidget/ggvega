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

  # if (!is.null(stat_params$not_supported)) {
  #   warning()
  # }

  list(
    stat = list(
      class = first_class(stat),
      default_aes = stat$default_aes %>% purrr::map(get_mappings)
      ),
    stat_params = stat_params
  )
}

stat_set.StatBin <- function(stat, stat_params, ...) {

  if (!is.null(stat_params$binwidth)) {
    warning("stat parameter `binwidth` not supported")
  }

  if (!is.null(stat_params$bins)) {
    warning("stat parameter `bins` not supported")
  }

  if (!is.null(stat_params$center)) {
    warning("stat parameter `center` not supported")
  }

  if (!is.null(stat_params$boundary)) {
    warning("stat parameter `boundary` not supported")
  }

  if (!is.null(stat_params$breaks)) {
    warning("stat parameter `breaks` not supported")
  }

  if (!is.null(stat_params$closed)) {
    warning("stat parameter `closed` not supported")
  }

  if (!is.null(stat_params$pad)) {
    warning("stat parameter `pad` not supported")
  }

  list(
    stat = list(
      class = first_class(stat),
      default_aes = stat$default_aes %>% purrr::map(get_mappings)
    ),
    stat_params = stat_params
  )
}

stat_set.StatCount <- function(stat, stat_params, ...) {

  if (!is.null(stat_params$width)) {
    warning("stat parameter `width` not supported")
  }

  list(
    stat = list(
      class = first_class(stat),
      default_aes = stat$default_aes %>% purrr::map(get_mappings)
    ),
    stat_params = stat_params
  )
}
