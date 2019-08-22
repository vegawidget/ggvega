library("ggplot2")

test_that("coordinates works", {

  # Cartesian
  expect_identical(
    coordinates(coord_cartesian()),
    list(class = "CoordCartesian")
  )

  # Flip
  expect_identical(
    coordinates(coord_flip()),
    list(class = "CoordFlip")
  )

})
