test_that("normalize works", {

  expect_norm <- function(x, y) {
    expect_equivalent(normalize(x), y)
  }

  # named atomic
  expect_norm(list(a = 1), list(a = 1))
  expect_norm(list(a = 1, b = 2), list(a = 1, b = 2))

  # named atomic, different order
  expect_norm(list(b = 2, a = 1), list(a = 1, b = 2))

  # unnamed atomic
  expect_norm(list(1, 2), list(1, 2))
  expect_norm(c(1, 2), c(1, 2))

  # named nested
  expect_norm(
    list(b = c(3, 4), a = c(1, 2)),
    list(a = c(1, 2), b = c(3, 4))
  )

  expect_norm(
    list(b = list(e = list(4, 5), d = 3), a = c(1, 2)),
    list(a = c(1, 2), b = list(d = 3, e = list(4, 5)))
  )

})
