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
