list(
  `$schema` = vega_schema(),
  datasets = list(`data-00` = flip(mpg)),
  layer = list(
    list(
      data = list(name = "data-00"),
      mark = list(type = "bar"),
      encoding = list(
        x = list(
          field = "class",
          type = "nominal",
          title = "class"
        ),
        y = list(
          aggregate = "count",
          stack = "zero",
          type = "quantitative",
          title = "count"
        )
      )
    )
  )
) %>%
  as_vegaspec()
