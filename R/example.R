#' Use ggplot examples
#'
#' This package has a series of example files that hightlight the capabilities
#' of ggvega. As more capabilities are developed, more examples will be added.
#'
#' @param example `character`, name of the example,
#'   `NULL` prints message containing names of all examples
#'
#' @return \describe{
#'   \item{`gg_example_names()`}{`character`, names of examples}
#'   \item{`gg_example()`}{S3 object with classes `gg` and `ggplot`;
#'     a ggplot2 object, identified by `example`}
#' }
#'
#' @examples
#'   library("ggplot2")
#'   gg_example_names()
#'   gg_example_path("scatterplot-iris")
#'   gg_example("scatterplot-iris")
#'   gg_example("scatterplot-iris") %>% as_vegaspec()
#' @export
#'
gg_example_names <- function() {
  .example_names(type = "ggplot", source = "pkg")
}

#' @rdname gg_example_names
#' @export
#'
gg_example <- function(example = NULL) {
  .example_obj(example, type = "ggplot", source = "pkg")
}

#' Use ggplot examples
#'
#' @inheritParams gg_example_names
#'
#' @return S3 object with class `fs_path` (wraps `character`),
#'    path to R file identified by `example`
#'
#' @keywords internal
#' @export
#'
gg_example_path <- function(example = NULL) {

  .example_path(example, type = "ggplot", source = "pkg")
}

#' Use development examples
#'
#' Note that for `dev_translation()`, `type` refers to the type *to* which
#' the translation is made.
#'
#' @inheritParams gg_example_names
#'
#' @return \describe{
#'   \item{`dev_example_names()`}{`character`, names of examples}
#'   \item{`dev_example_path()`}{S3 object with class `fs_path`
#'     (wraps `character`), path to R file identified by `example`}
#'   \item{`dev_example()`}{not type-stable, depending on `type`, returns
#'   either a ggplot object, a ggspec, or a vegaspec}
#' }
#'
#' @keywords internal
#' @export
#'
dev_example_names <- function(type = c("ggplot", "ggspec", "vegaspec")) {
  .example_names(type = type, source = "dev")
}

#' @rdname dev_example_names
#' @keywords internal
#' @export
#'
dev_example_path <- function(example = NULL,
                             type = c("ggplot", "ggspec", "vegaspec")) {

  .example_path(example, type = type, source = "dev")
}

#' @rdname dev_example_names
#' @keywords internal
#' @export
#'
dev_example <- function(example = NULL,
                        type = c("ggplot", "ggspec", "vegaspec")) {

  .example_obj(example, type = type, source = "dev")
}

#' @rdname dev_example_names
#' @keywords internal
#' @export
#'
dev_translation <- function(example = NULL,
                            type = c("ggspec", "vegaspec")) {

  type <- match.arg(type)

  source_type = list(
    ggspec = "ggplot",
    vegaspec = "ggspec"
  )

  source_obj <- dev_example(example, type = source_type[[type]])

  fn_translate <- list(
    ggspec = gg2spec,
    vegaspec = spec2vl
  )

  translation <- fn_translate[[type]](source_obj)

  translation
}


