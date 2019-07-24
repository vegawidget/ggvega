Adding inheritance to the ggspec function
================

<br/>

## Extracting elements

<br/>

``` r
p <- ggplot(data = iris) + 
  geom_point(aes(x = Petal.Width, y = Petal.Length)) + 
  geom_point(aes(x = Petal.Width, y = Petal.Length, color = Species), shape = 21, fill = "white") +
  scale_y_log10()

p <- ggplot(data = iris, aes(x = Petal.Width, y = Petal.Length)) + 
  geom_point(aes(color = Species))

p
```

![](03-ggspec-inherit_aes_files/figure-gfm/unnamed-chunk-1-1.png)<!-- -->

<br/>

### Extracting data

The first move will be to create the list `data` where all of the data
will live.

<!-- QUESTION: what to do about `waiver()` objects? -->

#### Intermediate data step

`data_int()` will create an intermediate-form for the data. The inputs
are the plot data and the plot layers. The result is a named list of
datasets, named `data-00`, `data-01`, …, where each list contains the
elements `metadata`, `variables`, and `hash`.

  - Need to name the datasets but will need to check for matching
    hashsums and remove `NULL`s
      - Would like only the default data to be able to be named
        `data-00`  
      - The other data sets will be named `data-01`, `data-02`, and so
        on.  
  - `metadata` will be a named list (names are variable names) of 3 (1
    required, 2 optional)
      - `type` = variable type (required)
      - `levels` = levels of factor (optional)
      - `timezone` = timezone of `date` or `POSIXct` (optional)

<!-- end list -->

``` r
data_int <- function(data_plt, layers_plt) {

  # join together default data and layer data
  data_all <- append(list(data_plt), purrr::map(layers_plt, purrr::pluck, "data"))

  # format the lists of data
  data_all <- purrr::map(data_all, format_data_int)

  # name datasets
  names(data_all) <-
    purrr::map_chr(
      seq_along(data_all),
      ~glue::glue("data-{sprintf('%02i', .x - 1L)}")
    )

  # remove NULL entries
  data_all <- purrr::discard(data_all, is.null)

  # remove duplicate entries
  data_unique <- data_remove_duplicates(data_all)

  data_unique
}
```

<br/>

Helper functions:

`format_data_int()` will format each list of data so that it contains:

  - `metadata`: discussed below
  - `variables`: the data frame itself  
  - `hash`: the md5 hash of the data frame

<!-- end list -->

``` r
format_data_int <- function(dat) {

  if (is.waive(dat) || is.null(dat)) {
    return(NULL)
  }

  list(
    metadata = purrr::map(dat, create_meta),
    variables = purrr::map(dat, format_var),
    hash = digest::digest(dat)
  )
}
```

`create_meta_levels()` will create the names list of 3

  - `metadata`: could be a named list, using names of variables:
      - `type`: first pass at `"quantitative"`, …, based on class,
        etc.  
      - `levels`: optional, vector of strings, used for factor-levels  
      - `timezone`: optional, timezone of `date` or `POSIXct`

`case_type_vl()` converts the type into a Vega-lite type

``` r
type_r <- function(x) {

  # perhaps all these if-else are going too far...

  if (is.numeric(x)) {
    return("numeric")
  }

  if (is.character(x)) {
    return("character")
  }

  if (inherits(x, "POSIXct")) {
    return( "POSIXct")
  }

  if (inherits(x, "Date")) {
    return("Date")
  }

  if (is.ordered(x)) {
    return("ordered")
  }

  if (is.factor(x)) {
    return("factor")
  }

  # TODO: if we miss everything, throw error?

}

type_vl <- function(type_r) {

  key <- list(
    numeric = "quantitative",
    character = "nominal",
    factor = "nominal",
    ordered = "ordinal",
    Date = "temporal",
    POSIXct = "temporal"
  )

  key[[type_r]]
}

create_meta <- function(x) {

  type_r_local <- type_r(x)
  type_vl_local <- type_vl(type_r_local)

  meta <- list(type = type_vl_local)

  if (type_r_local %in% c("factor", "ordered")) {
    meta[["levels"]] <- levels(x)
  }

  if (identical(type_r_local, "POSIXct")) {
    meta[["timezone"]] <- attr(x, "tz")
  }

  meta
}

format_var <- function(x) {

  type_r_local <- type_r(x)

  if (!(type_r_local %in% c("factor", "ordered"))) {
    return(x)
  }

  x <- as.character(x)

  x
}
```

``` r
data_remove_duplicates <- function(int_data) {

  # hash is a *named* character vector
  hash <- purrr::map_chr(int_data, purrr::pluck, "hash")

  # subset with the non-duplicated hashes
  hash_unique <- hash[!duplicated(hash)]

  # subset int_data using these names
  int_data_unique <- int_data[names(hash_unique)]

  int_data_unique
}
```

