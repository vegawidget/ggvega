list(
  `$schema` = vega_schema(),
  datasets = list(`data-00` = ggvega:::flip(mpg)),
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
