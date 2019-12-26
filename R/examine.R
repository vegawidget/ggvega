ggv_examine <- function(listdata, ...) {

  if (!requireNamespace("listviewer", quietly = TRUE)) {
    stop("need {listviewer} package")
  }

  listviewer::reactjson(
    listdata,
    displayDataTypes = FALSE,
    displayObjectSize = FALSE,
    name = NULL,
    ...
  )

}
