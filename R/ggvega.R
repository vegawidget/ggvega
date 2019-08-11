#' Translate ggplot2 object to vegaspec
#'
#' @inheritParams vegawidget::as_vegaspec
#'
#' @inherit vegawidget::as_vegaspec return
#'
#' @export
#'
as_vegaspec.gg <- function(spec, ...) {

  # convert to ggspec
  ggspec <- gg2spec(spec)

  # convert to vegaspec
  spec2vl(ggspec)
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
    coordinates = coordinates(plt$coordinates)
  )
}

#' Translate ggspec object to vegaspec
#'
#' @param ggspec `list`, a ggspec object
#'
#' @inherit vegawidget::as_vegaspec return
#'
#' @export
#' @keywords internal
#'
spec2vl <- function(ggspec) {

  ct <- V8::v8()

  ct$source(system.file("js", "ggvega.js", package = "ggvega"))

  ct$assign("ggspec", jsonlite::toJSON(ggspec, auto_unbox = TRUE, null = "null"))

  ct$assign("ggspec",V8::JS("JSON.parse(ggspec)"))

  vlspec <-
    ct$get(
      V8::JS("ggvega.gs2vl(ggspec)"),
      simplifyVector = FALSE,
      simplifyDataFrame = FALSE
    )

  vegawidget::as_vegaspec(vlspec)
}