<br/>

Example of the function in use:

``` r
int_data <- data_int(p$data, p$layers)
str(int_data)
```

    ## List of 1
    ##  $ data-00:List of 3
    ##   ..$ metadata :List of 5
    ##   .. ..$ Sepal.Length:List of 1
    ##   .. .. ..$ type: chr "quantitative"
    ##   .. ..$ Sepal.Width :List of 1
    ##   .. .. ..$ type: chr "quantitative"
    ##   .. ..$ Petal.Length:List of 1
    ##   .. .. ..$ type: chr "quantitative"
    ##   .. ..$ Petal.Width :List of 1
    ##   .. .. ..$ type: chr "quantitative"
    ##   .. ..$ Species     :List of 2
    ##   .. .. ..$ type  : chr "nominal"
    ##   .. .. ..$ levels: chr [1:3] "setosa" "versicolor" "virginica"
    ##   ..$ variables:List of 5
    ##   .. ..$ Sepal.Length: num [1:150] 5.1 4.9 4.7 4.6 5 5.4 4.6 5 4.4 4.9 ...
    ##   .. ..$ Sepal.Width : num [1:150] 3.5 3 3.2 3.1 3.6 3.9 3.4 3.4 2.9 3.1 ...
    ##   .. ..$ Petal.Length: num [1:150] 1.4 1.4 1.3 1.5 1.4 1.7 1.4 1.5 1.4 1.5 ...
    ##   .. ..$ Petal.Width : num [1:150] 0.2 0.2 0.2 0.2 0.2 0.4 0.3 0.2 0.2 0.1 ...
    ##   .. ..$ Species     : chr [1:150] "setosa" "setosa" "setosa" "setosa" ...
    ##   ..$ hash     : chr "d3c5d071001b61a9f6131d3004fd0988"

<br/>

This intermediate-form could be used to generate the ggspec-form; it
could also be useful later.

<br/>

#### Final data step

`data_spc()` will return a named list of datasets, named `data-00`,
`data-01`, … . Each list will have:

  - `metadata`, as in `data_int()`  
  - `observations`, transpose of variables

<!-- end list -->

``` r
format_data_spec <- function(dat) {
  list(
    metadata = dat$metadata,
    observations = purrr::transpose(dat$variables)
  )
}

data_spc <- function(int_data) {
  purrr::map(int_data, format_data_spec)
}
```

``` r
str(data_spc(int_data), max.level = 2)
```

    ## List of 1
    ##  $ data-00:List of 2
    ##   ..$ metadata    :List of 5
    ##   ..$ observations:List of 150

<br/>

### Extracting mappings

``` r
mapping_spc <- function(mapping_plt){
   mapping_plt %>% purrr::map(get_mappings)
}
```

``` r
get_mappings <- function(aes) {
  list(field = as.character(rlang::get_expr(aes)))
}
```

``` r
int_map <- mapping_spc(p$mapping)
int_map
```

    ## $x
    ## $x$field
    ## [1] "Petal.Width"
    ## 
    ## 
    ## $y
    ## $y$field
    ## [1] "Petal.Length"

### Extracting layers

Within each layer-object, we need:

1.  data (a reference id?)  
2.  geom  
3.  geom\_params (maybe)  
4.  mapping  
5.  aes\_params  
6.  stat (maybe)  
7.  stat\_params (maybe)

<br/>

The ggspec layers are a function of the ggplot layers, but also of the
data:

`layer_spc()` calls `get_layers()` for each layer. `get_layers()`
returns …

  - if `layer_plt` has no data, use `data-00`  
  - if `layer_plt` has data, hash it and compare against `data_int`, use
    name  
  - make sure that the mapping field is a name in the dataset

<!-- end list -->

``` r
layer_spc <- function(layer_plt, int_data, int_map) {
  purrr::map(layer_plt, get_layers, int_data, int_map)
}
```

<br/>

Helper functions:

``` r
get_layers <- function(layer, int_data, int_map) {
  pluck_layer <- purrr::partial(purrr::pluck, .x = layer)
  
  layer_map = pluck_layer("mapping") %>% purrr::map(get_mappings)

  list(
    data = pluck_layer("data") %>% get_data_name(int_data),
    geom = list(
      class = pluck_layer("geom", class, 1)
    ),
    mapping = modifyList(int_map, layer_map),
    aes_params = pluck_layer("aes_params"),
    stat = list(
      class = pluck_layer("stat", class, 1)
    )
  )
}
```

In `get_data_name()`:

  - if `layer_data` has no data, use `data-00`  
  - if `layer_data` has data, hash it and compare against `int_data`,
    use name  
  - make sure that the mapping field is a name in the dataset

<!-- end list -->

