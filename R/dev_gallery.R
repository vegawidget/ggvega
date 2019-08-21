#' Create a markdown code-block from a ggplot2 example
#'
#' @inheritParams dev_example_path
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
dev_gg_gallery <- function(example) {

  if (!requireNamespace("htmltools", quietly = TRUE)) {
    stop("need {htmltools} package")
  }

  tags <- htmltools::tags

  # ggplot code block
  print(dev_gg_codeblock(example))

  file_gg <- tempfile()
  suppressMessages(
    ggsave(
      file_gg,
      plot = gg_example(example),
      device = "png",
      width = 5,
      height = 4,
      units = "in"
    )
  )

  gg_img <- base64enc::dataURI(file = file_gg, mime = "image/png")
  unlink(file_gg)

  file_vl <- tempfile()
  vl <- dev_example("scatterplot-iris", "vegaspec")

  vw_write_png(vl, path = file_vl, scale = 2)

  vl_img <- base64enc::dataURI(file = file_vl, mime = "image/png")
  unlink(file_vl)

  # vl_img <- vw_to_svg(vl)

  # ggplot and vegaspec rendered
  div <- tags$div(
    tags$table(
      tags$tr(
        tags$td(
          tags$img(src = gg_img),
          style = "width:50%; border-width: 0px;"
        ),
        tags$td(
          tags$img(src = vl_img),
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


