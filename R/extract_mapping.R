#' Extract mappings
#'
#' Extract necessary information from the ggplot mappings.
#'
#' @param mapping_plt A `list` of defined aesthetics from the ggplot object.
#'
#' @return `list` of encodings with their field descriptions
#' @export
#'
#' @examples
#' library(ggplot2)
#' p <- ggplot(data = iris, aes(x = Petal.Width, y = Petal.Length))
#' p <- p + geom_point()
#' mapping_spc(p$mapping)
mapping_spc <- function(mapping_plt){
   purrr::map(mapping_plt, get_mappings)
}

#' Extract mapping information
#'
#' Extract the field name for the aesthetic
#'
#' @param aes An element from the list of mappings from a single ggplot2 layer object.
#'
#' @return `list` of mapping specifications
#' @noRd
#'
#' @examples
#' library(ggplot2)
#' p <- ggplot(data = iris)
#' p <- p + geom_point(aes(x = Petal.Width, y = Petal.Length))
#' get_mappings(p$layers[[1]]$mapping[[1]])
get_mappings <- function(aes) {
  list(field = as.character(rlang::get_expr(aes))
  )
}
