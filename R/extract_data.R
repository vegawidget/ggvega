#' Extract data (intermediate step)
#'
#' Creates an intermediate-form for the data.
#'
#' This returns a named list of dataset objects, each object has elements:
#'
#' - `metadata`: named `list`, one element per variable
#' - `variables`: the `data.frame` itself
#' - `hash`: hash of `variables`
#'
#' @param data_plt A `list` of data from the ggplot object.
#' @param layers_plt A `list` of layers from the ggplot object.
#'
#' @return named `list`, each of which has elements:
#'  `metadata`, `variables`, `hash`
#' @keywords internal
#' @export
#'
#' @examples
#' library(ggplot2)
#' p <- ggplot(data = iris)
#' p <- p + geom_point(aes(x = Petal.Width, y = Petal.Length))
#'
#' data_int_demo <- data_int(p$data, p$layers)
#'
data_int <- function(data_plt, layers_plt) {

  # join together default data and layer data
  data_all <- append(list(data_plt), purrr::map(layers_plt, purrr::pluck, "data"))

  # format the lists of data
  data_all <- purrr::map(data_all, format_data_int)

  # name datasets
  names(data_all) <-
    purrr::map_chr(
      seq_along(data_all),
      ~glue::glue("data-{sprintf('%02i', .x - 1L)}")
    )

  # remove NULL entries
  data_all <- purrr::discard(data_all, is.null)

  data_all
}

#' Format the data
#'
#' @param dat `data.frame` to be formatted.
#'
#' @return `list` with elements `metadata`, `variables`, `hash`
#' @noRd
#'
#' @examples
#' format_data_int(iris)
#'
format_data_int <- function(dat) {

  if (is.waive(dat) || is.null(dat)) {
    return(NULL)
  }

  list(
    metadata = purrr::pluck(dat) %>% purrr::map(create_meta),
    variables = dat,
    hash = digest::digest(dat)
  )
}

#' Determine R variable-type
#'
#' We recognize:
#' - `numeric`
#' - `character`
#' - `factor`
#' - `ordered`
#' - `Date`
#' - `POSIXct`
#'
#' @param x A variable (column in a data frame)
#'
#' @return `character` R variable-type
#' @noRd
#'
#' @examples
#' type_vl(1)
#' type_vl(1L)
#' type_vl(System.time())
#'
type_r <- function(x) {

  # perhaps all these if-else are going too far...

  if (is.numeric(x)) {
    return("numeric")
  }

  if (is.character(x)) {
    return("character")
  }

  if (inherits(x, "POSIXct")) {
    return( "POSIXct")
  }

  if (inherits(x, "Date")) {
    return("Date")
  }

  if (is.ordered(x)) {
    return("ordered")
  }

  if (is.factor(x)) {
    return("factor")
  }

  # TODO: return error?

}

#' Determine Vega-Lite variable-type
#'
#' @param type_r `character` (scalar) R variable-type
#'
#' @return `character` Vega-Lite variable-type
#' @noRd
#'
#' @examples
#' type_vl("numeric")
#'
type_vl <- function(type_r) {

  key <- list(
    numeric = "quantitative",
    character = "nominal",
    factor = "nominal",
    ordered = "ordinal",
    Date = "temporal",
    POSIXct = "temporal"
  )

  key[[type_r]]
}

#' Create metadata
#'
#' @param x A variable (column in a data frame)
#'
#' @return `list` with element `type`, and optionally `levels` or `timezone`
#' @noRd
#'
#' @examples
#' create_meta
#'
create_meta <- function(x) {

  type_r_local <- type_r(x)
  type_vl_local <- type_vl(type_r_local)

  meta <- list(type = type_vl_local)

  if (type_r_local %in% c("factor", "ordered")) {
    meta[["levels"]] <- levels(x)
  }

  if (identical(type_r_local, "POSIXct")) {
    meta[["timezone"]] <- attr(x, "tz")
  }

  meta
}


#' Format data into final data form
#'
#' @param dat one data frame from `data_int`
#'
#' @return
#' @export
#'
#' @examples
format_data_spec <- function(dat) {
  list(
    metadata = dat$metadata,
    observations = purrr::transpose(dat$variables)
  )
}

#' Transform data from intermediate form to final form
#'
#' @param int_data An intermediate-form for the data created by `data_int()`
#'
#' @return
#' @export
#'
#' @examples
data_spc <- function(int_data) {
  purrr::map(int_data, format_data_spec)
}
