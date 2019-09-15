ggv_examine <- function(listdata, ...) {

  listviewer::reactjson(
    listdata,
    displayDataTypes = FALSE,
    name = NULL,
    ...
  )

}
