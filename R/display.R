#' Display examples
#'
#' @param example `character` or `ggplot2` object, if `character`, uses
#'   `ggv_example()` to retrieve a ggplot2 object.
#' @param arrange `character`, arrangement of plots
#' @param vl_width `integer`, width of VL chart (px.)
#' @param vl_height `integer`, height of VL chart (px.)
#' @param gg_height `integer`, width of GG chart (px.)
#' @param gg_width `integer`, height of GG chart (px.)
#'
#' @return Invisible `NULL`, called for side-effects
#'
#' @keywords internal
#' @export
#'
ggv_dev_display <- function(example, arrange = c("side", "top"), ...) {


  # note to include stacked arrangement of plots

  tags <- htmltools::tags

  if (!requireNamespace("htmltools", quietly = TRUE)) {
    stop("need {htmltools} package")
  }

  if (!requireNamespace("readr", quietly = TRUE)) {
    stop("need {readr} package")
  }

  # code block
  filename <- ggv_dev_path(example, type = "ggplot")
  text <- readr::read_lines(filename)

  code_block <- as_codeblock(text)


  # comparison
  plt <- ggv_dev(example, "ggplot")
  spec <- ggv_dev(example, "vegaspec")

  # knitr directory
  dir_files <-
    glue::glue("{tools::file_path_sans_ext(knitr::current_input())}_files")

  fs::dir_create(dir_files)
  file_root <- fs::path_join(c(dir_files, example))

  div_compare <- cmpre(plt, spec, file_root = file_root, use_svg = TRUE, ...)

  # JSON spec for ggspec & vegaspec
  ggspec_json <-
    source(ggv_dev_path(example, "ggspec"))$value %>%
    truncate_data_ggspec() %>%
    to_json() %>%
    as.character()

  vegaspec_json <-
    source(ggv_dev_path(example, "vegaspec"))$value %>%
    truncate_data_vegaspec() %>%
    to_json() %>%
    as.character()

  div_json <-
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

  # print
  print(code_block)
  print(div_compare)
  print(div_json)

  invisible(NULL)
}

#' @rdname ggv_dev_display
#'
#' @keywords internal
#' @export
#'
ggv_example_display <- function(example, arrange = c("side", "top"),
                                vl_width = 275, vl_height = 275,
                                gg_width = 400, gg_height = 320) {

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

cmpre <- function(plt, spec, file_root, arrange = c("side", "top"),
                  use_svg = FALSE, gg_width = NULL, gg_height = NULL,
                  vl_width = NULL, vl_height = NULL) {

  arrange <- match.arg(arrange)

  # dimensions
  vl_width <- vl_width %||% 275
  vl_height <- vl_height %||% 275

  gg_width <- gg_width %||% 400
  gg_height <- gg_height %||% 320

  tags <- htmltools::tags

  # filesystem
  file_gg <- glue::glue("{file_root}-gg.png")
  file_vl <- glue::glue("{file_root}-vl.svg")

  suppressMessages(
    ggplot2::ggsave(
      file_gg,
      plot = plt,
      device = "png",
      width = 5,
      height = 5 * gg_height / gg_width,
      units = "in"
    )
  )

  spec$width <- vl_width
  spec$height <- vl_height

  if (use_svg) {
    vw_write_svg(spec, path = file_vl)
    tag_vl <- tags$img(src = file_vl)
  } else {
    tav_vl <- vegawidget(spec)
  }

  div_compare_side <-
    tags$div(
      tags$table(
        tags$tr(
          tags$td(
            tags$img(src = file_gg, width = gg_width),
            style = "border-width: 0px;"
          ),
          tags$td(
            tag_vl,
            style = "border-width: 0px;"
          ),
          style = "border-width: 0px;"
        )
      )
    )

  div_compare_top <-
    tags$div(
      tags$table(
        tags$tr(
          tags$td(
            tags$img(src = file_gg, width = gg_width),
            style = "border-width: 0px;"
          )
        ),
        tags$tr(
          tags$td(
            tag_vl,
            style = "border-width: 0px;"
          ),
          style = "border-width: 0px;"
        )
      )
    )

  list_div <- list(side = div_compare_side, top = div_compare_top)

  list_div[[arrange]]
}
