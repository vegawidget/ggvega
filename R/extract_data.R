#' Extract data (intermediate step)
#'
#' Creates an intermediate-form for the data.
#'
#' @param data_plt A `list` of data from the ggplot object.
#' @param layers_plt A `list` of layers from the ggplot object.
#'
#' @return `list` of named datasets
#' @export
#'
#' @examples
#' library(ggplot2)
#' p <- ggplot(data = iris)
#' p <- p + geom_point(aes(x = Petal.Width, y = Petal.Length))
#' data_int(p$data, p$layers)
data_int <- function(data_plt, layers_plt) {
  #join together default data and layer data
  data_all <- append(list(data_plt), purrr::map(layers_plt, purrr::pluck, "data"))

  #format the lists of data
  data_all <- purrr::map(data_all, format_data_int)

  # how to name the datasets??

  # remove NULL entries
  data_all <- purrr::discard(data_all, is.null)




  data_all

}


name_data <- function(dat) {
  # check for any matching hashsums
}

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

case_type_vl <- function(type) {
  dplyr::case_when(
    type == "Date" | type == "POSIXct" ~ "temporal",
    type == "factor" | type == "character" | type == "logical" ~ "nominal",
    type == "ordered" ~ "ordinal",
    type == "numeric" ~ "quantitative"
  )
}

create_meta_levels <- function(dat){
  type = class(dat)
  if(type == "factor" | type == "ordered") {
    meta <- list(
      type = case_type_vl(type),
      levels = levels(dat)
    )
  } else if (type == "date" | type == "POSIXct") {
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


format_data_spec <- function(dat) {
  list(
    metadata = dat$metadata,
    observations = purrr::transpose(dat$variables)
  )
}

data_spc <- function(data_int) {
  purrr::map(data_int, format_data_spec)
}
