

.param_spec <- function(ignore = NULL, support = NULL) {

  param_spec <- list(ignore = "na.rm", support = NULL)
  param_spec <- .add_ignore(param_spec, ignore)
  param_spec <- .add_support(param_spec, support)

  param_spec
}

.add_ignore <- function(param_spec, ignore, ...) {
  ignore <- c(ignore, ...)
  param_spec$ignore <- unique(param_spec$ignore, ignore)

  param_spec
}

.add_support <- function(param_spec, support, ...) {
  support <- c(support, ...)
  param_spec$support <- unique(param_spec$support, support)

  param_spec
}

.validate_params <- function(params, param_spec, class) {

  # need to actually do something here

  params
}

