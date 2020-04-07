ggplot(head(mpg, 1), aes(x = class)) +
  geom_bar(aes(fill = drv), position = "fill")