``` r
get_data_name <- function(layer_data, int_data) {

  if (is.waive(layer_data) || is.null(layer_data)) {
    return("data-00")
  }

  # *named* character vector
  hash_int_data <- purrr::map_chr(int_data, purrr::pluck, "hash")

  hash_layer_data <- digest::digest(layer_data)

  # subset library to get match with layer
  hash_match <- hash_int_data[hash_int_data == hash_layer_data]

  # we want to return the name
  name_hash_match <- names(hash_match)

  name_hash_match
}
```

<br/>

Example of function being used:

``` r
str(layer_spc(p$layers, int_data, int_map))
```

    ## List of 1
    ##  $ :List of 5
    ##   ..$ data      : chr "data-00"
    ##   ..$ geom      :List of 1
    ##   .. ..$ class: chr "GeomPoint"
    ##   ..$ mapping   :List of 3
    ##   .. ..$ x     :List of 1
    ##   .. .. ..$ field: chr "Petal.Width"
    ##   .. ..$ y     :List of 1
    ##   .. .. ..$ field: chr "Petal.Length"
    ##   .. ..$ colour:List of 1
    ##   .. .. ..$ field: chr "Species"
    ##   ..$ aes_params: NULL
    ##   ..$ stat      :List of 1
    ##   .. ..$ class: chr "StatIdentity"

<br/>

### Extracting scales

I think that scales will be one-to-one:

`scales_spc()` calls `get_scales()` which operates on a single scale,
used with purrr::map(), to get …

will need to first check if there is even anything there…

``` r
get_scales <- function(scale) {
  
  pluck_scale <- purrr::partial(purrr::pluck, .x = scale)
    
  list(
    name = pluck_scale("name"),
    class = pluck_scale(class, 1),
    aesthetics = pluck_scale("aesthetics", 1),
    transform = list(
      name = pluck_scale("trans", "name")
    )
  )
}

scale_spc <- function(scale_plt) {
  purrr::map(scale_plt, get_scales)
}
```

``` r
str(scale_spc(p$scales$scales))
```

    ##  list()

<br/>

### Extracting labels

Finally, labels:

``` r
find_scale_labs <- function(labs) {
  lab <- purrr::pluck(labs, "name")
  if(!is.waive(lab)) {
    names(lab) <- purrr::pluck(labs, "aesthetics", 1)
    lab
  }
  
}

labels_spc <- function(labels_plt, scales_plt) {
  # Find the right way to deal with labels - we could run into a
  # problem if we have, say, multiple color scales
  
  # scale_labs <- purrr::map(p_scale$scales$scales, find_scale_labs)
  
  # How to replace the labels with scale labels???
  
  labels_plt
}
```

``` r
p_lab <- ggplot(iris) + 
  geom_point(aes(x = Petal.Width, y = Petal.Length)) + 
  geom_point(aes(x = Petal.Width, y = Petal.Length), color = "firebrick") +
  scale_y_log10() +
  labs(x = "new lab")

p_scale <- ggplot(iris) + 
  geom_point(aes(x = Petal.Width, y = Petal.Length)) + 
  geom_point(aes(x = Petal.Width, y = Petal.Length), color = "firebrick") +
  scale_y_log10("new lab") 

ps <- ggplot_build(p_scale)
```

<br/>

## All together now\!

<br/>

``` r
gg2spec <- function(plt){
  int_data <- data_int(plt$data, plt$layers)
  int_map <- mapping_spc(plt$mapping)

  list(
    data = data_spc(int_data),
    layers = layer_spc(plt$layers, int_data, int_map),
    scales = scale_spc(plt$scales$scales),
    labels = plt$labels
  )
}
```

<br/>

Try it out:

``` r
str(gg2spec(p), max.level = 3)
```

    ## List of 4
    ##  $ data  :List of 1
    ##   ..$ data-00:List of 2
    ##   .. ..$ metadata    :List of 5
    ##   .. ..$ observations:List of 150
    ##  $ layers:List of 1
    ##   ..$ :List of 5
    ##   .. ..$ data      : chr "data-00"
    ##   .. ..$ geom      :List of 1
    ##   .. ..$ mapping   :List of 3
    ##   .. ..$ aes_params: NULL
    ##   .. ..$ stat      :List of 1
    ##  $ scales: list()
    ##  $ labels:List of 3
    ##   ..$ x     : chr "Petal.Width"
    ##   ..$ y     : chr "Petal.Length"
    ##   ..$ colour: chr "Species"

<br/> <br/>

``` r
pp <- ggplot(iris) + 
  geom_point(aes(x = Petal.Width, y = Petal.Length, color = Species)) + 
  geom_point(aes(x = Petal.Width, y = Petal.Length), color = "firebrick", size = 1) +
  scale_y_log10("new lab") 

str(gg2spec(p_scale), max.level = 3)
str(gg2spec(pp), max.level = 3)
```
