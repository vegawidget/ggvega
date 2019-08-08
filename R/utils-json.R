# These settings seem to work to translate to/from "Vega-Lite"-flavored JSON,
# they are the same as used in vegawidget
#

to_json <- function(x, pretty = TRUE) {
  jsonlite::toJSON(x, auto_unbox = TRUE, null = "null", pretty = pretty)
}

from_json <- function(x) {
  jsonlite::fromJSON(x, simplifyVector = TRUE, simplifyDataFrame = FALSE)
}
