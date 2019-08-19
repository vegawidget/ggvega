list(
  `$schema` = vega_schema(),
  datasets = list(`data-00` = flip(iris)),
  layer = list(
    list(
      data = list(name = "data-00"),
      mark = "point",
      encoding = list(
        x = list(
          field = "Sepal\\.Width",
          type = "quantitative",
          title = "Sepal.Width"
        ),
        y = list(
          field = "Sepal\\.Length",
          type = "quantitative",
          title = "Sepal.Length"
        ),
        stroke = list(
          field = "Species",
          type = "nominal",
          title = "Species"
        )
      )
    )
  )
) %>%
  as_vegaspec()
