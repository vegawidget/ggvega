#' Get path to example-file from development
#'
#' @inherit gg_example_path params return
#' @param type `character`, indicates which directory to use.
#'   Default `"ggplot2"`
#'
#' @return TODO
#'
#' @keywords internal
#' @export
#'
example_path_dev <- function(example = NULL,
                             type = c("ggplot2", "ggspec", "vega-lite")) {

  # determine directory
  dir <- example_dir_dev(type = type)

  # determine names
  example_names <- example_names_dev(type = type)

  # if example NULL, message names, return NULL
  if (is.null(example)) {
    message(glue::glue_collapse(example_names, sep = "\t"))
    return (invisible(NULL))
  }

  # if example not example_names, error then message names
  if (!example %in% example_names) {
    message(glue::glue_collapse(example_names, sep = "\t"))
    stop(glue::glue("example name not found: {example}"))
  }

  # return path to example
  path <- fs::path_join(c(dir, glue::glue("{example}.R")))

  path
}

#' @rdname example_path_dev
#' @export
#'
example_names_dev <- function(type = c("ggplot2", "ggspec", "vega-lite")) {

  if (!requireNamespace("here", quietly = TRUE)) {
    stop("need {stringr} package")
  }

  dir <- example_dir_dev(type = type)

  # get all the R files in the direcory
  filenames <- fs::dir_ls(dir, regexp = "[.]R$")

  # get the basename only
  filenames <- basename(filenames)

  # strip out the .R
  filenames <- stringr::str_replace(filenames, "[.]R$", "")

  filenames
}

#' @rdname example_path_dev
#' @export
#'
example_dir_dev <- function(type = c("ggplot2", "ggspec", "vega-lite")) {

  if (!requireNamespace("here", quietly = TRUE)) {
    stop("need {here} package")
  }

  type <- match.arg(type)

  # determine parent directory
  dir <- here::here("data-raw", "examples", type)

  dir
}

#' @rdname example_path_dev
#' @export
#'
gg_example_dev <- function(example) {
  source(example_path_dev(example, type = "ggplot2"))$value
}

#' De-factor and transpose data frame
#'
#' This is a bit duplicative - it's systactic sugar to
#' help with the galleries.
#'
#' @param x `data.frame`
#'
#' @return `list`
#'
#' @keywords internal
#' @export
#'
flip <- function(x) {

  # change factor to character
  x <- purrr::map_if(x, is.factor, as.character)

  # transpose
  x <- purrr::transpose(x)

  x
}

#' Truncate data in ggspec
#'
#' @param ggspec, ggspec (does this have an S3 class?)
#'
#' @return modified copy of `ggspec`
#'
#' @keywords internal
#' @export
#'
truncate_data_ggspec <- function(ggspec) {

  truncate_observations <- function(x) {
    if ("observations" %in% names(x)) {
      x$observations <- list(x$observations[[1]])
    }

    x
  }

  # truncate datasets
  ggspec$data <-
    purrr::map(ggspec$data, truncate_observations)

  ggspec
}

#' Truncate data in vegaspec
#'
#' @param vegaspec, vegaspec (does this have an S3 class?)
#'
#' @return modified copy of `vegaspec`
#'
#' @keywords internal
#' @export
#'
truncate_data_vegaspec <- function(vegaspec) {

  # truncate datasets
  vegaspec$datasets <-
    purrr::map(vegaspec$datasets, ~list(.x[[1]]))

  vegaspec
}

