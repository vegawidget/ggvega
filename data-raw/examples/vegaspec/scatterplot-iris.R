list(
  `$schema` = vega_schema(),
  datasets = list(`data-00` = flip(iris)),
  layer = list(
    list(
      data = list(name = "data-00"),
      mark = "point",
      encoding = list(
        x = list(
          field = "Petal\\.Width",
          type = "quantitative",
          title = "Petal.Width"
        ),
        y = list(
          field = "Petal\\.Length",
          type = "quantitative",
          title = "Petal.Length"
        ),
        color = list(
          field = "Species",
          type = "nominal",
          title = "Species"
        )
      )
    )
  )
) %>%
  as_vegaspec()
