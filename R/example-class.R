ggvega_example <- R6::R6Class("ggvega_example",
  public = list(
    initialize = function(example) {
      private$.name = example
      private$.path = ggvega:::ggv_example_path(example)
    },
    print = function(...) {
      print(self$plot)

      invisible(self)
    },
    as_vegaspec = function(single_view = FALSE) {
      as_vegaspec(self$plot, single_view = single_view)
    },
    display = function(arrange = c("side", "top")) {

      vegaspec <- self$as_vegaspec()
      arrange <- match.arg(arrange)

      # verify that we are knitting
      if (!requireNamespace("knitr", quietly = TRUE) ||
          is.null(knitr::current_input())) {

        stop(
          "this function can be called only from a knitr session",
          call. = FALSE
        )
      }

      dir_files <-
        glue::glue("{tools::file_path_sans_ext(knitr::current_input())}_files")

      fs::dir_create(dir_files)
      file_root <- fs::path_join(c(dir_files, private$.name))


      # twistie with ggplot2 code
      print(
        htmltools::tags$details(
          style = "margin-bottom: 10px;",
          htmltools::tags$summary("ggplot2 code"),
          htmltools::tags$div(
            style = "margin-top: 10px;",
            as_codeblock(self$code)
          )
        )
      )

      # comparison (returns div)
      htmltools::div(
        cmpre(
          self$plot,
          vegaspec,
          arrange = arrange,
          file_root = file_root
        )

      # twistie with vegaspec
        # htmltools::tags$details(
        #   style = "margin-bottom: 10px;",
        #   htmltools::tags$summary("Vega-Lite specification"),
        #   htmltools::div(
        #     style = "margin-top: 10px;",
        #     vegawidget::vw_examine(vegaspec, mode = "view", width = "100%")
        #   )
        #
        # )
      )
    }
  ),
  private = list(
    .path = NULL,
    .name = NULL
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

      code <- readLines(self$path)
      code <- remove_comments(code)
      code <- glue::glue_collapse(code, sep = "\n")

    },
    plot = function(value) {
      if (!missing(value)) {
        stop("`$plot` is read only", call. = FALSE)
      }
      source(self$path)$value
    }
  )
)

make_examples <- function() {
  ex <- purrr::map(ggv_example_names(), ggvega_example$new)
  names(ex) <- ggv_example_names()

  ex
}

