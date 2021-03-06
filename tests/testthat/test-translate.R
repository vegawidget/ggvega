# infrastructure

library("fs")
library("here")
library("stringr")
library("ggplot2")
library("purrr")

dir_ex <- path_abs(".", "examples")
dir_ggplot <- path_join(c(dir_ex, "ggplot"))
dir_ggspec <- path_join(c(dir_ex, "ggspec"))
dir_vegaspec <- path_join(c(dir_ex, "vegaspec"))

# given a path and a regular expression, return the
# basenames of the files
get_names <- function(path, regexp = NULL) {
  names <- fs::dir_ls(path, regexp = regexp)
  names <- basename(names)
  names <- stringr::str_extract(names, "^[^.]+")
  names
}

names_ggplot <- get_names(dir_ggplot, regexp = "[.]R$")
names_ggspec <- get_names(dir_ggspec, regexp = "[.]gg[.]json$")
names_vegaspec <- get_names(dir_vegaspec, regexp = "[.]vl[.]json$")

expect_ggspec <- function(name) {
  # see testthat::quasi_label()
  # using equal because identical fails when
  # a double gets written then parsed as an integer
  expect_equal(
    ggspec_test(!!name, dir = dir_ex),
    ggspec_ref(!!name, dir = dir_ex)
  )
}

expect_vegaspec <- function(name) {
  # see testthat::quasi_label()
  expect_equal(
    vegaspec_test(!!name, dir = dir_ex),
    vegaspec_ref(!!name, dir = dir_ex)
  )
}

test_that("gg2spec works", {
  names_test <- intersect(names_ggplot, names_ggspec)
  walk(names_test, expect_ggspec)
})

test_that("spec2vl works", {
  names_test <- intersect(names_ggspec, names_vegaspec)
  walk(names_test, expect_vegaspec)
})

test_that("single_view works", {

  # we are takng a single-layer spec and making sure that
  # it converts properly to a single-view spec

  name <- "scatterplot-iris"

  ggspec_test <- ggspec_ref(name, dir = dir_ex)

  vegaspec_ref <- vegaspec_ref(name, dir = dir_ex)
  # collapse layer into top-level spec
  vegaspec_ref <- c(vegaspec_ref, vegaspec_ref$layer[[1]])
  vegaspec_ref$layer <- NULL

  vegaspec_test <- spec2vl(ggspec_test, single_view = TRUE)

  expect_identical(normalize(vegaspec_test), normalize(vegaspec_ref))

})

