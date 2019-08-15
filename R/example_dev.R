#' Get path to example-file from development
#'
#' @inherit gg_example_path params return
#' @param type `character`, indicates which directory to use.
#'   Default `"ggplot2"`
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


