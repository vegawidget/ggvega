## @knitr barchart-stacked-mpg

  ggplot(data = mpg, aes(x = class)) +
  geom_bar(aes(fill = drv))
