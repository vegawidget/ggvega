"%||%" <- function(a, b) {
  if (!is.null(a)) a else b
}

"%|W|%" <- function(a, b) {
  if (!is.waive(a)) a else b
}

is.waive <- function(x) inherits(x, "waiver")

empty_named_list <- {

  result <- list()
  names(result) <- character(0)

  result
}

first_class <- function(x) {
  class(x)[[1]]
}
