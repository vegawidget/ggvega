library("vegawidget")

test_that("example_dev functions work", {

  # test only if the data-raw directory is available
  skip_if_not(fs::dir_exists(here::here("data-raw")))

  # error for file that does not exist
  expect_error(example_path_dev("this_example_should_not_exist"))

  # we get something if the file does exist
  expect_identical(
    basename(example_path_dev("scatterplot-iris")),
    "scatterplot-iris.R"
  )
})

test_that("truncate_data functions work", {

  # test only if the data-raw directory is available
  skip_if_not(fs::dir_exists(here::here("data-raw")))

  example <- "scatterplot-iris"

  gg_scatter <- source(example_path_dev(example, "ggspec"))$value

  gg_scatter_truncate <- gg_scatter
  gg_scatter_truncate$data$`data-00`$observations <-
    list(gg_scatter_truncate$data$`data-00`$observations[[1]])

  expect_identical(truncate_data_ggspec(gg_scatter), gg_scatter_truncate)

  vl_scatter <- source(example_path_dev(example, "vega-lite"))$value

  vl_scatter_truncate <- vl_scatter
  vl_scatter_truncate$datasets$`data-00` <-
    list(vl_scatter_truncate$datasets$`data-00`[[1]])

  expect_identical(truncate_data_vegaspec(vl_scatter), vl_scatter_truncate)

})
