# infrastructure

library("fs")
library("here")
library("stringr")
library("ggplot2")
library("purrr")

dir_test_examples <- path_abs(".", "examples")
dir_ggplot2 <- path_join(c(dir_test_examples, "ggplot2"))
dir_ggspec <- path_join(c(dir_test_examples, "ggspec"))
dir_vegalite <- path_join(c(dir_test_examples, "vega-lite"))

# given a path and a regular expression, return the
# basenames of the files
get_names <- function(path, regexp = NULL) {
  names <- fs::dir_ls(path, regexp = regexp)
  names <- basename(names)
  names <- stringr::str_extract(names, "^[^.]+")
  names
}

names_ggplot2 <- get_names(dir_ggplot2, regexp = "[.]R$")
names_ggspec <- get_names(dir_ggspec, regexp = "[.]gs[.]json$")
names_vegalite<- get_names(dir_vegalite, regexp = "[.]vl[.]json$")


expect_ggspec <- function(name) {

  # given a name of a ggplot2 example:
  # - source the ggplot2 code
  # - create a ggspec from the ggplot object
  # - read in the reference ggspec
  # - normalize both, then test for equivalence

  path_ggplot <- fs::path_join(c(dir_ggplot2, glue::glue("{name}.R")))
  path_ggspec <- fs::path_join(c(dir_ggspec, glue::glue("{name}.gs.json")))

  gg <- source(path_ggplot)$value
  gs <- ggvega:::normalize(gg2spec(gg))

  gs_ref <- ggvega:::normalize(ggvega:::from_json(path_ggspec))

  expect_equivalent(gs, gs_ref)
}

expect_vegalite <- function(name) {

  # given a name of a ggspec example:
  # - read in the ggspec
  # - create a vegaspec from the ggspec
  # - read in the reference vegaspec
  # - normalize both, then test for equivalence

  path_ggspec <- fs::path_join(c(dir_ggspec, glue::glue("{name}.gs.json")))
  path_vegalite <- fs::path_join(c(dir_vegalite, glue::glue("{name}.vl.json")))

  gs <- ggvega:::from_json(path_ggspec)
  vl <- ggvega:::normalize(spec2vl(gs))

  vl_ref <- ggvega:::normalize(ggvega:::from_json(path_vegalite))

  expect_equivalent(vl, vl_ref)
}

test_that("gg2spec works", {

  names_skip <-
    c(
      "barchart-mpg",
      "barchart-stacked-mpg",
      "barchart-flipped-mpg"
    )

  names_test <- intersect(names_ggplot2, names_ggspec)
  names_test <- names_test[!names_test %in% names_skip]

  map(names_test, expect_ggspec)
})

test_that("spec2vl works", {

  names_skip <-
    c(
      "barchart-mpg",
      "barchart-stacked-mpg",
      "barchart-flipped-mpg"
    )

  names_test <- intersect(names_ggspec, names_vegalite)
  names_test <- names_test[!names_test %in% names_skip]

  map(names_test, expect_vegalite)
})

