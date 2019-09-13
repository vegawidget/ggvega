#' Translate ggplot2 object to vegaspec
#'
#' @details
#' To return a single-view spec, rather than a single-layer spec, use
#' `single_view = TRUE`. Of course, this is effective only for ggplot objects
#' that have exactly one layer.
#'
#' @inheritParams vegawidget::as_vegaspec
#' @inheritParams spec2vl
#'
#' @inherit vegawidget::as_vegaspec return
#'
#' @export
#'
as_vegaspec.gg <- function(spec, single_view = FALSE, ...) {

  # convert to ggspec
  ggspec <- gg2spec(spec)

  # convert to vegaspec
  spec2vl(ggspec, single_view)
}

#' Translate ggplot2 object into a ggspec
#'
#' @param plt A ggplot2 object.
#'
#' @return `list`, a ggspec list.
#' @export
#'
#' @examples
#' library(ggplot2)
#' p <- ggplot(data = iris)
#' p <- p + geom_point(aes(x = Petal.Width, y = Petal.Length))
#' gg2spec(p)
gg2spec <- function(plt){
  int_data <- data_int(plt$data, plt$layers)
  int_map <- mapping_spc(plt$mapping)

  list(
    data = data_spc(int_data),
    layers = layer_spc(plt$layers, int_data, int_map),
    scales = scale_spc(plt$scales$scales),
    labels = plt$labels,
    coordinates = coordinates(plt$coordinates),
    facet = facet(plt$facet)
  )
}

#' Translate ggspec object to vegaspec
#'
#' @param ggspec `list`, a ggspec object
#' @param single_view `boolean`, indicates to collapse an unfaceted
#'   single-layer spec to a single-view spec
#'
#' @inherit vegawidget::as_vegaspec return
#'
#' @export
#'
spec2vl <- function(ggspec, single_view = FALSE) {

  ct <- V8::v8()

  ct$source(system.file("js", "ggvega.js", package = "ggvega"))

  ct$assign("ggspec", jsonlite::toJSON(ggspec, auto_unbox = TRUE, null = "null"))

  ct$assign("ggspec", V8::JS("JSON.parse(ggspec)"))

  singleView <- ifelse(single_view, "true", "false")

  vlspec <-
    ct$get(
      V8::JS(glue::glue("ggvega.spec2vl(ggspec, {singleView})")),
      simplifyVector = FALSE,
      simplifyDataFrame = FALSE
    )

  vegawidget::as_vegaspec(vlspec)
}
