#' Translate a ggspec
#'
#' @param ggspec `list`, ggspec object
#'
#' @inherit vegawidget::as_vegaspec return
#'
#' @export
#'
ggvega <- function(ggspec) {
  ct <- V8::v8()

  ct$source(system.file("js", "ggvega.js", package = "ggvega"))

  ct$assign("ggspec", jsonlite::toJSON(ggspec,auto_unbox = TRUE))

  ct$assign("ggspec",V8::JS("JSON.parse(ggspec)"))

  vlspec<-ct$get(V8::JS("ggvega.gg2vl(ggspec)"))

  vegawidget::as_vegaspec(vlspec)
}
