#' Get path to ggplot example
#'
#' This function can be useful if you are developing this package, e.g.
#' testing or writing out the visual regressions.
#'
#' @param example `character`, name of the example,
#'   `NULL` prints message containing names of all examples
#'
#' @return S3 object with class `fs_path` (wraps `character`),
#'   path to R file identified by `example`
#'
#' @keywords internal
#' @export
#'
gg_example_file_dev <- function(example = NULL) {

  if (!requireNamespace("here", quietly = TRUE)) {
    stop("`here` package is needed to run this function")
  }

  dir <- here::here("inst", "examples", "ggplot2")

  .gg_example_file(example, dir)
}

#' Get path to ggplot example
#'
#' This function is useful to inspect the code used to
#' create the ggplto2 examples.
#'
#' @inheritParams gg_example_file_dev
#' @inherit gg_example_file_dev return
#'
#' @examples
#'   gg_example_file("scatterplot-iris")
#' @export
#'
gg_example_file <- function(example = NULL) {

  dir <- system.file("examples", "ggplot2", package = "ggvega")

  .gg_example_file(example, dir)
}

#' Run ggplot2 example
#'
#' Use this function to run a ggplot2 example.
#'
#' @inheritParams gg_example_file_dev
#' @return S3 object with classes `gg` and `ggplot`; a ggplot2 object
#'
#' @examples
#'   library("ggplot2")
#'   gg_example("scatterplot-iris")
#' @export
#'
gg_example <- function(example = NULL) {

  src <- source(gg_example_file(example))

  src$value
}

#' Run ggplot2 example
#'
#' This is a developer-facing version of [gg_example()];
#' it can be useful if you are testing or writing out
#' visual regressions.
#'
#' @inheritParams gg_example_file_dev
#' @return S3 object with classes `gg` and `ggplot`; a ggplot2 object
#'
#' @keywords internal
#' @export
#'
gg_example_dev <- function(example = NULL) {

  src <- source(gg_example_file_dev(example))

  src$value
}

.gg_example_file <- function(example = NULL, dir) {

  if (is.null(example)) {
    # print filenames in directory
    f <- fs::dir_ls(dir, regexp = "[.]R$")
    f <- basename(f)
    f <- tools::file_path_sans_ext(f)
    f <- glue::glue_collapse(f, sep = " ")

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
