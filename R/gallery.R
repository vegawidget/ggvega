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

as_codeblock <- function(text) {

  # remove comments that appear on lines by themselves
  text <- remove_comments(text)

  text <- glue::glue_collapse(c("```r", text, "```"), sep = "\n")

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


