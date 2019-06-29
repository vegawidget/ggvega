#' Translate ggspec object to vegaspec
#'
#' @param ggspec `list`, a ggspec object
#'
#' @inherit vegawidget::as_vegaspec return
#'
#' @export
#' @keywords internal
#'
ggvega <- function(ggspec) {

  ct <- V8::v8()

  ct$source(system.file("js", "ggvega.js", package = "ggvega"))

  ct$assign("ggspec", jsonlite::toJSON(ggspec, auto_unbox = TRUE))

  ct$assign("ggspec",V8::JS("JSON.parse(ggspec)"))

  vlspec <- ct$get(V8::JS("ggvega.gg2vl(ggspec)"))

  vegawidget::as_vegaspec(vlspec)
}


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
  ggvega(ggspec)
}
