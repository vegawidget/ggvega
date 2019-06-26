#' Extract layers
#'
#' Extract necessary information from the ggplot layers object.
#'
#' @param layer_plt A `list` of layers from the ggplot object.
#' @param int_data An intermediate-form for the data created by `data_int()`
#'
#' @return `list` of layers each with their layer components
#' @export
#'
#' @examples
#' library(ggplot2)
#' p <- ggplot(data = iris)
#' p <- p + geom_point(aes(x = Petal.Width, y = Petal.Length))
#' dat <-  data_int(p$data, p$layers)
#' layer_spc(p$layers, dat)
layer_spc <- function(layer_plt, int_data) {
  purrr::map(layer_plt, get_layers, int_data)
}


#' Get layer information
#'
#' Extract necessary information from a single ggplot layer list element. Is called by `layer_spc()`.`
#'
#'
#' @param layer A single ggplot2 layer object.
#' @param int_data An intermediate-form for the data created by `data_int()`.
#'
#' @return `list` of layer components
#' @export
#'
#' @examples
#' library(ggplot2)
#' p <- ggplot(data = iris)
#' p <- p + geom_point(aes(x = Petal.Width, y = Petal.Length))
#' dat <-  data_int(p$data, p$layers)
#' get_layers(p$layers[[1]], dat)
get_layers <- function(layer, int_data) {
  pluck_layer <- purrr::partial(purrr::pluck, .x = layer)

  list(
    data = pluck_layer("data") %>% get_data_name(int_data),
    geom = list(
      class = pluck_layer("geom", class, 1)
    ),
    mapping = pluck_layer("mapping") %>% purrr::map(get_mappings),
    aes_params = pluck_layer("aes_params"),
    stat = list(
      class = pluck_layer("stat", class, 1)
    )
  )
}


#' Extract layer mapping information
#'
#' Extract the field name for the aesthetic
#'
#' @param aes An element from the list of mappings from a single ggplot2 layer object.
#'
#' @return `list` of mapping specifications
#' @export
#'
#' @examples
#' library(ggplot2)
#' p <- ggplot(data = iris)
#' p <- p + geom_point(aes(x = Petal.Width, y = Petal.Length))
#' get_mappings(p$layers[[1]]$mapping[[1]])
get_mappings <- function(aes) {
  list(field = rlang::get_expr(aes)
  )
}



#' Get name of data-frame
#'
#' @param layer_data `data.frame` (we will get this from a layer)
#' @param int_data `list`, "library" of available data frames
#'   (returned by `data_int()`)
#'
#' @return `character` something like `"data-00"`
#' @noRd
#'
#' @examples
#' library(ggplot2)
#' p <- ggplot(data = iris)
#' p <- p + geom_point(aes(x = Petal.Width, y = Petal.Length))
#' dat <- data_int(p$data, p$layers)
#' get_data_name(p$layers[[1]]$data, dat)
#'
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







