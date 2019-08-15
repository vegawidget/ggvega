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
