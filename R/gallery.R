#' Create a markdown code-block from a ggplot2 example
#'
#' @inheritParams example_path_dev
#'
#' @return `glue::glue()` object
#'
#' @keywords internal
#' @export
#'
gg_dev_codeblock <- function(example) {

  if (!requireNamespace("readr", quietly = TRUE)) {
    stop("need {readr} package")
  }

  filename <- example_path_dev(example)
  text <- readr::read_lines(filename)

  code_block <- as_codeblock(text)

  code_block
}

#' @rdname gg_dev_codeblock
#' @keywords internal
#' @export
#'
gg_dev_gallery <- function(example) {

  if (!requireNamespace("htmltools", quietly = TRUE)) {
    stop("need {htmltools} package")
  }

  print(gg_dev_codeblock(example))

  ggspec_json <-
    source(example_path_dev(example, "ggspec"))$value %>%
    truncate_data_ggspec() %>%
    to_json() %>%
    as.character()

  vegaspec_json <-
    source(example_path_dev(example, "vega-lite"))$value %>%
    truncate_data_vegaspec() %>%
    to_json() %>%
    as.character()

  div <-
    htmltools::div(
      htmltools::tags$details(
        htmltools::tags$summary("JSON specifications"),
        htmltools::tags$table(
          style = "table-layout: fixed; width: 100%;",
          htmltools::tags$tbody(
            htmltools::tags$tr(
              htmltools::tags$td(
                "ggspec",
                paste0("\n\n```json\n", ggspec_json, "\n```\n"),
                style = "border-width: 0px; vertical-align: top;"
              ),
              htmltools::tags$td(
                "vegaspec",
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


