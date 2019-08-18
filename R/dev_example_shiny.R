#' Compare development-examples
#'
#' @keywords internal
#' @export
#'
dev_example_shiny <- function(example = NULL,
                              type = c("ggspec", "vegaspec")) {

}




#' Examine a list-based structure
#'
#' @keywords internal
#' @export
#'
examine <- function(listdata, ...) {

  listviewer::reactjson(
    listdata,
    displayDataTypes = FALSE,
    name = NULL,
    ...
  )

}
