test_that(".param_spec works", {

  expect_identical(
    .param_spec(),
    list(ignore = "na.rm")
  )

  expect_identical(
    .param_spec(support = "foo", ignore = "bar"),
    list(support = "foo", ignore = c("na.rm", "bar"))
  )

})

test_that(".validate_params works", {

  # passes through supported
  expect_identical(
    .validate_params(list(a = 1), list(support = "a"), "foo"),
    list(a = 1)
  )

  # removes NULL and NA
  expect_identical(
    .validate_params(
      list(a = 1, b = NA_character_, c = NULL),
      list(support = "a"),
      "foo"
    ),
    list(a = 1)
  )

  # warning for unsupported & unignored element
  expect_warning(
    expect_identical(
      .validate_params(
        list(a = 1, b = 2),
        list(support = "a"),
        "foo"
      ),
      list(a = 1)
    )
  )

  # ignored element passes through
  expect_identical(
    .validate_params(
      list(a = 1, b = 2),
      list(support = "a", ignore = "b"),
      "foo"
    ),
    list(a = 1, b = 2)
  )

})
