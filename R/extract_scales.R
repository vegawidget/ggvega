#' Extract scales
#'
#' @param scale_plt A `list` of scales from the ggplot object.
#'
#' @return A `list` of scales that differ from the default scales.
#' @noRd
#'
#' @examples
#' library(ggplot2)
#' p <- ggplot(data = iris)
#' p <- p + geom_point(aes(x = Petal.Width, y = Petal.Length))
#' scale_spc(p$scales$scales)
scale_spc <- function(scale_plt) {
  purrr::map(scale_plt, get_scales)
}



#' Get scales
#'
#' Extract necessary scales information from a single scales list. Is called by `scales_spc()`.`
#'
#' @param scale A single ggplot2 scale object.
#'
#' @return A `list` of scale specifications for scales that differ from the default scales.
#' @noRd
#'
#' @examples
#' library(ggplot2)
#' p <- ggplot(data = iris)
#' p <- p + geom_point(aes(x = Petal.Width, y = Petal.Length))
#' p <- p + scale_y_log10()
#' get_scales(p$scales$scales[[1]])
get_scales <- function(scale) {

  pluck_scale <- purrr::partial(purrr::pluck, .x = scale)

  list(
    name = pluck_scale("name"),
    class = pluck_scale(class, 1),
    aesthetics = pluck_scale("aesthetics", 1),
    transform = list(
      name = pluck_scale("trans", "name")
    )
  )
}
