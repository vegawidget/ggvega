test_that("normalize works", {

  expect_norm <- function(x, y) {
    expect_identical(normalize(x), y)
  }

  # named atomic
  expect_norm(list(a = 1), list(a = 1))
  expect_norm(list(a = 1, b = 2), list(a = 1, b = 2))

  # named atomic, different order
  expect_norm(list(b = 2, a = 1), list(a = 1, b = 2))

  # unnamed atomic
  expect_norm(list(1, 2), list(1, 2))

  # named nested
  expect_norm(
    list(b = list(3, 4), a = list(1, 2)),
    list(a = list(1, 2), b = list(3, 4))
  )

  expect_norm(
    list(b = list(e = list(4, 5), d = 3), a = list(1, 2)),
    list(a = list(1, 2), b = list(d = 3, e = list(4, 5)))
  )

  expect_norm(
    list(list(b = 2, a = 1)),
    list(list(a = 1, b = 2))
  )

  expect_norm(
    list(list(b = 1, a = 2)),
    list(list(a = 2, b = 1))
  )

})
