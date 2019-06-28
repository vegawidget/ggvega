
<!-- README.md is generated from README.Rmd. Please edit that file -->

# ggvega

<!-- badges: start -->

[![CRAN
status](https://www.r-pkg.org/badges/version/ggvega)](https://cran.r-project.org/package=ggvega)
[![Lifecycle:
experimental](https://img.shields.io/badge/lifecycle-experimental-orange.svg)](https://www.tidyverse.org/lifecycle/#experimental)
[![Travis build
status](https://travis-ci.org/vegawidget/ggvega.svg?branch=master)](https://travis-ci.org/vegawidget/ggvega)
<!-- badges: end -->

The goal of **ggvega** is to translate a ggplot2 object to a Vega-Lite
specification.

``` r
library(ggvega)
#> Welcome to ggvega; this package is not yet fully functional, and is under active development.
library(ggplot2)

p <- 
  ggplot(iris) + 
  geom_point(aes(x = Petal.Width, y = Petal.Length, colour = Species))

gg2spec(p)
#> $data
#> $data$`data-00`
#> $data$`data-00`$metadata
#> $data$`data-00`$metadata$Sepal.Length
#> $data$`data-00`$metadata$Sepal.Length$type
#> [1] "quantitative"
#> 
#> 
#> $data$`data-00`$metadata$Sepal.Width
#> $data$`data-00`$metadata$Sepal.Width$type
#> [1] "quantitative"
#> 
#> 
#> $data$`data-00`$metadata$Petal.Length
#> $data$`data-00`$metadata$Petal.Length$type
#> [1] "quantitative"
#> 
#> 
#> $data$`data-00`$metadata$Petal.Width
#> $data$`data-00`$metadata$Petal.Width$type
#> [1] "quantitative"
#> 
#> 
#> $data$`data-00`$metadata$Species
#> $data$`data-00`$metadata$Species$type
#> [1] "nominal"
#> 
#> $data$`data-00`$metadata$Species$levels
#> [1] "setosa"     "versicolor" "virginica" 
#> 
#> 
#> 
#> $data$`data-00`$observations
#> $data$`data-00`$observations[[1]]
#> $data$`data-00`$observations[[1]]$Sepal.Length
#> [1] 5.1
#> 
#> $data$`data-00`$observations[[1]]$Sepal.Width
#> [1] 3.5
#> 
#> $data$`data-00`$observations[[1]]$Petal.Length
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[1]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[1]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[2]]
#> $data$`data-00`$observations[[2]]$Sepal.Length
#> [1] 4.9
#> 
#> $data$`data-00`$observations[[2]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[2]]$Petal.Length
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[2]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[2]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[3]]
#> $data$`data-00`$observations[[3]]$Sepal.Length
#> [1] 4.7
#> 
#> $data$`data-00`$observations[[3]]$Sepal.Width
#> [1] 3.2
#> 
#> $data$`data-00`$observations[[3]]$Petal.Length
#> [1] 1.3
#> 
#> $data$`data-00`$observations[[3]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[3]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[4]]
#> $data$`data-00`$observations[[4]]$Sepal.Length
#> [1] 4.6
#> 
#> $data$`data-00`$observations[[4]]$Sepal.Width
#> [1] 3.1
#> 
#> $data$`data-00`$observations[[4]]$Petal.Length
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[4]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[4]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[5]]
#> $data$`data-00`$observations[[5]]$Sepal.Length
#> [1] 5
#> 
#> $data$`data-00`$observations[[5]]$Sepal.Width
#> [1] 3.6
#> 
#> $data$`data-00`$observations[[5]]$Petal.Length
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[5]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[5]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[6]]
#> $data$`data-00`$observations[[6]]$Sepal.Length
#> [1] 5.4
#> 
#> $data$`data-00`$observations[[6]]$Sepal.Width
#> [1] 3.9
#> 
#> $data$`data-00`$observations[[6]]$Petal.Length
#> [1] 1.7
#> 
#> $data$`data-00`$observations[[6]]$Petal.Width
#> [1] 0.4
#> 
#> $data$`data-00`$observations[[6]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[7]]
#> $data$`data-00`$observations[[7]]$Sepal.Length
#> [1] 4.6
#> 
#> $data$`data-00`$observations[[7]]$Sepal.Width
#> [1] 3.4
#> 
#> $data$`data-00`$observations[[7]]$Petal.Length
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[7]]$Petal.Width
#> [1] 0.3
#> 
#> $data$`data-00`$observations[[7]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[8]]
#> $data$`data-00`$observations[[8]]$Sepal.Length
#> [1] 5
#> 
#> $data$`data-00`$observations[[8]]$Sepal.Width
#> [1] 3.4
#> 
#> $data$`data-00`$observations[[8]]$Petal.Length
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[8]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[8]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[9]]
#> $data$`data-00`$observations[[9]]$Sepal.Length
#> [1] 4.4
#> 
#> $data$`data-00`$observations[[9]]$Sepal.Width
#> [1] 2.9
#> 
#> $data$`data-00`$observations[[9]]$Petal.Length
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[9]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[9]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[10]]
#> $data$`data-00`$observations[[10]]$Sepal.Length
#> [1] 4.9
#> 
#> $data$`data-00`$observations[[10]]$Sepal.Width
#> [1] 3.1
#> 
#> $data$`data-00`$observations[[10]]$Petal.Length
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[10]]$Petal.Width
#> [1] 0.1
#> 
#> $data$`data-00`$observations[[10]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[11]]
#> $data$`data-00`$observations[[11]]$Sepal.Length
#> [1] 5.4
#> 
#> $data$`data-00`$observations[[11]]$Sepal.Width
#> [1] 3.7
#> 
#> $data$`data-00`$observations[[11]]$Petal.Length
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[11]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[11]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[12]]
#> $data$`data-00`$observations[[12]]$Sepal.Length
#> [1] 4.8
#> 
#> $data$`data-00`$observations[[12]]$Sepal.Width
#> [1] 3.4
#> 
#> $data$`data-00`$observations[[12]]$Petal.Length
#> [1] 1.6
#> 
#> $data$`data-00`$observations[[12]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[12]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[13]]
#> $data$`data-00`$observations[[13]]$Sepal.Length
#> [1] 4.8
#> 
#> $data$`data-00`$observations[[13]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[13]]$Petal.Length
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[13]]$Petal.Width
#> [1] 0.1
#> 
#> $data$`data-00`$observations[[13]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[14]]
#> $data$`data-00`$observations[[14]]$Sepal.Length
#> [1] 4.3
#> 
#> $data$`data-00`$observations[[14]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[14]]$Petal.Length
#> [1] 1.1
#> 
#> $data$`data-00`$observations[[14]]$Petal.Width
#> [1] 0.1
#> 
#> $data$`data-00`$observations[[14]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[15]]
#> $data$`data-00`$observations[[15]]$Sepal.Length
#> [1] 5.8
#> 
#> $data$`data-00`$observations[[15]]$Sepal.Width
#> [1] 4
#> 
#> $data$`data-00`$observations[[15]]$Petal.Length
#> [1] 1.2
#> 
#> $data$`data-00`$observations[[15]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[15]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[16]]
#> $data$`data-00`$observations[[16]]$Sepal.Length
#> [1] 5.7
#> 
#> $data$`data-00`$observations[[16]]$Sepal.Width
#> [1] 4.4
#> 
#> $data$`data-00`$observations[[16]]$Petal.Length
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[16]]$Petal.Width
#> [1] 0.4
#> 
#> $data$`data-00`$observations[[16]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[17]]
#> $data$`data-00`$observations[[17]]$Sepal.Length
#> [1] 5.4
#> 
#> $data$`data-00`$observations[[17]]$Sepal.Width
#> [1] 3.9
#> 
#> $data$`data-00`$observations[[17]]$Petal.Length
#> [1] 1.3
#> 
#> $data$`data-00`$observations[[17]]$Petal.Width
#> [1] 0.4
#> 
#> $data$`data-00`$observations[[17]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[18]]
#> $data$`data-00`$observations[[18]]$Sepal.Length
#> [1] 5.1
#> 
#> $data$`data-00`$observations[[18]]$Sepal.Width
#> [1] 3.5
#> 
#> $data$`data-00`$observations[[18]]$Petal.Length
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[18]]$Petal.Width
#> [1] 0.3
#> 
#> $data$`data-00`$observations[[18]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[19]]
#> $data$`data-00`$observations[[19]]$Sepal.Length
#> [1] 5.7
#> 
#> $data$`data-00`$observations[[19]]$Sepal.Width
#> [1] 3.8
#> 
#> $data$`data-00`$observations[[19]]$Petal.Length
#> [1] 1.7
#> 
#> $data$`data-00`$observations[[19]]$Petal.Width
#> [1] 0.3
#> 
#> $data$`data-00`$observations[[19]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[20]]
#> $data$`data-00`$observations[[20]]$Sepal.Length
#> [1] 5.1
#> 
#> $data$`data-00`$observations[[20]]$Sepal.Width
#> [1] 3.8
#> 
#> $data$`data-00`$observations[[20]]$Petal.Length
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[20]]$Petal.Width
#> [1] 0.3
#> 
#> $data$`data-00`$observations[[20]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[21]]
#> $data$`data-00`$observations[[21]]$Sepal.Length
#> [1] 5.4
#> 
#> $data$`data-00`$observations[[21]]$Sepal.Width
#> [1] 3.4
#> 
#> $data$`data-00`$observations[[21]]$Petal.Length
#> [1] 1.7
#> 
#> $data$`data-00`$observations[[21]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[21]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[22]]
#> $data$`data-00`$observations[[22]]$Sepal.Length
#> [1] 5.1
#> 
#> $data$`data-00`$observations[[22]]$Sepal.Width
#> [1] 3.7
#> 
#> $data$`data-00`$observations[[22]]$Petal.Length
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[22]]$Petal.Width
#> [1] 0.4
#> 
#> $data$`data-00`$observations[[22]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[23]]
#> $data$`data-00`$observations[[23]]$Sepal.Length
#> [1] 4.6
#> 
#> $data$`data-00`$observations[[23]]$Sepal.Width
#> [1] 3.6
#> 
#> $data$`data-00`$observations[[23]]$Petal.Length
#> [1] 1
#> 
#> $data$`data-00`$observations[[23]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[23]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[24]]
#> $data$`data-00`$observations[[24]]$Sepal.Length
#> [1] 5.1
#> 
#> $data$`data-00`$observations[[24]]$Sepal.Width
#> [1] 3.3
#> 
#> $data$`data-00`$observations[[24]]$Petal.Length
#> [1] 1.7
#> 
#> $data$`data-00`$observations[[24]]$Petal.Width
#> [1] 0.5
#> 
#> $data$`data-00`$observations[[24]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[25]]
#> $data$`data-00`$observations[[25]]$Sepal.Length
#> [1] 4.8
#> 
#> $data$`data-00`$observations[[25]]$Sepal.Width
#> [1] 3.4
#> 
#> $data$`data-00`$observations[[25]]$Petal.Length
#> [1] 1.9
#> 
#> $data$`data-00`$observations[[25]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[25]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[26]]
#> $data$`data-00`$observations[[26]]$Sepal.Length
#> [1] 5
#> 
#> $data$`data-00`$observations[[26]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[26]]$Petal.Length
#> [1] 1.6
#> 
#> $data$`data-00`$observations[[26]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[26]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[27]]
#> $data$`data-00`$observations[[27]]$Sepal.Length
#> [1] 5
#> 
#> $data$`data-00`$observations[[27]]$Sepal.Width
#> [1] 3.4
#> 
#> $data$`data-00`$observations[[27]]$Petal.Length
#> [1] 1.6
#> 
#> $data$`data-00`$observations[[27]]$Petal.Width
#> [1] 0.4
#> 
#> $data$`data-00`$observations[[27]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[28]]
#> $data$`data-00`$observations[[28]]$Sepal.Length
#> [1] 5.2
#> 
#> $data$`data-00`$observations[[28]]$Sepal.Width
#> [1] 3.5
#> 
#> $data$`data-00`$observations[[28]]$Petal.Length
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[28]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[28]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[29]]
#> $data$`data-00`$observations[[29]]$Sepal.Length
#> [1] 5.2
#> 
#> $data$`data-00`$observations[[29]]$Sepal.Width
#> [1] 3.4
#> 
#> $data$`data-00`$observations[[29]]$Petal.Length
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[29]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[29]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[30]]
#> $data$`data-00`$observations[[30]]$Sepal.Length
#> [1] 4.7
#> 
#> $data$`data-00`$observations[[30]]$Sepal.Width
#> [1] 3.2
#> 
#> $data$`data-00`$observations[[30]]$Petal.Length
#> [1] 1.6
#> 
#> $data$`data-00`$observations[[30]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[30]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[31]]
#> $data$`data-00`$observations[[31]]$Sepal.Length
#> [1] 4.8
#> 
#> $data$`data-00`$observations[[31]]$Sepal.Width
#> [1] 3.1
#> 
#> $data$`data-00`$observations[[31]]$Petal.Length
#> [1] 1.6
#> 
#> $data$`data-00`$observations[[31]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[31]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[32]]
#> $data$`data-00`$observations[[32]]$Sepal.Length
#> [1] 5.4
#> 
#> $data$`data-00`$observations[[32]]$Sepal.Width
#> [1] 3.4
#> 
#> $data$`data-00`$observations[[32]]$Petal.Length
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[32]]$Petal.Width
#> [1] 0.4
#> 
#> $data$`data-00`$observations[[32]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[33]]
#> $data$`data-00`$observations[[33]]$Sepal.Length
#> [1] 5.2
#> 
#> $data$`data-00`$observations[[33]]$Sepal.Width
#> [1] 4.1
#> 
#> $data$`data-00`$observations[[33]]$Petal.Length
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[33]]$Petal.Width
#> [1] 0.1
#> 
#> $data$`data-00`$observations[[33]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[34]]
#> $data$`data-00`$observations[[34]]$Sepal.Length
#> [1] 5.5
#> 
#> $data$`data-00`$observations[[34]]$Sepal.Width
#> [1] 4.2
#> 
#> $data$`data-00`$observations[[34]]$Petal.Length
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[34]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[34]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[35]]
#> $data$`data-00`$observations[[35]]$Sepal.Length
#> [1] 4.9
#> 
#> $data$`data-00`$observations[[35]]$Sepal.Width
#> [1] 3.1
#> 
#> $data$`data-00`$observations[[35]]$Petal.Length
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[35]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[35]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[36]]
#> $data$`data-00`$observations[[36]]$Sepal.Length
#> [1] 5
#> 
#> $data$`data-00`$observations[[36]]$Sepal.Width
#> [1] 3.2
#> 
#> $data$`data-00`$observations[[36]]$Petal.Length
#> [1] 1.2
#> 
#> $data$`data-00`$observations[[36]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[36]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[37]]
#> $data$`data-00`$observations[[37]]$Sepal.Length
#> [1] 5.5
#> 
#> $data$`data-00`$observations[[37]]$Sepal.Width
#> [1] 3.5
#> 
#> $data$`data-00`$observations[[37]]$Petal.Length
#> [1] 1.3
#> 
#> $data$`data-00`$observations[[37]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[37]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[38]]
#> $data$`data-00`$observations[[38]]$Sepal.Length
#> [1] 4.9
#> 
#> $data$`data-00`$observations[[38]]$Sepal.Width
#> [1] 3.6
#> 
#> $data$`data-00`$observations[[38]]$Petal.Length
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[38]]$Petal.Width
#> [1] 0.1
#> 
#> $data$`data-00`$observations[[38]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[39]]
#> $data$`data-00`$observations[[39]]$Sepal.Length
#> [1] 4.4
#> 
#> $data$`data-00`$observations[[39]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[39]]$Petal.Length
#> [1] 1.3
#> 
#> $data$`data-00`$observations[[39]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[39]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[40]]
#> $data$`data-00`$observations[[40]]$Sepal.Length
#> [1] 5.1
#> 
#> $data$`data-00`$observations[[40]]$Sepal.Width
#> [1] 3.4
#> 
#> $data$`data-00`$observations[[40]]$Petal.Length
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[40]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[40]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[41]]
#> $data$`data-00`$observations[[41]]$Sepal.Length
#> [1] 5
#> 
#> $data$`data-00`$observations[[41]]$Sepal.Width
#> [1] 3.5
#> 
#> $data$`data-00`$observations[[41]]$Petal.Length
#> [1] 1.3
#> 
#> $data$`data-00`$observations[[41]]$Petal.Width
#> [1] 0.3
#> 
#> $data$`data-00`$observations[[41]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[42]]
#> $data$`data-00`$observations[[42]]$Sepal.Length
#> [1] 4.5
#> 
#> $data$`data-00`$observations[[42]]$Sepal.Width
#> [1] 2.3
#> 
#> $data$`data-00`$observations[[42]]$Petal.Length
#> [1] 1.3
#> 
#> $data$`data-00`$observations[[42]]$Petal.Width
#> [1] 0.3
#> 
#> $data$`data-00`$observations[[42]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[43]]
#> $data$`data-00`$observations[[43]]$Sepal.Length
#> [1] 4.4
#> 
#> $data$`data-00`$observations[[43]]$Sepal.Width
#> [1] 3.2
#> 
#> $data$`data-00`$observations[[43]]$Petal.Length
#> [1] 1.3
#> 
#> $data$`data-00`$observations[[43]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[43]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[44]]
#> $data$`data-00`$observations[[44]]$Sepal.Length
#> [1] 5
#> 
#> $data$`data-00`$observations[[44]]$Sepal.Width
#> [1] 3.5
#> 
#> $data$`data-00`$observations[[44]]$Petal.Length
#> [1] 1.6
#> 
#> $data$`data-00`$observations[[44]]$Petal.Width
#> [1] 0.6
#> 
#> $data$`data-00`$observations[[44]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[45]]
#> $data$`data-00`$observations[[45]]$Sepal.Length
#> [1] 5.1
#> 
#> $data$`data-00`$observations[[45]]$Sepal.Width
#> [1] 3.8
#> 
#> $data$`data-00`$observations[[45]]$Petal.Length
#> [1] 1.9
#> 
#> $data$`data-00`$observations[[45]]$Petal.Width
#> [1] 0.4
#> 
#> $data$`data-00`$observations[[45]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[46]]
#> $data$`data-00`$observations[[46]]$Sepal.Length
#> [1] 4.8
#> 
#> $data$`data-00`$observations[[46]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[46]]$Petal.Length
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[46]]$Petal.Width
#> [1] 0.3
#> 
#> $data$`data-00`$observations[[46]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[47]]
#> $data$`data-00`$observations[[47]]$Sepal.Length
#> [1] 5.1
#> 
#> $data$`data-00`$observations[[47]]$Sepal.Width
#> [1] 3.8
#> 
#> $data$`data-00`$observations[[47]]$Petal.Length
#> [1] 1.6
#> 
#> $data$`data-00`$observations[[47]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[47]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[48]]
#> $data$`data-00`$observations[[48]]$Sepal.Length
#> [1] 4.6
#> 
#> $data$`data-00`$observations[[48]]$Sepal.Width
#> [1] 3.2
#> 
#> $data$`data-00`$observations[[48]]$Petal.Length
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[48]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[48]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[49]]
#> $data$`data-00`$observations[[49]]$Sepal.Length
#> [1] 5.3
#> 
#> $data$`data-00`$observations[[49]]$Sepal.Width
#> [1] 3.7
#> 
#> $data$`data-00`$observations[[49]]$Petal.Length
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[49]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[49]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[50]]
#> $data$`data-00`$observations[[50]]$Sepal.Length
#> [1] 5
#> 
#> $data$`data-00`$observations[[50]]$Sepal.Width
#> [1] 3.3
#> 
#> $data$`data-00`$observations[[50]]$Petal.Length
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[50]]$Petal.Width
#> [1] 0.2
#> 
#> $data$`data-00`$observations[[50]]$Species
#> [1] "setosa"
#> 
#> 
#> $data$`data-00`$observations[[51]]
#> $data$`data-00`$observations[[51]]$Sepal.Length
#> [1] 7
#> 
#> $data$`data-00`$observations[[51]]$Sepal.Width
#> [1] 3.2
#> 
#> $data$`data-00`$observations[[51]]$Petal.Length
#> [1] 4.7
#> 
#> $data$`data-00`$observations[[51]]$Petal.Width
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[51]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[52]]
#> $data$`data-00`$observations[[52]]$Sepal.Length
#> [1] 6.4
#> 
#> $data$`data-00`$observations[[52]]$Sepal.Width
#> [1] 3.2
#> 
#> $data$`data-00`$observations[[52]]$Petal.Length
#> [1] 4.5
#> 
#> $data$`data-00`$observations[[52]]$Petal.Width
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[52]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[53]]
#> $data$`data-00`$observations[[53]]$Sepal.Length
#> [1] 6.9
#> 
#> $data$`data-00`$observations[[53]]$Sepal.Width
#> [1] 3.1
#> 
#> $data$`data-00`$observations[[53]]$Petal.Length
#> [1] 4.9
#> 
#> $data$`data-00`$observations[[53]]$Petal.Width
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[53]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[54]]
#> $data$`data-00`$observations[[54]]$Sepal.Length
#> [1] 5.5
#> 
#> $data$`data-00`$observations[[54]]$Sepal.Width
#> [1] 2.3
#> 
#> $data$`data-00`$observations[[54]]$Petal.Length
#> [1] 4
#> 
#> $data$`data-00`$observations[[54]]$Petal.Width
#> [1] 1.3
#> 
#> $data$`data-00`$observations[[54]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[55]]
#> $data$`data-00`$observations[[55]]$Sepal.Length
#> [1] 6.5
#> 
#> $data$`data-00`$observations[[55]]$Sepal.Width
#> [1] 2.8
#> 
#> $data$`data-00`$observations[[55]]$Petal.Length
#> [1] 4.6
#> 
#> $data$`data-00`$observations[[55]]$Petal.Width
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[55]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[56]]
#> $data$`data-00`$observations[[56]]$Sepal.Length
#> [1] 5.7
#> 
#> $data$`data-00`$observations[[56]]$Sepal.Width
#> [1] 2.8
#> 
#> $data$`data-00`$observations[[56]]$Petal.Length
#> [1] 4.5
#> 
#> $data$`data-00`$observations[[56]]$Petal.Width
#> [1] 1.3
#> 
#> $data$`data-00`$observations[[56]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[57]]
#> $data$`data-00`$observations[[57]]$Sepal.Length
#> [1] 6.3
#> 
#> $data$`data-00`$observations[[57]]$Sepal.Width
#> [1] 3.3
#> 
#> $data$`data-00`$observations[[57]]$Petal.Length
#> [1] 4.7
#> 
#> $data$`data-00`$observations[[57]]$Petal.Width
#> [1] 1.6
#> 
#> $data$`data-00`$observations[[57]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[58]]
#> $data$`data-00`$observations[[58]]$Sepal.Length
#> [1] 4.9
#> 
#> $data$`data-00`$observations[[58]]$Sepal.Width
#> [1] 2.4
#> 
#> $data$`data-00`$observations[[58]]$Petal.Length
#> [1] 3.3
#> 
#> $data$`data-00`$observations[[58]]$Petal.Width
#> [1] 1
#> 
#> $data$`data-00`$observations[[58]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[59]]
#> $data$`data-00`$observations[[59]]$Sepal.Length
#> [1] 6.6
#> 
#> $data$`data-00`$observations[[59]]$Sepal.Width
#> [1] 2.9
#> 
#> $data$`data-00`$observations[[59]]$Petal.Length
#> [1] 4.6
#> 
#> $data$`data-00`$observations[[59]]$Petal.Width
#> [1] 1.3
#> 
#> $data$`data-00`$observations[[59]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[60]]
#> $data$`data-00`$observations[[60]]$Sepal.Length
#> [1] 5.2
#> 
#> $data$`data-00`$observations[[60]]$Sepal.Width
#> [1] 2.7
#> 
#> $data$`data-00`$observations[[60]]$Petal.Length
#> [1] 3.9
#> 
#> $data$`data-00`$observations[[60]]$Petal.Width
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[60]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[61]]
#> $data$`data-00`$observations[[61]]$Sepal.Length
#> [1] 5
#> 
#> $data$`data-00`$observations[[61]]$Sepal.Width
#> [1] 2
#> 
#> $data$`data-00`$observations[[61]]$Petal.Length
#> [1] 3.5
#> 
#> $data$`data-00`$observations[[61]]$Petal.Width
#> [1] 1
#> 
#> $data$`data-00`$observations[[61]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[62]]
#> $data$`data-00`$observations[[62]]$Sepal.Length
#> [1] 5.9
#> 
#> $data$`data-00`$observations[[62]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[62]]$Petal.Length
#> [1] 4.2
#> 
#> $data$`data-00`$observations[[62]]$Petal.Width
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[62]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[63]]
#> $data$`data-00`$observations[[63]]$Sepal.Length
#> [1] 6
#> 
#> $data$`data-00`$observations[[63]]$Sepal.Width
#> [1] 2.2
#> 
#> $data$`data-00`$observations[[63]]$Petal.Length
#> [1] 4
#> 
#> $data$`data-00`$observations[[63]]$Petal.Width
#> [1] 1
#> 
#> $data$`data-00`$observations[[63]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[64]]
#> $data$`data-00`$observations[[64]]$Sepal.Length
#> [1] 6.1
#> 
#> $data$`data-00`$observations[[64]]$Sepal.Width
#> [1] 2.9
#> 
#> $data$`data-00`$observations[[64]]$Petal.Length
#> [1] 4.7
#> 
#> $data$`data-00`$observations[[64]]$Petal.Width
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[64]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[65]]
#> $data$`data-00`$observations[[65]]$Sepal.Length
#> [1] 5.6
#> 
#> $data$`data-00`$observations[[65]]$Sepal.Width
#> [1] 2.9
#> 
#> $data$`data-00`$observations[[65]]$Petal.Length
#> [1] 3.6
#> 
#> $data$`data-00`$observations[[65]]$Petal.Width
#> [1] 1.3
#> 
#> $data$`data-00`$observations[[65]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[66]]
#> $data$`data-00`$observations[[66]]$Sepal.Length
#> [1] 6.7
#> 
#> $data$`data-00`$observations[[66]]$Sepal.Width
#> [1] 3.1
#> 
#> $data$`data-00`$observations[[66]]$Petal.Length
#> [1] 4.4
#> 
#> $data$`data-00`$observations[[66]]$Petal.Width
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[66]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[67]]
#> $data$`data-00`$observations[[67]]$Sepal.Length
#> [1] 5.6
#> 
#> $data$`data-00`$observations[[67]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[67]]$Petal.Length
#> [1] 4.5
#> 
#> $data$`data-00`$observations[[67]]$Petal.Width
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[67]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[68]]
#> $data$`data-00`$observations[[68]]$Sepal.Length
#> [1] 5.8
#> 
#> $data$`data-00`$observations[[68]]$Sepal.Width
#> [1] 2.7
#> 
#> $data$`data-00`$observations[[68]]$Petal.Length
#> [1] 4.1
#> 
#> $data$`data-00`$observations[[68]]$Petal.Width
#> [1] 1
#> 
#> $data$`data-00`$observations[[68]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[69]]
#> $data$`data-00`$observations[[69]]$Sepal.Length
#> [1] 6.2
#> 
#> $data$`data-00`$observations[[69]]$Sepal.Width
#> [1] 2.2
#> 
#> $data$`data-00`$observations[[69]]$Petal.Length
#> [1] 4.5
#> 
#> $data$`data-00`$observations[[69]]$Petal.Width
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[69]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[70]]
#> $data$`data-00`$observations[[70]]$Sepal.Length
#> [1] 5.6
#> 
#> $data$`data-00`$observations[[70]]$Sepal.Width
#> [1] 2.5
#> 
#> $data$`data-00`$observations[[70]]$Petal.Length
#> [1] 3.9
#> 
#> $data$`data-00`$observations[[70]]$Petal.Width
#> [1] 1.1
#> 
#> $data$`data-00`$observations[[70]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[71]]
#> $data$`data-00`$observations[[71]]$Sepal.Length
#> [1] 5.9
#> 
#> $data$`data-00`$observations[[71]]$Sepal.Width
#> [1] 3.2
#> 
#> $data$`data-00`$observations[[71]]$Petal.Length
#> [1] 4.8
#> 
#> $data$`data-00`$observations[[71]]$Petal.Width
#> [1] 1.8
#> 
#> $data$`data-00`$observations[[71]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[72]]
#> $data$`data-00`$observations[[72]]$Sepal.Length
#> [1] 6.1
#> 
#> $data$`data-00`$observations[[72]]$Sepal.Width
#> [1] 2.8
#> 
#> $data$`data-00`$observations[[72]]$Petal.Length
#> [1] 4
#> 
#> $data$`data-00`$observations[[72]]$Petal.Width
#> [1] 1.3
#> 
#> $data$`data-00`$observations[[72]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[73]]
#> $data$`data-00`$observations[[73]]$Sepal.Length
#> [1] 6.3
#> 
#> $data$`data-00`$observations[[73]]$Sepal.Width
#> [1] 2.5
#> 
#> $data$`data-00`$observations[[73]]$Petal.Length
#> [1] 4.9
#> 
#> $data$`data-00`$observations[[73]]$Petal.Width
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[73]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[74]]
#> $data$`data-00`$observations[[74]]$Sepal.Length
#> [1] 6.1
#> 
#> $data$`data-00`$observations[[74]]$Sepal.Width
#> [1] 2.8
#> 
#> $data$`data-00`$observations[[74]]$Petal.Length
#> [1] 4.7
#> 
#> $data$`data-00`$observations[[74]]$Petal.Width
#> [1] 1.2
#> 
#> $data$`data-00`$observations[[74]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[75]]
#> $data$`data-00`$observations[[75]]$Sepal.Length
#> [1] 6.4
#> 
#> $data$`data-00`$observations[[75]]$Sepal.Width
#> [1] 2.9
#> 
#> $data$`data-00`$observations[[75]]$Petal.Length
#> [1] 4.3
#> 
#> $data$`data-00`$observations[[75]]$Petal.Width
#> [1] 1.3
#> 
#> $data$`data-00`$observations[[75]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[76]]
#> $data$`data-00`$observations[[76]]$Sepal.Length
#> [1] 6.6
#> 
#> $data$`data-00`$observations[[76]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[76]]$Petal.Length
#> [1] 4.4
#> 
#> $data$`data-00`$observations[[76]]$Petal.Width
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[76]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[77]]
#> $data$`data-00`$observations[[77]]$Sepal.Length
#> [1] 6.8
#> 
#> $data$`data-00`$observations[[77]]$Sepal.Width
#> [1] 2.8
#> 
#> $data$`data-00`$observations[[77]]$Petal.Length
#> [1] 4.8
#> 
#> $data$`data-00`$observations[[77]]$Petal.Width
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[77]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[78]]
#> $data$`data-00`$observations[[78]]$Sepal.Length
#> [1] 6.7
#> 
#> $data$`data-00`$observations[[78]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[78]]$Petal.Length
#> [1] 5
#> 
#> $data$`data-00`$observations[[78]]$Petal.Width
#> [1] 1.7
#> 
#> $data$`data-00`$observations[[78]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[79]]
#> $data$`data-00`$observations[[79]]$Sepal.Length
#> [1] 6
#> 
#> $data$`data-00`$observations[[79]]$Sepal.Width
#> [1] 2.9
#> 
#> $data$`data-00`$observations[[79]]$Petal.Length
#> [1] 4.5
#> 
#> $data$`data-00`$observations[[79]]$Petal.Width
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[79]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[80]]
#> $data$`data-00`$observations[[80]]$Sepal.Length
#> [1] 5.7
#> 
#> $data$`data-00`$observations[[80]]$Sepal.Width
#> [1] 2.6
#> 
#> $data$`data-00`$observations[[80]]$Petal.Length
#> [1] 3.5
#> 
#> $data$`data-00`$observations[[80]]$Petal.Width
#> [1] 1
#> 
#> $data$`data-00`$observations[[80]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[81]]
#> $data$`data-00`$observations[[81]]$Sepal.Length
#> [1] 5.5
#> 
#> $data$`data-00`$observations[[81]]$Sepal.Width
#> [1] 2.4
#> 
#> $data$`data-00`$observations[[81]]$Petal.Length
#> [1] 3.8
#> 
#> $data$`data-00`$observations[[81]]$Petal.Width
#> [1] 1.1
#> 
#> $data$`data-00`$observations[[81]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[82]]
#> $data$`data-00`$observations[[82]]$Sepal.Length
#> [1] 5.5
#> 
#> $data$`data-00`$observations[[82]]$Sepal.Width
#> [1] 2.4
#> 
#> $data$`data-00`$observations[[82]]$Petal.Length
#> [1] 3.7
#> 
#> $data$`data-00`$observations[[82]]$Petal.Width
#> [1] 1
#> 
#> $data$`data-00`$observations[[82]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[83]]
#> $data$`data-00`$observations[[83]]$Sepal.Length
#> [1] 5.8
#> 
#> $data$`data-00`$observations[[83]]$Sepal.Width
#> [1] 2.7
#> 
#> $data$`data-00`$observations[[83]]$Petal.Length
#> [1] 3.9
#> 
#> $data$`data-00`$observations[[83]]$Petal.Width
#> [1] 1.2
#> 
#> $data$`data-00`$observations[[83]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[84]]
#> $data$`data-00`$observations[[84]]$Sepal.Length
#> [1] 6
#> 
#> $data$`data-00`$observations[[84]]$Sepal.Width
#> [1] 2.7
#> 
#> $data$`data-00`$observations[[84]]$Petal.Length
#> [1] 5.1
#> 
#> $data$`data-00`$observations[[84]]$Petal.Width
#> [1] 1.6
#> 
#> $data$`data-00`$observations[[84]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[85]]
#> $data$`data-00`$observations[[85]]$Sepal.Length
#> [1] 5.4
#> 
#> $data$`data-00`$observations[[85]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[85]]$Petal.Length
#> [1] 4.5
#> 
#> $data$`data-00`$observations[[85]]$Petal.Width
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[85]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[86]]
#> $data$`data-00`$observations[[86]]$Sepal.Length
#> [1] 6
#> 
#> $data$`data-00`$observations[[86]]$Sepal.Width
#> [1] 3.4
#> 
#> $data$`data-00`$observations[[86]]$Petal.Length
#> [1] 4.5
#> 
#> $data$`data-00`$observations[[86]]$Petal.Width
#> [1] 1.6
#> 
#> $data$`data-00`$observations[[86]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[87]]
#> $data$`data-00`$observations[[87]]$Sepal.Length
#> [1] 6.7
#> 
#> $data$`data-00`$observations[[87]]$Sepal.Width
#> [1] 3.1
#> 
#> $data$`data-00`$observations[[87]]$Petal.Length
#> [1] 4.7
#> 
#> $data$`data-00`$observations[[87]]$Petal.Width
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[87]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[88]]
#> $data$`data-00`$observations[[88]]$Sepal.Length
#> [1] 6.3
#> 
#> $data$`data-00`$observations[[88]]$Sepal.Width
#> [1] 2.3
#> 
#> $data$`data-00`$observations[[88]]$Petal.Length
#> [1] 4.4
#> 
#> $data$`data-00`$observations[[88]]$Petal.Width
#> [1] 1.3
#> 
#> $data$`data-00`$observations[[88]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[89]]
#> $data$`data-00`$observations[[89]]$Sepal.Length
#> [1] 5.6
#> 
#> $data$`data-00`$observations[[89]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[89]]$Petal.Length
#> [1] 4.1
#> 
#> $data$`data-00`$observations[[89]]$Petal.Width
#> [1] 1.3
#> 
#> $data$`data-00`$observations[[89]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[90]]
#> $data$`data-00`$observations[[90]]$Sepal.Length
#> [1] 5.5
#> 
#> $data$`data-00`$observations[[90]]$Sepal.Width
#> [1] 2.5
#> 
#> $data$`data-00`$observations[[90]]$Petal.Length
#> [1] 4
#> 
#> $data$`data-00`$observations[[90]]$Petal.Width
#> [1] 1.3
#> 
#> $data$`data-00`$observations[[90]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[91]]
#> $data$`data-00`$observations[[91]]$Sepal.Length
#> [1] 5.5
#> 
#> $data$`data-00`$observations[[91]]$Sepal.Width
#> [1] 2.6
#> 
#> $data$`data-00`$observations[[91]]$Petal.Length
#> [1] 4.4
#> 
#> $data$`data-00`$observations[[91]]$Petal.Width
#> [1] 1.2
#> 
#> $data$`data-00`$observations[[91]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[92]]
#> $data$`data-00`$observations[[92]]$Sepal.Length
#> [1] 6.1
#> 
#> $data$`data-00`$observations[[92]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[92]]$Petal.Length
#> [1] 4.6
#> 
#> $data$`data-00`$observations[[92]]$Petal.Width
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[92]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[93]]
#> $data$`data-00`$observations[[93]]$Sepal.Length
#> [1] 5.8
#> 
#> $data$`data-00`$observations[[93]]$Sepal.Width
#> [1] 2.6
#> 
#> $data$`data-00`$observations[[93]]$Petal.Length
#> [1] 4
#> 
#> $data$`data-00`$observations[[93]]$Petal.Width
#> [1] 1.2
#> 
#> $data$`data-00`$observations[[93]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[94]]
#> $data$`data-00`$observations[[94]]$Sepal.Length
#> [1] 5
#> 
#> $data$`data-00`$observations[[94]]$Sepal.Width
#> [1] 2.3
#> 
#> $data$`data-00`$observations[[94]]$Petal.Length
#> [1] 3.3
#> 
#> $data$`data-00`$observations[[94]]$Petal.Width
#> [1] 1
#> 
#> $data$`data-00`$observations[[94]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[95]]
#> $data$`data-00`$observations[[95]]$Sepal.Length
#> [1] 5.6
#> 
#> $data$`data-00`$observations[[95]]$Sepal.Width
#> [1] 2.7
#> 
#> $data$`data-00`$observations[[95]]$Petal.Length
#> [1] 4.2
#> 
#> $data$`data-00`$observations[[95]]$Petal.Width
#> [1] 1.3
#> 
#> $data$`data-00`$observations[[95]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[96]]
#> $data$`data-00`$observations[[96]]$Sepal.Length
#> [1] 5.7
#> 
#> $data$`data-00`$observations[[96]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[96]]$Petal.Length
#> [1] 4.2
#> 
#> $data$`data-00`$observations[[96]]$Petal.Width
#> [1] 1.2
#> 
#> $data$`data-00`$observations[[96]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[97]]
#> $data$`data-00`$observations[[97]]$Sepal.Length
#> [1] 5.7
#> 
#> $data$`data-00`$observations[[97]]$Sepal.Width
#> [1] 2.9
#> 
#> $data$`data-00`$observations[[97]]$Petal.Length
#> [1] 4.2
#> 
#> $data$`data-00`$observations[[97]]$Petal.Width
#> [1] 1.3
#> 
#> $data$`data-00`$observations[[97]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[98]]
#> $data$`data-00`$observations[[98]]$Sepal.Length
#> [1] 6.2
#> 
#> $data$`data-00`$observations[[98]]$Sepal.Width
#> [1] 2.9
#> 
#> $data$`data-00`$observations[[98]]$Petal.Length
#> [1] 4.3
#> 
#> $data$`data-00`$observations[[98]]$Petal.Width
#> [1] 1.3
#> 
#> $data$`data-00`$observations[[98]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[99]]
#> $data$`data-00`$observations[[99]]$Sepal.Length
#> [1] 5.1
#> 
#> $data$`data-00`$observations[[99]]$Sepal.Width
#> [1] 2.5
#> 
#> $data$`data-00`$observations[[99]]$Petal.Length
#> [1] 3
#> 
#> $data$`data-00`$observations[[99]]$Petal.Width
#> [1] 1.1
#> 
#> $data$`data-00`$observations[[99]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[100]]
#> $data$`data-00`$observations[[100]]$Sepal.Length
#> [1] 5.7
#> 
#> $data$`data-00`$observations[[100]]$Sepal.Width
#> [1] 2.8
#> 
#> $data$`data-00`$observations[[100]]$Petal.Length
#> [1] 4.1
#> 
#> $data$`data-00`$observations[[100]]$Petal.Width
#> [1] 1.3
#> 
#> $data$`data-00`$observations[[100]]$Species
#> [1] "versicolor"
#> 
#> 
#> $data$`data-00`$observations[[101]]
#> $data$`data-00`$observations[[101]]$Sepal.Length
#> [1] 6.3
#> 
#> $data$`data-00`$observations[[101]]$Sepal.Width
#> [1] 3.3
#> 
#> $data$`data-00`$observations[[101]]$Petal.Length
#> [1] 6
#> 
#> $data$`data-00`$observations[[101]]$Petal.Width
#> [1] 2.5
#> 
#> $data$`data-00`$observations[[101]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[102]]
#> $data$`data-00`$observations[[102]]$Sepal.Length
#> [1] 5.8
#> 
#> $data$`data-00`$observations[[102]]$Sepal.Width
#> [1] 2.7
#> 
#> $data$`data-00`$observations[[102]]$Petal.Length
#> [1] 5.1
#> 
#> $data$`data-00`$observations[[102]]$Petal.Width
#> [1] 1.9
#> 
#> $data$`data-00`$observations[[102]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[103]]
#> $data$`data-00`$observations[[103]]$Sepal.Length
#> [1] 7.1
#> 
#> $data$`data-00`$observations[[103]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[103]]$Petal.Length
#> [1] 5.9
#> 
#> $data$`data-00`$observations[[103]]$Petal.Width
#> [1] 2.1
#> 
#> $data$`data-00`$observations[[103]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[104]]
#> $data$`data-00`$observations[[104]]$Sepal.Length
#> [1] 6.3
#> 
#> $data$`data-00`$observations[[104]]$Sepal.Width
#> [1] 2.9
#> 
#> $data$`data-00`$observations[[104]]$Petal.Length
#> [1] 5.6
#> 
#> $data$`data-00`$observations[[104]]$Petal.Width
#> [1] 1.8
#> 
#> $data$`data-00`$observations[[104]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[105]]
#> $data$`data-00`$observations[[105]]$Sepal.Length
#> [1] 6.5
#> 
#> $data$`data-00`$observations[[105]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[105]]$Petal.Length
#> [1] 5.8
#> 
#> $data$`data-00`$observations[[105]]$Petal.Width
#> [1] 2.2
#> 
#> $data$`data-00`$observations[[105]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[106]]
#> $data$`data-00`$observations[[106]]$Sepal.Length
#> [1] 7.6
#> 
#> $data$`data-00`$observations[[106]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[106]]$Petal.Length
#> [1] 6.6
#> 
#> $data$`data-00`$observations[[106]]$Petal.Width
#> [1] 2.1
#> 
#> $data$`data-00`$observations[[106]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[107]]
#> $data$`data-00`$observations[[107]]$Sepal.Length
#> [1] 4.9
#> 
#> $data$`data-00`$observations[[107]]$Sepal.Width
#> [1] 2.5
#> 
#> $data$`data-00`$observations[[107]]$Petal.Length
#> [1] 4.5
#> 
#> $data$`data-00`$observations[[107]]$Petal.Width
#> [1] 1.7
#> 
#> $data$`data-00`$observations[[107]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[108]]
#> $data$`data-00`$observations[[108]]$Sepal.Length
#> [1] 7.3
#> 
#> $data$`data-00`$observations[[108]]$Sepal.Width
#> [1] 2.9
#> 
#> $data$`data-00`$observations[[108]]$Petal.Length
#> [1] 6.3
#> 
#> $data$`data-00`$observations[[108]]$Petal.Width
#> [1] 1.8
#> 
#> $data$`data-00`$observations[[108]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[109]]
#> $data$`data-00`$observations[[109]]$Sepal.Length
#> [1] 6.7
#> 
#> $data$`data-00`$observations[[109]]$Sepal.Width
#> [1] 2.5
#> 
#> $data$`data-00`$observations[[109]]$Petal.Length
#> [1] 5.8
#> 
#> $data$`data-00`$observations[[109]]$Petal.Width
#> [1] 1.8
#> 
#> $data$`data-00`$observations[[109]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[110]]
#> $data$`data-00`$observations[[110]]$Sepal.Length
#> [1] 7.2
#> 
#> $data$`data-00`$observations[[110]]$Sepal.Width
#> [1] 3.6
#> 
#> $data$`data-00`$observations[[110]]$Petal.Length
#> [1] 6.1
#> 
#> $data$`data-00`$observations[[110]]$Petal.Width
#> [1] 2.5
#> 
#> $data$`data-00`$observations[[110]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[111]]
#> $data$`data-00`$observations[[111]]$Sepal.Length
#> [1] 6.5
#> 
#> $data$`data-00`$observations[[111]]$Sepal.Width
#> [1] 3.2
#> 
#> $data$`data-00`$observations[[111]]$Petal.Length
#> [1] 5.1
#> 
#> $data$`data-00`$observations[[111]]$Petal.Width
#> [1] 2
#> 
#> $data$`data-00`$observations[[111]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[112]]
#> $data$`data-00`$observations[[112]]$Sepal.Length
#> [1] 6.4
#> 
#> $data$`data-00`$observations[[112]]$Sepal.Width
#> [1] 2.7
#> 
#> $data$`data-00`$observations[[112]]$Petal.Length
#> [1] 5.3
#> 
#> $data$`data-00`$observations[[112]]$Petal.Width
#> [1] 1.9
#> 
#> $data$`data-00`$observations[[112]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[113]]
#> $data$`data-00`$observations[[113]]$Sepal.Length
#> [1] 6.8
#> 
#> $data$`data-00`$observations[[113]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[113]]$Petal.Length
#> [1] 5.5
#> 
#> $data$`data-00`$observations[[113]]$Petal.Width
#> [1] 2.1
#> 
#> $data$`data-00`$observations[[113]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[114]]
#> $data$`data-00`$observations[[114]]$Sepal.Length
#> [1] 5.7
#> 
#> $data$`data-00`$observations[[114]]$Sepal.Width
#> [1] 2.5
#> 
#> $data$`data-00`$observations[[114]]$Petal.Length
#> [1] 5
#> 
#> $data$`data-00`$observations[[114]]$Petal.Width
#> [1] 2
#> 
#> $data$`data-00`$observations[[114]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[115]]
#> $data$`data-00`$observations[[115]]$Sepal.Length
#> [1] 5.8
#> 
#> $data$`data-00`$observations[[115]]$Sepal.Width
#> [1] 2.8
#> 
#> $data$`data-00`$observations[[115]]$Petal.Length
#> [1] 5.1
#> 
#> $data$`data-00`$observations[[115]]$Petal.Width
#> [1] 2.4
#> 
#> $data$`data-00`$observations[[115]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[116]]
#> $data$`data-00`$observations[[116]]$Sepal.Length
#> [1] 6.4
#> 
#> $data$`data-00`$observations[[116]]$Sepal.Width
#> [1] 3.2
#> 
#> $data$`data-00`$observations[[116]]$Petal.Length
#> [1] 5.3
#> 
#> $data$`data-00`$observations[[116]]$Petal.Width
#> [1] 2.3
#> 
#> $data$`data-00`$observations[[116]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[117]]
#> $data$`data-00`$observations[[117]]$Sepal.Length
#> [1] 6.5
#> 
#> $data$`data-00`$observations[[117]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[117]]$Petal.Length
#> [1] 5.5
#> 
#> $data$`data-00`$observations[[117]]$Petal.Width
#> [1] 1.8
#> 
#> $data$`data-00`$observations[[117]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[118]]
#> $data$`data-00`$observations[[118]]$Sepal.Length
#> [1] 7.7
#> 
#> $data$`data-00`$observations[[118]]$Sepal.Width
#> [1] 3.8
#> 
#> $data$`data-00`$observations[[118]]$Petal.Length
#> [1] 6.7
#> 
#> $data$`data-00`$observations[[118]]$Petal.Width
#> [1] 2.2
#> 
#> $data$`data-00`$observations[[118]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[119]]
#> $data$`data-00`$observations[[119]]$Sepal.Length
#> [1] 7.7
#> 
#> $data$`data-00`$observations[[119]]$Sepal.Width
#> [1] 2.6
#> 
#> $data$`data-00`$observations[[119]]$Petal.Length
#> [1] 6.9
#> 
#> $data$`data-00`$observations[[119]]$Petal.Width
#> [1] 2.3
#> 
#> $data$`data-00`$observations[[119]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[120]]
#> $data$`data-00`$observations[[120]]$Sepal.Length
#> [1] 6
#> 
#> $data$`data-00`$observations[[120]]$Sepal.Width
#> [1] 2.2
#> 
#> $data$`data-00`$observations[[120]]$Petal.Length
#> [1] 5
#> 
#> $data$`data-00`$observations[[120]]$Petal.Width
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[120]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[121]]
#> $data$`data-00`$observations[[121]]$Sepal.Length
#> [1] 6.9
#> 
#> $data$`data-00`$observations[[121]]$Sepal.Width
#> [1] 3.2
#> 
#> $data$`data-00`$observations[[121]]$Petal.Length
#> [1] 5.7
#> 
#> $data$`data-00`$observations[[121]]$Petal.Width
#> [1] 2.3
#> 
#> $data$`data-00`$observations[[121]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[122]]
#> $data$`data-00`$observations[[122]]$Sepal.Length
#> [1] 5.6
#> 
#> $data$`data-00`$observations[[122]]$Sepal.Width
#> [1] 2.8
#> 
#> $data$`data-00`$observations[[122]]$Petal.Length
#> [1] 4.9
#> 
#> $data$`data-00`$observations[[122]]$Petal.Width
#> [1] 2
#> 
#> $data$`data-00`$observations[[122]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[123]]
#> $data$`data-00`$observations[[123]]$Sepal.Length
#> [1] 7.7
#> 
#> $data$`data-00`$observations[[123]]$Sepal.Width
#> [1] 2.8
#> 
#> $data$`data-00`$observations[[123]]$Petal.Length
#> [1] 6.7
#> 
#> $data$`data-00`$observations[[123]]$Petal.Width
#> [1] 2
#> 
#> $data$`data-00`$observations[[123]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[124]]
#> $data$`data-00`$observations[[124]]$Sepal.Length
#> [1] 6.3
#> 
#> $data$`data-00`$observations[[124]]$Sepal.Width
#> [1] 2.7
#> 
#> $data$`data-00`$observations[[124]]$Petal.Length
#> [1] 4.9
#> 
#> $data$`data-00`$observations[[124]]$Petal.Width
#> [1] 1.8
#> 
#> $data$`data-00`$observations[[124]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[125]]
#> $data$`data-00`$observations[[125]]$Sepal.Length
#> [1] 6.7
#> 
#> $data$`data-00`$observations[[125]]$Sepal.Width
#> [1] 3.3
#> 
#> $data$`data-00`$observations[[125]]$Petal.Length
#> [1] 5.7
#> 
#> $data$`data-00`$observations[[125]]$Petal.Width
#> [1] 2.1
#> 
#> $data$`data-00`$observations[[125]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[126]]
#> $data$`data-00`$observations[[126]]$Sepal.Length
#> [1] 7.2
#> 
#> $data$`data-00`$observations[[126]]$Sepal.Width
#> [1] 3.2
#> 
#> $data$`data-00`$observations[[126]]$Petal.Length
#> [1] 6
#> 
#> $data$`data-00`$observations[[126]]$Petal.Width
#> [1] 1.8
#> 
#> $data$`data-00`$observations[[126]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[127]]
#> $data$`data-00`$observations[[127]]$Sepal.Length
#> [1] 6.2
#> 
#> $data$`data-00`$observations[[127]]$Sepal.Width
#> [1] 2.8
#> 
#> $data$`data-00`$observations[[127]]$Petal.Length
#> [1] 4.8
#> 
#> $data$`data-00`$observations[[127]]$Petal.Width
#> [1] 1.8
#> 
#> $data$`data-00`$observations[[127]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[128]]
#> $data$`data-00`$observations[[128]]$Sepal.Length
#> [1] 6.1
#> 
#> $data$`data-00`$observations[[128]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[128]]$Petal.Length
#> [1] 4.9
#> 
#> $data$`data-00`$observations[[128]]$Petal.Width
#> [1] 1.8
#> 
#> $data$`data-00`$observations[[128]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[129]]
#> $data$`data-00`$observations[[129]]$Sepal.Length
#> [1] 6.4
#> 
#> $data$`data-00`$observations[[129]]$Sepal.Width
#> [1] 2.8
#> 
#> $data$`data-00`$observations[[129]]$Petal.Length
#> [1] 5.6
#> 
#> $data$`data-00`$observations[[129]]$Petal.Width
#> [1] 2.1
#> 
#> $data$`data-00`$observations[[129]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[130]]
#> $data$`data-00`$observations[[130]]$Sepal.Length
#> [1] 7.2
#> 
#> $data$`data-00`$observations[[130]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[130]]$Petal.Length
#> [1] 5.8
#> 
#> $data$`data-00`$observations[[130]]$Petal.Width
#> [1] 1.6
#> 
#> $data$`data-00`$observations[[130]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[131]]
#> $data$`data-00`$observations[[131]]$Sepal.Length
#> [1] 7.4
#> 
#> $data$`data-00`$observations[[131]]$Sepal.Width
#> [1] 2.8
#> 
#> $data$`data-00`$observations[[131]]$Petal.Length
#> [1] 6.1
#> 
#> $data$`data-00`$observations[[131]]$Petal.Width
#> [1] 1.9
#> 
#> $data$`data-00`$observations[[131]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[132]]
#> $data$`data-00`$observations[[132]]$Sepal.Length
#> [1] 7.9
#> 
#> $data$`data-00`$observations[[132]]$Sepal.Width
#> [1] 3.8
#> 
#> $data$`data-00`$observations[[132]]$Petal.Length
#> [1] 6.4
#> 
#> $data$`data-00`$observations[[132]]$Petal.Width
#> [1] 2
#> 
#> $data$`data-00`$observations[[132]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[133]]
#> $data$`data-00`$observations[[133]]$Sepal.Length
#> [1] 6.4
#> 
#> $data$`data-00`$observations[[133]]$Sepal.Width
#> [1] 2.8
#> 
#> $data$`data-00`$observations[[133]]$Petal.Length
#> [1] 5.6
#> 
#> $data$`data-00`$observations[[133]]$Petal.Width
#> [1] 2.2
#> 
#> $data$`data-00`$observations[[133]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[134]]
#> $data$`data-00`$observations[[134]]$Sepal.Length
#> [1] 6.3
#> 
#> $data$`data-00`$observations[[134]]$Sepal.Width
#> [1] 2.8
#> 
#> $data$`data-00`$observations[[134]]$Petal.Length
#> [1] 5.1
#> 
#> $data$`data-00`$observations[[134]]$Petal.Width
#> [1] 1.5
#> 
#> $data$`data-00`$observations[[134]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[135]]
#> $data$`data-00`$observations[[135]]$Sepal.Length
#> [1] 6.1
#> 
#> $data$`data-00`$observations[[135]]$Sepal.Width
#> [1] 2.6
#> 
#> $data$`data-00`$observations[[135]]$Petal.Length
#> [1] 5.6
#> 
#> $data$`data-00`$observations[[135]]$Petal.Width
#> [1] 1.4
#> 
#> $data$`data-00`$observations[[135]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[136]]
#> $data$`data-00`$observations[[136]]$Sepal.Length
#> [1] 7.7
#> 
#> $data$`data-00`$observations[[136]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[136]]$Petal.Length
#> [1] 6.1
#> 
#> $data$`data-00`$observations[[136]]$Petal.Width
#> [1] 2.3
#> 
#> $data$`data-00`$observations[[136]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[137]]
#> $data$`data-00`$observations[[137]]$Sepal.Length
#> [1] 6.3
#> 
#> $data$`data-00`$observations[[137]]$Sepal.Width
#> [1] 3.4
#> 
#> $data$`data-00`$observations[[137]]$Petal.Length
#> [1] 5.6
#> 
#> $data$`data-00`$observations[[137]]$Petal.Width
#> [1] 2.4
#> 
#> $data$`data-00`$observations[[137]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[138]]
#> $data$`data-00`$observations[[138]]$Sepal.Length
#> [1] 6.4
#> 
#> $data$`data-00`$observations[[138]]$Sepal.Width
#> [1] 3.1
#> 
#> $data$`data-00`$observations[[138]]$Petal.Length
#> [1] 5.5
#> 
#> $data$`data-00`$observations[[138]]$Petal.Width
#> [1] 1.8
#> 
#> $data$`data-00`$observations[[138]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[139]]
#> $data$`data-00`$observations[[139]]$Sepal.Length
#> [1] 6
#> 
#> $data$`data-00`$observations[[139]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[139]]$Petal.Length
#> [1] 4.8
#> 
#> $data$`data-00`$observations[[139]]$Petal.Width
#> [1] 1.8
#> 
#> $data$`data-00`$observations[[139]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[140]]
#> $data$`data-00`$observations[[140]]$Sepal.Length
#> [1] 6.9
#> 
#> $data$`data-00`$observations[[140]]$Sepal.Width
#> [1] 3.1
#> 
#> $data$`data-00`$observations[[140]]$Petal.Length
#> [1] 5.4
#> 
#> $data$`data-00`$observations[[140]]$Petal.Width
#> [1] 2.1
#> 
#> $data$`data-00`$observations[[140]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[141]]
#> $data$`data-00`$observations[[141]]$Sepal.Length
#> [1] 6.7
#> 
#> $data$`data-00`$observations[[141]]$Sepal.Width
#> [1] 3.1
#> 
#> $data$`data-00`$observations[[141]]$Petal.Length
#> [1] 5.6
#> 
#> $data$`data-00`$observations[[141]]$Petal.Width
#> [1] 2.4
#> 
#> $data$`data-00`$observations[[141]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[142]]
#> $data$`data-00`$observations[[142]]$Sepal.Length
#> [1] 6.9
#> 
#> $data$`data-00`$observations[[142]]$Sepal.Width
#> [1] 3.1
#> 
#> $data$`data-00`$observations[[142]]$Petal.Length
#> [1] 5.1
#> 
#> $data$`data-00`$observations[[142]]$Petal.Width
#> [1] 2.3
#> 
#> $data$`data-00`$observations[[142]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[143]]
#> $data$`data-00`$observations[[143]]$Sepal.Length
#> [1] 5.8
#> 
#> $data$`data-00`$observations[[143]]$Sepal.Width
#> [1] 2.7
#> 
#> $data$`data-00`$observations[[143]]$Petal.Length
#> [1] 5.1
#> 
#> $data$`data-00`$observations[[143]]$Petal.Width
#> [1] 1.9
#> 
#> $data$`data-00`$observations[[143]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[144]]
#> $data$`data-00`$observations[[144]]$Sepal.Length
#> [1] 6.8
#> 
#> $data$`data-00`$observations[[144]]$Sepal.Width
#> [1] 3.2
#> 
#> $data$`data-00`$observations[[144]]$Petal.Length
#> [1] 5.9
#> 
#> $data$`data-00`$observations[[144]]$Petal.Width
#> [1] 2.3
#> 
#> $data$`data-00`$observations[[144]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[145]]
#> $data$`data-00`$observations[[145]]$Sepal.Length
#> [1] 6.7
#> 
#> $data$`data-00`$observations[[145]]$Sepal.Width
#> [1] 3.3
#> 
#> $data$`data-00`$observations[[145]]$Petal.Length
#> [1] 5.7
#> 
#> $data$`data-00`$observations[[145]]$Petal.Width
#> [1] 2.5
#> 
#> $data$`data-00`$observations[[145]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[146]]
#> $data$`data-00`$observations[[146]]$Sepal.Length
#> [1] 6.7
#> 
#> $data$`data-00`$observations[[146]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[146]]$Petal.Length
#> [1] 5.2
#> 
#> $data$`data-00`$observations[[146]]$Petal.Width
#> [1] 2.3
#> 
#> $data$`data-00`$observations[[146]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[147]]
#> $data$`data-00`$observations[[147]]$Sepal.Length
#> [1] 6.3
#> 
#> $data$`data-00`$observations[[147]]$Sepal.Width
#> [1] 2.5
#> 
#> $data$`data-00`$observations[[147]]$Petal.Length
#> [1] 5
#> 
#> $data$`data-00`$observations[[147]]$Petal.Width
#> [1] 1.9
#> 
#> $data$`data-00`$observations[[147]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[148]]
#> $data$`data-00`$observations[[148]]$Sepal.Length
#> [1] 6.5
#> 
#> $data$`data-00`$observations[[148]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[148]]$Petal.Length
#> [1] 5.2
#> 
#> $data$`data-00`$observations[[148]]$Petal.Width
#> [1] 2
#> 
#> $data$`data-00`$observations[[148]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[149]]
#> $data$`data-00`$observations[[149]]$Sepal.Length
#> [1] 6.2
#> 
#> $data$`data-00`$observations[[149]]$Sepal.Width
#> [1] 3.4
#> 
#> $data$`data-00`$observations[[149]]$Petal.Length
#> [1] 5.4
#> 
#> $data$`data-00`$observations[[149]]$Petal.Width
#> [1] 2.3
#> 
#> $data$`data-00`$observations[[149]]$Species
#> [1] "virginica"
#> 
#> 
#> $data$`data-00`$observations[[150]]
#> $data$`data-00`$observations[[150]]$Sepal.Length
#> [1] 5.9
#> 
#> $data$`data-00`$observations[[150]]$Sepal.Width
#> [1] 3
#> 
#> $data$`data-00`$observations[[150]]$Petal.Length
#> [1] 5.1
#> 
#> $data$`data-00`$observations[[150]]$Petal.Width
#> [1] 1.8
#> 
#> $data$`data-00`$observations[[150]]$Species
#> [1] "virginica"
#> 
#> 
#> 
#> 
#> 
#> $layers
#> $layers[[1]]
#> $layers[[1]]$data
#> [1] "data-00"
#> 
#> $layers[[1]]$geom
#> $layers[[1]]$geom$class
#> [1] "GeomPoint"
#> 
#> 
#> $layers[[1]]$mapping
#> $layers[[1]]$mapping$x
#> $layers[[1]]$mapping$x$field
#> [1] "Petal.Width"
#> 
#> 
#> $layers[[1]]$mapping$y
#> $layers[[1]]$mapping$y$field
#> [1] "Petal.Length"
#> 
#> 
#> $layers[[1]]$mapping$colour
#> $layers[[1]]$mapping$colour$field
#> [1] "Species"
#> 
#> 
#> 
#> $layers[[1]]$aes_params
#> NULL
#> 
#> $layers[[1]]$stat
#> $layers[[1]]$stat$class
#> [1] "StatIdentity"
#> 
#> 
#> 
#> 
#> $scales
#> list()
#> 
#> $labels
#> $labels$x
#> [1] "Petal.Width"
#> 
#> $labels$y
#> [1] "Petal.Length"
#> 
#> $labels$colour
#> [1] "Species"
```

## test

    library(ggvega)
    library(ggplot2)
    
    p <- 
      ggplot(iris) + 
      geom_point(aes(x = Petal.Width, y = Petal.Length, colour = Species))
    
    as_vegaspec(p)

### Important Note

This package is in an *extremely* experimental state, under *very*
active development.

At present, we can translate:

  - `geom_point()`
  - aesthetics: `x`, `y`, `colour`
  - unit-plots; no facetting.

We have plans to expand this capability; presently, we are working out a
system to add new capabilities quickly and reliably.

## Installation

You can install the development version from
[GitHub](https://github.com/) with:

``` r
# install.packages("devtools")
devtools::install_github("vegawidget/ggvega")
```
