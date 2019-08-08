#' Extract mappings
#'
#' Extract necessary information from the ggplot mappings.
#'
#' @param mapping_plt A `list` of defined aesthetics from the ggplot object.
#'
#' @return `list` of encodings with their field descriptions
#' @noRd
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
  if(is_data_variable(aes)) {
    return(translate_data_variable(aes))
  }
  if(is_stat_operation(aes)) {
    return(translate_stat_operation(aes))
  }
  list(value = aes)
}



#' Determine if aesthetic is a variable
#'
#'
#' @param x An aesthetic
#'
#' @return `logical`
#' @noRd
#'
#' @examples
#' is_data_variable(1)
#'
is_data_variable <- function(x) {

  if (!rlang::is_formula(x)) {
    return(FALSE)
  }

  expr <- rlang::quo_get_expr(x)

  if (!identical(length(expr), 1L)) {
    return(FALSE)
  }

  return(TRUE) ### will need to do something else here
}


#' Determine if aesthetic is a stat operation
#'
#'
#' @param x An aesthetic
#'
#' @return `logical`
#' @noRd
is_stat_operation <- function(x) {

  if (!rlang::is_formula(x)) {
    return(FALSE)
  }

  expr <- rlang::quo_get_expr(x)

  if (!identical(length(expr), 2L)) {
    return(FALSE)
  }

  identical(as.character(expr[[1]]), "stat")
}


#' Helper function for `get_mappings()` used for stats
#'
#'
#' @param x An aesthetic
#'
#' @return `list` of mapping specifications
#' @noRd
translate_stat_operation <- function(x) {

  expr <- rlang::quo_get_expr(x)

  list(stat_operation = as.character(expr[[2]]))
}

#' Helper function for `get_mappings()` used for variables
#'
#'
#' @param x An aesthetic
#'
#' @return `list` of mapping specifications
#' @noRd
translate_data_variable <- function(x) {

  expr <- rlang::quo_get_expr(x)

  list(field = as.character(expr))
}

