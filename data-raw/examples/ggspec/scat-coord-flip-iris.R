list(
  data = list(
    `data-00` = list(
      metadata = list(
        `Sepal.Length` = list(type = "quantitative"),
        `Sepal.Width` = list(type = "quantitative"),
        `Petal.Length` = list(type = "quantitative"),
        `Petal.Width` = list(type = "quantitative"),
        Species = list(
          type = "nominal",
          levels = list("setosa", "versicolor", "virginica")
        )
      ),
      observations = flip(iris)
    )
  ),
  layers = list(
    list(
      data = "data-00",
      geom = list(class = "GeomPoint"),
      geom_params = list(
        na.rm = FALSE
      ),
      mapping = list(
        x = list(field = "Sepal.Width"),
        y = list(field = "Sepal.Length"),
        colour = list(field = "Species")
      ),
      aes_params = ggvega:::empty_named_list,
      stat = list(class = "StatIdentity"),
      stat_params = list(
        na.rm = FALSE
      )
    )
  ),
  scales = list(),
  labels = list(
    x = "Sepal.Width",
    y = "Sepal.Length",
    colour = "Species"
  ),
  coordinates = list(class = "CoordFlip"),
  facet = list(class = "FacetNull")
)
