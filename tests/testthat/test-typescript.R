test_that("typescript tests work", {

  dir_typescript <- here::here("src-ext", "TypeScript", "ggvega2")

  # this directory may not exist on CRAN check
  skip_if_not(fs::dir_exists(dir_typescript))

  withr::with_dir(
    new = dir_typescript,
    code = {
      ts_results <- processx::run("yarn", "test", error_on_status = FALSE)
    }
  )

  cat("\n")
  cat(ts_results$stderr)
  cat("\n")

  expect_identical(ts_results$status, 0L)

})
