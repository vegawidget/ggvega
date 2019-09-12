list(
  data = list(
    `data-00` = list(
      metadata = list(
        manufacturer = list(type = "nominal"),
        model = list(type = "nominal"),
        displ = list(type = "quantitative"),
        year = list(type = "quantitative"),
        cyl = list(type = "quantitative"),
        trans = list(type = "nominal"),
        drv = list(type = "nominal"),
        cty = list(type = "quantitative"),
        hwy = list(type = "quantitative"),
        fl = list(type = "nominal"),
        class = list(type = "nominal")
      ),
      observations = flip(mpg)
    )
  ),
  layers = list(
    list(
      data = "data-00",
      geom = list(class = "GeomBar"),
      geom_params = list(
        na.rm = FALSE
      ),
      mapping = list(
        x = list(field = "class"),
        fill = list(field = "drv")
      ),
      aes_params = ggvega:::empty_named_list,
      stat = list(
        class = "StatCount",
        default_aes = list(
          y = list(stat = "count"),
          weight = 1
        )
      ),
      stat_params = list(
        na.rm = FALSE
      ),
      position = list(class = "PositionFill")
    )
  ),
  scales = list(),
  labels = list(
    fill = "drv",
    x = "class",
    y = "count",
    weight = "weight"
  ),
  coordinates = list(class = "CoordCartesian"),
  facet = list(class = "FacetNull")
)
