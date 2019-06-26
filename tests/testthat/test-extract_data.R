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
