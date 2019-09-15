test_that("extraction of data name works for ggplot call", {

  extract <- function(x) {
    stringr::str_replace(x, regex_ggplot_data(), "\\2")
  }

  expect_identical(extract("ggplot(iris)"), "iris")
  expect_identical(extract("ggplot(with_underscore)"), "with_underscore")
  expect_identical(extract("ggplot(with.dot)"), "with.dot")

  expect_identical(extract("ggplot( iris )"), "iris")
  expect_identical(extract("ggplot(iris, aes())"), "iris")

  expect_identical(extract("ggplot(data = iris)"), "iris")
  expect_identical(extract("ggplot(data=iris)"), "iris")
  expect_identical(extract("ggplot(data = iris, aes())"), "iris")

})

test_that("extraction of data name works for other calls", {

  extract <- function(x) {
    stringr::str_replace(x, regex_layer_data(), "\\2")
  }

  expect_identical(extract("geom_point(data = iris)"), "iris")
  expect_identical(extract("geom_point(data=iris)"), "iris")
  expect_identical(extract("geom_point(data = iris, aes())"), "iris")
  expect_identical(extract("geom_point(aes(), data = iris"), "iris")

  # if it's a ggplot call, do nothing
  expect_identical(extract("ggplot(data = iris)"), "ggplot(data = iris)")

})

test_that("replacement function works", {

  ex <- function(x, y) {
    expect_identical(head_data(x), y)
  }

  ex("ggplot(iris) +", "ggplot(head(iris, 1)) +")
  ex("geom_point(data = iris)", "geom_point(data = head(iris, 1))")

})

test_that("truncate_data functions work", {

  library("vegawidget")

  # test only if the data-raw directory is available
  skip_if_not(fs::dir_exists(here::here("data-raw")))

  example <- "scatterplot-iris"

  gg_scatter <- source(ggv_dev_path(example, "ggspec"))$value

  gg_scatter_truncate <- gg_scatter
  gg_scatter_truncate$data$`data-00`$observations <-
    list(gg_scatter_truncate$data$`data-00`$observations[[1]])

  expect_identical(truncate_data_ggspec(gg_scatter), gg_scatter_truncate)

  vl_scatter <- source(ggv_dev_path(example, "vegaspec"))$value

  vl_scatter_truncate <- vl_scatter
  vl_scatter_truncate$datasets$`data-00` <-
    list(vl_scatter_truncate$datasets$`data-00`[[1]])

  expect_identical(truncate_data_vegaspec(vl_scatter), vl_scatter_truncate)

})

test_that(".example_ functions work", {

  library("ggplot2")
  library("vegawidget")

  # test only if the data-raw directory is available
  skip_if_not(fs::dir_exists(here::here("data-raw")))

  names <- .example_names("ggplot", "dev")
  expect_true("scatterplot-iris" %in% names)

  expect_is(
    .example_obj("scatterplot-iris", type = "ggplot", source = "dev"),
    "gg"
  )

  expect_is(
    .example_obj("scatterplot-iris", type = "vegaspec", source = "dev"),
    "vegaspec"
  )

})
