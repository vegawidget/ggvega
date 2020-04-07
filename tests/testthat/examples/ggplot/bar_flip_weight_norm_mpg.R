ggplot(head(mpg, 1), aes(x = class, weight = displ)) +
  geom_bar(aes(fill = drv), position = "fill") +
  coord_flip()
