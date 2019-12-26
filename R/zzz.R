#' Examples
#'
#' @export ggvega_examples
#'
ggvega_examples <- NULL

.onLoad <- function(libname, pkgname) {
  ggvega_examples <<- make_examples()
}

.onAttach <- function(libname, pkgname) {
  packageStartupMessage(
    "Welcome to ggvega; this package is not yet fully functional, and ",
    "is under active development."
  )
}
