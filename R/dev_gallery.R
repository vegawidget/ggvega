#' Create a markdown code-block from a ggplot2 example
#'
#' @inheritParams dev_example_path
#' @param width `integer` width of VL chart (px.)
#' @param height `integer` height of VL chart (px.)
#'
#' @return `glue::glue()` object
#'
#' @keywords internal
#' @export
#'
dev_gg_codeblock <- function(example) {

  if (!requireNamespace("readr", quietly = TRUE)) {
    stop("need {readr} package")
  }

  filename <- dev_example_path(example, type = "ggplot")
  text <- readr::read_lines(filename)

  code_block <- as_codeblock(text)

  code_block
}

#' @rdname dev_gg_codeblock
#'
#' @keywords internal
#' @export
#'
dev_gg_gallery <- function(example, width = NULL, height = NULL) {

  width <- width %||% 300
  height <- height %||% 300

  if (!requireNamespace("htmltools", quietly = TRUE)) {
    stop("need {htmltools} package")
  }

  tags <- htmltools::tags

  # knitr directory
  dir_files <-
    glue::glue("{tools::file_path_sans_ext(knitr::current_input())}_files")

  file_gg <- fs::path_join(c(dir_files, glue::glue("{example}-gg.png")))
  file_vl <- fs::path_join(c(dir_files, glue::glue("{example}-vl.svg")))

  fs::dir_create(dir_files)

  suppressMessages(
    ggplot2::ggsave(
      file_gg,
      plot = gg_example(example),
      device = "png",
      width = 5,
      height = 4,
      units = "in"
    )
  )

  vl <- dev_example(example, "vegaspec")
  vl$width <- width
  vl$height <- height

  vw_write_svg(vl, path = file_vl)

  # ggplot and vegaspec rendered
  div <- tags$div(
    tags$table(
      tags$tr(
        tags$td(
          tags$img(src = file_gg),
          style = "width:50%; border-width: 0px;"
        ),
        tags$td(
          tags$img(src = file_vl),
          style = "width:50%; border-width: 0px;"
        ),
        style = "border-width: 0px;"
      )
    )
  )

  print(div)

  # JSON spec for ggspec & vegaspec
  ggspec_json <-
    source(dev_example_path(example, "ggspec"))$value %>%
    truncate_data_ggspec() %>%
    to_json() %>%
    as.character()

  vegaspec_json <-
    source(dev_example_path(example, "vegaspec"))$value %>%
    truncate_data_vegaspec() %>%
    to_json() %>%
    as.character()

  div <-
    tags$div(
      tags$details(
        tags$summary("JSON specifications"),
        tags$table(
          tags$thead(
            tags$tr(
              tags$td(
                "ggspec",
                style = "width:50%; border-width: 0px;"
              ),
              tags$td(
                "vegaspec",
                style = "width:50%; border-width: 0px;"
              ),
              style = "border-width: 0px;"
            )
          ),
          tags$tbody(
            tags$tr(
              tags$td(
                paste0("\n\n```json\n", ggspec_json, "\n```\n"),
                style = "border-width: 0px; vertical-align: top;"
              ),
              tags$td(
                paste0("\n\n```json\n", vegaspec_json, "\n```\n"),
                style = "border-width: 0px; vertical-align: top;"
              ),
              style = "border-width: 0px;"
            )
          )
        )
      )
    )

  print(div)

  invisible(NULL)
}


as_codeblock <- function(text) {

  # remove comments that appear on lines by themselves
  text <- remove_comments(text)

  text <- glue::glue_collapse(c("```r", text, "```", ""), sep = "\n")

  text
}

remove_comments <- function(text) {

  if (!requireNamespace("stringr", quietly = TRUE)) {
    stop("need {stringr} package")
  }

  # replace all comment lines with empty strings
  text <- stringr::str_replace(text, "^\\s*#.*", "")

  # remove empty strings
  text <- purrr::discard(text, ~identical(.x, ""))

  text
}


