.example <- R6::R6Class("ggvega_example",
  public = list(
    initialize = function(path) {
      private$.path = path
    },
    print = function(...) {
      print(self$plot)

      invisible(self)
    },
    as_vegaspec = function(single_view = FALSE, ...) {
      as_vegaspec(self$plot, single_view = single_view)
    }
  ),
  private = list(
    .path = NULL
  ),
  active = list(
    path = function(value) {
      if (!missing(value)) {
        stop("`$path` is read only", call. = FALSE)
      }
      private$.path
    },
    code = function(value) {
      if (!missing(value)) {
        stop("`$code` is read only", call. = FALSE)
      }
      private$.path
    },
    plot = function(value) {
      if (!missing(value)) {
        stop("`$plot` is read only", call. = FALSE)
      }
      source(private$.code)$value
    }
  )
)
