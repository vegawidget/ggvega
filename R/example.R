#' Use ggplot examples
#'
#' This package has a series of example files that hightlight the capabilities
#' of ggvega. As more capabilities are developed, more examples will be added.
#'
#' @param example `character`, name of the example,
#'   `NULL` prints message containing names of all examples
#'
#' @return \describe{
#'   \item{`gg_example_name()`}{`character`, names of examples}
#'   \item{`gg_example_path()`}{S3 object with class `fs_path`
#'     (wraps `character`), path to R file identified by `example`}
#'   \item{`gg_example()`}{S3 object with classes `gg` and `ggplot`;
#'     a ggplot2 object, identified by `example`}
#' }
#'
#' @examples
#'   library("ggplot2")
#'   gg_example_name()
#'   gg_example_path("scatterplot-iris")
#'   gg_example("scatterplot-iris")
#'   gg_example("scatterplot-iris") %>% as_vegaspec()
#' @export
#'
gg_example_name <- function() {
  .gg_example_name(dir = .gg_example_dir())
}

#' @rdname gg_example_name
#' @export
#'
gg_example_path <- function(example = NULL) {
  .gg_example_path(example, dir = .gg_example_dir())
}

#' @rdname gg_example_name
#' @export
#'
gg_example <- function(example = NULL) {

  content <- gg_example_path(example)

  if (is.null(content)) {
    return(invisible(NULL))
  }

  src <- source(content)

  src$value
}

.gg_example_path <- function(example = NULL, dir) {

  if (is.null(example)) {
    # print filenames in directory
    f <- .gg_example_name(dir)
    f <- glue::glue_collapse(f, sep = "\t")

    message(f)

    return(invisible(NULL))
  }

  path <- fs::path_join(c(dir, glue::glue("{example}.R")))

  # check that path exists
  if (!fs::file_exists(path)) {
    stop(glue::glue("File `{example}.R` not found in example directory"))
  }

  path

}

.gg_example_name <- function(dir) {

  f <- fs::dir_ls(dir, regexp = "[.]R$")
  f <- basename(f)
  f <- tools::file_path_sans_ext(f)

  f
}

# internal functions to identify the example-directories

.gg_example_dir <- function() {
  system.file("examples", "ggplot2", package = "ggvega")
}




