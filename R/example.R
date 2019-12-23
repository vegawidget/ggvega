#' Use ggplot examples
#'
#' This package has a series of example files that hightlight the capabilities
#' of ggvega. As more capabilities are developed, more examples will be added.
#'
#' @param example `character`, name of the example,
#'   `NULL` prints message containing names of all examples
#'
#' @return \describe{
#'   \item{`ggv_example()`}{S3 object with classes `gg` and `ggplot`;
#'     a ggplot2 object, identified by `example`}
#'   \item{`ggv_example_names()`}{`character`, names of examples}
#'   \item{`ggv_example_path()`}{S3 object with class `fs_path`
#'     (wraps `character`), path to R file identified by `example`}
#' }
#'
#' @examples
#'   library("ggplot2")
#'   ggv_example_names()
#'   ggv_example_path("scatterplot-iris")
#'   ggv_example("scatterplot-iris")
#'   ggv_example("scatterplot-iris") %>% as_vegaspec()
#' @export
#'
ggv_example <- function(example = NULL) {
  .example_obj(example, type = "ggplot", source = "pkg")
}

#' @rdname ggv_example
#' @export
#'
ggv_example_names <- function() {
  .example_names(type = "ggplot", source = "pkg")
}

#' @rdname ggv_example
#' @export
#'
ggv_example_path <- function(example = NULL) {

  .example_path(example, type = "ggplot", source = "pkg")
}

#' Use development examples
#'
#' Note that for `dev_translation()`, `type` refers to the type *to* which
#' the translation is made.
#'
#' @inheritParams ggv_example_names
#'
#' @return \describe{
#'   \item{`ggv_dev_names()`}{`character`, names of examples}
#'   \item{`ggv_dev_path()`}{S3 object with class `fs_path`
#'     (wraps `character`), path to R file identified by `example`}
#'   \item{`ggv_dev()`}{not type-stable, depending on `type`, returns
#'   either a ggplot object, a ggspec, or a vegaspec}
#' }
#'
#' @noRd
#'
ggv_dev <- function(example = NULL,
                    type = c("ggplot", "ggspec", "vegaspec")) {

  .example_obj(example, type = type, source = "dev")
}

#' @rdname ggv_dev
#' @noRd
#'
ggv_dev_names <- function(type = c("ggplot", "ggspec", "vegaspec")) {
  .example_names(type = type, source = "dev")
}

#' @rdname ggv_dev
#' @noRd
#'
ggv_dev_path <- function(example = NULL,
                         type = c("ggplot", "ggspec", "vegaspec")) {

  .example_path(example, type = type, source = "dev")
}


dev_translation <- function(example = NULL,
                            type = c("ggspec", "vegaspec")) {

  type <- match.arg(type)

  source_type = list(
    ggspec = "ggplot",
    vegaspec = "ggspec"
  )

  source_obj <- ggv_dev(example, type = source_type[[type]])

  fn_translate <- list(
    ggspec = gg2spec,
    vegaspec = spec2vl
  )

  translation <- fn_translate[[type]](source_obj)

  translation
}


