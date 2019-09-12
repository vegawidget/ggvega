list(
  `$schema` = vega_schema(),
  datasets = list(`data-00` = flip(mpg)),
  layer = list(
    list(
      data = list(name = "data-00"),
      mark = list(type = "bar"),
      encoding = list(
        y = list(
          field = "class",
          type = "nominal",
          title = "class"
        ),
        x = list(
          aggregate = "sum",
          field = "displ",
          stack = "normalize",
          type = "quantitative",
          title = "count"
        ),
        fill = list(
          field = "drv",
          type = "nominal",
          title = "drv"
        )
      )
    )
  )
) %>%
  as_vegaspec()
