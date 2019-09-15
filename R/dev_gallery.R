#' Create a markdown code-block from a ggplot2 example
#'
#' @inheritParams dev_example_path
#' @param arrange `character`, arrangement of plots
#' @param vl_width `integer`, width of VL chart (px.)
#' @param vl_height `integer`, height of VL chart (px.)
#' @param gg_height `integer`, width of GG chart (px.)
#' @param gg_width `integer`, height of GG chart (px.)
#'
#' @return `glue::glue()` object
#'
#' @keywords internal
#' @export
#'
ggv_example_codeblock <- function(example) {

  if (!requireNamespace("readr", quietly = TRUE)) {
    stop("need {readr} package")
  }

  filename <- dev_example_path(example, type = "ggplot")
  text <- readr::read_lines(filename)

  code_block <- as_codeblock(text)

  code_block
}

#' @rdname ggv_example_codeblock
#'
#' @keywords internal
#' @export
#'
ggv_dev_display <- function(example, arrange = c("side", "top"),
                            vl_width = 275, vl_height = 275,
                            gg_width = 400, gg_height = 320) {

  # note to include stacked arrangement of plots

  if (!requireNamespace("htmltools", quietly = TRUE)) {
    stop("need {htmltools} package")
  }

  tags <- htmltools::tags

  print(ggv_example_codeblock(example))

  # knitr directory
  dir_files <-
    glue::glue("{tools::file_path_sans_ext(knitr::current_input())}_files")

  file_gg <- fs::path_join(c(dir_files, glue::glue("{example}-gg.png")))
  file_vl <- fs::path_join(c(dir_files, glue::glue("{example}-vl.svg")))

  fs::dir_create(dir_files)

  suppressMessages(
    ggplot2::ggsave(
      file_gg,
      plot = dev_example(example, "ggplot"),
      device = "png",
      width = 5,
      height = 5 * gg_height / gg_width,
      units = "in"
    )
  )

  vl <- dev_example(example, "vegaspec")
  vl$width <- vl_width
  vl$height <- vl_height

  vw_write_svg(vl, path = file_vl)

  div <-
    tags$div(
      tags$table(
        tags$tr(
          tags$td(
            tags$img(src = file_gg, width = gg_width),
            style = "border-width: 0px;"
          ),
          tags$td(
            tags$img(src = file_vl),
            style = "border-width: 0px;"
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


