test_that("as_codeblock works", {
  expect_identical(
    as_codeblock(c("# comment", "foo")),
    glue::glue("```r\nfoo\n```")
  )
})
