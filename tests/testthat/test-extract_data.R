# setup
library("ggplot2")

p_top <-
  ggplot(data = iris) +
  geom_point(aes(x = Petal.Width, y = Petal.Length))

p_top_layer <-
  ggplot(data = iris) +
  geom_point(aes(x = Petal.Width, y = Petal.Length)) +
  geom_point(data = mtcars)

p_layer <-
  ggplot() +
  geom_point(data = iris, aes(x = Petal.Width, y = Petal.Length))

p_top_layer_dup <-
  ggplot(data = iris) +
  geom_point(data = iris, aes(x = Petal.Width, y = Petal.Length))

test_that("data_int works", {

  data_int_top <- data_int(p_top$data, p_top$layers)

  data_int_top_layer <- data_int(p_top_layer$data, p_top_layer$layers)

  data_int_layer <- data_int(p_layer$data, p_layer$layers)

  data_int_top_layer_dup <-
    data_int(p_top_layer_dup$data, p_top_layer_dup$layers)

  # names
  expect_identical(names(data_int_top), "data-00")
  expect_identical(names(data_int_top_layer), c("data-00", "data-02"))
  expect_identical(names(data_int_layer), "data-01")
  expect_identical(names(data_int_top_layer_dup), c("data-00", "data-01"))

})

test_that("type_r works", {

  expect_identical(type_r(1), "numeric")
  expect_identical(type_r(1L), "numeric")
  expect_identical(type_r("1"), "character")
  expect_identical(type_r(factor(1)), "factor")
  expect_identical(type_r(factor(1, ordered = TRUE)), "ordered")
  expect_identical(type_r(Sys.Date()), "Date")
  expect_identical(type_r(Sys.time()), "POSIXct")

})

test_that("type_vl works", {

  expect_identical(type_vl("numeric"), "quantitative")
  expect_identical(type_vl("character"), "nominal")
  expect_identical(type_vl("factor"), "nominal")
  expect_identical(type_vl("ordered"), "ordinal")
  expect_identical(type_vl("Date"), "temporal")
  expect_identical(type_vl("POSIXct"), "temporal")

})

test_that("create_meta works", {

  # double
  expect_identical(
    create_meta(1),
    list(type = "quantitative")
  )

  # integer
  expect_identical(
    create_meta(1L),
    list(type = "quantitative")
  )

  # character
  expect_identical(
    create_meta("1"),
    list(type = "nominal")
  )

  # POSIXct
  expect_identical(
    # TODO: work out what do to if no timezone
    create_meta(as.POSIXct("2012-03-02")),
    list(type = "temporal", timezone = "")
  )

  expect_identical(
    create_meta(as.POSIXct("2012-03-02", tz = "UTC")),
    list(type = "temporal", timezone = "UTC")
  )

  # Date
  expect_identical(
    create_meta(as.Date("2012-03-02")),
    list(type = "temporal")
  )

  # factor
  expect_identical(
    create_meta(factor(c("1", "2"))),
    list(type = "nominal", levels = c("1", "2"))
  )

  # ordered
  expect_identical(
    create_meta(factor(c("1", "2"), ordered = TRUE)),
    list(type = "ordinal", levels = c("1", "2"))
  )

})
