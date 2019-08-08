# standard scatterplot, aesthetics defined in ggplot and in layers
#
  ggplot(iris, aes(x = Sepal.Width, y = Sepal.Length)) +
  geom_point(aes(color = Species))
