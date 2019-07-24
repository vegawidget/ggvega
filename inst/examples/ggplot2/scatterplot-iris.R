ggplot(iris, aes(x = Sepal.Width, y = Sepal.Length)) +
  geom_point(aes(color = Species))
