test_that("typescript tests work", {

  withr::with_dir(
    new = here::here("src-ext", "Typescript", "ggvega"),
    code = {
      ts_results <- processx::run("yarn", "test", error_on_status = FALSE)
    }
  )

  cat("\n")
  cat(ts_results$stderr)
  cat("\n")

  expect_identical(ts_results$status, 0L)

})
