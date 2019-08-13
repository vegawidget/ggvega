library("ggplot2")

test_that("facet works", {

  # Cartesian
  expect_identical(
    facet(facet_null()),
    list(class = "FacetNull")
  )

  # Flip
  expect_error(
    facet(facet_wrap("foo")),
    "FacetWrap"
  )

})
