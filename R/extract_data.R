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

#' Name the dataset
#'
#' @param dat Dataset to be named.
#'
#' @return
#' @export
#'
#' @examples
name_data <- function(dat) {
  # check for any matching hashsums
}

#' Format the data
#'
#' @param dat Dataset to be formatted.
#'
#' @return
#' @export
#'
#' @examples
format_data_int <- function(dat) {
  if(is.waive(dat) || is.null(dat)) return(NULL)
  else {
    list(
      metadata = purrr::pluck(dat) %>% purrr::map(create_meta_levels),
      variables = dat,
      hash = digest::digest(dat)
    )
  }
}

#' Determine variable type
#'
#' @param type Column of data.
#'
#' @return
#' @export
#'
#' @examples
case_type_vl <- function(type) {
  dplyr::case_when(
    type == "Date" | type == "POSIXct" ~ "temporal",
    type == "factor" | type == "character" | type == "logical" ~ "nominal",
    type == "ordered" ~ "ordinal",
    type == "numeric" ~ "quantitative"
  )
}

#' Create metadata
#'
#' @param dat Column of data for which metadata should be created.
#'
#' @return
#' @export
#'
#' @examples
create_meta_levels <- function(dat){
  type = class(dat)
  if(type == "factor" | type == "ordered") {
    meta <- list(
      type = case_type_vl(type),
      levels = levels(dat)
    )
  } else if (type == "Date" | type == "POSIXct") {
    meta <- list(
      type = case_type_vl(type),
      timezone = NULL # use lubridate::tz or ??
    )
  } else {
    meta <- list(
      type = case_type_vl(type)
    )
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
