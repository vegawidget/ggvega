library("V8")

test_that("V8 can use ES6", {
  ctx <- v8()
  ctx$eval("let foo = 123") # let is ES6-only
  foo <- ctx$get("foo")

  expect_identical(foo, 123L)
})
