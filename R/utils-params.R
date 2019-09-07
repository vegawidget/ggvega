#' Specify params to ignore or support
#'
#' This function would be used to sanitize a list of `geom_params` or
#' `stat_params`.
#'
#' There are certain elements that we want to ignore. Because `na.rm`
#' does not affect the plot (it provides or suppresses a warning), we will
#' ignore it by default.
#'
#' We will support elements only explicitly.
#'
#' @param support `character`, names of parameters that we can support
#' @param ignore `character`, names of paramaters that we will silently ignore
#'
#' @return named `list()` with elements `support` and `ignore`.
#' @noRd
#'
.param_spec <- function(support = NULL, ignore = NULL) {

  param_spec <- list(support = NULL, ignore = "na.rm")
  param_spec <- .add_ignore(param_spec, ignore)
  param_spec <- .add_support(param_spec, support)

  param_spec
}

.add_ignore <- function(param_spec, ignore, ...) {
  ignore <- c(ignore, ...)
  param_spec$ignore <- unique(c(param_spec$ignore, ignore))

  param_spec
}

.add_support <- function(param_spec, support, ...) {
  support <- c(support, ...)
  param_spec$support <- unique(c(param_spec$support, support))

  param_spec
}

#' Sanitize a list of parameters
#'
#' Returns a list of containting only supported parameters, issues a
#' warning for any parameters that are not supported and not ignored.
#'
#' @param params named `list()` of parameters, likely `geom_params`
#'   or `stat_params`
#' @param param_spec named `list()` with elements `support` and `ignore`
#' @param class `character` name of the (geom or stat) class, used in warning
#'
#' @return modified copy of `params`
#' @noRd
#'
.validate_params <- function(params, param_spec, class) {

  # discard elements where value is NULL or NA
  params <- purrr::discard(params, ~ is.null(.x) || is.na(.x))

  names_params <- names(params)

  names_legal <- unique(c(param_spec$support, param_spec$ignore))

  # these elements get warnings
  names_warning <- names_params[!names_params %in% names_legal]

  # issue warnings
  purrr::walk(
    names_warning,
    function(.x) {
      warn <-
        glue::glue("ggvega: {class} parameter `{.x}` not supported, ignoring.")
      warning(warn, call. = FALSE)
    }
  )

  # these elements are kept
  # TODO: do not keep ignored names (will require changing ggschema, ggvega, tests)
  names_keep <- names_params[names_params %in% names_legal]

  params[names_keep]
}

